import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { FetchConfig, ResponseData, ToastOptions } from './type'
import { showToast } from '@v/toast';

const defaultErrMsg = 'Network Error'
let toast: any = null
let pendingCount = 0

function incPendingRequest(options: ToastOptions) {
  if (pendingCount === 0) {
    toast = showToast(options)
  }
  pendingCount += 1
}

function decPendingRequest() {
  if (pendingCount > 0) {
    pendingCount -= 1
    if (pendingCount === 0 && toast) {
      toast.close()
    }
  }
}

export const axios = Axios.create({ baseURL: '', withCredentials: true, timeout: 10000 })

axios.interceptors.request.use(({ params = {}, headers = {}, ...rest }: AxiosRequestConfig): any => {
  // TODO: 添加额外的请求信息

  return {
    ...rest,
    params,
    headers
  }
})

// 通过 interceptors 为 error/response 添加辅助标记
axios.interceptors.request.use(undefined, (error) => {
  error[isRequestError] = true

  throw error
})

axios.interceptors.response.use(res => {
  (res as any)[isAxiosResponse] = true
  return res
}, (error) => {
  if(!error.request || !error.response) {
    error[isNetworkError] = true;
  } else {
    error[isResponseError] = true
  }
  throw error;
})

export async function fetch<R>(
  url: string,
  {
    errorMessageHandler,
    toastPending = false,
    toastError = true,
    method = 'get',
    ...axiosConfig
  }: FetchConfig = {}
) {

  const toastPendingOptions: ToastOptions | undefined = toastPending === true ?
    { type: 'mask',  once: true, duration: 0 }
    : typeof toastPending === 'object' ?
      { type: 'mask', once: true, duration: toastPending.duration ?? 0, ...toastPending }
      : undefined

  if (toastPendingOptions) {
    incPendingRequest(toastPendingOptions)
  }

  try {
    const data = handleResponseCommon(
      await axios.request<ResponseData<R>>({ ...axiosConfig, url, method }),
      { showError: !!toastError },
    )

    if (toastPendingOptions) {
      decPendingRequest();
    }
    
    return data;
  } catch (e: any) {
    if (toastPendingOptions) {
      decPendingRequest();
    }

    // error
    if(toastError) {
      let msg: string | undefined = ''
      
      if(isResponseException(e)) {
        const { retcode, message } = e?.data || {}
        msg = errorMessageHandler ? errorMessageHandler(retcode, message) : message
      } else if (e?.code === 'ERR_CANCELED') {
        msg = ''
      } else {
        msg = defaultErrMsg
      }

      const toastErrorOptions: ToastOptions | undefined = msg ? { message: msg, transparent: false, type: 'text' } : undefined

      if(toastErrorOptions) {
        showToast(toastErrorOptions)
      }
    }

    throw e
  }
}

export function isRetry(e: AxiosError | AxiosResponse<{ retcode: number; message: string; }>) {
  const axiosError = e as AxiosError
  
  // 断网(ERR NETWORK)+超时取消(ECONNABORTED)
  return axiosError?.isAxiosError && ['ERR_NETWORK', 'ECONNABORTED'].includes(axiosError?.code) && ((e as any)[isResponseError] || (e as any)[isNetworkError])
}

type MaybePromise<T> = T | Promise<T>;


function isPromise<T>(p: MaybePromise<T>): p is Promise<T> {
  return typeof (p as Promise<T>).then === 'function'
}

// 通过标记判断 error 是否为 retcode 不为 0 所抛出的错误，并为 error 添加类型提示
function isResponseException(error: any): error is AxiosResponse<{ retcode: number; message: string }> & { [needAttention]?: true } {
  return error[isAxiosResponse]
}

//通过标记判断 error 是否为 axios 所抛出的错误，并为 ResponseError 添加类型提示
export function isAxiosError(error: any): error is 
| { [isResponseError]: true; response: AxiosResponse<unknown>; [k: string]: unknown }
| { [isResponseError]?: false; response: undefined; [k: string]: unknown } {
  return error[isNetworkError] || error[isRequestError] || error[isResponseError]
}

// 处理 response 的通用逻辑 只有在retcode === 0 时返回 res.data.data, 否则抛出异常
export function handleResponseCommon<T>(response: AxiosResponse<ResponseData<T>>, options?: { showError?: boolean }): T;
export function handleResponseCommon<T>(response: Promise<AxiosResponse<ResponseData<T>>>, options?: { showError?: boolean }): Promise<T>;
export function handleResponseCommon<T>(responseOrPromise: MaybePromise<AxiosResponse<ResponseData<T>>>, { showError = false } = {}): T | Promise<T> { 
  if(isPromise(responseOrPromise)) {
    return responseOrPromise.then(res => handleResponseCommon(res))
  }

  const res = responseOrPromise
  if(res.data.retcode !== 0) {
    if(showError) {
      (res as any)[needAttention] = true
    }
    // 将 response 作为异常抛出以保留完整请求信息
    throw res
  }

  return res.data.data
}

export const needAttention = Symbol('needAttention');

/** 标记未成功发起 request 时产生的错误 */
export const isRequestError = Symbol('isRequestError');

/**标记成功发起 request 但请求未能成功收到响应 */
export const isNetworkError = Symbol('isNetworkError');

/**标记成功收到响应，但 http code 不为 2xx */
export const isResponseError = Symbol('isResponseError');

/**标记 axios response */
export const isAxiosResponse = Symbol('isAxiosResponse');

export default fetch

export { axios as axiosIns };
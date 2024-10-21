import type { AxiosRequestConfig } from 'axios'

export interface ResponseSuccess<T = unknown> {
  code: string;
  data: T;
  msg: string;
  success: boolean;
  traceId: string;
}

export interface ResponseError {
  errMsg: string;
  resultCode: number;
}

export interface ResponseData<T = unknown> {
  retcode: number;
  data: T;
  message?: string;
}

export interface FetchOptions {
  toastPending?: boolean | ToastOptions;
  toastError?: boolean | Omit<ToastOptions, 'message'>;
  errorMessageHandler?: (resultCode: number, errMsg: string) => string | undefined;
}

export type FetchConfig = FetchOptions & Omit<AxiosRequestConfig, 'url'>

export interface ToastOptions {
  type?: 'text' | 'loading' | 'mask';
  message?: string;
  duration?: number;
  position?: 'top' | 'middle' | 'bottom';
  forbidClick?: boolean;
  transparent?: boolean;
  once?: boolean;
}
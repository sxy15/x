import { getCurrentInstance } from 'vue'
import { extend } from '@xh5/utils'

export function useExpose<T>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    extend(instance.proxy as object, apis)
  }
}

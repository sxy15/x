export const { isArray } = Array

export const isBrowser = typeof window !== 'undefined'

export const isWindow = (val: unknown): val is Window => val === window

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNil = (val: unknown): val is null | undefined => val === null || val === undefined

export const isNumber = (val: unknown): val is number => typeof val === 'number'

// eslint-disable-next-line
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'

export const isPlainObject = (val: unknown): val is Record<any, any> =>
  Object.prototype.toString.call(val) === '[object Object]'

export const isURL = (val: string | undefined | null): boolean => {
  if (!val) return false
  return /^(http|https):\/\/[^ "]+$/.test(val)
}

export const isEmpty = (val: unknown): boolean => (
    val === undefined ||
    val === null ||
    val === '' ||
    (isArray(val) && val.length === 0) ||
    (isObject(val) && Object.keys(val).length === 0)
  )

export const supportTouch = (): boolean => isBrowser && 'ontouchstart' in window

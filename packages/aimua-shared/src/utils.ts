export const { isArray } = Array

export const isBrowser = typeof window !== 'undefined'

export const isWindow = (val: unknown): val is Window => val === window

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isNil = (val: unknown): val is null | undefined => val === null || val === undefined

export const { isArray } = Array

export const isBrowser = typeof window !== 'undefined'

export const isWindow = (val: unknown): val is Window => val === window

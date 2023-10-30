import { isArray } from './utils.js'

export const uniq = (arr: any[]) => [...new Set(arr)]

export const normalizeToArray = <T>(value: T | T[]) => (isArray(value) ? value : [value])

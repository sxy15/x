import { isBoolean, isNil, isString } from './utils.js'

export const toNumber = (val: number | string | boolean | undefined | null): number => {
  if (isNil(val)) return 0

  if (isString(val)) {
    const num = parseFloat(val)
    return isNaN(num) ? 0 : num
  }

  if (isBoolean(val)) {
    return Number(val)
  }

  return val
}

/**
 * clamp: clamp value between min and max
 * @param val
 * @param min
 * @param max
 * @returns
 */
export const clamp = (val: number, min: number, max: number): number => Math.min(Math.max(val, min), max)

export const clampArrayRange = (index: number, arr: Array<unknown>) => clamp(index, 0, arr.length - 1)

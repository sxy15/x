import { isArray } from './utils.js'

/**
 * uniq: remove duplicate items in array
 * @param arr
 * @returns array without duplicate items
 */
export const uniq = (arr: any[]) => [...new Set(arr)]

/**
 * normalizeToArray: convert value to array
 * @param value
 * @returns array
 */
export const normalizeToArray = <T>(value: T | T[]) => (isArray(value) ? value : [value])

/**
 * removeItem: remove item from array
 * @param arr
 * @param item
 * @returns  array containing remove item
 */
export const removeItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.length) {
    const idx: number = arr.indexOf(item)

    if (idx !== -1) {
      return arr.splice(idx, 1)
    }
  }
}

/**
 * toggleItem: toggle item in array
 * @param arr
 * @param item
 */
export const toggleItem = (arr: Array<unknown>, item: unknown) => {
  if (arr.includes(item)) {
    removeItem(arr, item)
  } else {
    arr.push(item)
  }
}

/**
 * find: find item in array
 * @param arr
 * @param callback
 * @param from
 * @returns [item, index]
 */
export const find = <T>(
  arr: Array<T>,
  callback: (item: T, index: number, arr: Array<T>) => boolean,
  from: 'start' | 'end' = 'start',
): [T, number] | [null, -1] => {
  let i = from === 'start' ? 0 : arr.length - 1

  while (i >= 0 && i <= arr.length - 1) {
    const item = arr[i]

    if (callback(item, i, arr)) {
      return [item, i]
    }

    i += from === 'start' ? 1 : -1
  }

  return [null, -1]
}

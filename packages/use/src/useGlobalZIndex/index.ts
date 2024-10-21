import { isDef } from '@v/utils'

let zIndex = 100

export function useGlobalZIndex(num?: number): number {
  if (isDef(num)) {
    zIndex = num
  } else {
    zIndex += 1
  }

  return zIndex
}
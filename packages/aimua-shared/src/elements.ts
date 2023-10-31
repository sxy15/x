import { isBrowser } from './utils'

export const getGlobalThis = () => {
  if (typeof globalThis !== undefined) {
    return globalThis
  }

  if (isBrowser) {
    return window
  }

  return typeof global !== undefined ? global : self
}

export const requestAnimationFrame = (fn: FrameRequestCallback): number => {
  const globalThis = getGlobalThis()

  return globalThis.requestAnimationFrame ? globalThis.requestAnimationFrame(fn) : globalThis.setTimeout(fn)
}

export const cancelAnimationFrame = (handle: number) => {
  const globalThis = getGlobalThis()

  globalThis.cancelAnimationFrame ? globalThis.cancelAnimationFrame(handle) : globalThis.clearTimeout(handle)
}

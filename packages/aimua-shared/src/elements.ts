import { isBrowser, isWindow } from './utils.js'

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

export const raf = (fn: FrameRequestCallback): number => isBrowser ? requestAnimationFrame(fn) : -1

export const cancelRaf = (handle: number) => {
  if (isBrowser) {
    cancelAnimationFrame(handle)
  }
}

export function doubleRaf(fn: FrameRequestCallback): void {
  raf(() => raf(fn))
}

export const getStyle = (ele: Element) => window.getComputedStyle(ele)

export const getRect = (ele: Element | Window): DOMRect => {
  if (isWindow(ele)) {
    const width = ele.innerWidth
    const height = ele.innerHeight
    const rect = {
      x: 0,
      y: 0,
      width,
      height,
      top: 0,
      left: 0,
      bottom: height,
      right: width,
    }

    return {
      ...rect,
      toJSON: () => rect,
    }
  }

  return ele.getBoundingClientRect()
}

export const inViewport = (ele: Element) => {
  const rect = getRect(ele)
  const { top, bottom, left, right } = rect
  const { innerHeight, innerWidth } = window

  const xInView = left < innerWidth && right > 0
  const yInView = top < innerHeight && bottom > 0

  return xInView && yInView
}

export const toDataURL = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      resolve(fileReader.result as string)
    }

    fileReader.onerror = () => {
      reject(fileReader.error)
    }

    fileReader.readAsDataURL(file)
  })

export const preventDefault = (e: Event) => {
  if (e.cancelable === false) {
    return
  }

  e.preventDefault()
}

export const getScrollTop = (ele: Element | Window): number => {
  const top = 'scrollTop' in ele ? ele.scrollTop : ele.scrollY

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

export const setScrollTop = (ele: Element | Window) => {
  const left = 'scrollLeft' in ele ? ele.scrollLeft : ele.scrollX

  return Math.max(left, 0)
}

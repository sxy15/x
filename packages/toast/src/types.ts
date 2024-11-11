import { Numeric } from '@xh5/utils'
import type { ComponentPublicInstance } from 'vue'

export type ToastType = 'text' | 'loading' | 'mask'

export type ToastPosition = 'top' | 'middle' | 'bottom'

export type IsOnce = symbol

export type ToastOptions = {
  type?: ToastType
  once?: boolean
  message?: string
  duration?: number
  position?: ToastPosition
  forbidClick?: boolean
}

export type ToastWrapperInstance = ComponentPublicInstance<
  { message: Numeric },
  {
    close: () => void
    // eslint-disable-next-line
    open: (props: Record<string, any>) => void
    id: string
  }
>

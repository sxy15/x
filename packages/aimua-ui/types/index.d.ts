import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './locale'

declare module 'vue' {
  export interface GlobalComponents {}
}

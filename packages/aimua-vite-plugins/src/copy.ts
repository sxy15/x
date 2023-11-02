import type { Plugin } from 'vite'
import fse from 'fs-extra'

const { copySync, copyFileSync } = fse

export interface CopyPath {
  from: string
  to: string
  type: 'file' | 'folder'
}

export interface CopyOptions {
  paths: CopyPath[]
}

export function copy(options: CopyOptions): Plugin {
  return {
    name: 'vite-plugin-aimua-copy',
    buildStart() {
      options.paths.forEach((copyPath) => {
        try {
          ;(copyPath.type === 'folder' ? copySync : copyFileSync)(copyPath.from, copyPath.to)
        } catch (error: any) {
          this.warn(error)
        }
      })
    },
  }
}

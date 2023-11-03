// import markdownIt from 'markdown-it'
// import hljs from 'highlight.js'
// import { kebabCase } from "@aimua/shared"
// import { pinyin } from 'pinyin-pro'
import type { Plugin } from 'vite'

function markdownToVue(source: string, options: MarkdownOptions) {
  console.log(source)
  console.log(options)
}

export interface MarkdownOptions {
  style?: string
}

export function markdown(options: MarkdownOptions): Plugin {
  return {
    name: 'vite-plugin-aimua-markdown',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.md$/.test(id)) return

      try {
        markdownToVue(code, options)
      } catch (e: any) {
        this.error(e)
      }
    },
  }
}

import type { Plugin } from 'vitepress'
import fs from 'node:fs'
import markdownit from 'markdown-it'
import hljs from 'highlight.js'

interface PreviewOptions {
  root?: string
}

const md = markdownit({
  html: false,
  breaks: false,
  langPrefix: 'language-',
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
  },
})

const isMd = (id: string) => id.endsWith('.md')

const getPathId = (id: string) => {
  const _id = id.match(/\/([^\/]+)\.md$/)?.[1]
  return _id?.replace(/\//g, '-')
}

function encodeSource(source: string): string {
  return btoa(unescape(encodeURIComponent(source)))
}

function formatComponentName(name: string): string {
  return name.replace(/-/g, '').replace(/\b\w/g, (char) => char.toUpperCase())
}

export function vuePreviewPlugin(options: PreviewOptions = {}): Plugin {
  return {
    name: 'vitepress-plugin-vue-preview',

    async load(id) {
      if (!isMd(id)) return

      let result = ''
      /**
       *  ::: title:基础用法
       *  overlay-base
       *  :::
       *  如何写一个正则匹配出 title: 基础用法  component: overlay-base？
       */

      const componentREG = /:::\s*(title:([^\n]+)\s*)?\n\s*((\w|-)+)\s*:::/g
      try {
        let code = fs.readFileSync(id, 'utf-8')
        let match
        let matches: string[] = []
        let scripts: Set<string | undefined> = new Set([])
        let components: string[] = []
        while ((match = componentREG.exec(code)) !== null) {
          const [fullMatch, _, title = '', componentName] = match
          const _id = getPathId(id)
          const path = `${options.root}/${_id}/example/${componentName}.vue`
          const name = formatComponentName(componentName)

          matches.push(fullMatch)
          scripts.add(`import ${name} from '${path}';`)

          const resolvedPath = await this.resolve(path)
          let source = ''
          let hlSource = '' // 高亮后的source
          if (resolvedPath?.id) {
            source = fs.readFileSync(resolvedPath!.id, 'utf-8')
            hlSource = md.render('```ts\n' + source + '\n```')
          }
          components.push(
            `<preview-wrapper title="${title}" source="${encodeSource(source)}" hlSource="${encodeSource(hlSource)}"><${name} /></preview-wrapper>`,
          )
        }

        result = code
        matches.forEach((item, i) => {
          let content =
            i === 0
              ? `<script setup lang="ts">
            ${Array.from(scripts).join('\n')}</script>\n${components[i]}`
              : `${components[i]}`

          result = result.replace(item, content)
        })
      } catch (error) {}

      return result
    },
  }
}

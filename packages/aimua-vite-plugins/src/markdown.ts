// import markdownIt from 'markdown-it'
// import hljs from 'highlight.js'
import { kebabCase } from '@aimua/shared'
// import { pinyin } from 'pinyin-pro'
import type { Plugin } from 'vite'

function extractComponents(source: string) {
  const componentRE = /import (.+) from ['"].+['"]/
  const importRE = /import .+ from ['"].+['"]/
  const vueRE = /```vue((.|\n)*?)```/g
  const components: string[] = []
  const imports: string[] = []

  source = source.replace(vueRE, (match, p1) => {
    const partImport = p1.match(importRE)

    const partComponents = partImport?.map((importer: string) => {
      importer = importer.replace(/(\n|\r)/g, '')
      const component = importer.replace(componentRE, '$1')
      !imports.includes(importer) && imports.push(importer)
      !components.includes(component) && components.push(component)

      return `<${kebabCase(component)} />`
    })

    return partComponents ? `<div class="aimua-component-preview">${partComponents.join('\n')}</div>` : ''
  })

  return {
    source,
    imports,
    components,
  }
}

function markdownToVue(source: string, options: MarkdownOptions) {
  const { source: vueSource, imports, components } = extractComponents(source)

  console.log(vueSource, imports, components, options)
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

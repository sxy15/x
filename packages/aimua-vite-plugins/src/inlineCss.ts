import type { Plugin } from 'vite'
import fse from 'fs-extra'

const { pathExistsSync, writeFileSync, readFileSync, removeSync } = fse

export interface InlineCssOptions {
  cssFile: string
  jsFile: string
  end?(): void
}

export function inlineCss(options: InlineCssOptions): Plugin {
  return {
    name: 'vite-plugin-aimua-inline-css',
    apply: 'build',
    closeBundle() {
      const { cssFile, jsFile, end } = options

      if (!pathExistsSync(cssFile)) {
        this.warn('cssFile not found')
        end?.()
        return
      }

      if (!pathExistsSync(jsFile)) {
        this.warn('jsFile not found')
        end?.()
        return
      }

      const cssCode = readFileSync(cssFile, 'utf-8')
      const jsCode = readFileSync(jsFile, 'utf-8')
      const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
            style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
            var head=document.querySelector('head');head.appendChild(style)})();`

      writeFileSync(jsFile, `${injectCode}\n${jsCode}`)
      removeSync(cssFile)
      end?.()
    },
  }
}

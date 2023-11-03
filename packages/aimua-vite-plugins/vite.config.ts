import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { copy } from './src/copy'
import { html } from './src/html'
// import { inlineCss } from './src/inlineCss'
import { markdown } from './src/markdown'

export default defineConfig({
  root: './example',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    copy({
      paths: [
        {
          from: resolve(__dirname, './example/effect'),
          to: resolve(__dirname, './example/copy/effect'),
          type: 'folder',
        },
        {
          from: resolve(__dirname, './example/main.ts'),
          to: resolve(__dirname, './example/copy/main.ts'),
          type: 'file',
        },
      ],
    }),
    html({
      data: {
        title: 'Hello Vite',
      },
    }),
    markdown({
      style: '',
    }),
    // inlineCss({
    //     cssFile: resolve(__dirname, './example/inject.css'),
    //     jsFile: resolve(__dirname, './example/main.ts'),
    //     end() {
    //         console.log('end');
    //     }
    // })
  ],
})

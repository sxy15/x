import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import eslint from 'vite-plugin-eslint' 
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aimua",
  description: "组件库学习",
  outDir: fileURLToPath(new URL('./docs-dist', import.meta.url)),
  vite: {
    plugins: [vueJsx(), eslint()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  appearance: false,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Intro', link: '/intro' },
          { text: 'Button', link: '/components/button' },
          { text: 'Collapse', link: '/components/collapse' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sxy15/aimua' }
    ]
  }
})

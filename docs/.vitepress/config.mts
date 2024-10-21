import { defineConfig } from 'vitepress'
import viteVueJsx from '@vitejs/plugin-vue-jsx'
import { vuePreviewPlugin } from './plugins/preview/index'
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vui",
  description: "通用的组件&工具库",
  base: '/',
  outDir: path.resolve(__dirname, './docs-dist'),
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/', },
      { text: '组件', link: '/components/index' }
    ],

    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: 'Overlay', link: '/components/overlay' },
          { text: 'Modal', link: '/components/modal' },
          { text: 'Toast', link: '/components/toast' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../packages')
      },
      extensions: ['.js', '.ts', '.tsx', '.vue', '.json']
    },
    plugins: [
      viteVueJsx(),
      vuePreviewPlugin({
        root: path.resolve(__dirname, '../../packages')
      })
    ]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {}
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aimua-ui",
  description: "组件库学习",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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

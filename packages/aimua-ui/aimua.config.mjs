import { defineConfig } from '@aimua/cli'

export default defineConfig({
  useMobile: true,
  analysis: {
    baidu: 'https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa',
  },
  pc: {
    header: {
      version: {
        current: 'Vue 3',
      },
      playground:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://varlet.gitee.io/varlet-ui-playground',
    },
    menu: [
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
    ],
  },
  highlight: {
    style: null,
  },
  copy: [],
  directives: ['ripple', 'lazy', 'hover'],
})

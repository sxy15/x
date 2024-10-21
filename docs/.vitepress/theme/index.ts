import DefaultTheme from 'vitepress/theme'
import PreviewWrapper from '../plugins/preview/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp(options: any) {
    const { app } = options
    app.component('preview-wrapper', PreviewWrapper)
  }
}

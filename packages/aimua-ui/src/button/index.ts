import type { App } from 'vue'
import Button from './Button.vue'
import './style.css'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
export * from './types'

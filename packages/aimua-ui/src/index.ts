import type { App } from 'vue'

import Button from './button'
import Collapse, { CollapseItem } from './collapse'

import './styles/index.css'

const components = [Button, Collapse, CollapseItem]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { Button, Collapse, CollapseItem, install }

export default install

import type { App } from 'vue'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
import './style.css'

Collapse.install = (app: App) => {
  app.component(Collapse.name, Collapse)
}

CollapseItem.install = (app: App) => {
  app.component(CollapseItem.name, CollapseItem)
}

export default Collapse
export { Collapse, CollapseItem }
export * from './types'

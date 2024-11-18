import { render, createVNode, type App, type Component, h, watchEffect, ref } from 'vue'
import { useLockBodyScroll } from '@xh5/use'
import Modal from './Modal'

let _app: App
const _cache: Map<string, any> = new Map()
const _comps: Set<string> = new Set()

export function showModal(
  component: Component,
  options: {
    id?: string
    once?: boolean
    lockScroll?: boolean
    props?: Record<string, any>
    methods?: Record<string, any>
    [key: string]: any
  } = {},
) {
  const { props, methods = {}, ...rest } = options || {}
  const { id, once = true, lockScroll = true } = rest
  const { onClose } = methods
  const visible = ref(true)

  // 连续多次调用同一个组件，只显示一次
  const _id = id || component.name
  if (_comps.has(_id)) {
    return
  } else {
    _comps.add(_id)
  }

  if (id && !once && _cache.has(id)) {
    _cache.get(id)?.show()
    return
  }

  function close() {
    remove()
    _comps.delete(_id)
    onClose?.()
  }

  const vm = createVNode(
    h(Modal, { show: visible.value }, () => h(component, { ...props, ...methods, onClose: close })),
  )
  const el = document.createElement('div')
  document.body.appendChild(el)

  if (_app) {
    vm.appContext = _app._context
  }

  render(vm, el)

  let unlock = null

  watchEffect(() => {
    vm.component.props.show = visible.value
    if (visible.value) {
      unlock = lockScroll ? useLockBodyScroll() : null
    } else {
      unlock?.()
    }
  })

  let timer = null
  const remove = () => {
    visible.value = false
    if (once) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        render(null, el)
        document.body.removeChild(el)
      }, 300)
    }
  }

  const show = () => {
    visible.value = true
  }

  if (id && !once) {
    _cache.set(id, { show })
  }

  return {
    show,
    remove,
  }
}

export function createModalInstance(app: App) {
  _app = app

  return showModal
}

export default {
  install(app: App) {
    app.config.globalProperties.$modal = createModalInstance(app)
  },
}

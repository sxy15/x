import { createNamespace } from '@xh5/utils'
import { defineComponent, ExtractPropTypes } from 'vue'
import Overlay from '@xh5/overlay'

const [name, bem] = createNamespace('modal')

const modalProps = {
  show: Boolean,
}

export type ModalProps = ExtractPropTypes<typeof modalProps>

export default defineComponent({
  name,

  props: modalProps,

  setup(props, { slots }) {
    const renderModal = () => {
      return <div class={bem()}>{slots['default']?.()}</div>
    }

    return () => <Overlay show={props.show} v-slots={{ default: renderModal }}></Overlay>
  },
})

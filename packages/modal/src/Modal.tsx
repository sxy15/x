import { createNamespace } from '@v/utils'
import { defineComponent, ExtractPropTypes } from 'vue'
import Overlay from '@v/overlay'

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
      return (
        <div class={bem()}>
          {slots['default']?.()}
        </div>
      )
    }

    return () => (
      <Overlay show={props.show} v-slots={{ default: renderModal }}></Overlay>
    )
  }
})
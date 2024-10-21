import { defineComponent, Transition, type CSSProperties, type PropType, type ExtractPropTypes } from "vue";
import { useLazyRender } from "@v/use";
import { createNamespace, truthProp, numericProp, extend, getZIndexStyle, unknownProp, isDef } from "@v/utils";

const [name, bem] = createNamespace('overlay')

export const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lazyRender: truthProp,
  forbidClick: truthProp,
  customStyle: Object as PropType<CSSProperties>,
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>

export default defineComponent({
  name,

  props: overlayProps,

  setup(props, { slots }) {
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender)

    const renderOverlay = lazyRender(() => {
      const style: CSSProperties = extend(getZIndexStyle(props.zIndex), props.customStyle)

      if(isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`
      }
      
      return (
        <div
          v-show={props.show}
          style={style}
          class={[bem([props.forbidClick ? 'forbid' : '']), props.className]}
        >
          {slots.default?.()}
        </div>
      )
    })

    return () => (
      <Transition v-slots={{ default: renderOverlay }} name="v-fade" appear />
    )
  }
})
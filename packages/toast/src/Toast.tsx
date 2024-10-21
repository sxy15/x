import { createNamespace, isDef, makeNumberProp, makeStringProp, numericProp, pick } from "@v/utils";
import { defineComponent, watch } from "vue";
import { ToastPosition, ToastType } from "./types";
import Loading from "./loading-svg";
import Overlay from '@v/overlay';

const [name, bem] = createNamespace('toast');

const overlayInheritProps = [
  'show',
  'zIndex',
  'forbidClick'
] as const;

export const toastProps = {
  show: Boolean,
  type: makeStringProp<ToastType>('text'),
  message: numericProp,
  duration: makeNumberProp(2000),
  position: makeStringProp<ToastPosition>('middle'),
  forbidClick: Boolean,
  zIndex: numericProp,
}

export default defineComponent({
  name,

  props: toastProps,

  emits: ['update:show', 'closed'],

  setup(props, { emit }) {
    let timer: ReturnType<typeof setTimeout>;

    const clearTimer = () => clearTimeout(timer);

    const updateShow = (show: boolean) => emit('update:show', show);

    const renderIcon = () => {
      const { type } = props;
      const isLoading = type === 'loading';

      if (isLoading) {
        return (
          <div class={bem('loading')}>
            <Loading />
          </div>
        )
      }
    }

    const renderMessage = () => {
      const { message } = props;

      if (isDef(message) && message !== '') {
        return (
          <div class={bem('text')} innerHTML={String(message)}></div>
        )
      }
    }

    watch(
      () => [props.show, props.type, props.message, props.duration],
      () => {
        clearTimer();
        if (props.show && props.duration > 0) {
          timer = setTimeout(() => {
            updateShow(false);
          }, props.duration);
        }
      },
    );

    return () => {
      const isMask = props.type === 'mask';
      const transparentClass = isMask ? 'transparent' : '';
      const overlayDuration = isMask ? 0 : 0.3;

      return (
        <Overlay
          duration={overlayDuration}
          customStyle={{ background: 'transparent' }}
          {...pick(props, overlayInheritProps)}
        >
          <div class={bem([props.position, props.type, transparentClass])}>
            {renderIcon()}
            {renderMessage()}
          </div>
        </Overlay>
      )
    }
  }
})
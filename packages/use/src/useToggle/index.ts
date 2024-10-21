import { extend } from "@v/utils";
import { reactive } from "vue";
import { useExpose } from "../useExpose";

export function useToggle() {
  const state = reactive<{
    show: boolean;
    [key: string]: any;
  }>({
    show: false
  });

  const toggle = (show: boolean) => {
    state.show = show;
  }

  const open = (props: Record<string, any>) => {
    extend(state, props, { transitionAppear: true });
    toggle(true);
  }

  const close = () => toggle(false);

  useExpose({ open, close, toggle });

  return {
    open,
    close,
    toggle,
    state
  }
}
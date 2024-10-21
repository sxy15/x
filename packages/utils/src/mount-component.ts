import { createApp, reactive, type Component } from "vue";
import { extend } from "./basic";
import { useExpose } from "@v/use";

export function usePopupState() {
  const state = reactive<{
    show: boolean;
    [key: string]: any;
  }>({
    show: false
  })

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
    state,
    open,
    close,
    toggle
  }
}

export function mountComponent(RootComponent: Component) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount(fn?: () => void) {
      app.unmount();
      document.body.removeChild(root);
      fn?.();
    }
  }
}

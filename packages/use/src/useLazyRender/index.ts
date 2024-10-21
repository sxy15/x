import { ref, watch, type WatchSource } from "vue";

export function useLazyRender(show: WatchSource<boolean | undefined>) {
  const initial = ref(false);

  watch(show, (nv) => {
    if (nv) {
      initial.value = nv
    }
  },
    { immediate: true }
  );

  return (render: () => JSX.Element) => () => (initial.value ? render() : null);
}

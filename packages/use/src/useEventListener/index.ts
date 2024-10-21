import { Ref, isRef, onDeactivated, onUnmounted, unref, watch, type WatchStopHandle } from "vue";
import { onMountedOrActivated } from "../onMountedOrActivated";
import { isBrowser } from "../utils";

type TargetRef = EventTarget | Ref<EventTarget | undefined>;

export type UseEventListenerOptions = {
  target?: TargetRef;
  capture?: boolean;
  passive?: boolean;
}

export function useEventListener<K extends keyof DocumentEventMap>(
  type: K, 
  listener: (event: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions
): () => void;
export function useEventListener(
  type: string,
  listener: EventListener,
  options?: UseEventListenerOptions,
): () => void;
export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  if(!isBrowser) {
    return
  }

  const { target = window, capture = false, passive = false } = options

  let cleaned = false;
  let attached: boolean;

  const add = (target?: TargetRef) => {
    if(cleaned) {
      return
    }
    const element = unref(target)

    if(element && !attached) {
      element.addEventListener(type, listener, { capture, passive })
      attached = true
    }
  }

  const remove = (target?: TargetRef) => {
    if(cleaned) {
      return
    }
    const element = unref(target)

    if(element && attached) {
      element.removeEventListener(type, listener, { capture })
      attached = false
    }
  }

  onUnmounted(() => remove(target))
  onDeactivated(() => remove(target))
  onMountedOrActivated(() => add(target))

  let stopWatch: WatchStopHandle

  if(isRef(target)) {
    stopWatch = watch(target, (val, oldVal) => {
      remove(oldVal)
      add(val)
    })
  }

  return () => {
    stopWatch?.()
    remove(target)
    cleaned = true
  }
}
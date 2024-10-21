import { ref, type Ref } from 'vue'

export function useCopy(code: string): {
  copyState: Ref<boolean>
  copyCode: () => void
} {
  const copyState = ref(false)

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    copyState.value = true

    setTimeout(() => {
      copyState.value = false
    }, 2000)
  }

  return {
    copyState,
    copyCode
  }
}
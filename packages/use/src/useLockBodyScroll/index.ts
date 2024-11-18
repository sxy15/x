let originalStyle = ''
let globalLockCount = 0

export function useLockBodyScroll() {
  if (globalLockCount === 0) {
    originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
  }
  globalLockCount++

  return () => {
    globalLockCount--
    if (globalLockCount === 0) {
      document.body.style.overflow = originalStyle
      originalStyle = ''
    }
  }
}

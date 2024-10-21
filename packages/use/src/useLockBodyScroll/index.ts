export function useLockBodyScroll() {
  const originalStyle = window.getComputedStyle(document.body).overflow;

  document.body.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = originalStyle;
  };
}
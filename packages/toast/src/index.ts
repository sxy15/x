import { withInstall } from '@xh5/utils'
import _Toast, { toastProps } from './Toast'
import { showToast, closeToast } from './function-call'
import './index.scss'

const Toast = withInstall(_Toast)
export default Toast

export { Toast, toastProps, showToast, closeToast }

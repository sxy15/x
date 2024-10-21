const ua = navigator.userAgent
const REG_ANDROID = /\bAndroid ([\d.]+)/;
const REG_IOS = /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/;
const REG_APP = /AppVersion\/\d*\.\d*\.\d*(\.\d*)?/;
const REG_VERSION = /AppVersion\/((\d*)\.(\d*)\.(\d*)(\.\d*)?)/;
const REG_MOBILE = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
const REG_CHAT = /MicroMessenger/i;

export const IS_APP = REG_APP.test(ua)
export const IS_ANDROID = REG_ANDROID.test(ua)
export const IS_IOS = REG_IOS.test(ua)
export const IS_MOBILE = REG_MOBILE.test(ua)
export const IS_CHAT = REG_CHAT.test(ua)
export const APP_VERSION = ua.match(REG_VERSION)?.[1]
export const isChatMP = () => window.__wxjs_environment === 'miniprogram'

import { Numeric } from './basic'
import { type CSSProperties } from 'vue';

const camelizeRE = /-(\w)/g;
export const camelize = (str: string): string =>{
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function getZIndexStyle(zIndex?: Numeric) {
  const style: CSSProperties = {};
  if (zIndex !== undefined) {
    style.zIndex = +zIndex;
  }
  return style;
}

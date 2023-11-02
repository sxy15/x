export const camelize = (str: string): string => str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())

export const bigCamelize = (str: string): string => camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())

export const kebabCase = (str: string): string => str.replace(/([A-Z])/g, '-$1').toLowerCase()

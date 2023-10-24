import fse from 'fs-extra'
import { AIMUA_CONFIG, SITE_CONFIG } from '../shared/constant.js'
import { pathToFileURL } from 'node:url'
import { mergeWith, isArray } from 'lodash-es'
import { outputFileSyncOnChange } from '../shared/fsUtils.js'

const { pathExistsSync, statSync } = fse

export interface CopyPath {
  from: string
  to: string
  type: 'folder' | 'file'
}

export interface CopyOptions {
  paths: CopyPath[]
}

export interface AimuaConfigIcons {
  /**
   * @default `aimua-icons`
   * Font name.
   */
  name?: string
  /**
   * @default `aimua-icon`
   * Font name prefix.
   */
  namespace?: string
  /**
   * @default `true`
   * Output base64
   */
  base64?: boolean
  publicPath?: string
  fontFamilyClassName?: string
  fontWeight?: string
  fontStyle?: string
}

export interface AimuaConfigEsbuild {
  target?: string | string[]
}

export interface AimuaConfig {
  /**
   * @default `Aimua`
   * UI library name.
   */
  name?: string
  /**
   * @default `aimua`
   * Component name prefix
   */
  namespace?: string
  /**
   * @default `localhost`
   * Local dev server host
   */
  host?: string
  /**
   * @default `8080`
   * Local dev server port
   */
  port?: number
  title?: string
  logo?: string
  themeKey?: string
  defaultLanguage?: 'zh-CN' | 'en-US'
  /**
   * @default `false`
   * Show mobile component on the right.
   */
  useMobile?: boolean
  lightTheme?: Record<string, string>
  darkTheme?: Record<string, string>
  highlight?: { style: string }
  analysis?: { baidu: string }
  pc?: Record<string, any>
  mobile?: Record<string, any>
  copy?: CopyOptions['paths']
  icons?: AimuaConfigIcons
  esbuild?: AimuaConfigEsbuild
  /**
   * @default `[]`
   * Directive folder name for component library.
   */
  directives?: string[]
}

export function defineConfig(config: AimuaConfig) {
  return config
}

export function mergeStrategy(value: any, srcValue: any, key: string) {
  const keys = ['features', 'members']

  if (keys.includes(key) && isArray(srcValue)) {
    return srcValue
  }
}

export async function getAimuaConfig(emit = false): Promise<Required<AimuaConfig>> {
  const defaultConfig = (await import('./aimua.default.config.js')).default

  const config: any = pathExistsSync(AIMUA_CONFIG)
    ? (await import(`${pathToFileURL(AIMUA_CONFIG).href}?t=${statSync(AIMUA_CONFIG).mtimeMs}`)).default
    : {}

  const mergedConfig = mergeWith(defaultConfig, config, mergeStrategy)

  if (emit) {
    const source = JSON.stringify(mergedConfig, null, 2)
    outputFileSyncOnChange(SITE_CONFIG, source)
  }

  return mergedConfig
}

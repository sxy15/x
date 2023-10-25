import { resolve } from 'path'
import { getDirname } from './fsUtils.js'

export const dirname = getDirname(import.meta.url) // shared

export const CWD = process.cwd() // dev -> aimua-ui
export const SRC_DIR = resolve(CWD, 'src')
export const AIMUA_CONFIG = resolve(CWD, 'aimua.config.mjs')
export const CLI_PACKAGE_JSON = resolve(dirname, '../../../package.json')
export const EXAMPLE_DIR_NAME = 'example'

// site
export const SITE_CONFIG = resolve(CWD, '.aimua/site.config.json')
export const SITE_MOBILE_ROUTES = resolve(CWD, '.aimua/mobile.routes.ts')

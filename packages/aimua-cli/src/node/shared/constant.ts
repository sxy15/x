import { resolve } from 'path'
import { getDirname } from './fsUtils.js'

export const dirname = getDirname(import.meta.url) // shared

export const CWD = process.cwd() // dev -> aimua-ui
export const SRC_DIR = resolve(CWD, 'src')
export const AIMUA_CONFIG = resolve(CWD, 'aimua.config.mjs')
export const ROOT_DOCS_DIR = resolve(CWD, 'docs')
export const ROOT_PAGES_DIR = resolve(CWD, 'pages')

export const CLI_PACKAGE_JSON = resolve(dirname, '../../../package.json')
export const EXAMPLE_DIR_NAME = 'example'
export const DOCS_DIR_NAME = 'docs'
export const LOCALE_DIR_NAME = 'locale'

// site
export const SITE = resolve(dirname, '../../../site')
export const SITE_PC_DIR = resolve(CWD, '.aimua/site/pc')
export const SITE_DIR = resolve(CWD, '.aimua/site')
export const SITE_PC_ROUTES = resolve(CWD, '.aimua/pc.routes.ts')
export const SITE_CONFIG = resolve(CWD, '.aimua/site.config.json')
export const SITE_MOBILE_ROUTES = resolve(CWD, '.aimua/mobile.routes.ts')

import fse from 'fs-extra'
import { fileURLToPath } from 'node:url'
import { CLI_PACKAGE_JSON } from './constant.js'

const { readJsonSync } = fse

export function getDirname(url: string) {
  return fileURLToPath(new URL('.', url))
}

export function getCliVersion() {
  return readJsonSync(CLI_PACKAGE_JSON).version
}

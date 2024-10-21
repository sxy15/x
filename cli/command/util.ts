import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import chalk from 'chalk'

// 相对于dist/command/util.js
export const CLI_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../')

export const EXCLUDE_DIR = ['style']

export const log = {
  success: (msg: string) => {
    console.log(chalk.green(msg))
  },
  error: (msg: string) => {
    console.log(chalk.red(msg))
  },
  info: (msg: string) => {
    console.log(chalk.blue(msg))
  },
}

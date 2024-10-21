#!/usr/bin/env node
import { resolve } from 'node:path'
import fse from 'fs-extra'
import { CLI_ROOT } from './command/util.js'
import { Command } from 'commander'

const { readJsonSync } = fse

const packagePath = resolve(CLI_ROOT, './package.json')
const packageJson = readJsonSync(packagePath, { encoding: 'utf-8' })

const program = new Command('vov')

program
  .version(packageJson.version)
  .usage('<command> [options]')

program
  .command('copy-style')
  .alias('cs')
  .description('复制样式文件')
  .action(async () => {
    const { copyStyle } = await import('./command/copy-style.js')
    return copyStyle()
  })

program.parse()

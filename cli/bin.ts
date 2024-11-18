#!/usr/bin/env node
import { resolve } from 'node:path'
import fse from 'fs-extra'
import { CLI_ROOT } from './command/util.js'
import { Command } from 'commander'

const { readJsonSync } = fse

const packagePath = resolve(CLI_ROOT, './package.json')
const packageJson = readJsonSync(packagePath, { encoding: 'utf-8' })

const program = new Command('xh5')

program.version(packageJson.version).usage('<command> [options]')

program
  .command('copy-style')
  .alias('cs')
  .description('复制样式文件')
  .action(async () => {
    const { copyStyle } = await import('./command/copy-style.js')
    return copyStyle()
  })

program
  .command('template')
  .alias('t')
  .option('-n, --packageName <packageName>', '项目名称')
  .option('-f, --framework <framework>', '模板类型')
  .description('创建模板项目')
  .addHelpText(
    'after',
    `
    Examples:
      $ xh5 template -n my-project -f vue-ts
      or
      $ xh5 template
  `,
  )
  .action(async (options) => {
    const { createTemplate } = await import('./command/template.js')
    return createTemplate(options)
  })

program.parse()

#!usr/bin/env node

import { Command } from 'commander'
import { getCliVersion } from './shared/fsUtils.js'

const program = new Command()

program.version(`aimua-cli ${getCliVersion()}`).usage('<command> [options]')

program
  .command('dev')
  .option('-f --force', 'force dep pre-optimization regardless of whether deps have changed')
  .option('-d --draft', 'start the service in draft mode')
  .description('run aimua development environment')
  .action(async (options) => {
    const { dev } = await import('./commands/dev.js')

    return dev(options)
  })

program.parse()

import fse from 'fs-extra'
import type { ViteDevServer } from 'vite'
import type { FSWatcher } from 'chokidar'
import { logger } from 'rslog'
import { SRC_DIR } from '../shared/constant.js'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'

const { ensureDirSync } = fse

interface DevCommandOptions {
  force?: boolean
  draft?: boolean
}

let server: ViteDevServer
let watcher: FSWatcher

export async function startServer(options: DevCommandOptions) {
  const isRestart = !!server

  logger.info(`${isRestart ? 'Restarting' : 'Starting'} dev server...`)

  // close all instances
  if (server) {
    await server.close()
  }
  if (watcher) {
    await watcher.close()
  }

  // build all config
  await buildSiteEntry(options.draft ?? false)
}

export async function dev(options: DevCommandOptions) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)

  await startServer(options)
}

import fse from 'fs-extra'
import { createServer, type ViteDevServer } from 'vite'
import chokidar, { FSWatcher } from 'chokidar'
import { merge } from 'lodash-es'
import { logger } from 'rslog'
import { AIMUA_CONFIG, SRC_DIR } from '../shared/constant.js'
import { buildSiteEntry } from '../compiler/compileSiteEntry.js'
import { getAimuaConfig } from '../config/aimua.config.js'
import { getDevConfig } from '../config/vite.config.js'

const { ensureDirSync, pathExistsSync } = fse

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
  const aimuaConfig = await getAimuaConfig()
  const devConfig = getDevConfig(aimuaConfig)
  const inlineConfig = merge(devConfig, options.force ? { optimizeDeps: { force: true } } : {})

  // create all instance
  server = await createServer(inlineConfig)
  await server.listen()
  server.printUrls()

  if (pathExistsSync(AIMUA_CONFIG)) {
    watcher = chokidar.watch(AIMUA_CONFIG)
    watcher.on('change', () => startServer(options))
  }

  logger.success(`\n${isRestart ? 'Res' : 'S'}tart successfully!!!`)

  if (options.draft) {
    logger.info('Server in draft mode!!!')
  }
}

export async function dev(options: DevCommandOptions) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)

  await startServer(options)
}

import fse from 'fs-extra'
import { SRC_DIR } from '../shared/constant.js'

const { ensureDirSync } = fse

interface DevCommandOptions {
  force?: boolean
  draft?: boolean
}

export async function startServer(options: DevCommandOptions) {
  console.log(options)
}

export async function dev(options: DevCommandOptions) {
  process.env.NODE_ENV = 'development'

  ensureDirSync(SRC_DIR)

  await startServer(options)
}

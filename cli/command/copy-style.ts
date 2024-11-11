// 识别packages下包的dist/index.css，复制到dist/style下，并且修改index.ts的import路径
import fse from 'fs-extra'
import { resolve } from 'node:path'
import { CLI_CWD, EXCLUDE_DIR, log } from './util.js'

const { readdirSync, copyFileSync, existsSync, writeFileSync } = fse

const styles = [`@use './css/_normalize.scss';`, `@use './css/_animation.scss';`]

export function copyStyle() {
  const packages = readdirSync(resolve(CLI_CWD, './packages'))
  const dirs: string[] = []
  //1. 过滤掉style目录
  packages.forEach((pkg) => {
    if (!EXCLUDE_DIR.includes(pkg)) {
      dirs.push(pkg)
    }
  })
  //2. 遍历packages下的所有目录，找到dist/index.css，复制到dist/style下
  const targetDir = resolve(CLI_CWD, `./packages/style/`)
  dirs.forEach((pkg) => {
    const stylePath = resolve(CLI_CWD, `./packages/${pkg}/dist/index.css`)
    if (existsSync(stylePath)) {
      copyFileSync(stylePath, resolve(targetDir, `./css/_${pkg}.css`))
    }
  })
  //3. 修改style中index.scss的import
  const stylePath = resolve(CLI_CWD, `./packages/style/index.scss`)
  if (existsSync(stylePath)) {
    const cssDir = resolve(CLI_CWD, `./packages/style/css`)
    const cssFiles = readdirSync(cssDir)
    const cssImports = cssFiles.map((file) => `@use './css/${file}';`)
    writeFileSync(stylePath, `${Array.from(new Set([...styles, ...cssImports])).join('\n')}`, 'utf-8')
  }

  // 4. log
  log.success('style copied')
}

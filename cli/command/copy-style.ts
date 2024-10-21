// 识别packages下包的dist/index.css，复制到dist/style下，并且修改index.ts的import路径
import fse from 'fs-extra'
import { resolve } from 'node:path'
import { CLI_ROOT, EXCLUDE_DIR, log } from './util.js'

const { readdirSync, copyFileSync, existsSync, writeFileSync } = fse

const styles = ['@import "./normalize.scss";', '@import "./css-variables.scss";', '@import "./animation.scss";']

export function copyStyle() {
  const packages = readdirSync(resolve(CLI_ROOT, '../packages'))
  let dirs: string[] = []
  //1. 过滤掉style目录
  packages.forEach(pkg => {
    if (!EXCLUDE_DIR.includes(pkg)) {
      dirs.push(pkg)
    }
  })
  //2. 遍历packages下的所有目录，找到dist/index.css，复制到dist/style下
  const targetDir = resolve(CLI_ROOT, `../packages/style/`)
  dirs.forEach(pkg => {
    const stylePath = resolve(CLI_ROOT, `../packages/${pkg}/dist/index.css`)
    if (existsSync(stylePath)) {
      copyFileSync(stylePath, resolve(targetDir, `./css/${pkg}.css`))
    }
  })
  //3. 修改style中index.scss的import
  const stylePath = resolve(CLI_ROOT, `../packages/style/index.scss`)
  if (existsSync(stylePath)) {
    const cssDir = resolve(CLI_ROOT, `../packages/style/css`)
    const cssFiles = readdirSync(cssDir)
    const cssImports = cssFiles.map(file => `@import './css/${file}';`)
    writeFileSync(stylePath, `${[ ...styles, ...cssImports].join('\n')}`,'utf-8')
  }

  // 4. log
  log.success('style copied')
}

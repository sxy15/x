import { logger } from 'rslog'
import execa from 'execa'
import inquirer from 'inquirer'
import semver from 'semver'
import glob from 'glob'
import fse, { writeFileSync } from 'fs-extra'
import { resolve } from 'node:path'
import { getVersion } from '../shared/fsUtils.js'
import { CWD } from '../shared/constant.js'
import { createSpinner } from 'nanospinner'
import { changelog } from './changelog.js'

const { readJSONSync } = fse
const { prompt } = inquirer

const releaseTypes = ['premajor', 'preminor', 'prepatch', 'major', 'minor', 'patch']

async function isWorkTreeEmpty() {
  const ret = await execa('git', ['status', '--porcelain'])
  return !ret.stdout
}

async function confirmRefs(remote = 'origin') {
  const { stdout } = await execa('git', ['remote', '-v'])
  const reg = new RegExp(`${remote}\t(.*) \\(push`)
  const repo = stdout.match(reg)?.[1]
  const { stdout: branch } = await execa('git', ['branch', '--show-current'])

  const name = 'Refs confirm'
  const ret = await prompt([
    {
      type: 'confirm',
      name,
      message: `Current refs ${repo}:refs/for/${branch}`,
    },
  ])

  return ret[name]
}

async function confirmRegistry() {
  const registry = (await execa('npm', ['config', 'get', 'registry'])).stdout
  const name = 'Registry confirm'
  const ret = await prompt([
    {
      name,
      type: 'confirm',
      message: `Current registry is: ${registry}`,
    },
  ])

  return ret[name]
}

async function confirmVersion(currentVersion: string, expectVersion: string) {
  const name = 'Version confirm'
  const ret = await prompt([
    {
      name,
      type: 'confirm',
      message: `All packages version ${currentVersion} -> ${expectVersion}:`,
    },
  ])

  return ret[name]
}

function updateVersion(version: string) {
  const packageJson = glob.sync('packages/*/package.json')
  packageJson.push('package.json')

  packageJson.forEach((path: string) => {
    const file = resolve(CWD, path)
    const config = readJSONSync(file)
    config.version = version
    writeFileSync(file, JSON.stringify(config, null, 2))
  })
}

async function getReleaseType() {
  const name = 'Please select release type'
  const ret = await prompt([
    {
      name,
      type: 'list',
      choices: releaseTypes,
    },
  ])

  return ret[name]
}

async function publish(preRelease: boolean) {
  const loading = createSpinner('Publishing all packages').start()
  const args = ['-r', 'publish', '--no-git-checks', '--access', 'public']

  preRelease && args.push('--tag', 'alpha')
  const ret = execa('pnpm', args)
  if (ret.stderr && (ret.stderr as any).includes('npm ERR!')) {
    throw new Error('\n' + ret.stderr)
  } else {
    loading.success({ text: 'Publishing all packages successfully!' })
    ret.stdout && logger.info(ret.stdout)
  }
}

async function pushGit(version: string, remote = 'origin') {
  const loading = createSpinner('Pushing to remote git repository').start()
  await execa('git', ['add', '.'])
  await execa('git', ['commit', '-m', `v${version}`])
  await execa('git', ['tag', `v${version}`])
  await execa('git', ['push', remote, `v${version}`])
  const ret = await execa('git', ['push'])
  loading.success({ text: 'Push remote repository successfully' })

  ret.stdout && logger.info(ret.stdout)
}

export interface ReleaseCommandOptions {
  remote?: string
  task?(): Promise<void>
}

export async function release(options: ReleaseCommandOptions) {
  try {
    const currentVersion = getVersion()

    if (!currentVersion) {
      logger.error('Your package is missing the version field')
      return
    }

    if (!(await isWorkTreeEmpty())) {
      logger.error('Your work tree is not clean. Please commit any pending changes.')
      return
    }

    if (!(await confirmRefs(options.remote))) {
      return
    }

    if (!(await confirmRegistry())) {
      return
    }

    const type = await getReleaseType()
    const isPreRelease = type.startsWith('pre')
    let expectVersion = semver.inc(currentVersion, type, `alpha.${Date.now()}`) as string
    expectVersion = isPreRelease ? expectVersion.slice(0, -2) : expectVersion

    if (!(await confirmVersion(currentVersion, expectVersion))) {
      return
    }

    updateVersion(expectVersion)

    if (options?.task) {
      await options.task()
    }

    await publish(isPreRelease)

    if (!isPreRelease) {
      await changelog()
      await pushGit(expectVersion, options.remote)
    }

    logger.success(`Release version ${expectVersion} successfully!`)

    if (isPreRelease) {
      try {
        await execa('git', ['restore', '**/package.json'])
        await execa('git', ['restore', 'package.json'])
      } catch {
        logger.error('Restore package.json has failed, please restore manually')
      }
    }
  } catch (error: any) {
    logger.error(error.toString())
    process.exit(1)
  }
}

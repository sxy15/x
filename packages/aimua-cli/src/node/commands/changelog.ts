import conventionalChangelog from 'conventional-changelog'
import fse from 'fs-extra'
import { createSpinner } from 'nanospinner'
import { resolve as resolvePath } from 'node:path'
import { CWD } from '../shared/constant'

const { createWriteStream } = fse

export interface ChangelogCommandOptions {
  file?: string
  releaseCount?: number
}

export const changelog = async ({
  releaseCount = 0,
  file = 'CHANGELOG.md',
}: ChangelogCommandOptions = {}): Promise<void> => {
  const loading = createSpinner('Generating changelog...').start()

  return new Promise((resolve) => {
    conventionalChangelog({
      preset: 'angular',
      releaseCount,
    })
      .pipe(createWriteStream(resolvePath(CWD, file)))
      .on('close', () => {
        loading.success({ text: 'Changelog generated successfully!' })
        resolve()
      })
  })
}

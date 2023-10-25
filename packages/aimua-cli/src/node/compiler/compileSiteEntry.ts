import { getAimuaConfig } from '../config/aimua.config.js'
import { EXAMPLE_DIR_NAME, SITE_MOBILE_ROUTES, SRC_DIR } from '../shared/constant.js'
import { glob, outputFileSyncOnChange } from '../shared/fsUtils.js'

// const ROOT_DOCS_RE = /\/docs\/([-\w]+)\.([-\w]+)(?:.draft)?\.md/
// const PAGE_LOCALE_RE = /\/pages\/([-\w]+)\/locale\/([-\w]+)\.ts/
const EXAMPLE_INDEX_RE = /\/([-\w]+)\/example\/index(?:.draft)?\.vue/
// const COMPONENT_DOCS_RE = /\/([-\w]+)\/docs\/([-\w]+)(?:.draft)?\.md/

export function getExampleRoutePath(examplePath: string): string | null {
  const match = examplePath.match(EXAMPLE_INDEX_RE)
  return match ? `/${match[1]}` : null
}

export function isDraftExample(example: string) {
  return example.endsWith('index.draft.vue')
}

export function hasDraftExample(examples: string[], example: string) {
  return examples.includes(example.replace('index.vue', 'index.draft.vue'))
}

export async function findExample(draftMode: boolean): Promise<string[]> {
  const [examples, draftExamples] = await Promise.all([
    glob(`${SRC_DIR}/**/${EXAMPLE_DIR_NAME}/index.vue`),
    glob(`${SRC_DIR}/**/${EXAMPLE_DIR_NAME}/index.draft.vue`),
  ])

  const mergedExamples = [...examples, ...draftExamples]

  return mergedExamples.filter((example) => draftMode ? isDraftExample(example) || !hasDraftExample(mergedExamples, example) : !isDraftExample(example))
}

export async function buildMobileSiteRoutes(draftMode: boolean) {
  const examples: string[] = await findExample(draftMode)

  const routes = examples.map(
    (example) => `
  {
    path: '${getExampleRoutePath(example)}',
    component: () => import('${example}')
  }
`,
  )

  const source = `export default [${routes.join(',')}]`

  await outputFileSyncOnChange(SITE_MOBILE_ROUTES, source)
}

export async function buildPcSiteRoutes(draftMode: boolean) {
  console.log('buildPcSiteRoutes', draftMode)
}

export async function buildSiteSource() {
  console.log('buildSiteSource')
}

export async function buildSiteEntry(draftMode: boolean) {
  await getAimuaConfig(true)
  await Promise.all([buildMobileSiteRoutes(draftMode), buildPcSiteRoutes(draftMode), buildSiteSource()])
}

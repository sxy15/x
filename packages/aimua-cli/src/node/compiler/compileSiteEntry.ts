import { getAimuaConfig } from '../config/aimua.config.js'

export async function buildMobileSiteRoutes(draftMode: boolean) {
  console.log('buildMobileSiteRoutes', draftMode)
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

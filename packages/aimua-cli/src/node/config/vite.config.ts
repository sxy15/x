import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import { markdown, html, copy } from '@varlet/vite-plugins'
import { get } from 'lodash-es'
import type { AimuaConfig } from './aimua.config.js'
import type { InlineConfig } from 'vite'
import {
  SITE_CONFIG,
  SITE_DIR,
  SITE_MOBILE_ROUTES,
  SITE_PC_ROUTES,
  SITE_PUBLIC_PATH,
  VITE_RESOLVE_EXTENSIONS,
} from '../shared/constant.js'

export function getDevConfig(aimuaConfig: Required<AimuaConfig>): InlineConfig {
  const defaultLanguage = get(aimuaConfig, 'defaultLanguage')
  const host = get(aimuaConfig, 'host')

  return {
    root: SITE_DIR,

    resolve: {
      extensions: VITE_RESOLVE_EXTENSIONS,

      alias: {
        '@config': SITE_CONFIG,
        '@pc-routes': SITE_PC_ROUTES,
        '@mobile-routes': SITE_MOBILE_ROUTES,
      },
    },

    server: {
      port: get(aimuaConfig, 'port'),
      host: host === 'localhost' ? '0.0.0.0' : host,
    },

    publicDir: SITE_PUBLIC_PATH,

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),

      jsx(),

      markdown({ style: get(aimuaConfig, 'highlight.style') }),

      copy({ paths: get(aimuaConfig, 'copy', []) }),

      html({
        data: {
          logo: get(aimuaConfig, `logo`),
          baidu: get(aimuaConfig, `analysis.baidu`, ''),
          pcTitle: get(aimuaConfig, `pc.title['${defaultLanguage}']`),
          pcDescription: get(aimuaConfig, `pc.description['${defaultLanguage}']`),
          pcKeywords: get(aimuaConfig, `pc.keywords['${defaultLanguage}']`),
          mobileTitle: get(aimuaConfig, `mobile.title['${defaultLanguage}']`),
          mobileDescription: get(aimuaConfig, `mobile.description['${defaultLanguage}']`),
          mobileKeywords: get(aimuaConfig, `mobile.keywords['${defaultLanguage}']`),
        },
      }),
    ],
  }
}

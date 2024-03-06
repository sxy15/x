import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { globSync } from 'glob'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist/types',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: './dist',
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    lib: {
      entry: [
        resolve(__dirname, './src/index.ts'),
        ...globSync('./src/*/*.ts').filter((file) => !file.includes('test')),
        ...globSync('./src/*/*.css'),
      ],
      name: 'aimua-ui',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        return `${name}.${format === 'cjs' ? 'cjs' : 'js'}`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        assetFileNames: (chunkInfo) => {
          const { name = '' } = chunkInfo

          if (/\.css$/.test(name)) {
            return `[name][extname]`
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})

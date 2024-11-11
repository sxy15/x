import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    minify: true,
    lib: {
      name: 'overlay',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, chunk) => `${chunk}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@xh5/utils', '@xh5/use'],
      output: {
        dir: 'dist',
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'index.css'
          }
          return assetInfo.name!
        },
      },
    },
  },
})

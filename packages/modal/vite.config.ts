import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  build: {
    minify: true,
    lib: {
      name: 'modal',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, chunk) => `${chunk}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@v/utils', '@v/use'],
      treeshake: {
        moduleSideEffects: false,
      },
      output: {
        dir: 'dist',
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if(assetInfo.name === 'style.css') {
            return 'index.css'
          }
          return assetInfo.name!
        },
      },
    }
  }
})

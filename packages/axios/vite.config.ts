import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: true,
    lib: {
      name: 'utils',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, chunk) => `${chunk}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@xh5/toast', 'axios'],
      treeshake: {
        moduleSideEffects: false,
      },
      output: {
        dir: 'dist',
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

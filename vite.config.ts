import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('node:path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      ui: path.resolve(__dirname, 'src/components/ui'),
      composables: path.resolve(__dirname, 'src/composables'),
      components: path.resolve(__dirname, 'src/components'),
      stores: path.resolve(__dirname, 'src/stores'),
      boot: path.resolve(__dirname, 'src/boot'),
      pages: path.resolve(__dirname, 'src/pages'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  }
})

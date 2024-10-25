import { fileURLToPath, URL } from 'node:url'
const VUE_PORT = process.env.VUE_PORT || 3000
const BACKEND_PORT = process.env.BACKEND_PORT || 8080

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    port: VUE_PORT,
    proxy: {
      '/api/': {
        target: 'http://localhost:' + BACKEND_PORT + '/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [
    vue(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['vue', '@vitejs/plugin-vue']
  }
})
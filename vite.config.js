import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ems-test',
  plugins: [
    vue(),
    legacy({
      // 兼容IE11 和 Chrome 43及以上版本
      targets: ['ie >= 11', 'chrome >= 43'],
      polyfills: true,
      renderLegacyChunks: true
    })
  ],
})
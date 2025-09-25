import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ems-test',
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11'], // 指定兼容IE11
      polyfills: true, // 自动注入 polyfills
      renderLegacyChunks: true // 为旧版浏览器生成单独的JS文件
    })
  ],
})
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite'
console.log(import.meta.url, 'import.meta.url')
const env = loadEnv(process.env.NODE_ENV, process.cwd())
console.log(env, 'env')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  //修改存放静态资源管理包
  build: {
    outDir: 'dist',
    assetsDir: 'assetss'
  },
  //跨域配置项
  server: {
    host: '0.0.0.0',
    port: 2004,
    proxy: {
      [env.VITE_APP_BASE_API]: {
        target: env.VITE_APP_BASE_URL,
        changeOrigin: true,
        rewrite:(path)=> path.replace(new RegExp('^'+ env.VITE_APP_BASE_API),'')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      //存放的位置
      dts: 'src/auto-import.d.ts'
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@one': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  }
})

/* eslint-disable camelcase */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Icons from 'unplugin-icons/vite'
// import IconsResolver from "unplugin-icons/resolve"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(config => {
  return {
    resolve: {
      alias: {
        // 只能是绝对路径
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@': path.resolve('./src')
      }
    },
    plugins: [
      react(),
      Icons({
        // 自动安装图标库
        autoInstall: true
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      UnoCSS({
        /* options */
      })
    ],
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        //define global scss variable
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 默认是 false。移除 console
          drop_console: config.mode === 'prod',
          // 默认是 true。移除 debugger
          drop_debugger: config.mode === 'prod'
        }
      }
    },
    server: {
      host: true,
      open: true,
      hmr: true
    }
  }
})

// vite.config.ts
import { defineConfig } from "file:///C:/Users/YK-22030404/Desktop/cli/react18+vite+ts/node_modules/.pnpm/vite@4.3.9_@types+node@20.3.2_sass@1.63.6_terser@5.18.1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/YK-22030404/Desktop/cli/react18+vite+ts/node_modules/.pnpm/@vitejs+plugin-react@4.0.1_vite@4.3.9/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import Icons from "file:///C:/Users/YK-22030404/Desktop/cli/react18+vite+ts/node_modules/.pnpm/unplugin-icons@0.16.3/node_modules/unplugin-icons/dist/vite.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/YK-22030404/Desktop/cli/react18+vite+ts/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.3.9/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import UnoCSS from "file:///C:/Users/YK-22030404/Desktop/cli/react18+vite+ts/node_modules/.pnpm/unocss@0.53.4_postcss@8.4.24_vite@4.3.9/node_modules/unocss/dist/vite.mjs";
var vite_config_default = defineConfig((config) => {
  return {
    resolve: {
      alias: {
        // 只能是绝对路径
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        "@": path.resolve("./src")
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
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
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
      minify: "terser",
      terserOptions: {
        compress: {
          // 默认是 false。移除 console
          drop_console: config.mode === "prod",
          // 默认是 true。移除 debugger
          drop_debugger: config.mode === "prod"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxZSy0yMjAzMDQwNFxcXFxEZXNrdG9wXFxcXGNsaVxcXFxyZWFjdDE4K3ZpdGUrdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFlLLTIyMDMwNDA0XFxcXERlc2t0b3BcXFxcY2xpXFxcXHJlYWN0MTgrdml0ZSt0c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvWUstMjIwMzA0MDQvRGVza3RvcC9jbGkvcmVhY3QxOCt2aXRlK3RzL3ZpdGUuY29uZmlnLnRzXCI7LyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xyXG4vLyBpbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tIFwidW5wbHVnaW4taWNvbnMvcmVzb2x2ZVwiXHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoY29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIC8vIFx1NTNFQVx1ODBGRFx1NjYyRlx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFxyXG4gICAgICAgIC8vICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKCcuL3NyYycpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHJlYWN0KCksXHJcbiAgICAgIEljb25zKHtcclxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCODlcdTg4QzVcdTU2RkVcdTY4MDdcdTVFOTNcclxuICAgICAgICBhdXRvSW5zdGFsbDogdHJ1ZVxyXG4gICAgICB9KSxcclxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1OTcwMFx1ODk4MVx1N0YxM1x1NUI1OFx1NzY4NFx1NTZGRVx1NjgwN1x1NjU4N1x1NEVGNlx1NTkzOVxyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxyXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXHJcbiAgICAgICAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXSdcclxuICAgICAgfSksXHJcbiAgICAgIFVub0NTUyh7XHJcbiAgICAgICAgLyogb3B0aW9ucyAqL1xyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICAgIGNzczoge1xyXG4gICAgICAvLyBDU1MgXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAvL2RlZmluZSBnbG9iYWwgc2NzcyB2YXJpYWJsZVxyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAdXNlIFwiQC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIiBhcyAqO2BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgIC8vIFx1OUVEOFx1OEJBNFx1NjYyRiBmYWxzZVx1MzAwMlx1NzlGQlx1OTY2NCBjb25zb2xlXHJcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IGNvbmZpZy5tb2RlID09PSAncHJvZCcsXHJcbiAgICAgICAgICAvLyBcdTlFRDhcdThCQTRcdTY2MkYgdHJ1ZVx1MzAwMlx1NzlGQlx1OTY2NCBkZWJ1Z2dlclxyXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogY29uZmlnLm1vZGUgPT09ICdwcm9kJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFFbEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYSxZQUFVO0FBQ3BDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQTtBQUFBO0FBQUEsUUFHTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxRQUVKLGFBQWE7QUFBQSxNQUNmLENBQUM7QUFBQSxNQUNELHFCQUFxQjtBQUFBO0FBQUEsUUFFbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBO0FBQUEsUUFFMUQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsT0FBTztBQUFBO0FBQUEsTUFFUCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSCxxQkFBcUI7QUFBQTtBQUFBLFFBRW5CLE1BQU07QUFBQSxVQUNKLG1CQUFtQjtBQUFBLFVBQ25CLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiLFVBQVU7QUFBQTtBQUFBLFVBRVIsY0FBYyxPQUFPLFNBQVM7QUFBQTtBQUFBLFVBRTlCLGVBQWUsT0FBTyxTQUFTO0FBQUEsUUFDakM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

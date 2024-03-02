import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 处理 alias
import { resolve } from 'path'
// vite 插件
import { compression } from 'vite-plugin-compression2'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
// import vitePluginImportus from 'vite-plugin-importus'
import prefetchPlugin from 'vite-plugin-bundle-prefetch'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  server: {
    port: 9001
  },
  plugins: [
    vue(),
    compression(),
    // vitePluginImportus([
    //   {
    //     libraryName: 'fri-element-plus',
    //     libraryDirectory: 'dist/es',
    //     style: 'css',
    //   }
    // ]),
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        // `vue` 会被打包到一个名为`vue-vendor`的 chunk 里面(包括它们的一些依赖，如 object-assign)
        'vue-vendor': [/vue/],
        'tailwind-vendor': [/tailwindcss/],
        // 源码中目录的代码都会打包进 [name] 这个 chunk 中
        assets: [/src\/assets/],
        locales: [/src\/locales/],
      },
    }),
    prefetchPlugin(),
  ],
})

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

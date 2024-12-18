import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(),
    // Auto-import Vue Composition API utilities and more
    AutoImport({
      imports: [
        'vue', // Auto-import Vue Composition API (ref, reactive, etc.)
        'vue-router', // Auto-import Vue Router utilities
      ],
      dts: 'src/auto-imports.d.ts', // Generates TypeScript definitions for auto-imports
    }),
    // Auto-import components from src/components
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true, // Enable recursive scanning of directories
      dts: 'src/components.d.ts', // Generates TypeScript definitions for components
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables/colors.scss" as *;
          @use "@/styles/mixins/typography.scss" as *;
          @use "@/styles/base/normalize.scss" as *;
        `,
      },
    },
  },
})

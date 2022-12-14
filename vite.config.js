import { fileURLToPath, URL } from 'url'

import { defineConfig , loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig((command,mode) =>{

  return {
    base: '/',
    plugins: [
      vue(),
      VitePWA({ 
        registerType: 'autoUpdate' ,
        injectRegister: 'auto',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
          cleanupOutdatedCaches: false
        },
        manifest : {
          name : 'Dairy Farm',
          short_name : 'daifar',
          description : 'Dairy farm management application',
          theme_color : '#1F2937',
          background_color : '#1F2937',
          display : 'standalone',
          icons : [
            {
              src : 'img/icons/icon-192x192.png',
              sizes : '192x192',
              type : 'image/png'
            },
            {
              src : 'img/icons/icon-256x256.png',
              sizes : '256x256',
              type : 'image/png'
            },
            {
              src : 'img/icons/icon-384x384.png',
              sizes : '384x384',
              type : 'image/png'
            },
            {
              src : 'img/icons/icon-512x512.png',
              sizes : '512x512',
              type : 'image/png'
            },
          ]
        },
        devOptions: {
          enabled: true
        }
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  
})

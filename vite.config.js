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

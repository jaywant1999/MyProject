import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  define: {
    global: 'window' // shim Node's global for browser
  },
  server: {
    port: 1312,
  }
})

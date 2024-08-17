import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/genshin-helper-website/',
  server: {
    cors: false,
    proxy: {
      '/api': {
        target: 'https://genshin.jmp.blue/',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})

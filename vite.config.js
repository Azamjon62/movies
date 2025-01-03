import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/images': {
        target: 'https://image.tmdb.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, ''),
      },
    },
  },
})

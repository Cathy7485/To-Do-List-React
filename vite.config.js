import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 上線或開發中
  base: process.env.NODE_ENV === 'production' ? '/To-Do-List-React/' : '/',
  plugins: [react()],
})

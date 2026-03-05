import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:'/amar4-ai/movies-recco/',
  plugins: [react()],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-project/',   // MUST match your repo name
  plugins: [react()],
})

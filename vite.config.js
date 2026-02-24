import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-project/', // Important for GitHub Pages deployment
  plugins: [react()],
  server: {
    port: 5173,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api/v2/get-task': {
        target: 'https://interview.adpeai.com',
        changeOrigin: true
      }
    }
  }
});

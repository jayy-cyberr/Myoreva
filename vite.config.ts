import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <-- needed to resolve alias

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <-- this is what makes @/ work
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

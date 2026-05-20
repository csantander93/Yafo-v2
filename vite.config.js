import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ 
      open: true,
      filename: 'stats.html'
    }),
  ],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
  css: {
    postcss: './postcss.config.mjs',
    devSourcemap: false,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: '[name]-[hash][extname]',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
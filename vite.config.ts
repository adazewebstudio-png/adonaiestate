import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy animation library into its own chunk
          'vendor-motion': ['framer-motion'],
          // Split Sanity client + image utilities
          'vendor-sanity': ['@sanity/client', '@sanity/image-url', '@portabletext/react'],
          // Core React in its own long-cached chunk
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    // Raise the warning threshold slightly (default is 500kb)
    chunkSizeWarningLimit: 600,
  }
})

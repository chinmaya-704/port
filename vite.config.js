import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),react()
  ],
  build:{
    outDir: 'dist',  //   // rollupOptio
  }
})
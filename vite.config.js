import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path"
import tailwindcss from "@tailwindcss/vite"
import million from 'million/compiler';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }), 
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

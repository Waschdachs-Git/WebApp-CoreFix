import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  /**
   * GitHub Pages serves project sites from /<repo>/, so the production build
   * needs that prefix on every asset URL. CI sets VITE_BASE; local builds and
   * a later custom domain (corefix.de) just leave it unset and get "/".
   */
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})

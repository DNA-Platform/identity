import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
    viteSingleFile() // This MUST be last!
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    emptyOutDir: true,
  }
})
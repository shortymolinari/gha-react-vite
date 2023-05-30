import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // si uso un dominio propio la config queda asi => base: '/',
  base: 'https://shortymolinari.github.io/gha-react-vite',
  plugins: [react()],
})

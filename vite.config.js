import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://shortymolinari.github.io/gha-react-vite',
  plugins: [react()],
})

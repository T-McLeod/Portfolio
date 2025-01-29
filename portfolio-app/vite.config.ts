import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/~tm419/',  // Update this line to match your base URL
  plugins: [react()],
})

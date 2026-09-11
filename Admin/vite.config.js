import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone Admin Application running on port 5174
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
  },
})

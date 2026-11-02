import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // listen on all interfaces so the preview can reach it
    port: 5173,
    strictPort: true,    // fail instead of silently switching ports
    allowedHosts: true,  // newer Vite versions block unknown hostnames like *.csb.app
  },
})
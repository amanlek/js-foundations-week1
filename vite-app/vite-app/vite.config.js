import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    
  base: /myapp/,
  plugins: [react()],
  server:{
    port : 8080,
  },
  build: {
    target: "es2015",
  },

})
//import.meta.env.VITE_BASE_PATH || "/",
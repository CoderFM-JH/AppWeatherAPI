import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ],
    // 
    resolve: {
      // création des alias
      alias: {
        /* eg:  import LinkChecker from "@assets/images/logo-link-checker.svg";
                {
                  id: 10,
                  icon: LinkChecker,
                  name: "LinkChecker",
                  description: "Scans and highlights broken links on any page.",
                  state: false,
                  remove: false
                },
        */
        "@assets": "/src/assets/icons" 
      }
    }
})
// @import "tailwindcss";
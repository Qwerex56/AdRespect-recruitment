import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

import tailwindcss from 'tailwindcss';

export default defineConfig({
  server: { https: true },
  plugins: [ mkcert() ]
})
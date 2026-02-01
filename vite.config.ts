/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
})

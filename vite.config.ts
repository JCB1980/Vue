import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    clearMocks: true,
    reporters: ['default', 'json'],
    outputFile: 'results/vitest-results.json',
    coverage: {
      all: true,
      include: ['src'],
      exclude: ['src/**/__tests__/', 'src/main.ts', 'src/router.ts', 'src/models'],
      reporter: ['json-summary', 'text', 'html']
    }
  }
});

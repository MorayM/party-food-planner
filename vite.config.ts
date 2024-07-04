// Because this file sits outside of our main hierarchy, ESLint can't figure out its imports correctly
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Support for JSX and React Fast
    react(),
    // Import SVG images as JSX components
    svgr(),
    // Resolve custom import paths from tsconfig.compilerOptions.paths
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  }
});

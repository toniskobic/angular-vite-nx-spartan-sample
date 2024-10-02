/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig, Plugin, searchForWorkspaceRoot } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: `../node_modules/.vite`,
    build: {
      outDir: '../dist/./web-app/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    resolve: {
      mainFields: ['module'],
    },
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()), '.'],
      },
    },
    plugins: [analog(), nxViteTsPaths()] as Plugin[],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});

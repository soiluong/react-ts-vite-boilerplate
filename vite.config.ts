import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import env from 'vite-plugin-env-compatible';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default function viteConfig({ mode }: { mode: string }) {
  return defineConfig({
    build: {
      outDir: 'build'
    },
    define: {
      'process.env.NODE_ENV': `"${mode}"`
    },
    plugins: [env({ prefix: 'REACT_APP_' }), react(), tsconfigPaths()],
    server: {
      port: 3000
    },
    preview: {
      port: 3000
    }
  });
}

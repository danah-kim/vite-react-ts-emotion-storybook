import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { cjsInterop } from 'vite-plugin-cjs-interop';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    cjsInterop({
      dependencies: ['@emotion/styled/base', '@emotion/*'],
    }),
    tsconfigPaths(),
    dts(),
  ],
});

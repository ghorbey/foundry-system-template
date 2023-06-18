import type { UserConfig } from 'vite';
import path from 'path';
import checker from 'vite-plugin-checker';

const config: UserConfig = {
  root: 'src/',
  base: '/systems/my-system/',
  publicDir: path.resolve(__dirname, 'public'),
  server: {
    port: 30001,
    open: true,
    proxy: {
      '^(?!/systems/my-system)': 'http://localhost:30000/',
      '/socket.io': {
        target: 'ws://localhost:30000',
        ws: true
      }
    }
  },
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser' // thanks @aws-sdk
      }
    ]
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'my-system',
      entry: path.resolve(__dirname, 'src/my-system.ts'),
      formats: ['es'],
      fileName: 'my-system'
    }
  },
  plugins: [
    checker({
      typescript: true
    })
  ]
};

export default config;

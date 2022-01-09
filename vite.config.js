/* eslint-disable import/no-extraneous-dependencies */
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import reactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

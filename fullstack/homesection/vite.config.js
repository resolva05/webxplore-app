// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import '@testing-library/jest-dom/extend-expect';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  }
});
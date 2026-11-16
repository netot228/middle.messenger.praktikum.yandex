import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/vars" as *;`,
      },
    },
  },
});

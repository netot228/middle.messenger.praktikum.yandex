import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  resolve: {
    // прописываем алиас, чтобы корректно подключить стили для всех scss модулей
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      // добавляем настройку, чтобы во все .scss файлы подключались переменные
      scss: {
        additionalData: `@use "@/styles/_scss_vars" as *;`,
      },
    },
  },
});

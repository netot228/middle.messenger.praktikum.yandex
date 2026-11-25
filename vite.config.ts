import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    open: true,
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
        additionalData: `@use "@/styles/_vars" as *;`,
      },
    },
  },
});

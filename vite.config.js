import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    open: false,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        document: resolve(__dirname, "document.html"),
      },
    },
  },
});

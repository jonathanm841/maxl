import { defineConfig } from "vite";

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
});

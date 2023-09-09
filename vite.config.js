// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "oz-redux-dispatcher",
    },
    outDir: "lib",
    rollupOptions: {
      // Make sure to set the format to 'es' for ES modules
      output: {
        format: "es",
      },
    },
  },
});

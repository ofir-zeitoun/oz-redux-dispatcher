import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ include: ["src"], insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "oz-redux-dispatcher",
      formats: ["es", "umd"],
      fileName: "index",
    },
    outDir: "lib",
    rollupOptions: {
      output: {
        format: "es",
      },
      external: ["react", "react/jsx-runtime", "redux", "react-redux"],
    },
  },
});

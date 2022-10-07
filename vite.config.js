import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "./src/javascript"),
      "@parts": path.resolve(__dirname, "./src/sass/partials"),
      "@styles": path.resolve(__dirname, "./src/sass"),
      "@": path.resolve(__dirname, "./"),
      "~": path.resolve(__dirname, "./"),
    },
  },
});

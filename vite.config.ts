import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), EnvironmentPlugin("all", { prefix: "VUE_APP_" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

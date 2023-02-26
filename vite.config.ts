import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    EnvironmentPlugin("all", { prefix: "VUE_APP_", loadEnvFiles: false }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          home: ["./src/app/view/Home"],
          "option-pages": [
            "./src/app/view/home/Favorites",
            "./src/app/view/home/Details",
            "./src/app/view/home/Catalog",
          ],
        },
      },
    },
  },
});

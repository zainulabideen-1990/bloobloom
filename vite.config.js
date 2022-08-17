import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@assets": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
      "@icons": fileURLToPath(
        new URL("./src/components/icons", import.meta.url)
      ),
    },
  },
});

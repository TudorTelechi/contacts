import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      // for vue compat
      {
        template: {
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        },
      }
    ),
  ],
  resolve: {
    alias: {
      vue: "@vue/compat",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

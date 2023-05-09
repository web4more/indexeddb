/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "test/wpt-IndexedDB/**"],
  },
  build: {
    ssr: true,
    lib: {
      entry: ["src/index.ts", "src/ponyfill.ts", "src/polyfill.ts"],
      formats: ["es"],
    },
  },
});

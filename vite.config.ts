import { defineConfig } from "vite";

export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry: ["src/index.ts", "src/ponyfill.ts", "src/polyfill.ts"],
      formats: ["es"],
    },
  },
});

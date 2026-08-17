import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://rusherdv.vercel.app",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
});

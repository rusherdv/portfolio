import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://rusherdv.vercel.app",
  compressHTML: true,
  adapter: vercel({ middlewareMode: "edge" }),
  build: {
    inlineStylesheets: "always",
  },
});

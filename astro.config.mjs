import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://rusher.cloud",
  compressHTML: true,
  adapter: vercel({ middlewareMode: "edge" }),
  build: {
    inlineStylesheets: "always",
  },
});

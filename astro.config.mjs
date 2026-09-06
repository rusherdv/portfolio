import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://rusher.cloud",
  compressHTML: true,
  adapter: cloudflare(),
  build: {
    inlineStylesheets: "always",
  },
});

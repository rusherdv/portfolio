export default async function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `https://www.rusher.net.ar/sitemap.xml`,
    host: `https://www.rusher.net.ar`,
  };
}

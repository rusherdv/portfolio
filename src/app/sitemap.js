export default async function sitemap() {
  return [
    {
      url: `https://www.rusher.net.ar`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 1.0,
    },
  ];
}

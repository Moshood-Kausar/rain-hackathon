export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://rain-hackathon.vercel.app/sitemap.xml",
  };
}

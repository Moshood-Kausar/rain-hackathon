export default function sitemap() {
  return [
    {
      url: "https://rain-hackathon.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://rain-hackathon.vercel.app/register",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }
  ];
}

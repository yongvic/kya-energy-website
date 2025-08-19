import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  const pages = [
    // Homepage
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/`,
      lastModified: new Date(),
    },
  ];

  const entries = pages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
  }));

  return entries;
}

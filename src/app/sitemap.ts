import { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  const pages = [
    "",
    "/produits-et-services",
    "/a-propos-de-kya",
    "/actualites-et-engagement",
  ];

  const sitemapEntries = i18n.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }))
  );

  return sitemapEntries;
}

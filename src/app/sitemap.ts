import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  const pages = [
    "",
    "/a-propos",
    "/blog",
    "/certification-iso-9001",
    "/detail-produits",
    "/faq",
    "/kya-backup",
    "/kya-sop-institutions",
    "/kya-sop-menages",
    "/produits-et-services",
    "/recompenses",
  ];

  const sitemapEntries = [
    "fr",
    "en",
  ].flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    })),
  );

  return sitemapEntries;
}

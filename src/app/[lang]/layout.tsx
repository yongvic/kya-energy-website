import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import { i18n, Locale } from "@/lib/i18n.config";
import { getTranslation } from "@/lib/get-translation";
import TranslationsType from "@/translations/translations.definition";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

/*
 * Generate differents versions of dynamic route [lang]
 * to avoid page rendering on demand and improve performance
 */
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);
  const { hero, header } = dictionary;
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `http://localhost:${process.env.PORT || 3000}`;

  return {
    title: {
      default: "KYA Energy Group",
      template: `%s | KYA Energy Group`,
    },
    description: hero.subtitle,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "en-US": "/en",
        "fr-FR": "/fr",
      },
    },
    openGraph: {
      title: "KYA Energy Group",
      description: hero.subtitle,
      url: `/${lang}`,
      siteName: "KYA Energy Group",
      images: [
        {
          url: "/logo.webp",
          width: 800,
          height: 600,
          alt: header.logo,
        },
      ],
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "KYA Energy Group",
      description: hero.subtitle,
      images: ["/logo.webp"],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo.webp",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dictionary: TranslationsType = await getTranslation(lang);

  return (
    <html lang={lang}>
      <body
        className={`bg-gray-100 dark:bg-gray-900 ${libreFranklin.className} antialiased`}>
        <Header dictionary={dictionary} />
        <main className="pt-24 md:pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

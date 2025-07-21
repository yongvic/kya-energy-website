import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { i18n, Locale } from "@/lib/i18n.config";
import { getTranslation } from "@/lib/get-translation";
import TranslationsType from "@/translations/translations.definition";
import Header from "@/components/Header";
import "@/styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kya Energy",
  description: "Sustainable Energy Solutions for a Brighter Future",
};

/*
 * Generate differents versions of dynamic route [lang]
 * to avoid page rendering on demand and improve performance
 */
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
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
        className={`bg-gray-100 dark:bg-gray-900 ${workSans.className} antialiased`}>
        <Header dictionary={dictionary} />
        {children}
      </body>
    </html>
  );
}

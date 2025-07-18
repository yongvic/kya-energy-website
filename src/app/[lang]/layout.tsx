import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { i18n } from "@/lib/i18n.config";
import "@/styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"]
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
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${workSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

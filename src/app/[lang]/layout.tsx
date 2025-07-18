import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { i18n } from "@/lib/i18n.config";
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
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
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

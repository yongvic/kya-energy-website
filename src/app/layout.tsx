import { i18n } from "@/lib/i18n.config";
import { getTranslation } from "@/lib/get-translation";
import { Libre_Franklin } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin"
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await getTranslation(i18n.defaultLocale);
  return (
    <html lang="fr">
      <body
        className={`bg-gray-100 dark:bg-gray-900 ${libreFranklin.variable} ${libreFranklin.className} antialiased`}>
        <Header dictionary={dictionary} />
        <main className="min-h-screen">{children}</main>
        <Footer dictionary={dictionary} />
      </body>
    </html>
  );
}

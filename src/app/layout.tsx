import { Libre_Franklin } from "next/font/google";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin"
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body
        className={`bg-gray-100 dark:bg-gray-900 ${libreFranklin.variable} ${libreFranklin.className} antialiased`}>
        <NextTopLoader showForHashAnchor color="#f9ad32" showSpinner={false} />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

import { Libre_Franklin } from "next/font/google";
import "@/styles/globals.css";

const libreFranklin = Libre_Franklin({
  display: "swap",
  subsets: [
    "latin",
  ],
  variable: "--font-libre-franklin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: no duplicate
    <html>
      <body className={`${libreFranklin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

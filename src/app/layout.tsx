import "@/styles/globals.css";

import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  display: "swap",
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${libreFranklin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

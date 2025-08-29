import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import Reveal from "@/components/ui/Reveal";

const manrope = Manrope({
  display: "swap",
  subsets: [
    "latin",
  ],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // biome-ignore lint/a11y/useHtmlLang: no duplicate
    <html>
      <body className={`${manrope.className} antialiased`}>
        <Reveal>{children}</Reveal>
      </body>
    </html>
  );
}

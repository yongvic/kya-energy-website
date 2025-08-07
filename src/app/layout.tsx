import { Libre_Franklin } from "next/font/google";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin"
});

const arialNarrow = localFont({
  src: [
    {
      path: "../../public/fonts/arialnarrow.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/arialnarrow_italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/arialnarrow_bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/arialnarrow_bolditalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-arial-narrow",
});

const facebookSans = localFont({
  src: [
    {
      path: "../../public/fonts/facebook-sans/FacebookSansHeavy.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-facebook-sans",
});

const timesNewRoman = localFont({
  src: [
    {
      path: "../../public/fonts/timesnewroman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/timesnewroman_italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-times-new-roman",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body
        className={`bg-gray-100 dark:bg-gray-900 ${libreFranklin.variable} ${libreFranklin.className} ${facebookSans.variable} ${arialNarrow.variable} ${timesNewRoman.variable} antialiased`}>
        <NextTopLoader showForHashAnchor color="#f9ad32" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}

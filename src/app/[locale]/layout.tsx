import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";
import Footer from "@/components/shared/Footer";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

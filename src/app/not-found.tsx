// src/app/not-found.tsx
// import 'server-only';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getTranslation } from '@/lib/get-translation';
import styles from '@/styles/not-found.module.css';
import '@/styles/globals.css';
import { Locale } from '@/lib/i18n.config';

export default async function NotFound({
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params;
  const translation = await getTranslation(lang ?? "fr");

  return (
    <html lang={lang}>
      <body>
        <Header dictionary={translation} />
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className={styles.container}>
            <div className={styles.errorCode}>404</div>
            <div className={styles.errorMessage}>
              {translation.notFound.title}
            </div>
            <p className={styles.errorDescription}>
              {translation.notFound.description}
            </p>
            <Link href={`/${lang}`} passHref>
              <button className={styles.homeButton}>
                {translation.notFound.homeButton}
              </button>
            </Link>
          </div>
        </main>
        <Footer dictionary={translation} />
      </body>
    </html>
  );
}

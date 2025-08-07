// src/app/not-found.tsx
// import 'server-only';
import Link from 'next/link';

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
  );
}

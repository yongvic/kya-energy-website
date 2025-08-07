// src/app/not-found.tsx
// import 'server-only';
import Link from 'next/link';

import { getTranslation } from '@/lib/get-translation';
import styles from '@/styles/not-found.module.css';
import '@/styles/globals.css';


export default async function NotFound() {
  const translation = await getTranslation("fr");

  return (
    <div className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.errorMessage}>
        {translation.notFound.title}
      </div>
      <p className={styles.errorDescription}>
        {translation.notFound.description}
      </p>
      <Link href={`/`} passHref>
        <button className={styles.homeButton}>
          {translation.notFound.homeButton}
        </button>
      </Link>
    </div>
  );
}

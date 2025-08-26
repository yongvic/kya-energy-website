import Link from "next/link";
import styles from "@/styles/not-found.module.css";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("introuvable");

  return (
    <section className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.errorMessage}>{t("titre")}</div>
      <p className={styles.errorDescription}>{t("description")}</p>
      <Link href={`/`} passHref>
        <button className={styles.homeButton}>{t("retour à l'accueil")}</button>
      </Link>
    </section>
  );
}

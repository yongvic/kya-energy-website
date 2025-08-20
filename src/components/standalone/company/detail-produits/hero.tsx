import styles from "@/styles/detail-produits.module.css";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("detail produits.hero");
  return (
    <section className={`${styles.detailSection} ${styles.certifiedSection}`}>
      <div className={styles.detailSectionTitle}>
        <h3>{t("titre")}</h3>
        <div></div>
      </div>
      <p>{t("description")}</p>
      <ol>
        <li className={styles.certified}>
          {t("detail 1")}
        </li>
        <li className={styles.certified}>
          {t("detail 2")}
        </li>
      </ol>
    </section>
  );
}

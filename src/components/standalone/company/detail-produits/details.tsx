import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaPlus } from "react-icons/fa";
import styles from "@/styles/detail-produits.module.css";

export default function Details() {
  const t = useTranslations("detail produits.details");

  return (
    <section className={styles.detailSection}>
      <div className={styles.detailSectionTitle}>
        <h3>{t("titre")}</h3>
        <div />
      </div>
      <div className={styles.productGrid}>
        <Link href="/kya-sop-menages">
          <div className={styles.productCard}>
            <div className={styles.productCardImageContainer}>
              <Image
                src="/products/gamme-kya-sop/kya-sop-residentiel.png"
                alt={t("kya sop menage.titre")}
                layout="fill"
                className={styles.productCardImage}
              />
            </div>
            <div className={styles.productCardContent}>
              <p className={styles.productCardTitle}>
                {t("kya sop menage.titre")}
              </p>
              <p className={styles.productCardDescription}>
                {t("kya sop menage.description")}
              </p>
              <div className={styles.productCardButtonContainer}>
                <button
                  className={styles.productCardButton}
                  type="button">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/kya-sop-institutions">
          <div className={styles.productCard}>
            <div className={styles.productCardImageContainer}>
              <Image
                src="/products/gamme-kya-sop/kya-sop-commercial.png"
                alt={t("kya sop commercial.titre")}
                layout="fill"
                className={styles.productCardImage}
              />
            </div>
            <div className={styles.productCardContent}>
              <p className={styles.productCardTitle}>
                {t("kya sop commercial.titre")}
              </p>
              <p className={styles.productCardDescription}>
                {t("kya sop commercial.description")}
              </p>
              <div className={styles.productCardButtonContainer}>
                <button
                  className={styles.productCardButton}
                  type="button">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/kya-backup">
          <div className={styles.productCard}>
            <div className={styles.productCardImageContainer}>
              <Image
                src="/products/gamme-kya-sop/kya-sop-communautaire.png"
                alt={t("kya sop communautaire.titre")}
                width="157"
                height="119"
                className={styles.productCardImage}
              />
            </div>
            <div className={styles.productCardContent}>
              <p className={styles.productCardTitle}>
                {t("kya sop communautaire.titre")}
              </p>
              <p className={styles.productCardDescription}>
                {t("kya sop communautaire.description")}
              </p>
              <div className={styles.productCardButtonContainer}>
                <button
                  className={styles.productCardButton}
                  type="button">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

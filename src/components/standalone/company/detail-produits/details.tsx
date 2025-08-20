import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import styles from "@/styles/detail-produits.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Details() {
  const t = useTranslations("detail produits.details");

  return (
    <section className={styles.detailSection}>
      <div className={styles.detailSectionTitle}>
        <h3>{t("titre")}</h3>
        <div></div>
      </div>
      <div className={styles.productGrid}>

        <Link href="/kya-sop-menages">
          <div className={styles.productCard}>
            <div className={styles.productCardImageContainer}>
              <Image
                src="/products/gamme-kya-sop/kya-sop-residentiel.png"
                alt={t['detail-products'].residential_title}
                layout="fill"
                className={styles.productCardImage}
              />
            </div>
            <div className={styles.productCardContent}>
              <p className={styles.productCardTitle}>
                {t['detail-products'].residential_title}
              </p>
              <p className={styles.productCardDescription}>
                {t['detail-products'].residential_description}
              </p>
              <div className={styles.productCardButtonContainer}>
                <button className={styles.productCardButton}>
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
                alt={t['detail-products'].commercial_title}
                layout="fill"
                className={styles.productCardImage}
              />
            </div>
            <div className={styles.productCardContent}>
              <p className={styles.productCardTitle}>
                {t['detail-products'].commercial_title}
              </p>
              <p className={styles.productCardDescription}>
                {t['detail-products'].commercial_description}
              </p>
              <div className={styles.productCardButtonContainer}>
                <button className={styles.productCardButton}>
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
                alt={t['detail-products'].community_title}
                width="157"
                height="119"
                className={styles.productCardImage}
              />
            </div>
            <div className={styles.productCardContent}>
              <p className={styles.productCardTitle}>
                {t['detail-products'].community_title}
              </p>
              <p className={styles.productCardDescription}>
                {t['detail-products'].community_description}
              </p>
              <div className={styles.productCardButtonContainer}>
                <button className={styles.productCardButton}>
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

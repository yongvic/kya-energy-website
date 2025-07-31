import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'
import VideoPlayer from './VideoPlayer'
import { getTranslation } from '@/lib/get-translation'
import { Locale } from '@/lib/i18n.config'
import styles from '@/styles/products-and-services.module.css';
import Link from "next/link";

// Reusable Title Component
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.detailSectionTitle}>
    <h3>{children}</h3>
    <div></div>
  </div>
);


const DetailProducts = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const t = await getTranslation(lang);

  return (
    <div className={styles.detailContainer}>

      <section className={`${styles.detailSection} ${styles.certifiedSection}`}>
        <SectionTitle>{t['detail-products'].certified_title}</SectionTitle>
        <p>
          {t['detail-products'].certified_description}
        </p>
        <ol>
          <li className={styles.certified}>
            {t['detail-products'].certified_item1}
          </li>
          <li className={styles.certified}>
            {t['detail-products'].certified_item2}
          </li>
        </ol>
      </section>

      <section className={styles.detailSection}>
        <SectionTitle>{t['detail-products'].ranges_title}</SectionTitle>

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

      <section className={styles.detailSection}>
        <SectionTitle>{t['detail-products'].testimonials_title}</SectionTitle>
        <VideoPlayer />
      </section>
    </div>
  )
}

export default DetailProducts

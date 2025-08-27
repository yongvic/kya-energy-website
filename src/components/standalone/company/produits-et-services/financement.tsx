"use client";
import { FiClock } from "react-icons/fi";
import { LuInbox } from "react-icons/lu";
import { RiCoinsLine } from "react-icons/ri";
import { MotionDiv } from "./ClientMotion";
import styles from "@/styles/products-and-services.module.css";
import { useTranslations } from "next-intl";

export default function Financement() {
  const t = useTranslations("produits et services.financement");
  return (
    <section className={styles.section}>
      <h2 className={styles.section_title}>{t("titre")}</h2>
      <p className={styles.section_subtitle}>{t("description")}</p>
      <div className={styles.financing_grid}>
        <MotionDiv
          className={styles.financing_card}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}>
          <div className={`${styles.iconWrapper} ${styles.orang}`}>
            <RiCoinsLine className={styles.icon} />
          </div>
          <div className={`${styles.financing_card_value} ${styles.orange}`}>
            15%
          </div>
          <div className={styles.financing_card_label}>
            {t("apport initial")}
          </div>
        </MotionDiv>
        <MotionDiv
          className={styles.financing_card}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}>
          <div className={`${styles.iconWrapper} ${styles.gren}`}>
            <FiClock className={styles.icon} />
          </div>
          <div className={`${styles.financing_card_value} ${styles.green}`}>
            10 ans
          </div>
          <div className={styles.financing_card_label}>
            {t("remboursement")}
          </div>
        </MotionDiv>
        <MotionDiv
          className={styles.financing_card}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}>
          <div className={`${styles.iconWrapper} ${styles.ble}`}>
            <LuInbox className={styles.icon} />
          </div>
          <div className={`${styles.financing_card_value} ${styles.blue}`}>
            100%
          </div>
          <div className={styles.financing_card_label}>
            {t("maintenance incluse")}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

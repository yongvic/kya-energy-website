import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { containerVariants, itemVariants } from "@/lib/certification-iso9001-utils";

export default function Certificat() {
  const t = useTranslations("certification iso 9001.certificat");

  return (
    <motion.section
      className="details-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="details-intro" variants={itemVariants}>
        <h3>{t("titre")}</h3>
        <p>{t("sous titre")}</p>
      </motion.div>
      <div className="details-content">
        <motion.div className="certification-frame" variants={itemVariants}>
          <div className="certification-frame-header">
            <FaAward />
            <span>{t("titre certificat")}</span>
          </div>
          <div className="image-container">
            <Image
              src="/certification/certif.avif"
              alt={t("titre certificat")}
              width={500}
              height={350}
            />
          </div>
        </motion.div>
        <motion.div className="text-content" variants={itemVariants}>
          <p>{t("annonce.paragraphe 1")}</p>
          <p>
            <strong>{t("annonce.paragraphe 2")}</strong>
          </p>
          <p>{t("annonce.paragraphe 3")}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

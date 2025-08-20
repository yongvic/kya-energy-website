import { containerVariants, itemVariants } from "@/lib/certification-iso9001-utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Engagement() {
  const t = useTranslations("certification iso 9001.engagement");

  return (
    <motion.section
      className="commitment-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="commitment-content">
        <motion.div variants={itemVariants}>
          <p><strong>{t("engagement.titre")}</strong></p>
          <p>{t("engagement.sous titre")}</p>
          <p>{t("engagement.texte")}</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image
            src="/certification/engagement-qualite.png"
            alt={t("engagement.titre")}
            width={600}
            height={400}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <p><strong>{t("remerciements.titre")}</strong></p>
          <p>{t("remerciements.sous titre")}</p>
          <p>{t("remerciements.texte")}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

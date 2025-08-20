import { containerVariants, itemVariants } from "@/lib/certification-iso9001-utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("certification iso 9001.hero");

  return (
    <motion.section
      className="certification-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="hero-section">
        <motion.h1 variants={itemVariants} className='hero-title' dangerouslySetInnerHTML={{ __html: t("titre") }} />
        <motion.div variants={itemVariants} className='hero-subtitle backdrop-blur-md bg-white/20 p-10 rounded-2xl shadow-xl text-white max-w-md text-center'>
          {t("sous titre")}
        </motion.div>
      </section>


    </motion.section>
  );
}

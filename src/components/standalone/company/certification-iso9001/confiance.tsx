"use client";
import { itemVariants } from "@/lib/certification-iso9001-utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Confiance() {
  const t = useTranslations("certification iso 9001.confiance");

  return (
    <section className="cta-section">
      <motion.p variants={itemVariants}>{t("titre")}</motion.p>
      <motion.p variants={itemVariants}>{t("sous titre")}</motion.p>
    </section>
  );
}

"use client";
import {
  containerVariants,
  itemVariants,
} from "@/lib/certification-iso9001-utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaChartLine, FaLeaf } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";

export default function Pourquoi() {
  const t = useTranslations("certification iso 9001.pourquoi");

  return (
    <motion.section
      className="essentials-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h3 variants={itemVariants} className="essentials-title">
        {t("titre")}
      </motion.h3>
      <motion.p variants={itemVariants} className="essentials-subtitle">
        {t("description")}
      </motion.p>
      <div className="essentials-grid">
        <motion.div className="essential-item" variants={itemVariants}>
          <div>
            <FaUserGroup />
          </div>
          <p>{t.certifications.essentials.items.customerSatisfaction}</p>
        </motion.div>
        <motion.div className="essential-item" variants={itemVariants}>
          <div>
            <FaChartLine />
          </div>
          <p>{t.certifications.essentials.items.processImprovement}</p>
        </motion.div>
        <motion.div className="essential-item" variants={itemVariants}>
          <div>
            <HiAcademicCap />
          </div>
          <p>{t.certifications.essentials.items.teamCohesion}</p>
        </motion.div>
        <motion.div className="essential-item" variants={itemVariants}>
          <div>
            <FaLeaf />
          </div>
          <p>{t.certifications.essentials.items.healthyEnvironment}</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

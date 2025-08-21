import Details from "@/components/standalone/company/detail-produits/details";
import Hero from "@/components/standalone/company/detail-produits/hero";
import Temoignages from "@/components/standalone/company/detail-produits/temoignages";
import styles from "@/styles/detail-produits.module.css";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export default function DetailProduits() {
  return (
    <div className={styles.detailContainer}>
      <Hero />
      <Details />
      <Temoignages />
    </div>
  );
}

export function generateMetadata(): Metadata {
  const t = useTranslations("detail produits.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

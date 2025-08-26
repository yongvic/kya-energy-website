import Details from "@/components/standalone/company/detail-produits/details";
import Hero from "@/components/standalone/company/detail-produits/hero";
import Temoignages from "@/components/standalone/company/detail-produits/temoignages";
import styles from "@/styles/detail-produits.module.css";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export default function DetailProduits() {
  return (
    <div className={styles.detailContainer}>
      <Hero />
      <Details />
      <Temoignages />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("detail produits.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

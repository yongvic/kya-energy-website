import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Details from "@/components/standalone/entreprise/detail-produits/Details";
import Hero from "@/components/standalone/entreprise/detail-produits/Hero";
import Temoignages from "@/components/standalone/entreprise/detail-produits/Temoignages";

export default function DetailProduits() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero />
      <Details />
      <Temoignages />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("detail produits.seo");

  return {
    description: t("description"),
    title: t("titre"),
  };
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/standalone/entreprise/accueil/Hero";
import Impacts from "@/components/standalone/entreprise/accueil/Impacts";
import MissionEtValeurs from "@/components/standalone/entreprise/accueil/MissionEtValeurs";
import PourquoiKya from "@/components/standalone/entreprise/accueil/PourquoiKya";
import ProduitsPhares from "@/components/standalone/entreprise/accueil/ProduitsPhares";
import YoutubeVideo from "@/components/standalone/entreprise/accueil/YoutubeVideo";

export default function Homepage() {
  return (
    <>
      <Hero />
      <MissionEtValeurs />
      <Impacts />
      <YoutubeVideo />
      <PourquoiKya />
      <ProduitsPhares />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("page d'acceuil.seo");
  return {
    description: t("description"),
    title: t("titre"),
  };
}

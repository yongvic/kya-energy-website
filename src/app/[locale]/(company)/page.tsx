import Hero from "@/components/standalone/company/acceuil/hero";
import Impacts from "@/components/standalone/company/acceuil/impacts";
import MissionEtValeurs from "@/components/standalone/company/acceuil/mission-et-valeurs";
import PourquoiKya from "@/components/standalone/company/acceuil/pourquoi-kya";
import ProduitsPhares from "@/components/standalone/company/acceuil/produits-phares";
import YoutubeVideo from "@/components/standalone/company/acceuil/youtube-video";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
    title: t("titre"),
    description: t("description"),
  };
}

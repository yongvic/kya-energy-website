import Hero from "@/components/standalone/company/homepage/hero";
import Impacts from "@/components/standalone/company/homepage/impacts";
import MissionEtValeurs from "@/components/standalone/company/homepage/mission-et-valeurs";
import PourquoiKya from "@/components/standalone/company/homepage/pourquoi-kya";
import ProduitsPhares from "@/components/standalone/company/homepage/produits-phares";
import YoutubeVideo from "@/components/standalone/company/homepage/youtube-video";
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

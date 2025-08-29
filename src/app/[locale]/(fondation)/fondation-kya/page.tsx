import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ActionsEtObjectifs from "@/components/standalone/fondation/ActionsEtObjectifs";
import DomainesInterventions from "@/components/standalone/fondation/DomainesInterventions";
import Gallerie from "@/components/standalone/fondation/Gallerie";
import Hero from "@/components/standalone/fondation/Hero";
import PresentationVideo from "@/components/standalone/fondation/PresentationVideo";
import Sponsors from "@/components/standalone/fondation/Sponsors";

export default function FondationKya() {
  return (
    <>
      <Hero />
      <ActionsEtObjectifs />
      <DomainesInterventions />
      <PresentationVideo />
      <Gallerie />
      <Sponsors />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("fondation.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

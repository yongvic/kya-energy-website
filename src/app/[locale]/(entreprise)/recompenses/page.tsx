import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Impact from "@/components/standalone/entreprise/a-propos/Impact";
import DomainesExcellence from "@/components/standalone/entreprise/recompenses/DomainesExcellence";
import Introduction from "@/components/standalone/entreprise/recompenses/Introduction";
import PrixEtDistinctions from "@/components/standalone/entreprise/recompenses/PrixEtDistinctions";
import Rejoindre from "@/components/standalone/entreprise/recompenses/Rejoindre";

export default function Awards() {
  return (
    <>
      <Introduction />
      <PrixEtDistinctions />
      <Impact />
      <DomainesExcellence />
      <Rejoindre />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("récompenses.seo");

  return {
    description: t("description"),
    title: t("titre"),
  };
}

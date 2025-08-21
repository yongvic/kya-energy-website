import DomainesDExcellence from "@/components/standalone/company/recompenses/domaines-dexcellence";
import Impact from "@/components/standalone/company/recompenses/impact";
import Introduction from "@/components/standalone/company/recompenses/introduction";
import PrixEtDistinctions from "@/components/standalone/company/recompenses/prix-et-distinctions";
import Rejoindre from "@/components/standalone/company/recompenses/rejoindre";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export default function Awards() {
  return (
    <>
      <Introduction />
      <PrixEtDistinctions />
      <Impact />
      <DomainesDExcellence />
      <Rejoindre />
    </>
  );
}

export function generateMetadata(): Metadata {
  const t = useTranslations("récompenses.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

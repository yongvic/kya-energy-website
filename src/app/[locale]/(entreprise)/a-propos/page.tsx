import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Carousel from "@/components/standalone/entreprise/a-propos/Carousel";
import Cta from "@/components/standalone/entreprise/a-propos/Cta";
import Equipe from "@/components/standalone/entreprise/a-propos/Equipe";
import Fondateur from "@/components/standalone/entreprise/a-propos/Fondateur";
import Impact from "@/components/standalone/entreprise/a-propos/Impact";
import Valeurs from "@/components/standalone/entreprise/a-propos/Valeurs";
import Vision from "@/components/standalone/entreprise/a-propos/Vision";

export default function Page() {
  const locale = useLocale();
  return (
    <>
      <Carousel />
      <Vision />
      <Fondateur />
      <Equipe locale={locale} />
      <Valeurs />
      <Impact />
      <Cta />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("à propos.seo");

  return {
    description: t("description"),
    title: t("titre"),
  };
}

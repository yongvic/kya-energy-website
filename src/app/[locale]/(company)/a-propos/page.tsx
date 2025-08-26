import Carousel from "@/components/standalone/company/a-propos/carousel";
import Cta from "@/components/standalone/company/a-propos/cta";
import Equipe from "@/components/standalone/company/a-propos/equipe";
import Fondateur from "@/components/standalone/company/a-propos/fondateur";
import Impact from "@/components/standalone/company/a-propos/impact";
import Valeurs from "@/components/standalone/company/a-propos/valeurs";
import Vision from "@/components/standalone/company/a-propos/vision";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export default function Page() {
  return (
    <>
      <Carousel />
      <Vision />
      <Fondateur />
      <Equipe />
      <Valeurs />
      <Impact />
      <Cta />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("a propos.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

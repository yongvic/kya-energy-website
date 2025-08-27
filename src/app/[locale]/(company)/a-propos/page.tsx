import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Carousel from "@/components/standalone/company/a-propos/carousel";
import Cta from "@/components/standalone/company/a-propos/cta";
import Equipe from "@/components/standalone/company/a-propos/equipe";
import Fondateur from "@/components/standalone/company/a-propos/fondateur";
import Impact from "@/components/standalone/company/a-propos/impact";
import Valeurs from "@/components/standalone/company/a-propos/valeurs";
import Vision from "@/components/standalone/company/a-propos/vision";

// biome-ignore lint/style/noDefaultExport: required by nextjs
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

// biome-ignore lint/style/useComponentExportOnlyModules: required by nextjs
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("à propos.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

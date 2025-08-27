import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import KyaSopMenages from "./KyaSopMenages";

export default function KyaSoP() {
  return <KyaSopMenages />;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("kya sop menages.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

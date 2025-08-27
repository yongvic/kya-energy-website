import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import KyaSopInstitutions from "./KyaSopInstitutions";

export default function KyaSoP() {
  return <KyaSopInstitutions />;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("kya sop institutions.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

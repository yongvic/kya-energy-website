import { Metadata } from "next";
import { useTranslations } from "next-intl";
import KyaSopInstitutions from "./KyaSopInstitutions";

export default function KyaSoP() {
  return <KyaSopInstitutions />
}

export function generateMetadata(): Metadata {
  const t = useTranslations("kya sop institutions.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

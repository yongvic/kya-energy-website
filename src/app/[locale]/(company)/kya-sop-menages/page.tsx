import { Metadata } from "next";
import { useTranslations } from "next-intl";
import KyaSopMenages from "./KyaSopMenages";

export default function KyaSoP() {
  return <KyaSopMenages />;
}

export function generateMetadata(): Metadata {
  const t = useTranslations("kya sop menages.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

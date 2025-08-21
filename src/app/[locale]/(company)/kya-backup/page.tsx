import { Metadata } from "next";
import { useTranslations } from "next-intl";
import KyaBackup from "./KyaBackup";

export default function KyaSoP() {
  return <KyaBackup />
}

export function generateMetadata(): Metadata {
  const t = useTranslations("kya backup.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

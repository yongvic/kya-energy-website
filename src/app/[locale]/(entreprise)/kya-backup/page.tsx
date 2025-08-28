import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import KyaBackup from "./KyaBackup";

export default function KyaSoP() {
  return <KyaBackup />;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("kya backup.seo");

  return {
    description: t("description"),
    title: t("titre"),
  };
}

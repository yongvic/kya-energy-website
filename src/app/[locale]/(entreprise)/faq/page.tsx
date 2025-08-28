import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FaqClientPage from "@/components/standalone/entreprise/faq/FaqClientPage";

const Faq = async () => {
  return <FaqClientPage />;
};

export default Faq;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("faq.seo");

  return {
    description: t("description"),
    title: t("titre"),
  };
}

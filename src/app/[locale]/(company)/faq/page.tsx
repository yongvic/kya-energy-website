import FaqClientPage from "@/components/standalone/company/faq/FaqClientPage";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Faq = async () => {
  return <FaqClientPage />;
};

export default Faq;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("faq.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

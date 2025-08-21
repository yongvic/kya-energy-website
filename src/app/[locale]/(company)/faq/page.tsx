import FaqClientPage from "@/components/standalone/company/faq/FaqClientPage";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

const Faq = async () => {
  return <FaqClientPage />;
};

export default Faq;

export function generateMetadata(): Metadata {
  const t = useTranslations("faq.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

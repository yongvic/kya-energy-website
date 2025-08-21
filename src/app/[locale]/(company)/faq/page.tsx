import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import FaqClientPage from "@/components/standalone/company/faq/FaqClientPage";
import { Metadata } from "next";

const FaqPage = async ({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await params;
  const t = await getTranslation(lang);
  const faqT = t.faq;

  return <FaqClientPage t={faqT} />;
};

export default FaqPage;

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return {
    title: dictionary.faq.metadata.title,
    description: dictionary.faq.metadata.description,
  };
}

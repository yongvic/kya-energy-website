import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import FaqClientPage from "@/components/FaqClientPage";

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
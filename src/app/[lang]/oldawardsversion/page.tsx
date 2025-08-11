import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import TranslationsType from "@/translations/translations.definition";
import AwardsTimeline from "./AwardsTimeline";

export default async function AwardsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary: TranslationsType = await getTranslation(lang);
  /* Sort most recents based on order */
  const awards = dictionary.awards.sort((a, b) => b.order - a.order);

  return <AwardsTimeline awards={awards} />;
}


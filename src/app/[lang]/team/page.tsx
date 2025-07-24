import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import TranslationsType from "@/translations/translations.definition";
import TeamCarousel from "./TeamCarousel";



export default async function TeamPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary: TranslationsType = await getTranslation(lang);
  const teamMembers = dictionary.team;

  return (
    <TeamCarousel teamMembers={teamMembers} />
  );
}

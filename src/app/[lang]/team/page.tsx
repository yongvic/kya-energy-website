import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import TranslationsType from "@/translations/translations.definition";
import TeamCarousel from "./TeamCarousel";
import { Metadata } from "next";

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

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return {
    title: dictionary.about.metadata.title,
    description: dictionary.about.metadata.description,
  };
}

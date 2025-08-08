import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import AboutClientPage from './AboutClientPage';
import type { Metadata } from 'next';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslation(lang);

  return <AboutClientPage t={t} />;
}

export async function generateMetadata({
  params
}: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return {
    title: dictionary.about.metadata.title,
    description: dictionary.about.metadata.description,
  };
}


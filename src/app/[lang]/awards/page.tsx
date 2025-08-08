import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import AwardsClientPage from './AwardsClientPage';
import { Metadata } from 'next';

export default async function AwardsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslation(lang);

  return <AwardsClientPage t={t} />;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return {
    title: `${dictionary.actu.title} • KYA-Energy Group`,
    description: dictionary.actu.description,
  };
}

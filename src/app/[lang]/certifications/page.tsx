import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import { CertificationClientPage } from './CertificationClientPage';
import '@/styles/certification.css';
import { Metadata } from 'next';

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslation(lang);

  return <CertificationClientPage t={t} />;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getTranslation(lang);

  return {
    title: `${dictionary.certification.title} • KYA-Energy Group`,
    description: dictionary.certification.subtitle,
  };
}

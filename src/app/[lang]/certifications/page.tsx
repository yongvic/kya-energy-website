import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import { CertificationClientPage } from './CertificationClientPage';
import '@/styles/certification.css';

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslation(lang);

  return <CertificationClientPage t={t} />;
}



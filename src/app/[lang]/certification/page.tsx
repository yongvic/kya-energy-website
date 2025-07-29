import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import { CertificationClientPage } from './CertificationClientPage';
import '@/styles/certification.css';

type CertificationPageProps = {
  params: { lang: Locale };
};

export default async function CertificationPage({
  params: { lang },
}: CertificationPageProps) {
  const t = await getTranslation(lang);

  return <CertificationClientPage t={t} />;
}



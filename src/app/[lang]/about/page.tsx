import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import AboutClientPage from './AboutClientPage';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslation(lang);

  return <AboutClientPage t={t} />;
}
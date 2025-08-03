import { getTranslation } from '@/lib/get-translation';
import { Locale } from '@/lib/i18n.config';
import AwardsClientPage from './AwardsClientPage';

export default async function AwardsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslation(lang);

  return <AwardsClientPage t={t} />;
}
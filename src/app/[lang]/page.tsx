import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import TranslationsType from "@/translations/translations.definition";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary: TranslationsType = await getTranslation(lang);

  return (
    <main>
      
    </main>
  );
}

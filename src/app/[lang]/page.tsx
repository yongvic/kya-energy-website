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
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">{dictionary.hero.title}</h1>
        <p className="mt-4 text-xl text-gray-600">{dictionary.hero.subtitle}</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          {dictionary.hero.cta}
        </button>
      </div>
    </main>
  );
}

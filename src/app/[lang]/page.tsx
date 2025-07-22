import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  await getTranslation(lang);

  return (
    <main>
      
    </main>
  );
}

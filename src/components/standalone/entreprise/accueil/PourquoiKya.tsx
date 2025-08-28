import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { strapiUrl } from "@/data/strapi";

interface PourquoiKya {
  titre: string;
  sousTitre: string;
  icone: {
    url: string;
  };
}

async function getPourquoiKya(locale: string): Promise<PourquoiKya[]> {
  const request = await fetch(
    `${strapiUrl}/api/pourquoi-kyas?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: PourquoiKya[] = response.data.map((item: PourquoiKya) => ({
    icone: {
      url: item.icone.url,
    },
    sousTitre: item.sousTitre,
    titre: item.titre,
  }));
  return result;
}

export default async function PourquoiKya() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.pourquoi kya");
  const pourquois = await getPourquoiKya(locale);

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-2 font-bold text-4xl text-kya-coffee">
          {t("titre")}
        </h2>
        <div className="mx-auto h-1 w-24 bg-kya-green" />
      </div>
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
        {pourquois.map((item) => (
          <article
            className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-md"
            key={item.titre}>
            <div className="mb-4 text-kya-green">
              <div className="flex items-center justify-center">
                <Image
                  alt={item.titre}
                  className="size-12 object-cover"
                  height={48}
                  src={strapiUrl + item.icone.url}
                  width={48}
                />
              </div>
              <h3 className="mb-2 font-bold text-kya-coffee text-xl">
                {item.titre}
              </h3>
              <p className="text-gray-600">{item.sousTitre}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

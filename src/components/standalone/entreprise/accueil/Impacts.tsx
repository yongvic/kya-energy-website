import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { strapiUrl } from "@/data/strapi";

interface Impact {
  icone: {
    url: string;
  };
  titre: string;
  sousTitre: string;
}

async function getImpacts(locale: string): Promise<Impact[]> {
  const request = await fetch(
    `${strapiUrl}/api/impacts?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: Impact[] = response.data.map((impact: Impact) => ({
    icone: {
      url: `${strapiUrl}${impact.icone.url}`,
    },
    sousTitre: impact.sousTitre,
    titre: impact.titre,
  }));
  return result;
}

export default async function Impacts() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.impacts");
  const impacts = await getImpacts(locale);

  return (
    <section className="bg-kya-white px-8 py-16">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-2 font-bold text-4xl text-kya-coffee">
          {t("titre")}
        </h2>
        <div className="mx-auto h-1 w-24 bg-kya-green" />
      </div>
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
        {impacts.map((impact: Impact) => (
          <div
            className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-md"
            key={impact.titre}>
            <div className="mb-4 text-kya-orange">
              {/* Show fetched image url as a tiny 32x32 sized icon */}
              <Image
                alt={impact.titre}
                height={32}
                src={impact.icone.url}
                width={32}
              />
            </div>
            <p className="font-bold text-3xl text-kya-green">{impact.titre}</p>
            <p className="text-gray-600">{impact.sousTitre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

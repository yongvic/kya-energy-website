import { strapiUrl } from "@/lib/config";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

interface IImpact {
  icone: {
    url: string;
  };
  titre: string;
  sous_titre: string;
}

async function getImpacts(locale: string): Promise<IImpact[]> {
  const request = await fetch(`${strapiUrl}/api/impacts?locale=${locale}&populate=*`);
  const response = await request.json();
  const result: IImpact[] = response.data.map(
    (impact: IImpact) => ({
      titre: impact.titre,
      sous_titre: impact.sous_titre,
      icone: {
        url: `${strapiUrl}${impact.icone.url}`,
      },
    })
  );
  return result;
}

export default async function Impacts() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.impacts");
  const impacts = await getImpacts(locale);

  return (
    <section className="bg-kya-white py-16 px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="font-bold text-4xl text-kya-coffee mb-2">
          {t("titre")}
        </h2>
        <div className="w-24 h-1 bg-kya-green mx-auto"></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {impacts.map((impact: IImpact) => (
          <div
            key={impact.titre}
            className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <div className="text-kya-orange mb-4">
              {/* Show fetched image url as a tiny 32x32 sized icon */}
              <Image src={impact.icone.url} alt={impact.titre} width={32} height={32} />
            </div>
            <p className="text-3xl font-bold text-kya-green">{impact.titre}</p>
            <p className="text-gray-600">{impact.sous_titre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

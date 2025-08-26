import { strapiUrl } from "@/lib/config";
import { getLocale, getTranslations } from "next-intl/server";

interface IPourquoiKya {
  titre: string;
  sous_titre: string;
  icone: {
    url: string;
  };
}

async function getPourquoiKya(locale: string): Promise<IPourquoiKya[]> {
  const request = await fetch(
    `${strapiUrl}/api/pourquoi-kyas?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: IPourquoiKya[] = response.data.map((item: IPourquoiKya) => ({
    titre: item.titre,
    sous_titre: item.sous_titre,
    icone: {
      url: item.icone.url,
    }
  }));
  return result;
}

export default async function PourquoiKya() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.pourquoi kya");
  const pourquois = await getPourquoiKya(locale);

  return (
    <section className="py-16 px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="font-bold text-4xl text-kya-coffee mb-2">
          {t("titre")}
        </h2>
        <div className="w-24 h-1 bg-kya-green mx-auto"></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pourquois.map((item) => (
          <div
            key={item.titre}
            className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <div className="text-kya-green mb-4">{item.icone.url}</div>
            <h3 className="text-xl font-bold text-kya-coffee mb-2">
              {item.titre}
            </h3>
            <p className="text-gray-600">{item.sous_titre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

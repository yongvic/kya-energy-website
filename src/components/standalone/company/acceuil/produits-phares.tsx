import { strapiUrl } from "@/lib/config";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface IProduitPhare {
  image: {
    url: string;
  };
  titre: string;
  description: string;
  lien_de_redirection: string;
}

async function getProduitsPhares(locale: string): Promise<IProduitPhare[]> {
  const request = await fetch(
    `${strapiUrl}/api/produits-phares?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: IProduitPhare[] = response.data.map(
    (produitPhare: IProduitPhare) => ({
      image: {
        url: `${strapiUrl}${produitPhare.image.url}`,
      },
      titre: produitPhare.titre,
      description: produitPhare.description,
      lien_de_redirection: produitPhare.lien_de_redirection,
    }),
  );
  return result;
}

export default async function ProduitsPhares() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.produits phares");
  const produitsPhares = await getProduitsPhares(locale);

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="font-bold text-4xl text-kya-coffee mb-2">
          {t("titre")}
        </h2>
        <div className="w-24 h-1 bg-kya-green mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {t("sous titre")}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produitsPhares.map((produit) => (
          <Link href={produit.lien_de_redirection} key={produit.titre}>
            <div className="w-full relative bg-white shadow-lg group z-10 rounded-xl group **:transition-transform duration-500 ease-in-out">
              <div className="overflow-hidden pt-6">
                <div className="h-64 w-max mx-auto">
                  <Image
                    src={produit.image.url}
                    alt={produit.titre}
                    className="h-64 w-auto object-scale-down group-hover:scale-105"
                    width={225}
                    height={321}
                  />
                </div>
                <div className="p-6 z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-kya-coffee mb-2">
                      {produit.titre}
                    </h3>
                    <p className="text-gray-700">{produit.description}</p>
                  </div>
                  <div>
                    {/* Add a subtle distinction */}
                    <button className="flex items-center gap-2 text-kya-green font-bold group/button cursor-pointer">
                      {t("savoir plus")}
                      <LuArrowRight className="-translate-x-0.5 group-hover/button:translate-x-0" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

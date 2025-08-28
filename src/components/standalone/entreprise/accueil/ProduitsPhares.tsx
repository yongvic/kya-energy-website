import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { LuArrowRight } from "react-icons/lu";
import { strapiUrl } from "@/data/strapi";

interface ProduitPhare {
  image: {
    url: string;
  };
  titre: string;
  description: string;
  lienDeRedirection: string;
}

async function getProduitsPhares(locale: string): Promise<ProduitPhare[]> {
  const request = await fetch(
    `${strapiUrl}/api/produits-phares?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: ProduitPhare[] = response.data.map(
    (produitPhare: ProduitPhare) => ({
      description: produitPhare.description,
      image: {
        url: `${strapiUrl}${produitPhare.image.url}`,
      },
      lienDeRedirection: produitPhare.lienDeRedirection,
      titre: produitPhare.titre,
    }),
  );
  return result;
}

export default async function ProduitsPhares() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.produits phares");
  const produitsPhares = await getProduitsPhares(locale);

  return (
    <section className="bg-gray-100 px-8 py-16">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-2 font-bold text-4xl text-kya-coffee">
          {t("titre")}
        </h2>
        <div className="mx-auto h-1 w-24 bg-kya-green" />
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          {t("sous titre")}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
        {produitsPhares.map((produit) => (
          <Link
            href={produit.lienDeRedirection}
            key={produit.titre}>
            <div className="group group relative z-10 w-full rounded-xl bg-white shadow-lg duration-500 ease-in-out **:transition-transform">
              <div className="overflow-hidden pt-6">
                <div className="mx-auto h-64 w-max">
                  <Image
                    alt={produit.titre}
                    className="h-64 w-auto object-scale-down group-hover:scale-105"
                    height={321}
                    src={produit.image.url}
                    width={225}
                  />
                </div>
                <div className="z-10 flex items-center justify-between p-6">
                  <div>
                    <h3 className="mb-2 font-bold text-2xl text-kya-coffee">
                      {produit.titre}
                    </h3>
                    <p className="text-gray-700">{produit.description}</p>
                  </div>
                  <div>
                    {/* Add a subtle distinction */}
                    <button
                      className="group/button flex cursor-pointer items-center gap-2 font-bold text-kya-green"
                      type="button">
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

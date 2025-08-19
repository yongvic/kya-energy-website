import { strapiUrl } from "@/lib/config";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

interface IProduitPhare {
  image: string;
  titre: string;
  description: string;
  lien: string;
}

async function getProduitsPhares(locale: string): Promise<IProduitPhare[]> {
  const request = await fetch(
    `${strapiUrl}/api/produitsphares?locale=${locale}`,
  );
  const response = await request.json();
  const result: IProduitPhare[] = response.data.map(
    (produitPhare: IProduitPhare) => ({
      image: produitPhare.image,
      titre: produitPhare.titre,
      description: produitPhare.description,
      lien: produitPhare.lien,
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
          <Link href={produit.lien} key={produit.titre}>
            <div className="w-full relative bg-white shadow-lg group z-10">
              <div className="overflow-hidden">
                <div className="h-64 w-max mx-auto">
                  <Image
                    src={produit.image}
                    alt={produit.lien}
                    className="h-64 w-auto object-scale-down"
                    width={225}
                    height={321}
                  />
                </div>
                <div className="p-6 bg-white z-10">
                  <h3 className="text-2xl font-bold text-kya-coffee mb-2">
                    {produit.titre}
                  </h3>
                  <p className="text-gray-700">{produit.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

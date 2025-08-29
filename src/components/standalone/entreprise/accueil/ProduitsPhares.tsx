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
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* 1. En-tête de la section */}
        <div className="animate-fade-in-up mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("sous titre")}
          </p>
        </div>

        {/* 2. Grille des Produits Phares */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {produitsPhares.map((produit, index) => (
            // On utilise le composant Link comme conteneur principal de la carte
            <Link
              className="animate-fade-in-up group flex flex-col rounded-2xl border border-slate-200 bg-white text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              href={produit.lienDeRedirection}
              key={produit.titre}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Cadre de l'image */}
              <div className="relative overflow-hidden rounded-t-2xl bg-slate-100 p-6">
                <Image
                  alt={produit.titre}
                  className="mx-auto h-56 w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                  height={300}
                  src={produit.image.url}
                  width={300}
                />
              </div>

              {/* Contenu de la carte */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mt-2 text-2xl font-bold text-kya-coffee">
                  {produit.titre}
                </h3>
                {/* Description */}
                <p className="mt-2 flex-grow text-slate-600">
                  {produit.description}
                </p>
                {/* Bouton CTA */}
                <div className="mt-6 flex items-center gap-2 font-semibold text-kya-orange">
                  <span>{t("savoir plus")}</span>
                  <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

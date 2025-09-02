import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { FaArrowRight } from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

interface PourquoiKya {
  titre: string;
  sousTitre: string;
  icone: string;
  href: string;
}

async function getPourquoiKya(locale: string): Promise<PourquoiKya[]> {
  const request = await fetch(
    `${strapiUrl}/api/pourquoi-kyas?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: PourquoiKya[] = response.data.map((item: any) => ({
    href: "#",
    icone: strapiUrl + item.icone.url,
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
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* 1. En-tête de la section */}
        <div className="animate-fade-in-up mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* 2. Grille des Piliers */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pourquois.map((item, index) => (
            <div
              className="animate-fade-in-up group relative"
              key={item.titre}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Le grand chiffre décoratif en arrière-plan */}
              <p className="absolute -left-4 -top-4 z-0 font-black text-[7rem] text-slate-100 transition-colors duration-300 group-hover:text-kya-green/20">
                0{index + 1}
              </p>

              {/* La carte de contenu, avec un effet de verre dépoli */}
              <div className="relative z-10 flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Icône */}
                <div className="flex size-14 items-center justify-center rounded-full bg-none mb-6 w-full">
                  <Image
                    alt={item.titre}
                    height={56}
                    src={item.icone}
                    width={56}
                  />
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-kya-coffee">
                  {item.titre}
                </h3>

                {/* Sous-titre */}
                <p className="mt-4 flex-grow text-slate-600">
                  {item.sousTitre}
                </p>

                {/* Lien (CTA) */}
                <Link
                  className="mt-8 hidden items-center gap-2 font-semibold text-kya-green"
                  href={item.href}>
                  <span>En savoir plus</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

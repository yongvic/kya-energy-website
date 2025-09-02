import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { strapiUrl } from "@/data/strapi";
import { ReactNode } from "react";

interface Impact {
  icone: string;
  titre: string;
  stat: string;
}

async function getImpacts(locale: string): Promise<Impact[]> {
  const request = await fetch(
    `${strapiUrl}/api/impacts?locale=${locale}&populate=*`,
  );
  const response = await request.json();
  const result: Impact[] = response.data.map((impact: any) => ({
    icone: `${strapiUrl}${impact.icone.url}`,
    titre: impact.titre,
    stat: impact.statistique,
  }));
  return result;
}

export default async function Impacts() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.impacts");
  const impacts = await getImpacts(locale);

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

        {/* 2. Grille des Piliers d'Impact */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {impacts.map((impact, index) => (
            <div
              key={impact.titre}
              // --- Le conteneur de chaque pilier ---
              // Ajoute un diviseur à gauche pour tous sauf le premier sur desktop
              className={`
                animate-fade-in-up flex flex-col items-center justify-center text-center md:items-start md:text-left *:w-full *:text-center
                ${index > 0 ? "md:border-l md:border-slate-200 md:pl-8" : ""}
              `}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* Icône */}
              <div className="flex size-14 items-center justify-center rounded-full mb-6">
                <Image
                  src={impact.icone}
                  alt={impact.titre}
                  className="object-cover"
                  width={56}
                  height={56}
                />
              </div>

              {/* La Statistique (l'élément le plus important) */}
              <p className="text-7xl font-extrabold leading-none tracking-tighter text-kya-orange">
                {impact.stat}
              </p>

              {/* Titre */}
              <h3 className="mt-4 text-xl font-bold text-kya-coffee">
                {impact.titre}
              </h3>

              {/* Sous-titre */}
              {/* <p className="mt-2 text-slate-600">{impact.sousTitre}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

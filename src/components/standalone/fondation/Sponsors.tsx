import { strapiUrl } from "@/data/strapi";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Sponsors() {
  const request = await fetch(`${strapiUrl}/api/confiances?populate=*`);
  const response = await request.json();
  const sponsors = response.data.map((sponsor: any) => ({
    nom: sponsor.nom_de_entreprise,
    logo: `${strapiUrl}${sponsor.logo.url}`,
  }));
  const extendedSponsors = [
    ...sponsors,
    ...sponsors,
  ];
  const t = await getTranslations("fondation.sponsors");

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="animate-fade-in-up mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* --- Le Scroller Infini --- */}
        <div
          className="group relative w-full overflow-hidden"
          // Masque les bords pour un effet de fondu
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}>
          {/* 
            Le conteneur animé.
            - `group-hover:[animation-play-state:paused]` met en pause l'animation au survol.
          */}
          <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {extendedSponsors.map((sponsor: any) => (
              <div
                key={sponsor.nom}
                className="group/card relative mx-8 flex-shrink-0">
                {/* Le logo */}
                <div className="flex h-24 w-40 items-center justify-center rounded-lg bg-kya-white p-4 shadow-sm transition-transform duration-300 group-hover/card:scale-110">
                  <Image
                    alt={sponsor.nom}
                    src={sponsor.logo}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* La carte-tooltip qui apparaît au survol */}
                <div className="absolute -top-4 left-1/2 w-64 -translate-x-1/2 -translate-y-full rounded-lg bg-kya-coffee p-4 text-kya-white opacity-0 shadow-xl transition-all duration-300 group-hover/card:opacity-100 group-hover/card:-translate-y-[110%]">
                  <h4 className="font-bold text-kya-orange">{sponsor.nom}</h4>
                  <p className="mt-1 text-sm text-kya-white/80">
                    {sponsor.nom}
                  </p>
                  {/* Petit triangle pour l'effet tooltip */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-kya-coffee" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

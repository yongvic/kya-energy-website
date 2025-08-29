import { getLocale, getTranslations } from "next-intl/server";
import { FaCheckCircle, FaGlobe, FaUsers } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";

interface Mission {
  texte: string;
}

interface Valeurs {
  nom: string;
  description: string;
}

async function getValeurs(locale: string): Promise<Valeurs[]> {
  const request = await fetch(`${strapiUrl}/api/valeurs?locale=${locale}`);
  const response = await request.json();
  const result: Valeurs[] = response.data.map((item: Valeurs) => ({
    description: item.description,
    nom: item.nom,
  }));
  return result;
}

async function getMission(locale: string): Promise<Mission> {
  const request = await fetch(`${strapiUrl}/api/mission?locale=${locale}`);
  const response = await request.json();
  const result: Mission = {
    texte: response.data.texte,
  };
  return result;
}

export default async function MissionEtValeurs() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.mission et valeurs");
  const mission = await getMission(locale);
  const valeurs = await getValeurs(locale);

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
            {mission.texte}
          </p>
        </div>

        {/* 2. Grille principale asymétrique */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
          {/* --- Colonne MISSION (plus petite, textuelle) --- */}
          <div
            className="animate-fade-in-up lg:col-span-2"
            style={{
              animationDelay: "150ms",
            }}>
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-kya-green/10">
                <FaGlobe className="text-2xl text-kya-green" />
              </div>
              <h3 className="text-3xl font-bold text-kya-coffee">
                {t("mission.titre")}
              </h3>
            </div>
            <p className="prose prose-lg mt-6 text-slate-600">
              {t("mission.description")}
            </p>
          </div>

          {/* --- Colonne VALEURS (plus grande, structurée) --- */}
          <div
            className="animate-fade-in-up lg:col-span-3 lg:border-l lg:border-slate-200 lg:pl-16"
            style={{
              animationDelay: "300ms",
            }}>
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-kya-orange/10">
                <FaUsers className="text-2xl text-kya-orange" />
              </div>
              <h3 className="text-3xl font-bold text-kya-coffee">
                {t("valeurs.titre")}
              </h3>
            </div>
            {/* Grille interne pour les valeurs */}
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {valeurs.map((valeur) => (
                <div
                  className="flex items-start gap-4"
                  key={valeur.nom}>
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-kya-green" />
                  <div>
                    <h4 className="font-semibold text-kya-coffee">
                      {valeur.nom}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {valeur.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

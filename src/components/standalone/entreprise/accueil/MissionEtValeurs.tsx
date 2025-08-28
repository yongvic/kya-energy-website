import { getLocale, getTranslations } from "next-intl/server";
import { FaCheckCircle, FaGlobe } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";

interface Mission {
  texte: string;
}

interface Valeurs {
  nom: string;
}

async function getValeurs(locale: string): Promise<Valeurs[]> {
  const request = await fetch(`${strapiUrl}/api/valeurs?locale=${locale}`);
  const response = await request.json();
  const result: Valeurs[] = response.data.map((item: Valeurs) => ({
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
    <section className="bg-kya-white px-8 py-16 dark:bg-gray-900">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-2 font-bold text-4xl text-kya-coffee">
          {t("titre")}
        </h2>
        <div className="mx-auto h-1 w-24 bg-kya-green" />
      </div>
      <div className="container mx-auto grid gap-12 md:grid-cols-2">
        {/* Mission */}
        <div className="rounded-lg bg-gray-50 p-8 text-center shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <span className="rounded-full bg-kya-green p-4 text-white">
              <FaGlobe size={32} />
            </span>
          </div>
          <h3 className="mb-4 font-bold text-2xl text-kya-green">
            {t("mission.titre")}
          </h3>
          <p className="text-gray-700 text-lg">
            {mission.texte ?? t("mission.texte")}
          </p>
        </div>
        {/* Values */}
        <div className="rounded-lg bg-gray-50 p-8 text-center shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <span className="rounded-full bg-kya-orange p-4 text-white">
              <FaPeopleGroup size={32} />
            </span>
          </div>
          <h3 className="mb-4 font-bold text-2xl text-kya-orange">
            {t("valeurs.titre")}
          </h3>
          <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
            {valeurs.map((item: Valeurs) => (
              <p
                className="flex items-center gap-3"
                key={item.nom}>
                <FaCheckCircle className="text-kya-green" />
                <span className="text-gray-700">{item.nom}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

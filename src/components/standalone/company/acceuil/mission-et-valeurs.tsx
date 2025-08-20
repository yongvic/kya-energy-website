import { strapiUrl } from "@/lib/config";
import { getLocale, getTranslations } from "next-intl/server";
import { FaCheckCircle, FaGlobe } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

interface IMission {
  icone?: string;
  titre: string;
  description: string;
}

interface IValeurs {
  icone?: string;
  titre: string;
  liste: string[];
}

async function getValeurs(locale: string): Promise<IValeurs> {
  const request = await fetch(`${strapiUrl}/api/valeur?locale=${locale}`);
  const response = await request.json();
  const result: IValeurs = {
    icone: response.data?.icone,
    titre: response.data.titre,
    liste: response.data.liste_des_valeurs[0]?.children.map(
      (item: {
        children: {
          text: string;
        }[];
      }) => item.children[0].text,
    ),
  };
  return result;
}

async function getMission(locale: string): Promise<IMission> {
  const request = await fetch(`${strapiUrl}/api/mission?locale=${locale}`);
  const response = await request.json();
  const result: IMission = {
    icone: response.data?.icone,
    titre: response.data.titre,
    description: response.data.description,
  };
  return result;
}

export default async function MissionEtValeurs() {
  const locale = await getLocale();
  const t = await getTranslations("page d'acceuil.mission et valeurs");
  const mission = await getMission(locale);
  const valeurs = await getValeurs(locale);

  return (
    <section className="bg-kya-white dark:bg-gray-900 py-16 px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="font-bold text-4xl text-kya-coffee mb-2">
          {t("titre")}
        </h2>
        <div className="w-24 h-1 bg-kya-green mx-auto"></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="bg-kya-green text-white p-4 rounded-full">
              <FaGlobe size={32} />
            </span>
          </div>
          <h3 className="text-2xl font-bold text-kya-green mb-4">
            {mission.titre ?? t("mission.titre")}
          </h3>
          <p className="text-gray-700 text-lg">
            {mission.description ?? t("mission.description")}
          </p>
        </div>
        {/* Values */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="bg-kya-orange text-white p-4 rounded-full">
              <FaPeopleGroup size={32} />
            </span>
          </div>
          <h3 className="text-2xl font-bold text-kya-orange mb-4">
            {valeurs.titre ?? t("valeurs.titre")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {valeurs.liste.map((value) => (
              <p key={value} className="flex items-center gap-3">
                <FaCheckCircle className="text-kya-green" />
                <span className="text-gray-700">{value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

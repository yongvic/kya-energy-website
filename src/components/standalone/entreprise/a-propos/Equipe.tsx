import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

interface TeamMember {
  id: number;
  nom: string;
  role: string;
  lienLinkedin?: string; // Champ optionnel pour le lien LinkedIn
  lienFacebook?: string;
  lienTwitter?: string;
  photo: {
    url: string;
  };
}

// La fonction de fetching des données, maintenant directement ici
async function fetchTeamMembers(locale: string): Promise<TeamMember[]> {
  try {
    const res = await fetch(
      `${strapiUrl}/api/membres-du-comites?locale=${locale}&populate=*`,
      {
        // On active le cache pour de meilleures performances
        // Re-valide les données toutes les heures
      },
    );
    if (!res.ok) throw new Error("Failed to fetch team members");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}

// Le composant est maintenant un 'async' Server Component
export default async function Equipe({ locale }: { locale: string }) {
  const t = useTranslations("à propos.equipe");
  const teamMembers = await fetchTeamMembers(locale);

  return (
    // biome-ignore lint/correctness/useUniqueElementIds: Anchor
    <section
      className="bg-slate-50 py-24 sm:py-32"
      id="equipe">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="mb-16 text-center">
          <p className="font-semibold text-kya-green">{t("leadership")}</p>
          <h2 className="mt-2 text-4xl font-extrabold text-kya-coffee sm:text-5xl">
            {t("comité")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-kya-coffee/70">
            {t("description")}
          </p>
        </div>

        {/* Grille des membres de l'équipe */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              className="group text-center"
              key={member.id}>
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl sm:h-48 sm:w-48">
                <Image
                  alt={member.nom}
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  src={`${strapiUrl}${member.photo.url}`}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-kya-coffee">
                  {member.nom}
                </h3>
                <p className="mt-1 text-kya-green">{member.role}</p>
                {/* Affiche l'icône LinkedIn seulement si l'URL existe */}
                {member.lienLinkedin && (
                  <Link
                    className="mt-2 mx-1 inline-block text-black transition-colors hover:text-blue-700"
                    href={member.lienLinkedin}
                    target="_blank">
                    <FaLinkedin size={24} />
                  </Link>
                )}
                {member.lienFacebook && (
                  <Link
                    className="mt-2 mx-1 inline-block text-black transition-colors hover:text-blue-700"
                    href={member.lienFacebook}
                    target="_blank">
                    <FaFacebook size={24} />
                  </Link>
                )}
                {member.lienTwitter && (
                  <Link
                    className="mt-2 mx-1 inline-block text-black transition-colors hover:text-blue-700"
                    href={member.lienTwitter}
                    target="_blank">
                    <FaTwitter size={24} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

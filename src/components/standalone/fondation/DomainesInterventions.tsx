import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaCheck } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";

export default function DomainesInterventions() {
  const t = useTranslations("fondation.domaines d'interventions");
  const domaines = [
    {
      description:
        "La Fondation KYA soutient l’éducation des jeunes filles en sciences et technologies, en valorisant les talents et en offrant des bourses aux plus vulnérables.",
      image: `${strapiUrl}/uploads/4528f8_7b1e1a9ca95b4a1fb9f92895ce206b7b_mv2_914a29eeac.webp`, // J'ai mis un chemin plus réaliste
      points: [
        "Bourses d'études pour les jeunes filles",
        "Programmes de mentorat en STEM",
        "Valorisation des talents locaux",
      ],
      title: "Education et formation",
    },
    {
      description:
        "La Fondation KYA facilite l’accès à l’énergie durable en zones rurales et forme gratuitement des filles à l’installation et à la maintenance de systèmes solaires.",
      image: `${strapiUrl}/uploads/c86a81_751bbaf123a34384b8ba99aba4f03e29_mv2_92daa307fe.avif`,
      points: [
        "Accès à l'énergie en zones rurales",
        "Formation professionnelle gratuite",
        "Maintenance de systèmes solaires",
      ],
      title: "Energies renouvelables",
    },
    {
      description:
        "La Fondation KYA œuvre pour les Objectifs de Développement Durable, en se concentrant sur 7 priorités : lutte contre la pauvreté, éducation, égalité des sexes, énergie durable, emploi, climat et partenariats.",
      image: `${strapiUrl}/uploads/image_b960fa7d0c.jpeg`,
      points: [
        "Alignement sur les ODD de l'ONU",
        "Focus sur 7 priorités stratégiques",
        "Création de partenariats pour l'impact",
      ],
      title: "Développement durable",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* 1. En-tête de la section, épuré et centré */}
        <div className="animate-fade-in-up mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* 2. Conteneur des domaines d'action */}
        <div className="space-y-24">
          {domaines.map((domain, index) => (
            <div
              className="animate-fade-in-up grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16"
              key={domain.title}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              {/* --- Colonne Image --- */}
              <div
                className={`group relative ${index % 2 !== 0 ? "md:order-last" : ""}`}>
                {/* Cadre subtil autour de l'image */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-2 transition-all duration-300 group-hover:border-kya-green">
                  <Image
                    alt={domain.title}
                    className="rounded-lg object-cover aspect-[4/3]"
                    height={600}
                    src={domain.image}
                    width={800}
                  />
                </div>
              </div>

              {/* --- Colonne Contenu --- */}
              <div>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-kya-coffee sm:text-4xl">
                  {domain.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  {domain.description}
                </p>
                {/* Liste des points clés, très "Notion" */}
                <ul className="mt-8 space-y-4 border-t border-slate-200 pt-8">
                  {domain.points.map((point) => (
                    <li
                      className="flex items-start gap-3"
                      key={point}>
                      <FaCheck className="mt-1.5 flex-shrink-0 text-kya-green" />
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { getTranslation } from "@/lib/get-translation";
import { Locale } from "@/lib/i18n.config";
import { FC } from "react";
import KyaFoundationClientPage from "@/components/KyaFoundationClientPage";

interface Props {
  params: {
    lang: Locale;
  };
}

const KyaFoundationPage: FC<Props> = async ({ params: { lang } }) => {
  const t = await getTranslation(lang);
  const foundationT = t.kyaFoundation;

  const interventionDomains = [
    {
      title: "Education et formation",
      description:
        "La Fondation KYA soutient l’éducation des jeunes filles en sciences et technologies, en valorisant les talents et en offrant des bourses aux plus vulnérables.",
      imageSrc: "/kya-foundation/image-1.png",
    },
    {
      title: "Energies renouvelables",
      description:
        "La Fondation KYA facilite l’accès à l’énergie durable en zones rurales et forme gratuitement des filles à l’installation et à la maintenance de systèmes solaires.",
      imageSrc: "/kya-foundation/image-2.png",
    },
    {
      title: "Développement durable",
      description:
        "La Fondation KYA œuvre pour les Objectifs de Développement Durable, en se concentrant sur 7 priorités : lutte contre la pauvreté, éducation, égalité des sexes, énergie durable, emploi, climat et partenariats.",
      imageSrc: "/kya-foundation/image-3.png",
    },
  ];

  const sponsors = [
    {
      name: "ASECNA",
      logo: "/sponsors/asecna.avif",
      description: "L’ASECNA est une agence panafricaine qui assure la sécurité de la navigation aérienne dans 17 pays africains.",
    },
    {
      name: "ONOMO",
      logo: "/sponsors/onomo.avif",
      description: "ONOMO Hôtel Lomé offre un cadre moderne et convivial au cœur de la capitale, idéal pour affaires et loisirs.",
    },
    {
      name: "CETEF",
      logo: "/sponsors/cetef.avif",
      description: "Le CETEF Togo 2000 est le principal centre d'expositions du Togo, dédié aux événements économiques, culturels...",
    },
    {
      name: "Moov",
      logo: "/sponsors/moov.avif",
      description: "Moov Africa Togo est un leader en téléphonie mobile, internet 4G et services financiers.",
    },
  ];

  return (
    <KyaFoundationClientPage
      t={foundationT}
      interventionDomains={interventionDomains}
      sponsors={sponsors}
    />
  );
};

export default KyaFoundationPage;

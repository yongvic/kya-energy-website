import {
  FaBuilding,
  FaCarBattery,
  FaCertificate,
  FaCube,
  FaHeart,
  FaHome,
  FaLeaf,
  FaQuestionCircle,
  FaThLarge,
  FaTrophy,
  FaUsers,
  FaWrench,
} from "react-icons/fa";
import type { NavItem } from "@/lib/header-types.ts";

export function generateNavigationData(t: any): NavItem[] {
  return [
    // --- 1. Accueil (Simple) ---
    {
      href: "/",
      label: t("accueil"),
    },

    // --- 2. Solutions (Méga Menu - Inchangé, c'est le cœur de l'offre) ---
    {
      children: [
        {
          description: t("solutions solaires résidentielles"),
          href: "/kya-sop-menages",
          icon: FaHome,
          label: t("pour les ménages"),
        },
        {
          description: t("systèmes pour entreprises"),
          href: "/kya-sop-institutions",
          icon: FaBuilding,
          label: t("pour les institutions"),
        },
        {
          description: t("systèmes de secours"),
          href: "/kya-backup",
          icon: FaCarBattery,
          label: t("kya backup"),
        },
        {
          description: t("explorez notre offre complète"),
          href: "/produits-et-services",
          icon: FaThLarge,
          label: t("tous nos produits et services"),
        },
      ],
      href: "/produits-et-services",
      label: t("solutions"),
      megaMenuContent: {
        features: [
          {
            icon: FaCube,
            label: t("solutions sur mesure"),
          },
          {
            icon: FaLeaf,
            label: t("approche durable"),
          },
          {
            icon: FaWrench,
            label: t("support et maintenance"),
          },
        ],
        imageUrl: "/kya-sop-commercial.avif",
        title: t("solutions pour l'avenir"),
      },
    },

    // --- 3. À propos (Nouveau Pôle - Identité et Support) ---
    {
      children: [
        {
          description: t("mission et vision"),
          href: "/a-propos",
          icon: FaUsers,
          label: t("notre histoire"),
        },
        {
          description: t("engagement pour la qualité"),
          href: "/certification-iso-9001",
          icon: FaCertificate,
          label: t("certification iso 9001"),
        },
        {
          description: t("réponses aux questions"),
          href: "/faq",
          icon: FaQuestionCircle,
          label: t("faq"),
        },
      ],
      href: "/a-propos",
      label: t("à propos"),
    },

    // --- 4. Engagements (Nouveau Pôle - Mission et Validation) ---
    {
      children: [
        {
          description: t("reconnaissance de l'excellence"),
          href: "/recompenses",
          icon: FaTrophy,
          label: t("récompenses"),
        },
        {
          description: t("engagement pour la communauté"),
          href: "/fondation-kya",
          icon: FaHeart,
          label: t("fondation kya"),
        },
      ],
      href: "/recompenses", // Le lien principal pointe vers la page la plus valorisante
      label: t("engagements"),
    },

    // --- 5. Blog (Simple) ---
    {
      href: "/blog",
      label: t("blog"),
    },
  ];
}

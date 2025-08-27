import {
  FaBoxes,
  FaChartLine,
  FaCog,
  FaCube,
  FaLeaf,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import type { NavItem } from "./header-types.ts";

export const navigationData: NavItem[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Nos Services",
    href: "/services",
    children: [
      {
        label: "Consulting",
        description: "Expert advice for your business",
        href: "/services/consulting",
        icon: FaUsers,
      },
      {
        label: "Development",
        description: "Custom software solutions",
        href: "/services/development",
        icon: FaCog,
      },
      {
        label: "Marketing",
        description: "Grow your online presence",
        href: "/services/marketing",
        icon: FaChartLine,
      },
    ],
    megaMenuContent: {
      imageUrl: "/background-homepage.avif",
      title: "Explorez nos solutions",
      features: [
        {
          label: "Solutions sur mesure",
          icon: FaCube,
        },
        {
          label: "Approche durable",
          icon: FaLeaf,
        },
        {
          label: "Intégration e-commerce",
          icon: FaShoppingCart,
        },
      ],
    },
  },
  {
    label: "Produits",
    href: "/products",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

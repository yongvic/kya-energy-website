"use client";
import { Navlink, NavlinkArgs } from "@/components/Navlink";
import TranslationsType from "@/translations/translations.definition";

export default function NavbarDesktop({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  const navlinks: NavlinkArgs[] = [
    { href: "/", text: dictionary.navigation.home },
    {
      href: "/produits-et-services",
      text: "Produits et Services",
      children: <div className="h-32">Hello from services</div>,
    },
    { href: "/a-propos-de-kya", text: "À propos de KYA" },
    {
      href: "/actualites-et-engagement",
      text: "Actualités et engagement",
      children: <div className="h-32">Hello from news</div>,
    },
  ];

  return (
    <nav className="relative flex items-center justify-center gap-6">
      {navlinks.map((link) => (
        <Navlink {...link} key={link.href} />
      ))}
    </nav>
  );
}

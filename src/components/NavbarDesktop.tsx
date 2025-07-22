"use client";
import Link from "next/link";

export function Navlink(
  {href, text}: {
    href: string,
    text: string,
  }
) {
  return (
    <Link href={href} className="navlink">{text}</Link>
  );
}

export default function NavbarDesktop() {
  return (
    <nav className="flex items-center justify-center gap-6">
      {[
        {href: "/", text: "Acceuil"},
        {href: "/produits-et-services", text: "Produits et Services"},
        {href: "/a-propos-de-kya", text: "À propos de KYA"},
        {href: "/actualites-et-engagement", text: "Actualités et engagement"}
      ].map((value) => (
        <Navlink href={value.href} text={value.text}/>
      ))}
    </nav>
  );
}

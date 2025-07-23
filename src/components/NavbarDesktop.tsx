"use client";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

type NavlinkArgs = {
  href: string;
  text: string;
  children?: React.ReactNode;
};

export function Navlink(
  { href, text, children }: NavlinkArgs
) {
  return (
    <Link href={href} className="group block py-3">
      {children != undefined ? (
        <>
          <p className="flex items-center gap-2 navlink">
            {text}
            <LuChevronDown className="group-hover:rotate-180 transition-all duration-300" size={20} />
          </p>
          <div className="mt-4 hidden h-0 group-hover:h-max group-hover:block absolute left-0 w-full transition duration-300 z-10">
            {children}
          </div>
        </>
      ) : (
        <p className="navlink">
          <span>{text}</span>
        </p>
      )}
    </Link>
  );
}

export default function NavbarDesktop() {
  return (
    <nav className="relative flex items-center justify-center gap-6">
      {new Array<NavlinkArgs>(
        { href: "/", text: "Acceuil", children: (<p>Hello</p>) },
        { href: "/produits-et-services", text: "Produits et Services" },
        { href: "/a-propos-de-kya", text: "À propos de KYA" },
        { href: "/actualites-et-engagement", text: "Actualités et engagement" }
      ).map((value) => (
        value.children != undefined ? (
          <Navlink href={value.href} text={value.text} key={value.href}>
            <div className="h-32">Hello people are here</div>
          </Navlink>
        ) : (<Navlink href={value.href} text={value.text} key={value.href} />)
      ))}
    </nav>
  );
}

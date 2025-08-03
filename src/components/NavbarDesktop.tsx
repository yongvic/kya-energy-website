"use client";
import { Navlink, NavlinkArgs } from "@/components/Navlink";
import TranslationsType from "@/translations/translations.definition";
import Link from "next/link";
import Image from "next/image";
import { getCurrentLocale } from "@/lib/locale-utils";
import { usePathname } from "next/navigation";
import { LuChevronRight } from "react-icons/lu";
import { useState } from "react";

export default function NavbarDesktop({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);

  function ProductsAndServices() {
    return (
      <div className="flex justify-around items-center size-full gap-4 text-center *:hover:text-kya-green">
        <Link href="/detail-products">
          <Image width={300} height={300} src="/products/kya-sop.png" alt="KYA-SoP" className="w-32 object-contain" />
        </Link>
        <Link href="/detail-products" className="font-bold text-xl">Voir nos KYA-SoP</Link>
        <Link href="/products-and-services" className="font-bold text-xl">Voir tous nos produits</Link>
      </div>
    );
  }

  function About() {
    return (
      <div className="flex justify-around items-center size-full gap-4 text-cennter *:hover:text-kya-green">
        <Link href="/about#dg" className="flex flex-col justify-center items-center gap-2">
          <Image width={300} height={300} src="/team/azoumah.avif" alt="Prof. Yao AZOUMAH" className="w-32 bject-contain" />
          <p>Prof. Yao K. AZOUMAH</p>
        </Link>
        <Link href="/about#equipe" className="font-bold text-xl">Voir notre équipe</Link>
        <Link href="/awards" className="font-bold text-xl">Nos récompenses</Link>
      </div>
    );
  }

  function NewsAndEngagement() {
    return (
      <div className="flex justify-around items-center size-full gap-4 text-center *:hover:text-kya-green">
        <Link href="/certifications" className="flex flex-col justify-center items-center gap-2">
          <Image width={300} height={300} src="/certification/certif.avif" alt="Certification" className="w-32 object-contain" />
          <p>Notre certification ISO 9001:2015<br />Une reconnaissance de notre <br />engagement vers la qualité</p>
        </Link>
        <Link href="/kya-foundation" className="font-bold text-xl">
          La Fondation KYA
        </Link>
        <Link href="#" className="flex flex-col justify-center items-center gap-2">
          <Image width={300} height={300} src="https://static.wixstatic.com/media/2fcfb1_aca3321056bb4a33b40806f4d2060990~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_avif,quality_auto/2fcfb1_aca3321056bb4a33b40806f4d2060990~mv2.jpg" alt="Notre info" className="w-32 object-contain" />
          <p>Voir nos infos</p>
        </Link>
      </div>
    );
  }

  const navlinks: NavlinkArgs[] = [
    {
      href: `/${currentLocale}`,
      text: dictionary.navigation.home,
    },
    {
      href: `/${currentLocale}/products-and-services`,
      text: dictionary.navigation["products-and-services"],
      children: <ProductsAndServices />,
    },
    {
      href: `/${currentLocale}/about`,
      text: dictionary.navigation.about,
      children: <About />,
    },
    {
      href: `/${currentLocale}/kya-foundation`,
      text: dictionary.navigation["news-and-engagement"],
      children: <NewsAndEngagement />,
    },
  ];

  function Links() {
    const [children, setChildren] = useState(
      navlinks.find((link) => link.href === pathname),
    );

    function handleHover(e: React.MouseEvent | React.TouchEvent) {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      const hoveredLink = navlinks.find((link) => link.href === href);
      setChildren(hoveredLink);
    }

    return (
      <div className="size-full flex gap-2 items-stretch">
        <div className="space-y-2">
          {navlinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onMouseMove={handleHover}
              onTouchMove={handleHover}
              className={`flex font-semibold items-center justify-between text-nowrap rounded w-full gap-2 p-2 hover:bg-kya-green hover:text-kya-white transition-all duration-300 ${link.href === pathname ? "text-kya-white bg-kya-green" : "text-black"}`}>
              {link.text}
              {link.children && (
                <LuChevronRight
                  className={`transition-transform duration-300`}
                  size={20}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 size-full rounded-xl">{children?.children}</div>
      </div>
    );
  }

  return (
    <nav className="relative flex items-center justify-center gap-6">
      {navlinks.map((link) =>
        link.children ? (
          <Navlink key={link.href} href={link.href} text={link.text}>
            <div className="flex gap-4 size-full">
              <Links />
            </div>
          </Navlink>
        ) : (
          <Navlink href={link.href} text={link.text} key={link.href} />
        ),
      )}
    </nav>
  );
}

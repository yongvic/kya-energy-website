"use client";
import { Navlink, NavlinkArgs } from "@/components/Navlink";
import TranslationsType from "@/translations/translations.definition";
import Link from "next/link";
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
    return <div>Products and Services Content</div>;
  }

  function About() {
    return <div>About Content</div>;
  }

  function NewsAndEngagement() {
    return <div>News and Engagement Content</div>;
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
      href: `/${currentLocale}/news-and-engagement`,
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
      <div className="w-max flex gap-2 items-stretch">
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
        <div className="bg-gray-50 size-full">{children?.children}</div>
      </div>
    );
  }

  return (
    <nav className="relative flex items-center justify-center gap-6">
      {navlinks.map((link) =>
        link.children ? (
          <Navlink key={link.href} href={link.href} text={link.text}>
            <div className="flex gap-4">
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

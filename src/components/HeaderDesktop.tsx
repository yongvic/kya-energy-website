import Image from "next/image";
import Link from "next/link";
import type TranslationsType from "@/translations/translations.definition";
import NavbarDesktop from "@/components/NavbarDesktop";
import ThemeSwitcherButton from "@/components/ThemeSwitcherButton";
import LocaleSwitcherButton from "@/components/LocaleSwitcherButton";

export default function HeaderDesktop({
  className, dictionary
}: {
    className?: string,
    dictionary: TranslationsType
  }) {
  return (
    <div className={`${className} container mx-auto px-4`}>
      {/* Top header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            width={96}
            height={96}
            src="/logo.webp"
            alt={dictionary.header.logo}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link href="" className="px-4 py-2 font-medium text-lg border rounded-md">Politique qualité</Link>
          <Link href="" className="px-4 py-2 font-medium text-lg rounded-md bg-green-400 hover:bg-green-500 transition-colors duration-300">Contact</Link>
          <LocaleSwitcherButton dictionary={dictionary} />
          <ThemeSwitcherButton dictionary={dictionary} />
        </div>
      </div>
      {/* Bottom nav */}
      <NavbarDesktop dictionary={dictionary} />
    </div>
  );
}

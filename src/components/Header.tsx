import TranslationsType from "@/translations/translations.definition";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";

export default function Header({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#f3f4f60a] dark:bg-[#1018280a] backdrop-blur-xs">
      <HeaderMobile dictionary={dictionary} className="md:hidden"/>
      <HeaderDesktop dictionary={dictionary} className="hidden md:block"/>
    </header>
  );
}

import TranslationsType from "@/translations/translations.definition";
import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";

export default function Header({
  dictionary,
}: {
  dictionary: TranslationsType;
}) {
  return (
    <header>
      <HeaderMobile dictionary={dictionary} />
      <HeaderDesktop />
    </header>
  );
}

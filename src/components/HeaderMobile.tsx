import ThemeSwitcherButton from "@/components/ThemeSwitcherButton";
import TranslationsType from "@/translations/translations.definition";

export default function HeaderMobile({
  className = "",
  dictionnary,
}: {
  className?: string;
  dictionnary: TranslationsType;
}) {
  return <div className={`${className}`}></div>;
}

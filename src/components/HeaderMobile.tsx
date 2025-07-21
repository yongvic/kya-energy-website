import LocaleSwitcherButton from "@/components/LocaleSwitcherButton";
import TranslationsType from "@/translations/translations.definition";

export default function HeaderMobile({
  className = "",
  dictionnary,
}: {
  className?: string;
  dictionnary: TranslationsType;
}) {
  return (
    <div className={`${className}`}>
      <LocaleSwitcherButton dictionnary={dictionnary} />
    </div>
  );
}

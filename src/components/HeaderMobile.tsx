import TranslationsType from "@/translations/translations.definition";

export default function HeaderMobile({
  className = "",
  dictionary,
}: {
  className?: string;
  dictionary: TranslationsType;
}) {
  return <div className={`${className}`}></div>;
}

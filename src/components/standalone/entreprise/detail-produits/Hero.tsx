import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("detail produits.hero");
  return (
    <section className="mx-auto mb-16 max-w-4xl px-4 text-center">
      {/* Anciennement .detailSectionTitle */}
      <div className="mb-12">
        <h3 className="text-4xl font-bold text-kya-coffee">{t("titre")}</h3>
        {/* La petite barre de soulignement décorative */}
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-kya-green" />
      </div>

      <p className="mb-6 text-lg text-kya-coffee/80">{t("description")}</p>

      {/* 
        La liste. On utilise 'mx-auto' pour la centrer, mais 'text-left'
        pour que le contenu à l'intérieur soit aligné à gauche.
      */}
      <ol className="mx-auto max-w-2xl list-inside list-decimal text-left">
        {/* 
          Anciennement .certified.
          Les classes sont appliquées directement sur chaque <li>.
        */}
        <li className="mb-2 text-lg font-semibold text-kya-green">
          {t("detail 1")}
        </li>
        <li className="mb-2 text-lg font-semibold text-kya-green">
          {t("detail 2")}
        </li>
        {/* Ajoutez d'autres détails ici si nécessaire */}
      </ol>
    </section>
  );
}

import { useTranslations } from "next-intl";
import ProductCard from "./ProductCard";

export default function Details() {
  const t = useTranslations("detail produits.details");

  const productsData = [
    {
      href: "/kya-sop-menages",
      imageUrl: "/products/gamme-kya-sop/kya-sop-residentiel.png",
      translationKey: "kya sop menage",
    },
    {
      href: "/kya-sop-institutions",
      imageUrl: "/products/gamme-kya-sop/kya-sop-commercial.png",
      translationKey: "kya sop commercial",
    },
    {
      href: "/kya-backup",
      imageUrl: "/products/gamme-kya-sop/kya-sop-communautaire.png",
      translationKey: "kya sop communautaire",
    },
  ];

  return (
    <section className="mb-16">
      {/* Titre de la section */}
      <div className="mb-12 text-center">
        <h3 className="text-4xl font-bold text-kya-coffee">{t("titre")}</h3>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-kya-green" />
      </div>

      {/* 
        Anciennement .productGrid
        - 'grid-cols-1' pour mobile (par défaut)
        - 'md:grid-cols-3' pour les écrans moyens et plus
      */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product) => (
          <ProductCard
            description={t(`${product.translationKey}.description`)}
            href={product.href}
            imageUrl={product.imageUrl}
            key={product.href}
            title={t(`${product.translationKey}.titre`)}
          />
        ))}
      </div>
    </section>
  );
}

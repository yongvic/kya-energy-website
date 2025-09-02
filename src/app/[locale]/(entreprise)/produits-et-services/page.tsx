import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Accordion from "@/components/standalone/entreprise/produits-et-services/Accordion";
import Financement from "@/components/standalone/entreprise/produits-et-services/Financement";
import Promotions from "@/components/standalone/entreprise/produits-et-services/Promotions";
import { strapiUrl } from "@/data/strapi";
import { FaArrowRight } from "react-icons/fa";

export default async function ProductsAndServicesPage() {
  const t = await getTranslations("produits et services.acceuil");

  async function fetchProductsData() {
    const request = await fetch(`${strapiUrl}/api/produits-phares?populate=*`);
    const response = await request.json();
    return response.data.map(
      (data: {
        titre: string;
        description: string;
        image: {
          url: string;
        };
      }) => ({
        description: data.description,
        image: `${strapiUrl}${data.image.url}`,
        label: data.titre,
      }),
    );
  }

  const products = await fetchProductsData();

  async function fetchServicesData() {
    const request = await fetch(`${strapiUrl}/api/services?populate=*`);
    const response = await request.json();
    return response.data.map(
      (data: {
        titre: string;
        description: string;
        photo: {
          url: string;
        };
        lien: string;
      }) => ({
        description: data.description,
        image: `${strapiUrl}${data.photo.url}`,
        lien: data.lien,
        titre: data.titre,
      }),
    );
  }

  const services = await fetchServicesData();

  return (
    <main>
      {/* --- 1. Promotional Offers Section --- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="relative mb-8 text-center text-4xl font-bold text-kya-coffee">
          {t("offres promotionnelles")}
          {/* Soulignement vert */}
          <span className="absolute -bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-kya-green" />
        </h2>
        <Promotions />
      </section>

      {/* --- 2. Product Lines Section (Accordion) --- */}
      <section className="overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        {/* Titre et sous-titre de la section */}
        <div className="text-center">
          <h2 className="relative mb-8 text-4xl font-bold text-kya-coffee">
            {t("produits.titre")}
            <span className="absolute -bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-kya-green" />
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-60 text-slate-600">
            {t("produits.sous titre")}
          </p>
        </div>

        <Accordion products={products} />

        {/* Bannière du Catalogue */}
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl bg-blue-50 p-6 text-center sm:flex-row sm:text-left">
          <p className="text-xl font-medium text-kya-coffee">
            {t("produits.savoir plus")}
          </p>
          <Link
            className="text-lg font-bold text-sky-500 hover:underline"
            href="/detail-produits">
            {t("voir plus")}
          </Link>
        </div>
      </section>

      {/* --- 3. Services Section --- */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="container mx-auto px-4">
          {/* En-tête de section */}
          <div className="animate-fade-in-up mb-16 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
              {t("titre")}
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t("description")}
            </p>
          </div>

          {/* Grille des cartes de service */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(
              (
                service: {
                  lien: string;
                  titre: string;
                  image: string;
                  description: string;
                },
                index: number,
              ) => (
                <Link
                  className="animate-fade-in-up group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 text-left transition-all duration-300 hover:border-kya-green hover:shadow-2xl hover:-translate-y-2"
                  href={service.lien}
                  key={service.titre}
                  style={{
                    animationDelay: `${150 * index}ms`,
                  }}>
                  {/* Icône */}
                  <div className="flex w-full items-center justify-center rounded-full bg-kya-green/10 mb-6">
                    <Image
                      src={service.image}
                      alt={service.titre}
                      width={300}
                      height={200}
                    />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl font-bold text-kya-coffee">
                    {service.titre}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-grow">{service.description}</p>

                  {/* Lien CTA "Découvrir" hidden by flex */}
                  <div className="mt-8 hidden items-center gap-2 font-semibold text-kya-green">
                    <span>Découvrir le service</span>
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* --- 4. Financing Section --- */}
      <Financement />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("produits et services.seo");

  return {
    description: t("description"),
    title: t("titre"),
  };
}

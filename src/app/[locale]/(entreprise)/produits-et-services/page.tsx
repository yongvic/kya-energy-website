import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Accordion from "@/components/standalone/entreprise/produits-et-services/Accordion";
import Financement from "@/components/standalone/entreprise/produits-et-services/Financement";
import Promotions from "@/components/standalone/entreprise/produits-et-services/Promotions";
import { strapiUrl } from "@/data/strapi";

interface ProductItem {
  label: string; // eq `title` on strapi
  image: string; // The link
  description: string;
}

export default async function ProductsAndServicesPage() {
  const t = await getTranslations("produits et services.acceuil");

  async function fetchProductsData() {
    const request = await fetch(`${strapiUrl}/api/produits?populate=*`);
    const response = await request.json();
    return response.data.map(
      (data: {
        nom: string;
        description: string;
        photo: {
          url: string;
        };
      }) => ({
        description: data.description,
        image: `${strapiUrl}${data.photo.url}`,
        label: data.nom,
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
      }) => ({
        description: data.description,
        image: `${strapiUrl}${data.photo.url}`,
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
          <p className="mx-auto mb-12 max-w-2xl text-lg text-kya-coffee/70">
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
            href="#test">
            {t("voir plus")}
          </Link>
        </div>
      </section>

      {/* --- 3. Services Section --- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        {/* Titre et sous-titre de la section */}
        <div className="text-center">
          <h2 className="relative mb-8 text-4xl font-bold text-kya-coffee">
            {t("services.titre")}
            <span className="absolute -bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-kya-green" />
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-kya-coffee/70">
            {t("services.sous titre")}
          </p>
        </div>

        {/* Grille des services */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            // Anciennement .service_card
            <div
              className="overflow-hidden rounded-lg bg-kya-white text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              key={service.titre}>
              {/* Anciennement .service_card_image_container */}
              <div className="relative h-52 w-full">
                <Image
                  alt={service.titre}
                  className="object-cover"
                  fill
                  src={service.image} // object-fit: cover
                />
              </div>
              {/* Anciennement .service_card_content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-kya-orange">
                  {service.titre}
                </h3>
                <p className="mb-6 text-kya-coffee/70">{service.description}</p>
                {/* 
                  Le CTA était commenté dans votre code original, 
                  mais voici comment le styler.
                */}
                {/* 
                <Link href="#" className="rounded-full bg-kya-green px-6 py-2 font-semibold text-kya-white transition hover:bg-kya-green/90">
                  En savoir plus
                </Link>
                */}
              </div>
            </div>
          ))}
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

import Image from "next/image";
import styles from "@/styles/products-and-services.module.css";
import Accordion from "@/components/standalone/company/produits-et-services/Accordion";
import { MotionDiv } from "@/components/standalone/company/produits-et-services/ClientMotion"; // Corrected import
import { Metadata } from "next";
import Promotions from "@/components/standalone/company/produits-et-services/Promotions";
import { strapiUrl } from "@/lib/config";
import { getTranslations } from "next-intl/server";
import Financement from "@/components/standalone/company/produits-et-services/financement";

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
    const returnData: ProductItem[] = [];
    response.data.forEach(
      (data: {
        nom: string;
        description: string;
        photo: {
          url: string;
        };
      }) => {
        returnData.push({
          label: data.nom,
          description: data.description,
          image: `${strapiUrl}${data.photo.url}`,
        });
      },
    );
    return returnData;
  }

  const products = await fetchProductsData();

  async function fetchServicesData() {
    const request = await fetch(`${strapiUrl}/api/services?populate=*`);
    const response = await request.json();
    const returnData = response.data.map(
      (data: {
        titre: string;
        description: string;
        photo: {
          url: string;
        };
      }) => ({
        titre: data.titre,
        description: data.description,
        image: `${strapiUrl}${data.photo.url}`,
      }),
    );
    return returnData;
  }

  const services = await fetchServicesData();

  return (
    <main>
      {/* 1. Promotional Offers Section */}
      <section>
        <h2 className={styles.section_title}>{t("offres promotionnelles")}</h2>
        <Promotions />
      </section>
      {/*<section className={styles.section}>
        <h2 className={styles.section_title}>{t.products["promotional-offers"]}</h2>
        <div className={styles.promo_container}>
          <PromotionalCarousel t={t} />
          <button className={styles.promo_button}>{t.services["learn-more"]}</button>
        </div>
      </section>*/}

      {/* 2. Product Lines Section */}
      <section className={styles.section}>
        <div className="section-title">
          <h2 className={styles.section_title}>{t("produits.titre")}</h2>
          <p className={styles.section_subtitle}>{t("produits.sous titre")}</p>
        </div>

        <Accordion products={products} />
        <div className={styles.catalogue_banner}>
          <p className={styles.catalogue_text}>{t("produits.savoir plus")}</p>
          <a href="#" className={styles.catalogue_link}>
            {t("voir plus")}
          </a>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className={styles.section}>
        <h2 className={styles.section_title}>{t("services.titre")}</h2>
        <p className={styles.section_subtitle}>{t("services.sous titre")}</p>
        <div className={styles.services_grid}>
          {services.map((service) => (
            <MotionDiv
              key={index}
              className={styles.service_card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.service_card_image_container}>
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className={styles.service_card_image}
                />
              </div>
              <div className={styles.service_card_content}>
                <h3 className={styles.service_card_title}>{service.title}</h3>
                <p className={styles.service_card_description}>
                  {service.description}
                </p>
                {/*<a href="#" className={styles.service_card_cta}>
                  {t.services["learn-more"]}
                </a>*/}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* 4. Financing Section */}
      <Financement />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("produits et services.seo");

  return {
    title: t("titre"),
    description: t("description"),
  };
}

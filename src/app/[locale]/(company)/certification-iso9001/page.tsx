import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Certificat from "@/components/standalone/company/certification-iso9001/certificat";
import Confiance from "@/components/standalone/company/certification-iso9001/confiance";
import Engagement from "@/components/standalone/company/certification-iso9001/engagement";
import Hero from "@/components/standalone/company/certification-iso9001/hero";
import Pourquoi from "@/components/standalone/company/certification-iso9001/pourquoi";
import "@/styles/certification.css";

export default function CertificationISO9001() {
  return (
    <>
      <Hero />
      <Certificat />
      <Pourquoi />
      <Engagement />
      <Confiance />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("certification iso 9001.seo");
  return {
    title: t("titre"),
    description: t("description"),
  };
}

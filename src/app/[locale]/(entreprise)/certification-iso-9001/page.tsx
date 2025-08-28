import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Certificat from "@/components/standalone/entreprise/certification-iso9001/Certificat";
import Confiance from "@/components/standalone/entreprise/certification-iso9001/Confiance";
import Engagement from "@/components/standalone/entreprise/certification-iso9001/Engagement";
import Hero from "@/components/standalone/entreprise/certification-iso9001/Hero";
import Pourquoi from "@/components/standalone/entreprise/certification-iso9001/Pourquoi";

export default function CertificationIso9001() {
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
    description: t("description"),
    title: t("titre"),
  };
}

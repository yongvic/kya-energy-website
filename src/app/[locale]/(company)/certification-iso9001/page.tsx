import Certificat from "@/components/standalone/company/certification-iso9001/certificat";
import Confiance from "@/components/standalone/company/certification-iso9001/confiance";
import Engagement from "@/components/standalone/company/certification-iso9001/engagement";
import Hero from "@/components/standalone/company/certification-iso9001/hero";
import Pourquoi from "@/components/standalone/company/certification-iso9001/pourquoi";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

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

export function generateMetadata(): Metadata {
  const t = useTranslations("certification iso 9001.seo");
  return {
    title: t("titre"),
    description: t("description"),
  };
}

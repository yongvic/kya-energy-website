import Certificat from "@/app/components/standalone/company/certification-iso9001/certificat";
import Confiance from "@/app/components/standalone/company/certification-iso9001/confiance";
import Engagement from "@/app/components/standalone/company/certification-iso9001/engagement";
import Hero from "@/app/components/standalone/company/certification-iso9001/hero";
import Pourquoi from "@/app/components/standalone/company/certification-iso9001/pourquoi";

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

import Carousel from "@/components/standalone/company/about/carousel";
import Cta from "@/components/standalone/company/about/cta";
import Equipe from "@/components/standalone/company/about/equipe";
import Fondateur from "@/components/standalone/company/about/fondateur";
import Impact from "@/components/standalone/company/about/impact";
import Valeurs from "@/components/standalone/company/about/valeurs";
import Vision from "@/components/standalone/company/about/vision";

export default function Page() {
  return (
    <>
      <Carousel />
      <Vision />
      <Fondateur />
      <Equipe />
      <Valeurs />
      <Impact />
      <Cta />
    </>
  );
}

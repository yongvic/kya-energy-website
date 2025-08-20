import Carousel from "@/app/components/standalone/company/about/carousel";
import Cta from "@/app/components/standalone/company/about/cta";
import Equipe from "@/app/components/standalone/company/about/equipe";
import Fondateur from "@/app/components/standalone/company/about/fondateur";
import Impact from "@/app/components/standalone/company/about/impact";
import Valeurs from "@/app/components/standalone/company/about/valeurs";
import Vision from "@/app/components/standalone/company/about/vision";

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

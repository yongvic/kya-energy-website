import Carousel from "@/components/standalone/company/a-propos/carousel";
import Cta from "@/components/standalone/company/a-propos/cta";
import Equipe from "@/components/standalone/company/a-propos/equipe";
import Fondateur from "@/components/standalone/company/a-propos/fondateur";
import Impact from "@/components/standalone/company/a-propos/impact";
import Valeurs from "@/components/standalone/company/a-propos/valeurs";
import Vision from "@/components/standalone/company/a-propos/vision";

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

import DomainesDExcellence from "@/app/components/standalone/company/awards/domaines-dexcellence";
import Impact from "@/app/components/standalone/company/awards/impact";
import Introduction from "@/app/components/standalone/company/awards/introduction";
import PrixEtDistinctions from "@/app/components/standalone/company/awards/prix-et-distinctions";
import Rejoindre from "@/app/components/standalone/company/awards/rejoindre";

export default function Awards() {
  return (
    <>
      <Introduction />
      <PrixEtDistinctions />
      <Impact />
      <DomainesDExcellence />
      <Rejoindre />
    </>
  );
}

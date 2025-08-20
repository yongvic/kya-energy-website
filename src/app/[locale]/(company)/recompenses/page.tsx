import DomainesDExcellence from "@/components/standalone/company/awards/domaines-dexcellence";
import Impact from "@/components/standalone/company/awards/impact";
import Introduction from "@/components/standalone/company/awards/introduction";
import PrixEtDistinctions from "@/components/standalone/company/awards/prix-et-distinctions";
import Rejoindre from "@/components/standalone/company/awards/rejoindre";

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

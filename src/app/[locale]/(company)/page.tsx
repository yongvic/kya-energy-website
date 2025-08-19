import Hero from "@/app/components/standalone/company/homepage/hero";
import Impacts from "@/app/components/standalone/company/homepage/impacts";
import MissionEtValeurs from "@/app/components/standalone/company/homepage/mission-et-valeurs";
import YoutubeVideo from "@/app/components/standalone/company/homepage/youtube-video";

export default function Homepage() {
  return (
    <>
      <Hero />
      <MissionEtValeurs />
      <Impacts />
      <YoutubeVideo />
    </>
  );
}

import { useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaSolarPanel, FaLeaf, FaGlobeAfrica } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export default function Impact() {
  const [impactScope, animateImpact] = useAnimate();
  const t = useTranslations("à propos.impact");

  return (
    <div ref={impactScope} className="bg-gray-200 py-32">
      <div className="container mx-auto px-4">
        <div className="section-title opacity-0 px-4 lg:px-48">
          <div className="flex items-center justify-center my-4">
            <p className="w-max rounded-full px-4 py-2 bg-kya-green text-white font-bold text-sm">{t("titre")}</p>
          </div>
          <h2 className="text-center text-4xl font-bold w-full">{t("sous titre")}</h2>
          <div className="flex justify-center items-center my-4">
            <div className="h-1 w-32 bg-green-300"></div>
          </div>
          <p className="text-center text-xl">{t("description")}</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaSolarPanel />, stat: "1,000+", title: "Installations Solaires", desc: "Systèmes déployés avec succès" },
            { icon: <FaHouse />, stat: "50,000+", title: "Foyers Alimentés", desc: "Familles bénéficiant d'énergie propre" },
            { icon: <FaLeaf />, stat: "25,000T", title: "CO₂ Évitées", desc: "Impact environnemental positif" },
            { icon: <FaGlobeAfrica />, stat: "15", title: "Pays d'Intervention", desc: "Présence continentale active" }
          ].map((value, index) => (
            <div key={index} className="impact-card opacity-0 text-center flex flex-col items-center gap-2 p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-max p-4 bg-green-200 text-kya-green rounded-full text-3xl">{value.icon}</div>
              <p className="font-bold text-4xl py-2">{value.stat}</p>
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-kya-coffee">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

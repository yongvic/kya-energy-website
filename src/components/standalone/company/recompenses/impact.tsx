import { useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { FaEarthAfrica, FaPeopleGroup } from "react-icons/fa6";

export default function Impact() {
  const [impactScope, animateImpact] = useAnimate();
  const t = useTranslations("récompenses.impact");

  return (
    <div ref={impactScope} className="bg-gradient-to-tr from-orange-100 to-green-100 py-32">
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
            { icon: <FaTrophy />, stat: "16", title: "Prix et distinctions", desc: "Reconnaissances nationales et internationales" },
            { icon: <FaCalendarAlt />, stat: new Date().getFullYear() - 2015, title: "Années d'Excellence", desc: "Depuis 2015, une croissance constante" },
            { icon: <FaEarthAfrica />, stat: "4", title: "Pays Reconnaissants", desc: "Impact régional en Afrique de l'Ouest" },
            { icon: <FaPeopleGroup />, stat: "100%", title: "Satisfaction", desc: "Clients et partenaires satisfaits" }
          ].map((value, index) => (
            <div key={index} className="impact-card opacity-0 p-8 rounded-xl shadow hover:shadow-xl bg-white/70 backdrop-blur-sm text-center flex flex-col items-center gap-2">
              <div className="text-3xl w-max bg-kya-green p-4 rounded-full text-white">{value.icon}</div>
              <p className="text-6xl font-bold text-kya-green">{value.stat}</p>
              <h3 className="text-2xl font-bold">{value.title}</h3>
              <p className="text-gray-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

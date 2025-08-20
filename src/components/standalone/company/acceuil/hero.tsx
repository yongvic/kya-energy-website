import AnimatedButton from "@/components/ui/AnimatedButton";
import { useTranslations } from "next-intl";
import { FaCalendar, FaCheckCircle, FaHeadphones, FaSolarPanel } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";

export default function Hero() {
  const t = useTranslations("page d'acceuil.hero");
  return (
    <section className="relative bg-gray-900">
      {/* Décoration du bas */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-kya-white h-8 w-4/5 z-10 rounded-t-4xl"></div>
      <div className="min-h-screen p-16 size-full text-kya-white space-y-16">
        <div className="space-y-4 font-bold">
          <h1 className="text-3xl md:text-6xl">{t("titre")}</h1>
          <h2 className="text-2xl md:text-4xl">{t("sous titre")}</h2>
        </div>
        <p className="flex items-center gap-2 text-xl md:text-2xl font-bold text-kya-green">
          <FaCheckCircle />
          <span>
            {t("vision")}
          </span>
        </p>
        <AnimatedButton animateColor="bg-kya-green" className="bg-kya-orange py-4">
          {t("appel à l'action")}
        </AnimatedButton>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <FaSolarPanel size={64} className="text-kya-white" />
            <p className="flex items-center gap-2">
              <span className="text-kya-orange font-bold text-4xl">500+</span>
              <span className="text-xl">{t("statistiques.installations réalisées")}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <FaCalendar size={64} className="text-kya-white" />
            <p className="flex items-center gap-2">
              <span className="text-kya-orange font-bold text-4xl">
                {new Date().getFullYear() - 2015}
              </span>
              <span className="text-xl">{t("statistiques.années d'expertise")}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <FaFaceSmile size={64} className="text-kya-white" />
            <p className="flex items-center gap-2">
              <span className="text-kya-orange font-bold text-4xl">98%</span>
              <span className="text-xl">{t("statistiques.satisfaction client")}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <FaHeadphones size={64} className="text-kya-white" />
            <p className="flex items-center gap-2">
              <span className="text-kya-orange font-bold text-4xl">24/7</span>
              <span className="text-xl">{t("statistiques.support client")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

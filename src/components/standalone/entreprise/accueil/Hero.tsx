import { useTranslations } from "next-intl";
import {
  FaArrowRight,
  FaCalendar,
  FaCheckCircle,
  FaHeadphones,
  FaSolarPanel,
} from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Hero() {
  const anneeCreation = 2015;
  const t = useTranslations("page d'acceuil.hero");
  return (
    <section className="relative bg-gray-900">
      {/* Décoration du bas */}
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 z-10 h-8 w-4/5 rounded-t-4xl bg-kya-white" />
      <div className="size-full min-h-screen space-y-16 p-16 text-kya-white">
        <div className="space-y-4 font-bold">
          <h1 className="text-3xl md:text-6xl">{t("titre")}</h1>
          <h2 className="text-2xl md:text-4xl">{t("sous titre")}</h2>
        </div>
        <p className="flex items-center gap-2 font-bold text-kya-green text-xl md:text-2xl">
          <FaCheckCircle />
          <span>{t("vision")}</span>
        </p>
        <AnimatedButton href="/produits-et-services">
          <span className="flex items-center gap-4 p-4">
            <span>{t("appel à l'action")}</span>
            <FaArrowRight className="-translate-x-2 group-hover:translate-0 transition-all duration-300" />
          </span>
        </AnimatedButton>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaSolarPanel
              className="text-kya-white"
              size={64}
            />
            <p className="flex items-center gap-2">
              <span className="font-bold text-4xl text-kya-orange">500+</span>
              <span className="text-xl">
                {t("statistiques.installations réalisées")}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <FaCalendar
              className="text-kya-white"
              size={64}
            />
            <p className="flex items-center gap-2">
              <span className="font-bold text-4xl text-kya-orange">
                {new Date(Date.now()).getFullYear() - anneeCreation}
              </span>
              <span className="text-xl">
                {t("statistiques.années d'expertise")}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <FaFaceSmile
              className="text-kya-white"
              size={64}
            />
            <p className="flex items-center gap-2">
              <span className="font-bold text-4xl text-kya-orange">98%</span>
              <span className="text-xl">
                {t("statistiques.satisfaction client")}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <FaHeadphones
              className="text-kya-white"
              size={64}
            />
            <p className="flex items-center gap-2">
              <span className="font-bold text-4xl text-kya-orange">24/7</span>
              <span className="text-xl">
                {t("statistiques.support client")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

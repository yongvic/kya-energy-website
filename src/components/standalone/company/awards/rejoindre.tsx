import { useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaRocket, FaPlay, FaDownload } from "react-icons/fa";

export default function Rejoindre() {
  const [ctaScope, animateCta] = useAnimate();
  const t = useTranslations("récompenses.rejoindre");

  return (
    <div ref={ctaScope} className="h-screen relative magic-3d-pattern text-gray-900">
      <div className="h-screen absolute top-0 left-0 size-full backdrop-blur-xs flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="px-4 lg:px-48 text-center">
            <div className="flex items-center justify-center mb-8">
              <p className="text-3xl p-6 rounded-full bg-kya-green"><FaRocket /></p>
            </div>
            <h2 className="text-4xl font-bold w-full">{t("titre")}</h2>
            <p className="mt-4 text-xl text-kya-coffee">{t("sous titre")}</p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 font-bold">
              <Link href="mailto:marketing@kya-energy.com">
                <div className="w-max px-8 py-4 gap-3 flex items-center justify-center rounded-xl bg-kya-orange hover:bg-kya-orange/90 transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-xl"><FaPlay /></p>
                  <p>{t("démarrer un projet")}</p>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/company/kya-energy" target="_blank">
                <div className="w-max px-8 py-4 gap-3 flex items-center justify-center rounded-xl bg-transparent transition-all duration-300 border-2  transform hover:-translate-y-1">
                  <p className="text-xl"><FaDownload /></p>
                  <p>{t("visualiser notre portfolio")}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  FaArrowRight,
  FaCalendar,
  FaCheckCircle,
  FaGlobeAfrica,
  FaHeadphones,
  FaSmile,
  FaSolarPanel,
} from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function Hero() {
  const t = useTranslations("page d'acceuil.hero");
  const stats = [
    {
      icon: FaSolarPanel,
      labelKey: "installations réalisées",
      value: "500+",
    },
    {
      icon: FaCalendar,
      labelKey: "années d'expertise",
      value: new Date().getFullYear() - 2015,
    },
    {
      icon: FaSmile,
      labelKey: "satisfaction client",
      value: "98%",
    },
    {
      icon: FaHeadphones,
      labelKey: "support client",
      value: "24/7",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Fond subtil avec un effet de lumière (inchangé) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,156,0.2),rgba(255,255,255,0))] opacity-50" />

      <div className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-4 py-24 lg:grid-cols-2">
        {/* --- COLONNE GAUCHE : LE MESSAGE (inchangé) --- */}
        <div className="animate-fade-in-up relative z-20 text-center lg:text-left">
          {/* ... tout le contenu de la colonne de gauche ... */}
          <div className="space-y-4 font-bold text-kya-white">
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              {t("titre")}
            </h1>
            <h2 className="text-3xl font-semibold text-kya-white/80 md:text-4xl">
              {t("sous titre")}
            </h2>
          </div>
          <p className="mt-8 flex items-center justify-center gap-3 text-xl font-semibold text-kya-green md:text-2xl lg:justify-start">
            <FaCheckCircle />
            <span>{t("vision")}</span>
          </p>
          <Link
            className="group mt-12 inline-flex items-center justify-center gap-3 rounded-full bg-kya-green px-8 py-4 font-bold text-kya-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-kya-green/20"
            href="/produits-et-services">
            <span>{t("appel à l'action")}</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* --- COLONNE DROITE : LA VISUALISATION "MAGIQUE" (inchangé) --- */}
        <div
          className="animate-fade-in-up relative z-20 flex h-96 items-center justify-center lg:h-[32rem]"
          style={{
            animationDelay: "200ms",
          }}>
          {/* ... tout le contenu de la colonne de droite (le globe et les stats) ... */}
          <FaGlobeAfrica className="animate-spin-slow text-9xl text-kya-green/20" />
          {stats.map((stat, index) => {
            const positions = [
              "top-0 left-16",
              "top-24 right-0",
              "bottom-24 left-0",
              "bottom-0 right-16",
            ];
            return (
              <div
                className={`absolute flex items-center gap-3 rounded-2xl border border-kya-white/10 bg-kya-white/10 p-4 text-kya-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-kya-white/20 ${positions[index]}`}
                key={stat.labelKey}>
                <stat.icon className="flex-shrink-0 text-3xl text-kya-white" />
                <div>
                  <p className="font-bold text-3xl text-kya-orange">
                    {stat.value}
                  </p>
                  <p className="text-sm text-kya-white/70">{stat.labelKey}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- NOUVELLE TRANSITION EN VAGUES SVG --- */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        {/* 
    Conteneur pour les vagues. Il a une hauteur fixe et cache tout ce qui dépasse.
    'pointer-events-none' est important pour que les vagues ne bloquent pas les clics.
  */}
        <div className="relative h-24 w-full overflow-hidden pointer-events-none md:h-32">
          {/* Vague d'arrière-plan (plus lente) */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              className="h-auto w-[200%] animate-wave-slow fill-slate-100" // w-[200%] est la clé !
              viewBox="0 0 2000 120"
              preserveAspectRatio="none">
              <path d="M0,80 C500,140 1000,20 1500,80 C2000,140 2500,20 3000,80 L3000,120 L0,120 Z" />
            </svg>
          </div>

          {/* Vague principale au premier plan (plus rapide et en sens inverse) */}
          <div className="absolute bottom-[-1px] left-0 w-full">
            <svg
              className="h-auto w-[200%] animate-wave-medium fill-white" // w-[200%] est la clé !
              viewBox="0 0 2000 120"
              preserveAspectRatio="none">
              <path d="M0,90 C450,40 950,140 1500,90 C2050,40 2550,140 3000,90 L3000,120 L0,120 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

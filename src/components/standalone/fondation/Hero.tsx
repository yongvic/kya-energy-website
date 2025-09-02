import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaDownload, FaHeart, FaPlay } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";

export default function Hero() {
  const t = useTranslations("fondation.hero");
  return (
    <section className="relative h-screen text-kya-white">
      {/* 1. Vidéo et Overlay (Inchangé) */}
      <video
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline>
        <source
          src={`${strapiUrl}/uploads/file_7e747c089f.mp4`}
          type="video/mp4"
        />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-kya-coffee/80 via-black/50 to-transparent" />

      {/* 
        3. Conteneur principal (La clé de la correction)
        - On utilise flex-col pour empiler les éléments verticalement.
        - h-full pour qu'il prenne toute la hauteur de l'écran.
      */}
      <div className="relative z-10 flex h-full flex-col px-4">
        {/* A. Zone de contenu principale */}
        {/* - flex-grow permet à cette zone de prendre tout l'espace vertical disponible. */}
        {/* - justify-center la centre verticalement dans l'espace qui lui est alloué. */}
        <div className="flex flex-grow flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center">
            <p className="mb-4 rounded-full border border-kya-green/50 bg-kya-green/20 px-4 py-1 text-sm font-semibold backdrop-blur-sm">
              {t("fondation")}
            </p>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
              {t("titre")}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-kya-white/80 md:text-xl">
              {t("description")}
            </p>
            <div className="mb-10 flex items-center gap-2 font-semibold text-kya-yellow">
              <FaHeart />
              <span>{t("monde meilleur")}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                className="group flex items-center gap-3 rounded-full bg-kya-green px-8 py-4 font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                href="#video">
                <FaPlay className="transition-transform duration-300 group-hover:scale-125" />
                <span>{t("regarder la vidéo")}</span>
              </Link>
              <Link
                className="group flex items-center gap-3 rounded-full border-2 border-kya-white/80 bg-transparent px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:border-kya-white hover:bg-kya-white/10"
                href={`${strapiUrl}/uploads/Lettre_d_engagement_pour_la_formation_1ere_vague_2025_OK_70a2129def.pdf`}>
                <FaDownload className="transition-transform duration-300 group-hover:rotate-6" />
                <span>{t("télécharger la lettre")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* B. Zone de la barre de statistiques */}
        {/* - Pas de position: absolute ! Elle est maintenant dans le flux normal. */}
        {/* - pb-10 pour lui donner un peu d'espace par rapport au bas de l'écran. */}
        <div className="w-full pb-10">
          <div className="mx-auto hidden w-full max-w-4xl items-stretch justify-around rounded-2xl border border-kya-white/10 bg-kya-white/10 p-6 text-kya-white shadow-lg backdrop-blur-lg md:flex">
            <div className="text-center">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm uppercase tracking-wider text-kya-white/70">
                {t("employés")}
              </p>
            </div>
            <div className="w-px bg-kya-white/20" />
            <div className="text-center">
              <p className="text-4xl font-bold flex justify-center">
                <FaGlobeAfrica />
              </p>
              <p className="text-sm uppercase tracking-wider text-kya-white/70">
                {t("mission")}
              </p>
            </div>
            <div className="w-px bg-kya-white/20" />
            <div className="text-center">
              <p className="text-4xl font-bold">
                {new Date().getFullYear() - 2015} ans
              </p>
              <p className="text-sm uppercase tracking-wider text-kya-white/70">
                {t("experience")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("certification iso 9001.hero");

  return (
    <section
      className="relative flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 bg-cover bg-center p-8 text-white"
      // Le background-image est un des rares cas où un style inline est justifié en JSX
      style={{
        backgroundImage: "url('/certification/back-certif.png')",
      }}>
      {/* 
        L'overlay, qui remplace le pseudo-élément ::before.
        from-primary/80 -> Utilise notre couleur verte avec 80% d'opacité.
        to-black/60 -> Noir avec 60% d'opacité.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/80 to-black/60" />

      {/* Conteneur pour le contenu, pour le placer au-dessus de l'overlay avec z-20 */}
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-start">
        {/* Anciennement .hero-title */}
        <h1
          className="max-w-4xl text-left text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
          dangerouslySetInnerHTML={{
            __html: t.raw("titre"),
          }}
        />
      </div>

      {/* 
        Conteneur pour le sous-titre, pour le placer différemment si besoin. 
        Ici, je l'aligne à droite pour un look asymétrique moderne.
      */}
      <div className="relative z-20 flex w-full max-w-7xl justify-end">
        {/* Anciennement .hero-subtitle, maintenant un composant "glassmorphism" */}
        <div className="max-w-md rounded-2xl bg-white/20 p-8 text-center shadow-xl backdrop-blur-md md:p-10">
          <p className="text-lg leading-relaxed">{t("sous titre")}</p>
        </div>
      </div>
    </section>
  );
}

// /app/your-page-directory/page.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAnimate, useInView, stagger, motion } from "motion/react";

// Icons
import { FaCalendarAlt, FaDownload, FaGlobeAfrica, FaHandshake, FaLeaf, FaLightbulb, FaPlay, FaRocket, FaTrophy } from "react-icons/fa";
import { FaEarthAfrica, FaPeopleGroup } from "react-icons/fa6";

export default function Page() {
  // --- Animation Hooks ---
  const [heroScope, animateHero] = useAnimate();
  const [awardsScope, animateAwards] = useAnimate();
  const [impactScope, animateImpact] = useAnimate();
  const [categoriesScope, animateCategories] = useAnimate();
  const [ctaScope, animateCta] = useAnimate();

  const isAwardsInView = useInView(awardsScope, { once: true, amount: 0.1 });
  const isImpactInView = useInView(impactScope, { once: true, amount: 0.2 });
  const isCategoriesInView = useInView(categoriesScope, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaScope, { once: true, amount: 0.4 });

  // Change title
  useEffect(() => {
    document.title = "Récompenses - KYA Energy Group";
  }, []);

  // --- Animation Effects ---
  useEffect(() => {
    animateHero([
      [".hero-badge", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.6, delay: 0.2 }],
      [".hero-title", { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, at: "-0.3" }],
      [".hero-subtitle", { opacity: [0, 1], y: [20, 0] }, { duration: 0.7, at: "-0.4" }]
    ]);
  }, [animateHero]);

  useEffect(() => { if (isAwardsInView) animateAwards(".award-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.08) }) }, [isAwardsInView, animateAwards]);
  useEffect(() => {
    if (isImpactInView) animateImpact([
      [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
      [".impact-card", { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: stagger(0.1), at: "-0.2" }]
    ])
  }, [isImpactInView, animateImpact]);
  useEffect(() => {
    if (isCategoriesInView) animateCategories([
      [".section-title", { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
      [".category-card", { opacity: [0, 1], y: [30, 0] }, { duration: 0.5, delay: stagger(0.1), at: "-0.2" }]
    ])
  }, [isCategoriesInView, animateCategories]);
  useEffect(() => { if (isCtaInView) animateCta("div", { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.15) }) }, [isCtaInView, animateCta]);


  return (
    <>
      <div>
        <div className="relative h-[calc(100vh-6rem)]">
          {/* Image */}
          <div className="w-full h-full overflow-hidden">
            <img src="/fondation_kya.avif" alt="Awards background" className="w-full h-full object-cover" />
          </div>
          {/* Text Overlay */}
          <div ref={heroScope} className="absolute top-0 left-0 z-10 w-full h-full bg-black/70 flex flex-col items-center justify-center p-4">
            <div className="text-white w-[90%] md:w-[70%] lg:w-1/2 space-y-8">
              <div className="hero-badge opacity-0 flex justify-center items-center">
                <div className="w-max py-4 px-8 flex items-center gap-2 bg-orange-500/50 rounded-full backdrop-blur-sm border border-orange-400/50">
                  <p className="text-2xl"><FaTrophy /></p>
                  <p>Excellence reconnue</p>
                </div>
              </div>
              <h1 className="hero-title opacity-0 text-4xl md:text-6xl lg:text-8xl text-center font-bold">
                {/* Using Tailwind CSS classes for gradient text */}
                <motion.span
                  initial={{ backgroundSize: "0% 100%" }}
                  animate={{ backgroundSize: "100% 100%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-green-500 to-green-300 bg-no-repeat bg-clip-text text-transparent"
                >
                  Nos prix
                </motion.span> et <motion.span
                  initial={{ backgroundSize: "0% 100%" }}
                  animate={{ backgroundSize: "100% 100%" }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-orange-500 to-orange-300 bg-no-repeat bg-clip-text text-transparent"
                >
                  distinctions
                </motion.span>
              </h1>
              <p className="hero-subtitle opacity-0 text-lg md:text-xl lg:text-2xl text-center text-slate-200">
                Que ce soit par la reconnaissance de nos employés, de nos clients ou par les prix internationaux qui nous ont été remis, nous sommes fiers de notre travail et des distinctions par lesquelles nous avons été reconnus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-green-600 to-green-800 bg-clip-text text-transparent">NOS PRIX ET DISTINCTIONS</h2>
      </div>

      {/* Nos prix et distinctions */}
      <div ref={awardsScope} className="container mx-auto px-4 my-32">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { img: "/ecreee.png", year: "2024", title: "Prix de l'installation des mini-centrales les plus propres", desc: "KYA-Energy GROUP grâce à ses installations reçoit le prix des mini-centrales les plus propres de l'année 2024.", tag: "Innovation Environnementale" },
            { img: "/foire.png", year: "2024", title: "Prix de l'idée lumineuse", desc: "KYA-Energy GROUP a reçu le prix de l'idée lumineuse pour ses innovations dans le domaine de l'énergie solaire.", tag: "Innovation Technologique" },
            { img: "/hitech.png", year: "2023", title: "Prix du meilleur partenaire avec HITECH", desc: "KYA-Energy GROUP a reçu ce prix en 2023 des mains de HITECH pour sa bonne collaboration.", tag: "Partenariat Excellence" },
            { img: "/entrepreneur.png", year: "2024", title: "Prix du Global entrepreneur awards", desc: "Le professeur Yao AZOUMAH a été nominé au global entrepreneur awards.", tag: "Entrepreneuriat Global" },
            { img: "/batisseurs.png", year: "2023", title: "Prix des bâtisseurs de l'économie africaine", desc: "Pour sa capacité entrepreneuriale et sa contribution au KYA-Energy Group à faire partie des bâtisseurs.", tag: "Impact Économique" },
            { img: "/kerekou.png", year: "2023", title: "Grand Prix Général Mathieu Kérékou", desc: "Le DG de KYA-Energy Group, a reçu le Grand Prix de Meilleur Acteur de développement eu égard à son amour du travail bien fait.", tag: "Leadership Développement" },
            { img: "/innovation.png", year: "2022", title: "Prix de la valorisation de la recherche et de l'innovation", desc: "KYA-Energy GROUP a été nominé à TOGO TOP IMPACT 2022.", tag: "Recherche & Innovation" },
            { img: "/padev.png", year: "2022", title: "Prix PADEV", desc: "Trophée du Prix Africain du Mérite et de l'Excellence dans le domaine des énergies renouvelables.", tag: "Excellence Africaine" },
            { img: "/palme.png", year: "2021", title: "Palme internationale de l'innovation énergétique", desc: "Lauréat de 100 Entreprises les plus Dynamiques du TOGO.", tag: "Innovation Internationale" },
            { img: "/transition.png", year: "2020", title: "Prix de la transition énergétique au Togo", desc: "KYA-Energy Group nominé Emerging Leader 2020.", tag: "Transition Énergétique" },
            { img: "/start-up.png", year: "2018", title: "Prix BOAD du concours \"StartUp\"", desc: "KYA-Energy GROUP lauréat du concours \"StartUp\" BOAD 2018.", tag: "Startup Excellence" },
            { img: "/usaid.png", year: "2023", title: "Lauréat de l'USAID pour l'électrification solaire", desc: "La seule entreprise francophone parmi les 9 pays lauréats pour l'électrification solaire des centres de santé.", tag: "Impact Social Santé" }
          ].map((value, index) => (
            <div key={index} className="award-card opacity-0 relative flex flex-col bg-white shadow rounded-xl hover:shadow-xl border-2 border-transparent hover:border-green-400 transition-all">
              <div className="absolute -top-3 left-3">
                <p className="w-max h-max bg-green-500 text-white rounded-full px-4 py-1.5 text-xs font-bold shadow-md">{value.tag}</p>
              </div>
              <div className="bg-gray-50 p-4 h-48 flex items-center justify-center rounded-t-xl">
                <img src={value.img} alt={`Logo for ${value.title}`} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-lg">{value.title}</h3>
                  <p className="w-max h-max font-bold px-2.5 py-1 text-sm bg-orange-400 text-white rounded-full">{value.year}</p>
                </div>
                <p className="text-gray-500 text-sm flex-grow">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notre impact */}
      <div ref={impactScope} className="bg-gradient-to-tr from-orange-100 to-green-100 py-32">
        <div className="container mx-auto px-4">
          <div className="section-title opacity-0 px-4 lg:px-48">
            <div className="flex items-center justify-center my-4">
              <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Notre impact</p>
            </div>
            <h2 className="text-center text-4xl font-bold w-full">Des chiffres qui parlent</h2>
            <div className="flex justify-center items-center my-4">
              <div className="h-1 w-32 bg-green-300"></div>
            </div>
            <p className="text-center text-xl">Nos récompenses témoignent de notre engagement constant vers l&apos;excellence et l&apos;innovation.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaTrophy />, stat: "16", title: "Prix et distinctions", desc: "Reconnaissances nationales et internationales" },
              { icon: <FaCalendarAlt />, stat: new Date().getFullYear() - 2015, title: "Années d'Excellence", desc: "Depuis 2015, une croissance constante" },
              { icon: <FaEarthAfrica />, stat: "4", title: "Pays Reconnaissants", desc: "Impact régional en Afrique de l'Ouest" },
              { icon: <FaPeopleGroup />, stat: "100%", title: "Satisfaction", desc: "Clients et partenaires satisfaits" }
            ].map((value, index) => (
              <div key={index} className="impact-card opacity-0 p-8 rounded-xl shadow hover:shadow-xl bg-white/70 backdrop-blur-sm text-center flex flex-col items-center gap-2">
                <div className="text-3xl w-max bg-green-600 p-4 rounded-full text-white">{value.icon}</div>
                <p className="text-6xl font-bold text-green-600">{value.stat}</p>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Domaines d'Excellence */}
      <div ref={categoriesScope} className="container mx-auto px-4 my-32">
        <div className="section-title opacity-0 px-4 lg:px-48">
          <div className="flex items-center justify-center my-4">
            <p className="w-max rounded-full px-4 py-2 bg-green-700 text-white font-bold text-sm">Domaines d&apos;Excellence</p>
          </div>
          <h2 className="text-center text-4xl font-bold w-full">Nos Catégories de Récompenses</h2>
          <div className="flex justify-center items-center my-4">
            <div className="h-1 w-32 bg-green-300"></div>
          </div>
          <p className="text-center text-xl">Nos prix couvrent tous les aspects de notre activité, de l&apos;innovation technologique à l&apos;impact social.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            { icon: <FaLightbulb />, title: "Innovation Technologique", count: "4", awards: ["Prix de l'idée lumineuse 2024", "Palme internationale innovation 2022", "Prix valorisation recherche 2022", "Prix transition énergétique 2020"] },
            { icon: <FaLeaf />, title: "Impact Environnemental", count: "3", awards: ["Mini-centrales propres 2024", "Prix PADEV Excellence 2022", "Électrification solaire USAID 2019"] },
            { icon: <FaHandshake />, title: "Partenariats & Collaboration", count: "2", awards: ["Meilleur partenaire HITECH 2024", "Prix BOAD StartUp 2019"] },
            { icon: <FaGlobeAfrica />, title: "Leadership Africain", count: "3", awards: ["Global entrepreneur awards 2024", "Bâtisseurs économie africaine 2023", "Grand Prix Mathieu Kérékou 2023"] }
          ].map((value, index) => (
            <div key={index} className="category-card opacity-0 group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow">
              <div className="h-1 bg-green-700 w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="space-y-4 p-8">
                <div className="text-3xl p-4 rounded-full bg-green-700 w-max text-white">{value.icon}</div>
                <h3 className="font-bold text-2xl">{value.title}</h3>
                <p className="text-sm px-4 py-1.5 rounded-full bg-orange-200 w-max text-orange-700 font-bold">{value.count} Prix</p>
                <ul className="list-disc text-green-700 pl-5 space-y-2 pt-2">
                  {value.awards.map((_value, _index) => (
                    <li key={_index}><span className="text-gray-700">{_value}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div ref={ctaScope} className="bg-gradient-to-bl from-zinc-900 to-zinc-700 py-32 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="px-4 lg:px-48 text-center">
            <div className="flex items-center justify-center mb-8">
              <p className="text-3xl p-6 rounded-full bg-green-700"><FaRocket /></p>
            </div>
            <h2 className="text-4xl font-bold w-full">Rejoignez l&apos;Excellence</h2>
            <p className="mt-4 text-xl text-slate-300">Découvrez comment nos solutions primées peuvent transformer vos projets énergétiques et contribuer à un avenir plus durable.</p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 font-bold">
              <Link href="#">
                <div className="w-max px-8 py-4 gap-3 flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-xl"><FaPlay /></p>
                  <p>Démarrer un projet</p>
                </div>
              </Link>
              <Link href="#">
                <div className="w-max px-8 py-4 gap-3 flex items-center justify-center rounded-xl bg-transparent transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-gray-900 transform hover:-translate-y-1">
                  <p className="text-xl"><FaDownload /></p>
                  <p>Télécharger notre portfolio</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue
} from "framer-motion";
import Image from "next/image";

type Award = {
  year: string;
  title: string;
  text: string;
  image: string;
};

const awards: Award[] = [
  {
    year: "2019",
    title: "Prix d'Excellence de la CEDEAO pour les Énergies Durables",
    text: "Ce prix récompense notre contribution exceptionnelle à la promotion des énergies renouvelables et de l'efficacité énergétique en Afrique de l'Ouest.",
    image: "/awards/ecreee.avif",
  },
  {
    year: "2018",
    title: "Prix de la Meilleure Innovation Technologique",
    text: "Décerné pour notre développement de solutions de stockage d'énergie avancées et leur impact sur la stabilité des réseaux électriques.",
    image: "/awards/hitech.avif",
  },
  {
    year: "2017",
    title: "Prix du Jeune Entrepreneur de l'Année",
    text: "Ce prix met en lumière notre leadership et notre vision dans le secteur des énergies propres, ainsi que notre engagement envers le développement durable.",
    image: "/awards/usaid.avif",
  },
  {
    year: "2016",
    title: "Prix des Bâtisseurs Africains",
    text: "Reconnaissance de notre rôle dans la construction d'un avenir énergétique durable pour l'Afrique, à travers des projets innovants et impactants.",
    image: "/awards/boad.avif",
  },
  {
    year: "2015",
    title: "Prix de l'Innovation pour l'Environnement",
    text: "Ce prix salue notre engagement à développer des technologies respectueuses de l'environnement et à promouvoir des pratiques énergétiques durables.",
    image: "/awards/piie.avif",
  },
  {
    year: "2014",
    title: "Prix Africa PADEV",
    text: "Ce prix récompense notre contribution significative au développement économique et social de l'Afrique par le biais de nos initiatives dans le secteur de l'énergie.",
    image: "/awards/padev.avif",
  },
];

function AwardSection({
  award,
  scrollYProgress,
  index,
}: {
  award: Award;
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className={`relative h-screen w-full flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center snap-start pt-24`}
    >
      {/* Timeline Line */}
      <div
        className={`absolute top-0 ${
          isEven ? "right-8 md:right-16" : "left-8 md:left-16"
        } w-0.5 h-full bg-gray-300 dark:bg-gray-700`}
      />

      {/* Timeline Bullet */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isEven
            ? "right-8 md:right-16 translate-x-1/2"
            : "left-8 md:left-16 -translate-x-1/2"
        } w-8 h-8 rounded-full bg-green-500 border-4 border-white dark:border-gray-900`}
      />

      {/* Image Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative p-4 md:p-8">
        <Image
          src={award.image}
          alt={award.title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Text Container */}
      <div
        className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center text-center p-8 ${
          isEven ? "md:pr-24" : "md:pl-24"
        }`}
      >
        <p className="text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-700">
          {award.year}
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">
          {award.title}
        </h2>
        <p className="mt-4 max-w-md">{award.text}</p>
      </div>
    </motion.div>
  );
}

export default function AwardsPage() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
      {awards.map((award, i) => {
        const targetRef = useRef(null);
        const { scrollYProgress: sectionScrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start end", "end start"],
        });

        return (
          <div ref={targetRef} key={i}>
            <AwardSection
              award={award}
              scrollYProgress={sectionScrollYProgress}
              index={i}
            />
          </div>
        );
      })}
    </div>
  );
}

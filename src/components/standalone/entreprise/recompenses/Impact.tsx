"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaGlobeAfrica,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { strapiUrl } from "@/data/strapi";

async function fetchAwards(): Promise<number> {
  const request = await fetch(`${strapiUrl}/api/recompenses?populate=*`);
  const response = await request.json();
  return [
    ...response.data,
  ].length;
}

export default function Impact() {
  const [length, setLength] = useState(0);

  useEffect(() => {
    fetchAwards().then((length) => {
      setLength(length);
    });
  }, []);

  const t = useTranslations("récompenses.impact");

  const stats = [
    {
      description: "Reconnaissances nationales et internationales",
      icon: FaTrophy,
      stat: length,
      title: "Prix et distinctions",
    },
    {
      description: "Depuis 2015, une croissance constante",
      icon: FaCalendarAlt,
      stat: new Date().getFullYear() - 2015,
      titleKey: "Années d'Excellence",
    },
    {
      description: "Impact régional en Afrique de l'Ouest",
      icon: FaGlobeAfrica,
      stat: 4,
      title: "Pays Reconnaissants",
    },
    {
      description: "Clients et partenaires satisfaits",
      icon: FaUsers,
      stat: "100%",
      title: "Satisfaction",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          alt="Impact background"
          className="object-cover"
          fill
          src="/certification/back-certif.png"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-kya-coffee/90 to-kya-coffee/70" />
      <div className="relative container mx-auto px-4">
        <div className="animate-fade-in-up mb-16 text-center text-kya-white">
          <p className="font-semibold text-kya-green">{t("titre")}</p>
          <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl">
            {t("sous titre")}
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-kya-green to-kya-orange" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-kya-white/80">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              className="animate-fade-in-up flex flex-col items-center gap-4 rounded-2xl border border-kya-white/10 bg-kya-white/10 p-8 text-center text-kya-white shadow-lg backdrop-blur-lg"
              key={stat.title}
              style={{
                animationDelay: `${150 * index}ms`,
              }}>
              <div className="flex size-16 items-center justify-center rounded-full bg-kya-green text-3xl">
                <stat.icon />
              </div>
              <p className="font-extrabold text-6xl text-kya-orange">
                {stat.stat}
              </p>
              <h3 className="text-xl font-bold">{stat.title}</h3>
              <p className="text-kya-white/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

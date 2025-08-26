"use client";

import { strapiUrl } from "@/lib/config";
import { useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Award {
  titre: string;
  description: string;
  image: string;
  date: string;
}

async function fetchAwards() {
  const request = await fetch(`${strapiUrl}/api/recompenses?populate=*`);
  const response = await request.json();
  const returnData = response.data.map(
    (data: {
      titre: string;
      description: string;
      date: string;
      image: {
        url: string;
      };
    }) => ({
      titre: data.titre,
      description: data.description,
      image: `${strapiUrl}${data.image.url}`,
      date: data.date,
    }),
  );
  return returnData;
}

export default function PrixEtDistinctions() {
  const [awardsScope, animateAwards] = useAnimate();
  const t = useTranslations("récompenses.prix et distinctions");
  const [awards, setAwards] = useState<Award[]>([]);
  useEffect(() => {
    fetchAwards().then((data) => {
      setAwards(data);
    });
  });

  return (
    <section>
      <div className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold bg-kya-green bg-clip-text text-transparent">
          {t("titre")}
        </h2>
      </div>

      {/* Nos prix et distinctions */}
      <div ref={awardsScope} className="container mx-auto px-4 my-32">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {awards.map((value, index) => (
            <article
              key={index}
              className="award-card opacity-0 relative flex flex-col bg-white shadow rounded-xl hover:shadow-xl border-2 border-transparent hover:border-kya-green transition-all"
            >
              <div className="absolute -top-3 left-3"></div>
              <div className="relative bg-gray-50 p-4 h-48 flex items-center justify-center rounded-t-xl">
                <Image
                  src={`/awards/${value.image}`}
                  alt={`Logo for ${value.titre}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-bold text-lg">{value.titre}</h3>
                  <p className="w-max h-max font-bold px-2.5 py-1 text-sm bg-kya-orange text-white rounded-full">
                    {new Date(value.date).getFullYear()}
                  </p>
                </div>
                <p className="text-gray-500 text-sm flex-grow">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

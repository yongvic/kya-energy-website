"use client";

import { strapiUrl } from "@/data/strapi";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamMember {
  nom: string;
  role: string;
  photo: {
    url: string;
  };
}

// A function for fetching team members from strapi
async function fetchTeamMembers(locale: string) {
  const res = await fetch(
    `${strapiUrl}/api/membres-du-comites?locale=${locale}&populate=*`,
  );
  const data = await res.json();
  return data.data;
}

export default function Equipe({ locale }: { locale: string }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [teamMember, setTeamMember] = useState(0);
  const t = useTranslations("à propos.equipe");
  useEffect(() => {
    fetchTeamMembers(locale).then((data) => setTeamMembers(data));
  }, [
    locale,
  ]);
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: Used for links purpose
    <section
      className="bg-gradient-to-tr from-orange-200 to-green-200 py-32"
      id="equipe">
      <div className="container mx-auto px-4">
        <div className="section-title px-4 opacity-0 lg:px-48">
          <div className="my-4 flex items-center justify-center">
            <p className="w-max rounded-full bg-kya-green px-4 py-2 font-bold text-sm text-white">
              {t("leadership")}
            </p>
          </div>
          <h2 className="w-full text-center font-bold text-4xl">
            {t("comité")}
          </h2>
          <div className="my-4 flex items-center justify-center">
            <div className="h-1 w-32 bg-green-300" />
          </div>
          <p className="text-center text-xl">{t("description")}</p>
        </div>
        <div className="flex w-full flex-wrap gap-2 **:transition-all **:duration-300 md:flex-nowrap">
          {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
          {teamMembers.map((value, index) =>
            teamMember === index ? (
              <div
                className="flex w-full flex-col overflow-hidden rounded-xl bg-gray-100 shadow hover:shadow-xl lg:flex-row"
                key={value.nom}>
                <Image
                  alt={value.nom}
                  className="w-full object-contain lg:w-max"
                  height={361}
                  src={`${strapiUrl}${value.photo.url}`}
                  width={296}
                />
                <div className="flex w-full flex-col items-center justify-center bg-green-50 p-4 text-center">
                  <h3 className="font-bold text-xl">{value.nom}</h3>
                  <p className="text-gray-600 text-lg">{value.role}</p>
                </div>
              </div>
            ) : (
              // biome-ignore lint/a11y/noNoninteractiveElementInteractions: React Component
              // biome-ignore lint/a11y/useKeyWithClickEvents: Mouse Only
              // biome-ignore lint/a11y/noStaticElementInteractions: React Component
              <div
                className="group relative h-max w-32 overflow-hidden rounded-xl bg-white hover:scale-125"
                key={value.nom}
                onClick={() => setTeamMember(index)}>
                <Image
                  alt={value.nom}
                  className="h-full w-full object-contain"
                  height={361}
                  src={`${strapiUrl}${value.photo.url}`}
                  width={296}
                />
                <div className="absolute top-0 left-0 hidden h-full w-full flex-col items-center justify-center overflow-hidden bg-[#0009] text-center text-kya-white group-hover:flex">
                  <h1 className="font-bold text-[8px]">{value.nom}</h1>
                  <p className="text-[8px]">{value.role}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

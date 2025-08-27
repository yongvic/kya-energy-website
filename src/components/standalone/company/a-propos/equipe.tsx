"use client";

import { strapiUrl } from "@/lib/config";
import { useAnimate, motion, stagger, useInView } from "framer-motion";
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
  const [teamScope, animateTeam] = useAnimate();
  const isTeamInView = useInView(teamScope, {
    once: true,
    amount: 0.1,
  });
  useEffect(() => {
    if (isTeamInView)
      animateTeam([
        [
          ".section-title",
          {
            opacity: [
              0,
              1,
            ],
            y: [
              20,
              0,
            ],
          },
          {
            duration: 0.6,
          },
        ],
        [
          ".team-card",
          {
            opacity: [
              0,
              1,
            ],
            scale: [
              0.9,
              1,
            ],
          },
          {
            duration: 0.5,
            delay: stagger(0.1),
            at: "-0.2",
          },
        ],
      ]);
  }, [
    isTeamInView,
    animateTeam,
  ]);

  return (
    <section
      ref={teamScope}
      id="equipe"
      className="bg-gradient-to-tr from-orange-200 to-green-200 py-32">
      <div className="container mx-auto px-4">
        <div className="section-title opacity-0 px-4 lg:px-48">
          <div className="flex items-center justify-center my-4">
            <p className="w-max rounded-full px-4 py-2 bg-kya-green text-white font-bold text-sm">
              {t("leadership")}
            </p>
          </div>
          <h2 className="text-center text-4xl font-bold w-full">
            {t("comité")}
          </h2>
          <div className="flex justify-center items-center my-4">
            <div className="h-1 w-32 bg-green-300"></div>
          </div>
          <p className="text-center text-xl">{t("description")}</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full gap-2 **:transition-all **:duration-300">
          {teamMembers.map((value, index) =>
            teamMember === index ? (
              <div
                key={index}
                className="w-full flex flex-col lg:flex-row bg-gray-100 rounded-xl shadow hover:shadow-xl overflow-hidden">
                <Image
                  width={296}
                  height={361}
                  src={`${strapiUrl}${value.photo.url}`}
                  alt={value.nom}
                  className="object-contain w-full lg:w-max"
                />
                <div className="text-center p-4 bg-green-50 w-full flex flex-col justify-center items-center">
                  <h3 className="font-bold text-xl">{value.nom}</h3>
                  <p className="text-lg text-gray-600">{value.role}</p>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="group relative overflow-hidden w-32 h-max hover:scale-125 bg-white rounded-xl"
                onClick={() => setTeamMember(index)}>
                <Image
                  width={296}
                  height={361}
                  src={`${strapiUrl}${value.photo.url}`}
                  alt={value.nom}
                  className="object-contain w-full h-full"
                />
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-center overflow-hidden text-center bg-[#0009] text-kya-white">
                  <h1 className="font-bold text-[8px]">{value.nom}</h1>
                  <p className="text-[8px]">{value.role}</p>
                </motion.div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

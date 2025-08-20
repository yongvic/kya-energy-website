import { useAnimate, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function Equipe() {
  const [teamMember, setTeamMember] = useState(0);
  const [teamScope, animateTeam] = useAnimate();
  const t = useTranslations("à propos.equipe");

  return (
    <section ref={teamScope} id="equipe" className="bg-gradient-to-tr from-orange-200 to-green-200 py-32">
      <div className="container mx-auto px-4">
        <div className="section-title opacity-0 px-4 lg:px-48">
          <div className="flex items-center justify-center my-4">
            <p className="w-max rounded-full px-4 py-2 bg-kya-green text-white font-bold text-sm">Leadership</p>
          </div>
          <h2 className="text-center text-4xl font-bold w-full">Comité de Direction</h2>
          <div className="flex justify-center items-center my-4">
            <div className="h-1 w-32 bg-green-300"></div>
          </div>
          <p className="text-center text-xl">Une équipe d&apos;experts chevronnés avec plus de 15 ans d&apos;expérience collective, unis par une vision commune d&apos;excellence et d&apos;innovation.</p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full gap-2 **:transition-all **:duration-300">
          {t.team.map((value, index) => teamMember === index ? (
            <div key={index} className="w-full flex flex-col lg:flex-row bg-gray-100 rounded-xl shadow hover:shadow-xl overflow-hidden">
              <Image width={296} height={361} src={`/team/${value.image}`} alt={value.name} className="object-contain w-full lg:w-max" />
              <div className="text-center p-4 bg-green-50 w-full flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl">{value.name}</h3>
                <p className="text-lg text-gray-600">{value.role}</p>
              </div>
            </div>
          ) : (<div key={index} className="group relative overflow-hidden w-32 h-max hover:scale-125 bg-white rounded-xl" onClick={() => setTeamMember(index)}>
            <Image width={296} height={361} src={`/team/${value.image}`} alt={value.name} className="object-contain w-full h-full" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-center overflow-hidden text-center bg-[#0009] text-kya-white">
              <h1 className="font-bold text-[8px]">{value.name}</h1>
              <p className="text-[8px]">{value.role}</p>
            </motion.div>
          </div>))}
        </div>
      </div>
    </section>
  );
}

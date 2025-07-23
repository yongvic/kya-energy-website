"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const teamMembers = [
  { name: "Agbehadji", image: "/team/agbehadji.avif", role: "Lead Developer" },
  { name: "Azoumah", image: "/team/azoumah.avif", role: "CEO" },
  { name: "Eklou", image: "/team/eklou.avif", role: "Project Manager" },
  { name: "Fousseni", image: "/team/fousseni.avif", role: "Marketing Lead" },
  { name: "Lawson", image: "/team/lawson.avif", role: "Designer" },
  { name: "Shikpe", image: "/team/shikpe.avif", role: "COO" },
  { name: "Tchassama", image: "/team/tchassama.avif", role: "CTO" },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function TeamCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([(page + newDirection + teamMembers.length) % teamMembers.length, newDirection]);
  };

  const member = teamMembers[page];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full flex flex-col items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mt-4">{member.name}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">{member.role}</p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-10">
        <button onClick={() => paginate(-1)} className="bg-white/50 dark:bg-black/50 p-2 rounded-full">
          <LuChevronLeft size={32} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-10">
        <button onClick={() => paginate(1)} className="bg-white/50 dark:bg-black/50 p-2 rounded-full">
          <LuChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-8 flex space-x-2 z-10">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${page === i ? "bg-green-500" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
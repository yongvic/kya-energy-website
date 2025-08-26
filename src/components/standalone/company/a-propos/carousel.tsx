"use client";
import { strapiUrl } from "@/lib/config";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

async function fetchTeamMembers(): Promise<string[]> {
  const request = await fetch(`${strapiUrl}/api/photos-de-groupe?populate=*`);
  const response = await request.json();
  const imageUrls: string[] = response.data.map((photo: { url: string }) => ({
    url: `${strapiUrl}${photo.url}`,
  }));
  return imageUrls;
}

export default function Carousel() {
  const t = useTranslations("à propos.carousel");
  const [imageUrls, setImageUrls] = useState<string[]>();
  useEffect(() => {
    fetchTeamMembers().then((teamMembers) => setImageUrls(teamMembers));
  }, []);
  const [index, setIndex] = useState(0);

  function handlePrev() {
    setIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls!.length) % imageUrls!.length,
    );
  }

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % imageUrls!.length);
  }

  return (
    <section>
      {/* Carousel */}
      <div className="relative h-[calc(100vh-6rem)]">
        {/* Image with AnimatePresence for smooth transitions */}
        <AnimatePresence>
          <motion.img
            key={index}
            src={imageUrls![index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            alt="Team photo"
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        {/* Text Overlay */}
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-[#05df72a0] to-[#fffa]/20 flex flex-col items-center justify-center p-4">
          <div className="text-white w-[90%] md:w-[70%] lg:w-1/2 space-y-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold"
            >
              {t("notre équipe")}
              <br />
              {t("excellence")}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl"
            >
              {t("découverte")}
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-between items-center w-[90%] md:w-[70%] lg:w-1/2 mt-4 md:mt-16 lg:mt-32"
          >
            {/* Indicators */}
            <div className="flex items-center justify-center w-max gap-4">
              {imageUrls!.map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${index === i ? "bg-white scale-150" : "bg-green-300"}`}
                ></div>
              ))}
            </div>
            {/* Buttons */}
            <div className="text-4xl text-kya-green flex items-center justify-center w-max gap-4 *:p-4 *:bg-white/60 *:hover:bg-green-300 *:rounded-full *:cursor-pointer *:transition-colors">
              <button onClick={handlePrev}>
                <RiArrowLeftLine />
              </button>
              <button onClick={handleNext}>
                <RiArrowRightLine />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

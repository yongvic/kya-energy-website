"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { strapiUrl } from "@/lib/config";

async function fetchTeamMembers(): Promise<string[]> {
  const request = await fetch(`${strapiUrl}/api/photos-de-groupes?populate=*`);
  const response = await request.json();
  console.log(JSON.stringify(response));
  const imageUrls = response.data.map(
    (data: {
      photo: {
        url: string;
      };
    }) => `${strapiUrl}${data.photo.url}`,
  );
  console.log(imageUrls);
  return imageUrls;
}

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: React component
// biome-ignore lint/style/noDefaultExport: Already used
export default function Carousel() {
  const t = useTranslations("à propos.carousel");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchTeamMembers().then((teamMembers) => setImageUrls(teamMembers));
  }, []);

  function handlePrev() {
    setIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length,
    );
  }

  function handleNext() {
    setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }

  return (
    <section className="relative h-screen bg-black">
      {/* Carousel */}
      {/* The container is no longer needed as the section is now the relative parent */}

      {/* Image with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        <motion.img
          // Add a unique key to the image for AnimatePresence to track it
          key={imageUrls[index]}
          src={imageUrls[index]}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          alt={t("description photo")}
          className="absolute inset-0 size-full object-cover"
        />
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#05df72a0] to-[#fffa]/20 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Main Content Wrapper */}
        <div className="flex flex-col w-full max-w-lg lg:max-w-2xl text-white gap-8 md:gap-12">
          {/* Text block */}
          <div className="space-y-4">
            <motion.h1
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="text-3xl font-bold sm:text-4xl lg:text-6xl">
              {t("notre équipe")}
              <br />
              {t("excellence")}
            </motion.h1>
            <motion.p
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="text-base sm:text-lg lg:text-xl">
              {t("découverte")}
            </motion.p>
          </div>

          {/* Controls block */}
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="flex justify-between items-center w-full">
            {/* Indicators */}
            <div className="flex items-center justify-center gap-3">
              {imageUrls.map((_, i) => (
                <button
                  key={_}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)} // Assuming you have a setIndex function
                  className={`size-3 rounded-full transition-all duration-300 md:size-4 ${
                    index === i ? "bg-white scale-125" : "bg-green-300/70"
                  }`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 text-2xl md:text-4xl text-kya-green">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="p-3 bg-white/60 rounded-full hover:bg-green-300 transition-colors md:p-4">
                <RiArrowLeftLine />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="p-3 bg-white/60 rounded-full hover:bg-green-300 transition-colors md:p-4">
                <RiArrowRightLine />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { strapiUrl } from "@/data/strapi";

async function fetchTeamMembers(): Promise<string[]> {
  const request = await fetch(`${strapiUrl}/api/photos-de-groupes?populate=*`);
  const response = await request.json();
  const imageUrls = response.data.map(
    (data: {
      photo: {
        url: string;
      };
    }) => `${strapiUrl}${data.photo.url}`,
  );
  return imageUrls;
}

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
      {imageUrls.length > 0 && (
        <Image
          // Add a unique key to the image for AnimatePresence to track it
          alt={t("description photo")}
          className="absolute inset-0 size-full object-cover"
          key={imageUrls[index]}
          src={imageUrls[index]}
          width={1000}
          height={500}
        />
      )}

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-r from-[#05df72a0] to-[#fffa]/20 p-4 sm:p-6 md:p-8">
        {/* Main Content Wrapper */}
        <div className="flex w-full max-w-lg flex-col gap-8 text-white md:gap-12 lg:max-w-2xl">
          {/* Text block */}
          <div className="space-y-4">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl">
              {t("notre équipe")}
              <br />
              {t("excellence")}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl">{t("découverte")}</p>
          </div>

          {/* Controls block */}
          <div className="flex w-full items-center justify-between">
            {/* Indicators */}
            <div className="flex items-center justify-center gap-3">
              {imageUrls.map((_, i) => (
                <button
                  aria-label={`Go to slide ${i + 1}`}
                  className={`size-3 rounded-full transition-all duration-300 md:size-4 ${
                    index === i ? "scale-125 bg-white" : "bg-green-300/70"
                  }`}
                  key={_}
                  onClick={() => setIndex(i)} // Assuming you have a setIndex function
                  type="button"
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3 text-2xl text-kya-green md:text-4xl">
              <button
                aria-label="Previous Slide"
                className="rounded-full bg-white/60 p-3 transition-colors hover:bg-green-300 md:p-4"
                onClick={handlePrev}
                type="button">
                <RiArrowLeftLine />
              </button>
              <button
                aria-label="Next Slide"
                className="rounded-full bg-white/60 p-3 transition-colors hover:bg-green-300 md:p-4"
                onClick={handleNext}
                type="button">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  containerVariants,
  itemVariants,
} from "@/lib/certification-iso9001-utils";
import { strapiUrl } from "@/lib/config";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

// --- Skeleton Component for Loading State (with Tailwind CSS) ---
function PourquoiSkeleton() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated placeholder for the text content */}
        <div className="mx-auto max-w-2xl lg:text-center animate-pulse">
          <div className="h-8 w-1/3 bg-gray-300 rounded-md mx-auto" />
          <div className="mt-4 h-5 w-4/5 bg-gray-300 rounded-md mx-auto" />
        </div>

        {/* Animated placeholder for the grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({
              length: 4,
            }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 animate-pulse">
                <div className="size-12 rounded-lg bg-gray-300" />
                <div className="h-4 w-3/4 bg-gray-300 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Main Component (with Tailwind CSS) ---
export default function Pourquoi() {
  const t = useTranslations("certification iso 9001.pourquoi");
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${strapiUrl}/api/pourquoi-certifications?populate=*`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        setContent(data.data);
      } catch {
        setError("Failed to fetch data from server");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <PourquoiSkeleton />;
  }

  if (error.trim() !== "") {
    return (
      <section className="bg-white py-16 text-center text-red-600">
        Error: {error}
      </section>
    );
  }

  return (
    <motion.section
      className="bg-white py-16 sm:py-20 lg:py-24" // Section padding
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={containerVariants}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-2xl lg:text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("titre")}
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t("description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.div
            variants={containerVariants} // Re-use container for staggering children
            className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-4">
                {/* Image Icon */}
                <div className="flex size-16 items-center justify-center rounded-lg bg-green-100">
                  <img
                    src={strapiUrl + item.icone.url}
                    alt={item.texte}
                    className="size-12 object-contain" // size-12 is 48px
                    width={48}
                    height={48}
                  />
                </div>
                {/* Text */}
                <p className="text-base font-semibold leading-7 text-gray-900">
                  {item.texte}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

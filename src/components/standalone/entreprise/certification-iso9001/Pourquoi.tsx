"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { strapiUrl } from "@/data/strapi";

// --- Skeleton Component for Loading State (with Tailwind CSS) ---
function PourquoiSkeleton() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Animated placeholder for the text content */}
        <div className="mx-auto max-w-2xl animate-pulse lg:text-center">
          <div className="mx-auto h-8 w-1/3 rounded-md bg-gray-300" />
          <div className="mx-auto mt-4 h-5 w-4/5 rounded-md bg-gray-300" />
        </div>

        {/* Animated placeholder for the grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from<number>({
              length: 4,
            }).map((_) => (
              <div
                className="flex animate-pulse flex-col items-center gap-4"
                key={_}>
                <div className="size-12 rounded-lg bg-gray-300" />
                <div className="h-4 w-3/4 rounded-md bg-gray-300" />
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
  const [content, setContent] = useState([]);
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
    <section
      className="bg-white py-16 sm:py-20 lg:py-24" // Section padding
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
            {t("titre")}
          </h3>
          <p className="mt-4 text-gray-600 text-lg leading-8">
            {t("description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {content?.map(
              (item: {
                id: string;
                icone: {
                  url: string;
                };
                texte: string;
              }) => (
                <div
                  className="flex flex-col items-center gap-4 text-center"
                  key={item.id}>
                  {/* Image Icon */}
                  <div className="flex size-16 items-center justify-center rounded-lg bg-green-100">
                    <Image
                      alt={item.texte}
                      className="size-12 object-contain"
                      height={48} // size-12 is 48px
                      src={strapiUrl + item.icone.url}
                      width={48}
                    />
                  </div>
                  {/* Text */}
                  <p className="font-semibold text-base text-gray-900 leading-7">
                    {item.texte}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* --- En-tête de section, maintenant plus audacieux --- */}
        <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </div>

        {/* --- Grille des bénéfices --- */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {content?.map(
              (
                item: {
                  id: string;
                  icone: {
                    url: string;
                  };
                  texte: string;
                },
                index: number,
              ) => (
                <div
                  key={item.id}
                  className="animate-fade-in-up flex flex-col items-center text-center"
                  style={{
                    animationDelay: `${150 * index}ms`,
                  }}>
                  {/* --- Cadre de l'icône, inspiré de votre maquette --- */}
                  <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-100/80 p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="flex size-24 items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        alt={item.texte}
                        src={strapiUrl + item.icone.url}
                        width={96} // size-24
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* --- Texte du bénéfice --- */}
                  <p className="text-lg font-medium leading-relaxed text-slate-700">
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

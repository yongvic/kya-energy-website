"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";
import Link from "next/link";

interface Faq {
  question: string;
  reponse: string;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-kya-white transition-shadow duration-300 hover:shadow-lg">
      {/* 
        Header Cliquable: 
        - J'utilise un `div` avec un `role="button"` pour une meilleure sémantique et accessibilité.
        - Le padding est plus généreux pour une meilleure zone de clic.
      */}
      <button
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center justify-between gap-4 p-6"
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        tabIndex={0}
        type="button">
        <h3 className="text-lg font-semibold text-kya-coffee">{question}</h3>
        <FaChevronDown
          className={`
            flex-shrink-0 text-xl text-kya-green transition-transform duration-500 ease-in-out 
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* 
        Conteneur de la Réponse: 
        - La transition `grid-rows` est la clé pour une animation fluide et robuste.
      */}
      <div
        className={`
          grid overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}>
        {/* Cet enfant est nécessaire pour que l'animation grid fonctionne correctement */}
        <div className="min-h-0">
          {/*
            Contenu de la réponse: 
            - Le padding est à l'intérieur pour ne pas être écrasé par l'animation.
            - La classe `prose` (du plugin @tailwindcss/typography) style joliment le contenu HTML.
          */}
          <div
            className="prose max-w-none border-t border-gray-100 px-6 pb-6 pt-4 text-kya-coffee/80"
            // Assurez-vous que le HTML dans 'answer' est sécurisé !
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          />
        </div>
      </div>
    </div>
  );
}

async function fetchFaqs() {
  try {
    const response = await fetch(`${strapiUrl}/api/faqs`);
    const data = await response.json();

    return data.data.map((faq: Faq) => ({
      question: faq.question,
      reponse: faq.reponse,
    }));
  } catch {
    return [];
  }
}

export default function FaqClientPage() {
  const t = useTranslations("faq");
  const [faqs, setFaqs] = useState<Faq[]>([]);
  useEffect(() => {
    fetchFaqs().then((fetchedFaqs) => {
      setFaqs(fetchedFaqs);
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const filteredQuestions = faqs.filter((faq: Faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-white">
      {/* --- HERO SECTION (INCHANGÉ) --- */}
      <section className="relative bg-gradient-to-r from-[#1e9983] to-[#197867] px-4 py-32 text-center text-white overflow-hidden">
        <div className="absolute -bottom-40 left-0 z-10 flex h-full w-full flex-col items-start justify-end">
          <p className="container text-kya-green mx-auto flex select-none items-center justify-between font-black text-[25rem] text-shadow-[0_1px_10px_#fff]">
            <span className="lowercase">{t("titre")}</span>
            <span className="skew-x-6 rotate-12">?</span>
          </p>
        </div>
        <h1 className="container relative z-20 mx-auto w-full text-left text-6xl font-black lowercase md:text-8xl">
          {t("titre")}
        </h1>
        <p
          className="relative z-20 mb-8 text-2xl font-semibold md:text-4xl"
          dangerouslySetInnerHTML={{
            __html: t("sous titre"),
          }}
        />
        <div className="absolute bottom-4 left-1/2 z-20 mx-auto w-[90%] -translate-x-1/2 rounded-full bg-kya-white shadow-lg sm:w-xl lg:w-2xl">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="w-full rounded-full py-3 pl-12 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-kya-orange"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("placeholder")}
            type="text"
          />
        </div>
      </section>

      {/* --- NOUVELLE SECTION DE CATÉGORIES --- */}
      {/*<section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-kya-coffee mb-12">Parcourir par catégorie</h2>
           <div className="flex flex-wrap justify-center gap-4">
             {categories.map(category => (
               <button
                className={`flex items-center gap-3 rounded-full border-2 px-6 py-3 font-semibold transition-all duration-300
                   ${activeCategory === category.name
                     ? 'border-kya-green bg-kya-green text-kya-white shadow-lg'
                     : 'border-gray-200 bg-kya-white text-kya-coffee hover:border-kya-green/50 hover:shadow-md'}`
                 }
                 key={category.name}
                 onClick={() => setActiveCategory(category.name)}
                 type="button"
               >
                 <category.icon />
                 <span>{category.name}</span>
               </button>
             ))}
           </div>
        </div>
      </section>*/}

      {/* --- SECTION ACCORDÉON AMÉLIORÉE --- */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Colonne 1 */}
          <div className="space-y-4">
            {filteredQuestions
              .slice(0, Math.ceil(filteredQuestions.length / 2))
              .map((q, i) => (
                <AccordionItem
                  answer={q.reponse}
                  isOpen={openQuestion === i}
                  key={q.question}
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                  question={q.question}
                />
              ))}
          </div>
          {/* Colonne 2 */}
          <div className="space-y-4">
            {filteredQuestions
              .slice(Math.ceil(filteredQuestions.length / 2))
              .map((q, i) => {
                const globalIndex = i + Math.ceil(filteredQuestions.length / 2);
                return (
                  <AccordionItem
                    answer={q.reponse}
                    isOpen={openQuestion === globalIndex}
                    key={globalIndex}
                    onClick={() =>
                      setOpenQuestion(
                        openQuestion === globalIndex ? null : globalIndex,
                      )
                    }
                    question={q.question}
                  />
                );
              })}
          </div>
        </div>

        {/* Message si aucun résultat */}
        {filteredQuestions.length === 0 && (
          <div className="mt-12 text-center text-gray-500">
            <p className="text-xl">
              Aucune question ne correspond à votre recherche.
            </p>
            <p>Essayez avec d'autres mots-clés.</p>
          </div>
        )}
      </section>

      {/* --- NOUVELLE SECTION CTA "CONTACT" --- */}
      <section className="tech-pattern-bg py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-kya-coffee">
            Vous ne trouvez pas de réponse ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-kya-coffee/70">
            Notre équipe est là pour vous aider. Contactez-nous directement pour
            toute question spécifique.
          </p>
          <Link
            className="mt-8 inline-block rounded-full bg-kya-orange px-8 py-3 font-bold text-kya-white shadow-lg transition-transform hover:scale-105"
            href="/contact">
            Contacter le support
          </Link>
        </div>
      </section>
    </div>
  );
}

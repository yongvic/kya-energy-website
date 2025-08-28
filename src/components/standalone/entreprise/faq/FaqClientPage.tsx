"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";

interface Faq {
  question: string;
  reponse: string;
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

function FaqClientPage() {
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
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-[#1e9983] from-[19%] to-[#197867] to-[100%] px-4 py-30 text-center text-white">
        <div className="-bottom-40 absolute left-0 z-10 flex h-max w-full flex-col items-start justify-end overflow-hidden">
          <p className="faq-effect container mx-auto flex select-none items-center justify-between font-black font-facebook-sans text-[25rem] text-shadow[100px_0_1000px_#fff]">
            <span>{t("titre").toLowerCase()}</span>
            <span className="skew-6 rotate-12">?</span>
          </p>
          {/* <div className="h-[30%] absolute w-full bottom-[40%] bg-linear-to-r  from-[#1e9983a0] from-[19%] to-[#197867a0] to-[100%]"></div> */}
        </div>
        <h1 className="container relative z-20 mx-auto mb-4 w-full text-left font-black text-6xl lowercase md:text-8xl">
          {t("titre")}
        </h1>
        <p
          className="relative z-20 mb-8 font-semibold text-2xl md:text-4xl"
          dangerouslySetInnerHTML={{
            __html: t("sous titre"),
          }}
        />
        <div className="-bottom-4 -translate-x-1/2 absolute left-1/2 z-20 mx-auto w-[90%] rounded-full bg-kya-white shadow-lg outline-none sm:w-xl lg:w-2xl">
          <FaSearch className="-translate-y-1/2 absolute top-1/2 left-4 text-gray-400" />
          <input
            className="w-full rounded-full py-3 pr-4 pl-12 text-gray-800 focus:outline-none focus:ring-2 focus:ring-kya-orange"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("placeholder")}
            type="text"
          />
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 flex flex-wrap justify-center gap-4" />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
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
      </section>
    </div>
  );
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
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <button
        className="flex w-full items-center justify-between gap-1 p-4 text-left font-bold text-kya-coffee dark:text-kya-white"
        onClick={onClick}
        type="button">
        <span>{question}</span>
        <div>
          <FaChevronDown />
        </div>
      </button>
      {isOpen && (
        <div className="overflow-hidden">
          <div className="p-4 pt-0 font-medium text-gray-600 dark:text-gray-300">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default FaqClientPage;

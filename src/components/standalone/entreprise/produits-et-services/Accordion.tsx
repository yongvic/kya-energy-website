"use client";

import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Produit {
  label: string;
  image: string;
  description: string;
}

interface AccordionProps {
  products: Produit[];
}

export default function Accordion({ products }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-2">
      {products.map((product, index) => (
        // Anciennement .accordion_item
        <div
          className="rounded-lg bg-gray-50 p-4 border-t border-gray-200"
          key={product.label}>
          {/*
            Anciennement .accordion_header.
            Le onClick est placé ici pour gérer l'ouverture/fermeture.
          */}
          <button
            className="flex cursor-pointer items-center justify-between gap-4"
            onClick={() => toggleAccordion(index)}
            onKeyDown={(e) => e.key === "Enter" && toggleAccordion(index)}
            tabIndex={0}
            type="button">
            {/* Anciennement .accordion_header_content */}
            <div className="flex items-center gap-6">
              <Image
                alt={product.label}
                className="hidden rounded-lg bg-kya-white p-2 shadow-sm sm:block object-contain size-32"
                height={120}
                src={product.image}
                // Anciennement .accordion_image
                width={120}
              />
              <p className="flex-1 text-left text-xl font-semibold text-kya-coffee">
                {product.label}
              </p>
            </div>
            {/* Anciennement .accordion_icon */}
            <div className="flex-shrink-0 text-2xl text-kya-green">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </button>

          {/* 
            Anciennement .accordion_content
            C'est ici que la magie de la transition opère.
          */}
          <div
            className={`grid overflow-hidden text-left transition-all duration-500 ease-in-out
              ${openIndex === index ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}>
            {/* 
              Cet élément interne est nécessaire pour la transition 'grid-rows'.
              Il empêche l'effondrement des marges et paddings.
            */}
            <div className="min-h-0">
              {/*
                Anciennement .accordion_content_inner
                'prose' est une classe de Tailwind qui style joliment le HTML généré.
              */}
              <div
                className="prose max-w-none border-t pt-4 text-kya-coffee/80"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

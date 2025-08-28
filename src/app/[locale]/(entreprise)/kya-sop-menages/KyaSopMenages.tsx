"use client";
import Image from "next/image";
import { useState } from "react";
import Popup from "@/components/ui/Popup";

export default function KyaSopMenages() {
  const kyaSopList = [
    {
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP M2",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie",
      ],
      imgSrc: "/kya-sop/kya-sop-menages-m2.avif",
      title: "KYA-SoP pour ménages M2",
    },
    {
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP M3",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie",
      ],
      imgSrc: "/kya-sop/kya-sop-menages-m3.avif",
      title: "KYA-SoP pour ménages M3",
    },
    {
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP M5",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie",
      ],
      imgSrc: "/kya-sop/kya-sop-menages-m5.avif",
      title: "KYA-SoP pour ménages M5",
    },
    {
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP M7",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie",
      ],
      imgSrc: "/kya-sop/kya-sop-menages-m7.avif",
      title: "KYA-SoP pour ménages M7",
    },
  ];
  const [clicked, setClicked] = useState<number | null>(null);

  return (
    <div className="my-16">
      {clicked != null && (
        <Popup
          setClicked={setClicked}
          title={kyaSopList[clicked].title}
        />
      )}
      {kyaSopList.map((value, index, array) => (
        <div
          className="container mx-auto px-8"
          key={value.title}>
          <div className="flex flex-col md:flex-row justify-center gap-16">
            <div className="w-full md:w-max border-4 rounded border-kya-green overflow-hidden">
              <Image
                alt={value.title}
                className="w-full object-contain"
                height={500}
                src={value.imgSrc}
                width={500}
              />
            </div>
            <div className="space-y-8">
              <h1 className="font-black text-4xl text-kya-orange">
                {value.title}
              </h1>
              <ul>
                {value.characteristics.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
              <button
                onClick={() => setClicked(index)}
                type="button">
                <div className="bg-kya-orange p-4 w-max hover:-translate-0.5 font-bold text-kya-white">
                  Demander un devis
                </div>
              </button>
            </div>
          </div>
          {/* If not last, display a line under it */}
          {array.length - 1 !== index && (
            <div className="h-1 bg-kya-orange container mx-auto w-2/3 my-16"></div>
          )}
        </div>
      ))}
    </div>
  );
}

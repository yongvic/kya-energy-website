"use client";

import Image from "next/image";
import { useState } from "react";
import { LuX, LuArrowRight } from "react-icons/lu";

function Popup({ title, setClicked }: { title: string; setClicked: React.Dispatch<React.SetStateAction<number | null>>; }) {
  return (
    <div className="z-[100] fixed top-0 left-0 w-full h-full bg-kya-coffee/10 backdrop-blur-sm flex justify-center items-center">
      <div className="mx-auto px-8 w-full sm:w-[500px]">
        <form action="" method="POST" className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-kya-coffee">{title}</h1>
            <button className="p-2 rounded-full hover:bg-gray-200" onClick={() => setClicked(null)}><LuX size={20} /></button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 text-center">Veuillez entrer votre numéro de téléphone. Notre équipe se chargera de vous contacter.</p>
            <label htmlFor="phone-number" className="block">
              <span className="text-gray-700 font-semibold">Numéro de téléphone</span>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                pattern="^\d*$"
                required
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kya-green focus:border-kya-green"
              />
            </label>
            <button className="w-full flex justify-center items-center group font-bold text-xl bg-kya-green py-3 px-4 text-white rounded-md hover:bg-kya-green/90 transition-all duration-300">
              <span>Contactez-moi</span>
              <LuArrowRight className="ml-2 -translate-x-1.5 group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function KyaSopInstitutions() {
  const kyaSopList = [
    {
      imgSrc: "/kya-sop/kya-sop-institutions-b10.avif",
      title: "KYA-SoP pour institutions B10",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie"
      ],
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP B10",
    },
    {
      imgSrc: "/kya-sop/kya-sop-institutions-b15.avif",
      title: "KYA-SoP pour institutions B15",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie"
      ],
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP B15",
    },
    {
      imgSrc: "/kya-sop/kya-sop-institutions-b20.avif",
      title: "KYA-SoP pour institutions B20",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie"
      ],
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP B20",
    },
    {
      imgSrc: "/kya-sop/kya-sop-institutions-b25.avif",
      title: "KYA-SoP pour institutions B25",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie"
      ],
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP B25",
    },
    {
      imgSrc: "/kya-sop/kya-sop-institutions-b30.avif",
      title: "KYA-SoP pour institutions B30",
      characteristics: [
        "Champ PV",
        "Onduleur",
        "Batteries",
        "Cablerie"
      ],
      buyHref: "mailto:marketing@kya-energy.com?subject=ACHAT DE KYA-SoP B30",
    },
  ];
  const [clicked, setClicked] = useState<number | null>(null);

  return (
    <div className="my-16">
      {clicked != null && (<Popup title={kyaSopList[clicked].title} setClicked={setClicked} />)}
      {
        kyaSopList.map((value, index, array) => (
          <div key={index} className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-center gap-16">
              <div className="w-full md:w-max border-4 rounded border-kya-green overflow-hidden">
                <Image width={500} height={500} src={value.imgSrc} alt={value.title} className="w-full object-contain" />
              </div>
              <div className="space-y-8">
                <h1 className="font-black text-4xl text-kya-orange">{value.title}</h1>
                <ul>
                  {value.characteristics.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
                <button onClick={() => setClicked(index)}>
                  <div className="bg-kya-orange p-4 w-max hover:-translate-0.5 font-bold text-kya-white">Demander un devis</div>
                </button>
              </div>
            </div>
            {/* If not last, display a line under it */}
            {array.length - 1 != index && (<div className="h-1 bg-kya-orange container mx-auto w-2/3 my-16"></div>)}
          </div>
        ))
      }
    </div>
  );
}

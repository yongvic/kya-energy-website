"use client";

import Image from "next/image";
import { useState } from "react";
import { LuX, LuArrowRight } from "react-icons/lu";

function Popup({ title, setClicked }: { title: string; setClicked: any; }) {
  return (
    <div className="z-[100] fixed top-0 left-0 w-full h-full bg-kya-coffee/10 flex justify-center items-center">
      <div className="mx-auto px-8 w-full sm:w-96">
        <form action="" method="POST" className="bg-white">
          <div className="flex items-center justify-between p-4 font-bold">
            <h1>{title}</h1>
            <button className="px-4 rounded-full bg-kya-coffee" onClick={() => setClicked(null)}><LuX /></button>
          </div>
          <div>
            <p>Veuillez entrer votre numéro de téléphone. Notre équipe se chargera de vous contacter.</p>
            <label htmlFor="phone-number">
              <p>Numéro de téléphone</p>
              <div>
                <input type="text" name="phone-number" id="phone-number" pattern="^\d*$" required />
              </div>
            </label>
            <button className="w-full">
              <div className="flex px-8 justify-between items-center group font-bold text-xl bg-kya-green py-4">
                <p>Contactez-moi</p>
                <LuArrowRight className="-translate-x-1.5 group-hover:translate-x-1.5 transition-all duration-300" />
              </div>
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

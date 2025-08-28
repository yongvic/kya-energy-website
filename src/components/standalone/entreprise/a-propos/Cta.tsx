"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { RiOrganizationChart, RiShakeHandsLine } from "react-icons/ri";

export default function Cta() {
  const t = useTranslations("à propos.cta");

  return (
    <div className="bg-gray-100 py-32">
      <div className="container mx-auto px-4">
        <div className="px-4 lg:px-48">
          <h2 className="text-center text-4xl font-bold w-full">
            {t("appel")}
          </h2>
          <div className="flex justify-center items-center my-8">
            <p className="text-center text-xl">{t("description")}</p>
          </div>
          <div className="my-16">
            <div className="flex flex-wrap items-center justify-center gap-8 my-8 text-white font-facebook-sans">
              <Link href="#equipe">
                <div className="w-max px-6 py-4 gap-3 flex items-center justify-center rounded-full bg-kya-orange transition-colors duration-300">
                  <p className="text-2xl">
                    <RiOrganizationChart />
                  </p>
                  <p>{t("organigramme")}</p>
                </div>
              </Link>
              <Link href="">
                <div className="w-max px-6 py-4 gap-3 flex items-center justify-center rounded-full bg-kya-green transition-colors duration-300">
                  <p className="text-2xl">
                    <RiShakeHandsLine />
                  </p>
                  <p>{t("rejoindre")}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

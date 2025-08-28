import { useTranslations } from "next-intl";
import { useId } from "react";
import { LuArrowRight, LuX } from "react-icons/lu";

export default function Popup({
  title,
  setClicked,
}: {
  title: string;
  setClicked: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const t = useTranslations("popup");
  const id = useId();

  return (
    <div className="z-[100] fixed top-0 left-0 size-full bg-kya-coffee/10 backdrop-blur-sm flex justify-center items-center">
      <div className="mx-auto px-8 w-full sm:w-[500px]">
        <form
          action=""
          className="bg-white rounded-lg shadow-lg p-6"
          method="POST">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-kya-coffee">{title}</h1>
            <button
              className="p-2 rounded-full hover:bg-gray-200"
              onClick={() => setClicked(null)}
              type="button">
              <LuX size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 text-center">
              {t("saisir le numero de telephone")}
            </p>
            <label
              className="block"
              htmlFor={id}>
              <span className="text-gray-700 font-semibold">
                {t("numero de telephone")}
              </span>
              <input
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kya-green focus:border-kya-green"
                id={id}
                name="phone-number"
                pattern="^\d*$"
                required
                type="tel"
              />
            </label>
            <button
              className="w-full flex justify-center items-center group font-bold text-xl bg-kya-green py-3 px-4 text-white rounded-md hover:bg-kya-green/90 transition-all duration-300"
              type="button">
              <span>{t("contactez moi")}</span>
              <LuArrowRight className="ml-2 -translate-x-1.5 group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  const t = useTranslations("blog.hero");

  return (
    <section className="h-svh relative bg-[url(/actu/background-actu.png)]">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-gray-600/50 to-gray-50/50 text-white">
        <div className="container mx-auto h-full p-4 flex justify-center flex-col *:py-8">
          <h1 className="font-extrabold text-4xl border-b-2 border-b-white w-max">{t("titre")}</h1>
          <p className="font-semibold text-2xl max-w-[500px]">{t("description")}</p>
          <form action="" method="GET" className="w-max self-center">
            <label className="flex items-center justify-center gap-4 border-2 w-max border-gray-50 rounded-full px-4 py-2 bg-white/50 backdrop-blur-lg text-kya-coffee font-medium">
              <input type="text" name="query" id="query" className="outline-0" />
              <button type="submit"><FaSearch /></button>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

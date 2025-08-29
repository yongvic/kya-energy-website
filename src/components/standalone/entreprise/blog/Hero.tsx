import { strapiUrl } from "@/data/strapi";
import { useTranslations } from "next-intl";
import { useId } from "react";
import { FaSearch } from "react-icons/fa";

export default async function Hero() {
  const t = useTranslations("blog.hero");
  const formId = useId();
  const request = await fetch(`${strapiUrl}/api/personnalisation`);
  const data = await request.json();
  const background = `${strapiUrl}/${data.arrierePlanBlog.url}`;

  return (
    <section className={`relative h-svh bg-[url(${background})]`}>
      <div className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-gray-600/50 to-gray-50/50 text-white">
        <div className="container mx-auto flex h-full flex-col justify-center p-4 *:py-8">
          <h1 className="w-max border-b-2 border-b-white font-extrabold text-4xl">
            {t("titre")}
          </h1>
          <p className="max-w-[500px] font-semibold text-2xl">
            {t("description")}
          </p>
          <form
            action=""
            className="w-max self-center"
            method="GET">
            <label className="flex w-max items-center justify-center gap-4 rounded-full border-2 border-gray-50 bg-white/50 px-4 py-2 font-medium text-kya-coffee backdrop-blur-lg">
              <input
                className="outline-0"
                id={formId}
                name="query"
                type="text"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}

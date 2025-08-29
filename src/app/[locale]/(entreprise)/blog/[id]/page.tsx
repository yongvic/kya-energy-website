import { marked } from "marked";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getTranslations } from "next-intl/server";
import { FaHeart } from "react-icons/fa6";
import { strapiUrl } from "@/data/strapi";

interface ArticleRecord {
  documentId: string;
  id: string;
  titre: string;
  photoCouverture: {
    url: string;
  };
}

async function getArticleData(id: string) {
  const articleResponse = await fetch(
    `${strapiUrl}/api/articles/${id}?populate=*`,
    {
      cache: "force-cache",
    },
  );

  if (!articleResponse.ok) {
    throw new Error("Failed to fetch article");
  }

  const articleJson = await articleResponse.json();

  const recommendationsResponse = await fetch(
    `${strapiUrl}/api/articles?sort=date:desc&pagination[limit]=3&populate=*&filters[id][$ne]=${articleJson.data.id}`,
    {
      cache: "no-store",
    },
  );

  const recommendationsJson = await recommendationsResponse.json();

  return {
    article: articleJson.data,
    recommendations: recommendationsJson.data,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const t = await getTranslations("blog.article");
  const { id } = await params;
  const { article, recommendations } = await getArticleData(id);

  if (!article) {
    return <div>{t("inexistant")}</div>;
  }

  const { titre, contenu, like, date, photoCouverture } = article;
  const imageUrl = photoCouverture.url;

  const publicationDate = new Date(date).toLocaleDateString("fr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="container mx-auto py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <article className="rounded-lg bg-kya-white p-8 shadow-lg">
            {imageUrl && (
              <div className="mb-8 overflow-hidden rounded-lg">
                <Image
                  alt={titre || "Article image"}
                  className="h-auto w-full object-cover"
                  height={600}
                  src={`${strapiUrl}${imageUrl}`}
                  width={1200}
                />
              </div>
            )}
            <div className="mb-4 flex w-full flex-col items-start justify-between gap-4">
              <span className="self-end text-nowrap font-semibold text-kya-orange text-lg">
                {publicationDate}
              </span>
              <h1 className="text-justify font-bold text-2xl text-kya-coffee">
                {titre}
              </h1>
            </div>
            <div
              className="article prose prose-lg max-w-none text-justify leading-8"
              dangerouslySetInnerHTML={{
                __html: marked(contenu),
              }}
            />
            <div className="mt-8 flex items-center gap-2 text-gray-500">
              <FaHeart className="text-red-500" />
              <span className="font-medium">{like}</span>
            </div>
          </article>
        </div>
        <aside>
          <div className="sticky top-24">
            <h2 className="mx-4 mb-4 font-bold text-2xl text-kya-coffee">
              {t("autres articles")}
            </h2>
            <div className="space-y-6">
              {recommendations.map((rec: ArticleRecord) => (
                <Link
                  className="inline-block post"
                  href={`/blog/${rec.documentId}`}
                  key={rec.id}>
                  <div className="cursor-pointer rounded-lg bg-kya-white p-4 shadow-md transition-shadow duration-300 hover:shadow-xl">
                    {rec.photoCouverture.url && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          alt={rec.titre || "Recommendation image"}
                          className="h-auto w-full object-cover"
                          height={200}
                          src={`${strapiUrl}${rec.photoCouverture.url}`}
                          width={400}
                        />
                      </div>
                    )}
                    <h3 className="line-clamp-2 font-bold text-kya-coffee text-lg">
                      {rec.titre}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Script
        defer={true}
        src="/scripts/actu.js"
      />
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { article } = await getArticleData(id);
  let titre: string;
  let description: string;

  if (!article) {
    titre = "404, Not Found • KYA-Energy Group";
    description = "404, Not Found on the server";
  }

  const { Titre, Contenu } = article;
  titre = `${Titre}`;
  description = `${Contenu}`.slice(0, 30);

  return {
    description,
    title: titre,
  };
}

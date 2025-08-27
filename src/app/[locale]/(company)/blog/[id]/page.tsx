import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { strapiUrl } from "@/lib/config";
import "@/styles/post.css";
import { marked } from "marked";
import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

type ArticleRecord = {
  documentId: string;
  id: string;
  Titre: string;
  PhotoCouverture: {
    url: string;
  };
};

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
    `${strapiUrl}/api/articles?sort=Date:desc&pagination[limit]=3&populate=*&filters[id][$ne]=${articleJson.data.id}`,
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

  const { Titre, Contenu, Like, Date: publishedAt, PhotoCouverture } = article;
  const imageUrl = PhotoCouverture.url;

  const publicationDate = new Date(publishedAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <article className="bg-kya-white p-8 rounded-lg shadow-lg">
            {imageUrl && (
              <div className="mb-8 overflow-hidden rounded-lg">
                <Image
                  src={`${strapiUrl}${imageUrl}`}
                  alt={Titre || "Article image"}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <div className="flex justify-between items-start mb-4 w-full flex-col gap-4">
              <span className="text-lg font-semibold text-kya-orange text-nowrap self-end">
                {publicationDate}
              </span>
              <h1 className="text-2xl font-bold text-kya-coffee text-justify">
                {Titre}
              </h1>
            </div>
            <div
              className="article prose prose-lg max-w-none text-justify leading-8"
              dangerouslySetInnerHTML={{
                __html: marked(Contenu),
              }}
            />
            <div className="mt-8 flex items-center gap-2 text-gray-500">
              <FaHeart className="text-red-500" />
              <span className="font-medium">{Like}</span>
            </div>
          </article>
        </div>
        <aside>
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold text-kya-coffee mb-4 mx-4">
              {t("autres articles")}
            </h2>
            <div className="space-y-6">
              {recommendations.map((rec: ArticleRecord) => (
                <Link
                  href={`/actu/${rec.documentId}`}
                  key={rec.id}
                  className="inline-block">
                  <div className="bg-kya-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    {rec.PhotoCouverture.url && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={`${strapiUrl}${rec.PhotoCouverture.url}`}
                          alt={rec.Titre || "Recommendation image"}
                          width={400}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-lg line-clamp-2 text-kya-coffee">
                      {rec.Titre}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Script
        src="/scripts/actu.js"
        defer={true}
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
    (titre = "404, Not Found • KYA-Energy Group"),
      (description = "404, Not Found on the server");
  }

  const { Titre, Contenu } = article;
  titre = `${Titre}`;
  description = `${Contenu}`.slice(0, 30);

  return {
    title: titre,
    description,
  };
}

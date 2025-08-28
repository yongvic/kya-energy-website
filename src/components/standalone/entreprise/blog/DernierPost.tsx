"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { MdPushPin } from "react-icons/md";
import { strapiUrl } from "@/data/strapi";

interface DernierPost {
  documentId: string;
  titre: string;
  contenu: string;
  like: number;
  date: string;
  photoCouverture: {
    url: string;
  };
}

export default function DernierPost() {
  const locale = useLocale();
  const t = useTranslations("blog.dernier post");
  const [post, setPost] = useState<DernierPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
          `${strapiUrl}/api/articles?sort=date:desc&pagination[limit]=1&populate=*`,
          {
            cache: "no-store",
          },
        );

        const responseJson = await request.json();

        if (responseJson.data && responseJson.data.length > 0) {
          setPost(responseJson.data[0]);
        }
      } catch {
        setError("Failed to fetch content");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto">
        <div className="flex items-center gap-2 font-medium *:w-max">
          <p>
            <MdPushPin />
          </p>
          <p>{t("titre")}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="h-full w-full animate-pulse bg-gray-200" />
          <div>
            <div className="mb-2 h-4 w-full animate-pulse bg-gray-200" />
            <div className="mb-2 h-8 w-3/4 animate-pulse bg-gray-200" />
            <div className="h-24 w-full animate-pulse bg-gray-200" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto my-8 text-center text-red-500">
        <p>{t("erreur de chargement")}</p>{" "}
        {/* Pense à ajouter cette traduction */}
      </section>
    );
  }

  if (!post) {
    return (
      <section className="container mx-auto my-8">
        <p>{t("aucun article récent")}</p>
      </section>
    );
  }

  const {
    documentId,
    like,
    contenu,
    titre,
    date: publishedAt,
    photoCouverture,
  } = post;

  const imageUrl = photoCouverture.url;

  const publicationDate = new Date(publishedAt).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="container mx-auto my-8">
      <div className="flex items-center gap-2 rounded-t-lg bg-kya-green px-4 py-2 font-medium text-kya-white *:w-max">
        <p>
          <MdPushPin className="text-xl" />
        </p>
        <p>{t("titre")}</p>
      </div>
      <Link href={`/blog/${documentId}`}>
        <article className="grid cursor-pointer grid-cols-1 gap-4 rounded-b-lg rounded-tr-lg bg-kya-white p-6 shadow-lg md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            {imageUrl ? (
              <Image
                alt={titre || "Pinned post image"}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                height={500}
                src={`${strapiUrl}${imageUrl}`}
                width={500}
              />
            ) : (
              <div className="h-full w-full animate-pulse bg-gray-200" />
            )}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-2 flex items-center justify-end gap-4">
                <span className="font-semibold text-kya-orange text-sm">
                  {publicationDate}
                </span>
              </p>
              <h1 className="mb-2 line-clamp-2 font-bold text-2xl text-kya-coffee">
                {titre}
              </h1>
              <div
                className="prose prose-sm line-clamp-3 text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: contenu,
                }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <button
                className="flex items-center gap-2 rounded-full bg-kya-orange px-4 py-2 font-bold text-kya-white transition-colors duration-300 hover:bg-kya-yellow hover:text-kya-coffee"
                type="button">
                <span>{t("lire")}</span>
                <FaArrowRight />
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <IoHeartOutline className="text-red-500" />
                <span className="font-medium">{like}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
}

"use client";
import { strapiUrl } from "@/lib/config";
import Image from "next/image";
import { MdPushPin } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface DernierPost {
  documentId: string;
  Titre: string;
  Contenu: string;
  Like: number;
  Date: string;
  PhotoCouverture: {
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
    const fetchPinnedPost = async () => {
      try {
        const request = await fetch(
          `${strapiUrl}/api/articles?sort=Date:desc&pagination[limit]=1&populate=*`,
          {
            cache: "no-store",
          },
        );

        if (!request.ok) {
          console.log("Failed to fetch pinned post");
        }

        const responseJson = await request.json();

        if (responseJson.data && responseJson.data.length > 0) {
          setPost(responseJson.data[0]);
        }
      } catch {
        setError("Failed to fetch content");
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedPost();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto">
        <div className="flex items-center *:w-max gap-2 font-medium">
          <p>
            <MdPushPin />
          </p>
          <p>{t("titre")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          <div>
            <div className="w-full h-4 bg-gray-200 animate-pulse mb-2"></div>
            <div className="w-3/4 h-8 bg-gray-200 animate-pulse mb-2"></div>
            <div className="w-full h-24 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return null;
  }

  const {
    documentId,
    Titre,
    Contenu,
    Like,
    Date: publishedAt,
    PhotoCouverture,
  } = post;

  const imageUrl = PhotoCouverture.url;

  const publicationDate = new Date(publishedAt).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="container mx-auto my-8">
      <div className="flex items-center *:w-max gap-2 font-medium bg-kya-green text-kya-white px-4 py-2 rounded-t-lg">
        <p>
          <MdPushPin className="text-xl" />
        </p>
        <p>{t("titre")}</p>
      </div>
      <Link href={`/actu/${documentId}`}>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-kya-white p-6 rounded-b-lg rounded-tr-lg shadow-lg cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            {imageUrl ? (
              <Image
                src={`${strapiUrl}${imageUrl}`}
                alt={Titre || "Pinned post image"}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="flex items-center justify-end gap-4 mb-2">
                <span className="text-sm font-semibold text-kya-orange">
                  {publicationDate}
                </span>
              </p>
              <h1 className="font-bold text-2xl line-clamp-2 mb-2 text-kya-coffee">
                {Titre}
              </h1>
              <div
                className="prose prose-sm line-clamp-3 text-gray-600"
                dangerouslySetInnerHTML={{ __html: Contenu }}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-kya-orange text-kya-white font-bold rounded-full hover:bg-kya-yellow hover:text-kya-coffee transition-colors duration-300">
                <span>{t("lire")}</span>
                <FaArrowRight />
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <IoHeartOutline className="text-red-500" />
                <span className="font-medium">{Like}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
}

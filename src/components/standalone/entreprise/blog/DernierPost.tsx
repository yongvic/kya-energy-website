"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { MdPushPin } from "react-icons/md";
import { strapiUrl } from "@/data/strapi";
import { marked } from "marked";
import { motion } from "framer-motion";

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
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* En-tête de section (réutilisable et animé) */}
        <motion.div
          className="mb-12"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}>
          <div className="flex items-center gap-3 text-kya-green">
            <MdPushPin className="text-2xl" />
            <span className="text-sm font-bold uppercase tracking-wider">
              {t("titre")}
            </span>
          </div>
        </motion.div>

        {/* --- La Carte d'Article Épinglé --- */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}>
          {/* Le Link entoure toute la carte */}
          <Link
            href={`/blog/${documentId}`}
            className="group block">
            {/* 
              On utilise motion.article pour les animations de survol.
              `whileHover="hover"` activera la variante 'hover' définie ci-dessous.
            */}
            <motion.article
              className="relative grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg lg:grid-cols-2"
              initial="initial"
              whileHover="hover">
              {/* --- Colonne Image --- */}
              <div className="relative aspect-video lg:aspect-auto">
                {imageUrl ? (
                  <Image
                    alt={titre || "Pinned post image"}
                    src={`${strapiUrl}${imageUrl}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-slate-200" />
                )}
                {/* Overlay pour l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/40" />
              </div>

              {/* --- Colonne Contenu --- */}
              <div className="flex flex-col p-8">
                {/* Date et Likes */}
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-kya-orange">
                    {publicationDate}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500">
                    <FaHeart className="text-red-400" />
                    <span>{like}</span>
                  </div>
                </div>

                {/* Titre */}
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-kya-coffee">
                  {titre}
                </h1>

                {/* Extrait (prose pour un bon styling) */}
                <div
                  className="post prose prose-slate mt-4 line-clamp-4 max-w-none text-slate-600"
                  dangerouslySetInnerHTML={{
                    __html: marked(contenu),
                  }}
                />

                {/* Bouton CTA qui s'anime au survol de la carte */}
                <motion.div
                  className="mt-8 flex w-max items-center gap-2 font-bold text-kya-green"
                  variants={{
                    initial: {
                      x: 0,
                    },
                    hover: {
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    },
                  }}>
                  <span>{t("lire")}</span>
                  <FaArrowRight />
                </motion.div>
              </div>
            </motion.article>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

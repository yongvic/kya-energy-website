"use client";

import { marked } from "marked";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { strapiUrl } from "@/data/strapi";
import { motion } from "framer-motion";
import { p, section } from "framer-motion/client";
import style from "styled-jsx/style";

interface Post {
  id: string;
  documentId: string;
  titre: string;
  contenu: string;
  like: number;
  date: string;
  photoCouverture: {
    url: string;
  };
}

interface Pagination {
  page: number;
  pageCount: number;
}

export default function TousLesPosts() {
  const t = useTranslations("blog.tous les posts");
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pinnedPostId, setPinnedPostId] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = Number.parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
          `${strapiUrl}/api/articles?sort=date:desc&pagination[limit]=1`,
          {
            cache: "no-store",
          },
        );
        const responseJson = await request.json();
        if (responseJson.data && responseJson.data.length > 0) {
          setPinnedPostId(responseJson.data[0].id);
        }
      } catch {
        setError("Something unexpected happened");
      }
    })();
  }, []);

  useEffect(() => {
    if (pinnedPostId === null) {
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const pinnedPostFilter = `&filters[id][$ne]=${pinnedPostId}`;
        const request = await fetch(
          `${strapiUrl}/api/articles?sort=date:desc&pagination[page]=${page}&pagination[pageSize]=6&populate=*${pinnedPostFilter}`,
          {
            cache: "no-store",
          },
        );

        if (!request.ok) {
          throw new Error("Failed to fetch posts");
        }

        const responseJson = await request.json();
        setPosts(responseJson.data);
        setPagination(responseJson.meta.pagination);
      } catch {
        setError("Failed to fetch contents");
      } finally {
        setLoading(false);
      }
    })();
  }, [
    page,
    pinnedPostId,
  ]);

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?page=${newPage}`);
  };

  function generatePagination(): (string | number)[] | null {
    if (!pagination) {
      return null;
    }

    const { page, pageCount } = pagination;
    const pages: (number | string)[] = [];

    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (page > 3) {
        pages.push("...");
      }
      if (page > 2) {
        pages.push(page - 1);
      }
      if (page !== 1 && page !== pageCount) {
        pages.push(page);
      }
      if (page < pageCount - 1) {
        pages.push(page + 1);
      }
      if (page < pageCount - 2) {
        pages.push("...");
      }
      pages.push(pageCount);
    }

    return pages;
  }

  if (loading) {
    return (
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            ...Array.from(
              {
                length: 6,
              },
              (_, index) => index,
            ),
          ].map((_) => (
            <div
              className="h-96 w-full animate-pulse rounded-lg bg-gray-200"
              key={_}
            />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const paginationLinks = generatePagination();

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* En-tête de la section (optionnel, mais recommandé) */}
        <motion.div
          className="mb-16 max-w-3xl mx-auto text-center"
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
          }}>
          <h1 className="text-4xl font-extrabold tracking-tight text-kya-coffee sm:text-5xl">
            {t("titre")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </motion.div>

        {/* --- Grille des Articles --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any, index: number) => (
            <motion.div
              key={post.id}
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
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}>
              <Link
                href={`/blog/${post.documentId}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-shadow duration-300 hover:shadow-2xl">
                {/* Image */}
                <div className="relative w-full overflow-hidden aspect-video">
                  <Image
                    alt={post.titre || "Post image"}
                    src={`${strapiUrl}${post.photoCouverture.url}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-grow flex-col p-6">
                  <p className="text-sm font-semibold text-kya-orange">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 line-clamp-2 text-xl font-bold text-kya-coffee">
                    {post.titre}
                  </h2>
                  <div
                    className="post prose prose-slate prose-sm mt-4 line-clamp-3 max-w-none flex-grow text-slate-600"
                    dangerouslySetInnerHTML={{
                      __html: marked(post.contenu),
                    }}
                  />

                  {/* Footer de la carte */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FaHeart className="text-red-400" />
                      <span>{post.like}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-kya-green">
                      <span>{t("lire")}</span>
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- Pagination --- */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-2"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}>
          <button
            type="button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors hover:enabled:border-kya-green hover:enabled:bg-kya-green/10 disabled:opacity-50">
            <FaChevronLeft />
          </button>

          {paginationLinks?.map((p: any) =>
            p === "..." ? (
              <span
                key={p}
                className="flex h-10 w-10 items-center justify-center text-slate-500">
                ...
              </span>
            ) : (
              <button
                type="button"
                key={p}
                onClick={() => handlePageChange(p as number)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors
                  ${
                    p === page
                      ? "bg-kya-green text-kya-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-kya-green/10 hover:text-kya-green"
                  }`}>
                {p}
              </button>
            ),
          )}

          <button
            type="button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= (pagination?.pageCount || 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors hover:enabled:border-kya-green hover:enabled:bg-kya-green/10 disabled:opacity-50">
            <FaChevronRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

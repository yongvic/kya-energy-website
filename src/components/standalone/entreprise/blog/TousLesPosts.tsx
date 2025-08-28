"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { strapiUrl } from "@/data/strapi";
import "@/styles/post.css";
import { marked } from "marked";
import { useTranslations } from "next-intl";

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

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: React Component
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
    // biome-ignore lint/nursery/noFloatingPromises: Used only once
    (async () => {
      try {
        const request = await fetch(
          `${strapiUrl}/api/articles?sort=Date:desc&pagination[limit]=1`,
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

    // biome-ignore lint/nursery/noFloatingPromises: Used only once
    (async () => {
      setLoading(true);
      try {
        const pinnedPostFilter = `&filters[id][$ne]=${pinnedPostId}`;
        const request = await fetch(
          `${strapiUrl}/api/articles?sort=Date:desc&pagination[page]=${page}&pagination[pageSize]=6&populate=*${pinnedPostFilter}`,
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

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Necessary
  function generatePagination(): (string | number)[] | null {
    if (!pagination) {
      return null;
    }

    // biome-ignore lint/nursery/noShadow: Has relationships
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
          {/** biome-ignore lint/performance/useSolidForComponent: React Component */}
          {[
            ...new Array(6),
          ].map((_) => (
            <div
              className="h-96 w-full animate-pulse rounded-lg bg-gray-200"
              key={`${_}`}
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
    <section className="container mx-auto my-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/** biome-ignore lint/performance/useSolidForComponent: Required */}
        {posts.map((post) => (
          <Link
            href={`/blog/${post.documentId}`}
            key={post.id}>
            <article className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-kya-white shadow-lg">
              <div className="overflow-hidden">
                <Image
                  alt={post.titre || "Post image"}
                  className="h-72 object-cover transition-transform duration-300 hover:scale-105"
                  height={250}
                  src={`${strapiUrl}${post.photoCouverture.url}`}
                  width={400}
                />
              </div>
              <div className="flex flex-grow flex-col justify-between p-6">
                <div>
                  <p className="mb-2 font-semibold text-kya-orange text-sm">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h1 className="mb-2 line-clamp-2 font-bold text-kya-coffee text-xl">
                    {post.titre}
                  </h1>
                  <div
                    className="post prose prose-sm line-clamp-3 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: marked(post.contenu),
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <IoHeartOutline className="text-red-500" />
                    <span className="font-medium">{post.like}</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-kya-orange">
                    <span>{t("lire")}</span>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          className="rounded-lg bg-kya-green px-4 py-2 text-kya-white disabled:opacity-50"
          disabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
          type="button">
          {t("precedent")}
        </button>
        {/** biome-ignore lint/performance/useSolidForComponent: Required */}
        {paginationLinks?.map((p) =>
          p === "..." ? (
            <span
              className="px-4 py-2"
              key={p}>
              ...
            </span>
          ) : (
            <button
              className={`rounded-lg px-4 py-2 ${p === page ? "bg-kya-orange text-kya-white" : "bg-kya-green text-kya-white"}`}
              key={p}
              onClick={() => handlePageChange(p as number)}
              type="button">
              {p}
            </button>
          ),
        )}
        <button
          className="rounded-lg bg-kya-green px-4 py-2 text-kya-white disabled:opacity-50"
          disabled={page >= (pagination?.pageCount || 1)}
          onClick={() => handlePageChange(page + 1)}
          type="button">
          {t("suivant")}
        </button>
      </div>
    </section>
  );
}

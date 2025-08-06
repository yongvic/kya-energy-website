"use client";

import config from "@/lib/config";
import { marked } from "marked";
import Image from "next/image";
import { FaArrowRight, FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import "@/styles/post.css";

interface Post {
  id: string;
  documentId: string;
  Titre: string;
  Contenu: string;
  Like: number;
  Date: string;
  PhotoCouverture: {
    url: string;
  };
}

export default function Post() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pinnedPostId, setPinnedPostId] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const fetchPinnedPostId = async () => {
      try {
        const request = await fetch(
          `${config.strapiUrl}/api/articles?sort=Date:desc&pagination[limit]=1`,
          {
            headers: {
              Authorization: `Bearer ${config.strapiApiKey}`,
            },
            cache: "no-store",
          },
        );
        const responseJson = await request.json();
        if (responseJson.data && responseJson.data.length > 0) {
          setPinnedPostId(responseJson.data[0].id);
        }
      } catch {
        console.error("Failed to fetch pinned post ID");
      }
    };

    fetchPinnedPostId();
  }, []);

  useEffect(() => {
    if (pinnedPostId === null) return;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        const pinnedPostFilter = `&filters[id][$ne]=${pinnedPostId}`;
        const request = await fetch(
          `${config.strapiUrl}/api/articles?sort=Date:desc&pagination[page]=${page}&pagination[pageSize]=6&populate=*${pinnedPostFilter}`,
          {
            headers: {
              Authorization: `Bearer ${config.strapiApiKey}`,
            },
            cache: "no-store",
          },
        );

        if (!request.ok) {
          throw new Error("Failed to fetch posts");
        }

        const responseJson = await request.json();
        setPosts(responseJson.data);
      } catch {
        setError("Failed to fetch contents");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, pinnedPostId]);

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?page=${newPage}`);
  };

  if (loading) {
    return (
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-96 bg-gray-200 animate-pulse rounded-lg"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/actu/${post.documentId}`} key={post.id}>
            <article className="bg-kya-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full flex flex-col">
              <div className="overflow-hidden">
                <Image
                  src={`${config.strapiUrl}${post.PhotoCouverture.url}`}
                  alt={post.Titre || "Post image"}
                  width={400}
                  height={250}
                  className="h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm font-semibold text-kya-orange mb-2">
                    {new Date(post.Date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h1 className="font-bold text-xl line-clamp-2 mb-2 text-kya-coffee">
                    {post.Titre}
                  </h1>
                  <div
                    className="post prose prose-sm line-clamp-3 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: marked(post.Contenu) }}
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FaHeart className="text-red-500" />
                    <span className="font-medium">{post.Like}</span>
                  </div>
                  <div className="flex items-center gap-2 text-kya-orange font-bold">
                    <span>Lire</span>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="px-4 py-2 bg-kya-green text-kya-white rounded-lg disabled:opacity-50"
        >
          Précédent
        </button>
        <span className="font-bold">{page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          // A simple way to disable the next button if there are no more posts.
          // This could be improved with pagination metadata from Strapi.
          disabled={posts.length < 6}
          className="px-4 py-2 bg-kya-green text-kya-white rounded-lg disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </section>
  );
}

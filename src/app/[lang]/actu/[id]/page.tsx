import config from "@/lib/config";
import { marked } from "marked";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

async function getArticle(id: string) {
  const response = await fetch(`${config.strapiUrl}/api/articles/${id}?populate=*`, {
    headers: {
      Authorization: `Bearer ${config.strapiApiKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  return response.json();
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params;
  const article = await getArticle(id);

  if (!article.data) {
    return <div>Article not found</div>;
  }

  const { Titre, Contenu, Like, Date: publishedAt, PhotoCouverture } = article.data;
  const imageUrl = PhotoCouverture.url;

  const publicationDate = new Date(publishedAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="container mx-auto py-12">
      <article className="bg-kya-white p-8 rounded-lg shadow-lg">
        {imageUrl && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={`${config.strapiUrl}${imageUrl}`}
              alt={Titre || "Article image"}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-kya-coffee">{Titre}</h1>
          <span className="text-lg font-semibold text-kya-orange">
            {publicationDate}
          </span>
        </div>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(Contenu) }}
        />
        <div className="mt-8 flex items-center gap-2 text-gray-500">
          <FaHeart className="text-red-500" />
          <span className="font-medium">{Like}</span>
        </div>
      </article>
    </main>
  );
}

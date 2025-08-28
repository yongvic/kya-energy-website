import { marked } from "marked";
import { getTranslations } from "next-intl/server";
import { strapiUrl } from "@/data/strapi";

interface YoutubeVideo {
  titre: string;
  texteDescriptif: string;
  lienDeLaVideo: string;
}

async function getYoutubeVideo(locale: string) {
  const requete = await fetch(
    `${strapiUrl}/api/youtube-video?locale=${locale}`,
  );
  const response = await requete.json();
  // TODO: parse all contents from texte_descriptif
  const result: YoutubeVideo = {
    lienDeLaVideo: response.data.lien_de_la_video_youtube,
    texteDescriptif: response.data.texte_descriptif,
    titre: response.data.titre,
  };
  return result;
}

export default async function YoutubeVideo() {
  const t = await getTranslations("page d'acceuil.youtube");
  let lienDeLaVideo = "https://youtube.com/embed/ayX_GLi40K8";
  const youtubeVideo = await getYoutubeVideo("fr");
  const videoId = youtubeVideo.lienDeLaVideo.split("v=")[1];
  lienDeLaVideo = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="bg-gray-100 px-8 py-16">
      <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
        {/* Description */}
        <div className="space-y-4">
          <h2 className="font-bold text-3xl text-kya-coffee">{t("titre")}</h2>
          <p
            className="no-img-markdown text-gray-700"
            dangerouslySetInnerHTML={{
              __html: marked(
                youtubeVideo.texteDescriptif ?? t("texte descriptif"),
              ),
            }}
          />
        </div>
        {/* YouTube Video */}
        <div className="relative">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            className="aspect-video h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={lienDeLaVideo}
            title={t("description de la vidéo")}
            width={800}
          />
        </div>
      </div>
    </section>
  );
}

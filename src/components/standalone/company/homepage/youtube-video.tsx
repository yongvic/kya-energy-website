import { strapiUrl } from "@/lib/config";
import { getTranslations } from "next-intl/server";

interface IYoutubeVideo {
  titre: string;
  texteDescriptif: string;
  lienDeLaVideo: string;
  descriptionDeLaVideo: string;
}

async function getYoutubeVideo(locale: string) {
  const requete = await fetch(`${strapiUrl}/api/youtube?locale=${locale}`);
  const response = await requete.json();
  // NOTE: texte_descriptif is strapi new rich text blocks component based
  // TODO: parse all contents from texte_descriptif
  const result: IYoutubeVideo = {
    titre: response.data.titre,
    texteDescriptif: response.data.texte_descriptif,
    lienDeLaVideo: response.data.lien_de_la_video,
    descriptionDeLaVideo: response.data.description_de_la_video,
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
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-kya-coffee">
            {youtubeVideo.titre ?? t("titre")}
          </h2>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: youtubeVideo.titre ?? t("texte descriptif") }} />
        </div>
        {/* YouTube Video */}
        <div className="relative">
          <iframe
            className="w-full aspect-video h-full"
            loading="lazy"
            src={lienDeLaVideo}
            title={youtubeVideo.descriptionDeLaVideo ?? t("description de la vidéo")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            width={800}
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
}

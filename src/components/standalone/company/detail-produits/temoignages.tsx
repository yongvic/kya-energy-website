"use client";
import { useTranslations } from "next-intl";
import styles from "@/styles/detail-produits.module.css";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";

export default function Temoignages() {
  const t = useTranslations("detail produits.temoignages");
  const videos = [
    "KYA-SoP KYA-Energy GROUP-01",
    "KYA-SoP KYA-Energy GROUP-02",
    "KYA-SoP KYA-Energy GROUP-03",
    "KYA-SoP KYA-Energy GROUP-04",
    "KYA-SoP KYA-Energy GROUP-05",
    "KYA-SoP KYA-Energy GROUP-06",
    "KYA-SoP KYA-Energy GROUP-07",
    "KYA-SoP KYA-Energy GROUP-08",
    "KYA-SoP KYA-Energy GROUP",
  ];
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <section className={styles.detailSection}>
      <div className={styles.detailSectionTitle}>
        <h3>{t("titre")}</h3>
        <div></div>
      </div>
      <div className={styles.videoPlayerContainer}>
        <div className={styles.mainVideoWrapper}>
          <video
            key={selectedVideo}
            className={styles.mainVideo}
            src={`/products/temoignage/${selectedVideo}.mp4`}
            controls
            autoPlay
          >
            {t("erreur video")}
          </video>
        </div>
        <div className={styles.thumbnailCarousel}>
          <div className={styles.thumbnailList}>
            {videos.map((video) => (
              <div
                key={video}
                className={`${styles.thumbnailItem} ${selectedVideo === video ? styles.thumbnailItemSelected : ""}`}
                onClick={() => setSelectedVideo(video)}
              >
                <div className={styles.thumbnailOverlay}></div>
                <FaPlayCircle className={styles.thumbnailPlayIcon} />
                <Image
                  src={`/products/temoignage/${video}.png`}
                  alt={`Thumbnail for ${video}`}
                  layout="fill"
                  objectFit="cover"
                  className={styles.thumbnailImage}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/products/kya-sop.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

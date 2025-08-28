"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "@/styles/products-and-services.module.css";

interface Promo {
  image: string;
  title: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  promo: Promo | null;
}

export default function Modal({ isOpen, onClose, promo }: ModalProps) {
  const t = useTranslations("produits et services");
  if (!(isOpen && promo)) {
    return null;
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Needed
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: Needed
    // biome-ignore lint/a11y/useKeyWithClickEvents: Needed
    <div
      className={styles.modal_overlay}
      onClick={onClose}>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: Needed */}
      {/* biome-ignore lint/a11y/noNoninteractiveElementInteractions: Needed */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: Needed */}
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modal_close_button}
          onClick={onClose}
          type="button">
          &times;
        </button>
        <Image
          alt={promo.title}
          height={300}
          src={promo.image}
          style={{
            borderRadius: "8px",
            objectFit: "contain",
          }}
          width={600}
        />
        <h3 className={styles.modal_title}>{promo.title}</h3>
        <p>{t("promotion")}</p>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import styles from "@/styles/products-and-services.module.css";
import { useTranslations } from "next-intl";

type Promo = {
  image: string;
  title: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  promo: Promo | null;
};

export default function Modal({ isOpen, onClose, promo }: ModalProps) {
  const t = useTranslations("produits et services");
  if (!isOpen || !promo) {
    return null;
  }

  return (
    <div
      className={styles.modal_overlay}
      onClick={onClose}>
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modal_close_button}
          onClick={onClose}>
          &times;
        </button>
        <Image
          src={promo.image}
          alt={promo.title}
          width={600}
          height={300}
          style={{
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
        <h3 className={styles.modal_title}>{promo.title}</h3>
        <p>{t("promotion")}</p>
      </div>
    </div>
  );
}

// components/ProductCard.tsx (nouveau fichier)

import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

type ProductCardProps = {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
};

export default function ProductCard({
  href,
  imageUrl,
  title,
  description,
}: ProductCardProps) {
  return (
    // On met le Link autour de la div pour rendre toute la carte cliquable
    <Link
      className="group block"
      href={href}>
      {/* 
        Anciennement .productCard
        - 'group' est ajouté pour permettre des effets de survol sur des enfants
        - 'block' est nécessaire pour que le Link prenne toute la largeur
      */}
      <div className="overflow-hidden rounded-lg bg-kya-white shadow-md transition-transform duration-300 group-hover:-translate-y-2">
        {/* Anciennement .productCardImageContainer */}
        <div className="relative h-56 bg-white">
          <Image
            alt={title}
            className="object-scale-down p-4"
            fill
            // 'object-scale-down' est l'équivalent Tailwind de votre CSS
            // J'ajoute un padding pour que l'image ne touche pas les bords
            src={imageUrl}
          />
        </div>
        {/* Anciennement .productCardContent */}
        <div className="p-6">
          <p className="mb-2 text-xl font-bold text-kya-orange">{title}</p>
          <p className="mb-4 line-clamp-3 text-kya-coffee/80">{description}</p>
          {/* Anciennement .productCardButtonContainer & .productCardButton */}
          <div className="flex justify-end">
            <div className="rounded-full bg-kya-green p-3 text-kya-white transition-colors duration-300 group-hover:bg-kya-yellow group-hover:text-kya-coffee">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

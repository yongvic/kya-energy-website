'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type CertificationCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export function CertificationCard({
  title,
  description,
  imageUrl,
}: CertificationCardProps) {
  return (
    <div className="card">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="imageWrapper"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <div className="text-center">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import styles from '@/styles/products-and-services.module.css';

const partnerLogos = [
  'Agridigitale.avif',
  'AMADER.avif',
  'asecna.png',
  'AT2ER.avif',
  'BAD.avif',
  'bidc.avif',
  'BOAD.avif',
  'CETEF.avif',
  'fucec_togo.avif',
  'GREEN.avif',
  'maxx_solar.avif',
  'onono.avif',
  'OTR.avif',
  'PNUD.avif',
  'republique_togolaise.avif',
  'SABER.avif',
  'SAFER.avif',
  'TOGO PORT.avif',
  'TotalEnergies.avif',
  'UL.avif',
  'UMaT.avif',
];

// Duplicate the logos to create a seamless loop
const extendedLogos = [...partnerLogos, ...partnerLogos];

export default function PartnersCarousel() {
  return (
    <div className={styles.scroller} aria-label="Our partners">
      <div className={styles.scroller_inner}>
        {extendedLogos.map((logo, index) => (
          <Image
            key={index}
            src={`/products/partners/${logo}`}
            alt={`Partner logo ${index + 1}`}
            width={150}
            height={80}
            className={styles.partner_logo}
          />
        ))}
      </div>
    </div>
  );
}
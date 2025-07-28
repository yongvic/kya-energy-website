"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Props {
  t: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    galleryTitle: string;
    ctaTitle: string;
    ctaButton: string;
  };
  interventionDomains: {
    title: string;
    description: string;
    imageSrc: string;
  }[];
  sponsors: {
    name: string;
    logo: string;
    description: string;
  }[];
}

const KyaFoundationClientPage: FC<Props> = ({ t, interventionDomains, sponsors }) => {
  const images = [
    "/kya-foundation/image-1.png",
    "/kya-foundation/image-2.png",
    "/kya-foundation/image-3.png",
    "/kya-foundation/image-4.png",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-kya-white text-kya-coffee dark:bg-gray-900 dark:text-kya-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] text-center text-white flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          src="/kya-foundation/kya-foundation-video-1.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {t.subtitle}
        </motion.p>
      </motion.section>

      {/* Mission & Vision Section */}
      <div className="py-20 px-4 container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-kya-green mb-4">{t.missionTitle}</h2>
            <p className="text-lg">{t.missionText}</p>
          </div>
          <div className="w-full h-64 relative">
            <Image
              src="/kya-foundation/image-1.png"
              alt="Mission Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-full h-64 relative order-last md:order-first">
            <Image
              src="/kya-foundation/image-2.png"
              alt="Vision Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:text-right">
            <h2 className="text-4xl font-bold text-kya-orange mb-4">{t.visionTitle}</h2>
            <p className="text-lg">{t.visionText}</p>
          </div>
        </motion.div>
      </div>

      {/* Intervention Domains Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-kya-green"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Les domaines d'interventions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {interventionDomains.map((domain, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={domain.imageSrc}
                    alt={domain.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-kya-coffee dark:text-kya-white">{domain.title}</h3>
                  <p className="text-base">{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-kya-green"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.galleryTitle}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="w-full h-48 relative"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-kya-green"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nos sponsors OR
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-32 h-32 relative mb-4">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-kya-coffee dark:text-kya-white">{sponsor.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-kya-coffee dark:text-kya-white mb-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.ctaTitle}
          </motion.h2>
          <motion.button
            className="bg-kya-orange text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.ctaButton}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default KyaFoundationClientPage;
'use client';

import React from 'react';
import Image from 'next/image';
import { FaAward, FaChartLine, FaLeaf } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { HiAcademicCap } from 'react-icons/hi';
import { motion, Variants } from 'framer-motion';
import TranslationType from '@/translations/translations.definition';

type CertificationClientPageProps = {
  t: TranslationType;
};

export function CertificationClientPage({ t }: CertificationClientPageProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.main
      className="certification-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className="hero-section">
        <motion.h1 variants={itemVariants} className='hero-title' dangerouslySetInnerHTML={{ __html: t.certifications.hero.title }} />
        <motion.div variants={itemVariants} className='hero-subtitle backdrop-blur-md bg-white/20 p-10 rounded-2xl shadow-xl text-white max-w-md text-center'>
          {t.certifications.hero.subtitle}
        </motion.div>
      </section>

      <motion.section
        className="details-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="details-intro" variants={itemVariants}>
          <h3>{t.certifications.details.mainTitle}</h3>
          <p>{t.certifications.details.subtitle}</p>
        </motion.div>
        <div className="details-content">
          <motion.div className="certification-frame" variants={itemVariants}>
            <div className="certification-frame-header">
              <FaAward />
              <span>{t.certifications.details.award}</span>
            </div>
            <div className="image-container">
              <Image
                src="/certification/certif.avif"
                alt={t.certifications.details.mainTitle}
                width={500}
                height={350}
              />
            </div>
          </motion.div>
          <motion.div className="text-content" variants={itemVariants}>
            <p>{t.certifications.details.paragraph1}</p>
            <p>
              <strong>{t.certifications.details.paragraph2_strong}</strong>
            </p>
            <p>{t.certifications.details.paragraph3}</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="essentials-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h3 variants={itemVariants} className='essentials-title'>{t.certifications.essentials.title}</motion.h3>
        <motion.p variants={itemVariants} className='essentials-subtitle'>{t.certifications.essentials.subtitle}</motion.p>
        <div className="essentials-grid">
          <motion.div className="essential-item" variants={itemVariants}>
            <div><FaUserGroup /></div>
            <p>{t.certifications.essentials.items.customerSatisfaction}</p>
          </motion.div>
          <motion.div className="essential-item" variants={itemVariants}>
            <div><FaChartLine /></div>
            <p>{t.certifications.essentials.items.processImprovement}</p>
          </motion.div>
          <motion.div className="essential-item" variants={itemVariants}>
            <div><HiAcademicCap /></div>
            <p>{t.certifications.essentials.items.teamCohesion}</p>
          </motion.div>
          <motion.div className="essential-item" variants={itemVariants}>
            <div><FaLeaf /></div>
            <p>{t.certifications.essentials.items.healthyEnvironment}</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="commitment-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="commitment-content">
          <motion.div variants={itemVariants}>
            <p><strong>{t.certifications.commitment.title}</strong></p>
            <p>{t.certifications.commitment.subtitle}</p>
            <p>{t.certifications.commitment.paragraph}</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="/certification/engagement-qualite.png"
              alt={t.certifications.commitment.title}
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <p><strong>{t.certifications.commitment.thanksTitle}</strong></p>
            <p>{t.certifications.commitment.thanksParagraph1}</p>
            <p>{t.certifications.commitment.thanksParagraph2}</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="cta-section">
        <motion.p variants={itemVariants}>{t.certifications.cta.title}</motion.p>
        <motion.p variants={itemVariants}>{t.certifications.cta.subtitle}</motion.p>
      </section>
    </motion.main>
  );
}

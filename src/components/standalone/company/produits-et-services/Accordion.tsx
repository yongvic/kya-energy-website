"use client";

import styles from "@/styles/products-and-services.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Produit = {
  label: string;
  image: string;
  description: string;
};

type AccordionProps = {
  products: Produit[];
};

export default function Accordion({ products }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {products.map((product, index) => (
        <motion.div
          key={index}
          className={styles.accordion_item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={styles.accordion_header}
            onClick={() => toggleAccordion(index)}
          >
            <div className={styles.accordion_header_content}>
              <Image
                src={product.image}
                alt={product.label}
                width={120}
                height={120}
                className={styles.accordion_image}
              />
              <p className={styles.accordion_description}>{product.label}</p>
            </div>
            <div className={styles.accordion_icon}>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className={styles.accordion_content}
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", maxHeight: "500px" },
                  collapsed: { opacity: 0, height: 0, maxHeight: "0px" },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className={styles.accordion_content_inner}>
                  {/* You can add more detailed content here if needed */}
                  <p dangerouslySetInnerHTML={{ __html: product.description }}>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

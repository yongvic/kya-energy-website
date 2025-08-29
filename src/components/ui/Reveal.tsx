// components/animations/Reveal.tsx
"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // Délai optionnel pour la cascade
  className?: string; // Pour passer des classes de style
};

export default function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  }); // 'once: true' pour que l'animation ne se joue qu'une fois
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [
    isInView,
    mainControls,
  ]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        }}>
        {children}
      </motion.div>
    </div>
  );
}

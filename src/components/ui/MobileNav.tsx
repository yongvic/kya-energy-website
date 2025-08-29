// components/layout/MobileNav.tsx
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import NavMenu from "./Navmenu";

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      when: "afterChildren",
    },
  },
};

const linkVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: -20,
  },
};

export default function MobileNav({ isOpen, links }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="absolute left-0 top-0 h-screen w-full bg-white p-8 pt-24">
          <NavMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

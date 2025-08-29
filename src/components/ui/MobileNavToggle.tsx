// components/layout/MobileNavToggle.tsx
import { motion } from "framer-motion";

export default function MobileNavToggle({ isOpen, setIsOpen }: any) {
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 size-8"
      animate={isOpen ? "open" : "closed"}>
      {/* Animation des trois barres */}
      <motion.span
        variants={{
          closed: {
            rotate: 0,
            y: 0,
          },
          open: {
            rotate: 45,
            y: 5,
          },
        }}
        className="absolute h-0.5 w-6 bg-kya-coffee"
        style={{
          top: 10,
        }}
      />
      <motion.span
        variants={{
          closed: {
            opacity: 1,
          },
          open: {
            opacity: 0,
          },
        }}
        className="absolute h-0.5 w-6 bg-kya-coffee"
        style={{
          top: 15,
        }}
      />
      <motion.span
        variants={{
          closed: {
            rotate: 0,
            y: 0,
          },
          open: {
            rotate: -45,
            y: -5,
          },
        }}
        className="absolute h-0.5 w-6 bg-kya-coffee"
        style={{
          top: 20,
        }}
      />
    </motion.button>
  );
}

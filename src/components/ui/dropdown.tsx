"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { NavItem } from "@/lib/header-types";

interface DropdownProps {
  item: NavItem;
}

export default function Dropdown({ item }: DropdownProps) {
  if (!item.children) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-8">
        {/* Left Side: Links */}
        <div className="flex flex-col gap-2 w-[320px]">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
                <child.icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{child.label}</p>
                <p className="text-sm text-gray-500">{child.description}</p>
              </div>
            </Link>
          ))}
          <Link
            href={item.href}
            className="group flex items-center justify-between mt-4 bg-blue-600 text-white font-semibold p-4 rounded-lg hover:bg-blue-700 transition-colors">
            Voir tout
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Side: Image and Features */}
        {item.megaMenuContent && (
          <div className="w-[320px]">
            <div className="relative h-40 w-full rounded-lg overflow-hidden">
              <Image
                src={item.megaMenuContent.imageUrl}
                alt={item.megaMenuContent.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 font-bold text-gray-800">
              {item.megaMenuContent.title}
            </h3>
            <div className="mt-2 space-y-2">
              {item.megaMenuContent.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 text-sm text-gray-600">
                  <feature.icon className="text-blue-500" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

"use client";
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
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-max hidden lg:block">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-8">
        {/* Left Side: Links */}
        <div className="flex flex-col gap-2 w-[320px]">
          {item.children.map((child) => (
            <Link
              className="group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              href={child.href}
              key={child.label}>
              <div className="p-2 bg-blue-50 text-kya-green rounded-md">
                <child.icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-left">
                  {child.label}
                </p>
                <p className="text-sm text-gray-500 text-left">
                  {child.description}
                </p>
              </div>
            </Link>
          ))}
          <Link
            className="group flex items-center justify-between mt-4 bg-kya-green/80 text-white font-semibold p-4 rounded-lg hover:bg-kya-green transition-colors"
            href={item.href}>
            Voir tout
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Side: Image and Features */}
        {item.megaMenuContent && (
          <div className="w-[320px]">
            <div className="relative h-40 w-full rounded-lg overflow-hidden">
              <Image
                alt={item.megaMenuContent.title}
                layout="fill"
                objectFit="cover"
                src={item.megaMenuContent.imageUrl}
              />
            </div>
            <h3 className="mt-4 font-bold text-gray-800">
              {item.megaMenuContent.title}
            </h3>
            <div className="mt-2 space-y-2">
              {item.megaMenuContent.features.map((feature) => (
                <div
                  className="flex items-center gap-3 text-sm text-gray-600"
                  key={feature.label}>
                  <feature.icon className="text-kya-green" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

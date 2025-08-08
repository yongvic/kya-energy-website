"use client";

import "@/styles/fancy-button.css";
import Link from "next/link";
import { ReactNode } from "react";

export default function FancyButton({
  className, bgColor = "none", children, href
}: {
  className: string;
  bgColor?: string;
  children: ReactNode
  href?: string;
}) {
  if (href && href != null) {
    return (
      <Link href={href} style={{ '--bg-color': bgColor }} className={`${className} relative fancy-button overflow-hidden flex justify-center items-center`}>
        <span className={`relative z-2 w-max`}>{children}</span>
      </Link>
    );
  } else {
    return (
      <button style={{ '--bg-color': bgColor }} className={`${className} relative fancy-button overflow-hidden flex items-center justify-center`}>
        <span className={`relative z-2 w-max`}>{children}</span>
      </button>
    )
  }
}

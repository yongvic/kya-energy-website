"use client";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import { useState } from "react";

export type NavlinkArgs = {
  href: string;
  text: string;
  children?: React.ReactNode;
  isMobile?: boolean;
};

export function Navlink({
  href,
  text,
  children,
  isMobile = false,
}: NavlinkArgs) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <div
          className="flex items-center justify-between w-full py-3 font-semibold"
          onClick={handleToggle}>
          <Link href={href} className="flex-grow">
            {text}
          </Link>
          {children && (
            <LuChevronDown
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              size={20}
            />
          )}
        </div>
        {children && isOpen && <div className="pb-4 pl-4">{children}</div>}
      </div>
    );
  }

  return (
    <div className="group block py-3">
      {children ? (
        <>
          <Link href={href} className="flex items-center gap-2 navlink">
            {text}
            <LuChevronDown
              className="group-hover:rotate-180 transition-all duration-300"
              size={20}
            />
          </Link>
          <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-full left-1/2 -translate-x-1/2 w-2/3 h-[20rem] transition-all duration-300 bg-kya-white shadow-lg p-4 rounded-lg mt-3 text-black z-10">
            {children}
          </div>
        </>
      ) : (
        <Link href={href} className="navlink">
          <span>{text}</span>
        </Link>
      )}
    </div>
  );
}

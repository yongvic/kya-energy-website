import type { IconType } from "react-icons";

export interface NavLinkChild {
  label: string;
  description: string;
  href: string;
  icon: IconType;
}

export interface MegaMenuContent {
  imageUrl: string;
  title: string;
  features: {
    label: string;
    icon: IconType;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavLinkChild[];
  megaMenuContent?: MegaMenuContent;
}

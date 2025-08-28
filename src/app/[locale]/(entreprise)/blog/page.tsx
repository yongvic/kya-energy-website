import Hero from "@/components/standalone/entreprise/accueil/Hero";
import DernierPost from "@/components/standalone/entreprise/blog/DernierPost";
import TousLesPosts from "@/components/standalone/entreprise/blog/TousLesPosts";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export default function Blog() {
  return (
    <>
      <Hero />
      <DernierPost />
      <TousLesPosts />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog.seo");
  return {
    description: t("description"),
    title: t("titre"),
  };
}

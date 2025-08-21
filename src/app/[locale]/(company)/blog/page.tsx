import DernierPost from "@/components/standalone/company/blog/dernier-post";
import Hero from "@/components/standalone/company/blog/hero";
import TousLesPosts from "@/components/standalone/company/blog/tous-les-posts";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export default function Blog() {
  return (
    <>
      <Hero />
      <DernierPost />
      <TousLesPosts />
    </>
  );
}

export function generateMetadata(): Metadata {
  const t = useTranslations("blog.seo");
  return {
    title: t("titre"),
    description: t("description"),
  };
}

import DernierPost from "@/components/standalone/company/blog/dernier-post";
import Hero from "@/components/standalone/company/blog/hero";
import TousLesPosts from "@/components/standalone/company/blog/tous-les-posts";
import { Metadata } from "next";
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
    title: t("titre"),
    description: t("description"),
  };
}

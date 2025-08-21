import DernierPost from "@/components/standalone/company/blog/dernier-post";
import Hero from "@/components/standalone/company/blog/hero";
import TousLesPosts from "@/components/standalone/company/blog/tous-les-posts";

export default function Blog() {
  return (
    <>
      <Hero />
      <DernierPost />
      <TousLesPosts />
    </>
  );
}

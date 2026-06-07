import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogList from "@/components/blog/BlogList";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Hof-Naturverbunden",
  description: "Berichte, Einblicke und Tipps aus dem Alltag auf dem Hof-Naturverbunden.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <HeroSection
        title="Aus dem Hofblog"
        subtitle="Einblicke in unseren Hofalltag, saisonale Berichte und Gedanken über naturnahes Leben."
        size="medium"
      />

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Alle Beiträge"
          subtitle={`${posts.length} ${posts.length === 1 ? "Beitrag" : "Beiträge"}`}
        />
        <div className="mt-10">
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  );
}

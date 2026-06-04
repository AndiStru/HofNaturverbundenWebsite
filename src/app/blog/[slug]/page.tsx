import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Hof Naturverbunden`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Beitrag nicht gefunden | Hof Naturverbunden" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const date = new Date(post.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-forest-600 hover:text-forest-700 transition-colors mb-8"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Zurück zum Blog
      </Link>

      <header className="mb-8">
        <time className="text-sm text-earth-500 font-medium block mb-3">{date}</time>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-earth-900 leading-tight mb-4">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-lg text-earth-500 leading-relaxed">{post.excerpt}</p>
        )}
        {post.author && (
          <p className="text-sm text-earth-400 mt-4">Von {post.author}</p>
        )}
      </header>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-2xl mb-10 aspect-video object-cover"
        />
      )}

      <div className="prose prose-earth max-w-none prose-headings:font-serif prose-headings:text-earth-900 prose-p:text-earth-700 prose-p:leading-relaxed prose-a:text-forest-600 prose-strong:text-earth-800">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

import Link from "next/link";
import { PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  const date = new Date(post.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-earth-100 hover:border-forest-200 hover:shadow-md transition-all duration-200 flex flex-col">
      {post.coverImage && (
        <Link href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <time className="text-xs text-earth-500 font-medium mb-2 block">
          {date}
        </time>
        <h3 className="font-serif font-semibold text-lg text-earth-900 mb-2 leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-forest-700 transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        {post.excerpt && (
          <p className="text-earth-500 text-sm leading-relaxed flex-1 mb-4">
            {post.excerpt}
          </p>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors inline-flex items-center gap-1"
        >
          Weiterlesen
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

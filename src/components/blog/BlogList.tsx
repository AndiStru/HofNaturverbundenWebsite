import { PostMeta } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-earth-500 text-center py-12">
        Noch keine Beiträge vorhanden.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

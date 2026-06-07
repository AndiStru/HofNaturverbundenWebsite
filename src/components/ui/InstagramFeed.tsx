"use client";

import { useEffect, useState } from "react";

const FEED_ID = "SJy4H1bI7sfgFCJzyWEF";

interface BeholdPost {
  id: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  caption?: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://feeds.behold.so/${FEED_ID}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts((data.posts ?? data).slice(0, 9));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square bg-earth-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {posts.map((post) => {
        const imgSrc = post.mediaType === "VIDEO"
          ? (post.thumbnailUrl ?? post.mediaUrl)
          : post.mediaUrl;
        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-xl bg-earth-100"
          >
            <img
              src={imgSrc}
              alt={post.caption?.slice(0, 80) ?? "Instagram-Beitrag"}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {post.mediaType === "VIDEO" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </a>
        );
      })}
    </div>
  );
}

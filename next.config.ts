import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/HofNaturverbundenWebsite",
  assetPrefix: "/HofNaturverbundenWebsite/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

import NextImage, { ImageProps } from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type SiteImageProps = Omit<ImageProps, "src"> & { src: string };

export default function SiteImage({ src, ...props }: SiteImageProps) {
  const prefixedSrc = src.startsWith("/") ? `${BASE_PATH}${src}` : src;
  return <NextImage src={prefixedSrc} {...props} />;
}

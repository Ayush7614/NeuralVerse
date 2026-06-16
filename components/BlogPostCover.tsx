/** Sharper cover URLs for external blog posters (Medium / dev.to). */
export function coverImageSrc(url: string): string {
  if (url.includes("miro.medium.com")) {
    return url
      .replace(/resize:fit:\d+/g, "resize:fit:1400")
      .replace(/resize:fill:\d+:\d+/g, "resize:fit:1400");
  }
  if (url.includes("media2.dev.to/dynamic/image/")) {
    return url
      .replace("width=1000", "width=1400")
      .replace("height=500", "height=700");
  }
  return url;
}

export default function BlogPostCover({ src }: { src: string }) {
  return (
    <div className="relative z-10 aspect-[16/9] w-full shrink-0 overflow-hidden border-b border-white/10 bg-[#060912]">
      <img
        src={coverImageSrc(src)}
        alt=""
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

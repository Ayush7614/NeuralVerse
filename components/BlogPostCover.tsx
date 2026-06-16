/** Sharper + uncropped cover for external blog posters (Medium / dev.to). */
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
    <div className="relative z-10 border-b border-white/10 bg-[#060912]">
      <div className="flex aspect-[2/1] min-h-[200px] w-full items-center justify-center overflow-hidden p-2 sm:min-h-[240px] sm:p-3">
        <img
          src={coverImageSrc(src)}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="max-h-full max-w-full rounded-lg object-contain object-center shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

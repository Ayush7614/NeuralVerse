import Link from "next/link";
import GlitchText from "@/components/GlitchText";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.28em] text-white/40">
        signal lost
      </div>
      <h1 className="mt-4 font-display text-7xl font-bold sm:text-9xl">
        <GlitchText text="404" className="grad-text neon-text" />
      </h1>
      <p className="mt-4 max-w-md text-white/65">
        The page you&apos;re looking for has drifted out of range. Let&apos;s
        get you back to known coordinates.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:shadow-neon"
      >
        Return home
      </Link>
    </div>
  );
}

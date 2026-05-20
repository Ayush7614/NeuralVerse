"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon-magenta">
        blog error
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-white">
        Could not load blogs
      </h1>
      <p className="mt-3 text-sm text-white/60">
        {error.message || "Something went wrong while rendering the blog page."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white hover:border-neon-cyan/60 hover:bg-neon-cyan/10"
      >
        Try again
      </button>
    </div>
  );
}

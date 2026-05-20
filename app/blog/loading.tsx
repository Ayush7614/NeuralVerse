export default function BlogLoading() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-32 pb-24">
      <div className="mb-3 h-7 w-32 animate-pulse rounded-full bg-white/10" />
      <div className="h-12 w-2/3 max-w-lg animate-pulse rounded-xl bg-white/10" />
      <div className="mt-3 h-5 w-full max-w-xl animate-pulse rounded-lg bg-white/5" />
      <div className="mt-10 flex flex-wrap gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-20 animate-pulse rounded-full bg-white/10"
          />
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]"
          />
        ))}
      </div>
    </section>
  );
}

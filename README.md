# NeuralVerse

> The personal blog of **Ayush Kumar** — a cyberpunk-neon, motion-first Next.js site built for blogs that deserve to feel alive.

**Live site:** [neural-verse-peach.vercel.app](https://neural-verse-peach.vercel.app/)

Local dev: `http://localhost:3000`

---

## What's inside

| Feature | Details |
|---|---|
| **Stack** | Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion 11 |
| **Pages** | Home (hero + featured), Blog index (filter + search), Blog detail (markdown), About, Contact, 404 |
| **Animations** | Particle field with mouse repulsion, animated grid + orb gradients, glitch hero text, 3D-tilt blog cards with spotlight, magnetic buttons, scroll-driven reveals, page-transition blur/translate, custom cursor (ring + dot), reading & scroll progress bars, neon scanlines, marquee ticker |
| **Content** | 6 long-form sample posts in `lib/posts.ts` — rich GFM markdown ready to be replaced |
| **Performance** | Fully static (`next build` → SSG), ~150 KB first-load JS, `prefers-reduced-motion` respected |

---

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

---

## Project structure

```
app/
  layout.tsx          # fonts, global background, cursor, nav, footer
  page.tsx            # home (Hero + Marquee + FeaturedPosts + AboutTeaser)
  blog/
    page.tsx          # all posts (filter + search)
    [slug]/page.tsx   # single post (markdown rendered)
  about/page.tsx
  contact/page.tsx
  not-found.tsx       # animated glitch 404
  globals.css         # neon utilities, glitch keyframes, prose styles
components/
  GridBackground.tsx  ParticleField.tsx     CustomCursor.tsx
  Navbar.tsx          Footer.tsx            ScrollProgress.tsx
  Hero.tsx            GlitchText.tsx        MagneticButton.tsx
  BlogCard.tsx        BlogList.tsx          Marquee.tsx
  FeaturedPosts.tsx   AboutTeaser.tsx       SectionHeading.tsx
  ContactForm.tsx     ReadingProgress.tsx   RevealOnScroll.tsx
  PageTransition.tsx
lib/
  posts.ts            # ← edit/add your blog posts here
```

---

## Adding a blog post

Open `lib/posts.ts` and append to the `posts` array:

```ts
{
  slug: "your-url-slug",
  title: "Your post title",
  excerpt: "One or two sentences shown on cards.",
  date: "2026-05-19",
  readingTime: 6,
  tags: ["Engineering", "Notes"],
  content: `## Heading

Markdown body here. Supports **bold**, *italics*, \`code\`, code blocks,
> blockquotes, lists, tables (via GFM), images, and links.`
}
```

The new post will automatically appear on the home page, the blog index, and have its own page at `/blog/your-url-slug`. `generateStaticParams` rebuilds the route tree.

---

## Customizing your identity

| What | Where |
|---|---|
| Site title / metadata | `app/layout.tsx` |
| Brand mark + nav links | `components/Navbar.tsx` |
| Hero copy (name, tagline) | `components/Hero.tsx` |
| About page bio + timeline | `app/about/page.tsx` |
| Contact info | `components/ContactForm.tsx` |
| Social links | `components/Footer.tsx` |

---

## Customizing the look

All neon colors and motion tokens live in `tailwind.config.ts`:

```ts
neon: {
  cyan:    "#00f0ff",
  magenta: "#ff00e5",
  violet:  "#8b5cf6",
  lime:    "#a3ff12",
  amber:   "#ffb800",
}
```

Swap them for any palette and the entire site re-themes.

---

## Contact form & newsletter

Both are wired to [Formspree](https://formspree.io). Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

For production (Vercel), add the same variable in **Project Settings → Environment Variables**.

---

## Deploying

**Production:** [https://neural-verse-peach.vercel.app/](https://neural-verse-peach.vercel.app/) (hosted on Vercel)

```bash
# Vercel CLI
npx vercel --prod
```

Remember to set `NEXT_PUBLIC_FORMSPREE_FORM_ID` in Vercel so the contact form and newsletter signup work in production.

---

## Accessibility & motion

- All decorative animations respect `prefers-reduced-motion`.
- The custom cursor is automatically disabled on touch devices.
- Color contrast targets WCAG AA on body text and primary CTAs.

---

Built with care. Open the chrome devtools, hover a card, watch the spotlight follow your cursor, and tell me you don't smile. ✦

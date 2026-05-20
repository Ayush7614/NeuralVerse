import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import GridBackground from "@/components/GridBackground";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "NeuralVerse — Ayush Kumar",
  description:
    "The personal blog of Ayush Kumar — blogs on engineering, AI, open source, LLMs, agentic AI, cybersecurity, and more.",
  metadataBase: new URL("https://neuralverse.dev"),
  openGraph: {
    title: "NeuralVerse — Ayush Kumar",
    description:
      "Blogs on engineering, AI, open source, developer tools, LLMs, agentic AI, cybersecurity, and AI security. By Ayush Kumar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-ink-900 text-white">
        <GridBackground />
        <ParticleField />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-fade" />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

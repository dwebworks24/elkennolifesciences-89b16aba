import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SEO title="Home — Vite SPA" description="Welcome to the Vite + React SPA." />
      <section className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to Vite SPA
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          A pure Vite + React + TypeScript single-page application.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/about"
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90"
          >
            Learn more
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-md border font-medium hover:bg-accent"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}

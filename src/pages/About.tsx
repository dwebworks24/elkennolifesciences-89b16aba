import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About — Vite SPA" description="About this Vite SPA project." />
      <article className="prose max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-muted-foreground">
          This is a pure client-side SPA built with Vite, React 19, TypeScript,
          React Router, Tailwind CSS, React Hook Form, Zod, Axios, and Lucide
          icons.
        </p>
      </article>
    </>
  );
}

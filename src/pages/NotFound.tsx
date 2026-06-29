import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Not Found" />
      <div className="text-center py-20">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found</p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90"
        >
          Go home
        </Link>
      </div>
    </>
  );
}

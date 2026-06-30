import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Our Products" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/60"
          : "bg-background/85 backdrop-blur-sm border-b border-border/40",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Elkenno Life Sciences home"
        >
          <img
            src="./elkenno-logo.png"
            alt="Elkenno Life Sciences"
            className="h-16 md:h-20 w-auto"
            width={180}
            height={72}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.03] transition-all"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-foreground hover:bg-primary/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background animate-fade-in">
          <ul className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 rounded-md text-base font-medium",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-primary/5",
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center px-4 py-3 rounded-full bg-accent text-accent-foreground font-semibold"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

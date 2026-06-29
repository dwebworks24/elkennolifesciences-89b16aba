import { NavLink } from "react-router-dom";
import { Home, Info, Mail } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <NavLink to="/" className="font-bold text-lg">
          Vite SPA
        </NavLink>
        <ul className="flex gap-2 sm:gap-4">
          {links.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

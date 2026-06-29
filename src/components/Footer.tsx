import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import footerBg from "@/assets/footer-bg.jpg";

export default function Footer() {
  return (
    <footer className="bg-[hsl(30_30%_15%)] text-[hsl(40_30%_92%)]">
      <div className="container mx-auto px-4 pt-8 pb-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="bg-cream rounded-xl p-4 inline-block">
            <img
              src="/elkenno-logo.png"
              alt="Elkenno Life Sciences"
              className="h-20 md:h-24 w-auto"
              width={220}
              height={88}
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[hsl(40_25%_80%)]">
            Nourishing soil. Empowering farmers. Building a sustainable future
            for Indian agriculture through certified organic fertilizers.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-base mb-4 text-cream">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Our Products" },
              { to: "/media", label: "Media" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[hsl(40_25%_80%)] hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-base mb-4 text-cream">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-[hsl(40_25%_80%)]">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span># 14-20-677/45/A, New Vivekanada Nagar, Borabanda, Hyderabad-500018</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>+91 90003 18873</span>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>elkennolifesciences@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-base mb-4 text-cream">
            Follow Us
          </h3>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-[hsl(40_20%_70%)]">
          © {new Date().getFullYear()} Elkenno Life Sciences Pvt. Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

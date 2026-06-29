import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import ctaFarm from "@/assets/cta-farm.jpg";

export default function CTABanner() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative blurred background shapes */}
          <div className="absolute -top-16 -left-12 h-64 w-64 rounded-full bg-cream blur-3xl opacity-70 -z-10" />
          <div className="absolute -bottom-16 -right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-70 -z-10" />

          {/* Main card */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-card rounded-[2.5rem] shadow-[0_40px_100px_-20px_hsl(30_40%_35%_/_0.15)] border border-earth/5 overflow-hidden">
            {/* Left content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-[2px] w-8 bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-earth">
                  Sustainable Growth
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Ready to Transform Your Farm{" "}
                <span className="text-primary">Naturally?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-earth/80 leading-relaxed max-w-lg">
                Talk to our agri-experts and pick the right organic fertilizer for
                your soil, your crop, your season.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:scale-[1.03] transition-transform"
                >
                  Contact Us
                  <span className="h-6 w-6 grid place-items-center rounded-full bg-primary-foreground/20 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center px-7 py-3.5 rounded-2xl bg-cream text-cream-foreground font-semibold hover:bg-accent transition-colors"
                >
                  Our Products
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full">
              <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={ctaFarm}
                    alt="Healthy green crops in rich soil"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Floating stats badge */}
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-card/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-border/40">
                    <div className="text-primary font-display font-bold text-2xl">
                      100%
                    </div>
                    <div className="text-[10px] text-earth font-bold uppercase tracking-wider">
                      Bio-Organic
                    </div>
                  </div>
                  {/* Bottom gradient overlay for warmth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating yellow leaf icon */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 h-20 w-20 sm:h-24 sm:w-24 bg-accent rounded-full grid place-items-center shadow-lg border-4 border-card rotate-12">
                <Leaf className="h-9 w-9 sm:h-10 sm:w-10 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

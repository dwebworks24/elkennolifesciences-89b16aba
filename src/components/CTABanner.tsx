import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent via-[hsl(45_92%_58%)] to-[hsl(38_88%_55%)] p-10 sm:p-14 leaf-pattern">
          <div className="relative max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(30_40%_15%)] text-balance">
              Ready to Transform Your Farm Naturally?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[hsl(30_40%_20%)]/85 max-w-xl">
              Talk to our agri-experts and pick the right organic fertilizer for
              your soil, your crop, your season.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(30_30%_15%)] text-cream font-semibold shadow-lg hover:scale-[1.03] transition-transform"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

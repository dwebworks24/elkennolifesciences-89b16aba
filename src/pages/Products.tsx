import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products, type Product, type ProductCategory } from "@/data/products";
import heroSoil from "@/assets/hero-soil.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs: Array<"All" | ProductCategory> = [
  "All",
  "Liquid Fertilizers",
  "Granular Fertilizers",
  "Soil Conditioners",
  "Crop-Specific",
];

export default function Products() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <SEO
        title="Our Products — Elkenno Life Sciences"
        description="Explore Elkenno's range of organic liquid and granular fertilizers, soil conditioners and crop-specific blends for Indian farms."
      />

      <PageBanner
        title="Our Products"
        subtitle="A complete organic nutrition range — tailored to your crop and soil."
        image={heroSoil}
      />

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-colors border",
                  active === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/80 border-border hover:border-primary/40 hover:text-primary",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onView={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-cream/70 leaf-pattern">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            eyebrow="Need Guidance?"
            title="Not sure which product fits your farm?"
            subtitle="Our agri-experts will recommend the right blend for your crop, soil and season."
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.03] transition-transform"
          >
            Contact Our Experts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-cream/40 -mt-2">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <span className="self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-[hsl(140_45%_28%)] w-fit">
                  {selected.category}
                </span>
                <DialogTitle className="font-display text-2xl">{selected.name}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                  {selected.details}
                </DialogDescription>
              </DialogHeader>
              <div>
                <h4 className="font-display font-semibold mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {selected.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                onClick={() => setSelected(null)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold w-full sm:w-auto self-start"
              >
                Request a Quote
              </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

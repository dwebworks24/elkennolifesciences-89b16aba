import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products, type Product, type ProductCategory } from "@/data/products";
import bannerProducts from "@/assets/subpage-banner.png.asset.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs: Array<"All" | ProductCategory> = [
  "All",
  "Plant Protection",
  "Growth Promoters",
  "Liquid Fertilizers",
  "Flowering Boosters",
  "Micronutrient Fertilizers",
  "Potassium Fertilizers",
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
        image={bannerProducts.url}
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-6">
          {selected && (
            <>
              <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-xl bg-cream/40 flex items-center justify-center -mt-1">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-contain p-3 sm:p-4"
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
              <div className="mt-2 pt-3 border-t border-border/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border/80 text-foreground text-sm font-semibold hover:bg-muted transition-colors w-full sm:w-auto"
                >
                  Close
                </button>
                <a
                  href={(() => {
                    const origin =
                      typeof window !== "undefined" &&
                      window.location.hostname !== "localhost" &&
                      window.location.hostname !== "127.0.0.1"
                        ? window.location.origin
                        : "https://elkennolifesciences.com";

                    const publicImage =
                      selected.id === "protect-vb"
                        ? "protect-vb.png"
                        : selected.id === "kenno-score"
                        ? "kennoscore.png"
                        : `${selected.id}.png`;

                    const imageUrl = `${origin}/${publicImage}`;

                    const message = [
                      `Hello, I would like to request a quote for *${selected.name}* from Elkenno Life Sciences.`,
                      ``,
                      `*Category:* ${selected.category}`,
                      `*Product Image:* ${imageUrl}`,
                      ``,
                      `Please share pricing, package sizes, and availability. Thank you!`,
                    ].join("\n");

                    return `https://wa.me/918143163127?text=${encodeURIComponent(message)}`;
                  })()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-sm transition-all hover:scale-[1.02] w-full sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Request a Quote
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  onView,
}: {
  product: Product;
  onView?: (p: Product) => void;
}) {
  const content = (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all border border-border/60 hover:border-primary/30 h-full flex flex-col">
      <div className="p-5 pb-0">
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/15 text-earth">
          {product.tag}
        </span>
        <h3 className="mt-3 font-display text-xl font-bold text-foreground leading-snug">
          {product.name}
        </h3>
      </div>
      <div className="relative mt-4 mx-5 aspect-square overflow-hidden rounded-xl bg-cream/60">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-contain p-3 group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="p-5 pt-4 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {product.short}
        </p>
        <button
          type="button"
          onClick={() => onView?.(product)}
          className="mt-4 inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-[1.02] hover:shadow-md transition-all"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );

  return onView ? content : <Link to="/products">{content}</Link>;
}

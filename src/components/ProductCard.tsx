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
      <div className="aspect-[4/3] overflow-hidden bg-cream/40">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-[hsl(140_45%_28%)]">
          {product.tag}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-foreground leading-snug">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {product.short}
        </p>
        <button
          type="button"
          onClick={() => onView?.(product)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );

  return onView ? content : <Link to="/products">{content}</Link>;
}

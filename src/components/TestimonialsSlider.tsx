import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Patil",
    role: "Cotton farmer, Maharashtra",
    quote:
      "Our cotton yield rose noticeably after switching to Elkenno granular blend. The soil even feels softer now.",
  },
  {
    name: "Sunita Devi",
    role: "Paddy farmer, Haryana",
    quote:
      "The liquid foliar spray is so easy to use. Healthier leaves, better grains — and no chemical residue.",
  },
  {
    name: "Mahesh Reddy",
    role: "Sugarcane farmer, Telangana",
    quote:
      "Their agri-experts walked us through which product to use at which stage. Truly a partner, not a vendor.",
  },
  {
    name: "Lakhan Singh",
    role: "Wheat farmer, Punjab",
    quote:
      "After two seasons, our input costs dropped and grain quality improved. The organic switch is paying off.",
  },
  {
    name: "Kavita Sharma",
    role: "Vegetable grower, Karnataka",
    quote:
      "Leaf colour and fruit setting are visibly better. Buyers now prefer our chemical-free produce.",
  },
];

export default function TestimonialsSlider() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );
  const [selected, setSelected] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setSelected(embla.selectedScrollSnap());
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden px-1">
        <div className="flex -ml-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
            >
              <figure className="bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-card)] flex flex-col h-full">
                <Quote className="h-7 w-7 text-accent" />
                <blockquote className="mt-3 text-base text-foreground/90 leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border/60">
                  <div className="font-display font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => embla?.scrollPrev()}
        disabled={!canScrollPrev && !embla}
        aria-label="Previous testimonial"
        className="hidden sm:grid absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background/90 backdrop-blur text-foreground border border-border/60 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => embla?.scrollNext()}
        disabled={!canScrollNext && !embla}
        aria-label="Next testimonial"
        className="hidden sm:grid absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background/90 backdrop-blur text-foreground border border-border/60 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-primary"
                : "w-2 bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

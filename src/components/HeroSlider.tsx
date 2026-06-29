import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroFieldSunrise from "@/assets/hero-field-sunrise.jpg";
import heroMain from "@/assets/hero-1-main.png.asset.json";
import heroSoil from "@/assets/hero-soil.jpg";
import heroSprouts from "@/assets/hero-sprouts.png.asset.json";
import heroLabPlants from "@/assets/hero-lab-plants.png.asset.json";
import heroFarmerField from "@/assets/hero-farmer-field.jpg";

const slides = [
  {
    image: heroFieldSunrise,
    eyebrow: "Sustainable Agriculture",
    title: "Nourishing Soil. Empowering Farmers.",
    subtitle:
      "Premium organic fertilizers crafted for Indian farms — boosting soil health, crop yield, and a greener tomorrow.",
    cta: { label: "Explore Products", to: "/products" },
  },
  {
    image: heroMain.url,
    noOverlay: true,
    title: "Elkenno product lineup",
  },
  {
    image: heroFarmerField,
    eyebrow: "Farmer First",
    title: "Sustainable Organic Fertilizers for Every Crop",
    subtitle:
      "Sustainable organic fertilizers that help Indian farmers grow healthier, more abundant harvests.",
    cta: { label: "Explore Products", to: "/products" },
  },
  {
    image: heroSoil,
    eyebrow: "Earth First",
    title: "Science-Backed. Earth-Friendly. Farmer-Approved.",
    subtitle:
      "Advanced organic formulations that build long-term soil health.",
    cta: { label: "Get a Quote", to: "/contact" },
  },
  {
    image: heroSprouts.url,
    eyebrow: "From Seed to Harvest",
    title: "Helping Every Seed Reach Its Full Potential",
    subtitle:
      "Organic nutrition that nurtures crops at every stage of growth.",
    cta: { label: "Explore Products", to: "/products" },
  },
  {
    image: heroLabPlants.url,
    eyebrow: "Agri-Science",
    title: "Research-Driven Organic Innovation",
    subtitle:
      "Lab-tested bio-formulations engineered for Indian soils and crops.",
    cta: { label: "Learn More", to: "/about" },
  },
];

export default function HeroSlider() {
  const autoplay = useRef(Autoplay({ delay: 5500, stopOnInteraction: false }));
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[78vh] min-h-[520px] max-h-[760px] w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1920}
                  height={1024}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {!s.noOverlay && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30_30%_8%)]/85 via-[hsl(30_30%_8%)]/35 to-transparent" />
                )}
                {!s.noOverlay && (
                  <div className="absolute inset-0 flex items-end sm:items-center">
                    <div className="container mx-auto px-4 pb-16 sm:pb-0 md:pl-8 lg:pl-14">
                      <div className="max-w-2xl text-[hsl(40_30%_96%)]">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                          {s.eyebrow}
                        </p>
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                          {s.title}
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-[hsl(40_25%_88%)] max-w-xl">
                          {s.subtitle}
                        </p>
                        {s.cta && (
                          <div className="mt-7">
                            <Link
                              to={s.cta.to}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg hover:scale-[1.03] transition-transform"
                            >
                              {s.cta.label}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => embla?.scrollPrev()}
        aria-label="Previous slide"
        className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-background transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => embla?.scrollNext()}
        aria-label="Next slide"
        className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-background transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-accent"
                : "w-2 bg-[hsl(40_30%_96%)]/60 hover:bg-[hsl(40_30%_96%)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

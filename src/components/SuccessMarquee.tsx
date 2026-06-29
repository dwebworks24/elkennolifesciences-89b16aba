import SectionHeading from "@/components/SectionHeading";
import successBg from "@/assets/success-bg.jpg";
import cotton from "@/assets/success/cotton.jpg";
import paddy from "@/assets/success/2_1.png";
import mango from "@/assets/success/5.png";
import chili from "@/assets/success/a-1.png";
import rose from "@/assets/success/rose.jpg";
import tomatoes from "@/assets/success/3.png";

const items = [
  { src: tomatoes, label: "Tomato" },
  { src: paddy, label: "Paddy" },
  { src: mango, label: "Mango" },
  { src: chili, label: "Chili" },
  { src: cotton, label: "Cotton" },
  { src: rose, label: "Rose" },
];

export default function SuccessMarquee() {
  const loop = [...items, ...items];
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={successBg}
          alt="Indian farmland background"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={768}
        />
        <div className="absolute inset-0 bg-cream/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <SectionHeading
          eyebrow="Real Fields. Real Results."
          title="Our Success in Action"
          subtitle="Healthier crops, richer soils, happier farmers — across India."
        />
      </div>
      <div className="relative z-10 mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-cream/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-cream/80 to-transparent z-10" />
        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((it, i) => (
            <figure
              key={i}
              className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border/60 group"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                <figcaption className="text-white font-display font-semibold text-lg">
                  {it.label}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

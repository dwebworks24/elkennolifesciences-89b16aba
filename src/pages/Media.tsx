import { useState } from "react";
import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import bannerMedia from "@/assets/banner-media.jpg";
import heroField from "@/assets/hero-field.jpg";
import heroFarmer from "@/assets/hero-farmer.jpg";
import heroSoil from "@/assets/hero-soil.jpg";
import aboutLab from "@/assets/about-lab.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, ArrowRight, Play } from "lucide-react";

const news = [
  {
    date: "May 12, 2026",
    title: "Elkenno expands distribution to 5 new states",
    excerpt:
      "Our organic fertilizer range is now reaching farmers across Odisha, Assam, Kerala, Punjab and Bihar.",
  },
  {
    date: "March 04, 2026",
    title: "Partnership with state agri-universities",
    excerpt:
      "A new research collaboration to develop crop-specific bio-formulations for Indian conditions.",
  },
  {
    date: "January 18, 2026",
    title: "ISO 9001 quality recertification",
    excerpt:
      "Elkenno's manufacturing facility earns ISO 9001 quality systems recertification for 2026.",
  },
];

const gallery = [heroField, heroFarmer, heroSoil, aboutLab, heroField, heroFarmer];

const articles = [
  { title: "5 signs your soil needs organic intervention", read: "4 min read" },
  { title: "Liquid vs. granular: which fertilizer when?", read: "6 min read" },
  { title: "Reading a soil test report like an agronomist", read: "8 min read" },
];

export default function Media() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="Media & Updates — Elkenno Life Sciences"
        description="News, press updates, photo gallery and sustainable-farming articles from Elkenno Life Sciences."
      />

      <PageBanner
        title="Media & Updates"
        subtitle="News, stories and field moments from the Elkenno community."
        image={bannerMedia}
      />

      {/* News */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="News & Press" title="What's happening at Elkenno" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <article
                key={n.title}
                className="bg-card rounded-2xl p-6 border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {n.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {n.excerpt}
                </p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-cream/60 leaf-pattern">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Gallery" title="From farms and our facility" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Watch" title="Inside our process" />
          <div className="mt-10 max-w-4xl mx-auto aspect-video rounded-2xl bg-[hsl(30_30%_15%)] grid place-items-center relative overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={aboutLab} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <button className="relative h-16 w-16 grid place-items-center rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform">
              <Play className="h-7 w-7 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="From the Blog" title="Sustainable farming tips" />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article
                key={a.title}
                className="bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                  {a.read}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {a.title}
                </h3>
                <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
          {lightbox && (
            <img src={lightbox} alt="" className="w-full h-auto rounded-xl" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

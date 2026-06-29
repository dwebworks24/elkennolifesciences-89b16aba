import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQs from "@/components/FAQs";
import bannerAbout from "@/assets/banner-about.jpg";
import aboutLab from "@/assets/about-lab.jpg";
import missionVisionBg from "@/assets/mission-vision-bg.jpg";
import { Target, Eye, Sprout, FlaskConical, ShieldCheck, Package, Truck, Leaf } from "lucide-react";
import certIso14001 from "@/assets/certs/iso-14001.png";
import certWhoGmp from "@/assets/certs/who-gmp.png";
import certIso from "@/assets/certs/iso-certified.png";
import certOrganic from "@/assets/certs/organic.png";

const certifications = [
  { src: certIso14001, alt: "ISO 14001:2015" },
  { src: certWhoGmp, alt: "WHO GMP" },
  { src: certIso, alt: "ISO 14001:2015 Certified Company" },
  { src: certOrganic, alt: "100% Organic" },
];

const process = [
  { Icon: Sprout, title: "Sourcing", body: "Organic raw materials from trusted Indian suppliers." },
  { Icon: FlaskConical, title: "Manufacturing", body: "Advanced, low-impact production processes." },
  { Icon: ShieldCheck, title: "Quality Testing", body: "Every batch lab-tested for purity and nutrient profile." },
  { Icon: Package, title: "Packaging", body: "Recyclable packaging that preserves potency." },
  { Icon: Truck, title: "Distribution", body: "A nationwide network reaching farms in 18+ states." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About — Elkenno Life Sciences"
        description="Elkenno Life Sciences manufactures organic fertilizers tailored to India's crops and soils, supporting farmers and protecting the planet."
      />

      <PageBanner
        title="About Elkenno Life Sciences"
        subtitle="A science-led organic fertilizer manufacturer rooted in sustainable Indian agriculture."
        image={bannerAbout}
      />

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading eyebrow="Our Story" title="Sustainable agriculture, one farm at a time" />
          <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              We are passionate about promoting sustainable agriculture through the
              manufacturing of organic fertilizers. Our company is dedicated to
              providing farmers with high-quality, environmentally friendly
              alternatives to traditional fertilizers.
            </p>
            <p>
              Using advanced technologies and sustainable practices, we produce a
              diverse range of organic fertilizers tailored to the specific needs of
              different crops and soil types. From liquid formulations for foliar
              application to granular products for soil amendment, our extensive
              product line ensures that farmers have access to the nutrients their
              crops need to thrive.
            </p>
            <p>
              We are committed to reducing the environmental impact of agriculture
              while supporting the long-term health of our planet. By choosing our
              organic fertilizers, farmers can improve soil fertility, enhance crop
              yield and quality, and contribute to a more sustainable future for
              agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cream/70 leaf-pattern">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            {
              Icon: Target,
              title: "Our Mission",
              body: "To make sustainable, organic nutrition accessible to every Indian farmer — building healthier soils and healthier harvests, season after season.",
            },
            {
              Icon: Eye,
              title: "Our Vision",
              body: "A regenerative Indian agriculture where farms thrive without compromising the land, water and biodiversity that sustain them.",
            },
          ].map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-8 border border-border/60 shadow-[var(--shadow-card)]"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-accent/20 text-[hsl(35_85%_30%)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Process"
            title="From raw material to farm gate"
            subtitle="A transparent five-step process that defines every Elkenno product."
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {process.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <s.Icon className="h-6 w-6" />
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                  Step {i + 1}
                </div>
                <h4 className="mt-1 font-display font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organic */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={aboutLab}
            alt="Elkenno research"
            loading="lazy"
            className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
          />
          <div>
            <SectionHeading eyebrow="Why Organic Matters" title="The long view on soil and yield" align="left" />
            <ul className="mt-6 space-y-4">
              {[
                {
                  Icon: Leaf,
                  title: "Living soil, lasting fertility",
                  body: "Organic inputs feed the microbes that build long-term soil structure.",
                },
                {
                  Icon: Sprout,
                  title: "Better yield, better produce",
                  body: "Healthier soil grows healthier crops with higher nutritional value.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Safer for families and ecosystems",
                  body: "Zero synthetic residues — safer for farmers, consumers and water tables.",
                },
              ].map(({ Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Quality & Trust" title="Certified, tested, trusted" />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {certifications.map((c) => (
              <img
                key={c.alt}
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className="h-20 sm:h-24 w-auto object-contain transition-transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <FAQs />

      <CTABanner />
    </>
  );
}

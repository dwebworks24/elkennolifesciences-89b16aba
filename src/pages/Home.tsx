import SEO from "@/components/SEO";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQs from "@/components/FAQs";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import SuccessMarquee from "@/components/SuccessMarquee";
import { products } from "@/data/products";
import { Leaf, Sprout, TrendingUp, Recycle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/about.png.asset.json";
import statsBg from "@/assets/stats-bg.jpg";

const valueProps = [
  { Icon: Leaf, title: "100% Organic", body: "Plant- and mineral-sourced inputs only. No synthetic chemicals — ever." },
  { Icon: Sprout, title: "Soil Health First", body: "Formulations that feed soil microbes, not just the crop." },
  { Icon: TrendingUp, title: "Higher Crop Yield", body: "Field-proven blends that improve yield and produce quality." },
  { Icon: Recycle, title: "Eco-Friendly Manufacturing", body: "Low-impact processes that respect water, soil and air." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Elkenno Life Sciences — Organic Fertilizers for Sustainable Farming"
        description="Premium organic fertilizers — liquid foliar sprays and granular soil amendments — for Indian farmers committed to sustainable agriculture."
      />

      <HeroSlider />

      {/* Value props */}
      <section className="bg-cream/70 leaf-pattern py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Elkenno"
            title="Built for soil. Trusted by farmers."
            subtitle="Four commitments that guide every product we manufacture."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-7 sm:p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-shadow border border-border/60"
              >
                <div className="h-14 w-14 sm:h-12 sm:w-12 grid place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-5 sm:mt-4 font-display font-semibold text-xl sm:text-lg">{title}</h3>
                <p className="mt-2 text-base sm:text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-accent/30 -z-10" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary/20 -z-10" />
            <img
              src={aboutImg.url}
              alt="Elkenno product lineup"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Organic fertilizers, made with science and respect for the land."
              align="left"
            />
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Elkenno Life Sciences is dedicated to promoting sustainable
              agriculture through high-quality, environmentally friendly
              fertilizers — liquid formulations for foliar application and
              granular products for soil amendment — tailored to the needs of
              different crops and soils.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              We help farmers improve soil fertility, lift crop yield and
              quality, and contribute to a more sustainable future for Indian
              agriculture.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-[1.03] transition-transform"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Range"
            title="Featured Organic Products"
            subtitle="From liquid foliar sprays to granular soil amendments — tuned to every crop."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <img
          src={statsBg}
          alt="Lush green Indian farmland"
          loading="lazy"
          width={1920}
          height={768}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-dark/90 via-leaf-dark/80 to-earth/80" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter end={12000} suffix="+" label="Farmers Served" light />
            <StatCounter end={18} suffix="+" label="States Reached" light />
            <StatCounter end={100} suffix="%" label="Organic Certified" light />
            <StatCounter end={10} suffix="+" label="Years of Practice" light />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Farmer Voices"
            title="Trusted by farmers across India"
          />
          <div className="mt-12">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <FAQs />

      <CTABanner />

      <SuccessMarquee />
    </>
  );
}

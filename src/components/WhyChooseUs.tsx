import SectionHeading from "@/components/SectionHeading";
import { Sprout, Leaf } from "lucide-react";
import whyImg from "@/assets/whychoose.png.asset.json";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl bg-primary/15 -z-10" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-accent/25 -z-10" />
          <img
            src={whyImg.url}
            alt="Why Choose Elkenno product lineup and benefits"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto object-cover aspect-[4/5] sm:aspect-[5/4]"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="We provide high-quality organic fertilizers"
            align="left"
          />
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            At Elkenno Life Sciences, we are committed to revolutionizing
            agriculture through sustainable and eco-friendly practices. Our
            scientifically formulated organic fertilizers are designed to
            enhance soil fertility, boost crop productivity, and reduce
            environmental impact — empowering farmers to grow healthier, more
            abundant yields naturally.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              {
                Icon: Sprout,
                title: "Crop-Specific Solutions",
                body: "A wide range of organic fertilizers tailored to different crops and soil types, ensuring optimal nutrient delivery and consistent results for every farmer.",
              },
              {
                Icon: Leaf,
                title: "Sustainable Agriculture",
                body: "Products developed using advanced technologies and natural inputs, helping farmers reduce chemical dependency and contribute to a healthier planet.",
              },
            ].map(({ Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-lg">{title}</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

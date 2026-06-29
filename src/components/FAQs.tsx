import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqBg from "@/assets/faq-bg.jpg";

const faqs = [
  {
    q: "What is Elkenno Life Sciences?",
    a: "Elkenno Life Sciences is an India-based organic fertilizer manufacturer dedicated to promoting sustainable agriculture. We produce eco-friendly liquid and granular fertilizers that improve soil health, crop yield and farm profitability.",
  },
  {
    q: "What products does Elkenno Life Sciences offer?",
    a: "We offer a complete range of organic inputs — granular NPK blends, liquid bio-fertilizers and foliar sprays, vermicompost soil conditioners, seaweed-based growth promoters and crop-specific formulations for paddy, cotton, sugarcane and vegetables.",
  },
  {
    q: "How can I use your bio-fertilizers?",
    a: "Liquid bio-fertilizers are typically diluted with water and applied as a foliar spray or through drip irrigation. Granular products are mixed into the soil at sowing or top-dressed at key growth stages. Each product label carries crop-specific dosage; our agri-experts can help you build a custom schedule.",
  },
  {
    q: "Where can I buy Elkenno Life Sciences products?",
    a: "Our products are available through authorized dealers across 18+ states in India. Reach out via the Contact page and we'll connect you with your nearest distributor — or onboard you as one.",
  },
];

export default function FAQs() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${faqBg})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/92 to-cream/95"
      />

      <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Get to Know Us"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Elkenno Life Sciences and our organic fertilizers."
            align="left"
          />
        </div>

        <div className="bg-card/90 backdrop-blur rounded-2xl border border-border/60 shadow-[var(--shadow-card)] p-2 sm:p-4">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b last:border-b-0 px-4"
              >
                <AccordionTrigger className="font-display text-base sm:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

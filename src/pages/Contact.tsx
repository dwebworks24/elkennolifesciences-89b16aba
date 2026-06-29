import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import SEO from "@/components/SEO";
import PageBanner from "@/components/PageBanner";
import bannerContact from "@/assets/banner-contact.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1000),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [showDistributor, setShowDistributor] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact submission:", data);
    toast.success("Thanks! We'll get back to you within 24 hours.");
    reset();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <>
      <SEO
        title="Contact — Elkenno Life Sciences"
        description="Get in touch with Elkenno Life Sciences for product enquiries, distributor partnerships and agri-expert guidance."
      />

      <PageBanner
        title="Contact Us"
        subtitle="Talk to our agri-experts about products, partnerships or guidance for your farm."
        image={bannerContact}
      />

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-6 sm:p-8 border border-border/60 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">
              We'll respond within one business day.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1.5">Name</label>
                <input {...register("name")} className={inputClass} placeholder="Your full name" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1.5">Email</label>
                <input {...register("email")} type="email" className={inputClass} placeholder="you@example.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1.5">Phone</label>
                <input {...register("phone")} className={inputClass} placeholder="+91 ..." />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-semibold mb-1.5">Subject</label>
                <input {...register("subject")} className={inputClass} placeholder="Product enquiry" />
                {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold mb-1.5">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us about your crop, soil, or partnership interest."
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-sm hover:scale-[1.02] transition-transform disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Distributor */}
            <div className="mt-8 border-t border-border/60 pt-6">
              <button
                onClick={() => setShowDistributor((v) => !v)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-display font-semibold text-base">
                  Become a distributor / dealer
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    showDistributor ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showDistributor && (
                <div className="mt-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                  Interested in distributing Elkenno products in your region? Use
                  the form above and choose <strong>"Distributor enquiry"</strong>{" "}
                  as the subject. Share your state, business background and the
                  crops you serve — our partnerships team will reach out.
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-cream rounded-2xl p-6 border border-accent/30">
              <h3 className="font-display text-xl font-bold">Get in touch</h3>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  { Icon: MapPin, label: "# 14-20-677/45/A, New Vivekanada Nagar, Borabanda, Hyderabad-500018" },
                  { Icon: Phone, label: "+91 90003 18873" },
                  { Icon: Mail, label: "elkennolifesciences@gmail.com" },
                  { Icon: Clock, label: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
                ].map(({ Icon, label }) => (
                  <li key={label} className="flex gap-3">
                    <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="pt-1.5 text-foreground/85">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-accent/30">
                <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(35_85%_30%)] mb-3">
                  Follow us
                </div>
                <div className="flex gap-2">
                  {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="h-9 w-9 grid place-items-center rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-[var(--shadow-card)]">
              <iframe
                title="Elkenno location"
                src="https://www.google.com/maps?q=Hyderabad,India&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

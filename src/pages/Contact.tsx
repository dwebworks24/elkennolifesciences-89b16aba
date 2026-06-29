import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import SEO from "@/components/SEO";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log("Submitting", data);
    await new Promise((r) => setTimeout(r, 500));
    alert("Message sent!");
    reset();
  };

  return (
    <>
      <SEO title="Contact — Vite SPA" description="Get in touch with us." />
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full px-3 py-2 rounded-md border bg-background"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 rounded-md border bg-background"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={5}
              {...register("message")}
              className="w-full px-3 py-2 rounded-md border bg-background"
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </>
  );
}

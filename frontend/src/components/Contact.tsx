import { useForm } from "react-hook-form";

type ContactFormData = { name: string; email: string; message: string };

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to send message");
    reset();
  };

  return (
    <section id="contact" className="px-6 max-w-2xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-4">Contact</h2>
      <p className="text-muted mb-8">Have a project in mind? Let's talk.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name", { required: true })} placeholder="Name" className="w-full bg-surface text-fg placeholder-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
        <input {...register("email", { required: true })} type="email" placeholder="Email" className="w-full bg-surface text-fg placeholder-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
        <textarea {...register("message", { required: true })} placeholder="Message" rows={5} className="w-full bg-surface text-fg placeholder-muted rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
        <button type="submit" disabled={isSubmitting} className="bg-accent text-bg font-medium px-6 py-3 rounded-full hover:opacity-90 disabled:opacity-50">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {isSubmitSuccessful && <p className="text-accent text-sm">Thanks — I'll get back to you soon.</p>}
      </form>
    </section>
  );
}

"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setValues({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-gold/5 border-t border-ink/10 py-16 md:py-24" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="font-(family-name:--font-sora) text-sm font-bold tracking-[0.25em] text-gold">
            CONTACT ATHASH
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-extrabold text-ink">
            Ready to start your next project?
          </h2>
          <p className="mt-4 max-w-md text-lg text-slate">
            Share a few details and we&apos;ll reach out with a free project estimate and next steps.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-4">
            <label className="flex flex-col gap-2 text-sm text-ink">
              Name
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-ink">
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-ink">
              Phone
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="+27 79 508 5651"
                className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-ink">
              Message
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                rows={5}
                required
                className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-light"
            >
              Send your enquiry
            </button>
          </div>

          {submitted ? (
            <p className="mt-5 rounded-2xl bg-ink/5 px-4 py-3 text-sm text-ink">
              Thanks! Your message has been received. We&apos;ll be in touch soon.
            </p>
          ) : (
            <p className="mt-5 text-sm text-slate">
              We typically respond within one business day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}



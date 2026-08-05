import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Athash handled our company registration and website in the same week. One point of contact made everything simple.",
    name: "Client Name",
    role: "Founder, Business Name",
  },
  {
    quote:
      "Our school needed a website and proper ID cards fast. Athash delivered both, on time and on brand.",
    name: "Client Name",
    role: "Administrator, School Name",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-(family-name:--font-sora) text-3xl font-extrabold">
            What Clients Say
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-gold text-2xl leading-none">&ldquo;</p>
                <p className="mt-2 text-white/80 leading-relaxed">
                  {t.quote}
                </p>
                <p className="mt-6 font-(family-name:--font-sora) font-bold">
                  {t.name}
                </p>
                <p className="text-sm text-white/50">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


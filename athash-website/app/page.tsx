import {
  Target,
  PenTool,
  Code2,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  Award,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

const pathSteps = ["Idea", "Brand", "Build", "Institution"];

const valueProps = [
  { icon: Target, title: "Strategic", desc: "We plan with purpose." },
  { icon: PenTool, title: "Creative", desc: "We design with impact." },
  { icon: Code2, title: "Technology", desc: "We build with precision." },
  { icon: TrendingUp, title: "Growth", desc: "We grow with you." },
];

const solutionGroups = [
  {
    title: "Business Solutions",
    items: [
      "Company Registration (CIPC)",
      "Brand Strategy",
      "Visual Identity & Logo Design",
      "Website Development",
      "Business Email",
      "Digital Marketing",
    ],
  },
  {
    title: "Institutional Solutions",
    items: [
      "School Branding",
      "School Websites",
      "Report Cards",
      "Certificates",
      "Letterheads",
      "Student & Staff ID Cards",
      "Prospectuses",
      "Admission Forms",
    ],
  },
  {
    title: "Digital Solutions",
    items: [
      "QR Verification Systems",
      "Document Automation",
      "AI Integration",
      "Internal Business Systems",
      "Client Portals",
      "Custom Digital Solutions",
    ],
  },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "We are committed to secure, dependable solutions.",
  },
  {
    icon: UserCheck,
    title: "Client Focused",
    desc: "Your success is our mission.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    desc: "We deliver excellence in everything we do.",
  },
  {
    icon: Globe2,
    title: "South African",
    desc: "Local. Reliable. Committed to you.",
  },
];

const chipColors = ["bg-ink", "gold-gradient", "bg-ink", "gold-gradient"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-paper text-ink">
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-14 md:py-28">
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-gold/20 to-amber/10 blur-3xl" />
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-[family-name:var(--font-sora)] text-sm font-bold tracking-[0.25em] text-gold">
                BRAND. BUILD. TRANSFORM.
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-sora)] text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
                From idea to{" "}
                <span className="gold-gradient-text">institution.</span>
              </h1>
              <p className="mt-6 max-w-md border-l-2 border-gold pl-4 text-lg text-slate">
                We help businesses and institutions launch, modernise and
                grow through branding, technology and digital systems.
              </p>

              <a
                href="https://wa.me/27795085651"
                aria-label="Message Athash on WhatsApp"
                className="gold-gradient mt-8 inline-block rounded-full px-7 py-3.5 font-semibold text-ink shadow-lg shadow-gold/25 transition hover:scale-[1.03] hover:shadow-xl hover:shadow-gold/30"
              >
                Message Us on WhatsApp
              </a>

              {/* Signature: Idea -> Institution path */}
              <div className="mt-14 flex flex-wrap items-center gap-y-4">
                {pathSteps.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-ink" />
                      <p className="mt-2 text-xs font-semibold text-slate">
                        {step}
                      </p>
                    </div>
                    {i < pathSteps.length - 1 && (
                      <div className="mx-1.5 h-px w-6 bg-gold sm:mx-2 sm:w-8 md:w-12" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="rounded-2xl border border-gold/30 bg-ink p-6 text-white shadow-xl sm:p-8">
              <div className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-wide text-ink">
                ★ STARTUP PACKAGE
              </div>
              <p className="text-sm tracking-widest text-white/60">
                ALL-IN-ONE SOLUTION
              </p>
              <p className="mt-2 font-[family-name:var(--font-sora)] text-5xl font-extrabold text-gold">
                R4,999
              </p>
              <p className="text-sm text-white/50">ONCE-OFF</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Company Registration (CIPC)",
                  "Logo & Brand Identity",
                  "Professional Website",
                  "Business Email Setup",
                  "Dedicated Support",
                  "One Dedicated Point of Contact",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-gold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-gold">
                ⏱ Company registered in 3–5 working days*
              </p>
            </div>
          </div>
        </section>
                
        {/* Value props */}
        <section className="border-y border-ink/10 bg-ink py-16 text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <v.icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                <p className="mt-3 font-[family-name:var(--font-sora)] font-bold">
                  {v.title}
                </p>
                <p className="mt-1 text-sm text-white/60">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <About />

        {/* Solutions */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl font-extrabold">
              Our Solutions
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {solutionGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 120}>
                <div className="h-full rounded-3xl border border-ink/10 bg-mist p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
                  <h3 className="font-[family-name:var(--font-sora)] font-bold text-gold">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Testimonials />

        {/* Why Choose Athash */}
        <section className="border-t border-ink/10 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl font-extrabold">
                Why Choose Athash?
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
              {whyChoose.map((w, i) => (
                <Reveal key={w.title} delay={i * 100}>
                  <div className="group flex flex-col items-center rounded-2xl p-4 text-center transition hover:shadow-lg">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${chipColors[i % 4]} shadow-md transition group-hover:scale-110`}
                    >
                      <w.icon
                        className={`h-6 w-6 ${chipColors[i % 4] === "bg-ink" ? "text-gold" : "text-ink"}`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <p className="mt-4 font-[family-name:var(--font-sora)] font-bold">
                      {w.title}
                    </p>
                    <p className="mt-1 text-sm text-slate">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gold py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-ink md:flex-row">
            <p className="text-center font-[family-name:var(--font-sora)] text-xl font-extrabold sm:text-2xl">
              Message Us Today on WhatsApp
            </p>
            <a
              href="https://wa.me/27795085651"
              aria-label="Message Athash on WhatsApp"
              className="rounded-full bg-ink px-7 py-3.5 font-bold text-white transition hover:bg-ink-light"
            >
              079 508 5651
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
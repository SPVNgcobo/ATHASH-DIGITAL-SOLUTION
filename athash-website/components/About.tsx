import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="border-t border-ink/10 bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-[family-name:var(--font-sora)] text-sm font-bold tracking-[0.25em] text-gold">
            ABOUT ATHASH
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-extrabold">
            Built for South African businesses and institutions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Athash Digital Solutions exists to close the gap between a good
            idea and a properly built institution. We combine company
            registration, brand identity, and technology under one roof —
            so founders and school administrators don&apos;t have to juggle
            five different providers to get off the ground. From CIPC
            registration to a live website to internal digital systems,
            we&apos;re the single point of contact from day one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

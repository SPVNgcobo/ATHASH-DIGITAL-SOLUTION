import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Image
          src="/logo.png"
          alt="Athash Digital Solutions"
          width={280}
          height={80}
          className="h-14 w-auto sm:h-16"
          priority
        />

        <a
          href="https://wa.me/27795085651"
          aria-label="Message Athash on WhatsApp"
          className="gold-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-ink shadow-md shadow-gold/20 transition hover:scale-[1.03]"
        >
          Message Us
        </a>
      </div>
    </header>
  );
}
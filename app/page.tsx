import Image from "next/image";
import Link from "next/link";
import InstagramReel from "@/components/InstagramReel";

export default function Home() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="bg-cream text-dark">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Marketing Portfolio
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
              Ava<br />
              D&apos;Alessandro
            </h1>
            <p className="text-dark/60 text-xl md:text-2xl font-light mb-10 leading-relaxed">
              Where Strategy Meets Creativity
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-pink text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-dark transition-colors duration-200"
            >
              See My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          {/* Headshot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-pink/30">
              <Image
                src="/ava.jpg"
                alt="Ava D'Alessandro"
                fill
                className="object-cover object-[50%_20%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="bg-pink py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-white/70 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Hi! I&apos;m Ava.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              I&apos;m a Marketing student and the President of PSAMA at Penn State with a passion for building
              brands and creative campaigns that connect people through
              powerful storytelling.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              I&apos;d love for you to learn more about the work I&apos;ve done —
              partnerships I&apos;ve closed, campaigns that have driven results,
              and events I&apos;ve helped bring to life.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/PSAMA_AVA.webp"
              alt="Ava D'Alessandro"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── My Passion ── */}
      <section className="bg-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">
            My Passion
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8">
            Penn State AMA
          </h2>
          <p className="text-dark/70 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 md:mb-16">
            As President of the Penn State American Marketing Association (PSAMA), I lead one of
            Penn State&apos;s most dynamic student organizations. Driving creative campaigns, fostering
            industry connections, and building a thriving community of passionate marketers. From
            large-scale events to social content that resonates, PSAMA is where my love for
            marketing comes to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <InstagramReel
              permalink="https://www.instagram.com/reel/DWEqgtYDmJk/"
              title="ICC 2026"
            />
            <InstagramReel
              permalink="https://www.instagram.com/reel/DVJcRIhjiWC/"
              title="THON 2026"
            />
            <InstagramReel
              permalink="https://www.instagram.com/reel/DBZeGhZxV-2/"
              title="Pumpkin Painting"
            />
          </div>
        </div>
      </section>

      {/* ── Video Reel CTA ── */}
      <section className="bg-dark py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">
            I&apos;d love to show you what I&apos;ve done!
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-8 md:mb-12">
            Watch My Work
          </h2>
          <div className="relative w-full h-56 md:h-[32rem] rounded-2xl overflow-hidden">
            <Image
              src="/White_Shirt_Photo.webp"
              alt="Campaign photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-3 border-2 border-pink text-pink font-semibold px-8 py-4 rounded-full hover:bg-pink hover:text-white transition-all duration-200"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

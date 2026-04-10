"use client";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

export default function WorkHighlights() {
  return (
    <div className="pt-16">
      {/* ── Page Header ── */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            Work Highlights
          </motion.h1>
          <motion.div
            className="mt-6 w-24 h-1 bg-pink rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* ── Case Study 1 — Social Media Creations ── */}
      <section className="bg-cream py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <ImageCarousel
                images={[
                  { src: "/carousel-a/photo-1.webp", alt: "Social media creation 1" },
                  { src: "/carousel-a/photo-2.webp", alt: "Social media creation 2" },
                  { src: "/carousel-a/photo-3.webp", alt: "Social media creation 3" },
                ]}
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  Case Study 01
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Social Media Creations
                </h2>
                <p className="text-dark/70 leading-relaxed mb-8">
                Led the creation of paid and organic social media content for Ostrich Beach Chairs, managing everything from concept development and photoshoots to Canva design and final delivery, with a focus on brand consistency, engagement, and conversions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-pink-light rounded-xl p-5">
                    <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                      Action
                    </p>
                    <p className="text-dark font-medium leading-relaxed text-sm">
                    Led end-to-end content creation for Ostrich Beach Chairs, including concept ideation, photoshoot coordination, Canva design, and final execution for paid and organic social campaigns.
                    </p>
                  </div>
                  <div className="bg-dark rounded-xl p-5">
                    <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                      Result
                    </p>
                    <p className="text-white font-medium leading-relaxed text-sm">
                    Delivered results-driven content that improved audience engagement, enhanced brand consistency, and boosted customer acquisition
                      <span className="text-pink font-bold"> leading to 29% increase in sales. </span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Case Study 2 ── */}
      <section className="bg-pink-light py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="md:order-2">
              <ImageCarousel
                images={[
                  { src: "/carousel-b/photo-1.webp", alt: "Photoshoot direction behind the scenes 1" },
                  { src: "/carousel-b/photo-2.webp", alt: "Photoshoot direction behind the scenes 2" },
                  { src: "/carousel-b/photo-3.webp", alt: "Photoshoot direction behind the scenes 3" },
                ]}
              />
            </FadeIn>
            <FadeIn delay={0.15} className="md:order-1">
              <div>
                <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  Case Study 02
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Photoshoot Direction &amp; Content Production
                </h2>
                <p className="text-dark/70 leading-relaxed mb-8">
                Planned and executed brand photoshoots for Ostrich Beach Chairs, managing logistics from concept to final content. Developed detailed shot lists and prop lists to align visuals with campaign goals and brand voice. Coordinated photographers, organized models, and selected chair styles to ensure cohesive, engaging content. Directed drone shoots and captured additional content using my own camera to expand asset variety. Created video shot lists to support short-form, paid, and organic campaigns across platforms.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                      Action
                    </p>
                    <p className="text-dark font-medium leading-relaxed text-sm">
                    Led the vision for photoshoots and refreshed content for Ostrich paid media and organic socials
                    </p>
                  </div>
                  <div className="bg-dark rounded-xl p-5">
                    <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                      Result
                    </p>
                    <p className="text-white font-medium leading-relaxed text-sm">
                    <span className="text-pink font-bold">1,000+ refreshed assets</span> for the Ostrich content bank
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Case Study 3 — Brand Partnerships ── */}
      <section className="bg-dark text-white py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn>
              <ImageCarousel
                images={[
                  { src: "/instagram-profile.jpg", alt: "Ostrich brand social media content" },
                ]}
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                  Case Study 03
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Talent &amp; Brand Management
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Secured creator and brand partnerships, managed gifting campaigns,
                  and handled invoicing logistics end-to-end.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-5">
                    <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                      Action
                    </p>
                    <p className="text-white/80 font-medium leading-relaxed text-sm">
                    Led end-to-end hiring for two marketing roles, including sourcing, interviewing, and onboarding.
                    </p>
                  </div>
                  <div className="bg-pink/10 border border-pink/30 rounded-xl p-5">
                    <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                      Result
                    </p>
                    <p className="text-white/80 font-medium leading-relaxed text-sm">
                    Expanded execution capacity, enabling <span className="text-pink font-bold">faster campaign rollout and increased marketing output.</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Connect Row ── */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              I love meeting new people passionate about marketing, let&apos;s connect!
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* LinkedIn */}
            <FadeIn>
              <Link
                href="https://www.linkedin.com/in/avadalessandro13/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-pink/20 rounded-2xl h-28 flex flex-col items-center justify-center gap-3 hover:border-pink hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-8 h-8 text-dark/40 group-hover:text-pink transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-dark/40 group-hover:text-pink text-xs font-semibold tracking-wide transition-colors duration-200">LinkedIn</span>
              </Link>
            </FadeIn>

            {/* Mail */}
            <FadeIn delay={0.1}>
              <Link
                href="/contact"
                className="bg-white border-2 border-pink/20 rounded-2xl h-28 flex flex-col items-center justify-center gap-3 hover:border-pink hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-8 h-8 text-dark/40 group-hover:text-pink transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-dark/40 group-hover:text-pink text-xs font-semibold tracking-wide transition-colors duration-200">Email Me</span>
              </Link>
            </FadeIn>

            {/* TikTok */}
            <FadeIn delay={0.2}>
              <Link
                href="https://www.tiktok.com/@ostrichchairs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-pink/20 rounded-2xl h-28 flex flex-col items-center justify-center gap-3 hover:border-pink hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-8 h-8 text-dark/40 group-hover:text-pink transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
                <span className="text-dark/40 group-hover:text-pink text-xs font-semibold tracking-wide transition-colors duration-200">TikTok</span>
              </Link>
            </FadeIn>

            {/* Instagram */}
            <FadeIn delay={0.3}>
              <Link
                href="https://www.instagram.com/avamdalessandro/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-pink/20 rounded-2xl h-28 flex flex-col items-center justify-center gap-3 hover:border-pink hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-8 h-8 text-dark/40 group-hover:text-pink transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                <span className="text-dark/40 group-hover:text-pink text-xs font-semibold tracking-wide transition-colors duration-200">Instagram</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

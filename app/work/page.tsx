import VideoPlaceholder from "@/components/VideoPlaceholder";
import ImageCarousel from "@/components/ImageCarousel";

export default function WorkHighlights() {
  return (
    <div className="pt-16">
      {/* ── Page Header ── */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold">
            Work Highlights
          </h1>
          <div className="mt-6 w-24 h-1 bg-pink rounded-full" />
        </div>
      </section>

      {/* ── Case Study 1 — Social Media Creations ── */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ImageCarousel
              images={[]}
              placeholder="Social media posts coming soon"
            />
            <div>
              <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Case Study 01
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Social Media Creations
              </h2>
              <p className="text-dark/70 leading-relaxed mb-8">
                Designed and produced original content for paid and organic social media
                campaigns — from concept to final post. Every asset was crafted to align
                with brand voice, drive engagement, and convert audiences into customers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-pink-light rounded-xl p-5">
                  <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                    Action
                  </p>
                  <p className="text-dark font-medium leading-relaxed text-sm">
                    Developed market research &amp; executed paid social media advertising campaigns
                  </p>
                </div>
                <div className="bg-dark rounded-xl p-5">
                  <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                    Result
                  </p>
                  <p className="text-white font-medium leading-relaxed text-sm">
                    KAMUII&apos;s apartment launch{" "}
                    <span className="text-pink font-bold">increased sales by 15%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study 2 ── */}
      <section className="bg-pink-light py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <VideoPlaceholder label="Event Ops Highlight — Coming Soon" />
            </div>
            <div className="md:order-1">
              <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                Case Study 02
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Event Operations
              </h2>
              <p className="text-dark/70 leading-relaxed mb-8">
                Promoted initiatives to student and local audiences through strategic
                outreach, driving engagement and awareness at The Palmer Museum of Art.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                    Action
                  </p>
                  <p className="text-dark font-medium leading-relaxed text-sm">
                    Strategic outreach to student &amp; local audiences for museum events
                  </p>
                </div>
                <div className="bg-dark rounded-xl p-5">
                  <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                    Result
                  </p>
                  <p className="text-white font-medium leading-relaxed text-sm">
                    Drove measurable{" "}
                    <span className="text-pink font-bold">engagement &amp; awareness</span>{" "}
                    at The Palmer Museum of Art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study 3 — Brand Partnerships ── */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ImageCarousel
              images={[
                { src: "/instagram-profile.jpg", alt: "Ostrich brand social media content" },
              ]}
            />
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
                    Managed 40+ gifting campaigns &amp; handled full invoicing logistics
                  </p>
                </div>
                <div className="bg-pink/10 border border-pink/30 rounded-xl p-5">
                  <p className="text-pink text-xs font-bold tracking-widest uppercase mb-2">
                    Result
                  </p>
                  <p className="text-white/80 font-medium leading-relaxed text-sm">
                    Closed brand deal with{" "}
                    <span className="text-pink font-bold">Princess Polly for $2,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Row ── */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-center">
            Brands I&apos;ve Worked With
          </p>
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Collaborations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Princess Polly", "KAMUII", "Palmer Museum", "Brand TBD"].map((brand) => (
              <div
                key={brand}
                className="bg-white border-2 border-pink/20 rounded-2xl h-28 flex items-center justify-center hover:border-pink transition-colors duration-200"
              >
                <span className="text-dark/40 text-sm font-semibold tracking-wide">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Resume() {
  const experience = [
    {
      role: "Talent Management & Brand Partnerships",
      company: "Freelance / Independent",
      period: "2023 – Present",
      bullets: [
        "Secured creator and brand partnerships across multiple campaigns",
        "Managed 40+ gifting campaigns end-to-end",
        "Closed a brand deal with Princess Polly for $2,000",
        "Handled invoicing logistics and client communications",
      ],
      tools: ["Canva", "Beacons", "Mercury", "Mailchimp", "Gmass"],
    },
    {
      role: "Event Operations",
      company: "The Palmer Museum of Art",
      period: "2023",
      bullets: [
        "Promoted initiatives to student and local audiences through strategic outreach",
        "Drove engagement and awareness for museum events",
        "Coordinated logistics for public programming",
      ],
      tools: ["Google Workspace", "Social Media"],
    },
    {
      role: "Marketing Campaign Manager",
      company: "KAMUII Apartments",
      period: "2022 – 2023",
      bullets: [
        "Developed comprehensive market research for apartment launch",
        "Executed paid social media advertising campaigns",
        "Increased sales by 15% through targeted campaign strategy",
      ],
      tools: ["Meta Ads", "Market Research", "Analytics"],
    },
  ];

  const skills = [
    "Canva", "Mailchimp", "Google Analytics", "Meta Ads Manager",
    "Beacons", "Mercury", "Gmass", "TikTok", "Instagram",
    "Content Strategy", "Brand Partnerships", "Event Planning",
    "Bilingual (English/Spanish)", "Market Research", "Copywriting",
  ];

  return (
    <div className="pt-16">
      {/* ── Header ── */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Credentials
            </p>
            <h1 className="font-serif text-6xl md:text-7xl font-bold">
              Resume
            </h1>
            <div className="mt-6 w-24 h-1 bg-pink rounded-full" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-pink text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-dark transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="bg-pink-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-8">Education</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold">
                The Pennsylvania State University
              </h3>
              <p className="text-dark/60 mt-1">
                Bachelor of Arts — Communications &amp; Marketing
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-pink-light text-pink font-semibold text-sm px-4 py-2 rounded-full">
                2021 – Present
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Timeline ── */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-12">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-pink/20 hidden md:block ml-5" />
            <div className="flex flex-col gap-12">
              {experience.map((job, i) => (
                <div key={i} className="md:pl-16 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink text-white flex items-center justify-center text-sm font-bold hidden md:flex">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold">{job.role}</h3>
                        <p className="text-pink font-semibold text-sm">{job.company}</p>
                      </div>
                      <span className="text-dark/40 text-sm font-medium whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-dark/70 text-sm leading-relaxed">
                          <span className="text-pink mt-1 flex-shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-pink-light text-pink text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-12">
            Skills &amp; Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-white/10 hover:bg-pink/20 border border-white/10 hover:border-pink/50 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

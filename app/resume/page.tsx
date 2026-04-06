export default function Resume() {
  const workExperience = [
    {
      company: "Deltess Corp (Ostrich Beach Chairs)",
      location: "Hopewell, NJ",
      roles: [
        {
          title: "Social Media & Content Manager",
          period: "May 2024 – Present",
          bullets: [
            "Engage the social media channels for Deltess Corp's flagship brand, Ostrich Chairs, including Instagram and TikTok",
            "Department of one, concepting marketing campaigns, executing timelines, and acting independently from the CEO's office",
            "Generated a consistent posting schedule three times a week on social channels, contributing to a 113% increase in sessions and 137% increase in sales through quarter two",
            "Collaborate with marketing consultants and platform specialists (Meta, Google Ads, Klaviyo) to ensure cohesive cross-channel campaign alignment",
            "Researched photographers, sourced props, organized a shot list, and helped direct a 6-hour photoshoot",
            "Direct my own photoshoots, created shot lists, resulting in over 300 photos upgrading the content bank for socials",
            "Produce content for Instagram, Facebook, Twitter, and TikTok using Canva, Edits, and Hootsuite",
            "Research and implement AI integration tools to maximize campaign effectiveness and efficiency",
          ],
        },
        {
          title: "Social Media Specialist Intern",
          period: "",
          bullets: [
            "Facilitated promotional giveaways on Instagram, leading to a 500% increase in followers",
            "Organized monthly content calendars, including image, caption plans, and social media channels, to ensure consistency — leading to increased follower engagement and overall brand image",
          ],
        },
      ],
      tools: ["Canva", "Hootsuite", "Edits", "Klaviyo", "Meta Business Suite", "Google Ads"],
    },
    {
      company: "Hopewell Valley Swim And Tennis",
      location: "",
      roles: [
        {
          title: "Head Swim Coach",
          period: "May 2024 – July 2024",
          bullets: [
            "Managed over 100 swimmers and 4 assistant coaches during practices and meets",
            "Planned lineups, wrote practices, and sent out emails communicating upcoming events",
          ],
        },
      ],
      tools: ["Team Management", "Communication", "Planning"],
    },
  ];

  const leadershipExperience = [
    {
      company: "Penn State American Marketing Association",
      location: "University Park, PA",
      roles: [
        {
          title: "President (Incoming)",
          period: "April 2026",
          bullets: [
            "Lead the organization, providing a bridge between the working world and the classroom through hands-on professional development workshops, projects working with real companies, competitions, and speakers",
            "Manage the organization's five Vice Presidents, including Communications, Professional Development, Community & Social Impact, Finance, and AMA, all consisting of three–four team members",
            "Oversee professional development events with corporate sponsors, including elevator pitch and resume workshops",
            "Manage 5 divisions where students gain hands-on experience working on projects with real-world companies focused on different niches of marketing, including Sales, Digital Marketing, Retail, Analytics, and Sports",
            "Organize conferences, speakers, and competitions to strengthen member involvement and professional development skills",
          ],
        },
        {
          title: "Associate Director, Digital Marketing & Advertising Division",
          period: "September 2024 – Present",
          bullets: [
            "Facilitate and manage over 40 members of the division by interviewing project managers, creating deadlines, and overseeing project completion, engagement, and deliverables",
            "Cultivate an engaging environment for members to succeed and learn by organizing projects with real-world brands to help them gain valuable digital marketing skills, including social media and content creation",
          ],
        },
        {
          title: "Project Manager",
          period: "",
          bullets: [
            "Plan out calendars and tasks weeks in advance to keep members organized and on top of content creation",
            "Create content and ideas for TikToks, emphasizing creative, technological, and communicative skills for members to enhance",
          ],
        },
      ],
      tools: ["Project Management", "Leadership", "Organization", "TikTok", "Content Creation"],
    },
  ];

  const skills = [
    "Canva", "Hootsuite", "Edits", "Klaviyo", "Meta Business Suite",
    "Google Ads", "Project Management", "Organization", "Leadership", "Teamwork",
    "Content Creation", "Social Media Strategy", "Brand Partnerships",
  ];

  const awards = [
    "Placed 2nd — Digital Marketing Competition, AMA International Collegiate Conference",
    "Dean's List — 5/5 Semesters, Penn State Smeal College of Business",
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
            href="/ava-dalessandro-resume.pdf"
            download
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
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold">
                The Pennsylvania State University
              </h3>
              <p className="text-pink font-semibold text-sm mt-1">Smeal College of Business</p>
              <p className="text-dark/60 mt-1">Bachelor of Science in Marketing</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
              <span className="inline-block bg-pink-light text-pink font-semibold text-sm px-4 py-2 rounded-full">
                Class of 2027 · University Park, PA
              </span>
              <span className="inline-block bg-dark text-white font-semibold text-sm px-4 py-2 rounded-full">
                GPA: 3.8 / 4.00
              </span>
              <span className="inline-block border border-pink/30 text-dark/60 font-medium text-sm px-4 py-2 rounded-full">
                Dean&apos;s List — 5/5 Semesters
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work Experience ── */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-12">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-pink/20 hidden md:block ml-5" />
            <div className="flex flex-col gap-12">
              {workExperience.map((job, i) => (
                <div key={i} className="md:pl-16 relative">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink text-white items-center justify-center text-sm font-bold hidden md:flex">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                      <div>
                        <h3 className="font-serif text-xl font-bold">{job.company}</h3>
                        {job.location && (
                          <p className="text-dark/40 text-sm mt-0.5">{job.location}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-8">
                      {job.roles.map((role, j) => (
                        <div key={j} className={j > 0 ? "pt-6 border-t border-pink/10" : ""}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-3">
                            <p className="text-pink font-semibold text-sm">{role.title}</p>
                            {role.period && (
                              <span className="text-dark/40 text-sm font-medium whitespace-nowrap">{role.period}</span>
                            )}
                          </div>
                          <ul className="space-y-2">
                            {role.bullets.map((b, k) => (
                              <li key={k} className="flex gap-3 text-dark/70 text-sm leading-relaxed">
                                <span className="text-pink mt-1 flex-shrink-0">▸</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-pink/10">
                      {job.tools.map((tool) => (
                        <span key={tool} className="bg-pink-light text-pink text-xs font-semibold px-3 py-1 rounded-full">
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

      {/* ── Leadership Experience ── */}
      <section className="bg-pink-light py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold mb-12">Leadership Experience</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-pink/30 hidden md:block ml-5" />
            <div className="flex flex-col gap-12">
              {leadershipExperience.map((job, i) => (
                <div key={i} className="md:pl-16 relative">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink text-white items-center justify-center text-sm font-bold hidden md:flex">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                      <div>
                        <h3 className="font-serif text-xl font-bold">{job.company}</h3>
                        {job.location && (
                          <p className="text-dark/40 text-sm mt-0.5">{job.location}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-8">
                      {job.roles.map((role, j) => (
                        <div key={j} className={j > 0 ? "pt-6 border-t border-pink/10" : ""}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-3">
                            <p className="text-pink font-semibold text-sm">{role.title}</p>
                            {role.period && (
                              <span className="text-dark/40 text-sm font-medium whitespace-nowrap">{role.period}</span>
                            )}
                          </div>
                          <ul className="space-y-2">
                            {role.bullets.map((b, k) => (
                              <li key={k} className="flex gap-3 text-dark/70 text-sm leading-relaxed">
                                <span className="text-pink mt-1 flex-shrink-0">▸</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-pink/10">
                      {job.tools.map((tool) => (
                        <span key={tool} className="bg-pink-light text-pink text-xs font-semibold px-3 py-1 rounded-full">
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

      {/* ── Skills & Awards ── */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Skills &amp; Tools</h2>
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
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Awards</h2>
              <div className="flex flex-col gap-4">
                {awards.map((award, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-pink text-lg flex-shrink-0 mt-0.5">✦</span>
                    <p className="text-white/70 leading-relaxed">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

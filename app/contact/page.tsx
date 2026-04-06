"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-16">
      {/* ── Header ── */}
      <section className="bg-dark text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-pink text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-bold">
            Contact Me
          </h1>
          <div className="mt-6 w-24 h-1 bg-pink rounded-full" />
        </div>
      </section>

      {/* ── Contact Body ── */}
      <section className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-dark/70 text-lg leading-relaxed mb-10">
              Whether you have a project in mind, want to collaborate, or just
              want to say hi — I&apos;d love to hear from you.
            </p>

            <div className="space-y-6">

              <a
                href="https://www.instagram.com/avamdalessandro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center group-hover:bg-pink transition-colors duration-200">
                  <svg className="w-5 h-5 text-pink group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-dark/40 uppercase tracking-widest font-semibold">Instagram</p>
                  <p className="font-medium text-dark group-hover:text-pink transition-colors">
                    @avadalessandro
                  </p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@ostrichchairs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center group-hover:bg-pink transition-colors duration-200">
                  <svg className="w-5 h-5 text-pink group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-dark/40 uppercase tracking-widest font-semibold">TikTok</p>
                  <p className="font-medium text-dark group-hover:text-pink transition-colors">
                    @ostrichchairs
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
                <div className="w-16 h-16 rounded-full bg-pink-light flex items-center justify-center">
                  <svg className="w-8 h-8 text-pink" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold">Message Sent!</h3>
                <p className="text-dark/60">Thanks for reaching out — I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Send a Message</h3>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dark/50 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-pink transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dark/50 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-pink transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-dark/50 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-pink transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-pink text-white font-semibold py-4 rounded-full hover:bg-pink-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

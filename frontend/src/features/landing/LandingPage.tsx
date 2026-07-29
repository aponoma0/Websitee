/*
This file assembles the landing page for the site.
Edit it when the section order, copy, or page-level layout changes.
Copy this file when you need another single-page marketing layout.
*/

import React from "react";
import Link from "next/link";
import { FeatureCard, HeroMockup, QuoteCard, SectionHeading, ShowcaseMockup, StatCard } from "./landing-components";

const featureCards = [
  {
    title: "Strong hero section",
    text: "The first screen gives one clear promise, one main button, and one supporting line.",
    accent: "bg-[#f7b267]",
  },
  {
    title: "Easy to scan",
    text: "Short blocks, large type, and calm spacing help the page read well on a phone.",
    accent: "bg-[#8ecae6]",
  },
  {
    title: "Reusable building blocks",
    text: "Cards and headings are split into small pieces so the design can grow later.",
    accent: "bg-[#9b8cff]",
  },
];

const proofStats = [
  { value: "48h", label: "typical first draft" },
  { value: "12", label: "clean layout blocks" },
  { value: "100%", label: "mobile friendly" },
];

const quotes = [
  {
    quote: "The page feels polished without becoming hard to read.",
    name: "Maya Johnson",
    role: "Product designer",
  },
  {
    quote: "It keeps the structure simple, which makes every section easier to follow.",
    name: "Ethan Lee",
    role: "Frontend developer",
  },
];

export function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-[#f6f1e8] text-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#f7b267]/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#8ecae6]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-white/45 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/80 bg-white/75 px-4 py-3 backdrop-blur">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              AW
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-slate-950">Award</span>
              <span className="block text-xs text-slate-500">Winning landing page</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#proof">
              Proof
            </a>
            <a className="transition hover:text-slate-950" href="#features">
              Features
            </a>
            <a className="transition hover:text-slate-950" href="#contact">
              Contact
            </a>
          </nav>

          <a
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="#contact"
          >
            Start now
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-[#e7caa4] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8c6b43]">
              Award winning landing page
            </p>
            <h1 className="mt-6 max-w-[12ch] font-serif text-5xl font-semibold leading-[0.92] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              A landing page that feels calm, clear, and premium.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Built for mobile first screens, fast reading, and strong calls to action. Every section is simple to scan and
              easy to reuse.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#f7b267] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(247,178,103,0.35)] transition hover:-translate-y-0.5"
                href="#contact"
              >
                Start a project
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
                href="#features"
              >
                See the layout
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofStats.map((item) => (
                <StatCard key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>

          <HeroMockup />
        </section>

        <section id="proof" className="border-y border-slate-900/5 py-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard value="No clutter" label="One message per screen." />
            <StatCard value="Fast" label="Simple sections keep the build lean." />
            <StatCard value="Responsive" label="The layout stacks neatly on small screens." />
          </div>
        </section>

        <section id="features" className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Layout"
            title="Everything has a clear job."
            description="The page is split into small, reusable parts so each section is easy to understand, edit, and swap later."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} accent={card.accent} title={card.title} text={card.text} />
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-2 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Showcase"
              title="A visual block that still stays simple."
              description="Placeholder imagery is framed like a real product shot so the page feels designed, even without custom art."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <StatCard value="2x" label="clearer visual hierarchy" />
              <StatCard value="5" label="seconds to spot the CTA" />
            </div>
          </div>

          <ShowcaseMockup />
        </section>

        <section className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Trust"
            title="The page sounds calm and confident."
            description="Short testimonials and useful numbers keep the focus on what matters without adding extra noise."
            align="center"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {quotes.map((quote) => (
              <QuoteCard key={quote.name} quote={quote.quote} name={quote.name} role={quote.role} />
            ))}
          </div>
        </section>

        <section id="contact" className="pb-6">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#0f172a_0%,#24324d_55%,#8c6b43_100%)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(15,23,42,0.22)] sm:px-10 sm:py-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/65">Final call to action</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to turn the design into a clean live site?
              </h2>
              <p className="mt-4 text-base leading-7 text-white/75">
                This landing page keeps the structure easy to edit so a student can understand it and build on it later.
              </p>
              <a
                className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#f7b267]"
                href="mailto:hello@example.com"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

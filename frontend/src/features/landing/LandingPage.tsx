/*
This file assembles the award-style landing page.
Edit it when the section order, copy, or page-level layout changes.
Copy this file when you need another single-page marketing layout.
*/

import React from "react";
import Link from "next/link";
import { FeatureCard, Metric, SectionHeading, ShowcasePanel, TestimonialCard, WorkTile } from "./landing-components";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const metrics = [
  { value: "97%", label: "visitor clarity" },
  { value: "3.8x", label: "stronger first impression" },
  { value: "24h", label: "static export ready" },
];

const partners = ["Aster", "Northline", "Velvet", "Kin Studio", "Orbit"];

const features = [
  {
    kicker: "01",
    title: "Magnetic first screen",
    text: "A bold headline, confident image, and direct action give the page a strong opening without extra clutter.",
  },
  {
    kicker: "02",
    title: "Reusable sections",
    text: "Each block is a small component, so changing the design later stays simple and friendly.",
  },
  {
    kicker: "03",
    title: "Mobile-first rhythm",
    text: "The layout stacks cleanly on phones while keeping the editorial feel on wide screens.",
  },
];

const workTiles = [
  { title: "Brand Story", label: "Clear offer" },
  { title: "Launch Kit", label: "Fast path" },
  { title: "Proof System", label: "Trust blocks" },
];

const testimonials = [
  {
    quote: "It has the polished feeling of an agency site, but the structure is still easy for a student to understand.",
    name: "Maya Johnson",
    role: "Product designer",
  },
  {
    quote: "The visual hierarchy is much sharper now. The call to action is obvious on desktop and mobile.",
    name: "Ethan Lee",
    role: "Frontend developer",
  },
];

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#101010]">
      <section className="relative overflow-hidden bg-[#101010] text-white">
        <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" src={`${basePath}/award-hero.svg`} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.92)_0%,rgba(16,16,16,0.62)_46%,rgba(16,16,16,0.18)_100%)]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between border-b border-white/20 pb-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-white/35 bg-white text-sm font-black text-[#101010]">AW</span>
              <span className="text-sm font-semibold uppercase">Award Studio</span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-white/78 md:flex">
              <a className="transition hover:text-white" href="#work">
                Work
              </a>
              <a className="transition hover:text-white" href="#features">
                Method
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>

            <a className="border border-white/35 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101010]" href="#contact">
              Start
            </a>
          </header>

          <div className="grid flex-1 content-end gap-10 pb-10 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#f1c84b]">Figma inspired landing page</p>
              <h1 className="mt-5 max-w-[11ch] text-6xl font-black leading-[0.92] sm:text-7xl lg:text-8xl">Award-winning landing page</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                A responsive Next.js site with bold editorial spacing, strong contrast, reusable sections, and a clean static export for GitHub Pages.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center bg-[#f1c84b] px-6 text-sm font-black uppercase text-[#101010] transition hover:bg-white"
                  href="#contact"
                >
                  Build the page
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center border border-white/35 px-6 text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#101010]"
                  href="#work"
                >
                  View sections
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:self-end" data-testid="hero-metrics">
              {metrics.map((item) => (
                <Metric key={item.label} label={item.label} value={item.value} variant="dark" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Trusted by" className="border-y border-[#101010]/10 bg-[#f4f0e8]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:px-8 md:grid-cols-[0.6fr_1.4fr] lg:px-10">
          <p className="text-sm font-black uppercase text-[#d3342f]">Trusted layout system</p>
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase text-[#101010]/58 sm:grid-cols-5">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Selected structure"
            title="The page now feels like a designed campaign, not a starter template."
            description="Large visual moments, strong section changes, and direct copy recreate the award-style landing page direction while keeping the code small."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {workTiles.map((item) => (
              <WorkTile key={item.title} label={item.label} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#101010] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Method"
            title="Bold enough to feel premium. Simple enough to maintain."
            description="The design uses high contrast, a real hero visual, compact cards, and clean responsive grids."
            inverse
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} kicker={feature.kicker} text={feature.text} title={feature.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f0e8] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Responsive showcase"
              title="A polished system with room for real images later."
              description="The placeholder artwork is local, so the exported GitHub Pages site keeps working even without Figma image exports."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Metric label="mobile sections checked" value="6" />
              <Metric label="copy blocks simplified" value="18" />
            </div>
          </div>

          <ShowcasePanel imageSrc={`${basePath}/award-hero.svg`} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Social proof"
            title="Clear proof blocks keep the page trustworthy."
            description="Short quotes and direct numbers give the page confidence without making it harder to scan."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} name={item.name} quote={item.quote} role={item.role} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#d3342f] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-white/78">Ready for GitHub Pages</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Launch a fast static landing page with a stronger visual identity.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/82">
              The site exports as static files, uses the `/Websitee` base path, and is ready for the GitHub Pages workflow.
            </p>
            <a
              className="mt-6 inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-black uppercase text-[#101010] transition hover:bg-[#f1c84b]"
              href="mailto:hello@example.com"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#101010] px-5 py-8 text-sm text-white/62 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold uppercase text-white">Award Studio</p>
          <p>Built with Next.js, React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}

/*
This file holds reusable UI pieces for the landing page.
Edit it when a shared section block, card, or mockup needs to change.
Copy these components when you add another polished marketing page.
*/

import React from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centerClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${centerClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8c6b43]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
  accent: string;
};

export function FeatureCard({ title, text, accent }: FeatureCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${accent}`} />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Section</p>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white px-5 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
      <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

type QuoteCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function QuoteCard({ quote, name, role }: QuoteCardProps) {
  return (
    <figure className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <blockquote className="text-base leading-7 text-slate-700">"{quote}"</blockquote>
      <figcaption className="mt-5">
        <p className="font-semibold text-slate-950">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </figcaption>
    </figure>
  );
}

export function HeroMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[#fff9f1] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
      data-testid="hero-mockup"
    >
      <div className="flex items-center justify-between rounded-[1.25rem] border border-slate-200/80 bg-white px-4 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span>northstar.studio</span>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-[linear-gradient(145deg,#1d2432_0%,#0f172a_55%,#9f6f41_100%)] px-5 py-6 text-white">
        <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-[#f7b267]/20 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/65">Live preview</p>
            <h3 className="mt-3 max-w-[12ch] font-serif text-3xl font-semibold leading-[0.95]">
              Clear, premium, and easy to scan.
            </h3>
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            Mobile first
          </div>
        </div>

        <div className="relative mt-10 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/12 p-4 backdrop-blur">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/60">
              <span>Conversion</span>
              <span>Today</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-2 rounded-full bg-white/16">
                <div className="h-2 w-4/5 rounded-full bg-[#f7b267]" />
              </div>
              <div className="h-2 rounded-full bg-white/16">
                <div className="h-2 w-2/3 rounded-full bg-[#f4d06f]" />
              </div>
              <div className="h-2 rounded-full bg-white/16">
                <div className="h-2 w-5/6 rounded-full bg-[#8ecae6]" />
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/12 p-4 text-sm backdrop-blur">
              <p className="text-white/60">Attention</p>
              <p className="mt-1 text-2xl font-semibold">4.9/5</p>
              <p className="mt-3 text-white/75">A calm layout that people trust fast.</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/12 p-4 text-sm backdrop-blur">
              <p className="text-white/60">Launch speed</p>
              <p className="mt-1 text-2xl font-semibold">48h</p>
              <p className="mt-3 text-white/75">Reusable sections keep the build small.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-4 bottom-8 hidden rounded-[1.25rem] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:block">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8c6b43]">Award note</p>
        <p className="mt-1 text-sm font-medium text-slate-900">Strong hero, clear CTA, easy scroll.</p>
      </div>
    </div>
  );
}

export function ShowcaseMockup() {
  return (
    <div className="rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <div className="rounded-[1.5rem] bg-[linear-gradient(160deg,#f8efe1_0%,#fdfaf5_35%,#f0dfc5_100%)] p-4">
        <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#0f172a_0%,#24324d_100%)] p-5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">Placeholder image</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-24 w-24 rounded-[1.5rem] bg-white/15" />
              <div className="space-y-3">
                <div className="h-3 w-28 rounded-full bg-white/15" />
                <div className="h-3 w-36 rounded-full bg-white/15" />
                <div className="h-3 w-24 rounded-full bg-[#f7b267]" />
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-4">
              <p className="text-sm font-semibold text-slate-950">Simple layout</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Big sections, short copy, and clear actions.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-4">
              <p className="text-sm font-semibold text-slate-950">Flexible blocks</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Cards can be reused for new pages later.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

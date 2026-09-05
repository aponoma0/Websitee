/*
This file holds reusable UI pieces for the landing page.
Edit it when a shared section block, card, or visual panel needs to change.
Copy these components when you add another polished marketing page.
*/

import React from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, description, inverse = false }: SectionHeadingProps) {
  const textColor = inverse ? "text-white" : "text-[#101010]";
  const bodyColor = inverse ? "text-white/68" : "text-[#101010]/64";
  const eyebrowColor = inverse ? "text-[#f1c84b]" : "text-[#d3342f]";

  return (
    <div className="max-w-4xl">
      <p className={`text-sm font-black uppercase ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-black leading-tight sm:text-5xl ${textColor}`}>{title}</h2>
      <p className={`mt-5 max-w-2xl text-lg leading-8 ${bodyColor}`}>{description}</p>
    </div>
  );
}

type MetricProps = {
  value: string;
  label: string;
  variant?: "light" | "dark";
};

export function Metric({ value, label, variant = "light" }: MetricProps) {
  const styles = variant === "dark" ? "border-white/20 bg-white/10 text-white backdrop-blur" : "border-[#101010]/12 bg-white text-[#101010]";

  return (
    <div className={`border p-5 ${styles}`}>
      <p className="text-4xl font-black leading-none">{value}</p>
      <p className="mt-3 text-sm font-semibold uppercase opacity-[0.64]">{label}</p>
    </div>
  );
}

type FeatureCardProps = {
  kicker: string;
  title: string;
  text: string;
};

export function FeatureCard({ kicker, title, text }: FeatureCardProps) {
  return (
    <article className="border border-white/18 bg-white/8 p-6">
      <p className="text-sm font-black text-[#f1c84b]">{kicker}</p>
      <h3 className="mt-8 text-2xl font-black text-white">{title}</h3>
      <p className="mt-4 text-base leading-7 text-white/66">{text}</p>
    </article>
  );
}

type WorkTileProps = {
  title: string;
  label: string;
};

export function WorkTile({ title, label }: WorkTileProps) {
  return (
    <article className="group min-h-72 overflow-hidden border border-[#101010]/12 bg-[#f4f0e8]">
      <div className="flex h-full flex-col justify-between p-6">
        <p className="text-sm font-black uppercase text-[#d3342f]">{label}</p>
        <div>
          <div className="mb-6 h-32 border border-[#101010]/12 bg-[linear-gradient(135deg,#101010_0%,#3f736d_48%,#f1c84b_100%)] transition duration-300 group-hover:scale-[1.02]" />
          <h3 className="text-3xl font-black leading-none text-[#101010]">{title}</h3>
        </div>
      </div>
    </article>
  );
}

type ShowcasePanelProps = {
  imageSrc: string;
};

export function ShowcasePanel({ imageSrc }: ShowcasePanelProps) {
  return (
    <div className="border border-[#101010]/12 bg-white p-4 shadow-[12px_12px_0_#101010]" data-testid="showcase-panel">
      <div className="grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
        <div className="relative min-h-96 overflow-hidden bg-[#101010]">
          <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" src={imageSrc} />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(16,16,16,0.92),transparent)] p-6 text-white">
            <p className="text-sm font-black uppercase text-[#f1c84b]">Hero asset</p>
            <p className="mt-3 text-3xl font-black leading-tight">Local visual placeholder for static Pages.</p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border border-[#101010]/12 bg-[#f4f0e8] p-5">
            <p className="text-sm font-black uppercase text-[#d3342f]">Export</p>
            <p className="mt-8 text-3xl font-black text-[#101010]">Next.js static output</p>
          </div>
          <div className="border border-[#101010]/12 bg-[#3f736d] p-5 text-white">
            <p className="text-sm font-black uppercase text-white/72">Responsive</p>
            <p className="mt-8 text-3xl font-black">Desktop and mobile layouts tested.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="border border-[#101010]/12 bg-[#f4f0e8] p-6">
      <blockquote className="text-2xl font-black leading-snug text-[#101010]">"{quote}"</blockquote>
      <figcaption className="mt-8 border-t border-[#101010]/12 pt-5">
        <p className="font-black text-[#101010]">{name}</p>
        <p className="mt-1 text-sm font-semibold uppercase text-[#101010]/56">{role}</p>
      </figcaption>
    </figure>
  );
}

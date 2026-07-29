/*
This file configures the Next.js build for a static landing page export.
Edit it when the app needs a different Next runtime or image behavior.
Copy it when you add another small Next.js site in this repo.
*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

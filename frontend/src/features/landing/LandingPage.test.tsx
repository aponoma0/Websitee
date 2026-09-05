/*
This file tests the landing page content and section structure.
Edit it when the home page copy, layout, or section order changes.
Copy it when you add another marketing page test.
*/

import "@testing-library/jest-dom/vitest";

import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders the main landing page sections", () => {
    render(<LandingPage />);

    expect(screen.getByRole("heading", { name: "Award-winning landing page" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "The page now feels like a designed campaign, not a starter template." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Bold enough to feel premium. Simple enough to maintain." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "A polished system with room for real images later." })).toBeInTheDocument();
  });

  it("keeps the primary call to action visible", () => {
    render(<LandingPage />);

    expect(screen.getByRole("link", { name: "Build the page" })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute("href", "mailto:hello@example.com");
  });
});

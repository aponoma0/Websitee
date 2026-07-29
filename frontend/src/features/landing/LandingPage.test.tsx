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

    expect(screen.getByRole("heading", { name: "A landing page that feels calm, clear, and premium." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Everything has a clear job." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "A visual block that still stays simple." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "The page sounds calm and confident." })).toBeInTheDocument();
  });

  it("keeps the primary call to action visible", () => {
    render(<LandingPage />);

    expect(screen.getByRole("link", { name: "Start a project" })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute("href", "mailto:hello@example.com");
  });
});

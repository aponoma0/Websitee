/*
This file checks the landing page in a real browser at multiple sizes.
Edit it when the public page layout, responsive flow, or calls to action change.
Copy it when you add another browser test for a marketing page.
*/

import { expect, test } from "@playwright/test";

test("landing page renders on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "A landing page that feels calm, clear, and premium." })).toBeVisible();
  await expect(page.getByTestId("hero-mockup")).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a project" })).toBeVisible();

  const headingBox = await page.getByRole("heading", { name: "A landing page that feels calm, clear, and premium." }).boundingBox();
  const heroBox = await page.getByTestId("hero-mockup").boundingBox();

  expect(headingBox).not.toBeNull();
  expect(heroBox).not.toBeNull();
  expect(heroBox!.x).toBeGreaterThan(headingBox!.x + 300);
});

test("landing page stacks on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 1300 });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "A landing page that feels calm, clear, and premium." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact us" })).toBeVisible();

  const headingBox = await page.getByRole("heading", { name: "A landing page that feels calm, clear, and premium." }).boundingBox();
  const heroBox = await page.getByTestId("hero-mockup").boundingBox();

  expect(headingBox).not.toBeNull();
  expect(heroBox).not.toBeNull();
  expect(heroBox!.y).toBeGreaterThan(headingBox!.y + 220);
});

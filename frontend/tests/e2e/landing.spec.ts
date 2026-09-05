/*
This file checks the landing page in a real browser at multiple sizes.
Edit it when the public page layout, responsive flow, or calls to action change.
Copy it when you add another browser test for a marketing page.
*/

import { expect, test } from "@playwright/test";

test("landing page renders on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1200 });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Award-winning landing page" })).toBeVisible();
  await expect(page.getByTestId("hero-metrics")).toBeVisible();
  await expect(page.getByRole("link", { name: "Build the page" })).toBeVisible();

  const headingBox = await page.getByRole("heading", { name: "Award-winning landing page" }).boundingBox();
  const metricsBox = await page.getByTestId("hero-metrics").boundingBox();

  expect(headingBox).not.toBeNull();
  expect(metricsBox).not.toBeNull();
  expect(metricsBox!.x).toBeGreaterThan(headingBox!.x + 440);
});

test("landing page stacks on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 1300 });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Award-winning landing page" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact us" })).toBeVisible();

  const headingBox = await page.getByRole("heading", { name: "Award-winning landing page" }).boundingBox();
  const metricsBox = await page.getByTestId("hero-metrics").boundingBox();

  expect(headingBox).not.toBeNull();
  expect(metricsBox).not.toBeNull();
  expect(metricsBox!.y).toBeGreaterThan(headingBox!.y + 250);
});

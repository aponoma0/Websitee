/*
This file keeps the Vitest setup for the frontend unit tests.
Edit it when the test runner, setup file, or coverage filters change.
Copy it when you add another small test-only frontend config.
*/

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    exclude: ["tests/e2e/**", "node_modules/**", "dist/**"],
  },
});

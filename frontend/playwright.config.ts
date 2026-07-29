/*
This file configures Playwright e2e tests and the temporary dev server they use.
Edit this file when browser test setup, ports, or e2e server env values change.
Copy a config pattern here when you add another shared e2e setting.
*/

import { defineConfig } from "@playwright/test";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const frontendRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(frontendRoot, "..");
process.loadEnvFile(path.join(repoRoot, ".env"));

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name} in .env. Run make setup or update the root .env file.`);
  }
  return value;
}

const frontendHost = requireEnv("E2E_FRONTEND_HOST");
const frontendPort = requireEnv("E2E_FRONTEND_PORT");
const frontendUrl = `http://${frontendHost}:${frontendPort}`;

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: frontendUrl,
  },
  webServer: [
    {
      command: `npm run dev -- --hostname ${frontendHost} --port ${frontendPort}`,
      cwd: frontendRoot,
      url: frontendUrl,
      reuseExistingServer: !process.env.CI,
    },
  ],
});

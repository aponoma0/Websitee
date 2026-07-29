# Frontend Agent Notes

- This frontend is for students, so keep the landing page obvious and easy to inspect in a browser.
- Keep components small and readable - one file, one job.
- Use plain React components and small helpers. Do not add a state manager.
- Do not add a UI component library. Tailwind CSS is already here.
- Keep all user-facing text in simple English.
- Student-facing frontend config belongs in the root `.env` and `.docker.env` files, not in frontend-only env files.
- The current frontend is a static Next.js landing page. Keep the page structure simple and reusable.
- Keep `frontend/Dockerfile` serving nginx on `8080` and keep the final runtime stage non-root with `USER nginx`.
- Hidden frontend agent commands:
  - `make afront`, `make aopen`, `make astop`
  - `make abrowser SCRIPT=path/to/scenario.mjs`
- Hidden frontend browser checks should prefer the agent frontend on `.agent.env` ports instead of the student-facing local ports when both may be active.

## File layout

- App routes live in `src/app/`. Keep the root page small and compose shared pieces from `src/features/<feature>/`.
- Reusable UI pieces used by more than one page go in `src/features/<feature>/` or `src/shared/`.
- Unit tests should live next to the feature or page they cover.

## How to use the page

- Keep the home page static unless the user asks for interactive behavior.
- Use placeholder images or decorative panels if the design needs art that is not available.
- If you add a second public page later, follow the same simple section-based layout pattern.

## Tests - always keep them green

- Unit tests use Vitest + React Testing Library.
  Run: `cd frontend && npm test`
- End-to-end tests use Playwright and live in `frontend/tests/e2e/`.
  Run: `cd frontend && npm run test:e2e`
- Every new page needs at least one unit test.
- Every new browser flow needs an e2e test.
- Always run `npm test` before calling a task done. Fix broken tests before moving on.
- Do not delete a test just to make the suite pass - update it to match the new correct behavior.

## Other rules

- Copy an existing page file when you add another page with a similar shape.
- Copy an existing feature panel or test when you add another small feature block.
- Extend an existing file only when the new code still belongs to the same page, feature, or helper.
- Do not use deep relative imports like `../../../shared/...`. Keep files close to where they are used.
- Add runtime packages with `npm install <name>` and dev-only packages with `npm install -D <name>`.
- Start each file with a short comment block (2-4 lines): what this file does, when to edit it, and whether it can be copied as a starting point for a similar file.

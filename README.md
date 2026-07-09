# lhm.works

Personal site for Leif Haven Martinson — product designer working on AI, writer (as Leif Haven), and inventor on patents in assistant systems.

Minimal by design: React + Vite + Tailwind, a 700px column, three typefaces, no backend.

## Structure

- `/` — name, selected work, writing, patents, contact
- `/work`, `/work/:slug` — career highlights (Ray-Ban Meta, voice platforms, Portal/Quest assistant UX, Whisperer)
- `/writing` — books and publications as Leif Haven
- `/patents` — all patents and published applications
- `/about` — full experience, education, recognition

All facts are sourced from the CV (v4, March 2026) and verified public records. Update content directly in `src/components/pages/`.

## Running

```
npm install
npm run dev    # http://localhost:3000
npm run build  # outputs to build/
```

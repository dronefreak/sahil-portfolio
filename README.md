# Sahil Kolhe: portfolio

A one-page portfolio for Sahil Kolhe, sports event specialist. Built with [Astro](https://astro.build), TypeScript and Tailwind CSS 4.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Where to change things

Most content is plain data, so you rarely need to touch the components.

| To change… | Edit |
| --- | --- |
| Name, headline, typewriter roles, stats, social links | `src/data/site.ts` |
| Events in the Experience section (dates, roles, photos, logos) | `src/data/projects.ts` |
| Logos in the scrolling strip under the hero | `src/data/eventLogos.ts` |
| Skills in the hero constellation (and the "At…" lines on Services) | `src/data/skills.ts` |
| Services cards | `src/data/services.ts` |
| Education cards | `src/data/education.ts` |
| Colours and fonts | `src/styles/global.css` (the `@theme` block) |

### Common jobs

- **Replace the resume:** overwrite `public/resume.pdf` with the real file, keeping the same name.
- **Replace the hero avatar:** overwrite `src/assets/sahil-avatar.jpg`. The crop is set in `src/components/Hero.astro`, so a photo with the face in a different spot may need the `transform-origin` and `translate` values adjusted.
- **Add an event:** add a logo to `src/assets/logos/`, a photo to `src/assets/events/` (optional), then add an entry to `src/data/projects.ts`. Newest first.
- **Social preview image:** `public/og.png` (1200×630). It only shows up once `site` is set (below).

## Before launch

- Set `site` in `astro.config.mjs` to the final URL, for example `site: 'https://sahilkolhe.com'`. This switches on the canonical link and the link-preview image.
- Replace the placeholder `public/resume.pdf`.
- Confirm the Instagram link in `src/data/site.ts`.

## Parked

`archive/` holds the About section, removed for now because it was too text-heavy. It is not part of the build.

# Aster Vale — local concept site

An identity-rebranded local concept for a private mountain observatory retreat
and managed residence club. The original layout, motion system, route, and
interaction sequencing remain intact. Aster Vale copy and media are fictional
concept work and do not represent a built property or commercial offering.

## Run

```bash
npm run dev        # http://localhost:4321
```

Use a static server with HTTP Range support. The local `.mp4` scene textures
are seeked by the WebGL renderer and will stall on a server that only serves
whole files. `serve.cjs` handles this; `python -m http.server` does not.

Open the root URL rather than `index.html` over `file://`; asset paths are
root-relative (`/assets/...`).

## Layout

```text
index.html                     preserved Webflow document structure
serve.cjs                      static server with Range support
assets/
  js/site.js                   preserved runtime with local asset paths
  js/site.readable.js          same runtime, beautified for review
  media/aster-vale/            Aster Vale concept media and runtime assets
```

The source product remains separately preserved in its original sibling
directory. This directory is the isolated Aster Vale candidate; its source
integrity record is stored under `.rebrand/`.

## How it works

The preserved runtime drives the interaction system:

- GSAP + ScrollTrigger + SplitText + Flip for scroll and reveal motion
- Lenis smooth scrolling
- Swiper galleries and location criteria
- Barba page transitions
- 15 WebGL canvases using a custom halftone line-screen shader
- one canvas2D hero sequence with 120 scroll-scrubbed frames

The hero selects a light or dark Aster Vale frame sequence from the wall clock.
Below 992px, the preserved system uses static media rather than the WebGL and
scroll-video surfaces.

## Concept limitations

- No real site, operator, opening date, price, return, residence availability,
  sales office, contact route, or legal entity is claimed.
- Sibling editorial pages, production form routing, booking, payment, and a
  commercial residence offering are not included.
- Remote presentation slots stay inert until approved Aster Vale films exist.

## Concept and provenance

Aster Vale is fictional concept work. Generated media is presented as concept
imagery rather than documentary evidence. Instrument Serif and Space Mono are
used under the SIL Open Font License. The inherited source runtime/code license
was not stated by the source package and must be resolved before publication.

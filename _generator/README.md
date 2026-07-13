# Generator — Aamara Ideas hub

Data-driven build for the 11 playable business-idea pages + hub.

- `data/N.json` — content for idea N (1..11). Optional fields: hero.stageHtml (custom hero),
  imgband.style, human.mediaHtml, alphabet (A–Z module), meta.dossierLabel/thumbStyle/thumbGlyph/fresh.
- `build.js data/N.json OUT.html` — build a playable page.
- `buildbrief.js <digitaltwin|playschool> OUT.html` — build the concise brief (case.html) for ideas 10/11.
- `buildhub.js OUTDIR` — build the hub index.html (reads all data/*.json meta).
- Ideas 1–9 use hero.mp4 + hero-poster.jpg in each `N/assets/`; ideas 10 & 11 are asset-free (CSS/SVG heroes).
- Ideas 1–9 `case.html` are the original institutional dossiers (do not regenerate).

Rebuild everything: for n in 1..9 build into repo/n/index.html; build 10/11 index.html + case.html;
then buildhub.js repo. See git history commit "Rework Idea 01…" for the reference assembly.

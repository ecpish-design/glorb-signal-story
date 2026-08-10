# Glorb // Earth Field Notes

A no-build, GitHub Pages-ready click-through comic made from the supplied Glorb story artwork.

## What is included

- 9-step main story flow.
- The original 15 supplied artworks are all used:
  - pages 1–5 are in the main story;
  - pages 6–7 open as the four clickable “similar incident” logs on the timeline;
  - pages 8–10 continue the main story;
  - pages 11–14 open from the four clickable signal categories;
  - page 15 is the final summary.
- Browser read-aloud using the Web Speech API, preferring an Australian English voice when available.
- Transcript panel for each main story page.
- Keyboard arrows, page-edge clicks and mobile swipe navigation.
- No framework, package manager, API key or build step.

## Run locally

Because browsers can be stricter when opening files directly, use a tiny local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save. GitHub will provide the public Pages URL.

## Files

- `index.html` — app structure and accessibility controls.
- `styles.css` — responsive comic viewer and modal styling.
- `script.js` — story order, hotspots, modal details, navigation and read-aloud.
- `assests/29.svg` through `assests/43.svg` — supplied artwork, unchanged.

## Read-aloud note

The speaker button is text-to-speech (the browser reads the written story aloud). It uses `window.speechSynthesis`, so the exact voice depends on the device/browser and requires no external service.

# Glorb // Earth Field Notes — revised GitHub Pages build

This folder is ready to upload to the existing `glorb-signal-story` GitHub repository.

## Important

The image folder is intentionally named `assests` to match the current repository spelling. The JavaScript also points to `assests/`.

## What changed in this revision

- Pages without interactions no longer display the red “clickable field notes” message.
- The “similar incidents” message appears only on the timeline page where those incident buttons actually exist.
- The human signal zoom message appears only on the signal-category page, not on the final summary.
- The four similar-incident pop-ups now use the new higher-quality assets:
  - a correctly rotated signal equation
  - Glorb’s handwritten field note
  - the high-resolution vertical incident report
- The four signal-category areas have visible `ZOOM +` controls and open the detailed signal guides.
- All project assets have descriptive filenames rather than numbers.
- Read-aloud, transcript, keyboard arrows, page-edge navigation and mobile swipe remain enabled.

## Upload

1. Unzip this folder on your computer.
2. Open the root of the `glorb-signal-story` repository on GitHub.
3. Upload/replace `index.html`, `styles.css`, `script.js`, `404.html`, `README.md`, and the `assests` folder.
4. Commit to `main`.
5. Wait for the newest GitHub Pages deployment to turn green.
6. Hard-refresh the published site (`Command + Shift + R` in Chrome on Mac).

Old numbered files can remain in the repository; this build no longer refers to them.

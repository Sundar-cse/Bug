# CodeCheck — Debugging Arena

A first prototype for the college Python debugging event.

## Files
- `index.html` — participant interface, two sample rounds, countdown, plain editor, output/error panel.
- `runner.js` — runs Python in a disposable Web Worker using Pyodide.

## Run locally
Serve the folder using a local static web server (opening `index.html` directly may block the worker):
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

The browser needs internet access to download Pyodide from its CDN on first load.

## Publish with GitHub Pages
1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for deployment, then open the URL shown in the Pages settings.

## Important: not ready for live competition
This is an editor/runtime prototype only. It does not yet authenticate participants, securely store submissions, score hidden test cases, or provide an organizer dashboard. The round buttons and client-side timer are only for demonstration and can be reset or manipulated by a participant. Add server-side timing, validation, scoring, and persistent results before using it for official marks.

The current editor intentionally has no autocomplete, auto-indentation, automatic bracket/quote closing, or syntax repair. Python's runtime error messages are shown after Run.

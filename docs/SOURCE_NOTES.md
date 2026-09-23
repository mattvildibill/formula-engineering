# Formula / Engineering Explorer

Original parametric Formula reference geometry with 2026 active aerodynamics and a clearly labeled 2025 comparison. React, Three.js and the Sites Vinext starter. All runtime assets are local; no keys or external APIs.

## Model scope

Metre-scale reference envelopes: 3.4 / 3.6 m wheelbase, 1.9 / 2.0 m width envelope, nominal 18-inch bead seats. All surface profiles, track, internal packaging and suspension pickups are estimates. The model is not FIA-certified, a team digital twin or a service manual.

Includes orbit/pan/zoom, camera presets, component picking, exploded assemblies, transparent outer body, isolated underfloor, moving wings, steering, small suspension travel, wheel removal and visibility controls. Flow traces are illustrative. Dynamic pressure is computed; downforce and drag are not predicted.

## Sources

FIA 2026 Technical Regulations, Issue 20 (5 August 2026), especially C2.3, C3, C10–C12. FIA 2025 Technical Regulations, Issue 3. FIA 2026 concept-render gallery and Pirelli tyre information. Exact links and limitations appear inside the app. No source photographs or third-party car meshes are redistributed.

## Validation

TypeScript and production build validated. Interface exercised in desktop, 390 px phone and 768 px tablet frame sizes. Original mesh geometry exported and inspected in offline software renders from front, side, top, rear, underbody and close-ups. The managed test browser has WebGL disabled; full rendered browser interactions, GPU performance and final PBR appearance could not be verified there. The offline images validate geometry only. WebMCP registry was unavailable in that browser; the optional integration feature-detects support.

## Development

Use the existing pnpm lockfile and Sites scripts. Source lives in `app/page.tsx`, `app/globals.css` and `lib/formula/`. The renderer is loaded lazily on the client. The site contains no persistent visitor data.

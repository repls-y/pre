// WaveNavbar (Image-mask variant — Tailwind + Next.js)
// Place `navbar.svg` in your Next.js `/public` folder (accessible at `/navbar.svg`).
// This component uses the SVG as a mask (via mask-image / -webkit-mask-image) so the scallop shape is pixel-perfect to Arc's source.

import React from "react";

export default function WaveNavbar({
  bg = "#2b6ef6",
  height = 120,
  maskScale = 1, // scale the mask image if needed
}) {
  // maskSize controls how wide one scallop tile is; tune to match the original
  const maskSize = `calc(4 * ${12 * maskScale}px)`; // default base tile derived from earlier experiments

  return (
    <header
      className="relative flex items-center justify-center px-4 shadow-lg z-10"
      style={{ height }}
    >
      {/* Masked background layer using the provided SVG image in /public/navbar.svg */}
      <div
        className="absolute inset-0 w-full"
        style={{
          background: bg,
          height: "100%",
          WebkitMaskImage: "url('/navbar.svg')",
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskPosition: "center bottom",
          WebkitMaskSize: maskSize,
          maskImage: "url('/navbar.svg')",
          maskRepeat: "repeat-x",
          maskPosition: "center bottom",
          maskSize: maskSize,
        }}
      />

      {/* NAV CONTENT */}
      <nav className="relative w-full max-w-6xl flex items-center justify-between text-white">
        <div className="font-bold text-lg">Logo</div>

        <ul className="hidden sm:flex gap-6 font-medium">
          <li>
            <a className="hover:opacity-80" href="#">
              Max
            </a>
          </li>
          <li>
            <a className="hover:opacity-80" href="#">
              Mobile
            </a>
          </li>
          <li>
            <a className="hover:opacity-80" href="#">
              Developers
            </a>
          </li>
          <li>
            <a className="hover:opacity-80" href="#">
              Students
            </a>
          </li>
          <li>
            <a className="hover:opacity-80" href="#">
              Blog
            </a>
          </li>
        </ul>

        <button className="bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-xl font-semibold">
          Download Arc for Windows
        </button>
      </nav>
    </header>
  );
}

/*
Usage notes:
- Put the provided `navbar.svg` into your project's `public/` folder. The component references it at `/navbar.svg`.
- Tweak `maskScale` prop or `maskSize` calculation above to change scallop density/width until it matches the original exactly.
- Browser support: modern browsers support CSS mask-image; include the -webkit-prefixed properties as shown for WebKit (Safari).
- If you want the masked shape to be white-on-transparent (for overlaying on other backgrounds), invert the mask SVG colors or use blend modes.
*/

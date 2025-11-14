"use client";

import clsx from "clsx";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Changelog", href: "#changelog" },
  { label: "Blog", href: "#blog" },
];

const createWavePath = (
  width = 1440,
  amplitude = 28,
  baseHeight = 96,
  segments = 18,
) => {
  const step = width / segments;
  let d = `M0 ${baseHeight}`;

  for (let index = 0; index < segments; index += 1) {
    const controlX = index * step + step / 2;
    const controlY =
      index % 2 === 0 ? baseHeight + amplitude : baseHeight - amplitude;
    const endX = (index + 1) * step;
    d += ` Q ${controlX} ${controlY} ${endX} ${baseHeight}`;
  }

  d += ` V 240 H 0 Z`;
  return d;
};

const wavePath = createWavePath();

export default function WaveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const gradientId = useId();

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";

    return () => {
      style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="relative isolate z-50 pb-16 sm:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[220px] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[200px] bg-[radial-gradient(circle_at_20%_-20%,#4e7dff_0,#2f6bff_26%,#16245d_85%)]" />
        <div className="absolute inset-x-0 bottom-0">
          <svg
            className="h-[90px] w-full"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16245d" />
                <stop offset="50%" stopColor="#2441a5" />
                <stop offset="100%" stopColor="#2f6bff" />
              </linearGradient>
            </defs>
            <path d={wavePath} fill={`url(#${gradientId})`} />
          </svg>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white shadow-[0_25px_70px_-35px_rgba(11,27,91,0.85)] backdrop-blur-xl sm:hidden">
          <button
            type="button"
            aria-label="Buka menu navigasi"
            className="rounded-full p-2 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="#top" className="flex flex-col items-center text-sm font-semibold">
            <span className="uppercase tracking-[0.32em] text-[0.65rem] text-white/60">
              Supa
            </span>
            <span className="text-base leading-tight">Snowy Studio</span>
          </Link>

          <button
            type="button"
            aria-label="Cari konten"
            className="rounded-full p-2 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden items-center justify-between rounded-[26px] border border-white/15 bg-white/10 px-6 py-5 text-white shadow-[0_40px_120px_-60px_rgba(11,27,91,0.85)] backdrop-blur-xl sm:flex">
          <div className="flex items-center gap-3">
            <Link href="#top" className="flex flex-col text-sm font-semibold leading-none">
              <span className="uppercase tracking-[0.32em] text-[0.65rem] text-white/60">
                Supa
              </span>
              <span className="text-xl leading-tight">Snowy Studio</span>
            </Link>
          </div>

          <nav aria-label="Navigasi utama" className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Cari konten"
              className="rounded-full p-2 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="#signin"
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign in
            </Link>
            <Link
              href="#start"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#11153a] shadow-[0_18px_50px_-25px_rgba(255,255,255,0.9)] transition hover:bg-[#f5f7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cad6ff]"
            >
              Start for free
            </Link>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/55 px-4 pb-10 pt-20 backdrop-blur-sm transition",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setMenuOpen(false);
          }
        }}
      >
        <div
          className={clsx(
            "ml-auto flex h-full max-w-xs flex-col rounded-3xl border border-white/15 bg-gradient-to-b from-[#19255e] via-[#1f2f78] to-[#2743c2] text-white shadow-[0_30px_120px_-40px_rgba(9,20,58,0.9)] transition-transform",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 pb-4 pt-6">
            <Link href="#top" className="flex flex-col text-sm font-semibold leading-none">
              <span className="uppercase tracking-[0.32em] text-[0.65rem] text-white/60">
                Supa
              </span>
              <span className="text-lg leading-tight">Snowy Studio</span>
            </Link>
            <button
              type="button"
              aria-label="Tutup menu navigasi"
              className="rounded-full p-2 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base font-medium text-white/90 shadow-[0_12px_30px_-18px_rgba(8,18,54,0.8)] transition hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 px-5 pb-6 pt-4">
            <Link
              href="#signin"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white/90 transition hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Sign in
            </Link>
            <Link
              href="#start"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#11153a] shadow-[0_22px_60px_-30px_rgba(255,255,255,0.9)] transition hover:bg-[#f5f7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cad6ff]"
            >
              Start for free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

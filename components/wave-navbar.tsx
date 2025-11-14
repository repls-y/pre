"use client";

import clsx from "clsx";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Changelog", href: "#changelog" },
  { label: "Blog", href: "#blog" },
];

const maskStyle: CSSProperties = {
  WebkitMaskImage: "url('/navbar.svg')",
  WebkitMaskRepeat: "repeat-x",
  WebkitMaskSize: "120px 88px",
  WebkitMaskPosition: "center bottom",
  maskImage: "url('/navbar.svg')",
  maskRepeat: "repeat-x",
  maskSize: "120px 88px",
  maskPosition: "center bottom",
};

export default function WaveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="relative isolate z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[230px] overflow-hidden">
        <div className="absolute inset-0" style={maskStyle}>
          <div className="h-full w-full bg-[linear-gradient(90deg,#5a75ff_0%,#6d8fff_50%,#5a75ff_100%)] dark:bg-[linear-gradient(90deg,#150a70_0%,#241594_50%,#070237_100%)]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-[230px] bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_60%)] dark:bg-[linear-gradient(180deg,rgba(18,8,77,0.45)_0%,rgba(4,2,36,0)_70%)]" />
      </div>

      <div className="w-full px-4 pb-14 pt-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between text-white sm:hidden">
          <button
            type="button"
            aria-label="Buka menu navigasi"
            className="rounded-full border border-white/40 bg-white/10 p-2 transition hover:bg-white/20"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            href="#top"
            className="flex flex-col items-center text-sm font-semibold uppercase tracking-[0.32em]"
          >
            <span className="text-[0.65rem] text-white/70">Twibbonize</span>
            <span className="text-base tracking-tight normal-case">Snowy Studio</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Cari konten"
              className="rounded-full border border-white/40 bg-white/10 p-2 transition hover:bg-white/20"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="#signin"
              className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Masuk
            </Link>
          </div>
        </div>

        <div className="mt-5 hidden items-center justify-between text-white sm:flex">
          <div className="flex items-center gap-10">
            <Link href="#top" className="flex flex-col text-sm font-semibold leading-none uppercase tracking-[0.32em]">
              <span className="text-[0.7rem] text-white/70">Twibbonize</span>
              <span className="text-2xl leading-tight normal-case">Snowy Studio</span>
            </Link>

            <nav aria-label="Navigasi utama" className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/15 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Cari konten"
              className="rounded-full border border-white/40 bg-white/10 p-2 transition hover:bg-white/20"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="#signin"
              className="rounded-full border border-white/55 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Masuk
            </Link>
            <Link
              href="#start"
              className="rounded-full bg-[#ffb20f] px-5 py-2 text-sm font-semibold text-[#261903] shadow-[0_18px_45px_-24px_rgba(255,178,15,0.95)] transition hover:bg-[#ffc14c] dark:bg-[#ff9f0d] dark:text-[#1c0f01] dark:hover:bg-[#ffae33]"
            >
              Daftar
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
            "ml-auto flex h-full max-w-xs flex-col rounded-[30px] border border-white/25 bg-white/95 text-[#1c2440] shadow-[0_40px_120px_-60px_rgba(9,18,54,0.8)] transition-transform dark:border-white/10 dark:bg-[#0e133f] dark:text-white",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-slate-200/60 px-6 pb-4 pt-6 dark:border-white/10">
            <Link href="#top" className="flex flex-col text-sm font-semibold leading-none uppercase tracking-[0.32em]">
              <span className="text-[0.65rem] text-black/60 dark:text-white/60">Twibbonize</span>
              <span className="text-lg leading-tight normal-case">Snowy Studio</span>
            </Link>
            <button
              type="button"
              aria-label="Tutup menu navigasi"
              className="rounded-full border border-black/10 bg-black/5 p-2 text-black transition hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-6" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-base font-semibold text-[#1c2440] shadow-sm transition hover:border-[#ffb20f] hover:text-[#ff8a00] dark:border-white/10 dark:bg-[#161d52] dark:text-white dark:hover:border-[#ffae33] dark:hover:text-[#ffae33]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 px-6 pb-7">
            <Link
              href="#signin"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-[#ffb20f] px-4 py-2.5 text-center text-sm font-semibold text-[#ff8a00] transition hover:bg-[#fff4dc] dark:border-[#ffae33] dark:text-[#ffae33] dark:hover:bg-[#2a2f63]"
            >
              Masuk
            </Link>
            <Link
              href="#start"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#ffb20f] px-4 py-2.5 text-center text-sm font-semibold text-[#261903] shadow-[0_20px_50px_-25px_rgba(255,178,15,0.9)] transition hover:bg-[#ffc14c] dark:bg-[#ff9f0d] dark:text-[#1c0f01] dark:hover:bg-[#ffae33]"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

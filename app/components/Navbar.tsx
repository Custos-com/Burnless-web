"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md border-b border-cream-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-ink-900 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-flame-500">
              <path d="M12 2C9 7 6 9 6 13a6 6 0 0012 0c0-4-3-6-6-11z" fill="currentColor"/>
              <path d="M12 13c-1 2 0 4 2 4" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-bold text-lg text-ink-900 tracking-tight">Burnless</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Docs", href: "/docs" },
            { label: "Blog", href: "/blog" },
            { label: "Changelog", href: "/changelog" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-ink-500 hover:text-ink-900 hover:bg-cream-200 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/Custos-com/Burnless"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm text-ink-500 hover:text-ink-900 hover:bg-cream-200 rounded-lg transition-colors flex items-center gap-1"
          >
            GitHub
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/docs/getting-started"
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-ink-900 text-cream-50 hover:bg-ink-700 transition-colors"
          >
            Get started →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-cream-200 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M18 6L6 18M6 6l12 12"/>
              : <path d="M3 12h18M3 6h18M3 18h18"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 py-4 flex flex-col gap-1">
          {[
            { label: "Docs", href: "/docs" },
            { label: "Blog", href: "/blog" },
            { label: "Changelog", href: "/changelog" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2.5 text-sm text-ink-500 hover:text-ink-900 hover:bg-cream-200 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/Custos-com/Burnless"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 text-sm text-ink-500 hover:text-ink-900 hover:bg-cream-200 rounded-lg transition-colors"
          >
            GitHub ↗
          </a>
          <div className="pt-2 border-t border-cream-200 mt-1">
            <Link
              href="/docs/getting-started"
              className="block text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-ink-900 text-cream-50"
              onClick={() => setOpen(false)}
            >
              Get started →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
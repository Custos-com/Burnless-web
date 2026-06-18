"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0EB]/90 backdrop-blur-sm border-b border-[#EDE5D8]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-bold text-xl text-[#1A1A2E] tracking-tight">Burnless</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/docs" className="text-sm text-[#5A5A7A] hover:text-[#1A1A2E] transition-colors">Docs</Link>
          <Link href="/blog" className="text-sm text-[#5A5A7A] hover:text-[#1A1A2E] transition-colors">Blog</Link>
          <Link href="/changelog" className="text-sm text-[#5A5A7A] hover:text-[#1A1A2E] transition-colors">Changelog</Link>
          <a href="https://github.com/Custos-com/Burnless" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[#5A5A7A] hover:text-[#1A1A2E] transition-colors flex items-center gap-1">
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/docs/getting-started"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[#1A1A2E] text-white hover:bg-[#2D2D4A] transition-colors">
            Get started
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#F5F0EB] border-t border-[#EDE5D8] px-6 py-4 flex flex-col gap-4">
          <Link href="/docs" className="text-sm text-[#5A5A7A]" onClick={() => setOpen(false)}>Docs</Link>
          <Link href="/blog" className="text-sm text-[#5A5A7A]" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/changelog" className="text-sm text-[#5A5A7A]" onClick={() => setOpen(false)}>Changelog</Link>
          <a href="https://github.com/Custos-com/Burnless" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5A5A7A]">GitHub</a>
          <Link href="/docs/getting-started"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[#1A1A2E] text-white text-center"
            onClick={() => setOpen(false)}>
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
}

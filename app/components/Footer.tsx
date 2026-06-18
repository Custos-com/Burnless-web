import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔥</span>
              <span className="font-bold text-xl tracking-tight">Burnless</span>
            </div>
            <p className="text-sm text-[#9898B8] leading-relaxed">
              Stop burning your error budget.<br/>Stop burning out your team.
            </p>
            <p className="text-xs text-[#5A5A7A] mt-4">Built by Kairos Labs</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5A5A7A] mb-4">Product</p>
            <div className="flex flex-col gap-3">
              <Link href="/docs" className="text-sm text-[#9898B8] hover:text-white transition-colors">Documentation</Link>
              <Link href="/changelog" className="text-sm text-[#9898B8] hover:text-white transition-colors">Changelog</Link>
              <Link href="/blog" className="text-sm text-[#9898B8] hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5A5A7A] mb-4">Open source</p>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/Custos-com/Burnless" target="_blank" rel="noopener noreferrer"
                className="text-sm text-[#9898B8] hover:text-white transition-colors">GitHub</a>
              <a href="https://github.com/Custos-com/Burnless/issues" target="_blank" rel="noopener noreferrer"
                className="text-sm text-[#9898B8] hover:text-white transition-colors">Issues</a>
              <a href="https://github.com/Custos-com/Burnless/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer"
                className="text-sm text-[#9898B8] hover:text-white transition-colors">Contributing</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5A5A7A] mb-4">Legal</p>
            <div className="flex flex-col gap-3">
              <Link href="/license" className="text-sm text-[#9898B8] hover:text-white transition-colors">License</Link>
              <Link href="/security" className="text-sm text-[#9898B8] hover:text-white transition-colors">Security</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2D2D4A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#5A5A7A]">© 2026 Kairos Labs. Apache 2.0 / AGPLv3 / BSL 1.1</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0F6E56] inline-block"></span>
            <span className="text-xs text-[#5A5A7A]">v0.1.0 — all systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

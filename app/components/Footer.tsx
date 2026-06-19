import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-ink-700 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-flame-500">
                  <path d="M12 2C9 7 6 9 6 13a6 6 0 0012 0c0-4-3-6-6-11z" fill="currentColor"/>
                  <path d="M12 13c-1 2 0 4 2 4" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">Burnless</span>
            </div>
            <p className="text-sm text-ink-300 leading-relaxed">
              Stop burning your error budget.<br />Stop burning out your team.
            </p>
            <p className="text-xs text-ink-500 mt-4">Built by Kairos Labs</p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-4">Product</p>
            <div className="flex flex-col gap-3">
              <Link href="/docs" className="text-sm text-ink-300 hover:text-white transition-colors">Documentation</Link>
              <Link href="/changelog" className="text-sm text-ink-300 hover:text-white transition-colors">Changelog</Link>
              <Link href="/blog" className="text-sm text-ink-300 hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          {/* Open source */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-4">Open source</p>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/Custos-com/Burnless" target="_blank" rel="noopener noreferrer"
                className="text-sm text-ink-300 hover:text-white transition-colors">GitHub</a>
              <a href="https://github.com/Custos-com/Burnless/issues" target="_blank" rel="noopener noreferrer"
                className="text-sm text-ink-300 hover:text-white transition-colors">Issues</a>
              <a href="https://github.com/Custos-com/Burnless/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer"
                className="text-sm text-ink-300 hover:text-white transition-colors">Contributing</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-500 mb-4">Legal</p>
            <div className="flex flex-col gap-3">
              <Link href="/license" className="text-sm text-ink-300 hover:text-white transition-colors">License</Link>
              <Link href="/security" className="text-sm text-ink-300 hover:text-white transition-colors">Security</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-500">© 2026 Kairos Labs. Apache 2.0 / AGPLv3 / BSL 1.1</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block"></span>
            <span className="text-xs text-ink-500">v0.1.0 — all systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
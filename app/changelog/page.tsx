export default function Changelog() {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-6 pb-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">What&apos;s new</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2">Changelog</h1>
      <p className="text-[#5A5A7A] mb-12">Every release, documented.</p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#EDE5D8]"></div>
        <div className="pl-8 relative">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#F97316] -translate-x-1/2 border-2 border-[#F5F0EB]"></div>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xl font-bold text-[#1A1A2E]">v0.1.0</h2>
            <span className="text-xs bg-[#FAEEDA] text-[#854F0B] px-2 py-0.5 rounded-full font-medium">Latest</span>
          </div>
          <p className="text-sm text-[#9898B8] mb-4">June 16, 2026</p>
          <div className="bg-white border border-[#EDE5D8] rounded-xl p-6">
            <p className="font-semibold text-[#1A1A2E] mb-3">Initial release 🎉</p>
            <ul className="space-y-2">
              {[
                "SLO error budget calculation engine",
                "Burn rate detection (14.4× critical, 6× warning)",
                "Agent daemon skeleton",
                "CLI skeleton (init, validate, status)",
                "Slack notification support",
                "Full CI/CD pipeline with lint and tests",
                "Community files (CONTRIBUTING, CODE_OF_CONDUCT, SECURITY)",
                "32 open issues for contributors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#5A5A7A]">
                  <span className="text-[#0F6E56] mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

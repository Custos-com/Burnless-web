export default function QuickStart() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Getting started</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Quick start</h1>
      <p className="text-lg text-[#5A5A7A] mb-8">From install to your first SLO in 5 minutes.</p>
      <div className="bg-[#FAEEDA] border border-[#EF9F27] rounded-xl p-5 mb-8">
        <p className="font-semibold text-[#412402] mb-1">🚧 In progress</p>
        <p className="text-sm text-[#854F0B]">The <code className="bg-[#FDE8C8] px-1 rounded">burnless init</code> command is currently being built. <a href="https://github.com/Custos-com/Burnless/issues" className="underline">Track progress on GitHub</a>.</p>
      </div>
      <h2 className="text-xl font-bold text-[#1A1A2E] mt-8 mb-4">What quick start will look like</h2>
      <div className="code-block mb-6">
        <span className="text-[#6C7086]"># 1. Install</span>{"\n"}
        <span className="text-[#94E2D5]">brew install</span> <span className="text-[#A6E3A1]">burnless</span>{"\n\n"}
        <span className="text-[#6C7086]"># 2. Create sre.yaml interactively</span>{"\n"}
        <span className="text-[#94E2D5]">burnless init</span>{"\n\n"}
        <span className="text-[#6C7086]"># 3. Validate</span>{"\n"}
        <span className="text-[#94E2D5]">burnless validate</span>{"\n\n"}
        <span className="text-[#6C7086]"># 4. Start watching your SLOs</span>{"\n"}
        <span className="text-[#94E2D5]">burnless agent</span>
      </div>
      <p className="text-sm text-[#5A5A7A]">Want to help build this? <a href="https://github.com/Custos-com/Burnless/issues?q=label%3A%22good+first+issue%22" className="text-[#7C3AED] underline">Browse good first issues →</a></p>
    </div>
  );
}

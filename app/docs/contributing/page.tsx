export default function Contributing() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Contributing</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">How to contribute</h1>
      <p className="text-lg text-[#5A5A7A] mb-8">Burnless is open source and welcomes contributions of all kinds.</p>
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Set up your dev environment</h2>
      <div className="code-block mb-6">
        <span className="text-[#6C7086]"># Clone the repo</span>{"\n"}
        <span className="text-[#94E2D5]">git clone</span> <span className="text-[#A6E3A1]">https://github.com/Custos-com/Burnless.git</span>{"\n"}
        <span className="text-[#94E2D5]">cd</span> <span className="text-[#A6E3A1]">burnless</span>{"\n\n"}
        <span className="text-[#6C7086]"># Install Go 1.24+</span>{"\n"}
        <span className="text-[#94E2D5]">brew install go</span>{"\n\n"}
        <span className="text-[#6C7086]"># Install dependencies</span>{"\n"}
        <span className="text-[#94E2D5]">make setup</span>{"\n\n"}
        <span className="text-[#6C7086]"># Run tests</span>{"\n"}
        <span className="text-[#94E2D5]">make test</span>{"\n\n"}
        <span className="text-[#6C7086]"># Run linter</span>{"\n"}
        <span className="text-[#94E2D5]">make lint</span>
      </div>
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Workflow</h2>
      {["Fork the repo on GitHub", "Create a branch: git checkout -b fix/your-fix", "Make your changes and add tests", "Run make test and make lint — both must pass", "Open a PR against the dev branch", "Wait for review — we aim to respond within 48 hours"].map((step, i) => (
        <div key={step} className="flex items-start gap-3 mb-3">
          <span className="text-xs font-mono text-[#F97316] font-bold mt-0.5">0{i+1}</span>
          <p className="text-sm text-[#5A5A7A]">{step}</p>
        </div>
      ))}
      <div className="mt-8 bg-[#E1F5EE] border border-[#5DCAA5] rounded-xl p-5">
        <p className="font-semibold text-[#085041] mb-1">Good first issues</p>
        <p className="text-sm text-[#0F6E56] mb-3">We have 12 issues labelled good first issue — small, well-defined, under 2 hours each.</p>
        <a href="https://github.com/Custos-com/Burnless/issues?q=label%3A%22good+first+issue%22"
          className="text-sm font-medium text-[#0F6E56] underline">Browse good first issues →</a>
      </div>
    </div>
  );
}

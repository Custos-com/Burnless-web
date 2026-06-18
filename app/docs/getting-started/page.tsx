export default function GettingStarted() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Documentation</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Getting started</h1>
      <p className="text-lg text-[#5A5A7A] mb-8 leading-relaxed">Install Burnless and run your first SLO in under 5 minutes.</p>

      <h2 className="text-xl font-bold text-[#1A1A2E] mt-8 mb-4">Prerequisites</h2>
      <ul className="list-disc list-inside text-[#5A5A7A] space-y-1 mb-6">
        <li>Go 1.24 or later</li>
        <li>A running Prometheus instance (optional for local testing)</li>
        <li>kubectl (optional, for Kubernetes features)</li>
      </ul>

      <h2 className="text-xl font-bold text-[#1A1A2E] mt-8 mb-4">Install</h2>
      <div className="code-block mb-6">
        <span className="text-[#6C7086]"># macOS</span>{"\n"}
        <span className="text-[#94E2D5]">brew install</span> <span className="text-[#A6E3A1]">burnless</span>{"\n\n"}
        <span className="text-[#6C7086]"># or build from source</span>{"\n"}
        <span className="text-[#94E2D5]">git clone</span> <span className="text-[#A6E3A1]">https://github.com/Custos-com/Burnless.git</span>{"\n"}
        <span className="text-[#94E2D5]">cd</span> <span className="text-[#A6E3A1]">burnless</span>{"\n"}
        <span className="text-[#94E2D5]">make build</span>
      </div>

      <h2 className="text-xl font-bold text-[#1A1A2E] mt-8 mb-4">Create your first sre.yaml</h2>
      <div className="code-block mb-6">
        <span className="text-[#94E2D5]">burnless init</span>{"\n\n"}
        <span className="text-[#6C7086]">? Service name: payments-api</span>{"\n"}
        <span className="text-[#6C7086]">? Team: platform-engineering</span>{"\n"}
        <span className="text-[#6C7086]">? SLO target: 99.9%</span>{"\n"}
        <span className="text-[#A6E3A1]">✓ Created sre.yaml</span>
      </div>

      <h2 className="text-xl font-bold text-[#1A1A2E] mt-8 mb-4">Validate your config</h2>
      <div className="code-block mb-6">
        <span className="text-[#94E2D5]">burnless validate</span>{"\n"}
        <span className="text-[#A6E3A1]">✓ sre.yaml is valid</span>
      </div>

      <h2 className="text-xl font-bold text-[#1A1A2E] mt-8 mb-4">Start the agent</h2>
      <div className="code-block mb-6">
        <span className="text-[#94E2D5]">burnless agent</span>{"\n"}
        <span className="text-[#A6E3A1]">→ Watching SLOs for payments-api...</span>{"\n"}
        <span className="text-[#A6E3A1]">→ Polling Prometheus every 60s</span>
      </div>

      <div className="bg-[#E1F5EE] border border-[#5DCAA5] rounded-xl p-6 mt-8">
        <p className="font-semibold text-[#085041] mb-1">You're all set!</p>
        <p className="text-sm text-[#0F6E56]">The agent is now watching your SLOs. If burn rate exceeds 14.4× it will run your runbook automatically and notify Slack before paging anyone.</p>
      </div>
    </div>
  );
}

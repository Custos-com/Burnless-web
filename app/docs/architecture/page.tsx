export default function Architecture() {
  const layers = [
    { name: "Layer 1 — Engineer tools", color: "#7C3AED", bg: "#EDE9FE", files: "cmd/burnless, cmd/agent, cmd/controller", desc: "CLI, agent daemon, and Kubernetes operator. Thin wrappers — all logic lives in internal/." },
    { name: "Layer 2 — Core platform", color: "#0F6E56", bg: "#E1F5EE", files: "internal/slo, internal/config, internal/runbook, internal/metrics, internal/notify, internal/toil", desc: "All business logic. Pure Go packages with no knowledge of each other. Each has one job." },
    { name: "Layer 3 — External integrations", color: "#854F0B", bg: "#FAEEDA", files: "Prometheus, Grafana, Slack, PagerDuty, Kubernetes", desc: "All behind Go interfaces. New integrations = new file, no core changes needed." },
  ];
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Contributing</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Architecture</h1>
      <p className="text-lg text-[#5A5A7A] mb-8">How all the pieces fit together.</p>
      <div className="flex flex-col gap-4 mb-8">
        {layers.map((l) => (
          <div key={l.name} style={{ borderLeft: `4px solid ${l.color}`, background: l.bg }} className="rounded-xl p-5">
            <p className="font-bold text-[#1A1A2E] mb-1">{l.name}</p>
            <code className="text-xs text-[#5A5A7A] block mb-2">{l.files}</code>
            <p className="text-sm text-[#5A5A7A]">{l.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Key design decisions</h2>
      {[
        ["sre.yaml is the single source of truth", "All config in Git. No database for config. Every change is a PR."],
        ["internal/ packages have no knowledge of each other", "internal/slo knows nothing about internal/metrics. They communicate through interfaces."],
        ["Interfaces for everything external", "Prometheus, Grafana, Slack are behind Go interfaces. Swap backends without touching core logic."],
        ["CLI is thin, internal/ is thick", "cmd/burnless/main.go is 12 lines. All logic in internal/. Same logic powers CLI, agent, and SaaS API."],
      ].map(([title, desc]) => (
        <div key={title as string} className="bg-white border border-[#EDE5D8] rounded-xl p-5 mb-3">
          <p className="font-semibold text-[#1A1A2E] mb-1">{title}</p>
          <p className="text-sm text-[#5A5A7A]">{desc}</p>
        </div>
      ))}
      <p className="text-sm text-[#5A5A7A] mt-6">
        For the full architecture document, see the{" "}
        <a href="https://github.com/Custos-com/Burnless/blob/main/docs/security.md" className="text-[#7C3AED] underline">docs/ folder on GitHub</a>.
      </p>
    </div>
  );
}

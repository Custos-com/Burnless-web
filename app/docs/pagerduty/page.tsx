export default function Page() {
  const name = "pagerduty";
  const titles: Record<string, string> = {
    prometheus: "Prometheus", grafana: "Grafana", slack: "Slack", pagerduty: "PagerDuty"
  };
  const descs: Record<string, string> = {
    prometheus: "Connect Burnless to your Prometheus instance to read SLO metrics.",
    grafana: "Auto-generate Grafana dashboards from your sre.yaml definitions.",
    slack: "Send burn rate alerts and runbook approval requests to Slack.",
    pagerduty: "Route on-call alerts and configure escalation policies from sre.yaml.",
  };
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Integrations</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">{titles[name]}</h1>
      <p className="text-lg text-[#5A5A7A] mb-8">{descs[name]}</p>
      <div className="bg-[#FAEEDA] border border-[#EF9F27] rounded-xl p-5 mb-8">
        <p className="font-semibold text-[#412402] mb-1">🚧 Documentation in progress</p>
        <p className="text-sm text-[#854F0B]">This integration is being built. <a href="https://github.com/Custos-com/Burnless/issues" className="underline">Track progress on GitHub</a>.</p>
      </div>
      <div className="bg-white border border-[#EDE5D8] rounded-xl p-6">
        <p className="font-semibold text-[#1A1A2E] mb-3">Coming in the sre.yaml</p>
        <div className="code-block text-xs">
          <pre className="text-[#94E2D5]"># pagerduty config in sre.yaml — coming soon</pre>
        </div>
      </div>
    </div>
  );
}

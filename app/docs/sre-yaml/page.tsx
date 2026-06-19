export default function SreYamlRef() {
  const fields = [
    { field: "service", type: "string", required: true, desc: "Name of your service. Used in notifications and dashboards.", example: "payments-api" },
    { field: "team", type: "string", required: true, desc: "Team responsible for this service.", example: "platform-engineering" },
    { field: "slos", type: "list", required: true, desc: "List of SLO definitions. At least one required.", example: "See below" },
    { field: "slos[].name", type: "string", required: true, desc: "Name of the SLO.", example: "availability" },
    { field: "slos[].target", type: "float", required: true, desc: "Target percentage. Must be between 0 and 100.", example: "99.9" },
    { field: "slos[].window", type: "string", required: true, desc: "Rolling window for the SLO calculation.", example: "30d" },
    { field: "error_budget.burn_rate_alerts", type: "list", required: false, desc: "Burn rate thresholds that trigger actions.", example: "See below" },
    { field: "burn_rate_alerts[].rate", type: "float", required: true, desc: "Burn rate multiplier. 14.4 = critical (budget gone in 2 days).", example: "14.4" },
    { field: "burn_rate_alerts[].severity", type: "string", required: true, desc: "critical or warning.", example: "critical" },
    { field: "burn_rate_alerts[].remediate", type: "string", required: false, desc: "Name of the runbook to execute.", example: "scale-up" },
    { field: "runbooks", type: "map", required: false, desc: "Named runbooks with executable steps.", example: "See below" },
    { field: "runbooks[].mode", type: "string", required: false, desc: "auto (execute immediately) or semi-auto (post to Slack for approval).", example: "auto" },
    { field: "runbooks[].steps", type: "list", required: true, desc: "Shell commands to execute in order.", example: "kubectl scale deploy/..." },
    { field: "oncall.provider", type: "string", required: false, desc: "On-call provider. Currently: pagerduty.", example: "pagerduty" },
    { field: "dashboards.auto_generate", type: "bool", required: false, desc: "Auto-generate Grafana dashboard from SLO definitions.", example: "true" },
  ];
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Reference</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">sre.yaml reference</h1>
      <p className="text-lg text-[#5A5A7A] mb-8">Every field in the sre.yaml schema explained.</p>
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Full example</h2>
      <div className="code-block mb-8 text-xs">
        <pre>{`service: payments-api
team: platform-engineering

slos:
  - name: availability
    target: 99.9
    window: 30d
    indicator:
      metric: http_requests_total
      good_filter: 'status!~"5.."'

error_budget:
  burn_rate_alerts:
    - rate: 14.4
      severity: critical
      remediate: scale-up
      notify:
        slack: "#incidents"
        pagerduty: your-routing-key
    - rate: 6.0
      severity: warning
      notify:
        slack: "#sre-warnings"

runbooks:
  scale-up:
    mode: auto
    steps:
      - kubectl scale deploy/payments --replicas=+2
      - wait: 60s
      - assert: availability > 99.9

oncall:
  provider: pagerduty
  escalation_minutes: 10
  notify_slack: "#sre-incidents"

dashboards:
  provider: grafana
  auto_generate: true`}</pre>
      </div>
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Field reference</h2>
      <div className="bg-white border border-[#EDE5D8] rounded-xl overflow-hidden">
        <div className="grid grid-cols-4 bg-[#F5F0EB] border-b border-[#EDE5D8] px-4 py-2">
          {["Field", "Type", "Required", "Description"].map(h => (
            <p key={h} className="text-xs font-semibold uppercase tracking-widest text-[#9898B8]">{h}</p>
          ))}
        </div>
        {fields.map((f, i) => (
          <div key={f.field} className={`grid grid-cols-4 px-4 py-3 border-b border-[#EDE5D8] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FDFAF6]"}`}>
            <code className="text-xs text-[#7C3AED] font-mono">{f.field}</code>
            <span className="text-xs text-[#5A5A7A]">{f.type}</span>
            <span className={`text-xs font-medium ${f.required ? "text-[#F97316]" : "text-[#9898B8]"}`}>{f.required ? "yes" : "no"}</span>
            <span className="text-xs text-[#5A5A7A]">{f.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

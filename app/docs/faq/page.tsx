export default function FAQ() {
  const faqs = [
    {
      category: "Safety & reliability",
      icon: "🚨",
      questions: [
        {
          q: "Can Burnless make incidents worse?",
          a: "This is the most important question — and we designed around it. Burnless has three modes: dry-run (detects, never acts), semi-auto (posts proposed steps to Slack for human approval before executing), and auto (executes immediately). Enterprise teams start with semi-auto. Auto mode is opt-in per runbook, and you define blast radius limits in sre.yaml — maximum replicas, allowed operations, off-limits services. Burnless cannot exceed what you declare."
        },
        {
          q: "What stops it from triggering the wrong runbook during a complex failure?",
          a: "Each burn_rate_alert maps to one specific named runbook. Burnless does not infer intent — it only runs what you declared. If the runbook\'s assert step fails (e.g. availability is still below target after scaling), it stops and escalates to PagerDuty instead of retrying blindly. We prefer doing nothing over doing the wrong thing."
        },
        {
          q: "Is Burnless rule-based or does it understand system context?",
          a: "Currently rule-based via sre.yaml. This is intentional — SRE teams should not trust black-box automation they cannot inspect. Every decision Burnless makes is traceable to a specific rule in your sre.yaml. In Phase 2 we are adding context-aware suggestions (not autonomous actions) that flag when a runbook may not address the root cause."
        },
      ]
    },
    {
      category: "Control & approval flow",
      icon: "🔐",
      questions: [
        {
          q: "Who approves actions before they run?",
          a: "In semi-auto mode, Burnless posts the proposed runbook steps to a Slack channel with Approve and Reject buttons. The on-call engineer reviews and approves. Auto mode requires explicit opt-in in sre.yaml per runbook. No runbook ever runs automatically unless you have written mode: auto in that specific runbook definition."
        },
        {
          q: "Can we enforce human-in-the-loop for all production changes?",
          a: "Yes. Set mode: semi-auto on every runbook. Burnless will never touch production without a human approval. You can also restrict which operations are allowed — for example, allow scale-up but never allow scale-down or database operations."
        },
        {
          q: "How does RBAC work?",
          a: "In the open source CLI, RBAC is managed by your existing Git access controls — sre.yaml changes require a PR and reviewer approval, same as code. In the enterprise SaaS tier, role-based access control (Admin, Editor, Viewer) is enforced at the API level. SAML/SSO integration means Burnless inherits your organisation\'s existing access policies."
        },
      ]
    },
    {
      category: "Data flow & security",
      icon: "🔒",
      questions: [
        {
          q: "What data does Burnless actually access?",
          a: "Burnless only reads metric numbers from Prometheus (e.g. 99.85% uptime) and executes the shell commands you define in sre.yaml. It never accesses your database, application code, customer records, or any business data. The only credentials it holds are your Prometheus URL, Slack webhook, and PagerDuty routing key — all stored in environment variables, never in sre.yaml."
        },
        {
          q: "How does data flow through the system?",
          a: "Your service emits metrics → Prometheus scrapes them → Burnless agent queries Prometheus every 60 seconds → compares against SLO targets in sre.yaml → if burn rate threshold crossed, runs the declared runbook → logs every action with timestamp, rule triggered, and outcome. Nothing is stored outside your infrastructure in the open source tier."
        },
        {
          q: "Where are secrets stored?",
          a: "Never in sre.yaml and never in Git. Credentials (Prometheus URL, Slack webhook, PagerDuty key) are passed as environment variables. In the enterprise SaaS tier they are stored encrypted at rest (AES-256) in an isolated vault per customer."
        },
      ]
    },
    {
      category: "Integrations",
      icon: "🔄",
      questions: [
        {
          q: "We already use Grafana, Datadog, and PagerDuty. Does Burnless replace them?",
          a: "No — Burnless sits on top of your existing tools and connects them. Prometheus stays as your metrics source. Grafana stays as your dashboard. PagerDuty stays as your on-call platform. Burnless adds the coordination layer: it reads from Prometheus, auto-generates the Grafana dashboard from sre.yaml, and configures PagerDuty escalation policies. You keep your existing tools; Burnless makes them talk to each other."
        },
        {
          q: "How hard is migration from our existing setup?",
          a: "You do not migrate — you add. Run burnless validate on a new sre.yaml alongside your existing setup. Start in dry-run mode so Burnless detects but never acts. When you trust the detections, enable semi-auto for one service. Migration is incremental and reversible. Delete sre.yaml and Burnless has zero footprint."
        },
        {
          q: "Can we use Datadog instead of Prometheus?",
          a: "Prometheus is the supported metrics source in v0.1.0. Datadog support is on the roadmap for Phase 2. The metrics layer is behind a Go interface — adding a new source means writing one new file without touching core logic."
        },
      ]
    },
    {
      category: "Auditability & compliance",
      icon: "🧾",
      questions: [
        {
          q: "Is every action traceable for compliance?",
          a: "Yes. Every action Burnless takes is logged with: timestamp, which SLO triggered it, which burn rate threshold was crossed, which runbook ran, each step executed, whether it succeeded or failed, and who approved it (in semi-auto mode). Logs are append-only. In the enterprise tier they are exportable for SOC 2 and audit purposes."
        },
        {
          q: "We are in fintech/healthcare — do you have compliance certifications?",
          a: "GDPR compliance is built in by design — no PII is processed. SOC 2 Type II is planned for Q4 2026. HIPAA support is available on request for the enterprise tier. ISO 27001 is planned for Q1 2027."
        },
        {
          q: "Can we see exactly why a decision was made?",
          a: "Yes. Every runbook execution includes a decision record: the exact sre.yaml rule that triggered it, the metric value that crossed the threshold, the burn rate calculated, and the window of data used. There is no hidden logic — if you want to understand a decision, you read the sre.yaml rule that produced it."
        },
      ]
    },
    {
      category: "Long-term trust",
      icon: "💰",
      questions: [
        {
          q: "What happens if the Burnless project stops being maintained?",
          a: "Burnless is Apache 2.0 open source. If the project stops, you keep working software you can fork, maintain, and modify. Your sre.yaml files are plain YAML — no vendor lock-in. The runbooks are shell commands — they run without Burnless. We have also committed in the BSL license that all SaaS code converts to Apache 2.0 after 4 years."
        },
        {
          q: "Is Burnless stable enough for production?",
          a: "v0.1.0 is an initial release. We recommend starting in dry-run or semi-auto mode, on non-critical services first, to build confidence before enabling auto mode on production. The SLO math engine (internal/slo) and config parser (internal/config) are fully tested. The agent main loop is in active development."
        },
        {
          q: "We already have PagerDuty + Runbooks + custom scripts. Why change?",
          a: "You do not have to change anything. Burnless\'s value is not replacing those tools — it is making the configuration of all of them reviewable in Git. Right now your Runbooks are in Confluence, your alerts are in Grafana UI, and your PagerDuty policies are configured manually. Burnless puts all of that in one sre.yaml that is versioned, reviewed in PRs, and deployed from CI/CD. The question is not \'should we replace our tools\' but \'should our reliability config be in Git like our application code?\'"
        },
      ]
    },
  ];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Documentation</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Frequently asked questions</h1>
      <p className="text-lg text-[#5A5A7A] mb-10">
        Honest answers to the questions SRE teams and enterprises ask before adopting Burnless.
      </p>

      <div className="flex flex-col gap-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{section.icon}</span>
              <h2 className="text-xl font-bold text-[#1A1A2E]">{section.category}</h2>
            </div>
            <div className="flex flex-col gap-4">
              {section.questions.map((item) => (
                <div key={item.q} className="bg-white border border-[#EDE5D8] rounded-xl p-6">
                  <p className="font-semibold text-[#1A1A2E] mb-3">{item.q}</p>
                  <p className="text-sm text-[#5A5A7A] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#1A1A2E] rounded-xl p-8 text-center">
        <p className="font-bold text-white text-xl mb-2">Still have questions?</p>
        <p className="text-[#9898B8] text-sm mb-6">Open a GitHub discussion or reach out directly.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://github.com/Custos-com/Burnless/discussions"
            target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-[#1A1A2E] text-sm font-medium rounded-lg hover:bg-[#F5F0EB] transition-colors">
            GitHub Discussions
          </a>
          <a href="mailto:hello@burnless.dev"
            className="px-5 py-2.5 border border-[#2D2D4A] text-white text-sm font-medium rounded-lg hover:bg-[#2D2D4A] transition-colors">
            Email us
          </a>
        </div>
      </div>
    </div>
  );
}

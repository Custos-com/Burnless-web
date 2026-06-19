import Link from "next/link";
import WaitlistFormClient from "./components/WaitlistForm";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
      </svg>
    ),
    title: "SLO tracking",
    desc: "Define uptime targets in sre.yaml. Burnless tracks error budget in real time.",
    accent: "text-flame-500 bg-flame-500/10",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Burn rate detection",
    desc: "Alerts before your budget is gone. 14.4× rate = 2 days left.",
    accent: "text-purple-500 bg-purple-100",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    title: "Executable runbooks",
    desc: "Auto-scale pods, restart services. Steps defined in sre.yaml.",
    accent: "text-teal-600 bg-teal-100",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
      </svg>
    ),
    title: "Alerts & notifications",
    desc: "Slack and PagerDuty built in. Notify the right people at the right time.",
    accent: "text-flame-500 bg-flame-500/10",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
      </svg>
    ),
    title: "Auto remediation",
    desc: "Fix incidents before engineers are paged. Configurable semi-auto mode.",
    accent: "text-purple-500 bg-purple-100",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: "Config as code",
    desc: "Every change is a PR. Full audit trail. Rollback in seconds.",
    accent: "text-teal-600 bg-teal-100",
  },
];

const steps = [
  { title: "Install", code: "brew install burnless" },
  { title: "Define your SLO", code: "burnless init" },
  { title: "Validate", code: "burnless validate" },
  { title: "Deploy", code: "burnless agent" },
];

const comparisons = [
  { thing: "SLOs", before: "Defined in Datadog UI — not reviewable in Git", after: "Declared in sre.yaml — version controlled" },
  { thing: "Runbooks", before: "Written in Confluence — stale, nobody runs them", after: "Executable steps in sre.yaml — always up to date" },
  { thing: "Alerts", before: "Configured manually in Grafana — drift between environments", after: "Generated from sre.yaml — consistent everywhere" },
  { thing: "On-call", before: "Managed in PagerDuty UI — no audit trail", after: "Declared in sre.yaml — every change reviewed in a PR" },
  { thing: "Incidents", before: "Engineer paged at 3am", after: "Auto-remediated before paging anyone" },
];

const GH_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ARROW = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function HomePage() {
  return (
    <main className="pt-16">

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-14">

          {/* Left copy */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-cream-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 inline-block animate-pulse"></span>
              <span className="text-xs text-ink-500 font-medium">v0.1.0 now available — open source</span>
            </div>

            <h1 className="text-5xl lg:text-[3.75rem] font-bold text-ink-900 leading-[1.08] tracking-tight mb-6">
              SRE automation<br/>
              <span className="text-flame-500">before</span> alerts fire.
            </h1>

            <p className="text-lg text-ink-500 leading-relaxed mb-8">
              One{" "}
              <code className="text-purple-500 bg-purple-100 px-1.5 py-0.5 rounded font-mono text-sm">sre.yaml</code>
              {" "}file. Define everything. Automate anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink-900 text-cream-50 font-semibold hover:bg-ink-700 transition-colors text-sm"
              >
                Get started now {ARROW}
              </Link>
              <a
                href="https://github.com/Custos-com/Burnless"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cream-200 bg-white text-ink-900 font-semibold hover:bg-cream-100 transition-colors text-sm shadow-sm"
              >
                {GH_ICON} View on GitHub
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-5">
              {[
                { value: "32", label: "open issues" },
                { value: "Apache 2.0", label: "license" },
                { value: "Go", label: "built with" },
              ].map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center gap-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-flame-500">{stat.value}</span>
                    <span className="text-xs text-ink-300">{stat.label}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-4 bg-cream-200" />}
                </div>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div className="flex-1 w-full max-w-lg lg:pt-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#1E293B]">
              {/* Titlebar */}
              <div className="bg-[#131825] flex items-center gap-2 px-4 py-3 border-b border-[#1E293B]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]"/>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"/>
                <span className="w-3 h-3 rounded-full bg-[#27C93F]"/>
                <span className="ml-2 text-[#6C7086] text-xs font-mono">sre.yaml</span>
              </div>
              {/* Code */}
              <div className="bg-[#1E293B] p-6 font-mono text-[13px] leading-[1.8] overflow-x-auto">
                <pre
                  dangerouslySetInnerHTML={{
                    __html: [
                      `<span style="color:#94E2D5">service</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">payments-api</span>`,
                      `<span style="color:#94E2D5">team</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">platform-engineering</span>`,
                      ``,
                      `<span style="color:#94E2D5">slos</span><span style="color:#cdd6f4">:</span>`,
                      `  <span style="color:#cdd6f4">- </span><span style="color:#94E2D5">name</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">availability</span>`,
                      `    <span style="color:#94E2D5">target</span><span style="color:#cdd6f4">: </span><span style="color:#FAB387">99.9</span>`,
                      `    <span style="color:#94E2D5">window</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">30d</span>`,
                      ``,
                      `<span style="color:#94E2D5">error_budget</span><span style="color:#cdd6f4">:</span>`,
                      `  <span style="color:#94E2D5">burn_rate_alerts</span><span style="color:#cdd6f4">:</span>`,
                      `    <span style="color:#cdd6f4">- </span><span style="color:#94E2D5">rate</span><span style="color:#cdd6f4">: </span><span style="color:#FAB387">14.4x</span>`,
                      `      <span style="color:#94E2D5">severity</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">critical</span>`,
                      `      <span style="color:#94E2D5">remediate</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">scale-up</span>`,
                      ``,
                      `<span style="color:#94E2D5">runbooks</span><span style="color:#cdd6f4">:</span>`,
                      `  <span style="color:#94E2D5">scale-up</span><span style="color:#cdd6f4">:</span>`,
                      `    <span style="color:#94E2D5">mode</span><span style="color:#cdd6f4">: </span><span style="color:#A6E3A1">auto</span>`,
                      `    <span style="color:#94E2D5">steps</span><span style="color:#cdd6f4">:</span>`,
                      `      <span style="color:#cdd6f4">- </span><span style="color:#F9E2AF">kubectl scale deploy/payments</span>`,
                      `        <span style="color:#F9E2AF">  --replicas=+2</span>`,
                      ``,
                      `<span style="color:#6C7086"># Burnless detects → fixes → notifies</span>`,
                      `<span style="color:#6C7086"># No 3am pages.</span>`,
                    ].join("\n"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAITLIST: BURNLESS CLOUD ── */}
      <section className="bg-cream-100 border-y border-cream-200 py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-flame-500 mb-2">
              Coming soon
            </p>
            <h2 className="text-2xl font-bold text-ink-900 mb-2 tracking-tight">
              Burnless Cloud
            </h2>
            <p className="text-ink-500 text-sm leading-relaxed">
              A hosted version of Burnless — no cluster to run, no infra to manage.
              Join the waitlist to get early access.
            </p>
          </div>
          <WaitlistFormClient />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white border-y border-cream-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-300 mb-3 text-center">
            Everything you need
          </p>
          <h2 className="text-3xl font-bold text-ink-900 text-center mb-14">SRE as code, end to end</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-cream-50 border border-cream-200 rounded-2xl p-6 hover:border-flame-500/30 hover:shadow-sm transition-all group"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${f.accent}`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-ink-900 mb-1.5 text-sm">{f.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-300 mb-3 text-center">The problem</p>
        <h2 className="text-3xl font-bold text-ink-900 text-center mb-14">Before and after Burnless</h2>
        <div className="rounded-2xl overflow-hidden border border-cream-200 bg-white">
          {/* Header */}
          <div className="grid grid-cols-3 bg-cream-100 border-b border-cream-200">
            <div className="px-5 py-3" />
            <div className="px-5 py-3 border-l border-cream-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400">Before</span>
            </div>
            <div className="px-5 py-3 border-l border-cream-200">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">With Burnless</span>
            </div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.thing}
              className={`grid grid-cols-3 border-b border-cream-200 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-cream-50"}`}
            >
              <div className="px-5 py-4 text-sm font-semibold text-ink-900">{row.thing}</div>
              <div className="px-5 py-4 text-sm text-ink-300 border-l border-cream-200">{row.before}</div>
              <div className="px-5 py-4 text-sm text-ink-700 border-l border-cream-200 flex items-start gap-2">
                <span className="text-teal-600 mt-0.5 flex-shrink-0 font-bold">✓</span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white border-y border-cream-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-300 mb-3 text-center">
            Get running in minutes
          </p>
          <h2 className="text-3xl font-bold text-ink-900 text-center mb-14">Up and running in 4 steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-ink-900 text-cream-50 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-cream-200" />
                  )}
                </div>
                <h3 className="font-semibold text-ink-900 mb-3 text-sm">{s.title}</h3>
                <div className="bg-[#1E293B] rounded-xl py-3 px-4 font-mono text-[13px]">
                  <span className="text-[#94E2D5]">$ </span>
                  <span className="text-[#A6E3A1]">{s.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN SOURCE BANNER ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-ink-900 rounded-3xl px-10 py-16 md:px-20 text-center relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)"}}
          />
          <div className="relative">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-ink-700 items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-flame-500">
                <path d="M12 2C9 7 6 9 6 13a6 6 0 0012 0c0-4-3-6-6-11z" fill="currentColor"/>
                <path d="M12 13c-1 2 0 4 2 4" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Free and open source. Forever.
            </h2>
            <p className="text-ink-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              CLI, agent, and Kubernetes operator under AGPLv3.
              SSO, RBAC, and all core features included. No paywalls.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/Custos-com/Burnless"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-ink-900 font-semibold hover:bg-cream-100 transition-colors text-sm"
              >
                {GH_ICON} Star on GitHub
              </a>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-ink-700 text-white font-semibold hover:bg-ink-700 transition-colors text-sm"
              >
                Read the docs {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTRIBUTORS ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-300 mb-3">Join the community</p>
          <h2 className="text-3xl font-bold text-ink-900 mb-4">32 open issues ready for contributors</h2>
          <p className="text-ink-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            From good first issues to core infrastructure. Every contribution welcome.
          </p>
          <a
            href="https://github.com/Custos-com/Burnless/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cream-200 bg-white text-ink-900 font-semibold hover:bg-cream-100 transition-colors text-sm shadow-sm"
          >
            Browse good first issues
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </section>

    </main>
  );
}
import Link from "next/link";

const features = [
  { icon: "🎯", title: "SLO tracking", desc: "Define uptime targets in sre.yaml. Burnless tracks error budget in real time." },
  { icon: "📈", title: "Burn rate detection", desc: "Alerts before your budget is gone. 14.4× rate = 2 days left." },
  { icon: ">_", title: "Executable runbooks", desc: "Auto-scale pods, restart services. Steps defined in sre.yaml." },
  { icon: "🔔", title: "Alerts & notifications", desc: "Slack and PagerDuty built in. Notify the right people at the right time." },
  { icon: "🔄", title: "Auto remediation", desc: "Fix incidents before engineers are paged. Configurable semi-auto mode." },
  { icon: "🔒", title: "Config as code", desc: "Every change is a PR. Full audit trail. Rollback in seconds." },
];

const steps = [
  { step: "01", title: "Install", code: "brew install burnless" },
  { step: "02", title: "Define your SLO", code: "burnless init" },
  { step: "03", title: "Validate", code: "burnless validate" },
  { step: "04", title: "Deploy & watch", code: "burnless agent" },
];

const comparisons = [
  { thing: "SLOs", before: "Defined in Datadog UI — not reviewable in Git", after: "Declared in sre.yaml — version controlled" },
  { thing: "Runbooks", before: "Written in Confluence — stale, nobody runs them", after: "Executable steps in sre.yaml — always up to date" },
  { thing: "Alerts", before: "Configured manually in Grafana — drift between environments", after: "Generated from sre.yaml — consistent everywhere" },
  { thing: "On-call", before: "Managed in PagerDuty UI — no audit trail", after: "Declared in sre.yaml — every change reviewed in a PR" },
  { thing: "Incidents", before: "Engineer paged at 3am", after: "Auto-remediated before paging anyone" },
];

export default function HomePage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white border border-[#EDE5D8] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0F6E56] inline-block"></span>
              <span className="text-xs text-[#5A5A7A]">v0.1.0 now available — open source</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight tracking-tight mb-4">
              SRE automation<br/>
              <span className="text-[#F97316]">before</span> alerts fire.
            </h1>
            <p className="text-xl text-[#5A5A7A] leading-relaxed mb-3">
              One <code className="text-[#7C3AED] bg-[#EDE9FE] px-1.5 py-0.5 rounded text-base font-mono">sre.yaml</code> file.
            </p>
            <p className="text-xl text-[#5A5A7A] leading-relaxed mb-8">
              Define everything. Automate anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/docs/getting-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1A1A2E] text-white font-medium hover:bg-[#2D2D4A] transition-colors">
                Get started free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://github.com/Custos-com/Burnless" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#EDE5D8] bg-white text-[#1A1A2E] font-medium hover:bg-[#F5F0EB] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                View on GitHub
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-1.5">
                <span className="text-[#F97316] font-bold text-lg">32</span>
                <span className="text-xs text-[#9898B8]">open issues</span>
              </div>
              <div className="w-px h-4 bg-[#EDE5D8]"></div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#F97316] font-bold text-lg">Apache 2.0</span>
                <span className="text-xs text-[#9898B8]">license</span>
              </div>
              <div className="w-px h-4 bg-[#EDE5D8]"></div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#F97316] font-bold text-lg">Go</span>
                <span className="text-xs text-[#9898B8]">built with</span>
              </div>
            </div>
          </div>

          {/* CODE BLOCK */}
          <div className="flex-1 w-full max-w-lg">
            <div className="code-block shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2D3748]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                <span className="ml-2 text-[#6C7086] text-xs">sre.yaml</span>
              </div>
              <pre className="text-sm leading-relaxed whitespace-pre overflow-x-auto">{`<span class="key">service</span><span style="color:#cdd6f4">: </span><span class="val">payments-api</span>
<span class="key">team</span><span style="color:#cdd6f4">: </span><span class="val">platform-engineering</span>

<span class="key">slos</span><span style="color:#cdd6f4">:</span>
  <span style="color:#cdd6f4">- </span><span class="key">name</span><span style="color:#cdd6f4">: </span><span class="val">availability</span>
    <span class="key">target</span><span style="color:#cdd6f4">: </span><span class="num">99.9</span>
    <span class="key">window</span><span style="color:#cdd6f4">: </span><span class="val">30d</span>

<span class="key">error_budget</span><span style="color:#cdd6f4">:</span>
  <span class="key">burn_rate_alerts</span><span style="color:#cdd6f4">:</span>
    <span style="color:#cdd6f4">- </span><span class="key">rate</span><span style="color:#cdd6f4">: </span><span class="num">14.4x</span>
      <span class="key">severity</span><span style="color:#cdd6f4">: </span><span class="val">critical</span>
      <span class="key">remediate</span><span style="color:#cdd6f4">: </span><span class="val">scale-up</span>

<span class="key">runbooks</span><span style="color:#cdd6f4">:</span>
  <span class="key">scale-up</span><span style="color:#cdd6f4">:</span>
    <span class="key">mode</span><span style="color:#cdd6f4">: </span><span class="val">auto</span>
    <span class="key">steps</span><span style="color:#cdd6f4">:</span>
      <span style="color:#cdd6f4">- </span><span class="str">kubectl scale deploy/payments</span>
        <span class="str">  --replicas=+2</span>

<span class="cmt"># Burnless detects → fixes → notifies</span>
<span class="cmt"># No 3am pages.</span>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white border-y border-[#EDE5D8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-4 text-center">Everything you need</p>
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-12">SRE as code, end to end</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#FDFAF6] border border-[#EDE5D8] rounded-xl p-6 hover:border-[#F97316]/40 transition-colors">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-[#1A1A2E] mb-2">{f.title}</h3>
                <p className="text-sm text-[#5A5A7A] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-4 text-center">The problem</p>
        <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-12">Before and after Burnless</h2>
        <div className="bg-white border border-[#EDE5D8] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#F5F0EB] border-b border-[#EDE5D8]">
            <div className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#9898B8]"></div>
            <div className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#A32D2D] border-l border-[#EDE5D8]">Before</div>
            <div className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#0F6E56] border-l border-[#EDE5D8]">With Burnless</div>
          </div>
          {comparisons.map((row, i) => (
            <div key={row.thing} className={`grid grid-cols-3 border-b border-[#EDE5D8] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FDFAF6]"}`}>
              <div className="px-6 py-4 text-sm font-medium text-[#1A1A2E]">{row.thing}</div>
              <div className="px-6 py-4 text-sm text-[#9898B8] border-l border-[#EDE5D8]">{row.before}</div>
              <div className="px-6 py-4 text-sm text-[#1A1A2E] border-l border-[#EDE5D8] flex items-start gap-2">
                <span className="text-[#0F6E56] mt-0.5 flex-shrink-0">✓</span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white border-y border-[#EDE5D8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-4 text-center">Get running in minutes</p>
          <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-12">Up and running in 4 steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-xs font-mono text-[#F97316] mb-3 font-bold">{s.step}</div>
                <h3 className="font-semibold text-[#1A1A2E] mb-3">{s.title}</h3>
                <div className="code-block text-sm py-3 px-4">
                  <span className="text-[#94E2D5]">$</span> <span className="text-[#A6E3A1]">{s.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN SOURCE BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#1A1A2E] rounded-2xl p-10 md:p-16 text-center">
          <div className="text-4xl mb-6">🔥</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Free and open source. Forever.</h2>
          <p className="text-[#9898B8] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            CLI, agent, and Kubernetes operator are free under AGPLv3.
            SSO, RBAC, and all features included. No paywalls on the core tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Custos-com/Burnless" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1A1A2E] font-medium hover:bg-[#F5F0EB] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              Star on GitHub
            </a>
            <Link href="/docs/getting-started"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#2D2D4A] text-white font-medium hover:bg-[#2D2D4A] transition-colors">
              Read the docs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTRIBUTORS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-4">Join the community</p>
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">32 open issues ready for contributors</h2>
          <p className="text-[#5A5A7A] mb-8 max-w-lg mx-auto">
            From good first issues to core infrastructure. Every contribution welcome.
          </p>
          <a href="https://github.com/Custos-com/Burnless/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#EDE5D8] bg-white text-[#1A1A2E] font-medium hover:bg-[#F5F0EB] transition-colors">
            Browse good first issues
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </section>

    </main>
  );
}

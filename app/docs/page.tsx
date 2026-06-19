
import Link from "next/link";

const sections = [

  {

    title: "Getting started",

    links: [

      { href: "/docs/getting-started", label: "Installation", desc: "Install Burnless and run your first SLO" },

      { href: "/docs/quick-start", label: "Quick start", desc: "From zero to auto-remediation in 5 minutes" },

    ]

  },

  {

    title: "Reference",

    links: [

      { href: "/docs/sre-yaml", label: "sre.yaml reference", desc: "Every field explained with examples" },

      { href: "/docs/cli", label: "CLI reference", desc: "All commands and flags" },

    ]

  },

  {

    title: "Integrations",

    links: [

      { href: "/docs/prometheus", label: "Prometheus", desc: "Connect your metrics source" },

      { href: "/docs/grafana", label: "Grafana", desc: "Auto-generate dashboards from sre.yaml" },

      { href: "/docs/slack", label: "Slack", desc: "Send notifications and approval requests" },

      { href: "/docs/pagerduty", label: "PagerDuty", desc: "Route on-call alerts" },

    ]

  },

  {

    title: "Contributing",

    links: [

      { href: "/docs/contributing", label: "How to contribute", desc: "Set up your dev environment" },

      { href: "/docs/architecture", label: "Architecture", desc: "How all the pieces fit together" },

    ]

  },

];

export default function DocsIndex() {

  return (

    <div>

      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Documentation</p>

      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2">Burnless docs</h1>

      <p className="text-lg text-[#5A5A7A] mb-10 leading-relaxed">

        Everything you need to go from install to auto-remediation.

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {sections.map((section) => (

          <div key={section.title} className="bg-white border border-[#EDE5D8] rounded-xl p-6">

            <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-4">{section.title}</p>

            <div className="flex flex-col gap-3">

              {section.links.map((link) => (

                <Link key={link.href} href={link.href}

                  className="group flex items-start justify-between hover:bg-[#F5F0EB] rounded-lg p-2 -mx-2 transition-colors">

                  <div>

                    <p className="text-sm font-medium text-[#1A1A2E] group-hover:text-[#F97316] transition-colors">{link.label}</p>

                    <p className="text-xs text-[#9898B8] mt-0.5">{link.desc}</p>

                  </div>

                  <svg className="w-4 h-4 text-[#9898B8] mt-0.5 flex-shrink-0 group-hover:text-[#F97316] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>

                </Link>

              ))}

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 bg-[#1A1A2E] rounded-xl p-6 flex items-center justify-between">

        <div>

          <p className="font-semibold text-white mb-1">Ready to get started?</p>

          <p className="text-sm text-[#9898B8]">Install Burnless and run your first SLO in minutes.</p>

        </div>

        <Link href="/docs/getting-started"

          className="flex-shrink-0 px-4 py-2 bg-[#F97316] text-white text-sm font-medium rounded-lg hover:bg-[#EA6C0A] transition-colors">

          Get started →

        </Link>

      </div>

    </div>

  );

}


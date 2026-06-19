import Link from "next/link";

const nav = [
  { section: "Getting started", links: [
    { href: "/docs/getting-started", label: "Installation" },
    { href: "/docs/quick-start", label: "Quick start" },
  ]},
  { section: "Reference", links: [
    { href: "/docs/sre-yaml", label: "sre.yaml reference" },
    { href: "/docs/cli", label: "CLI reference" },
  ]},
  { section: "Integrations", links: [
    { href: "/docs/prometheus", label: "Prometheus" },
    { href: "/docs/grafana", label: "Grafana" },
    { href: "/docs/slack", label: "Slack" },
    { href: "/docs/pagerduty", label: "PagerDuty" },
  ]},
  { section: "FAQ", links: [
    { href: "/docs/faq", label: "FAQ", },
  ]},
  { section: "Contributing", links: [
    { href: "/docs/contributing", label: "How to contribute" },
    { href: "/docs/architecture", label: "Architecture" },
  ]},
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <div className="flex gap-12">
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="sticky top-24">
            {nav.map((group) => (
              <div key={group.section} className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">{group.section}</p>
                <div className="flex flex-col gap-1">
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href}
                      className="text-sm text-[#5A5A7A] hover:text-[#1A1A2E] py-1 hover:bg-[#EDE5D8] px-2 rounded transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

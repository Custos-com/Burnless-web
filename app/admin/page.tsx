"use client";
import { useState, useEffect } from "react";

const pages = [
  { path: "/docs/getting-started", title: "Getting started", lastEdited: "2026-06-16" },
  { path: "/docs/quick-start", title: "Quick start", lastEdited: "2026-06-18" },
  { path: "/docs/sre-yaml", title: "sre.yaml reference", lastEdited: "2026-06-18" },
  { path: "/docs/cli", title: "CLI reference", lastEdited: "2026-06-18" },
  { path: "/docs/faq", title: "FAQ", lastEdited: "2026-06-18" },
  { path: "/docs/contributing", title: "Contributing", lastEdited: "2026-06-18" },
  { path: "/docs/architecture", title: "Architecture", lastEdited: "2026-06-18" },
];

const changelog = [
  { version: "v0.1.0", date: "2026-06-16", tag: "latest", desc: "Initial release — SLO math engine, burn rate detection, agent skeleton, CLI skeleton, full CI/CD pipeline." },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState({ stars: 0, openIssues: 32, goodFirstIssues: 12, contributors: 1, forks: 0 });
  const [loading, setLoading] = useState(true);
  const [waitlist, setWaitlist] = useState<{ email: string; created_at: string; source?: string }[]>([]);
  const [waitlistLoading, setWaitlistLoading] = useState(true);
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogBody, setNewBlogBody] = useState("");
  const [newChangelogVersion, setNewChangelogVersion] = useState("");
  const [newChangelogDesc, setNewChangelogDesc] = useState("");

  useEffect(() => {
    fetch("/api/github-stats")
      .then(r => r.json())
      .then(data => { setStats(data); setLoading(false); })
      .catch(() => setLoading(false));

    fetch("/api/waitlist")
      .then(r => r.json())
      .then(data => { setWaitlist(data.signups ?? []); setWaitlistLoading(false); })
      .catch(() => setWaitlistLoading(false));
  }, []);

  const tabs = ["overview", "docs", "blog", "changelog", "waitlist"];

  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      <div className="bg-[#1A1A2E] text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">🔥</span>
          <span className="font-bold">Burnless Admin</span>
          <span className="text-xs bg-[#F97316] text-white px-2 py-0.5 rounded-full">v0.1.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0F6E56] inline-block"></span>
          <span className="text-xs text-[#9898B8]">Live from GitHub</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex gap-1 mb-8 border-b border-[#EDE5D8]">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                activeTab === tab
                  ? "border-[#F97316] text-[#1A1A2E]"
                  : "border-transparent text-[#9898B8] hover:text-[#1A1A2E]"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] mb-6">Overview</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "GitHub stars", value: loading ? "..." : stats.stars.toString(), trend: `${stats.forks} forks` },
                { label: "Open issues", value: loading ? "..." : stats.openIssues.toString(), trend: `${stats.goodFirstIssues} good first issues` },
                { label: "Waitlist signups", value: waitlistLoading ? "..." : waitlist.length.toString(), trend: waitlist.length === 0 ? "Launch pending" : "Live" },
                { label: "Contributors", value: loading ? "..." : stats.contributors.toString(), trend: stats.contributors === 1 ? "You!" : "Growing!" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-[#EDE5D8] rounded-xl p-4">
                  <p className="text-xs text-[#9898B8] mb-1">{s.label}</p>
                  <p className="text-2xl font-bold text-[#1A1A2E] mb-1">{s.value}</p>
                  <p className="text-xs text-[#5A5A7A]">{s.trend}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-6 mb-6">
              <h2 className="font-semibold text-[#1A1A2E] mb-4">Quick actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Edit docs", tab: "docs" },
                  { label: "Write blog post", tab: "blog" },
                  { label: "View waitlist", tab: "waitlist" },
                  { label: "Push changelog", tab: "changelog" },
                ].map((a) => (
                  <button key={a.label} onClick={() => setActiveTab(a.tab)}
                    className="text-sm px-4 py-2.5 border border-[#EDE5D8] rounded-lg text-[#1A1A2E] hover:bg-[#F5F0EB] transition-colors text-left">
                    {a.label} →
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-6">
              <h2 className="font-semibold text-[#1A1A2E] mb-4">GitHub links</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Open issues", href: "https://github.com/Custos-com/Burnless/issues" },
                  { label: "Pull requests", href: "https://github.com/Custos-com/Burnless/pulls" },
                  { label: "Project board", href: "https://github.com/orgs/Custos-com/projects/2" },
                  { label: "CI Actions", href: "https://github.com/Custos-com/Burnless/actions" },
                ].map((a) => (
                  <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm px-4 py-2.5 border border-[#EDE5D8] rounded-lg text-[#1A1A2E] hover:bg-[#F5F0EB] transition-colors flex items-center justify-between">
                    {a.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "docs" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#1A1A2E]">Docs pages</h1>
              <a href="https://github.com/Custos-com/Burnless/tree/main/docs"
                target="_blank" rel="noopener noreferrer"
                className="text-sm px-4 py-2 bg-[#1A1A2E] text-white rounded-lg hover:bg-[#2D2D4A] transition-colors">
                Edit on GitHub →
              </a>
            </div>
            <div className="bg-[#FAEEDA] border border-[#EF9F27] rounded-xl p-4 mb-6">
              <p className="text-sm text-[#854F0B]">Docs are stored as .tsx files in app/docs/. Edit them on GitHub and they deploy automatically via Vercel.</p>
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl overflow-hidden">
              {pages.map((page, i) => (
                <div key={page.path} className={`flex items-center justify-between px-6 py-4 ${i < pages.length - 1 ? "border-b border-[#EDE5D8]" : ""}`}>
                  <div>
                    <p className="font-medium text-[#1A1A2E] text-sm">{page.title}</p>
                    <code className="text-xs text-[#9898B8] font-mono mt-0.5">{page.path}</code>
                  </div>
                  <div className="flex gap-2">
                    <a href={`http://localhost:3000${page.path}`} target="_blank" rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 border border-[#EDE5D8] rounded-lg text-[#1A1A2E] hover:bg-[#F5F0EB] transition-colors">
                      Preview
                    </a>
                    <a href="https://github.com/Custos-com/Burnless/blob/main/docs"
                      target="_blank" rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 bg-[#1A1A2E] text-white rounded-lg hover:bg-[#2D2D4A] transition-colors">
                      Edit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] mb-6">Blog posts</h1>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-6 mb-6">
              <h2 className="font-semibold text-[#1A1A2E] mb-4">Write new post</h2>
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Post title..."
                  value={newBlogTitle} onChange={e => setNewBlogTitle(e.target.value)}
                  className="w-full border border-[#EDE5D8] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] bg-[#FDFAF6] focus:outline-none focus:border-[#F97316]"
                />
                <textarea placeholder="Write your post in markdown..."
                  value={newBlogBody} onChange={e => setNewBlogBody(e.target.value)}
                  rows={8}
                  className="w-full border border-[#EDE5D8] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] bg-[#FDFAF6] focus:outline-none focus:border-[#F97316] font-mono resize-none"
                />
                <div className="flex gap-3">
                  <button onClick={() => alert("Blog publishing — coming soon")}
                    className="px-5 py-2 bg-[#1A1A2E] text-white text-sm font-medium rounded-lg hover:bg-[#2D2D4A] transition-colors">
                    Publish post
                  </button>
                  <button onClick={() => { setNewBlogTitle(""); setNewBlogBody(""); }}
                    className="px-5 py-2 border border-[#EDE5D8] text-[#5A5A7A] text-sm rounded-lg hover:bg-[#F5F0EB] transition-colors">
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-12 text-center">
              <p className="text-4xl mb-4">✍️</p>
              <p className="font-semibold text-[#1A1A2E] mb-2">No posts yet</p>
              <p className="text-sm text-[#9898B8]">Write your first post about building Burnless.</p>
            </div>
          </div>
        )}

        {activeTab === "changelog" && (
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] mb-6">Changelog</h1>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-6 mb-6">
              <h2 className="font-semibold text-[#1A1A2E] mb-4">Add new entry</h2>
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Version e.g. v0.2.0"
                  value={newChangelogVersion} onChange={e => setNewChangelogVersion(e.target.value)}
                  className="w-full border border-[#EDE5D8] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] bg-[#FDFAF6] focus:outline-none focus:border-[#F97316]"
                />
                <textarea placeholder="What changed in this release..."
                  value={newChangelogDesc} onChange={e => setNewChangelogDesc(e.target.value)}
                  rows={4}
                  className="w-full border border-[#EDE5D8] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] bg-[#FDFAF6] focus:outline-none focus:border-[#F97316] resize-none"
                />
                <button onClick={() => alert("Changelog publishing — coming soon")}
                  className="self-start px-5 py-2 bg-[#1A1A2E] text-white text-sm font-medium rounded-lg hover:bg-[#2D2D4A] transition-colors">
                  Publish entry
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {changelog.map((entry) => (
                <div key={entry.version} className="bg-white border border-[#EDE5D8] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-bold text-[#1A1A2E]">{entry.version}</p>
                    <span className="text-xs bg-[#E1F5EE] text-[#0F6E56] px-2 py-0.5 rounded-full">{entry.tag}</span>
                  </div>
                  <p className="text-xs text-[#9898B8] mb-3">{entry.date}</p>
                  <p className="text-sm text-[#5A5A7A]">{entry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "waitlist" && (
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] mb-6">Waitlist</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Total signups", value: waitlistLoading ? "..." : waitlist.length.toString() },
                {
                  label: "This week",
                  value: waitlistLoading
                    ? "..."
                    : waitlist.filter(w => {
                        const d = new Date(w.created_at);
                        const weekAgo = new Date();
                        weekAgo.setDate(weekAgo.getDate() - 7);
                        return d >= weekAgo;
                      }).length.toString(),
                },
                { label: "Invited", value: "0" },
              ].map(s => (
                <div key={s.label} className="bg-white border border-[#EDE5D8] rounded-xl p-4">
                  <p className="text-xs text-[#9898B8] mb-1">{s.label}</p>
                  <p className="text-2xl font-bold text-[#1A1A2E]">{s.value}</p>
                </div>
              ))}
            </div>

            {waitlistLoading ? (
              <div className="bg-white border border-[#EDE5D8] rounded-xl p-12 text-center">
                <p className="text-sm text-[#9898B8]">Loading signups...</p>
              </div>
            ) : waitlist.length === 0 ? (
              <div className="bg-white border border-[#EDE5D8] rounded-xl p-12 text-center">
                <p className="text-4xl mb-4">📋</p>
                <p className="font-semibold text-[#1A1A2E] mb-2">No signups yet</p>
                <p className="text-sm text-[#9898B8]">Add the waitlist form to burnless.dev to start collecting emails.</p>
              </div>
            ) : (
              <div className="bg-white border border-[#EDE5D8] rounded-xl overflow-hidden">
                <div className="grid grid-cols-[1fr_auto_auto] px-6 py-3 border-b border-[#EDE5D8] bg-[#F5F0EB]">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9898B8]">Email</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9898B8] px-6">Source</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#9898B8]">Joined</p>
                </div>
                {waitlist.map((entry, i) => (
                  <div
                    key={entry.email + i}
                    className={`grid grid-cols-[1fr_auto_auto] px-6 py-3 items-center ${
                      i < waitlist.length - 1 ? "border-b border-[#EDE5D8]" : ""
                    }`}
                  >
                    <p className="text-sm text-[#1A1A2E]">{entry.email}</p>
                    <p className="text-xs text-[#5A5A7A] px-6">{entry.source ?? "—"}</p>
                    <p className="text-xs text-[#9898B8]">
                      {new Date(entry.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-xs text-[#9898B8] mt-6 text-center">
          Stats refresh on page load from GitHub API
        </p>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";

const stats = [
  { label: "GitHub stars", value: "0", trend: "+0 this week" },
  { label: "Open issues", value: "32", trend: "12 good first issues" },
  { label: "Waitlist signups", value: "0", trend: "Launch pending" },
  { label: "Contributors", value: "1", trend: "You!" },
];

const pages = [
  { path: "/docs/getting-started", title: "Getting started", lastEdited: "2026-06-16" },
  { path: "/docs/sre-yaml", title: "sre.yaml reference", lastEdited: "2026-06-16" },
  { path: "/docs/cli", title: "CLI reference", lastEdited: "2026-06-16" },
  { path: "/docs/integrations", title: "Integrations", lastEdited: "2026-06-16" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

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
          <span className="text-xs text-[#9898B8]">Logged in as founder</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="flex gap-2 mb-8 border-b border-[#EDE5D8]">
          {["overview", "docs", "blog", "waitlist", "changelog"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize border-b-2 transition-colors ${
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
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-[#EDE5D8] rounded-xl p-4">
                  <p className="text-xs text-[#9898B8] mb-1">{s.label}</p>
                  <p className="text-2xl font-bold text-[#1A1A2E] mb-1">{s.value}</p>
                  <p className="text-xs text-[#5A5A7A]">{s.trend}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-6">
              <h2 className="font-semibold text-[#1A1A2E] mb-4">Quick actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Edit docs", "Write blog post", "View waitlist", "Push changelog"].map((action) => (
                  <button key={action} onClick={() => setActiveTab(
                    action.includes("docs") ? "docs" :
                    action.includes("blog") ? "blog" :
                    action.includes("waitlist") ? "waitlist" : "changelog"
                  )}
                    className="text-sm px-4 py-2.5 border border-[#EDE5D8] rounded-lg text-[#1A1A2E] hover:bg-[#F5F0EB] transition-colors text-left">
                    {action} →
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "docs" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#1A1A2E]">Docs pages</h1>
              <button className="text-sm px-4 py-2 bg-[#1A1A2E] text-white rounded-lg hover:bg-[#2D2D4A] transition-colors">
                + New page
              </button>
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl overflow-hidden">
              {pages.map((page, i) => (
                <div key={page.path} className={`flex items-center justify-between px-6 py-4 ${i < pages.length - 1 ? "border-b border-[#EDE5D8]" : ""}`}>
                  <div>
                    <p className="font-medium text-[#1A1A2E] text-sm">{page.title}</p>
                    <p className="text-xs text-[#9898B8] font-mono mt-0.5">{page.path}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-xs text-[#9898B8]">Last edited {page.lastEdited}</p>
                    <button className="text-xs px-3 py-1.5 border border-[#EDE5D8] rounded-lg text-[#1A1A2E] hover:bg-[#F5F0EB] transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "waitlist" && (
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] mb-6">Waitlist</h1>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-12 text-center">
              <p className="text-4xl mb-4">📋</p>
              <p className="font-semibold text-[#1A1A2E] mb-2">No signups yet</p>
              <p className="text-sm text-[#9898B8]">Add the waitlist form to burnless.dev to start collecting emails.</p>
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#1A1A2E]">Blog posts</h1>
              <button className="text-sm px-4 py-2 bg-[#1A1A2E] text-white rounded-lg hover:bg-[#2D2D4A] transition-colors">
                + New post
              </button>
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-12 text-center">
              <p className="text-4xl mb-4">✍️</p>
              <p className="font-semibold text-[#1A1A2E] mb-2">No posts yet</p>
              <p className="text-sm text-[#9898B8]">Write your first blog post about building Burnless.</p>
            </div>
          </div>
        )}

        {activeTab === "changelog" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#1A1A2E]">Changelog</h1>
              <button className="text-sm px-4 py-2 bg-[#1A1A2E] text-white rounded-lg hover:bg-[#2D2D4A] transition-colors">
                + New entry
              </button>
            </div>
            <div className="bg-white border border-[#EDE5D8] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F97316] mt-1.5 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold text-[#1A1A2E]">v0.1.0 — Initial Release</p>
                    <span className="text-xs bg-[#E1F5EE] text-[#0F6E56] px-2 py-0.5 rounded-full">latest</span>
                  </div>
                  <p className="text-xs text-[#9898B8] mb-2">June 16, 2026</p>
                  <p className="text-sm text-[#5A5A7A]">First release of Burnless. SLO math engine, burn rate detection, agent skeleton, CLI skeleton, full CI/CD pipeline.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

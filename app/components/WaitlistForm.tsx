"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
        setMessage("You're already on the waitlist!");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong — try again");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#E1F5EE] border border-[#5DCAA5] rounded-xl px-6 py-4 flex items-center gap-3">
        <span className="text-2xl">🎉</span>
        <div>
          <p className="font-semibold text-[#085041]">You're on the list!</p>
          <p className="text-sm text-[#0F6E56]">We'll email you when Burnless Cloud launches.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 rounded-xl border border-[#EDE5D8] bg-white text-[#1A1A2E] text-sm focus:outline-none focus:border-[#F97316] placeholder:text-[#9898B8]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-[#F97316] text-white font-medium text-sm rounded-xl hover:bg-[#EA6C0A] transition-colors disabled:opacity-50 whitespace-nowrap">
        {status === "loading" ? "Joining..." : "Join waitlist"}
      </button>
      {(status === "error" || status === "duplicate") && (
        <p className="text-xs text-red-500 mt-1 sm:col-span-2">{message}</p>
      )}
    </form>
  );
}

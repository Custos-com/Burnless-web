export default function CliRef() {
  const commands = [
    { cmd: "burnless init", status: "planned", desc: "Generates a starter sre.yaml interactively. Prompts for service name, team, SLO target.", args: [] },
    { cmd: "burnless validate", status: "planned", desc: "Validates sre.yaml against the JSON schema. Prints friendly errors pointing to the exact field.", args: ["--file, -f  Path to sre.yaml (default: ./sre.yaml)"] },
    { cmd: "burnless apply", status: "planned", desc: "Applies config: generates Prometheus rules, pushes Grafana dashboard, configures PagerDuty.", args: ["--dry-run  Print what would happen without doing it"] },
    { cmd: "burnless status", status: "planned", desc: "Shows current SLO status and error budget remaining for all services.", args: ["--service  Filter by service name"] },
    { cmd: "burnless agent", status: "in progress", desc: "Starts the agent daemon. Polls Prometheus every 60s. Triggers runbooks when thresholds crossed.", args: ["--config  Path to sre.yaml", "--interval  Poll interval (default: 60s)", "--dry-run  Detect but don't execute runbooks"] },
    { cmd: "burnless toil log", status: "planned", desc: "Logs a toil event with estimated time and description.", args: ["--minutes  Time spent", "--description  What you did"] },
    { cmd: "burnless toil report", status: "planned", desc: "Generates a toil report for the current month.", args: ["--month  Month to report (default: current)"] },
    { cmd: "burnless version", status: "done", desc: "Prints the current version of Burnless.", args: [] },
  ];
  const statusColor: Record<string, string> = {
    done: "bg-[#E1F5EE] text-[#0F6E56]",
    "in progress": "bg-[#FAEEDA] text-[#854F0B]",
    planned: "bg-[#F5F0EB] text-[#9898B8]",
  };
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#9898B8] mb-2">Reference</p>
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">CLI reference</h1>
      <p className="text-lg text-[#5A5A7A] mb-8">All Burnless commands and their options.</p>
      <div className="flex flex-col gap-4">
        {commands.map((c) => (
          <div key={c.cmd} className="bg-white border border-[#EDE5D8] rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <code className="text-sm font-mono font-bold text-[#1A1A2E]">{c.cmd}</code>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[c.status]}`}>{c.status}</span>
            </div>
            <p className="text-sm text-[#5A5A7A] mb-3">{c.desc}</p>
            {c.args.length > 0 && (
              <div className="code-block text-xs py-2 px-3">
                {c.args.map(a => <div key={a} className="text-[#94E2D5]">{a}</div>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

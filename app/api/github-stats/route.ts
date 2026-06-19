import { NextResponse } from "next/server";

export async function GET() {
  try {
    const headers: Record<string, string> = {
      "Accept": "application/vnd.github.v3+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const [repoRes, issuesRes, contributorsRes] = await Promise.all([
      fetch("https://api.github.com/repos/Custos-com/Burnless", { headers }),
      fetch("https://api.github.com/repos/Custos-com/Burnless/issues?state=open&per_page=100", { headers }),
      fetch("https://api.github.com/repos/Custos-com/Burnless/contributors", { headers }),
    ]);
    const repo = await repoRes.json();
    const issues = await issuesRes.json();
    const contributors = await contributorsRes.json();
    const openIssues = Array.isArray(issues) ? issues.filter((i: any) => !i.pull_request) : [];
    const goodFirstIssues = openIssues.filter((i: any) =>
      i.labels?.some((l: any) => l.name === "good first issue")
    );
    return NextResponse.json({
      stars: repo.stargazers_count ?? 0,
      openIssues: openIssues.length,
      goodFirstIssues: goodFirstIssues.length,
      contributors: Array.isArray(contributors) ? contributors.length : 0,
      forks: repo.forks_count ?? 0,
    });
  } catch {
    return NextResponse.json({ stars: 0, openIssues: 32, goodFirstIssues: 12, contributors: 1, forks: 0 });
  }
}

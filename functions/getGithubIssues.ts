import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("github");

    const response = await fetch("https://api.github.com/repos/syngyn/base44/issues?state=open&per_page=50", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("GitHub API error:", error);
      return Response.json({ error: `GitHub API error: ${response.status}` }, { status: response.status });
    }

    const issues = await response.json();
    return Response.json({ issues });
  } catch (error) {
    console.error("Error fetching issues:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});
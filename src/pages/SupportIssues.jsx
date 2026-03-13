import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertCircle, RefreshCw } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function SupportIssues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIssues = async () => {
    setLoading(true);
    setError(null);
    const response = await base44.functions.invoke("getGithubIssues", {});
    if (response.data.error) {
      setError(response.data.error);
    } else {
      setIssues(response.data.issues);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900"><em>Hydro</em>FLOW Technical Support</h1>
          <p className="text-gray-500 mt-1">
            Open issues from <span className="font-mono text-sm">syngyn/replit</span>
          </p>
        </div>
        <Button variant="outline" onClick={fetchIssues} disabled={loading} className="gap-2">
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {loading && !error && (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      )}

      {!loading && !error && issues.length === 0 && (
        <div className="text-center py-16 text-gray-500">No open issues found.</div>
      )}

      {!loading && issues.length > 0 && (
        <div className="space-y-3">
          {issues.map((issue) => (
            <div key={issue.id} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all bg-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs text-gray-400 font-mono">#{issue.number}</span>
                    {issue.labels?.map((label) => (
                      <Badge
                        key={label.id}
                        style={{
                          backgroundColor: `#${label.color}22`,
                          color: `#${label.color}`,
                          borderColor: `#${label.color}55`
                        }}
                        className="text-xs border"
                      >
                        {label.name}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 leading-snug">{issue.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Opened {formatDistanceToNow(new Date(issue.created_at), { addSuffix: true })}
                    {issue.user && <> by <span className="font-medium text-gray-700">{issue.user.login}</span></>}
                    {issue.comments > 0 && <> &middot; {issue.comments} comment{issue.comments !== 1 ? "s" : ""}</>}
                  </p>
                </div>
                <a
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
          <p className="text-sm text-gray-400 text-right pt-2">
            {issues.length} open issue{issues.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  );
}
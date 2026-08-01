// Dashboard configuration — edit these for your deployment.
const CONFIG = {
  // Where the monitor state is published (public repo, raw.githubusercontent).
  STATE_URL: "https://raw.githubusercontent.com/Vedang-P/chess-bench-live/main/monitor/state.json",
  HISTORY_URL: "https://raw.githubusercontent.com/Vedang-P/chess-bench-live/main/monitor/history.jsonl",
  LIVE_URL: "https://raw.githubusercontent.com/Vedang-P/chess-bench-live/main/monitor/live.json",
  // Auto-refresh intervals in seconds (0 disables polling).
  REFRESH_S: 15,
  LIVE_REFRESH_S: 3,
  // Fallback branding / links.
  REPO_URL: "https://github.com/Vedang-P/neuro-symbolic-pathfinding",
  THEME: "dark",
};

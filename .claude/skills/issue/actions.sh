#!/usr/bin/env bash
# ///: Issue actions — the resources of the /issue skill: thin wrappers over the GitHub
# ///: Issues REST API through `gh api`. `type:` and `area:` labels classify an issue;
# ///: open = todo, closed = done, `status:doing` marks in-progress; `close` writes a
# ///: **Solved:** note before closing (our solution-summary convention).
# ///: REST on purpose — the `gh issue` commands go through GraphQL, which HANGS on a
# ///: fine-grained token; `gh api` does not. Do not "fix" this back to `gh issue`.
# ///: Source chapter: .claude/library/our-skillset/28-issue.md. Needs a token with Issues r/w.
set -euo pipefail
GH="${GH_BIN:-/c/Program Files/GitHub CLI/gh.exe}"

# Authenticate via GH_TOKEN from the repo-root .env (gitignored), so gh bypasses the
# Windows credential keyring — which blocks in scripted use. GH_TOKEN takes precedence in gh.
if [ -z "${GH_TOKEN:-}" ]; then
  ENV_FILE="${GH_ENV_FILE:-$(git rev-parse --show-toplevel 2>/dev/null || true)/.env}"
  [ -f "$ENV_FILE" ] && export GH_TOKEN="$(sed -n 's/^GH_TOKEN=//p' "$ENV_FILE" | head -1 | tr -d '\r\n')" || true
fi

# Resolve owner/repo from the git remote LOCALLY. Do NOT use gh's {owner}/{repo}
# placeholder — resolving it costs gh an API round-trip that HANGS on a fine-grained token.
REPO="${GH_REPO:-$(git config --get remote.origin.url 2>/dev/null | sed -E 's#^.*github\.com[:/]##; s#\.git$##')}"
R="repos/$REPO"

case "${1:-help}" in
  bootstrap-labels)   # idempotently ensure the team's label set exists
    ensure() { "$GH" api --method POST "$R/labels" -f name="$1" -f color="$2" >/dev/null 2>&1 \
            || "$GH" api --method PATCH "$R/labels/$1" -f color="$2" >/dev/null 2>&1 || true; }
    for l in meta task feature bug idea;                      do ensure "type:$l" 1D76DB; done
    for l in library catalogue chemistry identity philosophy; do ensure "area:$l" 0E8A16; done
    ensure "status:doing" FBCA04
    echo "labels ready" ;;

  list)     # list [open|closed|all] [limit]
    "$GH" api "$R/issues?state=${2:-open}&per_page=${3:-30}" \
      --jq 'if length == 0 then "(no issues)" else .[] | "#\(.number)\t\(.state)\t\(.title)\t[\([.labels[].name] | join(", "))]" end' ;;

  view)     # view <number>
    "$GH" api "$R/issues/$2" \
      --jq '"#\(.number) \(.title)\nstate:  \(.state)\nauthor: \(.user.login)\nlabels: \([.labels[].name] | join(", "))\n\n\(.body)"' ;;

  create)   # create "<title>" "<body>" "<labels-csv>"
    lab=(); if [ -n "${4:-}" ]; then IFS=',' read -ra _L <<< "$4"; for l in "${_L[@]}"; do [ -n "$l" ] && lab+=(-f "labels[]=$l"); done; fi
    "$GH" api --method POST "$R/issues" -f title="$2" -f body="$3" ${lab[@]+"${lab[@]}"} --jq '.html_url' ;;

  comment)  # comment <number> "<text>"
    "$GH" api --method POST "$R/issues/$2/comments" -f body="$3" --jq '.html_url' ;;

  close)    # close <number> "<solved summary>"
    "$GH" api --method POST "$R/issues/$2/comments" -f body="**Solved:** $3" >/dev/null
    "$GH" api --method PATCH "$R/issues/$2" -f state=closed --jq '"closed #\(.number)"' ;;

  *) echo "usage: actions.sh {bootstrap-labels|list|view|create|comment|close} ..." ;;
esac

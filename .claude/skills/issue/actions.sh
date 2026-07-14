#!/usr/bin/env bash
# ///: Issue actions — the resources of the /issue skill: thin wrappers over `gh issue`
# ///: that speak the team's conventions. `type:` and `area:` labels classify an issue;
# ///: open = todo, closed = done, `status:doing` marks in-progress; `close` writes a
# ///: **Solved:** note before closing (our solution-summary convention).
# ///: Source chapter: .claude/library/our-skillset/28-issue.md. Requires gh with repo scope.
set -euo pipefail
GH="${GH_BIN:-/c/Program Files/GitHub CLI/gh.exe}"

# Authenticate via GH_TOKEN from the repo-root .env (gitignored), so gh bypasses the
# Windows credential keyring — which blocks in scripted use. GH_TOKEN takes precedence in gh.
if [ -z "${GH_TOKEN:-}" ]; then
  ENV_FILE="${GH_ENV_FILE:-$(git rev-parse --show-toplevel 2>/dev/null || true)/.env}"
  [ -f "$ENV_FILE" ] && export GH_TOKEN="$(sed -n 's/^GH_TOKEN=//p' "$ENV_FILE" | head -1 | tr -d '\r\n')" || true
fi

case "${1:-help}" in
  bootstrap-labels)   # idempotently ensure the team's label set exists
    tc=1D76DB; ac=0E8A16; sc=FBCA04
    for l in meta task feature bug idea;                       do "$GH" label create "type:$l" -c "$tc" -f >/dev/null; done
    for l in library catalogue chemistry identity philosophy;  do "$GH" label create "area:$l" -c "$ac" -f >/dev/null; done
    "$GH" label create "status:doing" -c "$sc" -f >/dev/null
    echo "labels ready" ;;
  list)     "$GH" issue list --state "${2:-open}" --limit "${3:-30}" ;;
  view)     "$GH" issue view "$2" ;;
  create)   "$GH" issue create --title "$2" --body "$3" ${4:+--label "$4"} ;;      # create "<title>" "<body>" "<labels-csv>"
  comment)  "$GH" issue comment "$2" --body "$3" ;;                                # comment <number> "<text>"
  close)    "$GH" issue comment "$2" --body "**Solved:** $3" >/dev/null; "$GH" issue close "$2" ;;  # close <number> "<solved>"
  *) echo "usage: actions.sh {bootstrap-labels|list|view|create|comment|close} ..." ;;
esac

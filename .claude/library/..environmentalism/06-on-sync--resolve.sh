#!/usr/bin/env bash
# 06-on-sync--resolve.sh — finish a down-sync after the merge is done (author: Adam)
#
# Phase 2 of the down-sync, split out from 06-on-sync--pull.sh so that resolving a merge has
# complete, self-contained autonomy. Run this whenever the project branch holds a RESOLVED,
# COMMITTED merge of dna-platform — whether pull handed off a clean merge, or you hand-
# resolved a conflict and committed it. There is NO heuristic and no "am I a resume?" guess:
# you run it because the merge is done. If the merge is NOT resolved, it refuses.
#
#   3. Recompile platform files on the branch.
#   4. Show the diff (every change should trace to a merged chapter).
#   5. Validate the branch (book + compiled links). FAIL -> stop; the error is in a chapter.
#   6. Commit + push the branch.
#   7. ONLY NOW sync the verified branch DOWN into the working copy.
#
# Usage: bash .claude/library/..environmentalism/06-on-sync--resolve.sh [--no-worktree-sync]
#
# Step 7 mirrors .claude/ (including THIS file) into the working copy, so we re-exec from a
# temp copy first: bash reads the copy, and the self-overwrite cannot corrupt the run.

set -uo pipefail

if [ -z "${RESOLVE_ORIG_DIR:-}" ]; then
  _tmp="$(mktemp 2>/dev/null || echo "${TMPDIR:-/tmp}/06-on-sync--resolve.$$.sh")"
  cp "$0" "$_tmp" || { echo "ERROR: could not stage a temp copy of the resolve tool"; exit 1; }
  RESOLVE_ORIG_DIR="$(cd "$(dirname "$0")" && pwd)"; export RESOLVE_ORIG_DIR
  exec bash "$_tmp" "$@"
fi

winpath() { cygpath -w "$1" 2>/dev/null || echo "$1"; }
do_sync() {
  local src="$(winpath "$1")" dst="$(winpath "$2")"; shift 2
  MSYS_NO_PATHCONV=1 robocopy "$src" "$dst" "$@" || { local rc=$?; [ $rc -ge 8 ] && { echo "ERROR: robocopy failed ($rc): $src -> $dst"; return 1; }; }
  return 0
}
# count paths the DEST holds that the SRC lacks (a /MIR would DELETE them). No /NC — it
# suppresses the "*EXTRA" marker this grep counts, which once silently broke the guard.
extra_in_dest() {
  MSYS_NO_PATHCONV=1 robocopy "$(winpath "$1")" "$(winpath "$2")" /MIR /L /XD node_modules .git run /NJH /NJS /NS /FP 2>&1 | grep -ciE '\*EXTRA' || true
}

PROJECT_ROOT="$(cd "$RESOLVE_ORIG_DIR/../../.." && pwd)"
IDENTITY_REPO="$(cd "$PROJECT_ROOT/../identity" 2>/dev/null && pwd)" || { echo "ERROR: identity repo not found at $PROJECT_ROOT/../identity"; exit 1; }
CLAUDE_DIR="$PROJECT_ROOT/.claude"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
IENV="$IDENTITY_REPO/.claude/library/..environmentalism"
ILIB="$IDENTITY_REPO/.claude/library"
SYNC_WORKTREE=true; [ "${1:-}" = "--no-worktree-sync" ] && SYNC_WORKTREE=false

lib_dirs=(); while IFS= read -r d; do [ -n "$d" ] && lib_dirs+=("$d"); done < <(find "$PROJECT_ROOT/library" -type d -name .lib 2>/dev/null | sort)
lib_name_for() { if [ "$(dirname "$1")" = "$PROJECT_ROOT/library" ]; then echo "$PROJECT_NAME"; else echo "$(basename "$(dirname "$1")")"; fi; }

echo "========================================"
echo "RESOLVE  (finish the pull: recompile -> validate -> push -> sync down)"
echo "  identity: $IDENTITY_REPO ; sync to working copy: $SYNC_WORKTREE"
echo "========================================"

cd "$IDENTITY_REPO"
git checkout "$PROJECT_NAME" --quiet 2>/dev/null || { echo "ERROR: project branch '$PROJECT_NAME' not found — run 06-on-sync--pull.sh first."; exit 1; }

# The merge must already be resolved. No heuristic — a literal check for unmerged paths.
if [ -n "$(git diff --name-only --diff-filter=U)" ]; then
  echo "STOP: the merge is not resolved — these paths are still in conflict:"
  git diff --name-only --diff-filter=U | sed 's/^/    /'
  echo "  Resolve them (chapter/cover merges are Libby's — see 06-on-sync.md \"Merging a book by hand\"),"
  echo "  then: git add -A && git commit --no-edit  — and run this again."
  exit 1
fi

echo ""; echo ">>> 3  Recompile platform files from the merged chapters"
for c in 01-on-teammates 02-on-bootstrap 03-on-rules; do
  npx tsx "$IENV/$c--compiler.ts" "$ILIB" --write >/dev/null 2>&1 || { echo "STOP: compiler $c failed."; exit 1; }
done
# The skills compiler runs its OWN end-of-compile type-check — which is exactly step 5 below.
# Defer that verdict to step 5 (reported clearly there, working copy untouched), but still
# catch a genuine COMPILE failure here.
if ! skills_out="$(npx tsx "$IENV/04-on-skills--compiler.ts" "$ILIB" --write 2>&1)"; then
  echo "$skills_out" | grep -q "Type-check" || { echo "STOP: skills compiler failed to compile:"; echo "$skills_out" | tail -6; exit 1; }
fi
sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
  "$IDENTITY_REPO/.claude/CLAUDE.md" > "$IDENTITY_REPO/CLAUDE.md"

echo ""; echo ">>> 4  What changed on the branch:"
git add -A
git --no-pager diff --cached --stat | sed 's/^/    /'

echo ""; echo ">>> 5  Validate the branch"
ok=true
npx tsx "$ILIB/bookkeeping/11-on-specifications--validator.ts" "$ILIB" >/dev/null 2>&1 || ok=false
npx tsx "$IENV/07-on-compiled-links--validator.ts" "$IDENTITY_REPO/.claude" >/dev/null 2>&1 || ok=false
if [ "$ok" = false ]; then
  echo "STOP: validation failed on the branch — the error is in a chapter. The working copy was NOT touched."
  exit 1
fi
echo "    validation: PASS"

echo ""; echo ">>> 6  Commit + push '$PROJECT_NAME'"
git diff --cached --quiet || git commit -m "Recompile after pull/resolve ($PROJECT_NAME)" --quiet
if ! git rev-parse --verify --quiet "origin/$PROJECT_NAME" >/dev/null 2>&1; then
  git push -u origin "$PROJECT_NAME" --quiet && echo "    pushed (new branch)."
elif [ -n "$(git rev-list "origin/$PROJECT_NAME..$PROJECT_NAME" 2>/dev/null)" ]; then
  git push --quiet && echo "    pushed."
else
  echo "    (origin already current)"
fi

if [ "$SYNC_WORKTREE" != true ]; then
  git checkout main --quiet 2>/dev/null || true
  echo ""; echo ">>> working copy NOT synced (--no-worktree-sync). Branch is correct. DONE."
  exit 0
fi

echo ""; echo ">>> 7  Sync the verified branch DOWN into the working copy"
down_lose="$(extra_in_dest "$IDENTITY_REPO/.claude" "$CLAUDE_DIR")"
if [ "${down_lose:-0}" -gt 0 ] && [ "${RECONCILED:-0}" != "1" ]; then
  echo "STOP: this working copy holds ${down_lose} path(s) the branch lacks (un-synced local work)."
  echo "      Push up first (06-on-sync--commit.sh), or RECONCILED=1 to override."
  exit 1
fi
do_sync "$IDENTITY_REPO/.claude" "$CLAUDE_DIR" /MIR /XD node_modules .git run /NFL /NDL /NJH /NJS /NC /NS
# Regenerate the project-root CLAUDE.md projection (gitignored, lives OUTSIDE .claude, so the
# /MIR above never carries it) — same .claude/-prefix transform the commit tool applies.
sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
  "$CLAUDE_DIR/CLAUDE.md" > "$PROJECT_ROOT/CLAUDE.md"
# Sync every branch library back, reverse of the sync-up, repo-aware via lib_name_for.
if [ "${#lib_dirs[@]}" -gt 0 ]; then
  for d in "${lib_dirs[@]}"; do
    n="$(lib_name_for "$d")"
    [ -d "$IDENTITY_REPO/.lib/$n" ] && do_sync "$IDENTITY_REPO/.lib/$n" "$d" /MIR /NFL /NDL /NJH /NJS /NC /NS
  done
fi
echo "    working copy now equals the verified branch."

echo ""; echo ">>> Verify the sync — mechanical, but checked, never blindly trusted"
post_up="$(extra_in_dest "$IDENTITY_REPO/.claude" "$CLAUDE_DIR")"
post_dn="$(extra_in_dest "$CLAUDE_DIR" "$IDENTITY_REPO/.claude")"
wc_err="$(npx tsx "$CLAUDE_DIR/library/bookkeeping/11-on-specifications--validator.ts" "$CLAUDE_DIR/library" 2>&1 | grep -oE 'Errors: [0-9]+')"
if [ "${post_up:-0}" = "0" ] && [ "${post_dn:-0}" = "0" ]; then
  echo "    working copy <-> branch: IN SYNC (0 path differences)"
else
  echo "    WARNING: working copy and branch differ (branch-only=$post_up, wc-only=$post_dn) — inspect before trusting"
fi
echo "    working-copy validation: ${wc_err:-unknown}"
echo "    >>> CHECK BY HAND: the sync is automatic, the verdict is not — confirm the working copy loaded as expected."
git checkout main --quiet 2>/dev/null || true
echo "=== DONE ==="

#!/usr/bin/env bash
# 06-on-sync--pull.sh — pull org changes DOWN, staged through the project branch (author: Adam)
#
# The counterpart to 06-on-sync--commit.sh (which pushes UP). This pulls
# dna-platform (the organization identity) DOWN into this project — but through
# the PROJECT BRANCH as a staging ground, so the working copy is NEVER updated
# from an unverified state.
#
# WHY STAGED. Compiled files (agents/CLAUDE.md/rules/skills) are deterministic
# from chapters: any change you see in compiled output traces to a chapter that
# changed in the pull — never a surprise, never "magic." So we pull chapters
# into the branch, recompile THERE, read the diff, validate THERE, and only sync
# into the working copy once the branch is proven clean and equivalent.
#
# THE PROCESS — each step gates the next; STOP on any failure:
#   1. Merge dna-platform -> the project branch (pull the org's chapter changes).
#   2. Recompile the platform files on the branch from the merged chapters.
#   3. Read the diff — every change should trace to a chapter from step 1.
#   4. Validate the branch. FAIL -> stop; fix chapters. Never sync a broken state down.
#   5. Commit + push the branch.
#   6. ONLY NOW: sync the verified branch -> this working copy (which then equals it).
#
# Usage: bash .claude/library/..environmentalism/06-on-sync--pull.sh [--no-worktree-sync]
#   --no-worktree-sync : do steps 1-5 (branch is made correct) but DON'T touch the
#                        working copy. Use to verify the branch before adopting it here.
set -uo pipefail

winpath() { cygpath -w "$1" 2>/dev/null || echo "$1"; }
do_sync() {
  local src="$(winpath "$1")" dst="$(winpath "$2")"; shift 2
  MSYS_NO_PATHCONV=1 robocopy "$src" "$dst" "$@" || { local rc=$?; [ $rc -ge 8 ] && { echo "ERROR: robocopy failed ($rc): $src -> $dst"; return 1; }; }
  return 0
}

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
IDENTITY_REPO="$(cd "$PROJECT_ROOT/../identity" 2>/dev/null && pwd)" || { echo "ERROR: identity repo not found at $PROJECT_ROOT/../identity"; exit 1; }
CLAUDE_DIR="$PROJECT_ROOT/.claude"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
IENV="$IDENTITY_REPO/.claude/library/..environmentalism"
ILIB="$IDENTITY_REPO/.claude/library"
SYNC_WORKTREE=true; [ "${1:-}" = "--no-worktree-sync" ] && SYNC_WORKTREE=false

echo "========================================"
echo "PULL  (dna-platform -> $PROJECT_NAME branch -> working copy)"
echo "  identity: $IDENTITY_REPO"
echo "  staged sync to working copy: $SYNC_WORKTREE"
echo "========================================"

cd "$IDENTITY_REPO"
git stash --quiet 2>/dev/null || true
git fetch origin --quiet 2>/dev/null || true

# --- 1. Pull the org into the project branch -------------------------------
echo ""; echo ">>> 1/6  Merge dna-platform into the '$PROJECT_NAME' branch"
git checkout "$PROJECT_NAME" --quiet
git merge origin/"$PROJECT_NAME" --no-edit --quiet 2>/dev/null || true
if ! git merge dna-platform --no-edit; then
  echo "STOP: merge conflict pulling dna-platform into '$PROJECT_NAME'."
  echo "      Resolve in $IDENTITY_REPO (autobiographies merge additively), then re-run."
  exit 1
fi

# --- 2. Recompile on the branch --------------------------------------------
echo ""; echo ">>> 2/6  Recompile platform files from the merged chapters"
for c in 01-on-teammates 02-on-bootstrap 03-on-rules 04-on-skills; do
  echo "    - $c"
  npx tsx "$IENV/$c--compiler.ts" "$ILIB" --write >/dev/null 2>&1 || { echo "STOP: compiler $c failed."; exit 1; }
done
# the repo-root CLAUDE.md must resolve from the repo root, so its links need the
# .claude/ prefix (same transform the commit tool applies to the project root).
sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
  "$IDENTITY_REPO/.claude/CLAUDE.md" > "$IDENTITY_REPO/CLAUDE.md"

# --- 3. Read the diff (every change traces to a chapter) -------------------
echo ""; echo ">>> 3/6  What changed (read it — compiled changes trace to chapter changes):"
git add -A
git --no-pager diff --cached --stat | sed 's/^/    /'

# --- 4. Validate the branch ------------------------------------------------
echo ""; echo ">>> 4/6  Validate the branch"
ok=true
npx tsx "$IDENTITY_REPO/.claude/library/bookkeeping/11-on-specifications--validator.ts" "$ILIB" >/dev/null 2>&1 || ok=false
npx tsx "$IENV/07-on-compiled-links--validator.ts" "$IDENTITY_REPO/.claude" >/dev/null 2>&1 || ok=false
if [ "$ok" = false ]; then
  echo "STOP: validation failed on the branch. The error is in a chapter — fix it there."
  echo "      The working copy was NOT touched; it is still safe."
  exit 1
fi
echo "    validation: PASS"

# --- 5. Commit + push the branch -------------------------------------------
echo ""; echo ">>> 5/6  Commit + push the '$PROJECT_NAME' branch"
if git diff --cached --quiet; then
  echo "    (branch already current — nothing to commit)"
else
  git commit -m "Pull dna-platform + recompile ($PROJECT_NAME)" --quiet
  git push --quiet 2>&1 | tail -1
fi

# --- 6. Sync the verified branch into the working copy ---------------------
if [ "$SYNC_WORKTREE" = true ]; then
  echo ""; echo ">>> 6/6  Sync the verified branch -> working copy (now equal to it)"
  do_sync "$IDENTITY_REPO/.claude" "$CLAUDE_DIR" /MIR /XD node_modules .git run /NFL /NDL /NJH /NJS /NC /NS || exit 1
  if [ -d "$IDENTITY_REPO/.lib/chemistry" ]; then
    do_sync "$IDENTITY_REPO/.lib/chemistry" "$PROJECT_ROOT/library/chemistry/.lib" /MIR /NFL /NDL /NJH /NJS /NC /NS || exit 1
  fi
  echo "    working copy now equals the verified branch."
else
  echo ""; echo ">>> 6/6  SKIPPED (--no-worktree-sync). Branch is correct; working copy untouched."
fi

git checkout main --quiet 2>/dev/null || true
echo ""; echo "=== DONE ==="
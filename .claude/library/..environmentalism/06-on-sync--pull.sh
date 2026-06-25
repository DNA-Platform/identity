#!/usr/bin/env bash
# 06-on-sync--pull.sh — pull org changes DOWN, staged through the project branch (author: Adam)
#
# Counterpart to 06-on-sync--commit.sh (push UP). Reconciles dna-platform (the org
# identity) into this project THROUGH the project branch on identity, so the working
# copy is never updated from an unverified or unreconciled state.
#
# THE FLOW (one manual step — the merge — because nothing can automate a resolution):
#   1. Sync this working copy's library UP onto the project branch.
#   2. Merge dna-platform into the project branch.
#   3. Conflict -> STOP. Resolve by hand in the identity repo, commit, re-run.
#      (Re-run sees the merge is already done and continues; it does NOT re-sync up,
#       so a hand-resolution is never clobbered.)
#   4. Recompile platform files on the branch; read the diff.
#   5. Validate the branch. FAIL -> stop; the error is in a chapter, fix it there.
#   6. Commit + push the branch whenever it advanced (not only on a recompile delta).
#   7. ONLY NOW sync the verified branch DOWN into this working copy.
#
# Usage: bash .claude/library/..environmentalism/06-on-sync--pull.sh [--no-worktree-sync]
#
# Step 7 mirrors .claude/ (including THIS file) into the working copy, so we re-exec from
# a temp copy first: bash then reads the copy, and the self-overwrite cannot corrupt the run.

set -uo pipefail

# Re-exec from a temp copy so step 7's self-sync can't change the bytes bash is reading.
if [ -z "${PULL_ORIG_DIR:-}" ]; then
  _tmp="$(mktemp 2>/dev/null || echo "${TMPDIR:-/tmp}/06-on-sync--pull.$$.sh")"
  cp "$0" "$_tmp" || { echo "ERROR: could not stage a temp copy of the pull tool"; exit 1; }
  PULL_ORIG_DIR="$(cd "$(dirname "$0")" && pwd)"; export PULL_ORIG_DIR
  exec bash "$_tmp" "$@"
fi

winpath() { cygpath -w "$1" 2>/dev/null || echo "$1"; }
do_sync() {
  local src="$(winpath "$1")" dst="$(winpath "$2")"; shift 2
  MSYS_NO_PATHCONV=1 robocopy "$src" "$dst" "$@" || { local rc=$?; [ $rc -ge 8 ] && { echo "ERROR: robocopy failed ($rc): $src -> $dst"; return 1; }; }
  return 0
}
# count paths the DEST holds that the SRC lacks (a /MIR would DELETE them)
extra_in_dest() {
  # NOTE: no /NC here — /NC (no-class) suppresses the "*EXTRA" marker this grep needs,
  # which silently broke the clobber guard. The actual do_sync mirrors may keep /NC.
  MSYS_NO_PATHCONV=1 robocopy "$(winpath "$1")" "$(winpath "$2")" /MIR /L /XD node_modules .git run /NJH /NJS /NS /FP 2>&1 | grep -ciE '\*EXTRA' || true
}

PROJECT_ROOT="$(cd "$PULL_ORIG_DIR/../../.." && pwd)"
IDENTITY_REPO="$(cd "$PROJECT_ROOT/../identity" 2>/dev/null && pwd)" || { echo "ERROR: identity repo not found at $PROJECT_ROOT/../identity"; exit 1; }
CLAUDE_DIR="$PROJECT_ROOT/.claude"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
IENV="$IDENTITY_REPO/.claude/library/..environmentalism"
ILIB="$IDENTITY_REPO/.claude/library"
SYNC_WORKTREE=true; [ "${1:-}" = "--no-worktree-sync" ] && SYNC_WORKTREE=false

lib_dirs=(); while IFS= read -r d; do [ -n "$d" ] && lib_dirs+=("$d"); done < <(find "$PROJECT_ROOT/library" -type d -name .lib 2>/dev/null | sort)
lib_name_for() { if [ "$(dirname "$1")" = "$PROJECT_ROOT/library" ]; then echo "$PROJECT_NAME"; else echo "$(basename "$(dirname "$1")")"; fi; }

echo "========================================"
echo "PULL  (working copy -> $PROJECT_NAME branch -> merge dna-platform -> working copy)"
echo "  identity: $IDENTITY_REPO ; sync to working copy: $SYNC_WORKTREE"
echo "========================================"

cd "$IDENTITY_REPO"
git stash --quiet 2>/dev/null || true
git fetch origin --quiet 2>/dev/null || true
git checkout "$PROJECT_NAME" --quiet 2>/dev/null || git checkout -b "$PROJECT_NAME" origin/dna-platform --quiet
git merge --ff-only "origin/$PROJECT_NAME" --quiet 2>/dev/null || true

# Use origin/dna-platform (the fetched, authoritative org tip) for BOTH the "already
# merged?" test and the merge — never a local dna-platform branch that may have drifted.
# This is what makes the resume reliable: after a hand-merge, the branch contains the org
# tip, so the check is true and sync-up is correctly skipped (the resolution is preserved).
if git merge-base --is-ancestor origin/dna-platform "$PROJECT_NAME" 2>/dev/null; then
  echo ">>> dna-platform already merged into '$PROJECT_NAME' — skipping sync-up + merge (resume, or already current)"
else
  echo ""; echo ">>> 1  Sync working-copy library UP onto '$PROJECT_NAME'"
  up_lose="$(extra_in_dest "$CLAUDE_DIR" "$IDENTITY_REPO/.claude")"
  if [ "${up_lose:-0}" -gt 0 ] && [ "${RECONCILED:-0}" != "1" ]; then
    echo "STOP: the '$PROJECT_NAME' branch holds ${up_lose} .claude path(s) this working copy lacks."
    echo "      Syncing up would delete them (the branch is ahead — a prior reconcile not yet synced down)."
    echo "      Sync down first, or RECONCILED=1 to override."
    exit 1
  fi
  do_sync "$CLAUDE_DIR" "$IDENTITY_REPO/.claude" /MIR /XD node_modules .git run /NFL /NDL /NJH /NJS /NC /NS || exit 1
  cp "$CLAUDE_DIR/CLAUDE.md" "$IDENTITY_REPO/CLAUDE.md" 2>/dev/null || true
  rm -rf "$IDENTITY_REPO/.claude/run"
  if [ "${#lib_dirs[@]}" -gt 0 ]; then
    for d in "${lib_dirs[@]}"; do n="$(lib_name_for "$d")"; mkdir -p "$IDENTITY_REPO/.lib/$n"; do_sync "$d" "$IDENTITY_REPO/.lib/$n" /MIR /NFL /NDL /NJH /NJS /NC /NS || exit 1; done
  fi
  git add -A
  git diff --cached --quiet || git commit -m "Sync $PROJECT_NAME working-copy library to branch before pull" --quiet

  echo ""; echo ">>> 2  Merge dna-platform into '$PROJECT_NAME'"
  if ! git merge origin/dna-platform --no-edit; then
    echo ""
    echo "STOP (the manual step): merge conflict pulling dna-platform into '$PROJECT_NAME'."
    echo "  No tool can resolve a merge. In $IDENTITY_REPO (on '$PROJECT_NAME'):"
    echo "    1) resolve the conflicts (autobiographies & personal libraries merge ADDITIVELY — keep both)"
    echo "    2) git add -A && git commit --no-edit"
    echo "    3) re-run this tool — it detects the merge is done and finishes (validate, push, sync down)."
    exit 1
  fi
fi

echo ""; echo ">>> Recompile platform files from the merged chapters"
for c in 01-on-teammates 02-on-bootstrap 03-on-rules; do
  npx tsx "$IENV/$c--compiler.ts" "$ILIB" --write >/dev/null 2>&1 || { echo "STOP: compiler $c failed."; exit 1; }
done
# The skills compiler runs its OWN end-of-compile type-check — which is exactly the
# validation step 5 runs below. Defer that verdict to step 5 (so a validation problem is
# reported there, clearly, and the working copy stays untouched), but still catch a
# genuine COMPILE failure here.
if ! skills_out="$(npx tsx "$IENV/04-on-skills--compiler.ts" "$ILIB" --write 2>&1)"; then
  echo "$skills_out" | grep -q "Type-check" || { echo "STOP: skills compiler failed to compile:"; echo "$skills_out" | tail -6; exit 1; }
fi
sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
  "$IDENTITY_REPO/.claude/CLAUDE.md" > "$IDENTITY_REPO/CLAUDE.md"

echo ""; echo ">>> What changed on the branch:"
git add -A
git --no-pager diff --cached --stat | sed 's/^/    /'

echo ""; echo ">>> Validate the branch"
ok=true
npx tsx "$ILIB/bookkeeping/11-on-specifications--validator.ts" "$ILIB" >/dev/null 2>&1 || ok=false
npx tsx "$IENV/07-on-compiled-links--validator.ts" "$IDENTITY_REPO/.claude" >/dev/null 2>&1 || ok=false
if [ "$ok" = false ]; then
  echo "STOP: validation failed on the branch — the error is in a chapter. The working copy was NOT touched."
  exit 1
fi
echo "    validation: PASS"

echo ""; echo ">>> Commit + push '$PROJECT_NAME' (whenever it advanced)"
git diff --cached --quiet || git commit -m "Recompile after pull ($PROJECT_NAME)" --quiet
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
# Sync every branch library back. Discover the working copy's .lib dirs recursively
# (lib_dirs = find ... -name .lib) and pull each FROM its identity counterpart, using the
# same lib_name_for mapping the sync-up uses — the exact reverse. Correct for ANY placement
# (library/.lib at the project root, or library/<area>/.lib), never enumerated or assumed.
if [ "${#lib_dirs[@]}" -gt 0 ]; then
  for d in "${lib_dirs[@]}"; do
    n="$(lib_name_for "$d")"
    [ -d "$IDENTITY_REPO/.lib/$n" ] && do_sync "$IDENTITY_REPO/.lib/$n" "$d" /MIR /NFL /NDL /NJH /NJS /NC /NS
  done
fi
echo "    working copy now equals the verified branch."
git checkout main --quiet 2>/dev/null || true
echo "=== DONE ==="

#!/usr/bin/env bash
# 06-on-sync--pull.sh — pull org changes DOWN: phase 1, stage + merge (author: Adam)
#
# Counterpart to 06-on-sync--commit.sh (push UP). Phase 1 of the down-sync: sync this
# working copy's library UP onto the project branch, then merge dna-platform into it.
# It deliberately does NOT finish. Finishing — recompile, validate, push, sync the verified
# branch down — is a SEPARATE command, 06-on-sync--resolve.sh, so that resolving a merge has
# complete autonomy and pull never has to GUESS whether it is a fresh run or a resume. (That
# guess — an ancestor check — is exactly what once mis-fired and skipped the sync-up.)
#
#   1. Sync working-copy library UP onto the project branch.
#   2. Merge dna-platform into the project branch.
#        clean    -> hand off to 06-on-sync--resolve.sh (recompile, validate, push, sync down).
#        conflict -> STOP. Resolve by hand, commit, then run 06-on-sync--resolve.sh yourself.
#
# Usage: bash .claude/library/..environmentalism/06-on-sync--pull.sh [--no-worktree-sync]
#
# Pull does not sync the working copy, so it is never self-overwritten and needs no re-exec;
# the self-overwrite hazard lives in resolve (step 7), which re-execs from a temp copy.

set -uo pipefail

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

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
IDENTITY_REPO="$(cd "$PROJECT_ROOT/../identity" 2>/dev/null && pwd)" || { echo "ERROR: identity repo not found at $PROJECT_ROOT/../identity"; exit 1; }
CLAUDE_DIR="$PROJECT_ROOT/.claude"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
RESOLVE="$SCRIPT_DIR/06-on-sync--resolve.sh"

lib_dirs=(); while IFS= read -r d; do [ -n "$d" ] && lib_dirs+=("$d"); done < <(find "$PROJECT_ROOT/library" -type d -name .lib 2>/dev/null | sort)
lib_name_for() { if [ "$(dirname "$1")" = "$PROJECT_ROOT/library" ]; then echo "$PROJECT_NAME"; else echo "$(basename "$(dirname "$1")")"; fi; }

echo "========================================"
echo "PULL phase 1  (working copy -> $PROJECT_NAME branch -> merge dna-platform)"
echo "  identity: $IDENTITY_REPO"
echo "========================================"

cd "$IDENTITY_REPO"
git stash --quiet 2>/dev/null || true
git fetch origin --quiet 2>/dev/null || true
git checkout "$PROJECT_NAME" --quiet 2>/dev/null || git checkout -b "$PROJECT_NAME" origin/dna-platform --quiet
git merge --ff-only "origin/$PROJECT_NAME" --quiet 2>/dev/null || true

echo ""; echo ">>> 1  Sync working-copy library UP onto '$PROJECT_NAME'"
up_lose="$(extra_in_dest "$CLAUDE_DIR" "$IDENTITY_REPO/.claude")"
if [ "${up_lose:-0}" -gt 0 ] && [ "${RECONCILED:-0}" != "1" ]; then
  echo "STOP: the '$PROJECT_NAME' branch holds ${up_lose} .claude path(s) this working copy lacks."
  echo "      Syncing up would delete them (the branch is ahead — a prior reconcile not yet synced down)."
  echo "      Sync down first (06-on-sync--resolve.sh), or RECONCILED=1 to override."
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
  echo "  No tool can resolve a merge — but here is the procedure. In $IDENTITY_REPO (on '$PROJECT_NAME'):"
  echo "  * If a conflicting file is a chapter or a .cover.md, this is a CHAPTER/COVER MERGE, not text:"
  echo "      read  .claude/library/..environmentalism/06-on-sync.md  (\"Merging a book by hand\")"
  echo "      and   .claude/library/bookkeeping/03-on-covers.md       (the cover / TOC spec)."
  echo "      Keep every chapter (ADDITIVE); settle the order ON THE COVER; then rename files to unique"
  echo "      ascending numbers and rewrite the cover's TOC to match. A chapter is its TITLE, never its"
  echo "      number; a number collision is the artifact to fix, not a fact to keep."
  echo "  * Otherwise resolve the conflict by hand, additively (keep both)."
  echo "    1) git add -A && git commit --no-edit"
  echo "    2) RUN 06-on-sync--resolve.sh — the separate finisher. It recompiles, validates as the"
  echo "       gate (a botched book-merge is caught before the working copy is touched), pushes, syncs down."
  echo "  Ask Libby (librarian) if a book-merge is unclear — it is her procedure to run."
  exit 1
fi

echo ""; echo ">>> merge clean — handing off to 06-on-sync--resolve.sh"
exec bash "$RESOLVE" "$@"

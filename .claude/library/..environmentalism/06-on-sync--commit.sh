#!/usr/bin/env bash
# Commit tool — pushes changes to the right place
# Resource for: 06-on-sync.md
# Usage: bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint 61: commit message"
#        DRY_RUN=true bash .../06-on-sync--commit.sh "msg"   # validate + print the plan, mutate nothing
#
# Three-way commit:
#   1. Identity changes (.claude/) → identity repo, dna-platform branch (merged to main)
#   2. Project branch (library/*/.lib/ + downstream identity) → identity repo, <project-name> branch
#   3. Project code changes → project repo
#
# The project branch is named after the project directory (basename of PROJECT_ROOT)
# and the branch-library routing is derived from library/*/.lib — nothing is hardcoded
# to a particular project. Step 2 ALWAYS runs (even with no .lib/), so the project
# branch stays in sync with dna-platform and .claude/CLAUDE.md reach it via downstream merge.
#
# Architecture: checkout the right branch FIRST, then sync, then commit.
# Never sync files to the identity repo before selecting the target branch.

set -euo pipefail

DRY_RUN="${DRY_RUN:-false}"

# --- Helpers ---

winpath() {
    cygpath -w "$1" 2>/dev/null || echo "$1"
}

# Robocopy wrapper: converts paths for Windows, handles exit codes (0-7 = success, 8+ = failure).
# In dry-run, adds /L so robocopy LISTS what it would do and copies nothing.
do_sync() {
    local src="$(winpath "$1")"
    local dst="$(winpath "$2")"
    shift 2
    local dryflag=()
    [ "$DRY_RUN" = true ] && dryflag=(/L)
    MSYS_NO_PATHCONV=1 robocopy "$src" "$dst" "$@" "${dryflag[@]}" || {
        local rc=$?
        if [ $rc -ge 8 ]; then
            echo "ERROR: robocopy failed (exit $rc): $src -> $dst"
            return 1
        fi
    }
    return 0
}

# Ensure the PROJECT repo's .gitignore keeps identity and branch libraries private.
# Idempotent: only appends lines that are missing.
ensure_gitignore() {
    local gi="$PROJECT_ROOT/.gitignore"
    local pat changed=false
    [ -f "$gi" ] || touch "$gi"
    for pat in ".claude/" "CLAUDE.md" "**/.lib/"; do
        if ! grep -qxF "$pat" "$gi" 2>/dev/null; then
            if [ "$DRY_RUN" = true ]; then
                echo "  [dry-run] would add to .gitignore: $pat"
            else
                echo "$pat" >> "$gi"
                changed=true
            fi
        fi
    done
    [ "$changed" = true ] && echo "Updated .gitignore privacy entries (.claude/, CLAUDE.md, **/.lib/)"
    return 0
}

# Identity-side namespace for a branch library. A project-root library/.lib maps to the
# project name; a per-area library/<area>/.lib maps to the area (the .lib's parent dir).
lib_name_for() {
    if [ "$(dirname "$1")" = "$PROJECT_ROOT/library" ]; then
        echo "$PROJECT_NAME"
    else
        echo "$(basename "$(dirname "$1")")"
    fi
}

# --- Configuration ---

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
IDENTITY_REPO="$(cd "$PROJECT_ROOT/../identity" 2>/dev/null && pwd)" || {
    echo "ERROR: Identity repo not found at $PROJECT_ROOT/../identity"
    exit 1
}
CLAUDE_DIR="$PROJECT_ROOT/.claude"
COMMIT_MSG="${1:?Usage: $0 \"commit message\"}"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"

echo "========================================"
echo "COMMIT TOOL"
echo "========================================"
echo "Project root:  $PROJECT_ROOT"
echo "Identity repo: $IDENTITY_REPO"
echo "Project name:  $PROJECT_NAME  (= identity project branch)"
echo "Message:       $COMMIT_MSG"
[ "$DRY_RUN" = true ] && echo "Mode:          DRY RUN (no commits, no pushes, no file mirroring)"
echo ""

# Keep the project repo's .gitignore correct before we detect/commit project changes.
ensure_gitignore

# --- Detect what has changes ---

cd "$PROJECT_ROOT"

# Project repo changes
has_project_changes=false
if [ -n "$(git status --porcelain)" ]; then
    has_project_changes=true
fi

# We always attempt identity sync and project-branch maintenance — git diff after
# sync tells us whether anything actually changed. has_identity_changes starts true
# and is set false if the .claude/ sync produces no diff.
has_identity_changes=true

# Branch libraries are discovered generically (any .lib under library/), not hardcoded —
# this finds a project-root library/.lib as well as per-area library/<area>/.lib.
lib_dirs=()
while IFS= read -r lib_dir; do
    [ -n "$lib_dir" ] && lib_dirs+=("$lib_dir")
done < <(find "$PROJECT_ROOT/library" -type d -name .lib 2>/dev/null | sort)

echo "Checking for changes..."
echo "  Project code:           $has_project_changes"
echo "  Identity (.claude/):    (will detect after sync)"
echo "  Branch libraries:       ${#lib_dirs[@]} found (${lib_dirs[*]:-none})"
echo ""

# --- Step 0: Run validation ---

echo "========================================"
echo "RUNNING VALIDATION"
echo "========================================"

validation_passed=true
if command -v npx &>/dev/null; then
    # Absolute paths avoid the ..environmentalism → parent-directory Node bug
    bookkeeping_path="$(cd "$CLAUDE_DIR/library/bookkeeping" && pwd)/11-on-specifications--validator.ts"
    compiled_links_path="$(cd "$CLAUDE_DIR/library/..environmentalism" && pwd)/07-on-compiled-links--validator.ts"
    library_root="$(cd "$CLAUDE_DIR/library" && pwd)"
    claude_root="$(cd "$CLAUDE_DIR" && pwd)"

    echo "Running Bookkeeping validator (identity library)..."
    if npx tsx "$bookkeeping_path" "$library_root" 2>&1; then
        echo "  Bookkeeping (identity): PASS"
    else
        echo "  Bookkeeping (identity): FAIL"
        validation_passed=false
    fi
    echo ""

    # Validate all branch libraries (.lib/ directories)
    for lib_dir in "${lib_dirs[@]}"; do
        lib_name="$(lib_name_for "$lib_dir")"
        echo "Running Bookkeeping validator (branch: $lib_name)..."
        if npx tsx "$bookkeeping_path" "$lib_dir" 2>&1; then
            echo "  Bookkeeping ($lib_name): PASS"
        else
            echo "  Bookkeeping ($lib_name): FAIL"
            validation_passed=false
        fi
        echo ""
    done

    echo "Running Compiled Links validator..."
    if npx tsx "$compiled_links_path" "$claude_root" 2>&1; then
        echo "  Compiled Links: PASS"
    else
        echo "  Compiled Links: FAIL"
        validation_passed=false
    fi
    echo ""
else
    echo "WARNING: npx not found, skipping validation"
fi

if [ "$validation_passed" = false ]; then
    echo "ERROR: Structural validation failed. Fix errors before committing."
    exit 1
fi
echo ""

# --- Dry run: report the plan and stop before mutating anything ---

if [ "$DRY_RUN" = true ]; then
    echo "========================================"
    echo "DRY RUN — validation passed; mutating nothing"
    echo "========================================"
    echo "Would sync .claude/ → identity (dna-platform), commit if changed, merge to main."
    if git -C "$IDENTITY_REPO" show-ref --verify --quiet "refs/heads/$PROJECT_NAME"; then
        echo "Identity branch $PROJECT_NAME: EXISTS → would downstream-merge dna-platform into it."
    else
        echo "Identity branch $PROJECT_NAME: MISSING → would create it from dna-platform, then downstream-merge."
    fi
    if [ "${#lib_dirs[@]}" -gt 0 ]; then
        for lib_dir in "${lib_dirs[@]}"; do
            lib_name="$(lib_name_for "$lib_dir")"
            echo "Would sync $lib_dir → $IDENTITY_REPO/.lib/$lib_name on $PROJECT_NAME."
        done
    else
        echo "No branch libraries (library/*/.lib) — would still keep $PROJECT_NAME in sync with dna-platform."
    fi
    echo "Would push $PROJECT_NAME (with -u on first push)."
    [ "$has_project_changes" = true ] && echo "Would commit project code + regenerate root CLAUDE.md, then push the project repo."
    echo ""
    echo "DRY RUN complete."
    exit 0
fi

# --- Step 1: Identity changes → dna-platform (merged to main) ---

echo "========================================"
echo "IDENTITY → dna-platform branch"
echo "========================================"

cd "$IDENTITY_REPO"
# Ensure clean working tree, and that local dna-platform reflects the real org state
git stash --quiet 2>/dev/null || true
git fetch origin dna-platform --quiet 2>/dev/null || true
git checkout dna-platform --quiet
git merge --ff-only origin/dna-platform --quiet 2>/dev/null || true

# --- RECONCILED guard: refuse to clobber another project's work --------------
# /MIR makes the org branch match THIS copy, and it loses the org's work TWO ways —
# both must be guarded:
#   DELETE  — a path the org has that we lack (robocopy "*EXTRA"); /MIR purges it.
#   REVERT  — a path the org UPDATED while this copy stayed behind (robocopy "Older":
#             source older than dest); /MIR still copies it, silently regressing the
#             newer file. A reverted chapter is as lost as a deleted one, and the
#             delete-only guard never saw it (no *EXTRA) — that is the gap this closes.
# With two projects sharing dna-platform, dry-run the mirror first and REFUSE on either.
# Reconcile down first (06-on-sync--pull.sh) — a real git merge, the manual step the
# mirror can't do; override only when the loss is genuinely intended.
# NOTE: no /NC — /NC (no-class) suppresses the "*EXTRA"/"Older" markers these greps need,
# which once silently broke the guard. The do_sync mirror below may keep /NC for quiet output.
mirror_preview="$(MSYS_NO_PATHCONV=1 robocopy "$(winpath "$CLAUDE_DIR")" "$(winpath "$IDENTITY_REPO/.claude")" /MIR /L /XD node_modules run .git /NJH /NJS /NS /FP 2>&1 || true)"
would_delete="$(printf '%s\n' "$mirror_preview" | grep -ciE '\*EXTRA' || true)"
would_revert="$(printf '%s\n' "$mirror_preview" | grep -cE '^[[:space:]]+Older[[:space:]]' || true)"
if { [ "${would_delete:-0}" -gt 0 ] || [ "${would_revert:-0}" -gt 0 ]; } && [ "${RECONCILED:-0}" != "1" ]; then
  echo "REFUSING identity push: a /MIR would lose work on dna-platform —"
  echo "  ${would_delete} path(s) DELETED (org has them, this copy lacks them),"
  echo "  ${would_revert} path(s) REVERTED (org updated them, this copy is behind)."
  echo "Both are another project's or session's work. Reconcile DOWN first (the manual merge step):"
  echo "    bash \"$(dirname "${BASH_SOURCE[0]}")/06-on-sync--pull.sh\""
  echo "then re-run. Override ONLY if the loss is genuinely intended: RECONCILED=1 $0 \"<msg>\""
  exit 1
fi

# Sync .claude/ from project to identity repo
echo "Syncing .claude/..."
do_sync "$CLAUDE_DIR" "$IDENTITY_REPO/.claude" /MIR /XD node_modules run /NFL /NDL /NJH /NJS /NC /NS || exit 1
cp "$CLAUDE_DIR/CLAUDE.md" "$IDENTITY_REPO/CLAUDE.md"
# Brain runtime now lives OUTSIDE the project entirely ($TMPDIR/dna-brains/<project>/:
# cursors, reports, registry), so it never enters .claude/ and never travels to identity.
# Defensively hard-delete any legacy .claude/run/ from the dest so a previously-committed
# run/ is staged for deletion (the removal propagates downstream on push).
rm -rf "$IDENTITY_REPO/.claude/run"

# Check if anything actually changed
git add -A .claude/ CLAUDE.md
if git diff --cached --quiet; then
    echo "No identity changes (already in sync)"
    has_identity_changes=false
else
    git commit -m "$COMMIT_MSG"
    echo "Committed to dna-platform"
    git push
    echo "Pushed dna-platform"
fi

# Merge dna-platform → main
git checkout main --quiet
if [ "$has_identity_changes" = true ]; then
    if git merge dna-platform --no-edit; then
        echo "Merged dna-platform into main"
        git push
        echo "Pushed main"
    else
        echo "ERROR: Merge conflict merging dna-platform into main."
        echo "  If a conflicting file is a chapter or .cover.md, this is a CHAPTER/COVER MERGE — Libby's:"
        echo "  rewrite the cover into ONE meaningful ordering of the two histories, then rename files to match."
        echo "  Read .claude/library/..environmentalism/06-on-sync.md (\"Merging a book by hand\") and bookkeeping/03-on-covers.md."
        echo "  Resolve in $IDENTITY_REPO, then verify with BOTH validators (the link checker especially):"
        echo "    npx tsx .claude/library/bookkeeping/11-on-specifications--validator.ts .claude/library"
        echo "    npx tsx .claude/library/..environmentalism/05-on-validation--check-links.ts .claude/library"
        exit 1
    fi
fi

cd "$PROJECT_ROOT"
echo ""

# --- Step 2: Project branch maintenance + branch-library routing ---
# Runs for EVERY project, not gated on .lib/. Keeps the $PROJECT_NAME branch in sync
# with dna-platform (so .claude/CLAUDE.md reach it via downstream merge), then routes
# any library/*/.lib content onto it. Creates the branch from dna-platform if missing.

echo "========================================"
echo "PROJECT BRANCH → $PROJECT_NAME"
echo "========================================"

cd "$IDENTITY_REPO"

# Ensure the project branch exists (a project branch is always cut from dna-platform)
if git show-ref --verify --quiet "refs/heads/$PROJECT_NAME"; then
    git checkout "$PROJECT_NAME" --quiet
else
    echo "Creating $PROJECT_NAME from dna-platform"
    git checkout -b "$PROJECT_NAME" dna-platform --quiet
fi

# Downstream merge: dna-platform → project branch (brings .claude/CLAUDE.md down)
echo "Downstream merge: dna-platform → $PROJECT_NAME"
if git merge dna-platform --no-edit; then
    echo "Merged dna-platform into $PROJECT_NAME"
else
    echo "ERROR: Merge conflict during downstream merge into $PROJECT_NAME."
    echo "  If a conflicting file is a chapter or .cover.md, this is a CHAPTER/COVER MERGE — Libby's:"
    echo "  rewrite the cover into ONE meaningful ordering of the two histories, then rename files to match."
    echo "  Read .claude/library/..environmentalism/06-on-sync.md (\"Merging a book by hand\") and bookkeeping/03-on-covers.md."
    echo "  Resolve in $IDENTITY_REPO on branch $PROJECT_NAME, then verify with BOTH validators (link especially):"
    echo "    npx tsx .claude/library/bookkeeping/11-on-specifications--validator.ts .claude/library"
    echo "    npx tsx .claude/library/..environmentalism/05-on-validation--check-links.ts .claude/library"
    exit 1
fi

# Sync each branch library library/<area>/.lib → identity .lib/<area>
for lib_dir in "${lib_dirs[@]}"; do
    lib_name="$(lib_name_for "$lib_dir")"
    echo "Syncing $lib_dir → .lib/$lib_name"
    mkdir -p "$IDENTITY_REPO/.lib/$lib_name"
    do_sync "$lib_dir" "$IDENTITY_REPO/.lib/$lib_name" /MIR /NFL /NDL /NJH /NJS /NC /NS || exit 1
done

# Stage any branch-library changes (the merge itself may have already advanced the branch)
git add -A .lib/ 2>/dev/null || true
if git diff --cached --quiet; then
    echo "No new branch-library changes to commit"
else
    git commit -m "$COMMIT_MSG"
    echo "Committed branch library to $PROJECT_NAME"
fi

# Push (set upstream on the first push of a freshly-created branch)
if git rev-parse --abbrev-ref --symbolic-full-name '@{upstream}' >/dev/null 2>&1; then
    git push
else
    git push -u origin "$PROJECT_NAME"
fi
echo "Pushed $PROJECT_NAME"

# Return to main
git checkout main --quiet
cd "$PROJECT_ROOT"
echo ""

# --- Refresh the generated project-root CLAUDE.md ---
# It is a projection of .claude/CLAUDE.md (gitignored), so it tracks IDENTITY changes,
# not only project-code changes. Regenerate whenever identity changed or it is missing.
if [ "$has_identity_changes" = true ] || [ ! -f "$PROJECT_ROOT/CLAUDE.md" ]; then
    echo "Refreshing project-root CLAUDE.md (tracks .claude/CLAUDE.md)..."
    if [ "$DRY_RUN" = true ]; then
        echo "  [dry-run] would regenerate $PROJECT_ROOT/CLAUDE.md"
    else
        sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
            "$CLAUDE_DIR/CLAUDE.md" > "$PROJECT_ROOT/CLAUDE.md"
        echo "  Wrote $PROJECT_ROOT/CLAUDE.md"
    fi
    echo ""
fi

# --- Step 3: Project code → project repo ---

if [ "$has_project_changes" = true ]; then
    echo "========================================"
    echo "PROJECT CODE → project repo"
    echo "========================================"

    cd "$PROJECT_ROOT"

    echo "Changes to commit:"
    git status --short
    echo ""

    git add -A
    git commit -m "$COMMIT_MSG"
    echo "Committed to project repo"
    git push
    echo "Pushed project repo"
    echo ""
fi

# --- Final status ---

echo "========================================"
echo "DONE"
echo "========================================"
echo "  Identity:        $has_identity_changes"
echo "  Branch libs:     ${#lib_dirs[@]}"
echo "  Project code:    $has_project_changes"
echo ""

cd "$IDENTITY_REPO"
echo "Identity repo: branch=$(git branch --show-current), clean=$(git status --porcelain | wc -l | tr -d ' ') files"
cd "$PROJECT_ROOT"
echo "Project repo:  branch=$(git branch --show-current), clean=$(git status --porcelain | wc -l | tr -d ' ') files"

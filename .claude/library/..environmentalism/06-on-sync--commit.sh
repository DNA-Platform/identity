#!/usr/bin/env bash
# Commit tool — pushes changes to the right place
# Resource for: 06-on-sync.md
# Usage: bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint 61: commit message"
#        DRY_RUN=true bash .../06-on-sync--commit.sh "msg"   # validate + print the plan, mutate nothing
#
# THREE DESTINATIONS, and each is where that kind of thing belongs:
#   1. Identity (.claude/ + CLAUDE.md) → the SHARED branch, dna-platform. It is
#      project-neutral, several projects write to it, and it is the branch Doug works
#      on. Because it is shared, the CLOBBER GUARD runs before the mirror.
#      (Doug, 2026-09-05: "it should be a shared dna-platform branch and that is the
#      branch I will be working on.")
#   2. Branch libraries (library/*/.lib/) → the branch named after this repo. They are
#      project-specific, this project is their only writer, and no guard is needed.
#   3. Project code → the project repo.
#
# Nothing is hardcoded to a particular project: the branch is the project directory's
# name and the branch-library routing is derived from the library/*/.lib glob.
#
# ARCHITECTURE: both identity branches are checked out in WORKTREES OF THIS TOOL'S OWN,
# under ../.identity-sync/<branch>. The shared identity folder is never read, written or
# moved — so somebody's uncommitted work there can neither block a push nor be lost to
# one, and nothing has to be "put back" when the run ends.
# (Doug, 2026-09-05: "I had no clue you actually worked in the main folder. That is bad.")

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

# THE SYNC NEVER TOUCHES THE SHARED IDENTITY CHECKOUT. It works in worktrees of its own,
# beside the repo and inside neither, so somebody's uncommitted work in the identity
# folder can neither block this push nor be moved by it. A worktree shares the object
# database, so it costs one checkout ever and is a fast-forward on every run after.
# (Doug, 2026-09-05: "I had no clue you actually worked in the main folder. That is bad.")
IDENTITY_WORK_ROOT="${IDENTITY_WORKTREES:-$(dirname "$IDENTITY_REPO")/.identity-sync}"
# TWO DESTINATIONS. `.claude/` is project-neutral, so it goes to the SHARED branch that
# Doug works on; every library/*/.lib is project-specific, so it goes to the branch named
# after this repo. (Doug, 2026-09-05: "it should be a shared dna-platform branch and that
# is the branch I will be working on.")
IDENTITY_BRANCH="${IDENTITY_BRANCH:-dna-platform}"
SHARED_WORK="$IDENTITY_WORK_ROOT/$IDENTITY_BRANCH"
IDENTITY_WORK="$IDENTITY_WORK_ROOT/$PROJECT_NAME"

# worktree_for <branch> <path> — a DETACHED worktree at the branch's current tip.
#
# DETACHED IS THE WHOLE TRICK. A branch can be checked out in exactly one place, and the
# shared branch is checked out where Doug is working — so the sync must not want it. A
# detached worktree holds the same COMMIT without holding the BRANCH, so the tool and
# Doug can both sit on dna-platform at once. The push is `HEAD:<branch>`, and Doug's
# checkout advances when he pulls, not because a script moved it under him.
worktree_for() {
    local branch="$1" path="$2" start=""
    git -C "$IDENTITY_REPO" worktree prune --quiet 2>/dev/null || true
    git -C "$IDENTITY_REPO" fetch origin "$branch" --quiet 2>/dev/null || true
    if git -C "$IDENTITY_REPO" show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        start="origin/$branch"
    elif git -C "$IDENTITY_REPO" show-ref --verify --quiet "refs/heads/$branch"; then
        start="$branch"
    fi
    if [ ! -e "$path/.git" ]; then
        mkdir -p "$(dirname "$path")"
        rm -rf "$path"
        echo "Preparing the sync worktree at $path"
        if [ -n "$start" ]; then
            git -C "$IDENTITY_REPO" worktree add --quiet --detach "$path" "$start"
        else
            echo "Creating $branch"
            git -C "$IDENTITY_REPO" worktree add --quiet --detach "$path"
        fi
        return 0
    fi
    # Bring the worktree to the branch's tip — unless it holds commits origin does not,
    # which means a previous run committed and failed to push. Keep those and push them.
    if [ -n "$start" ]; then
        if git -C "$path" merge-base --is-ancestor HEAD "$start" 2>/dev/null; then
            git -C "$path" reset --hard --quiet "$start"
        else
            echo "NOTE: $path holds commits origin does not — pushing those too."
        fi
    fi
    return 0
}

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
    echo "Would sync .claude/ → the SHARED branch $IDENTITY_BRANCH, guarded against clobbering another project."
    echo "Would sync library/*/.lib → the repo-named branch $PROJECT_NAME."
    echo "Would work in worktrees at $SHARED_WORK and $IDENTITY_WORK — the shared identity checkout is never touched."
    if git -C "$IDENTITY_REPO" show-ref --verify --quiet "refs/heads/$PROJECT_NAME"; then
        echo "Identity branch $PROJECT_NAME: EXISTS → would fast-forward from origin, then mirror onto it."
    else
        echo "Identity branch $PROJECT_NAME: MISSING → would create it."
    fi
    if [ "${#lib_dirs[@]}" -gt 0 ]; then
        for lib_dir in "${lib_dirs[@]}"; do
            lib_name="$(lib_name_for "$lib_dir")"
            echo "Would sync $lib_dir → $IDENTITY_WORK/.lib/$lib_name (the sync worktree)."
        done
    else
        echo "No branch libraries (library/*/.lib) — .claude/ still goes to $PROJECT_NAME."
    fi
    echo "Would push $PROJECT_NAME (with -u on first push)."
    [ "$has_project_changes" = true ] && echo "Would commit project code + regenerate root CLAUDE.md, then push the project repo."
    echo ""
    echo "DRY RUN complete."
    exit 0
fi

# --- Step 1: Identity → the SHARED branch; branch libraries → the repo-named one ---
# `.claude/` is project-neutral and SHARED, so it goes to dna-platform, which Doug works
# on directly and which several projects write to — hence the clobber guard. Every
# library/*/.lib is project-specific, so it goes to the branch named after this repo,
# where this project is the only writer and no guard is needed.

echo "========================================"
echo "IDENTITY → $IDENTITY_BRANCH   (shared; the branch Doug works on)"
echo "========================================"

worktree_for "$IDENTITY_BRANCH" "$SHARED_WORK" || exit 1

# THE CLOBBER GUARD, and a SHARED branch is why it exists. A listing pass names what the
# branch has and this copy lacks — anything reported is a deletion this push would make,
# and on a branch several projects write to, that is somebody else's work.
clobber="$(MSYS_NO_PATHCONV=1 robocopy "$(winpath "$CLAUDE_DIR")" "$(winpath "$SHARED_WORK/.claude")" \
    /MIR /XD node_modules run /L /NJH /NJS /NC /NS 2>/dev/null | grep -E '\*EXTRA' || true)"
if [ -n "$clobber" ] && [ "${RECONCILED:-0}" != "1" ]; then
    echo "ERROR: this push would DELETE content $IDENTITY_BRANCH has and this copy lacks:"
    echo "$clobber" | head -20
    echo ""
    echo "       Another project may have pushed it. Reconcile with /pull, then push again."
    echo "       If you have looked and the deletions are intended: RECONCILED=1 bash ..."
    exit 1
fi

echo "Syncing .claude/..."
do_sync "$CLAUDE_DIR" "$SHARED_WORK/.claude" /MIR /XD node_modules run /NFL /NDL /NJH /NJS /NC /NS || exit 1
# The identity ROOT CLAUDE.md sits one level ABOVE .claude/, so every link in it
# needs the `.claude/` prefix — exactly like the project-root projection this script
# already generates correctly forty lines below. This was a bare `cp` of the
# unprefixed file, and it silently broke all 47 links in the identity repo's own
# root file on EVERY run. Four separate sessions found and re-fixed it by hand
# before anyone looked at the line that keeps undoing them.
#
# The rewrite is the SAME one used for the project root; a tool that only ever runs
# outward leaves its own house unmaintained, and this is that, in one line.
sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
    "$CLAUDE_DIR/CLAUDE.md" > "$SHARED_WORK/CLAUDE.md"
rm -rf "$SHARED_WORK/.claude/run"

cd "$SHARED_WORK"
git add -A .claude/ CLAUDE.md 2>/dev/null || true
if git diff --cached --quiet; then
    echo "No identity changes to commit"
    has_identity_changes=false
else
    git commit -m "$COMMIT_MSG"
    echo "Committed identity to $IDENTITY_BRANCH"
    has_identity_changes=true
fi
git push origin "HEAD:$IDENTITY_BRANCH"
echo "Pushed $IDENTITY_BRANCH"

echo ""
echo "========================================"
echo "BRANCH LIBRARIES → $PROJECT_NAME"
echo "========================================"

worktree_for "$PROJECT_NAME" "$IDENTITY_WORK" || exit 1

# Sync each branch library library/<area>/.lib → identity .lib/<area>
for lib_dir in "${lib_dirs[@]}"; do
    lib_name="$(lib_name_for "$lib_dir")"
    echo "Syncing $lib_dir → .lib/$lib_name"
    mkdir -p "$IDENTITY_WORK/.lib/$lib_name"
    do_sync "$lib_dir" "$IDENTITY_WORK/.lib/$lib_name" /MIR /NFL /NDL /NJH /NJS /NC /NS || exit 1
done

cd "$IDENTITY_WORK"
git add -A .lib/ 2>/dev/null || true
if git diff --cached --quiet; then
    echo "No branch-library changes to commit"
else
    git commit -m "$COMMIT_MSG"
    echo "Committed branch libraries to $PROJECT_NAME"
    has_identity_changes=true
fi
git push origin "HEAD:$PROJECT_NAME"
echo "Pushed $PROJECT_NAME"

# Nothing to put back: the shared identity checkout was never moved.
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

# --- Step 2: Project code → project repo ---

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

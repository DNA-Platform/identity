#!/usr/bin/env bash
# Setup tool — bring the team into a project (the inverse of the commit tool)
# Resource for: 06-on-sync.md
#
# Usage: bash <identity>/.claude/library/..environmentalism/06-on-sync--setup.sh /path/to/project
#        DRY_RUN=true bash .../06-on-sync--setup.sh /path/to/project   # report the plan, mutate nothing
#
# Brings the identity into a project so a new (or existing) repo gets the team. Idempotent —
# re-running re-syncs the identity into the project. What it does:
#   1. Locate the identity repo (the sibling "identity" of the target project).
#   2. Ensure the project's identity branch exists. The branch is named after the project
#      directory and is cut from dna-platform (the org tier) if it does not exist yet.
#   3. Mirror identity .claude/ into <project>/.claude/ (a plain mirror — no nested .git).
#   4. Generate <project>/CLAUDE.md with .claude/ link prefixes (same rewrite the commit tool uses).
#   5. Ensure <project>/.gitignore keeps the identity and branch libraries private.
#
# Repos are assumed to be siblings under one parent (parent/identity, parent/<project>).
# After setup, push changes with the commit tool:
#   bash <project>/.claude/library/..environmentalism/06-on-sync--commit.sh "message"

set -euo pipefail

DRY_RUN="${DRY_RUN:-false}"

# --- Helpers ---

winpath() {
    cygpath -w "$1" 2>/dev/null || echo "$1"
}

# Robocopy wrapper (exit 0-7 = success, 8+ = failure). In dry-run, adds /L (list only).
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

# Ensure the project's .gitignore keeps identity + branch libraries private (idempotent).
ensure_gitignore() {
    local gi="$PROJECT_ROOT/.gitignore"
    local pat
    [ -f "$gi" ] || { [ "$DRY_RUN" = true ] || touch "$gi"; }
    for pat in ".claude/" "CLAUDE.md" "**/.lib/"; do
        if ! grep -qxF "$pat" "$gi" 2>/dev/null; then
            if [ "$DRY_RUN" = true ]; then
                echo "  [dry-run] would add to .gitignore: $pat"
            else
                echo "$pat" >> "$gi"
                echo "  + .gitignore: $pat"
            fi
        fi
    done
    return 0
}

# --- Configuration ---

TARGET_ARG="${1:?Usage: $0 /path/to/project   (the new or existing project directory)}"
PROJECT_ROOT="$(cd "$TARGET_ARG" 2>/dev/null && pwd)" || {
    echo "ERROR: project directory not found: $TARGET_ARG"
    exit 1
}
PARENT="$(dirname "$PROJECT_ROOT")"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
IDENTITY_REPO="$PARENT/identity"
SOURCE_BRANCH="dna-platform"   # the org tier; project branches are cut from here

if [ ! -d "$IDENTITY_REPO/.git" ]; then
    echo "ERROR: identity repo not found at $IDENTITY_REPO"
    echo "       Clone it as a sibling first:"
    echo "         git clone git@github.com:DNA-Platform/identity.git \"$IDENTITY_REPO\""
    exit 1
fi

echo "========================================"
echo "SETUP TOOL — bring the team to a project"
echo "========================================"
echo "Project root:  $PROJECT_ROOT"
echo "Project name:  $PROJECT_NAME  (= identity project branch)"
echo "Identity repo: $IDENTITY_REPO"
[ "$DRY_RUN" = true ] && echo "Mode:          DRY RUN (no branch creation, no file mirroring, no writes)"
echo ""

if [ ! -d "$PROJECT_ROOT/.git" ]; then
    echo "NOTE: $PROJECT_ROOT is not a git repo yet. Initialize it (git init / git clone) so .gitignore takes effect."
    echo ""
fi

# --- Step 1: Ensure the project's identity branch exists (cut from dna-platform) ---

echo "----------------------------------------"
echo "Identity branch: $PROJECT_NAME"
echo "----------------------------------------"

cd "$IDENTITY_REPO"
if [ "$DRY_RUN" = true ]; then
    if git show-ref --verify --quiet "refs/heads/$PROJECT_NAME"; then
        echo "  [dry-run] branch $PROJECT_NAME EXISTS — would pull .claude/ from it"
    else
        echo "  [dry-run] branch $PROJECT_NAME MISSING — would create from $SOURCE_BRANCH, then pull from it"
    fi
else
    git stash --quiet 2>/dev/null || true
    if git show-ref --verify --quiet "refs/heads/$PROJECT_NAME"; then
        git checkout "$PROJECT_NAME" --quiet
        echo "  Checked out existing branch $PROJECT_NAME"
    else
        git checkout -b "$PROJECT_NAME" "$SOURCE_BRANCH" --quiet
        echo "  Created branch $PROJECT_NAME from $SOURCE_BRANCH"
    fi
fi
echo ""

# --- Step 2: Mirror identity .claude/ into the project (plain mirror, no .git) ---

echo "----------------------------------------"
echo "Pull: identity/.claude → $PROJECT_NAME/.claude"
echo "----------------------------------------"
do_sync "$IDENTITY_REPO/.claude" "$PROJECT_ROOT/.claude" /MIR /XD node_modules .git /NFL /NDL /NJH /NJS /NC /NS || exit 1
echo "  Mirrored .claude/"
echo ""

# --- Step 3: Generate the project-root CLAUDE.md (.claude/ link prefixes) ---

echo "----------------------------------------"
echo "Generate: project-root CLAUDE.md"
echo "----------------------------------------"
if [ "$DRY_RUN" = true ]; then
    echo "  [dry-run] would generate $PROJECT_ROOT/CLAUDE.md from .claude/CLAUDE.md (with .claude/ prefixes)"
else
    sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
        "$PROJECT_ROOT/.claude/CLAUDE.md" > "$PROJECT_ROOT/CLAUDE.md"
    echo "  Wrote CLAUDE.md"
fi
echo ""

# --- Step 4: Ensure .gitignore privacy ---

echo "----------------------------------------"
echo ".gitignore (.claude/, CLAUDE.md, **/.lib/)"
echo "----------------------------------------"
ensure_gitignore
echo ""

# --- Restore identity to main ---

if [ "$DRY_RUN" != true ]; then
    git -C "$IDENTITY_REPO" checkout main --quiet 2>/dev/null || true
fi

# --- Done ---

echo "========================================"
echo "DONE — the team has landed in $PROJECT_NAME"
echo "========================================"
echo "Next:"
echo "  - Open the project; CLAUDE.md + the skills are live."
echo "  - Push changes with the commit tool (it creates/syncs the $PROJECT_NAME branch and validates first):"
echo "      bash .claude/library/..environmentalism/06-on-sync--commit.sh \"message\""

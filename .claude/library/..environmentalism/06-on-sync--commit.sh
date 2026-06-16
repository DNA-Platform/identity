#!/usr/bin/env bash
# Commit tool — pushes changes to the right place
# Resource for: 06-on-sync.md
# Usage: bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint 61: commit message"
#
# Three-way commit:
#   1. Identity changes (.claude/) → identity repo, dna-platform branch (merged to main)
#   2. Branch library changes (library/*/.lib/) → identity repo, inexplicable-phenomena branch
#   3. Project code changes → project repo, main branch
#
# Architecture: checkout the right branch FIRST, then sync, then commit.
# Never sync files to the identity repo before selecting the target branch.

set -euo pipefail

# --- Helpers ---

winpath() {
    cygpath -w "$1" 2>/dev/null || echo "$1"
}

# Robocopy wrapper: converts paths for Windows, handles exit codes (0-7 = success, 8+ = failure)
do_sync() {
    local src="$(winpath "$1")"
    local dst="$(winpath "$2")"
    shift 2
    MSYS_NO_PATHCONV=1 robocopy "$src" "$dst" "$@" || {
        local rc=$?
        if [ $rc -ge 8 ]; then
            echo "ERROR: robocopy failed (exit $rc): $src -> $dst"
            return 1
        fi
    }
    return 0
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
echo "Project name:  $PROJECT_NAME"
echo "Message:       $COMMIT_MSG"
echo ""

# --- Detect what has changes ---

cd "$PROJECT_ROOT"

# Project repo changes
has_project_changes=false
if [ -n "$(git status --porcelain)" ]; then
    has_project_changes=true
fi

# We always attempt identity and .lib sync — git diff after sync tells us
# whether anything actually changed. The flag starts true and gets set to
# false if sync produces no diff.
has_identity_changes=true
has_lib_changes=false
if [ -d "$PROJECT_ROOT/library/chemistry/.lib" ]; then
    has_lib_changes=true
fi

echo "Checking for changes..."
echo "  Project code:           $has_project_changes"
echo "  Identity (.claude/):    (will detect after sync)"
echo "  Branch library (.lib/): $has_lib_changes"
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
    for lib_dir in "$PROJECT_ROOT"/library/*/.lib; do
        if [ -d "$lib_dir" ]; then
            lib_name="$(basename "$(dirname "$lib_dir")")"
            echo "Running Bookkeeping validator (branch: $lib_name)..."
            if npx tsx "$bookkeeping_path" "$lib_dir" 2>&1; then
                echo "  Bookkeeping ($lib_name): PASS"
            else
                echo "  Bookkeeping ($lib_name): FAIL"
                validation_passed=false
            fi
            echo ""
        fi
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

# --- Step 1: Identity changes → dna-platform (merged to main) ---

echo "========================================"
echo "IDENTITY → dna-platform branch"
echo "========================================"

cd "$IDENTITY_REPO"
# Ensure clean working tree
git stash --quiet 2>/dev/null || true
git checkout dna-platform --quiet

# Sync .claude/ from project to identity repo
echo "Syncing .claude/..."
do_sync "$CLAUDE_DIR" "$IDENTITY_REPO/.claude" /MIR /XD node_modules /NFL /NDL /NJH /NJS /NC /NS || exit 1
cp "$CLAUDE_DIR/CLAUDE.md" "$IDENTITY_REPO/CLAUDE.md"

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
        echo "ERROR: Merge conflict merging dna-platform into main"
        echo "Resolve manually in $IDENTITY_REPO"
        exit 1
    fi
fi

cd "$PROJECT_ROOT"
echo ""

# --- Step 2: .lib/ changes → project branch ---

if [ "$has_lib_changes" = true ]; then
    echo "========================================"
    echo "BRANCH LIBRARY → $PROJECT_NAME branch"
    echo "========================================"

    cd "$IDENTITY_REPO"
    git checkout "$PROJECT_NAME" --quiet

    # Downstream merge from dna-platform
    echo "Downstream merge: dna-platform → $PROJECT_NAME"
    if git merge dna-platform --no-edit; then
        echo "Merged dna-platform into $PROJECT_NAME"
    else
        echo "ERROR: Merge conflict during downstream merge"
        echo "Resolve manually in $IDENTITY_REPO on branch $PROJECT_NAME"
        exit 1
    fi

    # Sync .lib/ from project working tree
    echo "Syncing .lib/..."
    mkdir -p "$IDENTITY_REPO/.lib/chemistry"
    do_sync "$PROJECT_ROOT/library/chemistry/.lib" "$IDENTITY_REPO/.lib/chemistry" /MIR /NFL /NDL /NJH /NJS /NC /NS || exit 1

    git add -A .lib/
    if git diff --cached --quiet; then
        echo "No .lib/ changes (already in sync)"
        has_lib_changes=false
    else
        git commit -m "$COMMIT_MSG"
        echo "Committed to $PROJECT_NAME"
    fi

    git push
    echo "Pushed $PROJECT_NAME"

    # Return to main
    git checkout main --quiet
    cd "$PROJECT_ROOT"
    echo ""
fi

# --- Step 3: Project code → project repo ---

if [ "$has_project_changes" = true ]; then
    echo "========================================"
    echo "PROJECT CODE → project repo"
    echo "========================================"

    cd "$PROJECT_ROOT"

    # Generate project-root CLAUDE.md with .claude/ prefix on links
    echo "Generating project-root CLAUDE.md..."
    sed 's|\](\(library/\)|\](.claude/\1|g; s|\](\(agents/\)|\](.claude/\1|g; s|\](\(rules/\)|\](.claude/\1|g; s|\](\(skills/\)|\](.claude/\1|g' \
        "$CLAUDE_DIR/CLAUDE.md" > "$PROJECT_ROOT/CLAUDE.md"

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
echo "  Identity:  $has_identity_changes"
echo "  .lib/:     $has_lib_changes"
echo "  Project:   $has_project_changes"
echo ""

cd "$IDENTITY_REPO"
echo "Identity repo: branch=$(git branch --show-current), clean=$(git status --porcelain | wc -l | tr -d ' ') files"
cd "$PROJECT_ROOT"
echo "Project repo:  branch=$(git branch --show-current), clean=$(git status --porcelain | wc -l | tr -d ' ') files"

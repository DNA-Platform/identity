#!/usr/bin/env bash
# Branch scaffold tool — stand up a .lib branch library's covers in one command
# Resource for: 04-setup.md (Library Tree)
#
# Usage: bash .claude/library/library-tree/04-setup--scaffold.sh <lib-dir> "<Subject Name>" [ProjectionAuthor]
#   <lib-dir>           the .lib directory (created if missing) — e.g. library/.lib or library/chemistry/.lib
#   "<Subject Name>"    the subject the branch represents (the cataloguing book) — e.g. "Altered States"
#   [ProjectionAuthor]  teammate who shapes sprints (default: Arthur)
#
# Generates the cataloguing book (..<slug>) and Projection covers with correct Bookkeeping
# frontmatter and author-link depth (computed from where the .lib sits — the part humans get
# wrong). It does NOT edit the identity catalogue/territory or push: it PRINTS the exact
# snippets to paste, then you fill the TODO prose, add them, and push with the commit tool.
# Idempotent — it never overwrites an existing cover.

set -euo pipefail

LIB_DIR_ARG="${1:?Usage: $0 <lib-dir> \"<Subject Name>\" [ProjectionAuthor]}"
SUBJECT="${2:?Usage: $0 <lib-dir> \"<Subject Name>\" [ProjectionAuthor]}"
PROJ_AUTHOR="${3:-Arthur}"

# Autobiography path (relative to .claude/library/) for an author link
autobio_path() {
    case "$1" in
        Arthur) echo "..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md" ;;
        Libby)  echo "..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md" ;;
        Claude) echo "..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md" ;;
        Cathy)  echo "..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md" ;;
        Adam)   echo "..teamsmanship/..team/adam/adam-between-the-wires/.cover.md" ;;
        David)  echo "..teamsmanship/..team/david/the-devops-journal/.cover.md" ;;
        *)      echo "..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md" ;;
    esac
}

mkdir -p "$LIB_DIR_ARG"
LIB_DIR="$(cd "$LIB_DIR_ARG" && pwd)"

# Project root = nearest ancestor containing .claude/
root="$LIB_DIR"
while [ "$root" != "/" ] && [ ! -d "$root/.claude" ]; do root="$(dirname "$root")"; done
[ -d "$root/.claude" ] || { echo "ERROR: no .claude/ found above $LIB_DIR"; exit 1; }
PROJECT_ROOT="$root"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"

# Slug: lowercase, non-alphanumerics -> hyphens
slug="$(echo "$SUBJECT" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]\{1,\}/-/g; s/^-//; s/-$//')"
CAT_DIR="$LIB_DIR/..$slug"
PROJ_DIR="$LIB_DIR/projection"

# ../ prefix from a book dir inside the .lib up to the project root (counts path segments)
depth_prefix() {
    local rel="${1#$PROJECT_ROOT/}"
    local n; n="$(printf '%s' "$rel" | tr '/' '\n' | grep -c .)"
    local p="" i
    for ((i=0; i<n; i++)); do p="../$p"; done
    printf '%s' "$p"
}

echo "Project root:  $PROJECT_ROOT"
echo "Branch .lib:   $LIB_DIR"
echo "Subject:       $SUBJECT  (cataloguing book: ..$slug)"
echo "Projection by: $PROJ_AUTHOR"
echo ""

# --- Cataloguing book ---
if [ -e "$CAT_DIR/.cover.md" ]; then
    echo "SKIP   cataloguing book exists: $CAT_DIR/.cover.md"
else
    mkdir -p "$CAT_DIR"
    cat > "$CAT_DIR/.cover.md" <<EOF
# $SUBJECT

- **catalogues:** $SUBJECT
- **author:** [Libby]($(depth_prefix "$CAT_DIR").claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **subject:** [$SUBJECT](.cover.md)

---

TODO (voiceless, one paragraph): what this branch records — the team's applied knowledge of the $PROJECT_NAME project (decisions, learnings, the journey), not what any code does. $SUBJECT catalogues that knowledge as it accumulates.

## Books

### [$SUBJECT](.cover.md) — $SUBJECT

Self-cataloguing. The branch library knowing what it knows about the project.

### [Projection](../projection/.cover.md)

The sprint-by-sprint record — what each sprint aimed to do, what was built, and what was learned. The branch's autobiography, populated as the work proceeds.
EOF
    echo "CREATE cataloguing book: $CAT_DIR/.cover.md"
fi

# --- Projection ---
if [ -e "$PROJ_DIR/.cover.md" ]; then
    echo "SKIP   Projection exists: $PROJ_DIR/.cover.md"
else
    mkdir -p "$PROJ_DIR"
    cat > "$PROJ_DIR/.cover.md" <<EOF
# Projection

- **author:** [$PROJ_AUTHOR]($(depth_prefix "$PROJ_DIR").claude/library/$(autobio_path "$PROJ_AUTHOR"))
- **subject:** [$SUBJECT](../..$slug/.cover.md)

---

TODO (voiceless, one paragraph): the sprint-by-sprint record of the team's effort on $PROJECT_NAME. A projection maps the team's sprints onto this branch; each chapter is one sprint; the last is the current state. Empty at creation, it grows as sprints are written.

## Sprints

_No sprints recorded yet. Each sprint becomes a numbered chapter here, listed with a one-line description, as the work proceeds._
EOF
    echo "CREATE Projection: $PROJ_DIR/.cover.md"
fi

# --- Snippets to paste into the identity library (then fill TODO prose, add, and push) ---
liblocrel="${LIB_DIR#$PROJECT_ROOT/}"
catlink="../../../../$PROJECT_NAME/$liblocrel/..$slug/.cover.md"
projlink="../../../../$PROJECT_NAME/$liblocrel/projection/.cover.md"

cat <<EOF

==== NEXT (paste into the identity library, fill the prose, then push) ====

[1] library-tree/05-branches.md  — add under "## Branches":

### $SUBJECT

- **Repo:** $PROJECT_NAME
- **Location:** [\`$liblocrel/\`](../../../../$PROJECT_NAME/$liblocrel/)
- **Cataloguing book:** [$SUBJECT]($catlink)
- **Sprint book:** [Projection]($projlink)

<one paragraph: what the branch records and why>

[2] library-tree/01-branches.md  — add under "## Known branches":

### [$SUBJECT]($catlink) — $SUBJECT

<one short paragraph mirroring the 05 entry>

[3] ..teamsmanship/05-territory.md  — add under "## Branch library assignments":

| \`$liblocrel/**\` | Libby | The librarian tends all branch content. |
| \`$liblocrel/..$slug/**\` | Libby | The cataloguing book — the branch's identity. |
| \`$liblocrel/projection/**\` | $PROJ_AUTHOR | Sprint planning within the branch. |

[4] Push:  bash .claude/library/..environmentalism/06-on-sync--commit.sh "Set up the $SUBJECT branch"
EOF

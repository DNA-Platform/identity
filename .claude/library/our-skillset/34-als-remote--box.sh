#!/usr/bin/env bash
# als-remote — drive the lab box (lipshutzlab-01) from this machine over Tailscale SSH.
# Resource for: 34-als-remote.md
#
# Usage, from the altered-states repo root:
#   bash .claude/library/our-skillset/34-als-remote--box.sh check              is the box reachable, and if not, why
#   bash .claude/library/our-skillset/34-als-remote--box.sh run  '<command>'   run in the box's main clone
#   bash .claude/library/our-skillset/34-als-remote--box.sh sudo '<command>'   the same, as root
#   bash .claude/library/our-skillset/34-als-remote--box.sh sync [--replace]   the box's main := this working copy
#   bash .claude/library/our-skillset/34-als-remote--box.sh ignored            the ignored paths that travel by `send`
#   bash .claude/library/our-skillset/34-als-remote--box.sh send <path>...     copy ignored files, verified by sha256
#   bash .claude/library/our-skillset/34-als-remote--box.sh send-list <file>   send every path in <file>, one at a time
#
# Environment (only `sudo` needs anything set):
#   ALS_REMOTE_HOST      user@host                     default lipshutzlab-01@lipshutzlab-01
#   ALS_REMOTE_ROOT      folder under the box's home   default doug/altered-states
#   ALS_REMOTE_PASSWORD  the box user's sudo password  if unset, read from the Windows USER environment
#
# Never travels: .claude/, CLAUDE.md and every .lib/ (identity has them), .venv/ (rebuilt on the box
# from the freeze), bytecode. Local records of what was sent live in .git/als-remote/, never tracked.

set -euo pipefail

HOST=${ALS_REMOTE_HOST:-lipshutzlab-01@lipshutzlab-01}
ROOT=${ALS_REMOTE_ROOT:-doug/altered-states}
MAIN=$ROOT/main
REPO=$(git rev-parse --show-toplevel)
RECORD=$REPO/.git/als-remote
TAILSCALE="/c/Program Files/Tailscale/tailscale.exe"
SSH=(ssh -o BatchMode=yes -o ConnectTimeout=20 -o ServerAliveInterval=30 -o StrictHostKeyChecking=accept-new)

box() { "${SSH[@]}" "$HOST" "$@"; }

# A script over stdin, so no command ever needs a second layer of quoting.
box_script() { printf '%s\n' "$1" | box "cd $MAIN && bash -s"; }

check() {
    [ -x "$TAILSCALE" ] || { echo "Tailscale is not installed on this machine."; return 1; }
    "$TAILSCALE" ping -c 1 "${HOST#*@}" 2>&1 | head -1 || true
    local out
    if out=$(box 'hostname; uptime -p' 2>&1); then
        echo "ssh ok: $(echo "$out" | tr '\n' ' ')"
    else
        echo "ssh failed: $out"
        case $out in
            *"connect to host"*"Permission denied"*|*forbidden*)
                echo "Windows refused the socket before it left this machine: ProtonVPN's kill switch blocks the"
                echo "tailnet. Disconnect Proton, or exclude 100.64.0.0/10 in its split tunnelling." ;;
            *"Could not resolve"*)
                echo "The name does not resolve: Tailscale is down here, or MagicDNS is off." ;;
        esac
        return 1
    fi
}

password() {
    local p=${ALS_REMOTE_PASSWORD:-}
    [ -n "$p" ] || p=$(powershell -NoProfile -Command \
        "[Environment]::GetEnvironmentVariable('ALS_REMOTE_PASSWORD','User')" 2>/dev/null | tr -d '\r\n')
    [ -n "$p" ] || { echo "ALS_REMOTE_PASSWORD is not set; the skill has the one-line setup." >&2; return 1; }
    printf '%s' "$p"
}

# -k ignores any cached sudo ticket, so sudo ALWAYS reads the password line first; the rest of
# stdin is the script. Without -k a cached ticket would leave the password to be run as a command.
sudo_script() {
    local p
    p=$(password) || return 1
    printf '%s\n%s\n' "$p" "$1" | box "cd $MAIN && sudo -k -S -p '' bash -s"
}

# The box's state, as two tree hashes: the index, and the whole working tree as `git add -A` sees it.
STATE_SCRIPT='i=$(git write-tree); cp .git/index .git/index-als; GIT_INDEX_FILE=.git/index-als git add -A;
w=$(GIT_INDEX_FILE=.git/index-als git write-tree); rm -f .git/index-als; echo "$(git rev-parse HEAD) $i $w"'

# The box's main is a mirror of this working copy: nothing is ever committed there. HEAD arrives as a
# bundle of the commits it lacks; the index and the working tree arrive as two patches built by git
# here, so this checkout's CRLF files land as LF, exactly as a commit would record them. Parity is
# three hashes (HEAD, index tree, working tree) equal on both ends.
sync_git() {
    cd "$REPO"
    [ "$(git rev-parse --abbrev-ref HEAD)" = main ] || { echo "sync runs from main"; return 1; }
    local head origin index_tree work_tree box_state last tmp
    head=$(git rev-parse HEAD)
    origin=$(git rev-parse -q --verify origin/main || true)
    index_tree=$(git write-tree)
    cp .git/index .git/index-als
    GIT_INDEX_FILE=.git/index-als git add -A 2>/dev/null
    work_tree=$(GIT_INDEX_FILE=.git/index-als git write-tree)
    rm -f .git/index-als
    echo "here: HEAD $head  index $index_tree  work $work_tree"

    box_state=$(box_script "$STATE_SCRIPT")
    echo "box:  HEAD ${box_state%% *}  index $(echo "$box_state" | cut -d' ' -f2)  work ${box_state##* }"
    if [ "$box_state" = "$head $index_tree $work_tree" ]; then
        box "echo '$box_state' > $MAIN/.git/als-last-sync"; echo "already at parity"; return 0
    fi

    # Anything uncommitted on the box must be exactly what the last sync left, or it is someone's work.
    last=$(box "cat $MAIN/.git/als-last-sync 2>/dev/null || true")
    if [ "$(box "git -C $MAIN status --porcelain | head -1")" ]; then
        if [ "$box_state" != "$last" ] && [ "${1:-}" != --replace ]; then
            echo "The box's main has uncommitted changes that the last sync did not leave. Refusing;"
            echo "look with:  run 'git status'   and rerun with --replace to discard them."
            return 1
        fi
        box_script "git reset -q --hard && git clean -fdq"
    fi

    tmp=$(mktemp -d)
    box "mkdir -p $ROOT/.transfer"
    local box_head=${box_state%% *}
    if [ "$box_head" != "$head" ]; then
        git merge-base --is-ancestor "$box_head" "$head" 2>/dev/null \
            || { echo "The box's HEAD $box_head is not an ancestor of HEAD here; refusing."; return 1; }
        git bundle create -q "$tmp/commits.bundle" "$box_head..main"
        scp -q -o BatchMode=yes "$tmp/commits.bundle" "$HOST:$ROOT/.transfer/"
        box_script "git fetch -q ../.transfer/commits.bundle main && git merge -q --ff-only FETCH_HEAD"
    fi
    [ -n "$origin" ] && box_script "git cat-file -e $origin^{commit} 2>/dev/null && git update-ref refs/remotes/origin/main $origin || true"

    git diff --cached --binary --no-renames HEAD > "$tmp/index.patch"
    git diff --binary --no-renames HEAD "$work_tree" > "$tmp/worktree.patch"
    echo "patches: index $(du -h "$tmp/index.patch" | cut -f1), working tree $(du -h "$tmp/worktree.patch" | cut -f1)"
    scp -q -o BatchMode=yes "$tmp/index.patch" "$tmp/worktree.patch" "$HOST:$ROOT/.transfer/"
    box_script "[ ! -s ../.transfer/index.patch ] || git apply --cached ../.transfer/index.patch
[ ! -s ../.transfer/worktree.patch ] || git apply ../.transfer/worktree.patch"
    rm -rf "$tmp"
    box "rm -rf $ROOT/.transfer"

    box_state=$(box_script "$STATE_SCRIPT")
    if [ "$box_state" = "$head $index_tree $work_tree" ]; then
        box "echo '$box_state' > $MAIN/.git/als-last-sync"
        echo "PARITY OK: HEAD, index and working tree hash the same on both ends"
    else
        echo "PARITY MISMATCH: box is now $box_state"; return 1
    fi
}

# Ignored paths that travel: data, caches, logs. Not identity, not the venv, not bytecode.
# Git names a folder and sometimes files inside it too; the folder covers them, so they are dropped.
ignored() {
    cd "$REPO"
    git ls-files -z --others --ignored --exclude-standard --directory | tr '\0' '\n' \
        | grep -v -E '^(\.claude/|CLAUDE\.md$|\.venv/|\.vscode/)|(^|/)(__pycache__|\.pytest_cache|\.ipynb_checkpoints|\.lib)/|\.egg-info/' \
        | LC_ALL=C sort | awk 'last == "" || index($0, last) != 1 { print; last = ($0 ~ /\/$/) ? $0 : "" }' \
        || true
}

# One path (file or folder, relative to the repo root): hash here, stream it, verify there, record it.
# A path whose manifest already verifies on the box is skipped, so a stopped run resumes where it was.
send_one() {
    local p=${1%/} name man start files bytes
    cd "$REPO"
    [ -e "$p" ] || { echo "missing here: $p"; return 1; }
    case $p in .claude|.claude/*|CLAUDE.md|*/.lib|*/.lib/*|.lib|.lib/*|.venv|.venv/*)
        echo "refusing $p: identity and the venv never travel"; return 1 ;; esac
    name=$(printf '%s' "$p" | tr -c 'A-Za-z0-9._-' '_')
    man=$RECORD/manifests/$name.sha256
    mkdir -p "$RECORD/manifests"
    find "$p" -type f -print0 | sort -z | xargs -0 -r sha256sum > "$man.new" || return 1
    files=$(wc -l < "$man.new")
    bytes=$(find "$p" -type f -printf '%s\n' | awk '{s+=$1} END {print s+0}')
    if [ -f "$man" ] && cmp -s "$man" "$man.new" \
        && box "cd $MAIN && sha256sum -c --quiet --status -" < "$man.new" 2>/dev/null; then
        rm -f "$man.new"; echo "verified already: $p"; return 0
    fi
    start=$(date +%s)
    tar -cf - "$p" | gzip -1 | box "mkdir -p $MAIN && cd $MAIN && gzip -dc | tar -xf -" || return 1
    box "cd $MAIN && sha256sum -c --quiet -" < "$man.new" || { echo "VERIFY FAILED: $p"; return 1; }
    mv "$man.new" "$man"
    local secs=$(( $(date +%s) - start ))
    printf '%s\t%s\t%s files\t%s bytes\t%s s\n' "$(date -Is)" "$p" "$files" "$bytes" "$secs" >> "$RECORD/sent.tsv"
    echo "sent and verified: $p ($files files, $(( bytes / 1048576 )) MB, ${secs}s)"
}

send_list() {
    local list=$1 p ok=0 failed=0
    while IFS= read -r p || [ -n "$p" ]; do
        [ -n "$p" ] || continue
        if send_one "$p"; then ok=$((ok + 1)); else failed=$((failed + 1)); echo "FAILED: $p"; fi
    done < "$list"
    echo "done: $ok ok, $failed failed"
    [ "$failed" -eq 0 ]
}

cmd=${1:-check}; shift || true
case $cmd in
    check)     check ;;
    run)       box_script "$*" ;;
    sudo)      sudo_script "$*" ;;
    sync)      sync_git "$@" ;;
    ignored)   ignored ;;
    send)      for p in "$@"; do send_one "$p"; done ;;
    send-list) send_list "$1" ;;
    *)         sed -n '2,16p' "$0"; exit 2 ;;
esac

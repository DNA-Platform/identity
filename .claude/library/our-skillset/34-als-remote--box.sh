#!/usr/bin/env bash
# als-remote — drive the lab box (lipshutzlab-01) from this machine over Tailscale SSH.
# Resource for: 34-als-remote.md. Its partner, 34-als-remote--run.sh, is the run itself, on the box.
#
# Usage, from the altered-states repo root (T=.claude/library/our-skillset/34-als-remote--box.sh):
#   bash $T check                        is the box reachable, and if not, why
#   bash $T run  '<command>'             run in the box's main clone
#   bash $T sudo '<command>'             the same, as root
#   bash $T pull [--discard]             the box's main := GitHub's main (= HEAD here, once pushed)
#   bash $T launch <name> '<command>'    the run protocol: pull, branch, run detached, commit, push
#   bash $T status [<branch>]            the runs on the box, or one run's state and log
#   bash $T harvest <branch>             pull a finished run's branch here, into main
#   bash $T ignored                      the ignored paths that travel by `send`
#   bash $T send <path>...               copy ignored files to the box, verified by sha256
#   bash $T send-list <file>             send every path in <file>, one at a time
#   bash $T receive <box-path> <path>    copy a file or folder back from the box, verified
#   bash $T python [cpu|cuda]            the box's Python, inside the folder
#
# Environment (only `sudo` needs anything set):
#   ALS_REMOTE_HOST      user@host                     default lipshutzlab-01@lipshutzlab-01
#   ALS_REMOTE_ROOT      folder under the box's home   default doug/altered-states
#   ALS_REMOTE_PASSWORD  the box user's sudo password  if unset, read from the Windows USER environment
#
# Never travels: .claude/, CLAUDE.md and every .lib/ (identity has them), .venv/ (rebuilt on the box),
# .vscode/, bytecode. Local records of what was sent live in .git/als-remote/, never tracked.

set -euo pipefail

HOST=${ALS_REMOTE_HOST:-lipshutzlab-01@lipshutzlab-01}
ROOT=${ALS_REMOTE_ROOT:-doug/altered-states}
MAIN=$ROOT/main
REPO=$(git rev-parse --show-toplevel)
HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
RECORD=$REPO/.git/als-remote
TAILSCALE="/c/Program Files/Tailscale/tailscale.exe"
SSH=(ssh -o BatchMode=yes -o ConnectTimeout=20 -o ServerAliveInterval=30 -o StrictHostKeyChecking=accept-new)

box() { "${SSH[@]}" "$HOST" "$@"; }

# The box's account is shared by the lab, so nothing of ours may land in its home: uv, its Python,
# every cache and every config live under $ROOT/.tools, and PATH changes only inside our commands.
# Doug, 2026-09-26: "We need this to be local to the folder. We need to not disrupt other users."
BOX_ENV='A=$HOME/'"$ROOT"'
export UV_INSTALL_DIR=$A/.tools/bin UV_NO_MODIFY_PATH=1 UV_PYTHON_INSTALL_DIR=$A/.tools/python
export UV_PYTHON_BIN_DIR=$A/.tools/bin UV_CACHE_DIR=$A/.tools/cache/uv UV_TOOL_DIR=$A/.tools/uv-tools
export PIP_CACHE_DIR=$A/.tools/cache/pip XDG_CACHE_HOME=$A/.tools/cache XDG_CONFIG_HOME=$A/.tools/config
export XDG_DATA_HOME=$A/.tools/data XDG_STATE_HOME=$A/.tools/state
export MPLCONFIGDIR=$A/.tools/config/matplotlib TORCH_HOME=$A/.tools/cache/torch
export PATH=$A/.tools/bin:$PATH'

# A script over stdin, so no command ever needs a second layer of quoting.
box_script() { printf '%s\n%s\n' "$BOX_ENV" "$1" | box "cd $MAIN && bash -s"; }

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

# Step 1 of the protocol is here: a run starts only from committed, pushed work.
require_pushed() {
    cd "$REPO"
    [ "$(git rev-parse --abbrev-ref HEAD)" = main ] || { echo "not on main here"; return 1; }
    git fetch -q origin main
    [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] \
        || { echo "HEAD here is not GitHub's main: commit everything and push first (/push)."; return 1; }
    [ "${1:-}" != clean ] || [ -z "$(git status --porcelain)" ] \
        || { echo "uncommitted work here: commit everything and push first (/push)."; git status --short | head; return 1; }
}

# Step 2: the box's main fast-forwards to GitHub's main with its deploy key. Uncommitted state on the
# box is discarded only when it is exactly the tree being pulled (so nothing is lost), or on --discard.
box_pull() {
    local head name email out
    require_pushed || return 1
    head=$(git rev-parse HEAD); name=$(git config user.name); email=$(git config user.email)
    out=$(box_script "set -e
git config user.name '$name'; git config user.email '$email'
git fetch -q origin
git checkout -q main
if [ -n \"\$(git status --porcelain)\" ]; then
    cp .git/index .git/index-als; GIT_INDEX_FILE=.git/index-als git add -A
    w=\$(GIT_INDEX_FILE=.git/index-als git write-tree); rm -f .git/index-als
    if [ \$w = \$(git rev-parse origin/main^{tree}) ] || [ '${1:-}' = --discard ]; then
        git reset -q --hard; git clean -fdq
    else
        echo 'The box has uncommitted changes that are not in GitHub main. Refusing; look with'
        echo \"run 'git status', and pull --discard to drop them.\"; git status --short | head; exit 3
    fi
fi
git merge -q --ff-only origin/main
echo \"\$(git rev-parse HEAD) \$(git status --porcelain | wc -l)\"") || { echo "$out"; return 1; }
    local box_head=${out%% *} dirty=${out##* }
    if [ "$box_head" = "$head" ] && [ "$dirty" = 0 ]; then
        echo "PULLED: the box's main is $head, clean, the same as here and on GitHub"
    else
        echo "PULL MISMATCH: box at $box_head with $dirty uncommitted paths; here at $head"; return 1
    fi
}

# Steps 3-4: a branch named for tracking, as a worktree beside main; the scans linked in from main
# (they are immutable input, never copied per run); the run started detached, surviving disconnect.
launch() {
    local name=${1:-} cmd=${2:-} branch
    [ -n "$name" ] && [ -n "$cmd" ] || { echo "usage: launch <name> '<command>'"; return 2; }
    [[ $name =~ ^[A-Za-z0-9-]+$ ]] || { echo "a run name is letters, digits and hyphens"; return 2; }
    require_pushed clean || return 1
    box_pull || return 1
    branch=run-$(date +%Y%m%d-%H%M)-$name
    scp -q -o BatchMode=yes "$HERE/34-als-remote--run.sh" "$HOST:$ROOT/.tools/run.sh"
    box_script "set -e
cat > \$A/.tools/env.sh <<'ALS_ENV_END'
$BOX_ENV
ALS_ENV_END
git worktree add -q ../$branch -b $branch
exclude=\$(git rev-parse --git-common-dir)/info/exclude
git ls-files -z --others --ignored --exclude-standard --directory library/data | tr '\0' '\n' | while IFS= read -r p; do
    p=\${p%/}
    ln -sfn \$A/main/\$p ../$branch/\$p
    grep -qxF \"/\$p\" \$exclude || echo \"/\$p\" >> \$exclude
done
mkdir -p ../$branch/runs/$branch
cat > ../$branch/runs/$branch/command.sh <<'ALS_COMMAND_END'
$cmd
ALS_COMMAND_END
cd ../$branch
setsid nohup bash ../.tools/run.sh $branch > ../$branch.out 2>&1 < /dev/null &
echo \"launched $branch in ~/$ROOT/$branch\""
}

# Where the runs stand: running or finished, exit code, pushed or not, the log's tail.
status() {
    local branch=${1:-}
    if [ -z "$branch" ]; then
        box_script 'for d in ../run-*/; do [ -d "$d" ] || continue; b=$(basename "$d")
    state=finished; pgrep -f "run.sh $b" >/dev/null && state=running
    printf "%-44s %-9s %s\n" "$b" "$state" "$(grep -h "^exit:" "$d/runs/$b/meta.txt" 2>/dev/null)"
done'
        return
    fi
    box_script "cd ../$branch && cat runs/$branch/meta.txt; git status -sb | head -1
pgrep -f 'run.sh $branch' >/dev/null && echo 'state:   running' || echo 'state:   finished'
echo '--- log'; tail -15 runs/$branch/log.txt 2>/dev/null; echo '--- driver'; tail -3 ../$branch.out
nvidia-smi --query-gpu=utilization.gpu,memory.used --format=csv,noheader 2>/dev/null || true"
}

# Step 5: the run comes home through GitHub, into main here.
harvest() {
    local branch=${1:-}
    [ -n "$branch" ] || { echo "usage: harvest <branch>"; return 2; }
    cd "$REPO"
    [ "$(git rev-parse --abbrev-ref HEAD)" = main ] && [ -z "$(git status --porcelain)" ] \
        || { echo "harvest needs a clean main here"; return 1; }
    git fetch -q origin "$branch"
    # MSYS would rewrite "origin/x:runs/..." as a Windows path list; git must see it verbatim.
    MSYS_NO_PATHCONV=1 git show "origin/$branch:runs/$branch/meta.txt"
    MSYS_NO_PATHCONV=1 git show "origin/$branch:runs/$branch/not-committed.tsv" 2>/dev/null \
        | sed 's/^/stayed on the box (receive it): /' || true
    git merge -q --ff-only "origin/$branch" \
        || { echo "main has moved since the run's base; merge origin/$branch by hand"; return 1; }
    echo "HARVESTED: main is now $(git rev-parse --short HEAD), the run's commit"
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

# The way back for what GitHub cannot carry: <box-path> is relative to ~/doug/altered-states.
receive() {
    local src=${1%/} dst=${2:-}
    [ -n "$src" ] && [ -n "$dst" ] || { echo "usage: receive <box-path> <local-dir>"; return 2; }
    local man; man=$(mktemp)
    box "cd $ROOT && find '$src' -type f -print0 | sort -z | xargs -0 -r sha256sum" > "$man" || return 1
    mkdir -p "$dst"
    box "cd $ROOT && tar -cf - '$src' | gzip -1" | gzip -dc | tar -xf - -C "$dst" || return 1
    (cd "$dst" && sha256sum -c --quiet -) < "$man" || { echo "VERIFY FAILED: $src"; return 1; }
    echo "received and verified: $src -> $dst/$src ($(wc -l < "$man") files)"; rm -f "$man"
}

# Packages installed here past their own metadata, which a resolver cannot reproduce: each one whose
# declared dependencies are not all installed here (egg, installed without wandb and blobfile).
installed_past_metadata() {
    "$1" - <<'PY'
import importlib.metadata as md
from packaging.requirements import Requirement
from packaging.utils import canonicalize_name as c
installed = {c(d.metadata["Name"]) for d in md.distributions()}
for d in md.distributions():
    for r in d.requires or []:
        req = Requirement(r)
        if req.marker and not req.marker.evaluate({"extra": ""}):
            continue
        if c(req.name) not in installed:
            print(c(d.metadata["Name"]))
            break
PY
}

# The box's lock, GENERATED by the compiler (uv pip compile) from this venv's ACTUAL package list (it
# has drifted from requirements.txt), for Linux and this Python. Stage 1 is the lock; stage 2 is what
# was installed here past its metadata, installed there the same way, --no-deps — the order the lock
# itself documents for mei. Compiler conflicts join stage 2 one at a time until the rest compiles.
box_lock() {
    local variant=$1 here_python=$2 py_version=$3 out=$4 pkg err i index=()
    [ "$variant" = cpu ] && index=(--extra-index-url https://download.pytorch.org/whl/cpu
                                   --index-strategy unsafe-best-match --emit-index-url)
    uv pip freeze --python "$here_python" | grep -v -E '^pywinpty==' > "$out/stage1.txt"   # Windows-only
    [ "$variant" = cuda ] && sed -i -E 's/^(torch|torchvision)==([^+]+)\+cpu$/\1==\2/' "$out/stage1.txt"
    : > "$out/stage2.txt"
    move_to_stage2() {
        grep -i -E "^$1( @|==)" "$out/stage1.txt" >> "$out/stage2.txt" || true
        grep -v -i -E "^$1( @|==)" "$out/stage1.txt" > "$out/stage1.tmp"; mv "$out/stage1.tmp" "$out/stage1.txt"
    }
    for pkg in $(installed_past_metadata "$here_python"); do move_to_stage2 "$pkg"; done
    for i in 1 2 3 4 5 6 7 8 9 10; do
        err=$(uv pip compile "$out/stage1.txt" --python-version "$py_version" \
            --python-platform x86_64-manylinux_2_28 "${index[@]}" --quiet -o "$out/lock.txt" 2>&1) && return 0
        pkg=$(echo "$err" | tr '\n' ' ' | grep -o -E "Because (only )?[A-Za-z0-9_.-]+(==[^ ]+)? (is available and|depends)" \
            | head -1 | awk '{print ($2 == "only") ? $3 : $2}' | sed 's/==.*//')
        [ -n "$pkg" ] || { echo "$err"; return 1; }
        echo "compiler conflict, installed --no-deps: $pkg"; move_to_stage2 "$pkg"
    done
    echo "the lock would not compile"; return 1
}

# The box's Python, built to match this machine's: the same uv, the same interpreter, the compiled
# lock above. Everything lands in $ROOT/.tools and main/.venv. With no argument: uv, Python and an
# empty venv. With cpu|cuda: also the packages, torch as here (cpu) or the CUDA build of the same
# version (cuda). The generated lock is kept in .git/als-remote/ here and .tools/ there.
python_env() {
    local variant=${1:-} here_python=$REPO/.venv/Scripts/python.exe uv_version py_version tmp index=()
    case $variant in ''|cpu|cuda) ;; *) echo "usage: python [cpu|cuda]"; return 1 ;; esac
    uv_version=$(uv --version | awk '{print $2}')
    py_version=$("$here_python" -c 'import platform; print(platform.python_version())')
    echo "uv $uv_version, Python $py_version"
    box_script "set -e; mkdir -p \$A/.tools/bin
[ \"\$(uv --version 2>/dev/null | awk '{print \$2}')\" = $uv_version ] || curl -LsSf \
    https://github.com/astral-sh/uv/releases/download/$uv_version/uv-x86_64-unknown-linux-gnu.tar.gz \
    | tar -xz --strip-components=1 -C \$A/.tools/bin
uv python install -q $py_version
[ -x .venv/bin/python ] || uv venv -q --python $py_version .venv
echo \"box: \$(uv --version), \$(.venv/bin/python -V), venv at main/.venv\"" || return 1
    [ -n "$variant" ] || return 0

    tmp=$RECORD/lock-$variant; rm -rf "$tmp"; mkdir -p "$tmp"
    box_lock "$variant" "$here_python" "$py_version" "$tmp" || return 1
    echo "lock: $(grep -c -E '^[A-Za-z0-9]' "$tmp/lock.txt") packages compiled for Linux; --no-deps: $(cut -d' ' -f1 "$tmp/stage2.txt" | cut -d= -f1 | tr '\n' ' ')"
    [ "$variant" = cpu ] && index=(--index-strategy unsafe-best-match)
    scp -q -o BatchMode=yes "$tmp/lock.txt" "$HOST:$ROOT/.tools/lock-$variant.txt"
    scp -q -o BatchMode=yes "$tmp/stage2.txt" "$HOST:$ROOT/.tools/no-deps-$variant.txt"
    box_script "set -e
uv pip sync -q --python .venv/bin/python ${index[*]} ../.tools/lock-$variant.txt
uv pip install -q --python .venv/bin/python --no-deps -r ../.tools/no-deps-$variant.txt
.venv/bin/python -c 'import torch, numpy, sensorium, neuralpredictors, mei; print(\"torch\", torch.__version__, \"cuda available:\", torch.cuda.is_available(), \"numpy\", numpy.__version__)'"
}

cmd=${1:-check}; shift || true
case $cmd in
    check)     check ;;
    run)       box_script "$*" ;;
    sudo)      sudo_script "$*" ;;
    pull)      box_pull "${1:-}" ;;
    launch)    launch "${1:-}" "${2:-}" ;;
    status)    status "${1:-}" ;;
    harvest)   harvest "${1:-}" ;;
    ignored)   ignored ;;
    send)      for p in "$@"; do send_one "$p"; done ;;
    send-list) send_list "$1" ;;
    receive)   receive "${1:-}" "${2:-}" ;;
    python)    python_env "${1:-}" ;;
    *)         sed -n '2,25p' "$0"; exit 2 ;;
esac

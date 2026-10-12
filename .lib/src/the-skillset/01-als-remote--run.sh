#!/usr/bin/env bash
# The run, on the box: record it, execute it, commit everything it made, push its branch.
# Resource for: 01-als-remote.md. `launch` copies this to ~/doug/altered-states/.tools/run.sh and
# starts it detached from the run's worktree:   bash ../.tools/run.sh <branch>
# The command is runs/<branch>/command.sh, written by `launch` and committed with everything else.
set -uo pipefail

branch=$1
A=$(cd .. && pwd)
R=runs/$branch
LIMIT=$((95 * 1024 * 1024))   # GitHub refuses a file over 100 MB; larger ones stay here, hashed

source "$A/.tools/env.sh"     # the folder's own environment: nothing lands in the shared home
export VIRTUAL_ENV=$A/main/.venv PATH=$A/main/.venv/bin:$PATH
export ALS_ROOT=$A ALS_RUN=$branch    # for the command: the folder and the run's name

{
    echo "branch:  $branch"
    echo "base:    $(git rev-parse HEAD)"
    echo "host:    $(hostname)"
    echo "start:   $(date -Is)"
} > "$R/meta.txt"
{
    echo "## python";   python -V 2>&1
    echo; echo "## packages"; uv pip freeze --python "$VIRTUAL_ENV/bin/python" 2>&1
    echo; echo "## gpu";      nvidia-smi 2>&1
    echo; echo "## system";   uname -a; nproc; free -g
} > "$R/environment.txt"

bash "$R/command.sh" > "$R/log.txt" 2>&1
rc=$?
{ echo "end:     $(date -Is)"; echo "exit:    $rc"; } >> "$R/meta.txt"

# THE STORE, 2026-10-12: what the pipelines store (src/pipelines/store.py) stays in this worktree, out of git; its
# manifests record every file's sha256 and are committed with the run, and `close` adopts the files into the box's
# main and replenishes them home by those manifests. Doug: "We'll need to have some sort of manifest or other
# document that can be checked in, so that it can inform a fresh puller how to replenish the data store."
if [ -f src/pipelines/store.py ]; then
    (cd src && python -m pipelines.store record) >> "$R/log.txt" 2>&1 || echo "store record failed" >> "$R/log.txt"
fi

# Everything else the run made is committed, failed runs included. A file GitHub would refuse is left
# out and recorded with its sha256, so `receive` can bring it back and prove the bytes.
git add -A
: > "$R/not-committed.tsv"
git diff --cached --name-only --diff-filter=AM -z | while IFS= read -r -d '' f; do
    size=$(stat -c %s -- "$f")
    if [ "$size" -gt "$LIMIT" ]; then
        git reset -q -- "$f"
        printf '%s\t%s\t%s\n' "$(sha256sum -- "$f" | cut -d' ' -f1)" "$size" "$f" >> "$R/not-committed.tsv"
    fi
done
[ -s "$R/not-committed.tsv" ] || rm -f "$R/not-committed.tsv"
git add -A -- "$R"
git commit -q -m "run $branch: exit $rc" -m "$(cat "$R/command.sh")"

for i in 1 2 3 4 5; do
    if git push -q -u origin "$branch"; then echo "pushed $(date -Is)"; exit "$rc"; fi
    sleep $((i * 60))
done
echo "PUSH FAILED $(date -Is): the run is committed here, on $branch, and not on GitHub"
exit 1

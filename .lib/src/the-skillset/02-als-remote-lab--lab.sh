#!/usr/bin/env bash
# Resource for: 02-als-remote-lab.md. Reach the Reimer lab at BCM through the box.
#
# Usage, from the altered-states repo root (L=src/.lib/the-skillset/02-als-remote-lab--lab.sh):
#   bash $L check                              key logins to every compute server, the database through the box
#   bash $L run <host> '<command>'             a command on a compute server (001, 003, 005), not recorded
#   bash $L probe <name> <host> '<command>'    the same, RECORDED in runs/lab/ and committed, machines synced
#   bash $L container <name> <host> <file.py> [--out]
#                                              a Python file in the lab's image on a compute server, the lab
#                                              password on its stdin, RECORDED and committed; with --out it may
#                                              write to /out, a folder of its own in doug's home on that server
#   bash $L fetch <name> <host> <dir>          the newest --out folder of <name>, streamed here through the box
#                                              into <dir>/, every file checked against its MANIFEST.sha256
#   bash $L tunnel up|down|status              the lab database on 127.0.0.1:$LAB_PORT here, through the box
#   bash $L kube <kubectl arguments>           kubectl on the lab's GPU cluster, namespace doug, through the box
#
# THE CHAIN. This machine -> the box (Tailscale SSH) -> the BCM network. Every login is by this machine's
# key (~/.ssh/reimer_ed25519), jumping through the box; the box forwards the connection and holds nothing,
# because its account is shared. The lab password lives in .env here (REIMER_PASSWORD) and reaches the
# lab only as the first line of a process's stdin - never a command line, never an environment
# `docker inspect` could show the docker group, never a file.
set -uo pipefail

REPO=$(git rev-parse --show-toplevel)
HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
BOX=${ALS_REMOTE_HOST:-lipshutzlab-01@lipshutzlab-01}
KEY=${LAB_KEY:-$HOME/.ssh/reimer_ed25519}
USER_AT=doug
DOMAIN=ad.bcm.edu
DATABASE=jr-database.$DOMAIN
LAB_PORT=${LAB_PORT:-13306}
# The lab's image, as Erin's notebook runs it (02-01, How the lab works). Overridable per call.
IMAGE=${LAB_IMAGE:-jr-saltmaster.ad.bcm.edu:5000/ml-gpu-pipeline:cleaned}
# A shared server: our containers ask for a share, not the machine. The lab's own limits replace these
# once the lab says what they are (asked 2026-10-05).
CPUS=${LAB_CPUS:-4}
MEMORY=${LAB_MEMORY:-16g}
RECORDS=$REPO/runs/lab
PIDFILE=$REPO/.git/als-remote-lab-tunnel.pid      # inside .git: never committed, never synced
# The GPU cluster. Its config (Ming, 2026-10-05) is a client key: it lives on this machine only, outside
# the repo, like the SSH key. Its server is on BCM's network, so kubectl reaches it through the box.
KUBECONFIG_FILE=${LAB_KUBECONFIG:-$HOME/.kube/jr-k8s.yaml}
KUBE_API=$(sed -n 's|^ *server: https://||p' "$KUBECONFIG_FILE" 2>/dev/null | head -1 | tr -d '\r')
KUBE_PORT=${KUBE_PORT:-16443}
KUBE_PIDFILE=$REPO/.git/als-remote-lab-kube.pid
# The config pins the API server's own certificate; it names kubernetes, not 127.0.0.1.
KUBE_TLS_NAME=kubernetes

host_of() {
    case $1 in
        001|003|005) echo "jr-compute$1.$DOMAIN" ;;
        jr-compute00[135]) echo "$1.$DOMAIN" ;;
        jr-compute00[135].$DOMAIN) echo "$1" ;;
        *) echo "unknown host '$1': one of 001, 003, 005" >&2; return 1 ;;
    esac
}

ssh_lab() {   # ssh_lab <full host> <remote command>  (stdin passes through)
    ssh -o BatchMode=yes -o ConnectTimeout=20 -o IdentitiesOnly=yes -i "$KEY" \
        -o StrictHostKeyChecking=accept-new -J "$BOX" "$USER_AT@$1" "$2"
}

secret() {    # the same rule as the box tool's: read here, from .env, never printed
    local v=""
    [ -f "$REPO/.env" ] && v=$(sed -n "s/^$1=//p" "$REPO/.env" | tail -1 | tr -d '\r\n')
    [ -n "$v" ] || { echo "no $1 in $REPO/.env - it goes there and nowhere else" >&2; return 1; }
    printf '%s' "$v"
}

# A record is committed and pushed with the machines brought into step, because Doug, 2026-10-05:
# "I must insist that we use github to keep everything in sync".
commit_record() {   # commit_record <name> <files...>
    local name=$1; shift
    cd "$REPO"
    # the pattern comes in on a pipe (-f), so the password is never an argument in a process list
    if grep -qF -f <(secret REIMER_PASSWORD) "$@" 2>/dev/null; then
        echo "REFUSED: the lab password appears in the record - not committing" >&2; return 1
    fi
    git add -- "$@" && git commit -q -m "lab: $name" -- "$@" \
        && bash "$HERE/01-als-remote--box.sh" sync | tail -1 \
        && echo "(recorded: $(git log --oneline -1 | cut -c1-60))"
}

check() {
    local h
    for h in 001 003 005; do
        printf 'jr-compute%s: ' "$h"
        ssh_lab "$(host_of $h)" 'echo "key login ok, $(nproc) CPUs, $(docker ps -q | wc -l) containers running"' 2>&1 | tail -1
    done
    printf 'jr-database: '
    timeout 20 ssh -o BatchMode=yes -o ConnectTimeout=15 -W "$DATABASE:3306" "$BOX" </dev/null 2>/dev/null \
        | head -c 40 | tr -c '[:print:]' '.' | grep -q 'mysql\|5\.7' && echo "answers through the box" \
        || echo "no answer through the box"
    printf 'GPU cluster: '
    [ -f "$KUBECONFIG_FILE" ] || echo "no config at $KUBECONFIG_FILE"
    [ -f "$KUBECONFIG_FILE" ] && ssh -o BatchMode=yes -o ConnectTimeout=15 "$BOX" \
        "timeout 5 bash -c '</dev/tcp/${KUBE_API%:*}/${KUBE_API#*:}'" 2>/dev/null \
        && echo "the API server answers through the box" || { [ -f "$KUBECONFIG_FILE" ] && echo "no answer through the box"; }
    tunnel status || true          # down is the normal state, not a failed check
}

run_cmd() { ssh_lab "$(host_of "$1")" "$2"; }

probe() {
    local name=$1 host=$2 cmd=$3 stamp
    [[ $name =~ ^[A-Za-z0-9-]+$ ]] || { echo "a probe name is letters, digits and hyphens"; return 2; }
    stamp=$(date +%Y%m%d-%H%M%S)
    mkdir -p "$RECORDS"
    printf '# on %s, %s\n%s\n' "$(host_of "$host")" "$(date -Iseconds)" "$cmd" > "$RECORDS/$stamp-$name.sh"
    ssh_lab "$(host_of "$host")" "$cmd" 2>&1 | tee "$RECORDS/$stamp-$name.out"
    commit_record "$name" "$RECORDS/$stamp-$name.sh" "$RECORDS/$stamp-$name.out"
}

container() {
    local name=$1 host=$2 file=$3 out=${4:-} stamp tag prepare="" mounts="" where=""
    [[ $name =~ ^[A-Za-z0-9-]+$ ]] || { echo "a container run's name is letters, digits and hyphens"; return 2; }
    [ -f "$file" ] || { echo "no file $file"; return 2; }
    stamp=$(date +%Y%m%d-%H%M%S)
    tag=doug-$name-$stamp
    if [ "$out" = "--out" ]; then
        # A folder of its own in doug's home on that server, mounted at /out. The container runs as doug, so
        # what it writes is his; the lab's storage stays read-only. `fetch` brings the folder here.
        prepare="mkdir -p ~/doug-out/$tag && chmod 700 ~/doug-out ~/doug-out/$tag && "
        mounts="-v \$HOME/doug-out/$tag:/out -w /out --user \$(id -u):\$(id -g) -e HOME=/tmp"
        where=", writing to ~/doug-out/$tag"
    elif [ -n "$out" ]; then
        echo "the fourth argument is --out, or nothing"; return 2
    fi
    mkdir -p "$RECORDS"
    cp "$file" "$RECORDS/$stamp-$name.py"
    printf '# %s in %s on %s, --cpus %s --memory %s%s, %s\n' "$tag" "$IMAGE" "$(host_of "$host")" "$CPUS" "$MEMORY" \
        "$where" "$(date -Iseconds)" > "$RECORDS/$stamp-$name.sh"
    # The password is line one of stdin; the file follows. Inside, PASSWORD is a variable the file uses.
    { secret REIMER_PASSWORD && printf '\n'; cat "$file"; } \
        | ssh_lab "$(host_of "$host")" "${prepare}docker run --rm -i --name $tag --cpus $CPUS --memory $MEMORY \
            -v /mnt:/mnt:ro $mounts \
            --entrypoint python3 $IMAGE -c 'import sys; PASSWORD = sys.stdin.readline().rstrip(chr(10)); exec(sys.stdin.read())'" \
        2>&1 | tee "$RECORDS/$stamp-$name.out"
    commit_record "$name" "$RECORDS/$stamp-$name.py" "$RECORDS/$stamp-$name.sh" "$RECORDS/$stamp-$name.out"
}

fetch() {    # the newest --out folder of a run, through the box, checked file by file against its manifest
    local name=$1 host=$2 dest=$3 folder
    [[ $name =~ ^[A-Za-z0-9-]+$ ]] || { echo "a run's name is letters, digits and hyphens"; return 2; }
    folder=$(ssh_lab "$(host_of "$host")" "ls -1d ~/doug-out/doug-$name-* 2>/dev/null | sort | tail -1" | tr -d '\r')
    [ -n "$folder" ] || { echo "no output of $name on $(host_of "$host")"; return 1; }
    folder=$(basename "$folder")
    mkdir -p "$dest"
    ssh_lab "$(host_of "$host")" "tar -C ~/doug-out -cf - $folder" | tar -C "$dest" -xf - \
        || { echo "the transfer of $folder failed"; return 1; }
    (
        cd "$dest/$folder" || exit 1
        [ -f MANIFEST.sha256 ] || { echo "$folder has no MANIFEST.sha256 - nothing to check it against"; exit 1; }
        sha256sum --quiet -c MANIFEST.sha256 || { echo "$folder: files differ from the manifest"; exit 1; }
        listed=$(grep -c . MANIFEST.sha256); present=$(find . -type f ! -name MANIFEST.sha256 | wc -l)
        [ "$listed" -eq "$present" ] || { echo "$folder: $present files, $listed in the manifest"; exit 1; }
        echo "fetched $folder: $present files, every one matching the manifest"
    )
}

listening() { (exec 3<>"/dev/tcp/127.0.0.1/$1") 2>/dev/null; }

forward() {   # forward <local port> <target host:port> <pidfile>: an ssh -L through the box, left running
    listening "$1" && return 0
    nohup ssh -N -o BatchMode=yes -o ExitOnForwardFailure=yes -o ServerAliveInterval=30 \
        -L "127.0.0.1:$1:$2" "$BOX" >/dev/null 2>&1 &
    echo $! > "$3"; disown 2>/dev/null || true
    local i; for i in 1 2 3 4 5 6 7 8 9 10; do listening "$1" && return 0; sleep 1; done
    return 1
}

tunnel() {
    case ${1:-status} in
        up)
            forward "$LAB_PORT" "$DATABASE:3306" "$PIDFILE"; tunnel status ;;
        down)            # both forwards: the database's and the cluster's
            local file; for file in "$PIDFILE" "$KUBE_PIDFILE"; do
                [ -f "$file" ] && kill "$(cat "$file")" 2>/dev/null; rm -f "$file"
            done
            echo "tunnel down" ;;
        status)
            listening "$KUBE_PORT" && echo "the GPU cluster's API is 127.0.0.1:$KUBE_PORT here"
            if listening "$LAB_PORT"; then echo "tunnel up: the lab database is 127.0.0.1:$LAB_PORT here"; return 0; fi
            echo "tunnel down"; return 1 ;;
        *) echo "usage: tunnel up|down|status"; return 2 ;;
    esac
}

kube() {
    [ -f "$KUBECONFIG_FILE" ] || { echo "no cluster config at $KUBECONFIG_FILE - it lives on this machine only"; return 1; }
    command -v kubectl >/dev/null || { echo "no kubectl here: v1.30.1, the cluster's version, from dl.k8s.io"; return 1; }
    forward "$KUBE_PORT" "$KUBE_API" "$KUBE_PIDFILE" || { echo "the cluster's API did not answer through the box"; return 1; }
    # MSYS_NO_PATHCONV: Git Bash would otherwise rewrite an argument like /apis/... into a Windows path,
    # so the one real path is converted by hand
    local config; config=$(cygpath -w "$KUBECONFIG_FILE" 2>/dev/null || echo "$KUBECONFIG_FILE")
    MSYS_NO_PATHCONV=1 kubectl --kubeconfig "$config" --server "https://127.0.0.1:$KUBE_PORT" \
        --tls-server-name "$KUBE_TLS_NAME" --request-timeout 30s "$@"
}

main() {
    local cmd=${1:-}; shift || true
    case $cmd in
        check)     check ;;
        run)       run_cmd "$@" ;;
        probe)     probe "$@" ;;
        container) container "$@" ;;
        fetch)     fetch "$@" ;;
        tunnel)    tunnel "$@" ;;
        kube)      kube "$@" ;;
        *) sed -n '3,17p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; return 2 ;;
    esac
}
main "$@"

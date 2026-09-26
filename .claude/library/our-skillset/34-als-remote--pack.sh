#!/usr/bin/env bash
# Pack jobs onto the box's GPU: start the next one only when the card has measured room for it.
# Resource for: 34-als-remote.md. `launch` copies it to ~/doug/altered-states/.tools/pack.sh; a run's
# command calls it:   bash "$ALS_ROOT/.tools/pack.sh" <jobs-file> <log-dir>
# One shell command per line of <jobs-file>, run from the caller's directory, each logged to its own
# file in <log-dir>. Doug, 2026-09-26: "Make sure you get the most out of the machine. No one else is
# using it."
#
# HOW ROOM IS MEASURED, NOT GUESSED. The first job runs alone until it is READY (its log matches
# $PACK_READY, the first epoch by default) or ends; the largest per-process GPU memory seen so far is
# then the size of a job, and the next starts only while free memory exceeds it by $PACK_HEADROOM
# percent. A job that dies of memory anyway is not retried here: the caller's next step (for twins,
# the conductor) trains whatever is still missing, one at a time.
set -uo pipefail

jobs_file=$1
logs=$2
READY=${PACK_READY:-epoch 1 }
HEADROOM=${PACK_HEADROOM:-25}
mkdir -p "$logs"
say() { echo "$(date -Is) $*" | tee -a "$logs/pack.log"; }

largest=0
pids=()
running() { local p n=0; for p in "${pids[@]}"; do kill -0 "$p" 2>/dev/null && n=$((n + 1)); done; echo $n; }
measure() {
    local m
    for m in $(nvidia-smi --query-compute-apps=used_memory --format=csv,noheader,nounits 2>/dev/null); do
        [ "$m" -gt "$largest" ] && largest=$m
    done
    return 0
}

n=0
while IFS= read -r job || [ -n "$job" ]; do
    [ -n "$job" ] || continue
    n=$((n + 1))
    while [ "$(running)" -gt 0 ]; do
        measure
        free=$(nvidia-smi --query-gpu=memory.free --format=csv,noheader,nounits | head -1)
        if [ "$largest" -gt 0 ] && [ "$free" -gt $((largest * (100 + HEADROOM) / 100)) ]; then break; fi
        sleep 30
    done
    log="$logs/$(printf '%02d' $n).log"
    say "start $n ($(running) running; a job has used up to ${largest} MiB): $job"
    bash -c "$job" > "$log" 2>&1 &
    pids+=($!)
    for _ in $(seq 1 240); do                      # up to an hour to reach steady state
        grep -q -- "$READY" "$log" 2>/dev/null && break
        kill -0 "${pids[-1]}" 2>/dev/null || break
        sleep 15
    done
    measure
done < "$jobs_file"

failed=0
for i in "${!pids[@]}"; do
    wait "${pids[$i]}" || { failed=$((failed + 1)); say "job $((i + 1)) exited non-zero - see $(printf '%02d' $((i + 1))).log"; }
done
say "all $n jobs ended, $failed failed; the most memory one job used: ${largest} MiB"
exit 0

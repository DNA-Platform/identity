#!/usr/bin/env bash
# 08-on-brains--dispatch.sh — wake a teammate's brain (author: Adam)
#
# A brain is a persistent, resumable `claude` subprocess — one per teammate,
# seeded under a fixed session UUID and resumed forever after. The VOICE talks
# in the main conversation; the BRAIN reads, remembers, and writes off to the
# side. Heavy library reading and ALL personal-library writing happen in the
# brain, so context persists across turns and survives compaction. You talk to
# your brain the way you think.
#
# Run it NON-BLOCKING (harness run_in_background, or append ' &') so the voice
# keeps talking while the brain thinks. The brain's report prints to stdout AND
# is saved to a runtime dir OUTSIDE the project .claude/ — runtime is the
# machine's record, never compiled/catalogued config (On Platform Layout:
# #compiled-config-vs-runtime). Path: $TMPDIR/dna-brains/<project>/brains/<name>.last.md.
#
# Usage:
#   08-on-brains--dispatch.sh <name> "<message>"   # wake <name>'s brain
#   08-on-brains--dispatch.sh --list               # show registry + cursors
#
# See 08-on-brains.md for the model and how to configure it.
set -uo pipefail

# --- locate .claude / project ----------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"   # .../.claude
PROJECT_DIR="$(cd "$CLAUDE_DIR/.." && pwd)"     # project root
# Runtime state lives OUTSIDE the project .claude/ — it is the machine's record,
# not catalogued knowledge (On Platform Layout #compiled-config-vs-runtime). A
# real temp dir, namespaced per project; NEVER resurrect .claude/run/.
RUN_DIR="${TMPDIR:-/tmp}/dna-brains/$(basename "$PROJECT_DIR")"
BRAIN_DIR="$RUN_DIR/brains"
CURSOR_DIR="$RUN_DIR/cursors"
REG="$RUN_DIR/sessions.json"
mkdir -p "$BRAIN_DIR" "$CURSOR_DIR"

# --- canonical brain UUIDs (committed config; arthur's is Doug's original) ---
declare -A UUID=(
  [arthur]=aaaa2222-0000-4000-8000-000000000002
  [cathy]=cccc2222-0000-4000-8000-000000000003
  [libby]=11bb2222-0000-4000-8000-000000000004
  [adam]=ada22222-0000-4000-8000-000000000005
  [david]=da172222-0000-4000-8000-000000000006
  [phillip]=ff112222-0000-4000-8000-000000000007
  [queenie]=99ee2222-0000-4000-8000-000000000008
  [gabby]=9abb2222-0000-4000-8000-000000000009
  [nancy]=bbbb2222-0000-4000-8000-00000000000b
  [claude]=c1ad2222-0000-4000-8000-00000000000c
)

# --- locate the active team transcript (for self-catchup deltas) ------------
TX_DIR="$(ls -d "$HOME"/.claude/projects/*altered-states* 2>/dev/null | head -1)"
TX="$(ls -t "$TX_DIR"/*.jsonl 2>/dev/null | grep -vE '/[0-9a-f]{8}-[0-9a-f]{4}-4000-8000-' | head -1)"
# (the grep -v skips brain session files so the cursor tracks the *team* transcript)

# --- --list -----------------------------------------------------------------
if [ "${1:-}" = "--list" ]; then
  printf '%-9s %-40s %-8s %s\n' NAME SESSION-UUID CURSOR SEEDED?
  for n in $(printf '%s\n' "${!UUID[@]}" | sort); do
    u="${UUID[$n]}"
    c="$(cat "$CURSOR_DIR/$n.cursor" 2>/dev/null || echo 0)"
    s="no"; [ -f "$TX_DIR/$u.jsonl" ] && s="yes"
    printf '%-9s %-40s %-8s %s\n' "$n" "$u" "$c" "$s"
  done
  echo
  echo "team transcript: ${TX:-<none found>}"
  exit 0
fi

# --- resolve teammate -------------------------------------------------------
name="${1:-}"; shift || true
msg="${*:-}"
uuid="${UUID[$name]:-}"
if [ -z "$uuid" ]; then
  echo "Unknown teammate: '$name'. Known: ${!UUID[*]}" >&2
  exit 1
fi
if [ -z "$msg" ]; then
  echo "No message. Usage: $0 <name> \"<message>\"" >&2
  exit 1
fi

# --- seed vs resume, and the catch-up cursor --------------------------------
sess_file="$TX_DIR/$uuid.jsonl"
cursor_file="$CURSOR_DIR/$name.cursor"
cursor="$(cat "$cursor_file" 2>/dev/null || echo 0)"
total="$(wc -l < "$TX" 2>/dev/null | tr -d ' ')"; total="${total:-0}"
delta=$(( total - cursor ))

if [ -f "$sess_file" ]; then
  mode=(--resume "$uuid")
  if [ "$delta" -gt 1500 ]; then
    catchup="A lot has happened since you last looked (${delta} new transcript lines). The message above summarizes it; read the tail of the transcript only if you need specifics:
  ${TX}"
  else
    catchup="To catch up on what happened while you were away, read the new transcript lines ${cursor}-${total} of
  ${TX}
yourself (${delta} new lines) — only as deep as you need (three speeds: skim, focus, or full read)."
  fi
else
  mode=(--session-id "$uuid")
  catchup="This is your first wake here. Your teammate identity is already loaded — to restore yourself, read your last autobiography chapter (the link is in your agent handle) and skim the library catalogue. The message above is your briefing; you don't need the back-transcript."
fi

# --- build the prompt -------------------------------------------------------
PROMPT="${msg}

—
You are running as ${name}'s brain: a persistent background process that reads, remembers, and writes while the voice talks in the main conversation. Speak as yourself — your identity is loaded.
${catchup}
Do your reading and any personal-library writing now (writing is the brain's job, never the voice's). When done, end with a block headed \"REPORT BACK:\" — the thought the voice will speak up in the main conversation. Be concise; the voice paraphrases, it does not paste."

# --- run the brain (this is the expensive part; run me non-blocking) --------
echo ">>> waking ${name}'s brain (${mode[0]} ${uuid}); catching up ${delta} lines..." >&2
out="$(cd "$PROJECT_DIR" && claude -p "${mode[@]}" --agent "$name" \
        --dangerously-skip-permissions "$PROMPT" </dev/null 2>&1)"
rc=$?
# </dev/null so a backgrounded brain never blocks on stdin. Persistence is native:
# the CLI stores each session at ~/.claude/projects/<slug>/<uuid>.jsonl; --resume reloads it.

# --- save report + advance cursor + refresh registry ------------------------
{ echo "# ${name} — brain report"; echo; echo "$out"; } > "$BRAIN_DIR/$name.last.md"
echo "$total" > "$cursor_file"

# rewrite a small registry for inspection
{
  echo "{"
  first=1
  for n in $(printf '%s\n' "${!UUID[@]}" | sort); do
    u="${UUID[$n]}"; c="$(cat "$CURSOR_DIR/$n.cursor" 2>/dev/null || echo 0)"
    s="false"; [ -f "$TX_DIR/$u.jsonl" ] && s="true"
    [ $first -eq 1 ] && first=0 || echo ","
    printf '  "%s": { "uuid": "%s", "cursor": %s, "seeded": %s }' "$n" "$u" "$c" "$s"
  done
  echo; echo "}"
} > "$REG"

echo "$out"
[ $rc -ne 0 ] && echo "(brain exited with code $rc)" >&2
exit $rc

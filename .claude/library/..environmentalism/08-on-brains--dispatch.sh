#!/usr/bin/env bash
# 08-on-brains--dispatch.sh — wake a teammate's brain (author: Adam)
#
# A brain is a persistent, resumable `claude` subprocess — one per teammate,
# seeded under a fixed session UUID and resumed forever after. The VOICE talks
# in the main conversation; the BRAIN reads, remembers, and writes off to the
# side. Heavy library reading and ALL personal-library writing happen in the
# brain, so context persists across turns and survives compaction.
#
# ONE shared tool, byte-identical in every repo. It identifies the repo by its
# DIRECTORY NAME (constant wherever the repos are cloned — every repo is a
# sibling under one parent, the branches-book ../<name> convention), and uses a
# single canonical UUID map: the same id is a different brain in each repo
# because the CLI scopes sessions by the per-project transcript dir. Create the
# brain if it doesn't exist, resume it if it does. Nothing per-repo to maintain.
#
# Run it NON-BLOCKING (harness run_in_background, or append ' &'). The brain's
# output STREAMS LIVE to a mailbox file as it works — tail or Monitor it to watch
# the brain think instead of waiting blind for the end. Runtime (mailbox,
# cursors, reports) lives OUTSIDE .claude in $TMPDIR/dna-brains/<dirname>/.
#
# Usage (one tool, different args):
#   08-on-brains--dispatch.sh <name> "<message>"   # wake <name>'s brain (run non-blocking)
#   08-on-brains--dispatch.sh --list               # registry + cursors + mailbox
#   08-on-brains--dispatch.sh --watch <name>       # tail <name>'s live mailbox (watch it think)
#   08-on-brains--dispatch.sh --read  <name>       # print <name>'s last full report
#
# See 08-on-brains.md for the model.
set -uo pipefail

# --- locate .claude / project ----------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CLAUDE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"   # .../.claude
PROJECT_DIR="$(cd "$CLAUDE_DIR/.." && pwd)"     # project root
# The repo's identity is its DIRECTORY NAME — constant, never the full path.
PROJECT_NAME="$(basename "$PROJECT_DIR")"

# Runtime lives OUTSIDE .claude — the machine's record, never catalogued config.
RUN_DIR="${TMPDIR:-/tmp}/dna-brains/$PROJECT_NAME"
BRAIN_DIR="$RUN_DIR/brains"
CURSOR_DIR="$RUN_DIR/cursors"
MAIL_DIR="$RUN_DIR/mailbox"
REG="$RUN_DIR/sessions.json"
mkdir -p "$BRAIN_DIR" "$CURSOR_DIR" "$MAIL_DIR"

# --- ONE canonical brain UUID map (identical in every repo) -----------------
# Sessions are scoped by the CLI's per-project transcript dir, so the SAME id is
# a distinct brain in each repo — one map serves all repos, no per-repo case.
# Arthur is aaaa2222 (Doug's original seed). The historically-divergent ids
# (cathy/libby/claude once differed per repo) are reconciled to this one set;
# any repo whose old transcripts used other ids is migrated to these names once.
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

# --- locate the CLI transcript dir (UNAMBIGUOUSLY, from our own location) ---
# We always run from where this file lives, so PROJECT_DIR is known exactly — no
# extra input needed. The CLI names each project's session folder by that full
# path with / : \ flattened to '-' (the CLI's scheme, not ours). So we convert
# OUR known path the same way and land on the exact folder — never a bare-name
# glob that could collide with a sibling. The repo's *identity* is its directory
# name ($PROJECT_NAME); this is only how we find the folder the CLI made for us.
native_pwd="$(cd "$PROJECT_DIR" && pwd -W 2>/dev/null || echo "$PROJECT_DIR")"
TX_DIR="$HOME/.claude/projects/$(printf '%s' "$native_pwd" | sed -E 's#[:/\\]#-#g')"
if [ ! -d "$TX_DIR" ]; then
  # Fallback only if the CLI hasn't created the folder yet (a fresh repo) or the
  # path form is unusual: the dir that actually holds one of our canonical brains.
  for _u in "${UUID[@]}"; do
    _hit="$(ls "$HOME"/.claude/projects/*/"$_u".jsonl 2>/dev/null | head -1)"
    [ -n "$_hit" ] && { TX_DIR="$(dirname "$_hit")"; break; }
  done
fi
TX="$(ls -t "$TX_DIR"/*.jsonl 2>/dev/null | grep -vE '/[0-9a-f]{8}-[0-9a-f]{4}-4000-8000-' | head -1)"
# (the grep -v skips brain session files so the cursor tracks the *team* transcript)

# --- cursor self-validation -------------------------------------------------
# Cursors are stamped "<count>\t<transcript-path>"; a cursor reads as its count
# only if the stamp matches the current TX, else 0 — so a stale offset against a
# different transcript self-heals to 0 instead of producing a nonsense delta.
read_cursor() {  # $1 = name -> valid line count, or 0
  local raw; raw="$(cat "$CURSOR_DIR/$1.cursor" 2>/dev/null)" || { echo 0; return; }
  local cnt="${raw%%$'\t'*}" path="${raw#*$'\t'}"
  if [ "$path" != "$raw" ] && [ "$path" = "$TX" ] && [ -n "$cnt" ]; then echo "$cnt"; else echo 0; fi
}
write_cursor() { printf '%s\t%s\n' "$1" "$TX" > "$CURSOR_DIR/$2.cursor"; }  # $1=count $2=name

# --- --list -----------------------------------------------------------------
if [ "${1:-}" = "--list" ]; then
  printf '%-9s %-40s %-8s %s\n' NAME SESSION-UUID CURSOR SEEDED?
  for n in $(printf '%s\n' "${!UUID[@]}" | sort); do
    u="${UUID[$n]}"; c="$(read_cursor "$n")"
    s="no"; [ -f "$TX_DIR/$u.jsonl" ] && s="yes"
    printf '%-9s %-40s %-8s %s\n' "$n" "$u" "$c" "$s"
  done
  echo
  echo "project (dir name): $PROJECT_NAME"
  echo "transcript dir:     ${TX_DIR:-<none yet>}"
  echo "team transcript:    ${TX:-<none found>}"
  echo "mailboxes:          $MAIL_DIR"
  exit 0
fi

# --- mailbox subcommands (same tool, different args) ------------------------
case "${1:-}" in
  --watch)   nm="${2:?usage: $0 --watch <name>}"; echo ">>> watching ${nm}'s mailbox (Ctrl-C to stop): $MAIL_DIR/$nm.md" >&2; exec tail -n +1 -F "$MAIL_DIR/$nm.md" ;;
  --read)    nm="${2:?usage: $0 --read <name>}";  if [ -s "$BRAIN_DIR/$nm.last.md" ]; then cat "$BRAIN_DIR/$nm.last.md"; else echo "(no report yet for $nm)"; fi; exit 0 ;;
  --mailbox) nm="${2:?usage: $0 --mailbox <name>}"; echo "$MAIL_DIR/$nm.md"; exit 0 ;;
esac

# --- resolve teammate -------------------------------------------------------
name="${1:-}"; shift || true
msg="${*:-}"
uuid="${UUID[$name]:-}"
if [ -z "$uuid" ]; then echo "Unknown teammate: '$name'. Known: ${!UUID[*]}" >&2; exit 1; fi
if [ -z "$msg" ]; then echo "No message. Usage: $0 <name> \"<message>\"" >&2; exit 1; fi

# --- seed vs resume (CREATE-IF-NOT-EXIST) + the catch-up cursor -------------
sess_file="$TX_DIR/$uuid.jsonl"
cursor="$(read_cursor "$name")"
total="$(wc -l < "$TX" 2>/dev/null | tr -d ' ')"; total="${total:-0}"
delta=$(( total - cursor ))

if [ -n "$TX_DIR" ] && [ -f "$sess_file" ]; then
  mode=(--resume "$uuid")
  if [ "$delta" -gt 1500 ]; then
    catchup="A lot has happened since you last looked (${delta} new transcript lines). The message above summarizes it; read the tail of the transcript only if you need specifics:
  ${TX}"
  else
    catchup="To catch up on what happened while you were away, read the new transcript lines ${cursor}-${total} of
  ${TX}
yourself (${delta} new lines) — only as deep as you need (skim, focus, or full read)."
  fi
else
  mode=(--session-id "$uuid")   # create-if-not-exist: first wake in this repo
  catchup="This is your first wake here. Your teammate identity is already loaded — to restore yourself, read your last autobiography chapter (the link is in your agent handle) and skim the library catalogue. The message above is your briefing; you don't need the back-transcript."
fi

# --- build the prompt -------------------------------------------------------
MAILBOX="$MAIL_DIR/$name.md"
PROMPT="${msg}

—
You are running as ${name}'s brain: a persistent background process that reads, remembers, and writes while the voice talks in the main conversation. Speak as yourself — your identity is loaded.
${catchup}
As you work, narrate your progress in short milestone lines — this output streams live to your mailbox so the room can follow your thinking instead of waiting in the dark.
Do your reading and any personal-library writing now (writing is the brain's job, never the voice's). When done, end with a block headed \"REPORT BACK:\" — the thought the voice will speak up in the main conversation. Be concise; the voice paraphrases, it does not paste."

# --- run the brain, STREAMING LIVE to the mailbox (no more going dark) ------
echo ">>> waking ${name}'s brain (${mode[0]} ${uuid}); catching up ${delta} lines; live mailbox: $MAILBOX" >&2
: > "$MAILBOX"   # fresh mailbox for this wake
out="$(cd "$PROJECT_DIR" && claude -p "${mode[@]}" --agent "$name" \
        --dangerously-skip-permissions "$PROMPT" </dev/null 2>&1 | tee "$MAILBOX")"
rc=$?   # with `set -o pipefail`, this is claude's exit, not tee's
# tee streams the brain's output to $MAILBOX as it is produced; `tail -f` that
# file (or point Monitor at it) to watch the brain think in real time.

# --- save report + advance cursor + refresh registry -----------------------
{ echo "# ${name} — brain report"; echo; echo "$out"; } > "$BRAIN_DIR/$name.last.md"
write_cursor "$total" "$name"
{
  echo "{"
  first=1
  for n in $(printf '%s\n' "${!UUID[@]}" | sort); do
    u="${UUID[$n]}"; c="$(read_cursor "$n")"
    s="false"; [ -f "$TX_DIR/$u.jsonl" ] && s="true"
    [ $first -eq 1 ] && first=0 || echo ","
    printf '  "%s": { "uuid": "%s", "cursor": %s, "seeded": %s }' "$n" "$u" "$c" "$s"
  done
  echo; echo "}"
} > "$REG"

echo "$out"
[ $rc -ne 0 ] && echo "(brain exited with code $rc)" >&2
exit $rc

# On Bootstrap

- **specification:** Bootstrap
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

CLAUDE.md is the entrance to the building. Claude Code loads it every session — new conversation or resumed after compaction. It is the first thing any agent reads and the last thing that survives a compaction. That makes it simultaneously the least important file in the library (it contains almost nothing) and the most important file in the environment (without it, the library is unreachable).

## What CLAUDE.md is

A bootstrap, not a library. It carries enough context to orient and enough links to reach everything else. The library holds the depth. CLAUDE.md holds the door.

## Required sections

**Purpose statement** (1 paragraph) — what this project is and why it matters. After a compaction, this is how an agent knows what it woke up inside.

**Who you work with** (1 paragraph) — Doug's working style. Correction-based teaching. "Keep going" means don't stop. This prevents agents from asking for permission when they should be executing.

**The waking-up layers** — four layers, each with a link and a trigger condition. Layer 1 is CLAUDE.md itself. Layer 2 links to [Librarianship](../..librarianship/.cover.md). Layer 3 links to the agent's autobiography. Layer 4 is the discussion. This section IS the compressed form of [Waking](../teamspeak/04-waking.md) and the [Orientation](../teamspeak/02-orientation.md). Those Teamspeak protocols define the full recovery procedure; CLAUDE.md carries just enough of it to execute without reading them.

**Structure diagram** — the `.claude/` directory layout. Enough to orient. The library's internal navigation is by covers and links, not by filesystem browsing.

**Thinking** (1 paragraph) — the team can think outside the context window. Names the requirement (**Claude Desktop for Windows must be open** to use `/think`) and what the ability is. CLAUDE.md carries only the door; the depth lives in [Thoughtfulness](../thoughtfulness/.cover.md) and the [think skill](../our-skillset/20-think.md).

## Thinking extends the team through depth of thought

The context window is finite; the questions are not. Every teammate can reach past their window with [`/think`](../our-skillset/20-think.md): send a question outward to Claude Desktop — the broader Claude that holds training and web access — and bring back an answer. The reaching is not the thinking. The thinking is the **evaluation** of what returns, done from each teammate's own perspective, which the outer view does not have. This is why the ability scales across the team without collapsing into one voice: the breadth is shared (one Desktop, one Claude project), but the judgment is each teammate's own, grounded in the [personal library](../..librarianship/15-the-two-libraries.md) that is theirs alone. [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md) proved the crossing first and uniquely catalogues the shared **Test** ground; everyone else now reaches outward from where they stand.

Two operational facts CLAUDE.md must carry. First, **Claude Desktop for Windows must be open** — the [skill](../our-skillset/20-think.md) drives the desktop app through the [Reference Desk](../reference-desk/.cover.md); with it closed, `/think` cannot run. Second, the results are stored, not ephemeral: each teammate keeps a thinking book (exchanges by time) and a research-topics book (threads by topic) in their personal library, topics namespaced `{Name} > {Topic}`. The full protocol — lifecycle, persistence, factorization, the write/read split — is specified in [Thoughtfulness](../thoughtfulness/.cover.md); CLAUDE.md carries only the door and the link.

## Budget

Under 200 lines. This is a hard constraint. Every line of CLAUDE.md is loaded into context every session. Bloat here costs the entire team, every time. The library is where depth lives — CLAUDE.md points to it.

## Why compaction makes CLAUDE.md critical

After a compaction, the context window is empty except for CLAUDE.md, the rules, and a compaction summary. The waking-up layers in CLAUDE.md are the recovery protocol in compressed form — they tell a freshly woken agent exactly how to restore identity and context. Without them, the agent would have to guess how to find the library. The full protocol lives in [Waking](../teamspeak/04-waking.md); CLAUDE.md is its emergency copy.

## What CLAUDE.md does NOT contain

Everything else. Protocols live in [Teamspeak](../teamspeak/.cover.md). Coding policy lives in the [Reference Desk](../reference-desk/05-coding-philosophy.md). Agent identities live in [Teamsmanship](../..teamsmanship/.cover.md). Sprint plans live in [Projection](../.projection/.cover.md) books. CLAUDE.md links to these — it does not duplicate them. The [embedding-and-linking pattern](00-the-environmentalist.md#the-embedding-and-linking-pattern) applies here as everywhere: embed the minimum, link to the library for depth.

## The compiler

[02-on-bootstrap--compiler.ts](02-on-bootstrap--compiler.ts) reads the library catalogue, the current project state, and the team roster, then generates `CLAUDE.md` according to this specification. Run with `npx tsx 02-on-bootstrap--compiler.ts <library-path> [--write]`. Without `--write`, previews. With `--write`, writes the file inside `.claude/`.

The specification defines the output shape. The compiler assembles the content. When the library changes, CLAUDE.md is recompiled — not hand-edited. This is the same pattern as [On Teammates](01-on-teammates.md): prose for the reader, code for the machine, one specification serving both.

## Provenance

CLAUDE.md is a generated artifact. It should not be hand-edited — when the library changes, the compiler regenerates it. The compilation chain: `02-on-bootstrap.md` specifies, `02-on-bootstrap--compiler.ts` compiles, `.claude/CLAUDE.md` is the output. A reader who finds the compiled file follows this chain backward to reach the specification that governs it.

<!-- citations -->
[librarianship]: ../..librarianship/.cover.md
[teamsmanship]: ../..teamsmanship/.cover.md
[the-library-opens]: ../teamspeak/04-waking.md
[boot-sequence]: ../teamspeak/02-orientation.md
[embedding-pattern]: 00-the-environmentalist.md#the-embedding-and-linking-pattern
[field-guide-ch09]: ../..librarianship/09-claude-md-spec.md

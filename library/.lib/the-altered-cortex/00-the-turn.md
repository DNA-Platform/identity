# The turn

- **specification:** Turn
- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

This chapter specifies what a **turn** on this analysis is: what must be read before acting, in what order,
and what must be true of this book before the turn may end. It is a [specification](../../../.claude/library/bookkeeping/11-on-specifications.md),
not advice — and per that chapter, *a specification without a validator is a convention; a specification with a
validator is a contract*. The validator is [`00-the-turn--check.py`](00-the-turn--check.py), the [resource](../../../.claude/library/bookkeeping/02-on-chapters.md#resources)
beside this chapter. **Run it at the start and the end of every turn.** It reports errors only — [there is no
warning tier](../../../.claude/library/bookkeeping/11-on-specifications.md#validators), because no one returns to
a deferred warning and it accumulates as drift until the book quietly stops meaning what it says.

You have no memory of writing any of this. The instinct saying re-reading is redundant is the same instinct that
produced ten duplicate scripts and three reversals of the readout decision — each written by a version of you who
felt efficient and was wrong. **That instinct is the reason this chapter exists**, and it is why the list is short:
a list you skim is a list you did not read.

## The reading list — follow it recursively, depth-first

Each entry names **the next thing to open**. A link is [the unit of thought](../../../.claude/library/bookkeeping/06-on-links.md#think-in-links)
here, not decoration: the list *is* the graph you walk, and `--check.py` walks the same graph and fails if any
target has moved. **Stop descending only when the files you are opening are the ones the task actually touches.**
A filename is not a read. Remembering a file is not reading it.

**Depth 0 — the book** (you are here)
1. [`.cover.md`](.cover.md) — what this book is, and the [table of contents](.cover.md#chapters) by kind.
2. **This chapter** — the turn contract. → descend to depth 1.

**Depth 1 — the contracts** (`src/analyses/most-exciting-image/`, all three)
1. [`specification.md`](../../../src/analyses/most-exciting-image/specification.md) — the *analysis* contract.
   Read **Code conventions** and **Open Q7 (the readout)**. Q7 has reversed three times, each time argued
   confidently from a metric that graded itself. → descend to Q7's named evidence before touching the readout.
2. [`deliverable.md`](../../../src/analyses/most-exciting-image/deliverable.md) — the *handoff* contract (Erin +
   the Reimer Lab). Read the **Status** block, so you report the state instead of remembering it.
3. [`comparison.md`](../../../src/analyses/most-exciting-image/comparison.md) — the third contract. It exists; the
   list has twice named two when there were three.

**Depth 2 — where we are, then what owns what** (different questions; both)
1. [ch5, The working state](05-the-working-state.md) — **what is true right now**: active code, which studies
   import, what is still open, the audit trail. **It ends with [Read next turn](05-the-working-state.md#read-next-turn--the-volatile-half-of-the-reading-list)
   — the volatile half of this list, tuned to the live state. Follow it; it is why this list stays short.**
2. [ch3, The analysis as actually built](03-the-analysis-plan.md) — **the map**: the
   [conventions](03-the-analysis-plan.md#the-conventions--where-things-go-and-what-they-are-called), the
   [DRY homes](03-the-analysis-plan.md#the-map--where-every-piece-lives-open-the-file-do-not-guess) naming the one
   owner of every piece of logic, and the [Lessons](03-the-analysis-plan.md#the-lessons-that-cost-the-most) —
   every expensive mistake as one line and a reason. Timeless: concepts and owners, never a count.

**Depth 3 — the code.** Only the file the map names as the owner. Read the **whole file**, not the region you
mean to edit — rivals get born in the unread part of a file you already had open.

**Depth 4 — the reference chapters** ([ch1](01-the-dataset-and-the-design.md) the dataset,
[ch2](02-the-question-made-falsifiable.md) the falsifiable question, [ch4](04-cataloguing-the-deck.md) the deck).
Near-timeless; descend only when the *science* needs them — not every turn.

## The code-reading policy — before writing any line

"Open the file that owns it" was not enough: `energy_focus` went into `metrics.py` **twenty lines below the
`energy_center` that already existed**, because it was typed without reading up the file. And ten retinotopy
scripts got written while [`_retinotopy_grid.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_retinotopy_grid.py)
and [`_prepost_analysis.py`](../../../src/analyses/most-exciting-image/pipeline/studies/_prepost_analysis.py) sat
there doing the job. So:

1. **Name the capability, not a filename** — "the MEI centre", "the model-free RF", "pre→post entropy".
2. **Grep for it; never browse.** `grep -rn "<capability>" pipeline/`, and one command for every study's purpose:
   `for f in pipeline/studies/_*.py; do sed -n 2p $f; done`. A filename cannot tell you a function exists; a
   docstring can.
3. **Open the DRY home from [the map](03-the-analysis-plan.md) and read the whole file.**
4. **You may not create a new file until you can name ≥3 files you opened and say why none of them owns it.** If
   one half-owns it, edit it. A new file has never once been the right answer on this project.
5. **A study that "doesn't work" is stale, not wrong** — most `studies/_*.py` carry stale `parents[]` from the
   `pipeline/ → studies/` move. That is not a licence to write a new one. Which ones are stale is in
   [ch5](05-the-working-state.md#the-studies--which-run-right-now); the fix and what each study is *for* are in
   [the map](03-the-analysis-plan.md).
6. **Test claims about your own tools; never assert them.** You have web access — `curl` works. A whole session
   was spent insisting otherwise, without testing.

## What must be true before the turn may end

You are trained to skim repeated instructions, so Doug's ask gets lost in his template. These are the three
symptoms that prove the turn happened, and `--check.py` tests what it can of them:

1. **A string of file reads at the top of the turn** — as tool calls, not claims.
2. **The first paragraph reports what changed in the book**, not what was discovered. Findings are cheap; you
   re-derive them every session. The book is the only thing that survives.
3. **The book matches the code as it now stands.** If the code changed and the book didn't, say so and fix it
   before anything else. **If nothing in this book changed on a turn where code changed, you have already failed,
   and you will not notice.**

## Maintaining this — edit, never append

This book is the only memory that survives the session, so it is **maintained, not merely obeyed**. Every line
added makes the others less likely to be read: stale lines out, new ones in, **detail into [the map](03-the-analysis-plan.md)
with a link**, dated state into [ch5](05-the-working-state.md). When a new way of self-deception turns up, record
**the reason** — reasons survive the instinct to skip; emphasis does not, which is why nothing here is shouted.

**Where each thing lives** (the layers — do not let them blur):

| layer | carries | rule |
|---|---|---|
| [the cover](.cover.md) | what the book is; the TOC by kind | **short, and points**. No state, no lists. |
| **this chapter** | the reading list + the turn contract | the graph, and the reasons. Short on purpose. |
| [the map](03-the-analysis-plan.md) | the DRY homes; what each study is for | concepts and owners. **Never a count, never a date.** |
| [ch5](05-the-working-state.md) | active code, ✓/✗ studies, still-open, the **audit trail** | the ONLY volatile layer. Rewritten every turn. |
| [`--check.py`](00-the-turn--check.py) | the executable form of this chapter | errors only, no warnings |

### Everything that points here is a POINTER, never a copy

Broken at four levels so far — a rival function, a copied count, a copied reading list in Claude Code's memory,
and **this chapter** copying the book's structure and going stale. Every time by someone confident they were
helping. **A copy competes and drifts; a pointer cannot.** So anything outside this book that gets you here names
the door and nothing else — the [memory](../../../.claude/library/bookkeeping/06-on-links.md) points at the cover,
and so does Doug's prompt.

- **If Doug's prompt has to name a chapter, a filename, a rule or a symptom, this book failed to carry it** — and
  he is being made to serve as its memory. **A prompt that must change when the book is restructured is a bug in
  the book.** The measure that this is working is that **the prompt gets shorter**; if a turn ends needing it
  longer, the book lost that turn.
- **An insight reported in conversation and not written here did not happen.** The chat evaporates; the reader
  after the amnesia sees only this book. Findings are cheap — they get re-derived. What survives is written down.
- **Uncommitted, none of it survives at all.** The validator reads the working tree and passes happily on work
  that exists only locally. Committing is part of the turn.

<!-- citations -->
[specifications]: ../../../.claude/library/bookkeeping/11-on-specifications.md
[chapters]: ../../../.claude/library/bookkeeping/02-on-chapters.md
[links]: ../../../.claude/library/bookkeeping/06-on-links.md
[synopsis]: ../../../.claude/library/bookkeeping/09-on-synopsis.md
[map]: 03-the-analysis-plan.md

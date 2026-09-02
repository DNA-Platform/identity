# The Shallow Battery

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** a decision record — audited by five readers and implemented 2026-09-03; the middle-area reading lost to a dropped connection and owed a resume

---

## His ruling, verbatim

***"Specify — it can't run the parser. For paragraph, it should validate that the block has either strings or things with type of letter through paragraph (we probably want a utility to help with this). It shouldn't run parse right? No need? … All 9 basic types should not be doing more than is needed, but I am not sure this insight addresses anything so please research carefully."***

## What the audit found, rule by rule

**Most of the base battery was already shallow.** `$hasBlock`, `$hasType`, `$typedOnce`, `$hasWriting`, `$oneKind` — one-level reads, tight. The rot was concentrated:

- **`$mustHaveText` was the quadratic's author** — `copy` walks the whole subtree to test for one character, re-run at every ancestor, so a node's text was walked once per ancestor. **His induction insight is verified sound**: one level suffices — a non-empty string member or a non-parenthetical writing member — because that child's own battery already proved IT has text.
- **`$terminates` was dead code** — `void writing.book;` takes the method reference and never calls it. The one rule guarding an unterminated ancestor chain never ran, and cost nothing while proving nothing.
- **Every letter constructed its own `Intl.Segmenter`** — a famously expensive constructor, thousands per document — re-proving the single grapheme that `$Word.reduce`'s own segmentation had just minted it from. `$Word` built a second one per instance for `reduce`.
- **A phrase's bond walked its subtree text three times** (`$mustHaveText`, `$stopsAtItsEnd`, `$onOneLine`), and every ancestor walked it again.
- **A state hazard**: `$hasType` stashes `this.for` on the specification instance, coupling rule order and making batteries non-reentrant the day they are shared.
- **The caller map**: `valid()` has exactly ONE caller — chemistry's bond enforcement — and the seat is memo-gated (`_lastBondArgs`): N firings on first build, ZERO on steady re-render, one re-fire per changed node. `$Writing.valid()` always returns true, so the fallback message never fires for writings; the named rule messages carry the panel.

## What was implemented

- `$mustHaveText` → the one-level induction.
- `$terminates` → `writing.book()` actually called — the guard lives.
- One shared segmenter in `Letter.tsx`, used by the letter's law and the word's reduce.
- **`surface`** (proxy name, his utility): one level of a block — strings verbatim, direct children by their `copy`, parentheticals silent — now read by the word's whitespace law, the sentence's stop, the phrase's line, the paragraph's blank-line.
- **The copy memo**: `html.text` caches per block, keyed by the `$elements` array identity — eval-joined children and swapped annotations replace the array and invalidate honestly — making a child's `copy` O(1) to every ancestor.

## The honest measurement

Bonding a ~2048-node document: **1,514ms before, ~2,000ms after** — flat, within concurrent-noise of equal. **The battery was never the dominant term at this depth.** The floor is the MEMBRANE: every node bonds TWO chemicals (itself and its type instance), and unparsed prose measured 0.9ms for one chemical. ~1ms/node is chemistry's construction machinery — watchChain wrapping, param validation, synthesis — per node, twice.

**So the shallow battery is kept for CORRECTNESS** — a live guard, honest induction, one segmenter, walks that no longer multiply with depth — **and the next performance frontier is named, not guessed: the per-node membrane, chemistry-side**, with the per-letter type instance (`$(<TypeOfLetter />)` per bond) the first candidate for a shared template.

## What the insight does not address

His own caution answered: the crash was render-path CONSTRUCTION (Solutions 45), not validation volume — the memo-gated bond seat already ran zero times on steady re-renders. And lazy-battery-behind-the-ask remains available but unimplemented: with rules this cheap, bond-time checking stayed affordable, and the panel's at-bond honesty was kept.

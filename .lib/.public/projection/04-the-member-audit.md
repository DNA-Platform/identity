# The Member Audit

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

*Cathy's deep scan of `library/.public/package/src` — every file, members tracked parent-by-parent, names judged. Commissioned by Doug, 2026-07-31: "one class or interface or type per file, helper methods in tools, functions preferentially as protected members… bugs follow semantic failures."*

## The member map

`$Chemical` (framework) → `$Referent` (`$ref`, `ref` derived-??-written, `valid`) → two families:

- **Writings:** `$Character`, `$Word`, `$Sentence`, `$Paragraph`, `$Section`, `$Title`, `$Subtitle`, `$Tagline` — each declaring `block`, `$index`, `$parenthetical`, `copy`, `index`, `parenthetical`, `inline` (constructor), a one-argument block bond, `view() = display(this)`, `valid()`. `$Section` adds `title/subtitle/tagline/select` and the written-reference strip; the compositions add `parts` readings.
- **Chapters:** `$Chapter` (`parts`, `book`, `title`, `subtitle`, `tagline`, `summary`, `canonical`, `written`, `select`) → `$Cover` (summary = canonical), `$Synopsis` (bare), `$Index` (bare), `$TableOfContents` (`title` fallback, borrowed `summary`, `chapters`, `heading`, `row`). `$Book` (parts/chapters, cover, synopsis, tableOfContents, title, subtitle, sections, paragraphs, words, select).
- **References:** `$Reference extends $Sentence` (`$for`, `compose`, `lookup`, `anchor`, `frame`) → `$Link` (router anchor), `$Name` (`symbol`), `$Highlight` (`$first`, `$last`), `$Bookmark` (in `book/`; lookup by select-walk).
- **Stubs (Doug's markers, excluded from judgment):** `Author`, `Subject`, `Summary`, `Literature` — zero bytes.

## Findings, most severe first

**1. The missing parent — the same nine members live in eleven classes.** Because `$Writing` is an interface, `block/copy/index/parenthetical/inline/display-view` are re-implemented near-verbatim across eight writing classes (plus variants in `$Chapter`/`$Book`). Any fix must be repeated eleven times; divergence is a matter of time, and one divergence already exists (finding 3). The smoking gun that members sit on the wrong level: `$Referent.ref` must cast `(this as any).index` — the parent needs a member the interface withholds.

> **Resolved: `$Writing` is a concrete base class** for the writing family — `$Referent → $Writing → {Character … Section, Title, Subtitle, Tagline}`. The base carries the shared members, the block bond (chain-resolved to every subclass without one), `inline = true` as the family default (`$Section` unsets it), and a `view()` that renders the block — `view()` is the only render seam; overrides call `super.view()`. Leaves shrink to their `valid()` and their parse (`$Title` is ten lines). The book level does **not** inherit — a book carries no block — `$Chapter`/`$Book` implement a self-contained `$Composition` directly on `$Referent`. `$WritingExtensions` dissolved; zero statics in the package; finding 5 — the member in exile — resolved with it, and the `$check`-as-cast on `$Section`'s title line fixed to a plain conditional. Pattern in [Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md). Suite 66, driver 38/38 ×2.

**2. The index law is stated once and implemented three ways.** Book: chapters from 0, canonical (cover) at zero. Section: paragraphs from 0, canonical (title) at zero. But Chapter: sections from **1**, no zero; Paragraph: sentences from 1 with `canonical = parts[0]` whose index is 1; Word/Sentence: parts from 1. The canonical sits at 0 on two levels and at 1 on three. Addresses inherit the wobble — `#3.2.4` mixes 1-based sections with 0-based-with-title paragraphs, and the demo's ids align only by the accident of a `slice(1)`. One rule should hold at every level; whichever it is, it is currently unstated and violated.

> **Closed as lawful.** The rule, stated once: **counting starts at 1; a special first — one that stands for the whole — sits at 0.** The cover is the book's special first; the title-paragraph is the section's. Chapters, paragraphs, sentences, and words have no special first, so they count from 1. The wobble was the law's two cases, not divergence.

**3. Below the chapter, the binding does NOT fill only what the author left unsaid.** Bond constructors respect authored indexes (`if ($index === undefined)`), but every fresh `parts` reading force-assigns (`p.index = i`) — an authored decimal on a paragraph is overwritten. Chapter 4 of the demo book states the law the model breaks one level down. This is the audit's cleanest example of *bugs follow semantic failures*.

> **Closed as lawful.** Authored indexes exist only where parts are *authored* — bound at a bond constructor, where the binding fills only what the author left unsaid. Parsed parts are created by the reading itself; there is nothing authored on them to preserve, so the parse numbers them outright.

**4. Part identity dies below the chapter.** `parts` readings regenerate instances every read: `section.select(2) !== section.select(2)`. References-as-values survives; any consumer holding a part across reads holds a corpse; every reading re-parses (e.g. `tagline` walks `parts` twice, `Book.words` re-parses the whole book per read). Either the law "parts are readings, never held" is stated loudly, or generation is keyed to the copy.

> **Closed as law: `parts()` returns a fresh reading — never held, always compared by value.** The demo's own prose states it ("the readings parse rather than remember") and the suite exhibits it.

**5. Members in exile as detached functions.** `display(x)` in `tools/html` is only ever called as `display(this)` — a member pretending to be a helper; as a protected member it becomes overridable, which is Doug's stated preference. `text()` is a genuine tool (many shapes) and stays. App-side, the same pattern: `openingFor`, `rich`, `spans`, `inked`, `rightPage` are detached dispatch/typesetting that would be overridable protected members of the reader chemical — demo furniture, but the demo teaches.

**6. Reimplemented members — divergence already visible.** The colon-split of title/subtitle exists **four times** ($Chapter.title, $Section.subtitle, $TableOfContents.heading, the demo's row) and `$TableOfContents.heading(this)` re-derives what its own `title` getter already answers, through a double fallback. `$Name.symbol === copy` since the sentence law — a member duplicating a member, in a word ('symbol') that is not obviously book language.

> **Resolved.** The colon split has one home — `$Section.heading` — with `$Chapter.title` and `$TableOfContents.heading` delegating (`c.title?.copy`); the demo's copy is frozen furniture by the independence law. `$Name.symbol` stays: *symbol* is SRT's own word — a name's symbol is its written form — flagged to the noun audit for confirmation.

**7. The character level cannot be addressed — while `$Highlight` speaks in characters.** `$Sentence.characters` builds characters but never assigns indexes (the only parts-shaped reading that doesn't), so composition addressing dead-ends exactly at the grain the highlight's `first/last` lives in. Also unfiltered by `valid()` unlike every other parts reading.

> **Resolved.** `$Sentence.letters` now assigns each letter its index (1-based; a letter's self-knowledge) — no address claim, since letters are not the sentence's parts (words are) and `$Highlight` addresses by character offset in the copy, not by letter index.

**8. Latent reference-validity trap.** References take text ($Sentence.valid requires letters) — but `compose()` copies the base's text; ground a book with a textless reference and every derived reference is invalid, dev-erroring silently at each derivation. The law is enforced at authoring, assumed at composition.

> **Resolved.** A derived reference whose base carries no text speaks its own segment — `compose` falls back to the key as the sentence — so a silent grounding no longer poisons every derivation.

**9. The contents rows are not references.** Chapter 7's prose: "every line of it is a reference to a chapter, derived, never authored" — but `row()` renders `<li>{heading}</li>`; no reference is constructed; the demo fakes the travel with `jump()`. The model should derive `c.ref` into its rows once grounded, or the prose overclaims.

> **Resolved.** `row()` renders the chapter's held reference when one was assigned at binding (`$(c.$ref)` — the instance form, cached, no render-time evaluation) and degrades to the heading otherwise. Fully live once a subject grounds books at bond time; honest until then.

**10. Names and placement.** `ref/` is an abbreviation among full words (`writing/`, `book/`, `library/`, `tools/`) — the book word is `reference/`. `$Bookmark` sits in `book/` while its sibling kinds sit in `ref/` — defensible (the book's own reference) but wants a stated rule. `$Link` imports `react-router-dom` into the model package — the model knows a router; the dependency direction deserves a ruling. `block` names the HTML grain rather than a writing word — flagged as a question, not a verdict. `$Book.sections` includes parenthetical sections though every reading surface filters them — the member's name promises more innocence than it delivers (do summaries count in the measure?). Stale imports: `$Section` unused in `Synopsis.tsx`/`Index.tsx`.

> **Ruled and recorded.** `ref/` renamed **`reference/`** — the book word, no abbreviations among full words. `$Bookmark` stays in `book/` under the stated rule: *a reference kind lives with the level it points into* — generic kinds in `reference/`, the book's own kind beside the book. `$Link`'s `react-router-dom` import is accepted while the package serves the `.public` app; revisit at the Sprint 50 public build. `$Book.sections` counting parentheticals is law: **readings count all writing; views decide visibility.**

**11. One-declaration-per-file: holds.** Every file carries one class (or one interface) plus its template const — the pair being the convention. No violations.

> **Resolved: the composition is list-like.** `$Composition` carries the list monad's honest surface — `where(match)` filters the parts, `select(pick)` projects them, `single(match?)` insists on exactly one — C# semantics, implemented as one-liners at every grain. The old `select(key)` died as an indexer wearing a name. Address resolution is a *utility use* of the interface, not a member: the bookmark walks `part.single(p => p.index === key)`, so a duplicated index does not resolve rather than silently taking the first. The index keeps its games (cover at zero, decimals, authored numbers); resolution asks the index, never the position. `valid` stays a class habit, not an interface member.

**12. Readings that evaluate.** `$Chapter.title`, `$Section.subtitle/tagline/canonical`, `$TableOfContents.title`, and all `parts` readings run `$(…)` during render-time getters. They are leaves and have behaved, but this is the same class of act as the render-loop law's target, and the teardown storm's amplification has not been localized. The law needs its boundary stated: what may a reading evaluate?

> **Held for the framework sprint**, beside the teardown storm and the view-shell direction: the base framework should provide only an overridable view shell, and the boundary of what a reading may evaluate is a framework law to state there.

*(Written 2026-07-31, night; closed the same night. Every finding resolved, closed as law, or ruled and recorded — except finding 12's render-time readings, held for the framework sprint beside the teardown storm and the view-shell direction.)*

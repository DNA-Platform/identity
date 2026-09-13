# Ways of Reading

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)

---

Design-session notes (2026-07-30, Doug in the room): a library is something that can be viewed in many different ways, and the applications we build must be flexible enough to hold them all. This chapter records the view catalogue, the machinery that makes every view cheap, and the two strata every book carries.

The definition under all of it, Doug's: **a book is an evolvable authored structure that individuals and teams work on together.** That is why the catalogue below works at all — a wiki is a book; an open-source project is a book; *this repository* is a book: issues are marginalia, pull requests are proposed revisions, the git history is its editions, the contributor list its attributions, the README its cover. The GitHub skin in the demo was the abstraction recognizing one of its own native dresses.

## The web isomorphism

Doug's seed, and it is exact: **a book is the fundamental website.** The cover is the masthead — an author-attributed site name; the table of contents is the index file; chapters are pages; references are hyperlinks. The archive's converter built precisely this once (markdown chapters → linked pages). The isomorphism is not the point in itself — it is the proof that *every established design pattern is a candidate view of the same objects*.

## The pattern catalogue

Each of these is a **view of books, subjects, and libraries** — not a new data model:

- **Master / detail** — a catalogue beside the open chapter; the Lab's three-pane already is one.
- **The feed** — a book read chronologically; an autobiography *is* a feed; a projection book is a changelog.
- **The shelf** — books as cards; each card is the cover's canonical projection doing thumbnail duty.
- **The deck** — chapters as slides; sections presented through their canonicals.
- **The dashboard** — the anatomy lens generalized; a library's summary statistics as its front page.
- **The wiki** — chapters as nodes with typed links and a gathered-links view (SRT prototype #3).
- **The graph** — books as nodes, citations as edges; the Frontier is this view filtered to the unsettled.
- **The notebook** — prose with live figures; the Lab's cases already are this.
- **The dialogue's dresses** — one `$Dialogue` as chat bubbles, stage script, or interview transcript.

## The three moves

Every view above decomposes into three $Chemistry moves, all three already shipped:

1. **A lens** — one live object rendered a way (`Perspective`; the Sheet's four skins), turning on two axes: *horizontal* sibling skins revealed onto the object, and *vertical* `look` — the same object rendered at an altitude of its own composition (cover ↔ chapter ↔ paragraph), the synopsis gradient rather than a separate arrangement.
2. **A reading rendered** — a derived projection drawn as its own surface (the anatomy lens; the self-composing index to come).
3. **An arrangement** — a chemical composing *other objects'* views into a screen (the Lab; master/detail = a catalogue-reading beside a detail-lens with selection as reactive state).

The recipe for a flexible application: choose the objects, choose the lenses, arrange. The framework needs no feature per pattern — patterns are compositions of the three moves, and the one-object invariant (226 words constant across skins) is what makes any arrangement trustworthy: every pane is provably the same object.

## The text and the apparatus

Doug's second seed: a book has a literal view and a metadata-like view (terms not fixed). The semantics of books already carries the distinction — scholarship's **text and apparatus**. A scholarly edition is never bare text; its apparatus is part of the book:

- **The colophon** — the production record: when, by whom, in what hands; history tracking and summary statistics live here.
- **Attributions** — contributions from many authors, per chapter or per passage; the blame view as a lens.
- **Editions** — revision history as a first-class reading.
- **Marginalia** — conversations *in the margins*: readers writing back. "Conversations as part of the book" is the oldest reader behavior there is.
- **Front matter and back matter** — where the apparatus traditionally binds into the volume.

Terms deliberately unsettled, per Doug — but candidates should come from this register, because the register already carries the meanings.

## Two specifications for every view

- **Identity through change** (Gabby): the object must stay recognizable across every view — the canonical is the visual anchor: the same cover identifies the book on the shelf, heads the reading view, titles the index entry, labels the graph node. The reader never asks "am I still looking at the same thing?" And identity must survive *movement*, not only the still frame: when a reference carries the reader between views, the way back stays visible — the return mark is identity-through-change in motion, so following a pointing never strands the reader who took it. The catalogue sprint proved this at the smallest scale — a citation lights its note and the note lights back, a round trip walkable in both directions.
- **Views multiply claims** (Queenie): every new lens is a new place for a displayed contract nobody can check. A view earns trust when it surfaces something the reader can verify against another view of the same object — switching lenses is itself a check. When a view is added, name its corroborating sibling. The apparatus stratum is checkable by construction: statistics, histories, and attributions are derived readings.

## A third specification: a view READS, it does not re-derive

Added out of [The Parse](../projection/13-the-parse.md), where the same mistake surfaced three times in one surface and each time looked like something else.

**The manifold flattened a chapter into strings before drawing it** — about 55 lines building `{ head, sub, paragraphs: string[] }` out of the model, and every view then read that. **It is a second population of the model wearing a data structure**, which is [the defect this branch has filed three times](../solutions/13-the-chapter-that-wrote-its-sections-twice.md) arriving in the place least likely to be checked, because a copy that is *only* read looks harmless.

It is not harmless, and here is how it failed:

- **It sniffed what the model knows.** `p.startsWith('> ')` asked a *string* whether it was a quotation. When the model took that fact onto itself — a quotation became a `$Paragraph` carrying `mark='>'`, the angle lifted out of the copy onto the paragraph — the string stopped carrying its angle and every quote on the page silently became prose.
- **It invented addresses.** `#{r.index}.{si + 1}` built an anchor by arithmetic over array positions, while a reference resolved by walking the model. The two agreed by coincidence until the model's numbering changed, and then a link followed to nothing.
- **It borrowed the model's members for its own state.** A ribbon's slot among the other ribbons was stored as `mark.index` — the writing's number — because a number happened to be there.

**So the specification is: a view asks the model, and draws the answer.** Concretely, three things follow, and all three are greppable:

- **Ask, do not test the output.** `p.mark === '>'`, never `p.copy.startsWith('> ')`. A view that re-derives what the model already carries will disagree with it the first time the model learns something.
- **An address is a position, not a formula.** The anchor a view renders should be the same string a reference resolves — then following one lands on the very part that was drawn, and the two cannot drift because there is one numbering.
- **A view's own state lives on the view.** If the demo needs to remember something, it declares a member for it. Borrowing a model member because it is unused is how app state ends up inside the writing.

**And the corroboration that proves it is doing this** — one piece of writing read at four altitudes, each altitude walking its own count. If a view is genuinely reading the model, the readings agree; if it is reading a copy, they agree only until the copy goes stale. *The failure mode of a corroboration built the lazy way is [a number compared to itself](../solutions/18-the-checkpoint-that-compared-a-number-to-itself.md).*

## Plan impact

The sprint demos each adopt a different arrangement, so flexibility is demonstrated rather than claimed: Sprint 46 the shelf and the reading view; 47 master/detail with the self-composing index; 48 the portal (the Front Door); 49 the dialogue's three dresses and the attribution lens.

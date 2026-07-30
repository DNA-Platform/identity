# Ways of Reading

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/.cover.md)

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

1. **A lens** — one live object rendered a way (`Perspective`; the Sheet's four skins).
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

## Two laws for every view

- **Identity through change** (Gabby): the object must stay recognizable across every view — the canonical is the visual anchor: the same cover identifies the book on the shelf, heads the reading view, titles the index entry, labels the graph node. The reader never asks "am I still looking at the same thing?"
- **Views multiply claims** (Queenie): every new lens is a new place for a displayed contract nobody can check. A view earns trust when it surfaces something the reader can verify against another view of the same object — switching lenses is itself a check. When a view is added, name its corroborating sibling. The apparatus stratum is checkable by construction: statistics, histories, and attributions are derived readings.

## Plan impact

The sprint demos each adopt a different arrangement, so flexibility is demonstrated rather than claimed: Sprint 46 the shelf and the reading view; 47 master/detail with the self-composing index; 48 the portal (the Front Door); 49 the dialogue's three dresses and the attribution lens.

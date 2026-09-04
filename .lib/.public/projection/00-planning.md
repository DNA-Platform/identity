# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as intentions are addressed — it holds what is INTENDED. Overwritten whole 2026-09-03 twice at Doug's order: first gathered by the librarian (every open item, cited), then organized into THE ROAD — all of it, in order, before the Wikipedia demo. His words: "It matters less how many sprints it is. We just need to write it down. It is the work we must do first before creating our wikipedia demo." Prior plans are superseded; their anchors survive [at the tail](#swept) so closed chapters' links resolve.*

# <a id="the-road"></a>THE ROAD TO THE WIKIPEDIA DEMO

*Every wave cites its sources; nothing here is approved by being listed — the decision surface is Wave 0, and src moves only on Doug's yes.*

**NEXT SPRINT'S FOCUS, ruled 2026-09-04: STYLED CHEMICALS FIRST.** The road below STANDS, but the next sprint opens on the chemistry addition specified in [Sprint 39's rigorous notes](41-sprint-39--the-road.md#styled-chemicals-notes) — seated at $Particle so styled particles and styled chemicals are both real, first ruling the compiler's home. Doug's standing warning governs the road's styling items (1, 5, 29 especially): *"we are going to redo a lot of this."*

## Wave 0 — THE DECISION SURFACE (all Doug's, batched by what each gates)

**Gates the mechanical sweep (Wave 2):**
1. **The frame ruling — PARTLY RULED 2026-09-04**: the base frame() is an inline div carrying the pd- classNames (his words: "an inline div and the classes"), and Paragraph's Prose wrapper is gone. Still open: Title and List override frame() to return view() directly, so their pd-title/pd-list classNames never reach the DOM. — [Sprint 39 § rulings](41-sprint-39--the-road.md#rulings-0904); [ch13](../designing-inexplicable-phenomena/13-the-default-dress.md).
2. **instanceof vs the carried type — DIRECTION GIVEN 2026-09-04** ("Always use types and dynamic typing and specifically so that we have the flexibility"): the spec rules now ask by type class — `reflection.is(one, $TypeOfSentence)`, real instanceof on `one.type`. Still instanceof-on-the-class: the getters that call members (`$Chapter.references` → `references.append`), `$Book.synopsis`/`tableOfContents`, `$endsWithReferences`/`$endsWithIndex`. Open: should those read the type too, accepting that what they find may lack the class's members? — audit asks.
3. **MEMBER DELETION: `inline`** — after the frame core lands the flag feeds nothing; two test dependencies named. Yes or no? — audit asks.
4. **`valid()`'s promise** — it answers `true` unconditionally now (panels gone); change, keep, or re-speak the exported contract? — audit asks; [Sprint 38 § build](40-sprint-38--the-rebuild.md#build).
5. **Title/List label recovery** — option 1 zero-member (labels ride each kind's dress element), option 2 reinterprets `inline` as the element seat. — audit asks; the two pd- holes.

**Gates the conditional units (Wave 3):**
6. **The List model — RESHAPED 2026-09-04** by render-the-parse ("Writing is parsed, and then it prints its parts," stopped at sentence): List's view rides the same design once it lands; the specify-time materialization question ("maybe List does that because it is special") rides with it. Blocked on the weight finding. — [Sprint 39 § the weight finding](41-sprint-39--the-road.md#the-weight-finding).
7. **NEW MEMBER: `$TypeOfList.specifically`** — U15's only lawful seat. — audit asks.
8. **References re-seat `$Section → $Composition`** — net minus one override; counter-weight stated. Yes, no, or stay. — audit asks.
9. **The Index/References duplication** — direction A (visible chapter-end change, browser-gated), direction B (needs a member), or stays hand-synced. — audit asks.
10. **RESOLVED 2026-09-04** — "Loose text in books is always wrong. It takes chapters." $writtenAsChapters now refuses non-whitespace strings in a book's block; no Chapter parse function is registered; reduce() keeps returning [] pre-specify. — [Sprint 39 § rulings](41-sprint-39--the-road.md#rulings-0904).
11. **The bench conflict on `parts()`-in-view** — the laws bench holds the text-split/block-scan views as Solutions 45's standing cures; the persona bench wants model-backed views. His call closes it. — audit risks.

**Gates the scoped-DI story (Waves 2–3's registered half):**
12. **THE KEYSTONE: are module-scope books canon, or do books move inside scopes?** Every scoped claim conditions on it; until ruled, the honest global points are `parser.makes.set` / `prints.set`. — [Sprint 38 § extension architecture](40-sprint-38--the-rebuild.md#extension-architecture).
13. **First-wins name sealing** (`chemical.ts:1007`) — intended, or should a subclass shadow? — same.
14. **RENDERS-THROUGH as an accepted revision of shells-over-types**, said out loud. — same; ch14 edit rides this.
15. **The idle facade channel as the dress rail** — a later pass's own design, flagged now. — same.
16. **Who calls `specify()` in production, and how deep?** — same.

**Gates the Ref remainder (Wave 3):**
17. **RESOLVED 2026-09-04, road A** — Doug: "Fix that skipped test please." `$TypeOfReference.specifically` mints the `$Path` from a url-shaped copy (only scheme://, /, or # starts — one-word copies stay pathless so bookmarks and refusals hold); the test draws the writing after acceptance. The suite carries ZERO skips. — [Sprint 39 handoff](41-sprint-39--the-road.md#where-things-stand).
18. **`$Path.read(from)`** as the one-home seat (two inline bodies say the same three lines twice today). — same.
19. **The `references` seat at the book root** (`focus()` mis-seats; member or seat-move). — same.
20. **The R95 corpus registry export** (route→book map from the binder's `books.ts`). — same; [Binder § R95](37-the-binder.md#r95).
21. **Whether books may nest** — gates `book()`-adjacent walks. — same.
22. **The gate/law disagreement** — read-through reads nested Chapters/Books through; their specs refuse them; align. — same.

**Process and standing:**
23. **THE PUSH** — everything since `20cb87f` is green and UNCOMMITTED; his call, with the commit tool. — [Sprint 38 § WHERE THINGS STAND](40-sprint-38--the-rebuild.md#where-things-stand).
24. **NAMES, batched** — the dialogue's five, the proxies (`makes`/`declared`/`levels`), the fetch-local spelling, ch15's title, sprint 38's own title, every plan placeholder; PLUS 2026-09-04's applied-but-vetoable: `reflection.is` (his floated `standsFor` the alternative), `reflection.classNames`, `reflection.names`, the `Title.KindSpec` spec name (follows the existing KindSpec convention), the test-local `$Gathering`. — [Sprint 38 § Names](40-sprint-38--the-rebuild.md#names); [Sprint 39 § rulings](41-sprint-39--the-road.md#rulings-0904).
25. **Scope batch** — Catalogue framework-or-machinery; Referent exemption; encyclopedia dresses in/out of the spec convention (defaulting OUT). — audit asks.
26. **Small fences** — `$References` birth facts in its bond; the `declared()` first-touch side effect; the persist equivalence guard; ch10's consumer-contract wording; the clean.ts `new-$TypeOf` guard. *(The ch12 Parser.tokens citation is RESOLVED 2026-09-03 — Sprint 31's "minimise, not undo" is the standing approval; ch12 edited.)* — audit asks; [Sprint 38 § one pass](40-sprint-38--the-rebuild.md#one-pass).
27. **R80 at F7's return** — emitted cover rewritten or byte-identical. — [Binder § R80](37-the-binder.md#r80).
28. **The apparatus questions — LANDED: Q1–Q14**, with the 42-requirement R-A draft, both held in [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus). Sharpest: the reading flow (which furnishings are parenthetical), declared-vs-counted subjecthood, the route seat, the union re-keying, and the fourteen names.
29. **Dresses and DI — the road, not the possibility (ANSWERED in part 2026-09-04).** Proven: DI keys on the component object, not the class — two wrapped dresses register independently in one scope, and a raw styled component even serves as a registered override. Open is WHICH ROAD makes the encyclopedia DI-able: (a) lib-side — Styled.ts exports a wrapper (`$((props) => createElement(dress, props))`) and each dress file wraps at export, no chemistry change, probed green; or (b) chemistry integration — three one-line recognition gates (chemical.ts:1342, 1485, 1690) so `$(styled.h2\`...\`)` works directly. Either road also becomes the one home for the styled-components CJS/ESM interop shim Doug flagged in Styled.ts. — [Sprint 39 § the DI answer](41-sprint-39--the-road.md#rulings-0904b).

## Wave 1 — THE DOCS — **DONE 2026-09-03** (six chapters touched, ch15 born, the `$Title` spec shipped, ruling 26's ch12 half resolved)

- **ch10 edit** — the `$`-fetch corollary in R135's shape: *constants close to use, never properties*; both exemptions in the same breath (specifications; reflection's build facts). — audit docs.
- **The timing law** — registration is configuration BEFORE the first parse (the one live two-populations form); written wherever the corollary lands. — audit docs/risks.
- **ch14 edit** — the decoration rule in Solutions 45's second-appearance wording: a view whose SHAPE cannot construct. Rides ruling 14. — audit docs.
- **NEW ch15** (the ONE new chapter; title Doug's) — how a kind is spelled: the nine spellings promoted from sprint 37's record, absorbing the makes registry and the transparent-kind `indent` declaration. — audit docs.
- **ch11 edits** — the gap rows now; the .spec comment exemption written; each landing chapter's row. **ch12 verify-then-edit** — the stale Parser.tokens citation (ruling 26). — audit docs.
- **U19** — the `$Title` spec file (the one shipped kind without one); Queenie's. — audit U19.

## Wave 2 — THE MECHANICAL SWEEP (zero new members; per-unit gates; suite + browser where paint-visible)

- **U11a–d** — **LANDED 2026-09-03 at every CHEMICAL seat** (type defaults across all 23 classes, specifically creations, catalogue/concatenate, both mints through ComponentType `prints`, the five maker closures); **the dress half REFUSED — Wave-0 item 29**, dresses stand literal. — audit units.
- **U12** — **DONE 2026-09-03**: the `inline?span:div` conditional is dead; base frames unconditionally as span; block kinds override. (Follow-ons ride rulings 3 and 5.) — audit units; the R136 shape.
- **U13** — **DONE 2026-09-03**: numbering by the data condition (`type !== undefined`), tested by an untyped gatherer observed NOT numbering (`[0, 0]`). — audit units.
- **U14** — one disable oracle (rides ruling 2). — audit units.

## Wave 3 — THE CONDITIONALS AND THE REF REMAINDER (each on its Wave-0 ruling)

- **U15** List through the model at the lawful seat (rulings 6+7+11) · **U16** roster getters honor the type rail (ruling 2) · **U17** References re-seat (ruling 8) · **U18** the missing-maker seam (ruling 10). — audit units.
- **The means-anchor implementation** (ruling 17) — unskips the suite's last skip. · **`$Path.read` seat** (ruling 18). · **R95's route half** (rulings 20 + F7). · **R96's typed Ref forms** — wait on emitted modules (Wave 5). — [Sprint 38 § one pass](40-sprint-38--the-rebuild.md#one-pass); [Binder § R96](37-the-binder.md#r96).

## Wave 4 — THE BOOK APPARATUS (R134; brainstormed — the R-A1–R-A42 draft and Q1–Q14 stand in [Sprint 39 § the apparatus](41-sprint-39--the-road.md#apparatus))

- `$Subject`/`$Author` as (probably) dynamic traits; binder-generated STRONG TYPING on subject names (misspellings fail tsc when the app is specified); `$$Book` maybe trait-and-reference at once; *subject and author are kinds of books*. — [Sprint 38 R134](40-sprint-38--the-rebuild.md#one-pass).
- Cover (+ **Illustration**, maybe **Figure**), Synopsis, TableOfContents (hopefully over Table; various reference kinds), **Index as the master catalogue** — ONE index of ALL books flattened, every book VIEWING it differently — compositional throughout so the specification carries the support. — same.
- Folds in: **the summary and the excerpt** (his 2026-08-30 spec, three-rung fallback, `summarizationLength` on the document class, five flagged questions — zero occurrences in v2 src; placement at the Synopsis seat his to confirm) and the reference-arc remainders (the index decorations, the bootstrap books, the visitor's guide) as brainstorm inputs. — 00-planning (prior), §§ summary-and-excerpt, the-reference-plan.

## Wave 5 — THE BINDER RETURNS, THEN THE DEMO

- **F7** — the binder's nine doors against the new framework: [U66](37-the-binder.md#u66) (v2 entry point + build — `require.resolve` must reach src's writing), R80 (ruling 27), the CHECK's `specify()` teeth, plus the apparatus's subject-typing emission. — [Binder § inventory A4](37-the-binder.md#where-things-stand).
- **F8 — THE WIKIPEDIA DEMO, the destination:** corpus re-bound, app walked in a REAL browser (the 8/8 precedent), scroll-to-fragment, the two-Cells collision named for his word, R96's typed forms live against emitted modules. NO FEATURE SHIPS UNSEEN. — [Binder § inventory A5](37-the-binder.md#where-things-stand), [§ router review](37-the-binder.md#router-review).

## Standing beside the road

- **The bookmark redesign — NEEDS DESIGN before it builds (Doug, 2026-09-04).** His seed, verbatim: *"I think a bookmark might be something that wraps certain text? Can't it just be a sort of pass through that inherits the place that it is? People would click somewhere. Or maybe not. Ponder what it would be like to use one of these."* The generalized shape: **a reference whose address is its POSITION, not its cargo** — a live mark derives its place (the parent walk in [`$Bookmark.chapter`](../package/src/book/Bookmark.tsx) already does this at chapter grain), and only a remembered mark snapshots a path (hydration must snapshot regardless, so today's path-carrying form is the hydrated half of one lifecycle, not a rival design). Open questions: the grain (chapter today; word/sentence if it wraps text), pass-through parsing (a wrapper cannot be parenthetical or its words leave the parse — Phrase's transparency is the existing rail), the click gesture (select text, or a margin affordance — demo UX), the panel (the bookmarks list wants the References/recollection store shape), and whether the three reader's marks unify as one transparent-wrapper family — point, range, page: Bookmark, Highlight's endpoint pair, PageFold's `location`. Touches R-A42's "derived kind on the Bookmark/PageFold shape." — [BookmarkReferenceSpec](../package/src/tests/.spec/book/Bookmark.tsx).
- **F9 — declarations look like declarations** — waits on the chemistry refactor HE directs; the persist-guard defect sits at the same seat. — [The Cleaning § Declarations](../the-condition-report/06-the-cleaning.md#declarations).
- **The test-review sprint** — his 2026-08-30 charter; re-measures first (now 25 files / 543, zero skips). — 00-planning (prior), § test-sprint.
- **Sprint 38's chapter compacts at its close** per [the compounding convention](../../../../.claude/library/..librarianship/17-compounding.md); this scratchpad sweeps as waves land.

# <a id="register"></a>THE REGISTER BENEATH THE ROAD — the librarian's gather, 2026-09-03

*Counts: 12 rulings · 10 member asks · 6 ready-when-ruled · 5 workstreams · 1 deferred · 21 stale/superseded — all merged into the waves above; the stale ledger is kept whole here because a superseded line with its evidence is what stops re-litigation.*

### STALE / SUPERSEDED (evidence per line)

*From [The Binder's inventory](37-the-binder.md#where-things-stand):* A1 Ref+router — REBUILT (three forms green; `read()` follows an address per R72). A2 flat hierarchy — REBUILT (R105 type-chain standing; `kin` out). A3 styling frame — REBUILT pd- half (R112/R115; `flows`/`dress`/`Dress` out; two label holes ride Wave-0 ruling 5). B6 simple type — REBUILT (`type!:` + `??=`, R126). B7 table — REBUILT (`$columns`, divisibility, block-reading view — Solutions 45 cured at its own seat). B9 comment ban — a STANDING GATE. B10 battery — STRUCK by R113 (the need was F13 recursion, ruled and built). C invented members — do-not-re-add STANDS (`kin`, `seated`, `carried`, `former`, `seat`, `flows`, `dress`, `Dress`, `$TableTrait`, `$ListTrait`, lattice `stands`). C means-narrowing — STRUCK by R113. R69 arrangement codes — DISSOLVED by R106. R90 two-Links — DISSOLVED by R87.

*From [The Cleaning](../the-condition-report/06-the-cleaning.md):* P1–P23 — STALE against v2 (the code they treat is archived; the compiler they audit was replaced by the binder); P10's sentence ("nothing static that is not a member") remains a standing ruling; the DECLARATIONS section is LIVE as F9; the words-owed register survives only in Wave-0 ruling 24.

*From this chapter's prior plans:* reference-arc sprints 1–3 DONE/ABSORBED; sprints 4–5 seeds fold into Wave 4; the four plan-owed questions ABSORBED; the Semantics object FILED by design.

# <a id="swept"></a>SWEPT — anchors kept so closed chapters' links resolve

*Each heading below stood in a prior version of this scratchpad; the content is superseded by the road above (bodies in the project branch's history). One stub per anchor, nothing more.*

<a id="the-reference-plan"></a><a id="canonical-collision"></a><a id="types--a-whole-sprint-ruled-2026-08-07--and-it-now-waits-behind-writing-2026-08-10"></a><a id="d--the-compilation"></a><a id="v1"></a><a id="v2"></a><a id="v3"></a><a id="v4"></a><a id="the-five-sprints--each-with-three-things-doug-can-check-planned-2026-08-06"></a><a id="plan-sprints"></a><a id="plan-blockers"></a><a id="plan-allocation"></a><a id="naming-discipline"></a><a id="done--validation-says-why-built-in-the-parse-2026-08-12"></a><a id="the-standing-sprint-discipline-added-2026-08-03-out-of-47s-cost"></a><a id="the-demo-specified-at-last-doug-2026-08-06"></a><a id="summary-and-excerpt"></a><a id="summary-open"></a><a id="the-split--subjects-and-the-library-as-sprints-with-checkable-ends-doug-2026-08-06"></a><a id="the-fourth-book--the-canonical-autobiography"></a><a id="the-earlier-split-superseded-by-the-five-sprints-above"></a><a id="the-demos-deserve-a-subject-catalogue-doug-2026-07-31--future-sprint-material"></a><a id="test-sprint"></a><a id="sprint-two--the-card"></a><a id="sprint-three--the-subject"></a><a id="sprint-five--the-compilation"></a><a id="sprint-50--the-public-build"></a><a id="queued--what-a-reference-form-is-and-whether-it-belongs-to-the-chemical-hierarchy-doug-2026-08-12"></a><a id="open-design-questions-explored-not-settled"></a><a id="how-this-codebase-will-work-and-what-would-show-it"></a>

**The swept plans** — the five-sprint reference plan (its sprints ran as 30–35), the types sprint (ran as the rebuild), the compilation split (Wave 5 now), the summary-and-excerpt spec (LIVE, folded into Wave 4), the standing disciplines (absorbed into the sprint conventions), the canonical-collision note (ANSWERED — the locator is the index on the parts), and the earlier splits — all superseded by [THE ROAD](#the-road) above.

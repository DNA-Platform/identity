# Sprint 103 — The Library Becomes Walkable

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **status:** implementation-ready

---

## What this sprint is

The library becomes a **graph you walk** rather than a tree you read. Every book, chapter, heading, field, paragraph and link becomes a node with four total edges; a teammate moves by opening closures; and the route to any content passes through its summary, so **context arrives by topology rather than by discipline.**

The corpus: **82 covers, 711 markdown files, 23 resources, 525,646 words**, plus ten personal libraries holding ~54 books between them.

The sprint's end is not a database. It is a teammate standing in a room, seeing exits, and taking one.

## Requirements — approved in conversation, 2026-09-05/06

**R1 — Four total links.** Every node carries `catalogue`, `meaning`, `type`, `predecessor`. All four are total; there are no nulls. Doug: *"There is no meaning is null. Self reference. Parent too. Type too."*

**R2 — Self-reference is the floor.** `catalogue(x)=x` is a root, `meaning(x)=x` is content, `type(x)=x` is a base type, `predecessor(x)=x` is first. One stopping rule for four traversals.

**R3 — Context is informal.** The context field holds words, not markup. Links become edges and leave the text.

**R4 — No multi-meaning nodes.** Doug: *"if it points to many things, it is a catalogue and so other things declare it as their catalogue."* A chunk with more than one link **is** a Catalogue.

**R5 — Order belongs to the listing.** Doug: *"The table of contents will have a bunch of entries point to it, each means a chapter and they will hold the order."* A chapter has no intrinsic successor; `predecessor` chains siblings within one catalogue.

**R6 — The title is the catalogue of its cover.** Metadata and content hang beneath it, each as its own catalogue; the table of contents is a catalogue inside content.

**R7 — Reading is closure-only.** Doug: *"You can ONLY pull queries that go to that node and expand forward."* One primitive read; no arbitrary query.

**R8 — The CLI chooses the expansion.** Doug: *"so you never just see a title."* A verb may perform several graph calls and return one page. The teammate's cost is measured in tool calls, not graph calls.

**R9 — Operations are semantic and typed.** Doug: *"your delete is semantic and by type! Your inserts are too! Each thing has to preserve the integrity of the library. It has to be impossible to do something wrong."*

**R10 — Editing is the compaction mechanism.** Improving the pointer beats editing the target; a better Entry shortens every walk through it.

**R11 — Forgetting is diagnostic.** Doug: *"when you are forgetful, we know to add more context to the path."* A thin arrival names the node that needs a summary.

**R12 — Writes go to markdown.** The index is derived and rebuilt; nothing is authored into it.

**R13 — Storage is Anthropic's memory server.** Doug: *"I prefer the anthropic knowledge graph."* Measured at ~80× slower than indexed SQLite and irrelevant at our call volume.

**R14 — Each teammate walks from their own origin.** Eventually each starts at their own autobiography, so perspective is a difference in *reachable set*, not in performance.

## Decisions

**D1 — Anthropic's `@modelcontextprotocol/server-memory` over SQLite.** *Chosen over:* SQLite via `node:sqlite`, which measured **0.134 ms per closure against 10.75 ms** and offers direction filtering, `ORDER BY`, recursive CTEs and FTS5. *Rationale:* at five-to-twenty calls per turn the speed gap never materialises, all four expressiveness gaps are already absorbed by the CLI, and the choice is **reversible for free** — the same index converted to an indexed SQLite table in fifteen lines. Anthropic maintains it and it speaks MCP natively.

**D2 — Three graph primitives, never called directly.** `splice-in`, `splice-out`, `retarget`. Every semantic operation is a named validated composition. *Chosen over:* exposing node/edge CRUD, which cannot preserve chain integrity or co-writes.

**D3 — Illegality is absence, not refusal.** An action is a node catalogued by the type it applies to, so *"what can I do here?"* is a closure. An operation that is illegal here is **not offered**. *Chosen over:* a permission layer, which would be a second mechanism to keep true.

**D4 — Names are path-derived.** `bookkeeping/01-on-books`, `bookkeeping/.cover#metadata`. *Chosen over:* synthetic keys, which rot on every rebuild, and content hashes, which change on every edit.

**D5 — Types live in Bookkeeping.** Its chapters already are the type definitions and it self-hosts — `bookkeeping/01-on-books` is a book that types itself. *Chosen over:* a new registry book, which would duplicate a specification that exists.

**D6 — `read_graph` and `search_nodes` are walled off.** Both are unbounded — search on a common word returned **288 KB** in testing. *Chosen over:* wrapping them, which leaves the bypass reachable.

**D7 — Denormalise freely inside the index.** Children's synopses inline in the parent, ordinals cached beside `predecessor` edges, transitive closures materialised as index nodes. *Rationale:* the no-second-home rule governs authored content; a derived index cannot drift.

## D8 — Expansions are precomputed, not performed

The only read is a closure (R7), and the CLI chooses the expansion (R8). Those pull in opposite directions unless the expansion moves **into the index**: if a Title's node already carries its children's synopses inline, then a bare `open_nodes` **is** the cover page, and no expansion layer stands between the teammate and the graph.

*Chosen over:* an expansion layer the teammate calls through, which would make Anthropic's server a back end nobody talks to, and put a second thing between the room and the walker.

**Consequence — the two drivers split cleanly.** The **memory server is the read path**, always present in the tool list, needing no CLI. The **CLI is the write path**, which is also what hooks can shell into. Both read the same derived file; neither goes through the other.

## The model

### Node roles — three shapes, seven roles

| shape | meaning | roles |
|---|---|---|
| terminal | itself | **Title** · **Catalogue** · **Content** · **Type** |
| pointer | one other node | **Field** · **Entry** · **Reference** |

**Title** names a thing and roots a document. **Catalogue** lists others and arises from headings, the metadata block, the content block, a table of contents, and any chunk with more than one link. **Field** is one metadata line. **Entry** is a listing row whose context is a *summary*. **Reference** is a link site whose context is an *anchor phrase*. **Type** is a definition.

Entry and Reference are both one-link pointers; they differ in what the context is **for**. An Entry earns a summary because a reader decides from it. That distinction is what lets us measure whether summaries exist where decisions happen.

### Invariants

- **I1** Exactly one `catalogue`, `meaning`, `type`, `predecessor` per node — checkable as **relations = 4 × nodes**.
- **I2** Every edge resolves to an existing node.
- **I3** Every book has an Entry in its cataloguer. *A book with no entry has no summary and cannot be found.*
- **I4** Every chapter has an Entry in its book's table of contents.
- **I5** Each catalogue's `predecessor` chain is a total order with exactly one self-referential head, no cycles, no breaks.
- **I6** No node has two meanings.
- **I7** Every `catalogue` chain terminates at a self-cataloguing root.
- **I8** Every `type` chain terminates at a self-typed base.
- **I9** Nothing is removed while something means it.

### Splitting rules

1. The metadata block splits **by line** — one Field per field.
2. Headings become **Catalogues**; what follows declares them as its catalogue.
3. Lists split **by item**.
4. Paragraphs split **by sentence**.
5. More than one link → the node **is** a Catalogue, and each link becomes a child with exactly one meaning.

## What "impossible to do wrong" means — a hierarchy

Validation is the **weakest** rung, because it catches a wrong state after it exists. The rungs, strongest first:

1. **Unreachable** — no operation produces the state. `reference` on a node that already means something **converts that node into a Catalogue** and hangs both references beneath it, so a second meaning is never created.
2. **Unofferable** — the operation is not presented from where you stand. An action is a node catalogued by the type it applies to, so *"what can I do here?"* is a closure, and an illegal action is **absent** rather than refused.
3. **Refused** — typed arguments are rejected before any write. `chapter(into: Book)` given a Chapter fails as a type error, having touched nothing.
4. **Validated** — the invariants run after every operation. This rung exists to catch **indexer** faults, not operator faults.

### The one rule underneath the operations

**A thing's summary lives in the pointer to it.** So a destination created without its door has no summary and cannot be found — which means **you cannot create a destination without creating the door to it.** That is not carefulness; it is what a summary *is* in this model, and it collapses I3 and I4 into one rule that also covers sections.

The symmetry follows: **remove a thing and its door together, and refuse while other doors exist.** A node's inbound `meaning` edges *are* its doors.

### And what compaction actually is

**Not fewer bytes stored — fewer bytes read.** A better Entry means the walk stops there and nobody opens the chapter. The library shrinks in the only dimension that costs anything, and nothing is deleted. Measured as **bytes-per-answer**, which is why editing the door beats editing the room, and why [R11](#requirements--approved-in-conversation-2026-09-0506) works: a thin arrival names the door that needs the edit.

## Operations — semantic, typed, transactional

Every operation is a **named composition** of three graph primitives — `create`, `delete`, `retarget` — and nobody ever calls a primitive. Each is typed by where it is legal, and each carries its co-writes.

### Create

| operation | legal on | makes |
|---|---|---|
| `book(name, summary)` | Subject, Library | Title · metadata Catalogue · `author` Field · `subject` Field · content Catalogue · **Entry in the cataloguer** |
| `chapter(name, summary)` | Book | Title · **Entry appended to the book's table of contents** |
| `section(heading)` | Catalogue | Catalogue, appended |
| `passage(text)` | Catalogue | Content if it carries no link; Catalogue + References if it carries several |
| `field(name, value)` | metadata Catalogue | Field |
| `reference(anchor, target)` | any node | a Reference — **converting the host to a Catalogue if it already means something** |

Position supplies the arguments: `catalogue` is where you stand, `subject` is where you stand, `author` is **who is walking**. Two arguments, because the graph knows the rest.

### Read

`closure(n)` is the only primitive — one `open_nodes`, the four out-edges plus everything pointing in. The rest are expansions the CLI performs beneath one verb:

- **`look(n)`** = `closure(n) + closure(n.catalogue)`. Measured: **3 reachable names → 16.** This, not `closure`, is the default move.
- **`page(n)`** — the catalogue-subtree with `meaning` ignored, ordered by `predecessor`. Transitive, therefore **materialised as an index node**.
- **`doors(n)`** — inbound meanings. Free; already in the closure.
- **`path(n)`** — `catalogue` walked to its fixed point. The breadcrumb.
- **`sequence(c)`** — `predecessor` walked within one catalogue.

### Edit — the step that compacts

| operation | legal on | why it compacts |
|---|---|---|
| **`summarise(text)`** | Entry, Field | the walk stops here; the room is never opened |
| **`link(anchor, target)`** | Content | terminal prose becomes a pointer — the 17% → 67% move |
| `retarget(target)` | pointer | fixes a door that leads somewhere wrong |
| `move(into)` | any | splice out of one chain, splice into another |
| `reorder(after)` | any | **two rewires, no renaming** — the reason `predecessor` exists |
| `merge` | Catalogue with one child | removes a hop |
| `promote` | cohesive Catalogue | becomes a Title with its own cover — [On Evolution](../bookkeeping/10-on-evolution.md), finally measurable |

`summarise` has a **trigger**, which is what makes the library self-improving: a walk that arrives thin names the door that needs it. Nobody reviews the library; the library reports where it failed.

### Delete

| operation | refuses when | also does |
|---|---|---|
| `remove chapter` | anything outside the book means it | removes its Entry, **splices the chain**, removes its subtree |
| `remove book` | anything means it | removes its Entry from the cataloguer, removes the subtree |
| `remove section` | — | reparents or removes children; splices |
| `remove reference` | — | **collapses the host back to a pointer if one reference remains** |
| `prune passage` | anything means it | terminal Content superseded by a summary |

Generic `delete node` **does not exist.** It cannot splice a chain, cannot find the door, and cannot know what it orphans.

## Placement — where each thing lives

| what | where | why there |
|---|---|---|
| The seven chunk types | **Bookkeeping**, new chapters | it is `specification: Book` and its chapters already *are* the types; it self-hosts |
| The four links, closure, invariants | **Bookkeeping**, one new chapter | the same type system, one grain finer |
| The five splitting rules | **Bookkeeping** | they specify how a book decomposes |
| The indexer + its resource | **Environmentalism**, new chapter `On Indexing` + `--indexer.ts` | it is a compiler; Environmentalism owns compilation |
| The walls (hooks, `settings.json`) | **Environmentalism**, new chapter `On Walls` | the platform enforcing itself |
| The room renderer | **Environmentalism**, resource beside `On Indexing` | derived output, same family |
| Each CLI verb | **Our Skillset**, one chapter each; `applies-to:` in frontmatter compiles the attachment edge | verbs the team invokes; the attachment is *declared*, not registered |
| `library.jsonl` | `.claude/library.jsonl`, **gitignored** | derived, rebuilt, never authored |
| This sprint's record | **Projected Identity**, this chapter | one chapter per sprint |
| Defects found | **Solutions** in the branch library | indexed by symptom |

## Units

**U1 — The chunk types, specified.** *Mechanism:* seven chapters in Bookkeeping defining Title, Catalogue, Field, Entry, Content, Reference and Type, each with the shape it must satisfy, plus a validator resource that checks a node against its declared kind. Runs inside the type-check. *Files:* `bookkeeping/16..22-*.md`, `bookkeeping/16-on-chunks--validator.ts`, cover. *Demo:* the validator **rejects** a Content node carrying two meanings, and accepts it once converted. A hand-authored page cannot fake a rejection.

**U2 — The links and the closure, specified.** *Mechanism:* one Bookkeeping chapter defining the four links, their totality, their fixed points, the closure, and the nine invariants; a validator checks I1 to I9 across a whole index. *Files:* `bookkeeping/23-on-the-graph.md` plus validator, cover. *Demo:* `relations = 4 x nodes` printed for the real corpus, and the same number **going red** when one edge is deleted by hand.

**U3 — The indexer, covers.** *Mechanism:* a compiler that walks `.claude/library`, applies splitting rules 1, 2 and 5, and emits `library.jsonl`; runs on demand and before any read. **Prototyped already** at 1,290 nodes, 5,160 relations, 4N exact. *Files:* `..environmentalism/14-on-indexing.md`, `14-on-indexing--indexer.ts`, `.gitignore`, cover. *Demo:* `open_nodes(["bookkeeping"])` through the real server returns the cover with its metadata and content catalogues.

**U4 — The indexer, full depth.** *Mechanism:* extends U3 with rules 3 and 4 — lists split by item, paragraphs by sentence — across all 711 files and 82 covers, including the ten personal libraries. *Files:* same resource. *Depends:* U3. *Demo:* every chapter reachable, every meaning resolving, counts reconciled against the link checker's own totals.

**U5 — Denormalisation.** *Mechanism:* the indexer inlines each child's synopsis into its parent's observations and materialises transitive closures as index nodes, so one closure answers a whole page. *Files:* same resource. *Depends:* U4, D8. *Demo:* a single `open_nodes` on a Title renders a complete cover page, measured against the 1,838-byte assembled page and the 3,494-byte file.

**U6 — The write CLI.** *Mechanism:* semantic operations composing create, delete and retarget, each typed by where it is legal, each writing **markdown** and reindexing. *Files:* `.claude/lib/`, `..environmentalism/15-on-operations.md`. *Depends:* U2. *Demo:* creating a chapter writes the file **and** its Entry with the invariants green; the same call issued from a Chapter is refused as a type error having written nothing.

**U7 — The walls.** *Mechanism:* `PreToolUse` denies `mcp__memory__read_graph` and `mcp__memory__search_nodes`; `SessionStart` and `PostCompact` inject the current room. *Files:* `.claude/settings.json`, `..environmentalism/16-on-walls.md`. *Depends:* U5. *Demo:* the deny is **watched firing**, and the known VSCode Read bug is probed first, because a wall that fails open is not a wall.

**U8 — Verbs as nodes.** *Mechanism:* one Our Skillset chapter per verb carrying `applies-to:` in frontmatter; the indexer compiles that into an Action node catalogued by the type. *Files:* `our-skillset/35..NN-*.md`, indexer. *Depends:* U1, U4. *Demo:* the closure of a Book **lists the operations legal on a Book**, and the closure of a Chapter does not list chapter-creation.

**U9 — Walk instrumentation.** *Mechanism:* the read path appends node, verb and byte count to a session log, so a thin arrival has coordinates. *Files:* indexer resource, `..environmentalism/16-on-walls.md`. *Depends:* U5. *Demo:* a deliberately thin walk produces a named node, and summarising it changes the next walk's measured cost.

**U10 — Catchup on rooms.** *Mechanism:* the catchup skill re-expressed as a walk rather than thirty document reads. *Files:* `our-skillset/34-catchup.md`. *Depends:* U5, U8. *Demo:* the same grounding, with **bytes and tool calls stated as numbers** beside today's thirty documents.

**Design owed — not units.** *(a)* How a teammate's origin is chosen so each walks from their own autobiography (R14): the mechanism binding a walker identity to a starting node is undesigned. *(b)* How markdown edits round-trip into a live index without a full rebuild, once the corpus is large enough that rebuilding stops being instant. Both keep their identifiers and are denied files, scenarios and dependencies until designed.

## Test scenarios

| unit | scenario | expect |
|---|---|---|
| U1 | a Content node given a second meaning | validator rejects; the reference operation converts instead |
| U2 | delete one edge from a valid index | 4N fails by exactly 1 |
| U2 | a catalogue chain containing a cycle | I7 fails, naming the cycle |
| U3 | index the 15 top-level books | 4N exact; every meaning resolves |
| U4 | index all 711 files | counts reconcile with the link checker |
| U4 | a chapter with no entry in its table of contents | the door rule fails, naming the chapter |
| U5 | open a Title | a complete cover page in one call |
| U6 | create a chapter from a Chapter | refused as a type error, nothing written |
| U6 | remove a chapter another book cites | refused, naming the citer |
| U6 | remove an uncited chapter | Title, Entry and subtree gone; chain spliced; 4N green |
| U6 | add a reference to a node that already means something | host becomes a Catalogue, both references beneath, 4N green |
| U7 | call the graph dump | denied by the harness, not by judgement |
| U8 | closure of a Chapter | chapter-creation is **absent**, not refused |
| all | non-ASCII round-trip: em-dash, curly quotes | byte-identical from source to context |

## Risks

**The wall may not hold.** Issue 37540 reports that Read bypasses PreToolUse in the VSCode extension, which is where we run. *Mitigation:* U7 probes before anything is built on it; if it fails, enforcement falls back to Bash-level matching and topology carries more of the weight.

**Hooks fail open.** Only exit code 2 blocks; a missing or erroring script proceeds silently. *Mitigation:* every wall watched denying, plus a periodic probe that attempts a bypass and shouts if it succeeds.

**Node count and parse cost at full depth.** Estimated around 22,000 nodes and 8 MB against tonight's 1,290 and 940 KB, with the server re-parsing on every call at a measured 10.75 ms. *Mitigation:* measure at U4 before committing U5; D1 is reversible in roughly fifteen lines.

**Hub fan-out.** A node with 400 inbound meanings returned 40 KB. *Mitigation:* accept it, since the size is the fact, but measure which nodes are hubs once U4 lands.

**Encoding.** Em-dashes double-encoded through JSON in one prototype, and Windows cp1252 refused box-drawing characters on stdout. *Mitigation:* an encoding test in U3, before ten thousand summaries carry the fault.

**Over-shredding.** Rule 4 splits by sentence, and a link-free sentence is a node that means only itself. *Mitigation:* measure the terminal ratio per book at U4; a rising ratio means either the rule is too eager or the prose is under-linked, and those two are distinguishable.

## Origin tracing

R1 and R2 to U2. R3 to U3. R4 to U1 and U6. R5 to U2 and U6. R6 to U3. R7 to U2. R8 to D8 and U5. R9 to U6 and U8. R10 to U6 and U9. R11 to U9. R12 to U6. R13 to D1 and U3. R14 to design owed (a).

Every unit cites a mechanism and a visible end. Every requirement lands somewhere. The two that do not are marked design owed rather than planned.

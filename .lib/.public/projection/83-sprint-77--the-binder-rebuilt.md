# Sprint 77 — The Binder Rebuilt

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- ***The sprint name is a PROXY; Doug's to rename.***

---

***THE COMMISSION, IN DOUG'S WORDS:***

> **"Now, we are doing incremental compiler through Vite."**
>
> **"Get a version of the incremental hook-based compiler in dev and prod mode working by editing the existing `.public`."**
>
> **"It will need to stay pretty while we support the new `[]()` syntax, because we can keep using the classes but we need to make sure they can receive references — Title, Author, Subject, whatever else currently needs things."**

**Read [The Design Units](../the-catalogue-and-the-specification/05-the-design-units.md) first**, *and [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md) for the design of record.* **This chapter is the sprint's own record, compacted at its close (2026-09-20) from 11,051 words: what was ruled, what was found, what was reached, and where the settled account of each now lives.**

## <a id="rulings"></a>The rulings of the opening day

| | |
|---|---|
| **where it is rebuilt** | ***"`.binding` and you can clone the current one in `.archive`, and then really trash as much as you need."*** *Not a package. In place.* |
| **which way work flows** | ***"You can develop what you want and backpropagate the design to the package."*** ***REVERSED 2026-09-19:*** **".binder lives in .public package and we are editing it and syncing it to .me."** *The master is the package; a library's binder is a synced copy; [the sprint was carried home](#home).* |
| **and it must arrive whole** | ***"You need to develop `.public` and deploy to git so make sure you do end with a complete version to be consistent with it in the package."*** |
| **which library** | ***`.me`.*** *`.wiki` and `.latex` are **locked and out of date**, so they are not a test bed.* |
| **a heading is referrable** | ***BY MENTION.*** *"I say no. We should mention things. We are mentioning titles right?" — **a title IS a mention**. Written into [the thesis](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md#the-mention).* |
| **what `[ copy ]( target )` IS** | ***THE LOWERED FORM.*** *"Remember that that is the syntax the compiler spits out!" — not surface syntax awaiting a mark.* |
| **and the hole inside that** | ***a mention returns nothing, so what goes in its parens?*** *"We need to figure out what goes in that can be used as the end of a referent." Answered on the 20th: `[[[ X ]]]` allocates, and a `Fold` plants the id.* |

***The archive was made:*** **54 files, 1,915 lines**, *cloned to `.archive/.public/.binding` beside the predecessor compiler the [condition report](../the-condition-report/08-the-compiler.md) audits.*

## <a id="protection"></a>How `.public` is protected, which is measured rather than promised

> ***Doug:*** **"And how do you prevent from destroying `.public`. The binder is a whole new thing but we want to preserve as much of `.public` as possible."**

***The dependency is strictly one-way — `src/` holds zero references to `.binding` — and the binder's reach into `.public` was eleven lines across eight files, four of them generated import strings and two in generated artifacts.*** **The genuine surface was four files, two being deleted and one holding the known fault (`reflection.slug` in address derivation).** *Add the standing rule that every `src` change needs Doug's explicit yes, and `.me` at 4242 as the per-step gate.*

## <a id="installing"></a>What the reading found: the binder does not know how to install itself

> ***Doug:*** **"Reread `.binding` too — it needs to know how to install itself."**

***Three copies stood in three régimes*** — *the master on npm at a caret, `.me` on a `file:` checkout, `.wiki` and `.latex` pinned exact* — ***and the cause is one line:*** **[`manifest/origin.ts`](../../package/.binding/manifest/origin.ts) keeps `package.json` and `.pubconfig` wholesale, so a sync never touches either.** *Right for what a library owns, wrong for the rest: `.me`'s `preview` pinned 4242 and the master had never heard of it.* **The design answer: `package.json` is the only file with two owners — its `scripts` are the master's, its dependency NAMES are the master's, and how each one RESOLVES is the copy's.** *`.pubconfig` already works this way, because every phase's defaults live in code and only the values a library set live in the file. `sync` is one-directional; backpropagation is a manual diff.* ***Open, as [M3.2](#m3).***

## <a id="corrections"></a>Four units corrected before a line was written

***Every one came from reading rather than from building.***

1. **[D9](../the-catalogue-and-the-specification/05-the-design-units.md#d9)'s fourth sentence was wrong.** *A citation heals when a declaration in ANOTHER file appears, so the repair is a reverse index at library scope — every key mapped to the files that read it, hit or miss, the negative dependency the substrate could not record.*
2. **[D11](../the-catalogue-and-the-specification/05-the-design-units.md#d11)'s `addWatchFile` line was wrong, and the correction was itself half wrong.** *The edge splits by event: a content edit is native and free, because the assembled book carries a real `import` per chapter; a membership change is ours, through `server.watcher.on('add'|'unlink')` and `server.reloadModule`, because `handleHotUpdate` is never called from the add and unlink paths at all.*
3. **D11's `specify` row was miscast.** *A `transform` holds source text; a local check needs a constructed writing. The phase splits: referential checks to the catalogue at transform, local checks to `@specify` wherever a writing is built.*
4. **[D6](../the-catalogue-and-the-specification/05-the-design-units.md#d6) settled by reading one file.** *Address derivation was already a pure late pass. Doug: "We shouldn't be doing slugs in the framework."*

## <a id="chain"></a>The dev chain, read end to end

***`index.html` → `main.tsx` → `routes` → `books` → one module per book: four generated artifacts, three of which need only the directory walk and one of which waits on names.*** **Two facts from `main.tsx`, both paid for: no top-level await, because an entry that awaits the book chunk deadlocks silently; and hydrate before the book arrives, measured at a 4.4 second window of dropped clicks.** *The settled account is [the binder's](../the-catalogue-and-the-specification/07-the-binder.md).*

## <a id="fast-refresh"></a>An edit does not hot-update the page. It RELOADS it.

> ***Doug, 2026-09-17:*** **"I don't understand how you created an incremental compiler in vite but this was so small. What about hot reload"**

***Driven: a chapter edited while the page was open, and the page fully reloaded.*** **React Fast Refresh bails at every level — a chapter's default export is a class and a book module exports a value, and Fast Refresh takes a module only when every export is a component it can swap.** *Resolved as [M1.3](#m1): a generated book module takes its own `import.meta.hot.accept`, and Fast Refresh is kept off the modules we generate. An edit appears in 496ms, in place.*

## <a id="scale"></a>Six books is not the target, and the documents knew it before the session did

> ***Doug, 2026-09-17:*** **"We are building an importer for like HUNDREDS if not THOUSANDS of conversations… This thing is going to scale FAST."** *And the reprimand:* **"No you do this all the time — no subclasses need it? Polymorphism doesn't support it. Page fast today? Good enough for now. It's not."**

***The design was already calibrated for thousands*** — *D9's 8,000-file extrapolation, `assembly/book.ts`, `specifying.ts` and the card catalogue all said so* — ***and the session had shrunk it.*** *The framing was withdrawn, including from the thinking sent to Claude Desktop.*

### <a id="cliffs"></a>Where it actually breaks, marked measured or extrapolated

| | |
|---|---|
| **viewing a page** | ***scales.*** *One page loads one book into one runtime; the build splits per book.* |
| **the catalogue** | ***scales, IF parsed.*** *Linear: 0.91 steps per character, 2.07ms per file.* |
| **referential integrity** | ***scales.*** *The reverse index is O(edit), not O(corpus).* |
| **BINDING** | ***did not scale*** — *`specify` loaded and ran every book.* **Removed by [the parsed catalogue](#done-parsed).** |
| **THE ROUTE TABLE** | ***does not scale, and nothing in the three states touches it.*** *`routes.ts` holds every book and `main.tsx` imports it on every page: **296 bytes per book** — 1.7 KB at six, 288.6 KB at a thousand, 1.4 MB at five thousand, on every page, in the critical path of viewing. The shelf has to become a lookup.* ***Open.*** |

## <a id="subjective"></a>The build is SUBJECTIVE, and the catalogue is somebody's

> ***Doug, 2026-09-17:*** **"The compiler in `library/.public` is going to learn when it can pull from `.me` — a SUBJECTIVE build step for each user because each user has their own library."**

***A reference names a thing, and which thing it finds depends on whose library you stand in.*** **Resolution is scoped and resolves locally first; non-membership is a question about whose library, so a refusal must say whose; and a subjective build bounds the route-table cliff without solving it.** ***Open:*** *does a reference that fails in the user's library fall back or refuse; does the subjective step run before or after the objective one; is the shelf a table or a lookup.*

## <a id="whole"></a>The goal, which is ONE working thing

> ***Doug, 2026-09-17:*** **"We aren't doing micro-sprints. The goal is to get something working with the binder, public and my library. Without that I can't see anything."**

*Three states, each the whole system running, each reached when Doug can look at his library and see it:* **<a id="state-1"></a>ONE · the library runs from its source** · **<a id="state-2"></a>TWO · references work** · **<a id="state-3"></a>THREE · it ships**. *Their gates are written in Doug's terms under the milestones below, which are the same three things.*

## <a id="milestones"></a>The three states are MILESTONES, and each one closes the same way

> ***Doug, 2026-09-19:*** **"Consider each state a milestone. We catchup after each and cleanup after each."**

| | |
|---|---|
| **RUN THE GATE** | *written below in Doug's own terms and not negotiable down* |
| **[`/catchup`](../../../../.claude/library/our-skillset/34-catchup.md)** | *because the milestone changed what is true* |
| **[`/cleanup`](../../../../.claude/library/our-skillset/35-cleanup.md)** | *against the register each file lives in — [the binder's](../the-catalogue-and-the-specification/08-the-binders-condition.md)* |

### <a id="m1"></a>MILESTONE ONE · The library runs from its source — ***REACHED 2026-09-19***

> ***THE GATE, AND IT PASSED:*** **every generated file and `.graph.json` deleted, dev started, six books served from nothing on disk — routed, themed, pretty. A thirteenth chapter added while the page was open appeared in 1758ms with no bind and no reload; the compiler refused it unlisted by name (`CHAPTER-NOT-LISTED`) and lifted the refusal when the table listed it.**

***The gate also found what it was written to find, on the first clean slate anyone had run:*** *vite's dependency scanner reads a module's text off the disk and never calls `load`, so every module the binder answers for died in the scan — invisible before, because a file a previous bind left lying there was always there to read. The scanner sets aside any id carrying a `\0`, so ours wear one there alone.*

- **M1.1 · DONE.** *One inventory every plugin asks and the watcher invalidates ([`inventory/retaken.ts`](../../package/.binding/inventory/retaken.ts)); `vite.config.ts` had handed one inventory taken at boot to every plugin. The add and unlink watcher, through `server.reloadModule`.*
- **M1.2 · DONE — 90ms → 3ms on Dougs Library; 2859ms → ~500ms at a thousand books.** *The reading cached on modified-time-and-size, proved to invalidate on a rename and a same-length edit; the six passes still run in full. 287ms of the warm half-second is `statSync` ([B12](../the-catalogue-and-the-specification/08-the-binders-condition.md#b12)).*
- **M1.3 · DONE, and it did not need the substrate.** *A generated book module takes its own `import.meta.hot.accept`; `@vitejs/plugin-react` self-accepts every file and then invalidates from inside its own callback when a module exports a value, so Fast Refresh is kept off what we generate. An edit appears in 496ms in place. The seam where the substrate would keep a chemical's identity across an update is named and not taken — Doug's call.*

### <a id="m2"></a>MILESTONE TWO · References work

- **M2.1 · DONE (2026-09-19).** *The notation is read and rewritten in strings as well as prose; eighteen book names typed as string props across six covers are checked. Doug: "Evaluating the ()[] was never the job of this framework."*
- **M2.2 · THE REVERSE INDEX — open.** *Every key mapped to the files that asked, hit and miss; what lets a citation heal when its declaration appears elsewhere.*
- **M2.3 · A MENTION PLANTS AN ANCHOR — DONE (2026-09-20).** *`[[[ X ]]]` is a spot of its book; the transform plants a `Fold`; [the framework wears the id](#done-validated).*
- **M2.4 · SUITES FOR `transform` AND `structure` — DONE.** *81 unit promises at the close.*
- **M2.5 · THE PAGE CHECK IN THE BINDER — DONE, as the proof.** *Every reference the compiler resolved is pressable on the page it was written on.*

> ***THE GATE, IN DOUG'S TERMS:*** **a `$Title`, `$Author` and `$Subject` each receive a reference and the pages stay pretty — held. Cite a title the library does not hold and the compile stops, by file and line — held, in both halves, since 2026-09-18: "We want compiler errors if this thing fails." Declare that title in a different file and watch the citation heal with no edit to the citing file — M2.2, open.**

### <a id="m3"></a>MILESTONE THREE · It ships

- **M3.1 · THE BINDER REACHES THE PACKAGE — DONE (2026-09-19), [carried home](#home).**
- **M3.2 · `package.json`'S TWO OWNERS — open.** *[As read on the opening day](#installing).*
- **M3.3 · THE CROSS-LIBRARY PASS — open.**

> ***THE GATE:*** **a fresh copy into an empty folder produces a library that runs dev AND binds, with no file edited by hand — and `.me` publishes from the package the way it will for everybody else.**

### <a id="milestone-standing"></a>What is measured — ***re-read at the close of Milestone One, 2026-09-19***

*The numbers of that day stand in [the binder's own table](../the-catalogue-and-the-specification/07-the-binder.md#measured), which is kept current; what it does not carry: the pages were at* ***83 of 92*** *checks, the nine being [two real defects](#m1-found).*

### <a id="m1-found"></a>What Milestone One turned up that is not Milestone One's to fix

*Found by running `design/qa.mjs` for the first time since the notation changed; the suite itself had counted `/` as a book and never opened two of the pages, and was corrected to the assumptions rather than the result — 70 checks became 92.* **The author line lost its words on every page**, *because the seven forms as first written gave every form one slot — Doug: "No language version ever gave anything one slot. It was always assumed." — and [the language](../the-catalogue-and-the-specification/06-the-language.md#words) says now that the bracket is display and the paren the identifier.* **A chapter's address was a slugged folder where no page stands** — *Doug: "Don't chapters have #ids right now?" — and is its book's page and a fragment.* **And the check that would have caught it now exists, in the proof** — *which found on its first run a reference to a synopsis whose title did not print, the question that [closed on the 20th](#done-validated).*

### <a id="home"></a>The binder came home, and it ships with a test library

***Doug, 2026-09-19:*** **".binder lives in .public package and we are editing it and syncing it to .me."** *Every edit had gone into the synced copy while the master was the old compiler; 29 files carried home, types at zero, `.me` catching up by `sync`.* **And a test library, part of the binder — Doug: "we need it to be a part of .binder, well groomed, and use for test purposes at all levels" — five real books, three vitest projects because "don't confuse unit / regression / performance".** *The regression suite paid for itself on its first run: the fixture mentioned with the composition, and the structure had keyed a mention on a tag's NAME; the reader now reads a tag by what it is bound to — Doug: "You should be parsing things with static comprehensions like the typescript compiler."* **The settled account is [the binder's](../the-catalogue-and-the-specification/07-the-binder.md#test-library).**

## <a id="standards"></a>Holding the standard through a refactor this size

> ***Doug, 2026-09-17:*** **"I need coding standards need to be upkept as much as humanly possible as we do a huge refactor. Elegance, building for scalability, using what is there instead of reinventing."**

***The opening day caught five things we were about to reinvent, every one by reading:***

| we were going to write | it already exists |
|---|---|
| a `Mention` class | **`$Catalogue` IS the mention** |
| a programmatic Vite host | **`specify.mjs` already calls `createServer`** |
| a `.pubconfig` merge | **`configure` already merges each phase's defaults from code** |
| a book composed by inlining | **`assembly/book.ts` already composes by REFERENCE** |
| a watcher that knows what a chapter is | **`filenames.ts` is that grammar** |

*The standards themselves — the register, a phase is a file, brevity earned, never self-name, scalability as a shape — are [The Coding Style](../the-coding-style/03-the-coding-style.md)'s and [the cleanup skill](../../../../.claude/library/our-skillset/35-cleanup.md)'s; the sprint added none.*

## <a id="stands"></a>Where things stand

### <a id="done-serving"></a>DONE · The binder serves its own library

***`npm run dev` was bare `vite`, serving artifacts a previous bind had written, so dev depended on the batch. It runs the binder's own host now — `serving.ts`, a PROXY NAME.*** **And it was wrong in a way the team did not get to choose:** *Doug, 2026-09-17: "you don't get to choose server architecture and if themes are shared in one runtime, that's a little scary. We need to replicate Github!"* ***THE RULING: DEV REPLICATES WHAT IS PUBLISHED*** — *one document per book, one runtime per book by construction.* **The host as first written was an SPA, and the thirteen page checks it failed were not the SPA's fault: a suite whose waits were written for a prerendered site is not a valid gate for a dev server** ([Solutions 84](../solutions/84-the-five-pages-that-were-all-one-book.md)).

### <a id="one-runtime"></a>And the shared runtime does not exist — measured rather than argued

*The condition for a theme leaking between books is real — Doug's library registers its theme on the framework's shared `Book` — but `main.tsx` holds no client router, so a move between books is a whole document load; driven, a global set on one page was gone after the move.* **The ruling stands for a better reason than the fear: dev must be demonstrably the same application as what is published, and the day something adds a client router the leak arrives with it.**

### <a id="done-parsed"></a>DONE · The catalogue reads a book without running it

***[`catalogue/reading.ts`](../../package/.binding/catalogue/reading.ts) — one TypeScript parse per file, the JSX whitespace rule as babel's own algorithm, entities decoded.*** **The gate was a diff against recorded fact:** *five of six books agreed with `.graph.json` on every fact and every chapter title in order, 76.5ms, no book loaded* — ***and the one disagreement was a real defect: an apostrophe had gone missing from a cover minutes before, and the recorded graph, which dev and preview were still serving, had no idea.*** *The parsed catalogue sees the library as it IS.*

### <a id="done-compiled"></a>DONE · Every address is the compiler's, and the page looks like Wikipedia again — ***2026-09-20***

***The regression had two causes, and neither was the theme failing to load:*** *`ac48a33` made a mention hold its anchor instead of being one and taught the toolbar format but not the encyclopedia theme, whose rules said `.pd-ref`; Doug's sheet then took away the one mechanism giving mention rows their height.* **The fundamental fix was a vocabulary: every anchor the framework draws wears `pd-meaning`** ([B16](../the-catalogue-and-the-specification/08-the-binders-condition.md#b16)).

***Then the ruling that changed the design:*** **"are you compiling those with the compiler? … you are not using the system we just created." — "There should not be anymore dynamic link generation." — "Then it is not a validated library. Remove the feature from `.public`."** *The shelf, `address()`, `itself` and `leads()` came out of six kinds ([B17](../the-catalogue-and-the-specification/08-the-binders-condition.md#b17)); the transform writes `[words](url)` into every mention and `[words]()` for the page it stands on, which the framework reads as `pd-this`; a ref that leads somewhere may say nothing, which is the box.* **And the header, as Doug's test of the system:** *the brand is a section given a reference and draws as one anchor; a resource shared by every page is never "here"; `[[[ X ]]]` got its compiler — a spot of its book, a `Fold` planted beside its words — and the mark leads to the plate.* *Worked through [Debugging a Page](../debugging-a-page/.cover.md). Commits `d6e9e91`, `3e3b3a8`, `abf0797`, `d5542b0`.*

### <a id="done-validated"></a>DONE · The compiler validates what a library means — ***2026-09-20, afternoon***

***It began with B21 and Doug's question:*** **"Having the compiler verify that all things that need to be unique are. Chapters & mentions per book, book titles across the library. These are hard constraints otherwise the reference can't work. It concerns me that navigation worked."** *It worked by landing on the first of two elements wearing one id, and the proof had passed it because a `Set` swallowed the second ([Solutions 88](../solutions/88-the-link-that-landed-on-the-first-of-two.md)). The proof counts now.*

***Six rulings, each of which changed a mechanism:*** **the synopsis lives in the book** *("In the book. It has a `.synopsis` file literally… Don't make that automatic. The name should be declared in the code") — a row is `<Chapter>[[ X ]]( X / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( X )**</Book>`, and the catalogue chapters that carried synopses are gone;* **every id once, and a mention nothing refers to is refused** *("we want a compact library") — `UNREFERENCED-MENTION`, which found the structure had never read a resource;* **the menu is the table;** **the compiler does not read `print`** *("if you are parsing like that, you have broken polymorphism… The compiler just cares that things are in the right file for now");* **a heading wears an id only as a title or when allocated** *(his yes, `src`) — one `id` seam on `$Writing`, the chapter overriding it with its name; sixteen rows that wrote `#fragment` by hand became twelve allocated headings and sixteen mentions.* **[B15](../the-catalogue-and-the-specification/08-the-binders-condition.md#b15), [B21](../the-catalogue-and-the-specification/08-the-binders-condition.md#b21), [B26](../the-catalogue-and-the-specification/08-the-binders-condition.md#b26) treated; [B31–B35](../the-catalogue-and-the-specification/08-the-binders-condition.md#b31) added.**

***Then the specification.*** *Doug: "You should have a spec of what a library is and you should look for things that would obviously be true. Use principles of urls. Do you ever get the same? Then validate that that scenario is impossible. It should express necessity and sufficiency."* **[A Library, Necessarily and Sufficiently](../the-catalogue-and-the-specification/09-a-library-necessarily-and-sufficiently.md)** *— five invariants, every scenario in which two things would meet at one address, the rule and the promise for each. Writing it found four scenarios nothing refused and one silent skip:* **`SAME-ADDRESS`, `NO-ADDRESS`, `RESERVED-ADDRESS`, `RESOURCE-NAMES`** ([B36](../the-catalogue-and-the-specification/08-the-binders-condition.md#b36)).

**Measured at the close:** *binder types 0, unit 81 (was 37 at Milestone One), regression 6, catalogue at 205 books green; package types 0, 154 of 154; Doug's library bound in 17s, seven pages read back, 30 faults gone to none; qa 100 of 100.* ***The development experience:*** *a sheet edit reaches the page in 1.4s; a `src` edit is a 4.7s build plus a bind, and a bind without the build judges yesterday's page; the dev server keeps the binder it started with and says so with an `EPERM` on `.vite/deps`; a kept-open browser answers in 13–20ms where a photograph cost ten seconds; and on the last afternoon the compiler was the instrument — one bind listed every doubled id by page where the day before had needed thirty photographs.* *Commits `b902f59`, `a71a4ef`.*

## <a id="owed"></a>What is owed

- ***M2.2, the reverse index*** — *the healing half of Milestone Two's gate.*
- ***M3.2 and M3.3*** — *`package.json`'s two owners, the binder installing itself, the cross-library pass.*
- ***The route table as a lookup*** — *[the one cliff](#cliffs) nothing in the three states touches.*
- ***Every proxy name of the sprint*** — *`serving.ts`, `reading.ts`, `structure.ts`, `wellformed.ts`, `transform.ts`, `proof.ts`, `asChapter`, the fault names — flagged in [the register](../the-catalogue-and-the-specification/08-the-binders-condition.md#b35), his to rename.*
- ***What the next sprint is*** — *Doug, 2026-09-20: "next step is to do a rewrite of .public! But I will fill you in next sprint."*

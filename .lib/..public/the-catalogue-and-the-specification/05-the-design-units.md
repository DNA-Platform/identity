# The Design Units

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

***THE SPRINT IS DESIGN ONLY, AND ITS STANDARD IS NOT "A GOOD DESIGN".***

> ***Doug, 2026-09-17:*** **"The next sprint is design only. We need to have a design we KNOW we can implement. Pure branch and documentation and sprint design work."**

**So the format's whole job is to make the difference between KNOWING and ASSUMING visible, per unit, so that "we know we can implement it" is a thing a reader can check rather than a feeling the author had.**

## <a id="the-format"></a>The format

***Each unit is one section with a stable identifier, and it carries six rows.***

| row | what it holds |
|---|---|
| **RULING** | Doug's words, verbatim, where he has given them — and nothing where he has not |
| **LANDS ON** | the seam it attaches to, **cited to a file that was read**, never guessed |
| **RESTS ON** | every premise, each marked `verified` · `assumed` · `unknown` |
| **PROVES IT** | the cheapest thing that would move a premise to `verified` |
| **DEPRECATES** | what stops existing if this is right |
| **STATE** | `settled` · `resting` · `open` |

***A unit is `settled` only when no premise is `assumed` or `unknown`.*** **The sprint finishes when every unit is settled, or names honestly why one cannot be** — *a premise needing code that does not exist yet is a real answer and is written as such rather than argued into looking finished.*

### <a id="three-premises"></a>Three kinds of premise, three resolvers

***This is the load-bearing part, and it is what makes the outward thinking a step of the work rather than an activity beside it.***

| a premise about | is resolved by | and a unit still holding one means |
|---|---|---|
| **our code** | reading it | nobody read the code for this unit |
| **the world** | [`/think`](../../../../.claude/library/our-skillset/20-think.md) | we are guessing at prior art |
| **what we want** | **Doug** | it is waiting on a ruling, and these are worth batching |

**And the loop they run in, in Doug's words:** *"We brainstorm, you catchup on code, you catchup Claude Desktop, you integrate as the architect and engineers and designers, and we loop until you think we have finished or have achieved a significant milestone."*

---

## <a id="d1"></a>D1 · Does a card BOND, or is it only ASSIGNED?

**RULING** — *"Like horizontal gene transfer, it's a piece of writing that isn't created in the DOM."* And: *"We want DI and bond construction to happen at render… based on the cached DOM."*

**LANDS ON** — [`writing/Writing.tsx`](../../package/src/writing/Writing.tsx), whose bond constructor `$Writing(block)` is what every writing is built through; and [`library/CatalogueCard.tsx`](../../package/src/library/CatalogueCard.tsx), which today is a `$Composition` built the ordinary way.

**RULED** — *"Yes let's make it like that, and if it's a problem, we'll add some ability to bind in the code."* **Doug, 2026-09-17, on two construction modes.**

**RESTS ON** — ***all verified.***
- `verified` — a card is a writing on the same base as a chapter. *The class exists and extends `$Composition`.*
- `verified` — ***ONE BASE, TWO WAYS IN.*** **A chapter is BONDED — composed and drawn, and bonding is what happens when it is. A card is ASSIGNED — built directly and never mounted.** *The asymmetry is the design rather than a hole, and it is what makes a card cost nothing.*
- `verified` — **the escape is named in advance**: *if assignment turns out to be insufficient, an explicit ability to bind is added in code.* **A fallback that is chosen now is not a hole; a fallback discovered later is.**

**DEPRECATES** — the assumption that everything in the library is built one way.

**STATE** — `settled`. ***It unblocks [D2](#d2) and [D8](#d8).***

---

## <a id="d2"></a>D2 · What is an input, and what tracks it?

***REFUTED, and the answer is NO.*** **Bond construction cannot be made to run every render, and it cannot be made to re-run on a registration change either. The seam is once-per-construction BY CONSTRUCTION.** *Established by the chemistry team, 2026-09-17, sixteen agents over three designs and eight adversarial reviews; two designs survived to judgment and both were called fatal. The three refutations were verified at the line.*

**RULING** — *the question that opened it:* **"We want DI and bond construction to happen at render… based on the cached DOM."** *And, after the verdict:* **"So we will be more prop-forward in the future with `$Chemistry`… we can initialize a prop with something that comes from the bond constructor. We can absolutely use `$` DI at view time."**

### <a id="d2-walls"></a>The three walls

**1 · A bond constructor's writes are SILENT BY DESIGN, and that is why it may only run once.** *The framework brackets the body with the rendering flag, and the setter returns before reacting.* **Run it once and that is exactly right — construction is not news. Run it again and every field it wrote is silently re-asserted over whatever was written since.** *`Book.tsx:56` does `this._scratchpad = new $Scratchpad()`, so a second run discards every fold its descendants put there, and nothing records that it happened.* ***The framework has no way to tell an initialising write from a deriving one; both go through the same setter.***

**2 · A bond cannot be addressed individually.** *`bind()` lifts every composition child with the bond flag UNSET, and the render body calls the bond only when it is set.* **So waking a chemical does not re-bond it. Only re-rendering its holder does** — *which is the rebuild the whole idea existed to avoid.*

**3 · A MISS IS UNRECORDABLE.** *A component has no registration key until someone registers it; `$reference$` is minted in one place, called only from the registrar, and the resolution path exits immediately when it is absent.* **So "this chemical asked for Theme and Theme was not there" cannot be written down.**

***That third wall is the NEGATIVE DEPENDENCY, and it is the same requirement [D9](#d9) had to meet.*** **An incremental system is unsound without it, because adding a key later cannot re-run what was waiting on its absence.** *The substrate genuinely cannot record it. The catalogue can, and only because it is **static** — a parse sees an unresolved key and writes it down, which is the proxy log.* **One requirement, met in the layer that reads and unmeetable in the layer that evaluates.**

### <a id="d2-survives"></a>What survives, and it is the design

| | |
|---|---|
| **resolve in the VIEW** | *an ask costs under a microsecond and its answer is identity-stable* |
| **register to decide what CLASS stands somewhere** | *paid once, at composition* |
| **change VALUES, not types** | *for anything to be swapped while the page is up* |
| **props belong in the bond's MEMO KEY** | *which is the fix for the live staleness measured this morning* |

***And the correction the chemistry team owed itself, kept because it is easy to get backwards:*** **waking the askers rather than every instance of a type holds for asks made in a VIEW, which re-resolve on any re-render. It does NOT hold for asks made in a BOND, because waking them re-bonds nothing.** *Precise waking is an optimisation of the redraw, not a new capability.*

### <a id="d2-direction"></a>Where DI goes instead

> ***Doug, 2026-09-17:*** **"Perhaps as much DI as possible happens below the component declaration so that you can register things to it right there. That's a beautiful place for it if references work out."**

***And this is the answer to [D3](#d3) arriving from a direction nobody expected.*** **A book today writes `$ArticleTheme.$register(Book)` at module scope — registering ITS theme against the framework's SHARED `Book` component, which is the entire reason two books cannot occupy one process.** *Registered instead against the book's **own lifted component**, declared immediately above it, the collision has nowhere to happen.* **Same line, different argument, and the per-page processes lose their reason to exist.**

**And one measured item from the same verdict, load-bearing rather than incidental:** ***the theme should stop being an element that wraps the book*** — **one line in the public package, and the entire 4.2 seconds.**

**DEPRECATES** — *bond-construction-at-render; any design that re-runs a bond; and the hope that the substrate could hold the incremental graph.*

**STATE** — `settled`. ***The answer is no, and the sprint cost nothing for it*** — *because the premise was marked `assumed` and the three removals had already taken everything off it.*

---

## <a id="d3"></a>D3 · Why does `render` spawn one process per page?

**RULING** — none. Nobody has asked him.

**LANDS ON** — [`.binding/rendering/rendering.ts`](../../package/.binding/rendering/rendering.ts) and `render.mjs`.

**RESTS ON** — ***all four verified 2026-09-17, by reading.***
- `verified` — it is serial, one process per page, and costs 28 of 42 seconds.
- `verified` — **the child does not merely start node: it creates a whole Vite dev server, loads two modules through it, draws one book, and closes the server.** *`render.mjs` is eleven lines and every one of them is that.* **The per-page cost is a server built and torn down, not process startup.**
- `verified` — `ssr: { external: true }`, so `@dna-platform/public` and `@dna-platform/chemistry` load through native `import()` and are **process-global**.
- `verified` — ***and here is what actually collides.*** **A book registers its theme at MODULE SCOPE against the framework's shared `Book` component** — `.latex/aaronson/.book.tsx:62` is `$ArticleTheme.$register(Book)`, and `$Theme.$register(within)` makes *this* sheet the theme for that scope. **Two books in one process both register, and the last one wins.**

**PROVES IT** — *nothing further. The question "why does `render` spawn a process per page" is answered.*

**DEPRECATES** — nothing yet, and that is the point: ***the isolation is genuinely needed TODAY.***

**STATE** — `settled`, **and it hands a dependency rather than a conclusion.** *The shared state is a registration against a global component performed when a module loads — which is precisely what [D2](#d2)'s ruling replaces. If a theme were resolved by SCOPE at render instead of registered globally at load, books could share a process and the cache could stay warm.* ***So "kill the child processes" is not a separate change; it is what D2 makes possible, and it is not available before D2.***

---

## <a id="d4"></a>D4 · What invalidates a book?

**RULING** — none yet; Doug on being shown it: *"I don't know bases or digest so I don't know what this means but it sounds bad."*

**LANDS ON** — [`.binding/manifest/graph.ts`](../../package/.binding/manifest/graph.ts), the `bases(found)` function and the `Entry.digest`.

**RESTS ON**
- `verified` — **every `.book.tsx` in the library is hashed into every book's digest.** *`bases()` walks the root base and every book's base, sorted, into one hash, and that hash is an input to every book. So editing one base re-reads the whole library.*
- `verified` — the dependency is **real**: a book may extend any other book's base.
- `verified` — ***the coarse answer is the honest one and it stays.*** **Doug, 2026-09-17:** *"Honest one. But we don't expect that to happen often."*

***The reasoning holds and is worth stating so nobody 'fixes' it later:*** **you cannot know what a book extends without loading it, and loading is the expensive thing the binder does.** *A hash that is pessimistic on purpose costs nothing in the case that actually recurs — a person editing prose — and is only paid on a base edit, which is rare.* **A narrower dependency would have to be discovered by the very load it exists to avoid.**

**DEPRECATES** — nothing. ***This unit closes by deciding not to change something, which is a real outcome and the format should be able to record it.***

**STATE** — `settled`.

---

## <a id="d5"></a>D5 · What is a mention, as an annotation?

**RULING** — *"Mentions will be annotative, and annotations are associated with writing. A piece of writing is approximately a sequence of strings or other pieces of writing followed by a sequence of annotations and we should make that more explicit."*

**LANDS ON** — [`writing/Annotation.tsx`](../../package/src/writing/Annotation.tsx).

**RESTS ON**
- `verified` — **annotations are already first-class and the seam already exists.** *`$Annotation` is a `$Writing` with `parenthetical = true`, carrying a specification, able to `supplies(writing, parts)`. `$Type` IS an `$Annotation`.*
- `verified` — a writing already answers `annotations: $Annotation[]` through reflection.
- `verified` — that a mention is a sibling of `$Type` rather than a new kind of thing. *Both are annotations; `$Type` is the one that already exists.*
- `verified` — ***THE PARSER TAKES IT OUT OF THE PROSE.*** **Doug, 2026-09-17:** *"We have a parser that reads it, saves the key and the quote (possibly same) and then removes itself. The key and start and end indexes in the text, and the quote, and then removes itself from the string."*

***So the annotation carries FOUR things — key, quote, start, end — and the prose is left clean.*** **The reader never meets `[[great]]`; they meet "great", and where it stood is recorded beside the writing rather than inside it.**

**And the quote is not redundant with the indexes.** *An index alone is positional and rots the moment the prose around it is edited; a quote alone cannot disambiguate a phrase that occurs twice. Held together, the quote re-anchors what the index loses.* ***That pairing is the Web Annotation `TextQuoteSelector` — quote plus position, position as the fast path and quote as the repair*** — *which an outside reading named as the robustness pattern for deep citation before this ruling was given, and arrived at independently.*

**DEPRECATES** — any inline mention node standing in the content sequence; any need for sentence or word objects to address inside prose.

**STATE** — `settled`.

---

## <a id="d6"></a>D6 · How does a reference become an address?

**RULING** — *"No that's the title. Book titles have to be unique in the library. If it gets more complicated, in the future we can do the subject and the title, but for now, globally unique titles."* And: *"Catalogue keys are not dynamic. Freeze the thing."*

**LANDS ON** — [`.binding/resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts) and `$Catalogue.shelve` in [`reference/Catalogue.tsx`](../../package/src/reference/Catalogue.tsx).

**RESTS ON**
- `verified` — **a shelf already exists and is already generated.** *`assembly/routes.ts` emits `$$Book.shelve([{name, address}])` on every bind.*
- `verified` — **it is address-bound and book-only**, and `this.standing() ?? super.address()` in five classes guesses a fragment when a name is not a member.
- `verified` — ***address derivation IS already a pure late pass, and it was all along.*** *[`resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts) takes `(found, held, chosen)` — the filesystem inventory, the persisted graph, and the configuration — and **never loads a book**.* **Its own comment says so:** *"Names are the books' own, read at specify; what it MEANS to be a library is asked there too, so nothing here rules on anything and this step only resolves."*
- `verified` — **it sits at phase five of nine, `resolve`**, *and it is entangled in nothing.* **The per-page process is `render`, two phases later, and it reads the table rather than deriving it.** *So the `unknown` that held this unit was answered by reading one file, and the answer is the good one: the pass is already where the design wants it, and it can move EARLIER the moment titles are parsed instead of evaluated.*

***AND THE READING FOUND A FAULT IN THE SAME FILE, which is the part to carry forward.*** **`addresses.ts` makes a book's address by calling `reflection.slug(name)` — reaching into the FRAMEWORK for a naming decision.** *Doug, 2026-09-17:* **"We shouldn't be doing slugs in the framework."** *And this is not a new position; [the thesis chapter](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md) already had it:*

> **`shelved` maps a name to an ADDRESS STRING, which is the topology-binding [it] says must not exist** — *the day chapters become pages, every value in it is wrong.* **And it holds books only** — *there is no key for anything inside a book, so `address()` falls back to `#slug(name)` for every chapter and heading in the library:* ***a guess, unconditionally, for the entire referrable surface below the book.***

***So the unit's answer is complete and it carries a debt:*** **an address below book level must come from a KEY and never from slugging a name**, *which is the "a reference names a thing and never a place" anchor, and slug is exactly where it leaks today.*

**PROVES IT** — ***done.*** *`resolve` and `render` were read 2026-09-17; derivation is not entangled in the per-page process, and the pure pass is the file that already exists.*

**DEPRECATES** — the `??` fallback in all five classes; **`#slug(name)` as a guess**; *and `reflection.slug` standing in the framework at all.*

**STATE** — `settled`. ***The mechanism was already built and already pure; what was missing was the reading.*** *What remains is not this unit's question but the debt above — keys below book level, so that nothing has to guess.*

---

## <a id="d7"></a>D7 · Where does a fault surface?

**RULING** — *"I would like them to find out in the VS Code errors possibly — which is why plugins and surfacing exceptions and using those APIs might be best."* **And then, once the compiler got fast, 2026-09-17:** *"Oh we don't need the editor…"*

**LANDS ON** — the build.

**RESTS ON**
- `verified` — ***the editor surface was a workaround for a slow compiler.*** *Knowing while typing mattered because finding out at the build cost forty seconds.* **The transform touches 112 files, scans at 0.91 steps per character, and always succeeds** — *so the rebuild IS the loop, and Doug's own answer applies:* **"we can just rebuild and trust the new version."**
- `verified` — ***and it removes the failure an outside reading named as the one to avoid:*** **"two engines that drift, so the editor says green while the browser says red."** *A `tsserver` plugin and a Vite plugin would each hold their own reading of the grammar and could disagree.* **One engine cannot.**
- `verified` — *a TypeScript **transformer** was never available anyway: Vite transpiles with esbuild and never calls `tsc`, so a custom transformer runs **zero times** in this pipeline. It looks like the obvious answer and is a dead end.*

**DEPRECATES** — **the language-service plugin, entirely** — *and with it a second implementation of the grammar, an editor-versus-build drift class, and any daemon holding state between them.*

**STATE** — `settled`. ***The grammar now has three callers — the inventory, `binding:resources`, and the reference transform — all inside one process.***

---

## <a id="d8"></a>D8 · What does the catalogue answer?

**RULING** — *"The catalogue would have subject, title, author queries because each one has a unique book… And then from those you should be able to query chapter and mention, from chapter to section. This is a comprehensive catalogue. I would say it should provide a tagline for each thing."*

**LANDS ON** — [`.binding/specification/reading.ts`](../../package/.binding/specification/reading.ts).

**RESTS ON**
- `verified` — ***the catalogue is half-built already.*** *`Reading` reads off a live book — name, title, author, subject, types, chapters, catalogued, shelves — **one member per fact**, gathered through the prototype chain so a library extends it. Its own comment: "Loading a book is what costs; once it is loaded, another fact costs a member here and nothing else."*
- `verified` — those facts are persisted per book in `.graph.json` with a digest, and unchanged books are carried rather than re-read.
- `assumed`, ***and [D9](#d9) splits it in a way worth saying exactly.*** **`Reading` is the SPECIFICATION of what a card holds — eight facts, one member each, extended by a library adding a member.** *What D9 changes is not the list but **who answers it**: today a running book answers, and under a parsed catalogue the source does.* **So the card catalogue widens `Reading`'s FACTS and replaces `Reading`'s MECHANISM**, *and the assumption is sound only in the first half.*
- `unknown`, ***and BOUNDED now by [the by-mention ruling](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md#the-mention).*** **What is below the chapter is exactly what an author MENTIONED** — *Doug, 2026-09-17:* **"I say no. We should mention things."** *So the surface is authored and finite rather than every heading in the library, which is the difference between a catalogue that grows from the prose and one imposed on it.* **What remains genuinely unknown is the MECHANISM** — *nothing yet reads a mention off a book, and under D9 nothing should: the mentions come from the parse, not from a widened `Reading`.*
- `unknown` — whether the per-book `Entry` can become per-entry without changing what a digest is.

**PROVES IT** — D1 (what a card is), D4 (what invalidates), and one ruling from Doug on whether a synopsis at section scale is generated or written.

**DEPRECATES** — any separate catalogue store; the idea that the catalogue is new work.

**STATE** — `resting`. ***This is the largest piece of good news in the sprint: the expensive half exists and is already incremental.***

---

## <a id="d9"></a>D9 · Can the catalogue be built WITHOUT running the library?

***The unit that reorganises the others.*** **If the catalogue can be built by PARSING rather than by EVALUATING, then the global, expensive, N-squared half of this design never loads a book** — *and most of what the other units were waiting for stops being needed.*

**RULING** — Doug, 2026-09-17, proposing the mechanism:

> *"What if we use `$` for this? `$[The Best Book]` … That allows the replacement system to support markdown syntax and the `$` specifies OUR interpolation."*
>
> *"Is this the beginning of a purely static conversion system that maybe doesn't require the running app to be validated?"*

**And the sigils, after one revision to make them all legal inside JSX:**

```
.[ The Book Title ](key)       declares a title    — one per file
..[ The Author ](key)          declares an author  — one per book, on the cover
...[ The Subject ](key)        declares a subject  — one per book, on the cover
$[ The Mentioned Text ](key)   declares a mention  — inline, mid-prose
[[ The Reference ]](key)       refers to something declared elsewhere
```

***The dot ladder is the library's own vocabulary and runs in the same direction as the folders:*** **more dots means wider scope** — *a title is per file, an author per book, a subject per collection, exactly as no-prefix is a book, `.` is a subject catalogue and `..` is a library catalogue.* **It is in-domain rather than borrowed.**

**LANDS ON** — [`.binding/inventory/filenames.ts`](../../package/.binding/inventory/filenames.ts), and a new Vite plugin beside `binding:template` in [`vite.config.ts`](../../package/.binding/vite.config.ts).

**RESTS ON**
- `verified` — ***the filename already says what is being parsed.*** *`apparatus = ['.book.tsx', '.cover.tsx', '.synopsis.tsx', '.table.tsx']` and `isChapter` are one codified rule whose own comment says it must have one home because "two passes ask these questions". A static catalogue pass is the THIRD caller of a rule that exists, not a new mechanism.*
- `verified` — ***the TypeScript compiler sees prose and only prose.*** *Parsed `ScriptKind.TSX`, walked for `JsxText`: on the P-versus-NP cover it found three prose nodes — the reference URL, `Scott Aaronson`, `Computational complexity` — and **did not see** the `String.raw` holding the title formula, nor 3 imports, nor 5 comments.* **A grep would have gone into all of them.**
- `verified` — ***splicing by absolute offset leaves the file byte-identical either side.*** *Measured both directions true. No re-print, so no source map to regenerate.*
- `verified` — ***the sigil namespace is clean.*** *`.[` `..[` `...[` `$[` `[[` — **zero occurrences** across the wiki demo, the LaTeX demo, `.me` and every branch book.*
- `verified` — ***WHAT IS REFERRABLE DECLARES A LITERAL KEY. WHAT IS DRAWN CAN BE ANYTHING.*** *This was first written down the wrong way round — as "what is referrable is written literally" — and the corpus was measured against it as though being simple were being correct: 39 of 39 chapter titles literal, 4 of 10 cover titles not.* **That framing treats the richest thing in the library as a defect.**

***The one title it called an exception is this, and Doug, 2026-09-17:*** **"I want to be very clear, I absolutely love this title"** —

```tsx
<Math>{String.raw`\mathsf{P} \stackrel{?}{=} \mathsf{NP}`}</Math>
```

**A paper whose title IS the formula, set in real mathematics, is not an exception to what this library does — it is the demonstration of it.** *A markdown site cannot have that title, and most of why `.public` exists is that a book is written as code.*

***So the split between declaration and visualization does not TOLERATE the formula title; it is what lets every title be as rich as that one.*** **A title may be a formula, a figure, a date, an equation, a whole composition** — *the catalogue is indifferent, because it never looks at the drawing.* **Only the key is literal, and the key was never the thing anybody reads.**

- `verified` — ***the cost, measured 2026-09-17 on 132 real files, 929 KB:*** **parse plus scan 273.7 ms, 3.3 MB/s, 2.07 ms per file.** *52.5% of the source is JSX text, which is higher than expected and means the scan is not a rounding error on the parse.* **Warm edit: 2 ms. Cold pass extrapolated to 8000 files: 16.6 s** — *which is the number to beat, and is only paid once if the table persists the way the book digest already does.*
- `verified` — ***THE INVALIDATION PROBLEM IS REMOVED RATHER THAN SOLVED.*** *It stood here as the one unverified premise — can `hotUpdate` widen Vite's importer-directed invalidation to modules that do not import the changed one? Doug, 2026-09-17:*

> **"Maybe for hot editing we don't have referential functions but you can work locally to the page… the thing would transform, it would have a proxy # thing that invents something if it can't find the right one, and that allows the working on of a page. But since we get compile-time errors for the references, we can just rebuild and trust the new version."**

***So the transform ALWAYS succeeds.*** **Cannot resolve, invent a proxy anchor, the page renders, the author keeps working** — *and because a link is still a link, the dev page is STRUCTURALLY the same as the built page, so nothing shifts when it later resolves.* **A proxy cannot leak, because always-refuse at the bind means it exists only in dev.**

***And it is SAFE rather than merely convenient, for a reason an earlier ruling supplies:*** **frozen keys mean a stale table can only be INCOMPLETE, never wrong.** *A key never changes meaning, so an old table may omit an entry and can never hold a different answer.* **Trusting it would be indefensible with renameable keys and is fine with frozen ones.**

***No contradiction with always-refuse, either*** — *that was ruled about **the bind**. Dev is not a bind; it is where a half-written reference is ordinary.*

***AND THE FOURTH SENTENCE OF THIS UNIT WAS WRONG.*** **"Dev never needs global invalidation" does not hold** — *and it fails on exactly the negative dependency this unit exists to satisfy.* **Established 2026-09-17, by Claude Desktop reading the ruling as written:**

> **Chapter A cites a title the catalogue does not hold, so the transform proxies and logs it. The title is then declared in chapter B. A's own text never changes — so nothing re-runs A, and the proxy SURVIVES a key that now resolves.** *The bind then refuses on a reference that is perfectly good, and the only repair is to go and touch A by hand.*

***So two sentences both filed as settled cannot both stand.*** **"A proxy re-resolves on the next edit of its own file" keys the re-run to the WRONG INPUT** — *what changed was a declaration in a different file, and A has no edge to it.*

***The repair is small, and it is the same shape as [D2](#d2)'s third wall seen from the other side.*** **The catalogue keeps a second map beside its declarations: for every key any file looked up, the set of files that looked it up — HIT OR MISS, the same edge, because a file that cited K wants re-running whether K appeared, moved or went away.** *A miss written down is precisely what the substrate could not do, and it is writable here only because this layer parses rather than evaluates.* **When a file's declarations change, re-run everyone who read those keys.** *Add a title and the distant citation heals while the author types; remove one and its readers fall back to proxies and are correctly refused.*

**It also belongs at the LIBRARY's scope rather than a book's** — *a citation in one book misses a key declared in another* — **so it is a sibling of the book entries in the persisted graph and not a field inside one**, *which keeps a book's entry the open record a library extends.*

***The correction costs the architecture nothing it was bought for.*** **It is still O(edit) rather than O(corpus)**, *which was the whole reason the invalidation premise was removed instead of answered.*
- `verified` — ***the proxy log IS the diagnostic list.*** **The transform that could not resolve already knows the key, the file and the offset — it just spliced there** — *so the editor's problems panel is a byproduct rather than a second engine maintaining a table.* **[D7](#d7) needs no long-lived evaluated process behind it.**
- `verified` — ***HOT RELOAD IS INCREMENTAL, AND WE DO NOT BUILD IT.*** *Measured 2026-09-17 on a REAL Vite dev server, real files, real watcher — twelve modules importing into one:*

```
COLD                     13 transforms in 153 ms
EDIT one chapter         transforms re-run: ["chapter-7.ts"]   23 ms
EDIT, ask only for it    transforms re-run: ["chapter-3.ts"]    7 ms
```

**One file changed, one transform re-runs, 7–23 ms** — *which is Vite's default behaviour, so the plugin plugs into it rather than implementing it.* **A whole book cold is 153 ms at twelve chapters, which is the ceiling even on a full rebuild.**

***Two caveats, one of them a flaw in the probe:*** **the importer edge was NOT observed** — `chapter-7 importers: none` — *because `transformRequest` alone does not resolve a module's imports the way a browser request does, so the graph stayed shallow.* **What is proven is that the transform re-runs and the importer's cached result was cleared; what was NOT proven is that Vite tracks the edge correctly** — ***and it is now proven that it does NOT, which means the shallow graph was the real behaviour rather than a flaw in the probe.*** *Vite treats a watched or globbed file differently from a static import when it walks the graph to invalidate, so a dependency that is not statically imported cannot invalidate its importer the way an import does.* **The caveat is answered, and the answer is that [the edge is ours to build](#d11)** — *the watcher plus a manual invalidation, which is a known idiom and not a gap.* *And the numbers are from `.ts` modules with a trivial transform; real chapters are `.tsx` through `@vitejs/plugin-react`, so per-file cost is higher. The SHAPE — one file changed, one file re-transformed — is what was tested.*
- `verified` — ***the plugin is a VITE plugin and not a Babel one, and the reasons are capability rather than taste.*** **Babel has no module graph, no virtual modules, and no `addWatchFile`** — *so it cannot express "this book is made of those twelve chapters", which is what the inlining feature needs.* **It also re-prints the AST where a Vite `transform` splices text by offset**, *and 52% of our source is JSX text we would rather not round-trip through a printer.* **And a TypeScript TRANSFORMER was never available at all: Vite transpiles with esbuild and never calls `tsc`, so a custom transformer runs zero times in this pipeline.**
- `assumed` — that a proxy anchor is **self-identifying**, so two unresolved keys cannot collapse onto one and the built HTML can be grepped for proxies as a standing check. *A spelling decision, and it is what makes the log trustworthy.*
- `verified` — ***the parsing technique is settled, and TWO OF THE THREE CANDIDATES FELL ON CAPABILITY RATHER THAN SPEED.*** **`ts.createScanner` CANNOT IDENTIFY JSX TEXT.** *In TypeScript's own scanner the JSX tokens are produced only by `scanJsxToken` and `reScanJsxToken`, which the **parser** calls at positions only the parser knows; the default `scan()` never emits one.* **TypeScript's own notes say it outright:** *"the more complicated aspects of JSX support is mostly handled back in the parser."* ***So a raw scanner walking a `.tsx` sees the markup as ordinary JavaScript and cannot tell prose from a template body from a comment*** — **which is exactly the guarantee this whole unit rests on**, *and the reason the parse did not see the `String.raw` formula where a grep would have.* **Not slow. Incapable.**

  *And the other two:* **`transpileModule` hands back output rather than a positioned tree**, *so there are no spans to splice by;* **`tree-sitter` would work and is a SECOND GRAMMAR** — *the same two-engines-that-can-disagree that [D7](#d7) already refused for the editor, and at six books it is all cost.*

  ***What is left is what was already built:*** **`createSourceFile` plus a persisted table**, *which is the digest-skipping store this binder has kept since it was written.* **The unknown collapsed into the answer.** *What remains worth measuring is narrow — `createSourceFile` with and without parent pointers, and whether reading the file ourselves beats letting TypeScript read it.*

- `verified` — ***AND THE PARSE MUST REPLICATE JSX'S WHITESPACE RULE, which is the first hazard found in the real corpus rather than reasoned about.*** **The evaluated catalogue reads VALUES; a parsed one reads SOURCE; and JSX's own normalisation sits between them.** *Found 2026-09-18 in [`.claude-and-our-projects/..reference/0-lead.tsx`](../../../../.me/.claude-and-our-projects/..reference/0-lead.tsx), where a book is mentioned across a line break:*

```tsx
<Book>Semantic Reference
                        Theory</Book>
```

  **[`html.text`](../../package/src/utilities/Html.ts) does not normalise anything** — *it joins strings and `trim()` only strips the ends* — **yet the persisted graph records `'Semantic Reference Theory'` with one space**, *because the JSX compiler had already collapsed the newline and its indentation before a value existed.* ***So a scanner that takes `JsxText` literally produces a key the runtime never produces, the mention refuses, and the prose it refuses is CORRECT*** — **a failure with nothing wrong to look at.**

  *The rule to replicate is JSX's own: strip leading and trailing whitespace on each line, drop blank lines and any newline adjacent to a tag, and collapse a newline inside a run of text to a single space.* **This is also what makes [the equality gate](../projection/83-sprint-77--the-binder-rebuilt.md#state-1) the right gate** — *the parsed cards equalling the evaluated ones is exactly the check that catches it.*

**PROVES IT** — *a small Vite server with two modules that do not import each other, returning the second from `hotUpdate` and watching whether it actually invalidates.*

**DEPRECATES** — ***an enormous amount, and this is the point.*** **The catalogue stops needing values, so it stops needing a warm evaluated process, process isolation, or a long-lived engine holding the library open.** *It becomes incremental per FILE, and it can run in an editor, because parsing is what a language server already does.*

**STATE** — `resting` on one spelling decision. ***The architecture is four sentences, and the fourth was corrected on the day it was written:*** **transform per file and always succeed, proxying what will not resolve · the proxy log is the diagnostics · the bind refuses on any proxy · dev needs no GLOBAL invalidation and does need a REVERSE INDEX.** *The premise that could not be verified was removed rather than answered, which is still the better outcome — but removing it left a hole where the negative dependency had been, and [the correction above](#d9) fills it with the one map that records a miss.*

### <a id="d9-consequence"></a>What it does to the other units

| unit | before | after |
|---|---|---|
| **[D2](#d2)** the dependency model | everything waited behind it | **still true and no longer blocking** — it governs RENDER, not the catalogue |
| **[D3](#d3)** per-page processes | half the speed story | **the catalogue never loads a book, so isolation does not touch it** |
| **[D7](#d7)** where a fault surfaces | needed a long-lived evaluated engine | **a parse is what a language server already does** |
| **[D8](#d8)** what the catalogue answers | a widening of `Reading`, which EVALUATES | ***a parse of literals, which does not*** |

***The division Doug ruled earlier now has a mechanism:*** **global reference is static; local well-formedness is dynamic.** *And the static half is the half that was going to be slow.*

---

## <a id="d10"></a>D10 · The notation

> ### <a id="d10-superseded"></a>SUPERSEDED 2026-09-18. THE NOTATION BELOW IS NOT THE LANGUAGE.
>
> ***Doug replaced it the day after it was settled***, *and the whole of this unit is kept because it is the trail —* **[The Language and What It Compiles Into](06-the-language.md) is what the compiler reads.** *A settled unit that is no longer true is the worst record a library can carry: it is read as current by everyone who was not there.*
>
> **WHAT CHANGED, and none of it is cosmetic:**
>
> | this unit | the language |
> |---|---|
> | `$` and `*` mixed in one form | ***`$[ ]` only REFERS; `[[ ]]` only ANNOTATES*** |
> | prefix allocates, postfix returns | ***the SIDE the stars stand on is the DIRECTION of the edge*** |
> | five forms | ***seven***, *and three postfix forms that let the other end of a connection answer* |
> | author and subject sharing a prefix | *one star the author, two the canonical catalogue, three a catalogue —* **the stars count outward through widening relations** |
> | a chapter named `Book > Chapter` | ***`Book / Chapter`***, *with `./` for a chapter here and `.` as the escape* |
>
> ***AND THREE THINGS THIS UNIT GOT RIGHT SURVIVED ALL OF IT:*** **a mention allocates and returns nothing, a title must not draw itself as a link, and an unresolved name refuses rather than guesses.** *The last one was strengthened — Doug, 2026-09-18:* **"We want compiler errors if this thing fails. I want to see them as errors preventing a compilation."**
>
> ***WHY IT CHANGED IS WORTH MORE THAN WHAT CHANGED.*** **This notation was read three times in one afternoon by something that did not already understand it, and each reading produced a plausible language that was not this one.** *The `>` separator is not valid inside a JSX element, so every chapter reference had to be escaped and esbuild refused the file when the compiler wrote one back.* **And Doug, on why the separator moved at all:** *"That's you thinking in N=6. You need to think in N=1000… Importing ALL conversations with AI."* ***A separator that forbids a title called `TCP/IP` forbids the library.***

***Settled 2026-09-17, after five revisions and one wrong family.*** **Prefix says what is ALLOCATED. Postfix says what COMES BACK.**

```
*[ X ]        allocate here                        → nothing
*$[ X ]*      allocate a stand-in, this writing    → an address
**$[ X ]*     allocate a stand-in, the book        → an address
**$[ X ]**    allocate a stand-in, the collection  → an address to a reference
$[ X ]*       no allocation, just stand in         → an address
```

*Read in the library's own words:* **a mention, a title, an author, a subject, and a citation.** *Each may carry a key — `*$[ The Title ](the-key)*` — and where no key is written the copy is the key.*

### <a id="d10-signature"></a>Why prefix and postfix, which is the whole idea

***It is a SIGNATURE.*** **What is allocated stands on the left; what is returned stands on the right** — *and that is precisely the thing C fuses and has never recovered from.* **C's declarator puts the return-shape on the left of the name** (`int **p`), *which is why "declaration follows use" is its most-cited wart.* **Here a return sits where a return belongs.**

**So the star never means two things in one position.** *On the left it is allocation depth; on the right it is return depth; the two positions never overlap, so they cannot be confused.* **Go reached for this split and got half of it. This gets both halves, by asking what the thing IS rather than what the syntax should look like.**

### <a id="d10-mention"></a>The mention is the only primitive

***It is the one form with no `$` and no return.*** **Everything else stands in for something and hands back an address; the mention stands in for nothing — it IS the allocation.**

> ***Doug:*** **"A mention is inventing a memory address."** *And of a title:* **"Aren't the titles like malloc? Create space for me here."**

***Both are `malloc`, and that correction killed an earlier distinction that had a title BINDING a name to something that already existed.*** **Nothing exists before the title: the file exists, the class exists, but the book as a catalogued thing does not.** *The title is what makes it one.*

**And the freeze falls out of the metaphor.** *`malloc` pairs with `free`; these keys are never freed.* ***So it is static allocation — which is what "catalogue keys are not dynamic, freeze the thing" means, arrived at from the other end.***

### <a id="d10-glyphs"></a>The two characters, and where each comes from

**`$` is a STAND-IN.** *It is the world's interpolation mark — shell `$VAR`, JavaScript `${}`, Perl, PHP, every templating engine reached for it independently — and it is already this framework's mark for **about the representation of**.* **Those are one meaning, not two, which is why `$Writing` and `$[ X ]*` do not read as different sigils.** *Doug:* **"A cross between templating and reference. Isn't that what we are doing?"**

**`*` is a REFERENCE, and it is ours before it was anyone's.** *The word is `asteriskos`, little star; its first recorded use is Aristarchus at the **Library of Alexandria**, marking lines that needed reference. Typography has called it **the reference mark** ever since.* ***Systems programming took it from printers, who took it from librarians.*** **Reaching for it is not borrowing from C. It is taking it back.**

> ***Doug, overruling an objection relayed from outside:*** **"No one cares if they are a C reader. We are inventing reference notation and there is the `$` of reference. One can't NOT use `*` here."**

### <a id="d10-rejected"></a>What was tried and refused, so nobody re-derives it

| tried | refused because |
|---|---|
| `$[…]` for a mention | ***`$` was already taken*** — it means *about the representation of*, and reusing it makes one mark mean two things, which is the `$Catalogue`-names-two-kinds fault one level down in the punctuation |
| `[[…]]` for either side | **MediaWiki's meaning is *link*** — the use side — so declaring with it fights its host, and referring with it leaves two marks doing one job from opposite ends with no principle between them |
| `&` to declare | ***close to fatal.*** **JSX has an active claim on `&` inside the exact node type we scan** — the host parser sees the text before we do |
| a pure dot ladder | *the grid came out with **two empty cells** and no account of what they would mean* |
| `**` as an OPERATION | *repeating an operator to count levels is the one C wart with zero defenders; every successor language fixed it.* **Here the doubled star is in DECLARATION position, where C also puts type-level stars, so the objection does not reach it** |
| the pointer family entirely | ***there is no value at the bottom.*** *Dereference chains down to a value — `**p → *p → value`. This chain is names and locations all the way down, so the operation is **resolution**, not dereference, and the mechanism is a **linker over a library**: definitions, references, and an undefined-reference refusal. **`*` survives as the reference MARK; the pointer SEMANTICS do not.*** |

### <a id="d10-return"></a>What the postfix returns, and to whom

***The postfix is what the COMPILER gets back, not what the page renders.*** **For a declaration it is the entry that goes into the card; for `$[ X ]*` it is what is substituted into the prose.** *This matters because a title must not draw itself as a link —* **"that Doug self link is awful and ruins the flow"** *— so a title's returned address cannot be going into the page.*

***Confirmed by Doug, 2026-09-17*** — **"Ship it is agreement."** *The postfix is the compiler's return, never the page's.*

### <a id="d10-who"></a>Who this is for, which is stated rather than implied

> ***Doug, 2026-09-17:*** **"It is perplexing. It is the first part of `.public` that admits — AI is writing this for me, it will write it for you too, and you better have your AI read `.public` docs constantly or the compiler will kick its ass."**

***That is the design stance and it should not be softened.*** **The notation is not optimised for a person to memorise.** *It is optimised so that a compiler can refuse, and so that something writing at volume — which is what is writing most of the text now — cannot fabricate a reference that resolves.* **A broken reference is the characteristic failure of a fluent writer, and refusal-by-non-membership is the one arrangement in which that failure is not available.**

**STATE** — `settled`.

---

## <a id="d11"></a>D11 · The binder as hooks

***The gap is not a detail, it is the architecture.*** **`bind` is a BATCH — nine phases, run, exit.** *Hot reload needs a compiler that is RESIDENT, and Vite's dev server is one.* **So the question is not "can we add hot reload"; it is which of the nine phases can become hooks in a compiler that never exits.**

> ***Doug, 2026-09-17:*** **"Isn't the point of hot reload that you edit outside the compiler and it incrementally recompiles? And we maybe provide optimized incremental compiling through hooks?"**

**RULING** — *the question above, taken as the design.*

**LANDS ON** — [`.binding/binding.ts`](../../package/.binding/binding.ts) (the `Task[]` table) and [`vite.config.ts`](../../package/.binding/vite.config.ts) (which already carries four plugins).

### <a id="d11-table"></a>Which phase becomes what

| phase | as a hook | incremental? |
|---|---|---|
| **configure** | once, at server start | — |
| **inventory** | a directory watch | on add / remove |
| **assemble** | `resolveId` / `load` — ***a virtual book module*** | on directory change |
| **the reference transform** | `transform`, `enforce: 'pre'` | ***per file*** |
| **specify**, split in two | *referential* → the catalogue, at `transform` · *local* → **`@specify` where the writing is CONSTRUCTED**, unmoved | ***per file*** · and the local half was already incremental |
| **resolve** | needs the table | on a declaration change |
| **bundle · render · proof · record** | build only | — |

***About half the binder becomes hooks, and the hooks ARE the incremental compiler.*** **This is not an addition to Vite; it is the binder's middle rewritten in Vite's own vocabulary.**

**RESTS ON**
- `verified` — ***one file changed, one transform re-runs.*** *Measured on a real dev server: editing one chapter re-transformed that chapter and nothing else, in 7–23 ms, with a twelve-chapter book cold at 153 ms.* **We do not build that; we plug into it.**
- `verified` — **the plugin shape is already in production here.** *[`binding:resources`](../../package/.binding/assembly/resources.ts) is `enforce: 'pre'`, transforms `.tsx` source, and throws by name and by chapter when it cannot resolve. The reference transform is that plugin with a different pattern and a table.*
- `verified` — ***the ONE artifact that must become virtual is the book assembly***, because it is the only one whose **inputs are a directory**. *[`assembly/book.ts`](../../package/.binding/assembly/book.ts) writes the module to disk, and a file on disk has no edge back to the folder it was assembled from —* **so adding a thirteenth chapter invalidates nothing.** *It is already disciplined about rewriting (`WRITTEN ONLY WHEN IT CHANGED`, because "a thousand books rewritten identically every build is a thousand writes vite must then decide are new"), but discipline cannot supply an edge that does not exist.* ***AND `addWatchFile` DOES NOT SUPPLY IT EITHER — corrected 2026-09-17, before a line was written.***

  **Vite's `addWatchFile` does not honour Rollup's contract.** *Rollup promises that a file watched from inside `transform` re-runs that transform when it changes; Vite, in its own long-standing tracker,* **"does nothing special in this case and just tracks the new file independently."** *So it notices the directory changed and does **not** re-run the virtual module's `load()`.* ***The edge this unit was counting on does not exist.***

  ***AND THE FIRST CORRECTION WAS ITSELF HALF WRONG*** — *corrected again the same day, and the second reading is the one to build on.*

  **THE EDGE SPLITS BY EVENT, and only one half is ours to build.**

  **A CONTENT EDIT IS NATIVE AND COSTS NOTHING.** *There are two idioms in the wild, and this book's assembly already sits on the better one: a virtual module whose generated body carries **real `import` statements** for the files it is made of makes those files genuine dependencies in Vite's graph, and an edit propagates with no manual machinery.* **[`assembly/book.ts`](../../package/.binding/assembly/book.ts) already emits exactly that** — *one `import` per chapter* — **so editing a chapter's prose needs no hook at all.**

  **A MEMBERSHIP CHANGE IS OURS, AND `handleHotUpdate` CANNOT SEE IT.** *A Vite maintainer, tracing the call chain:* **"`handleHotUpdate` is only invoked when `type === 'update'`, so it is never called from the `'add'`/`'unlink'` paths at all."** ***So the hook this unit reached for handles the case that does not need it and misses the case the virtual module exists for*** — *the thirteenth chapter appearing, which is this premise's whole reason for being.*

  **What that half actually is:** *`configureServer` registers `server.watcher.on('add')` and `.on('unlink')` directly; on either, the book's import list is regenerated, the virtual module is reloaded, and the catalogue is patched* — **which is also where [the reverse index's heal](#d9) fires when a declaration arrives.** *`server.reloadModule` is the right call rather than `invalidateModule`: the primitive marks the module, `reloadModule` is the primitive plus the HMR trigger and was added for precisely this case.*

  **DEV-ONLY BY CONSTRUCTION, which is clean:** *`configureServer` is not called during a production build at all, and `apply: 'serve'` scopes a plugin to dev.* **The publish re-assembles everything and needs no edge.** *Disposal has a hook of its own — `closeServer`, whose `reason` distinguishes a restart from a shutdown — so the watcher is released on the lifecycle event rather than left dangling, which is what the process-never-exits hazard was.*

  ***One fact that cuts both ways and was hit by our own probe:*** **a module Vite has not analysed does not propagate** — *so the heal is reliable for chapters that have been served, and the add/unlink path covers the rest.* **In a publish it is moot, because the build loads everything.**

  ***Two hazards that come with it, both dev-only by construction:*** **`addWatchFile` is legal only while the build graph is being made** — *calling it afterwards throws, and the established idiom skips it entirely in a plain build without `--watch`* — **and adding a watcher after the server closes holds the process open and it never exits.** *So the watch edge belongs to the dev host and the publish driver re-assembles everything anyway, which is the clean split.*

  ***This changes an implementation, not the architecture.*** **The edge still exists and the book module still goes virtual** — *it is built with the watcher and a manual invalidation rather than trusted to a call that reads as though it would do it.*
- `verified` — *the closest prior art is **Astro's content collections***: a directory assembled into a typed module, virtual, with per-file watch registration, and **only the types written to disk**. *SvelteKit's `.svelte-kit` is the disciplined-on-disk middle and its known failure is that the generated directory desyncs and the fix is "delete it and rebuild" — evidence that on-disk has a rot mode virtual does not.*
- `verified`, ***and the premise was MISCAST rather than true or false.*** **A `transform` holds SOURCE TEXT; a local check needs a CONSTRUCTED WRITING** — *so the local half does not move into a transform, and it never needed to.* **It was already portable, and [the thesis](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md#division) had said where:**

> **The specification is local and therefore incremental by construction.** *A writing checks what it holds; a book checks itself. Nothing in it needs another book, so nothing in it needs the library to be loaded.* **And because a local check needs only the writing in front of it, it is** ***portable*** — *the same `@specify` can fire in the binder, in the prerender, and in a development browser at the moment a writing is constructed, so a fault can be shown where it was written rather than reported in a log.*

  ***So the portability was always AT CONSTRUCTION, and this unit read it as portability INTO A TRANSFORM — a different place.*** **The phase splits rather than moves:** *what was referential is the catalogue's, asked at `transform`; what is local is `@specify`'s, fired wherever a writing is built, which is already the binder, the prerender and the browser.* **Nothing has to be lifted out of `specify` and nothing has to be proven portable, because the portable half was never in the compiler.** *Found 2026-09-17 by Claude Desktop, reading `specify.ts` against the thesis; verified at the line here before it was taken.*

**PROVES IT** — ***done, and by reading rather than by running.*** *The experiment would have measured the wrong thing: a rule moved into a transform would have been handed text and had nothing to check.* **What settled it was `specify.ts` beside [the division of labour](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md#division)**, *which already said where a local check fires.*

**DEPRECATES** — ***the batch as the only mode.*** *`bind` remains what a publish runs; it stops being what an author waits for.*

**STATE** — `settled`. ***The last architectural question turned out to be a misreading of our own chapter, which is the cheapest way for one to end.*** *Half the binder becomes hooks and the hooks ARE the incremental compiler; the other half stays a batch that a publish runs. What does not move at all is the local specification, because it was never the compiler's to carry.*

---

## <a id="tally"></a>Where the sprint stands

| | |
|---|---|
| units | **11** |
| `settled` | **9** — D1, D2, D3, D4, D5, D6, D7, D10, **D11** |
| `resting` | 2 — D8, **D9** |
| `open` | **0** |
| premises to be resolved by **reading our code** | 3 |
| premises to be resolved by **`/think`** | 3 |
| premises awaiting **a ruling from Doug** | **1** — and it is with the chemistry team |

***[D9](#d9) arrived late and is the most consequential unit in the sprint***, because it moves the catalogue from something EVALUATED to something PARSED — *and four of the other eight were shaped by the assumption that it had to be evaluated.*

***D3 settled by reading, in two files, in the first hour of the sprint*** — **and the format earned itself immediately**, *because the premise everyone had been carrying (*"we isolate because of shared mutable state"*) turned out to be true for a reason nobody had named: a book registers its theme against a global component when its module loads.*

***NOTHING IS OPEN, and the four that rest are resting on much less than they were.*** **[D9](#d9) rests on a spelling decision — whether a proxy anchor is self-identifying. [D2](#d2) is the only unit that still touches `$Chemistry`, and it no longer blocks anything. [D6](#d6) and [D8](#d8) rest on readings nobody has done yet.**

***And the design got SMALLER three times in one afternoon, each time by removing a premise rather than answering it:*** **the catalogue does not need to evaluate — it parses; dev does not need global invalidation — it proxies and you rebuild; and the editor does not need a second engine — the build is the loop.** *This morning the plan was a long-lived process holding the whole library open, with a warm cache, per-page isolation, and two transports over one query engine. None of that survived, and nothing was lost with it.*

***And D3 changed the shape of the sprint rather than just closing a row.*** **What looked like three separate problems — the props asymmetry, construction-time DI, and per-page process isolation — are one problem seen from three places**, *which is what an outside reading predicted and what the code now confirms.* **Settling D2 settles all three; nothing about the speed of this compiler is available before it.**

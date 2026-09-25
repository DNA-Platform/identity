# The Binder, As Built

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename. So is every file name it links.***

---

***This is the design of record for [`library/.public/package/.binding`](../../package/.binding/binding.ts) — the compiler that turns a library of books into a published site — as it stands at the close of Sprint 77.*** **The chapters before this one are the research and the decisions; this one is what was built, why each piece is shaped as it is, and what it costs.** *It exists so the code can stop carrying its own history in comments: [the rule](../the-coding-style/03-the-coding-style.md#comments) is that a finished file's reasoning lives here and the file links to it, never the reverse.*

**THE REGISTER, which decides everything about how this code reads:** *the binder is a compiler. Doug: "I care less about the binder. It is like a compiler… The names of the C# language spec are different from the variable names of its compiler."* **Its reader is somebody debugging a build, so its names are plain and longer than the framework's, a phase is a file, and a rule returns a fault rather than raising one so the phase decides how failure is reported.**

## <a id="home"></a>Where it lives, and which way work flows

***The master is [`library/.public/package/.binding`](../../package/.binding/); a library's own `..public/.binding` is a COPY of it.*** **Doug, 2026-09-19: ".binder lives in .public package and we are editing it and syncing it to .me."** *A copy's [`.pubconfig`](../../package/.binding/configuration/configuration.ts) names its origin, and [`npm run sync`](../../package/.binding/manifest/synced.ts) pulls origin → copy for everything except the files a library owns — [`kept`](../../package/.binding/manifest/origin.ts): `.pubconfig`, `package.json`, `.graph.json`, `.manifest.json` and the three generated modules.* **Development happens in the master; `.me` is where it is tried, and it catches up by sync.** *The opening-day ruling of Sprint 77 ran the other way — "develop in the library's copy and backpropagate" — and a day of edits went into the copy while a sync would have overwritten them; the reversal is recorded in [the sprint chapter](../projection/83-sprint-77--the-binder-rebuilt.md#home).* **`.latex` and `.wiki` are frozen and never a test bed.**

***And the master resolves nothing of its own.*** *Its `node_modules` is empty; `vite`, `tsx`, the framework all resolve by walking UP to the repository's. That is why a staged copy of the binder must stand inside the repository tree — [see the test library](#test-library).* ***And from `..public`'s copy that walk ends at v1:*** *the repository's `node_modules/@dna-platform/public` is a link to `library/.public/package`, so until `.public` is swapped for `..public` the redraft's compiler binds pages that v1's elements draw — what that cost is the fourth appearance in [Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md).*

## <a id="guide"></a>The implementation guide — the compiler enforces as much as it can from what it gives

***Doug, 2026-09-25, asked whether a table of contents' completeness should leave the compiler for the framework's specification:*** **"No! The compiler should enforce as much as possible based on what it gives. Put that as the implementation guide of the compiler. We don't move things out of the programming language because we can catch them in unit tests."** *So a fact that follows from what the compiler writes — a name, an address, an id, a table's entries against the chapters its catalogue knows — is the compiler's to check, the way a language's compiler checks its types, and it raises a fault naming the file. A specification is where a writing checks what it holds about itself; it is not where a check goes because it could be caught there. Where the two could both check a thing, the compiler does, since it is the one that gave it.* ***This departs from [Specifying a Library](../writing-a-book/07-specifying-a-library.md#the-line)'s line***, which put everything one book can answer on the framework's specification; that line stands for what a writing holds, and yields to this for what the compiler gives.

## <a id="phases"></a>The phases

***[`binding.ts`](../../package/.binding/binding.ts) is a sequence of named tasks, run in order, each saying what it did, the sequence stopping at the first that fails.*** *`tsx binding.ts` runs them all; `tsx binding.ts assemble specify` runs a subset for a person debugging one.*

| | | refuses |
|---|---|---|
| **configure** | reads `.pubconfig` against the slices each phase declares | *a section or field no phase reads* |
| **inventory** | walks the library for books — a folder carrying `.book.tsx`, at any depth | *a library holding no book; a file a book does not account for* |
| **catalogue** | reads every book's source, compiles the structure, holds it to the specification, resolves every name to an address | ***the eighteen faults*** — [below](#wellformed) |
| **assemble** | writes one module per book, the book list, the stylesheets | |
| **resolve** | takes the route table the catalogue already built | *a root `.pubconfig` names that no book is called* |
| **specify** | loads each book through vite and puts every writing to its specification | *a writing that does not specify* |
| **bundle** | `vite build` | |
| **render** | one child process per page, as many at once as cores — [below](#render) | *a page whose book does not draw* |
| **proof** | reads every page back the way a browser will build it — [below](#proof) | *markup the parser rewrites; a link to nowhere* |
| **record** | writes the manifest and removes what the source no longer writes | |

***`resolve` runs BEFORE `specify`, and that order is the inversion at the bottom of the sprint.*** *A book used to be named by what a RUNNING book answered, so every book had to be loaded before any could be addressed; a name is a thing the source says, and the catalogue reads it in milliseconds with nothing loaded.*

## <a id="reading"></a>Reading a library without running it

***Everything the compiler knows about a library it learns from the source, through [`catalogue/reading.ts`](../../package/.binding/catalogue/reading.ts) — one TypeScript parse per file, cached.*** **Three rules live there because two passes need them and a rule with two homes disagrees with itself:**

- **JSX's own whitespace rule**, babel's algorithm — *a mention wrapped over a line is one name to the runtime and must be one name here.*
- **The entities a person writing prose reaches for** — *`&rsquo;`, `&amp;`, the dashes.*
- **A tag is what it is BOUND to, not what it is called.** *An import is followed to the name it imports and the module it came from; a local `const Book = $(book)` is followed on to that import. Within the file — every spelling a table uses today — and no further, because the `.public` this reads is being rewritten. `<Book>` bound to `book` is a mention; bound to `Book` it is the composition; a tag nobody imported is nobody's element.* **Found by the regression suite reading a page back with `<main>` inside a `<p>`.** *Doug: "You should be parsing things with static comprehensions like the typescript compiler."*
- **And never whether a title prints.** *It read `print={false}` off a `<Title>` for a day and addressed such a chapter as its page. Doug, 2026-09-20: "if you are parsing like that, you have broken polymorphism. What happens when we want a subclass of title? The compiler just cares that things are in the right file for now." The reader reads tags and names; what a page draws is the framework's, and the proof reads the page.*
- **And a resource is read for what it refers to, never for what it names** — *the masthead's reference to the plate stood in a resource and the structure had never opened one ([B33](08-the-binders-condition.md#b33)).*

### <a id="language"></a>The language, read by one scanner

***[`catalogue/language.ts`](../../package/.binding/catalogue/language.ts) is the language as a table — eight forms, and one regex, constructed with its own cursor wherever it runs.*** *[The Language](06-the-language.md) documents the forms; what matters here is that [`annotations.ts`](../../package/.binding/catalogue/annotations.ts) and [`transform.ts`](../../package/.binding/reference/transform.ts) read the SAME spelling. The transform carried its own copy for a day, and when `( name )` was put back into the language the scanner learned it and the transform did not.* **[Solutions 17](../solutions/17-the-regex-that-remembered-where-it-stopped.md) is why the regex is a source and not a shared global.**

### <a id="structure"></a>The structure — six passes over one reading

***[`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts) compiles the library into something that can be checked.*** **Every annotation is half of an edge and both spellings normalise to the same key** — *`*[[ X ]]` written in A and `[[ A ]]*` written in X are one edge asserted twice, so the structure is a map keyed by the edge, holding every assertion with where it was written. Two ends: whole. One end: a claim nothing corroborates. Two outgoing in a tree relation: a contradiction.* **A spot is keyed by where it stands and never by its name** — *Doug: "the name is not an identifier for the book"* — **and names are a multimap on purpose**, *because a plain Map absorbed a collision once and six books became five.*

**The six passes:** *books named by their covers · chapters named within their books · edges from whichever end said them · mentions written as elements · the tables of contents · the colouring — one flood from the origin, admitting a child whose catalogue is an author, the second half gone on 2026-09-25 with Doug's "a book that is by it's subject, or catalogued by one is a potential author", and an author's edge said by its By alone.* ***They cannot be collapsed, because a name written in the last file walked can change what the first one meant. What CAN be cached is the reading, and it is:*** *keyed on modified-time-and-size, proved to invalidate on a rename and on a same-length edit before it was believed.*

### <a id="wellformed"></a>The specification — twenty-three faults, named in the library's words

***[`catalogue/wellformed.ts`](../../package/.binding/catalogue/wellformed.ts) checks the structure and returns faults; it raises nothing.*** *Doug: "you have to map them to errors in the semantics of the actual framework — duplicate title, missing this, no catalogue for this."* **Two things they enforce. The essence, which is [the language chapter's](06-the-language.md#essence): authorship begins in a single act of self-representation and is extended only by delegation. And the invariants of a URL, which are [the specification's](09-a-library-necessarily-and-sufficiently.md): one thing one address, one address one thing, every address answers, everything reachable** — *a name unique where it is scoped, an address unique where it is served, a mention nobody refers to refused because a library is compact.* *Every fault names something a person could say about their own library without knowing this code exists, and every one is exercised by [a fixture built to break](../../package/.binding/catalogue/wellformed.test.ts) — a library wrong in exactly one way, and the promise that the compiler says which.*

### <a id="catalogue"></a>The catalogue — a name to an address, and nothing else

***[`catalogue/catalogue.ts`](../../package/.binding/catalogue/catalogue.ts) answers one question: what URL does this key stand at.*** *It refuses by non-membership alone: no fallback, no nearest match, no filesystem asked.* **The addresses:**

| | |
|---|---|
| a book | `/dougs-library/` — *from the base forward, ending in a slash, because that is the page a reader lands on* |
| a chapter | `/dougs-library/#the-sheet` — *its book's page and the id the chapter's own element wears, printed title or not, written with the same `slug`, the compiler's own since 2026-09-24, so the two agree by construction* |
| a mention `[[[ X ]]]` | `/dougs-library/#x` — *the fragment of the id the compiler gives the mention, `[X](x)`, which the element holding it answers to* |

***A chapter is named within its book and nowhere else*** — *`Dougs Library / The Sheet` is the whole key. A bare name was offered once, wherever only one book used it; Doug: "Then maybe you can't have synonyms and there's no home?" — two keys for one thing is the collision the catalogue exists to prevent.*

### <a id="transform"></a>The transform — the notation in, ordinary markup out

***[`reference/transform.ts`](../../package/.binding/reference/transform.ts) is the one thing in the compiler that edits what a reader sees.*** **Every form compiles to `[ words ]( identifier )`, and the compiler names no component** — *Doug, 2026-09-24: "The compiler ALWAYS should give: `[text](identifier)`. It doesn't know about specific components. To generate any is to break polymorphism."* *The identifier is an id where the form allocates — `[[[ The First Shelf ]]]` is `[The First Shelf](the-first-shelf)` — and a url everywhere else, the self url `#` for the page it stands on — *"I like self-referential anchors, and we want to capture that in what the compiler returns"*; a string — a prop, a literal in a helper — compiles exactly as prose does. What draws the link is the element the writer put the words in: in v1 a `Ref`, in v2 a Mention for an id and a Means for a url; words put in nothing print as written.* **Doug: "You haven't done anything to change the language. Evaluating the ()[] was never the job of this framework."** *Until 2026-09-24 the compiler wrapped a reference in prose in a generated `<Ref>`, planted a `<Fold>` beside a mention, read a roster of mention kinds to compile their plain words, and refused a file that did not import the two; all of it went with D4 of Sprint 81, and `slug` moved into the compiler, [`resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts).* ***What v1 draws of it, measured by one bind of the test library:*** *a title written `[[ X ]]` prints the pair as written, a `<Reference>[[ X ]]</Reference>` around a section is no longer a link, and `[[[ X ]]]` prints `[X](x)` with no id — v1's elements do not read the pair, and the regression suite asserts none of the three.*

***One rule, two callers:*** *the [`references`](../../package/.binding/reference/transform.ts) plugin asks it of one file as it compiles; the batch asks it of every file through `vite build`. They cannot differ, because they are one function.*

## <a id="dev"></a>The dev server

***[`vite.config.ts`](../../package/.binding/vite.config.ts) registers four plugins, in an order that matters, and they share one inventory.***

**[`inventory/retaken.ts`](../../package/.binding/inventory/retaken.ts) — the inventory, and the watcher that keeps it true.** *The config used to take one inventory and one catalogue at module load and hand the same objects to every plugin, so a server left open answered all afternoon for the library as it was at boot, while the one plugin that was right was right because it re-walked the whole library on every keystroke. One inventory, taken when first asked, dropped when the watcher says a file appeared, vanished or changed; retaken as a NEW object so anything holding a map built from it can compare identity.* ***Vite watches its root and the root is the binding; the library stands above it, so the library is added to the watcher explicitly — a chapter nobody has imported yet is invisible to an unextended watcher.***

**[`catalogue/holds.ts`](../../package/.binding/catalogue/holds.ts) — the library held to its specification, as a compile error.** *At `buildStart` and on every dot-chapter transform; it throws, so vite's overlay opens on the file the author just saved. Doug: "We want compiler errors if this thing fails."*

**[`reference/transform.ts`](../../package/.binding/reference/transform.ts) — the notation resolved before anything compiles it.**

**[`assembly/serving.ts`](../../package/.binding/assembly/serving.ts) — the generated modules, served rather than read.** *Nothing a previous bind wrote is consulted. The ids are the paths the modules WOULD have had and not the `\0` a virtual module wears, because vite decides whether to run TypeScript and JSX over a module by its id.* ***Except for the dependency scanner:*** *it runs on esbuild, and esbuild reads a module's text off the disk — it asks plugins where a module is and never what it says — so a module that exists only because we answer for it was a path esbuild could not open, and the scan died on the first one with no pre-bundling at all. Nobody had seen it because a previous bind's file was always lying there. Vite already had the rule: the scanner sets aside any id carrying a `\0`, so ours wear one there alone.* **And a file appearing is a module changing:** *the watcher reloads the module of the book it landed in — `reloadModule`, never `invalidateModule` — and the book list and route table only when the set of books actually changed, because those two take no hot update of their own and reloading them reloads the page.*

### <a id="hot"></a>An edit appears in place

***A book module takes its own `import.meta.hot.accept`, [`application/opened.ts`](../../package/.binding/application/opened.ts) is the leaf both ends hold, and [`main.tsx`](../../package/.binding/application/main.tsx) keeps its root so a book can be drawn again.*** *React Fast Refresh declines a book module and is right to — `book` is a value and a chapter's default export is a class. The thing in the way was `@vitejs/plugin-react` itself: it self-accepts every file it touches and calls `invalidate()` from inside its callback when it cannot keep the module, which propagated to the entry and reloaded the page. Fast Refresh is kept off the modules we generate; they hold no state and are not components.* **Measured: an edit to a chapter appears on the open page in 496ms, in place; a chapter added to a running library appears in 1758ms with no bind.** ***What remains is that a re-run of `$()` over a re-run class is a new component type, so React rebuilds the book's tree rather than patching it — the seam where the substrate would keep a chemical's identity across an update. Flagged, not taken.***

## <a id="render"></a>The render — one process per page, in parallel

***[`rendering/rendering.ts`](../../package/.binding/rendering/rendering.ts) spawns [`render.mjs`](../../package/.binding/rendering/render.mjs) once per page, as many at once as the machine has cores, and takes the pages back in the order the names were given.*** *One process per page is correct and was measured rather than assumed: every page of a duplicated library was drawn in one process and diffed — the markup was identical and every page but the first carried the style rules of the books drawn before it, because a book registers its theme on the shared class when its module loads.* **1.23s a page over 26 pages, against 3.1s serial.** *Doug: "We can optimize but we can't test a different architecture" — same architecture, same child, same pages, together. HMR is off in the child; several at once would fight for one websocket port.* ***The isolation that would let one runtime draw them all is the substrate's to give — "Each book can have its own class with things registered to it" — recorded for that team.***

## <a id="proof"></a>The proof

***[`specification/proof.ts`](../../package/.binding/specification/proof.ts) reads every built page as the browser will build it.*** *It is not a validator and must not grow into one: each rule names markup where the DOM the browser builds DIFFERS from the markup it was sent — a block opening inside a paragraph, an anchor nested in an anchor — which is the precise condition that makes a page unhydratable and nothing on it clickable.* **And every anchor into the library leads to a page that was built and, if it carries a fragment, an id on THAT page, worn once** — *gathered across all pages before any is judged, COUNTED rather than collected, and read off the pages rather than the catalogue so it cannot agree with the catalogue by construction. Doug: "if the library is validated and the routes are right, won't urls just work? And we can test all of that infrastructure?" It found a synopsis with an unprinted title on its first run; and a set once swallowed the second of two elements wearing one id, so a link that landed on the wrong one passed ([Solutions 88](../solutions/88-the-link-that-landed-on-the-first-of-two.md)). An id worn twice is refused whether or not anything addresses it.*

## <a id="test-library"></a>The test library, and the three kinds of test

***[`.test/`](../../package/.binding/.test/staging.ts) is part of the binder: five real books — a library that is its own subject, a log that is its own author, a persona the log vouches for, some projects, and a paper carrying every form a reference can take, words and a string included.*** *Doug: "we need it to be a part of .binder, well groomed, and use for test purposes at all levels."* **A test that only reads walks them where they stand; a test that binds stages them under `.test/.staged/` with a copy of the binder's source beside them** — *inside the repository, because that is where the packages resolve from* — **and `duplicated()` copies one book N times under N names, each listed where the specification requires, so what is measured at scale is real books.**

***Three vitest projects, because they are three kinds of test*** — *Doug: "don't confuse unit / regression / performance":*

| | | |
|---|---|---|
| **`npm test`** · unit | *the language, the faults, the structure over the test library, the transform over its prose, the proof over pages built to break* | **81 promises, ~1s** |
| **`test:regression`** | *a real bind of the staged library; pages read back; the proof; every reference at the address the page carries; the cover's words drawn* | **6 promises, ~20s** |
| **`test:performance`** | *the catalogue over 205 real books, and a bind of 25, phase by phase — printed, never a threshold* | **~3s and ~60s** |

***The regression suite paid for itself on its first run*** — *the fixture's tables had imported the composition where they mention with `book`, and the proof read three pages back with `<main>` inside a `<p>`. That is the finding that put binding resolution into the reader.*

## <a id="measured"></a>What is measured

| | |
|---|---|
| **the catalogue, 205 real books** | *walk 62ms · structure 205ms cold, 23ms warm · wellformed 4ms · catalogue 37ms · holds 4ms over 1021 keys* |
| **a bind, 25 real books, 26 pages** | *specify 5.7s · bundle 16.4s · render 32.0s in parallel (1.23s a page) · proof 0.0s* |
| **Dougs Library, 6 books** | *the parse 73ms of a 90ms cold structure; 3ms warm; bind 16–23s* |
| **hot** | *a chapter edited: 496ms in place · a chapter added: 1758ms, no bind* |
| **at a thousand synthetic books** | *structure 2.9s cold, ~0.5s warm — 287ms of which is `statSync` asking the disk what the watcher already knows* |

## <a id="open"></a>What is open, and whose it is

- ***The reverse index*** — *every key mapped to the files that asked about it, hit and miss, so a citation heals when its title appears in a file the citing file never heard of. Milestone Two's last clause. Ours.*
- ***A mention plants an anchor — done 2026-09-20, and a title need not print for its chapter to answer***: *the chapter's element wears its name as its id and a heading wears none unless allocated ([B15](08-the-binders-condition.md#b15), [B32](08-the-binders-condition.md#b32)).*
- ***`whole()` is designed and not wired*** — *[`language.ts`](../../package/.binding/catalogue/language.ts) promises that a resolver tries the whole name before splitting on the separator, so a book called `TCP/IP` resolves as a book; today the escape `TCP./IP` is how a writer keeps the slash, and `reaches` splits. Doug's to rule, because refusing the ambiguous case is a design.*
- ***Things registered per book, not on the shared class*** — *the substrate; dispatchable.*
- ***`package.json`'s two owners and the binder installing itself*** — *Milestone Three.*
- ***`bookMention` should be `book` in `.me`'s tables*** — *Doug's; when `.me` next syncs.*

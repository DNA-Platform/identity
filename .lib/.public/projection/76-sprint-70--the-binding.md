# Sprint 70 — The Binding

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `open` — ***2026-09-14: designed in the morning, built in the afternoon — U1 and U3 bound and driven green on one road, the ruled road green on the paper and red on the wiki pending chemistry; halted at Doug's word to take stock. Design moves to the design books when it lands.***
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="where"></a>Where things stand — ***2026-09-14, evening: built, both sites bound, halted to take stock***

**Next action: Doug's ruling on which road the branch carries, then chemistry's commit, then the wiki on the ruled road.** The checkpoint commit `f936d30` holds the road that is green on both sites — the client clears `#root` and draws fresh over the prerender. The **working copy** holds the road Doug ruled with chemistry — `renderToString` on the server, `hydrateRoot` on the client — green on the paper, red on the wiki, **uncommitted** so the ruling is his. After that: `/ce-compound`, and U2 (`.public`).

**What Doug last said:** *"Latex works. Are you coordinating with the $Chemistry team? I want one solution to this and I want it to be general enough to work."* · *"Finish this chunk of work and then halt so we can take stock."* Earlier the same day: *"You guys have to drive before declaring something working. There's no proof that your code produced something reactive."* · *"Why do you think chemicals support hydration? We didn't add support for that yet."*

**Done, in plain words.** The master `.binding` exists at `library/.public/package/.binding` — 42 files, seven step folders, tsc 0 — and is copied into `.latex/.binding` and `.wiki/.binding` by its own sync, which finds the master wherever `@dna-platform/public` resolves and falls back to GitHub `main`. Both libraries are one tree: books, `.binding`, and the built site at the root — `index.html` per book beside its source (`turing/index.html`; a dotted book's page lands in the undotted folder beside it, `article/` beside `.article/`). Their served mirrors, `build.mjs`, `sync.ts` and demo tsconfigs are gone; the gates and fixtures live in each `specification/`; `serve.sh` previews the built sites; the package's `latex`, `wiki` and `verify:*` scripts run through `.binding`. `assembly/book.ts` reproduces `book.tsx` **byte for byte**. The manifest records what vite emitted, so stale bundles are removed. npm: both packages `publishConfig: public`, `.binding` in public's `files`, the workflow at `registry.npmjs.org` with `--access public --provenance` on `NPM_TOKEN`, the GitHub scope line out of `.npmrc`; **nothing published** — Doug is creating a granular token with 2FA bypass for `~/.npmrc` and the repo secret.

**Verification, driven, against the built sites served by `vite preview`.** *Client-render-fresh road (committed):* `verify-latex` **green on both readings with the switch driven** — face `"Latin Modern"` → `-apple-system`, which the gate now requires; 66 rows, 43 citations landing, 335 entries, 0 KaTeX errors, 0 panels, 0 page errors. `verify-wiki` at **Sprint 69's inherited list exactly** — portal −7/−26/−34 at 1280 and 1000, the footer's 32px on turing and article, article's 82 of 90 links — every style failure gone, menus opening, the field taking text. *Ruled road (working copy):* the paper **green**, switch driven, 0 errors; the wiki **red** — `/turing/` after hydration wears the base face, the search button unstyled, the appearance panel's writes never landing, and the gate hangs on a page that never reaches idle; the portal on the same road is reactive (77 editions, takes a click). Handed to chemistry as their reproduction. Suite in each `.binding`: 1 passed, 2 skipped by design. Chemistry's own: four hydration promises green in jsdom, per their room.

**Coordination with chemistry, as it stands.** Their rulings from Doug: the road is `renderToString` + `hydrateRoot`; promises first, fix what turns red; the end is the built LaTeX site hydrated with its switch driven by them. They are building: a stable `componentId` per styled class (ids swap with creation order — measured), persisted recall deferred past hydration, a registry reset the binding calls between routes, a CSS-name fallback for happy-dom (72 of 75 names known; not `inset`, `textWrap`, `textDecorationThickness`). Two facts of theirs that bind this design: **a DOM render's inner HTML is never hydratable** (React writes a comment between adjacent text nodes in `renderToString`; a serialization merges them), so the happy-dom-innerHTML page was always static-only; and my `$(Theme)` null was **my loader's fault**, not their mechanism — corrected to them with the lines.

**Wrong turns, so they are not retried — a full day of them, each measured.** `renderToString` answered a null theme under a renderer that let vite inline `dist` through workspace symlinks and undo rollup's cycle order → `ssr.external: true`. `act` vanished because vite's `build()` set `NODE_ENV=production` in the parent → the renderer child runs in development. Node 24's `navigator` is a getter → `defineProperty`. tsx and vite resolved one file to two URLs → two chemistries → `cls[$$template$$]` undefined at `.book.tsx:57` → the renderer is a plain-node shim and vite is the only loader. `body { margin: 0 }` moved from an inline head style (where `latex.css` overrode it) into the bundled sheet (where it won) shoved the desk 400px left → removed. **A top-level `await` in the entry deadlocked against a chunk importing from the entry — no error, no fibers, the page as served** → `.then`. The gate measured structure only and passed a dead client on both readings → it now requires the face to change. The manifest listed the assets folder, so stale bundles never counted as gone → it records vite's output. And the checkpoint commit swept in chemistry's uncommitted `prerender.test.tsx` from the shared working copy → un-tracked and amended.

**What someone does to use it.** `npm install @dna-platform/public @dna-platform/chemistry react react-dom styled-components` — from npmjs once published; GitHub Packages with a token until then. Make a folder for the library; in it, a folder per book carrying `.book.tsx` and numbered chapters. Copy `node_modules/@dna-platform/public/.binding` to `<library>/.binding` (U4 owes the `npx` that does this). Write `.binding/.pubconfig` — or don't; `{}` takes every default — naming the root book, the title, stylesheets. `cd .binding && npm run build`: the sync refreshes the apparatus from the package, then walk, assemble, vite, render, manifest — the site is the library folder. `npm run preview` to see it as Pages will; `npm test` for the specification; commit the folder; point Pages at it. **Nothing outside `.binding/.pubconfig` is edited.**

**Blockers.** The wiki on the ruled road waits on chemistry's commit. `package` → `.package` is still a separate rename (workspaces, both workflows, every `.lib` link). The push is Doug's, and so is the npm token.

**Not started:** U2 (`.public` — its books need `.book.tsx` files and an order ruling), U4's first-copy `npx`, U5's reference check, U6 (`$Library`), U7's schema. The stubs say so where they stand.

**How to see it.** `sh serve.sh` in `library/.public/package` — paper at :5310, wiki at :5311, both the built sites. Rebuild: `npm run latex`, `npm run wiki`. Gates: `npm run verify:latex`, `npm run verify:wiki`.

**Read first:** this section · [the rulings](#rulings) · `.binding/binding.ts` top to bottom, then `rendering/render.mjs` and `rendering/draw.ts` — the two roads differ in eight lines of `draw.ts` and four of `application/main.tsx` · chemistry's room's messages of today for their side.

## <a id="rulings"></a>Rulings — ***his words, verbatim, 2026-09-13 and 14***

- <a id="r-sprint"></a>**THE SPRINT:** *"Let's make this sprint about internalizing the binder code into public itself. Why don't we make a folder called binding, and we can brainstorm what it will look like to expose the code that will help us compile the app."* · *"In this sprint, I want to quickly get something up and running that works."*
- <a id="r-book"></a>**WHAT A BOOK IS:** *"we assume each folder is a book except .public, and the dots are ignored, so they can be used to organize. That allows me to do any form of organization without messing anything up. It's the view that will determine where things live."* · *"I guess we'll use .book.tsx in the folder to enumerate the book, but folders with one of those are books."*
- <a id="r-public"></a>**WHAT `.public` IS:** *"I want there to be a folder you copy from public into the public to get the thing you would run, and that thing leaves the .public commitable as github pages — hence .public."* · *"The app itself needs to be at the root of .public because that folder is the one that becomes public."* · ***".binding goes in the library not the other way around. PUBLIC is the sample library."***
- <a id="r-extras"></a>**ON OTHER FILES IN THE SERVED TREE:** *"Why can't they be there and be part of the site? We can just not make them part of what anyone would actually query? … I don't mind the package being available as source. It's all in ixp."* · *".lib is for another framework. I don't want you to think of it here."*
- <a id="r-address"></a>**THE ADDRESS:** *"It's not the folder path. We use references like the book name, the chapter name, and this is call in the code. We will have various ways to refer to a book, and by title is the main one with the vite checking the correctness of the ones that are found to exist."* · **a book is a page, chapters are anchors.**
- <a id="r-prerender"></a>**PRERENDER:** *"We definitely want to prerender if possible… If we can prerender and then have $Chemistry fit in there, great."* · *"I don't want the 404 fallback."* · **the road, ruled with chemistry:** `renderToString` on the server, `hydrateRoot` on the client — *"I want one solution to this and I want it to be general enough to work."*
- <a id="r-copy"></a>**THE COPY:** *"One time when .binding is built and it should be relatively static but we have to resync when it is updated."* · *"In the package folder of .public — get it? It's in there!"* · *"Can we make ours .package? How about .pubconfig in .binding?"* · *"imagine .binding was put there and then a sync knows where the real one is on github and it keeps itself up to date that way."*
- <a id="r-build"></a>**WHO BUILDS:** *"Do as much locally before commit as possible. We want the best experience for the user. But that's because we want to experience production. Have CI do it too."* · deploy trigger stays off — *"Leave it off — it's still yours to flip."*
- <a id="r-spec"></a>**SPECIFICATION:** *"specification is where we write the tests. It is the specify step of the binding process."* · *"It walks the one it's in, the real library. This vitest has to have a way of finding its library environment and testing it. And we will probably test in in dev mode and disable specification in production."*
- <a id="r-modular"></a>**THE SHAPE:** *"How about you don't just give things small names and instead give accurate ones?"* · *"Your design has NOWHERE to scale. One file each. That's it. How about something a bit more modular?"* · *"Design this macroscopically. We want this to work in any .public folder that is set up."*
- <a id="r-top"></a>**CONSUMING:** *"we want to use the app there as much as possible out of the box. So have it configured as much as HUMANLY possible."* · *"we consume .public through github so push .public to github. Even though .binding is inside, it consumes through the top."* · *"Then publish public to npm. I can give credentials."*
- <a id="r-drive"></a>**DRIVING:** *"You guys have to drive before declaring something working. There's no proof that your code produced something reactive."* · *"Why do you think chemicals support hydration? We didn't add support for that yet."*
- <a id="r-egg"></a>**THE EGG:** *"A thing lives inside public and works to do everything you need to extend public."* · *"We want the idea of something contained within that creates — like an egg that can grow into the whole thing. We want someone to make their own public library that they can ultimately use in the .me."*

## <a id="design"></a>The design

### <a id="what"></a>What is being made

**The library's ability to publish itself.** Today publishing is a bespoke app plus two hand-rolled scripts; after this, publishing is a property of being a library — the same move as compiling the platform out of the library. It is not a general static-site generator: it only knows how to publish something that is already a library in this system's sense, which is why it can live in the framework. **One model, read twice — once in node to make files, once in a browser to read them.**

**`.package` holds everything that makes a library a *library*. `.binding` holds everything that makes a library *publishable*.** Kinds come from the package by name; the apparatus is copied in and is the library's own.

*Cathy's paragraph on the egg, 2026-09-14:* a library that can only be published by something outside it is a manuscript waiting for a press. The egg is the press folded back into the manuscript — a part of the library that knows how to make the whole of it visible, arriving inside the very package the library is written against; the same shape as a bond constructor carrying its own specification, or a `..`-book cataloguing the library it sits in. The pragmatic recursion: the means to publish travel with the kinds, so one `npm install` hands someone a library, a press, and the rules the press enforces — and the `.me` they will one day keep is a library that happens to have one reader.

### <a id="geometry"></a>The geometry

```
<a library>/                       e.g. library/.public — the sample library, and its site
  .binding/                        the apparatus, copied in from .package/.binding
  .package/                        @dna-platform/public — kinds only (the sample library hosts it)
  <book>/.book.tsx                 a folder with one of these is a book
  <book>/1-….tsx                   its chapters
  <book>/book.tsx                  ASSEMBLED
  <book>/index.html                RENDERED — the page sits with its source
  index.html  assets/              BUILT
```

A library is a folder whose books are the folders inside it carrying `.book.tsx`. Its `.public` — the library's published face — is *inside it*, and for the repo's own library the two are one folder. The built html lands at the library's root and inside each book; the folder is committed as the site and CI uploads it, rebuilding as a check. `.wiki/`, `.latex/`, `library/.public/` and `../dougs-library/library/` are the same arrangement. **The two-tree layout of the demos — source beside a served mirror — collapsed to one tree, and `sync.ts` with it.** A dotted book's page lands in the undotted folder beside it (`article/` beside `.article/`), because dots are never in a URL.

The library root's own `.book.tsx` is **the book its books are written with** (the wiki's `$Wiki extends $Encyclopedia` and four link kinds), never a page. Other files in the folder — `.package`, a tsconfig — are served and unqueried; `.lib` is never committed and is not this design's.

### <a id="process"></a>The process — the steps of binding, each a folder

Each step consumes the previous one's output and declares its own slice of configuration. The seam is a type (`inventory/library.ts`), never a file.

| step | consumes → produces | files |
|---|---|---|
| **configuration** | `.pubconfig` → the library's choices | `configuration.ts` — the union of every step's slice, `configure()` reads, checks each slice, refuses unknown fields · `excludes.ts` — what is never a book: `.binding`, `.public`, `node_modules`, `assets`, the excludes · `schema.ts` — STUB, U7 |
| **inventory** | the parent folder → the `Library` seam | `library.ts` — the seam · `walk.ts` — the only code that reads the filesystem · `books.ts` — a folder with `.book.tsx` is a book · `chapters.ts` — which files are chapters, apparatus by name, the numeric order (`build.mjs`'s `before`) · `configuration.ts` — declares `excludes`, `root` |
| **resolution** | the seam → names, addresses | `names.ts` — a book's name is its folder with dots stripped, unique or a diagnostic naming both (title-from-cover is the growth path) · `addresses.ts` — name → URL, **never** path; the root from `.pubconfig`, or the only book, or one named `index`; the route table with each book's module and specifier · `references.ts` — STUB, U5 · `configuration.ts` — declares `base` |
| **assembly** | names + seam → modules | `book.ts` — `build.mjs`'s `bind()`: the folder's own `.book`, cover · synopsis · table first, chapters in order, `book.tsx` beside them, **byte-identical** · `routes.ts` — writes `application/routes.ts` · `stylesheets.ts` — writes `application/stylesheets.ts` from `.pubconfig` so vite bundles the sheets · `library.ts` — STUB, U6 |
| **specification** | the built library → a verdict | `environment.ts` — finds the library it stands in, walks it once, exports `library`, `table`, `shipping` · `rendering.test.ts` — every route's page exists and holds its book · `library.test.ts`, `references.test.ts` — STUBS · the browser gates and their recordings (`verify-latex.mjs`, `.paper/`, `probe/`; `verify-wiki.mjs`, `read-page.mjs`, `.portal/`) · `configuration.ts` — declares `mode` |
| **rendering** | routes → one `index.html` per book | `render.mjs` — the child, plain node: starts vite, loads `dom.ts` then `draw.ts` through it, so vite is the only loader · `dom.ts` — a happy-dom window onto `globalThis` by `defineProperty` · `draw.ts` — per route `ssrLoadModule`, `renderToString` (ruled road; the committed road used `createRoot` under `act`), the head's `<style>` collected · `page.ts` — vite's built `index.html` as the template, markup into `#root`, styles into `<head>`, title · `styles.ts` · `place.ts` — where a page lands · `rendering.ts` — the spawn, `NODE_ENV=development` · `configuration.ts` — declares `title`, `stylesheets`, `fonts`, `icon` |
| **manifest** | everything written → a record | `manifest.ts` — `.binding/.manifest.json`: assembled, written, rendered, bundled (vite's own output list) · `removal.ts` — a path in the last manifest and not this one is removed · `synced.ts` — the re-sync: from the installed package's `.binding`, or GitHub `main` via the contents API and raw files; never touches `.pubconfig`, the manifest, the generated modules or files the library added; writes `.gitignore` if npm stripped it |
| **application** | (beside the steps) what draws a library | `main.tsx` — **never edited**: routes → match → `load()` **with no top-level await** → hydrate when `#root` has children (ruled road) · `routes.ts`, `stylesheets.ts` — generated · a library's own `page.css` |

At `.binding`'s root: `binding.ts` — the process; `.pubconfig`; `index.html`; `vite.config.ts` — a function of the environment, `appType` `mpa` under preview so no fallback exists, `outDir: '..'`, `emptyOutDir: false`, `publicDir` only when `public/` exists, **no aliases**; `vitest.config.ts`; `tsconfig.json`; `package.json` — `prebuild: sync`, deps by name; `.gitignore`.

Library-wide rules — titles unique, every subject catalogued, a catalogue exists, authors resolve — are **methods on a `LibrarySpecification` carried by a `$Library` kind**, which is the package's and is pitched, not written ([U6](#u6)).

### <a id="six"></a>What "consume through the top" deleted

The alias block in both demos' `vite.config.ts` — six lines pointing `@dna-platform/public/*` at `../../dist/*.js` and one pointing `@dna-platform/chemistry` at `src/index.ts`. Both packages carry `exports` to `dist`; node resolves them by name — the workspace link here, the registry elsewhere. Also deleted: a second vite (6.4.2) under `library/.public/node_modules`, pinned by the app's `^6.3.5`; the app now pins `^7`.

## <a id="units"></a>Units

- <a id="u1"></a>**U1 — `.latex` binds from `.binding`.** **Built.** Visible end met: `book.tsx` byte-identical, the site built and served, `verify-latex` green with the switch driven. Scenarios still owed: a second build writes nothing new; a renamed chapter's old page is removed; `mode: production` skips specification.
- <a id="u2"></a>**U2 — `.public` binds from `.binding`.** Not started. Its books need `.book.tsx` files (they are the old emitter's shape); the order-manifest ruling is owed; `app/` and `build/` dissolve; `deploy-pages.yml` uploads `library/.public`, trigger off.
- <a id="u3"></a>**U3 — `.wiki` binds from `.binding`.** **Built.** At Sprint 69's inherited numbers on the committed road; red on the ruled road pending chemistry. The gate's addresses became folders (`turing/`, `article/`).
- <a id="u4"></a>**U4 — the re-sync.** **Built** for the installed-package and GitHub-`main` sources; the GitHub path untested until something is pushed. **Design owed:** the first copy before `.binding` exists — an `npx` entry the package ships.
- <a id="u5"></a>**U5 — specification finds its library.** `environment.ts` and `rendering.test.ts` built; the reference check a stub.
- <a id="u6"></a>**U6 — `$Library` and `LibrarySpecification`.** Not started. **A package change — Doug's yes before a line.**
- <a id="u7"></a>**U7 — `.pubconfig` comprehended.** Slices and unknown-field refusal built; the schema a stub.

## <a id="risks"></a>Risks, with their lines

- **Hydration over a multi-book prerender** — red on the wiki; chemistry's stable `componentId`, registry reset and CSS fallback are the named fixes. The paper is green on the same road.
- **The sample library's order** — its chapters are not numbered; `.vscode/sort-order.json` is what orders them today. Ruling owed before U2.
- **The copy is a fork, by ruling** — `inventory/`, `rendering/`, `manifest/` identical in every library's `.binding`; the sync is what keeps them one.
- **Two `<style>` sheets on a client-rendered page** — the server's and the client's; harmless today, worth one line when hydration lands.

## <a id="names"></a>Names — proxies flagged

**Doug's:** `.binding`, `.package`, `.pubconfig`, `specification`, `binding`. **Existing, kept:** `library.ts`, `walk`, `routes`, `manifest`, `bind()`. **Proxies, his to rename:** `inventory`, `resolution`, `assembly`, `rendering`, `application`, `environment.ts`, `excludes.ts`, `schema.ts`, `synced.ts`, `removal.ts`, `page.ts`, `styles.ts`, `place.ts`, `draw.ts`, `dom.ts`, `$Library`, this chapter's name.

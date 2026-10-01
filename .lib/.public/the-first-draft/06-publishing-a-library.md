# Publishing a Library

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***How a library of books becomes a site, and where everything stands while it does.*** The settled account of the geometry [Sprint 70](../projection/76-sprint-70--the-binding.md) built and Doug ruled on 2026-09-15; the sprint chapter is the trail.

## <a id="geometry"></a>The geometry — library › `.public` › `.binding`

> ***Doug, 2026-09-15:*** **"In .latex you should have .public — you failed at the canonical step, and the build should point there."** *And:* **".latex > .public > .binding — remove it from other places. This is how it looks so the rest of the folders are the library. And things compile inward towards .public and .binding."**

| folder | what it is | who writes there |
|---|---|---|
| **the library** — `.latex/`, `.wiki/`, `library/` | the books: every folder carrying a `.book.tsx` is one, dots ignored, and a `.book.tsx` at the root is the base the books extend ([The Book's Little Framework](04-the-book-s-little-framework.md)) | **the author, only** |
| **the face** — `<library>/.public/` | the library's published side: the built pages (`index.html`, one folder per book that is not the root), `assets/`, and the binding; **this is the folder GitHub Pages serves** | the binder |
| **the binding** — `<library>/.public/.binding/` | the apparatus that publishes the library — a copy of the master in the package, kept current by sync; its `.pubconfig`; and everything generated: the assembled book modules under `application/books/<folder>.tsx`, the index, the routes, the stylesheets, the manifest | the binder, and the author for `.pubconfig` and the library's own stylesheet |

***Everything the binder generates compiles inward.*** *The binder walks the library above its face and writes only into the face and into itself:* [`binding.ts`](../../package/.binding/binding.ts) names the **face** as the binding's parent and the **library** as the face's parent; [`inventory/library.ts`](../../package/.binding/inventory/library.ts) says the geometry once, `faceOf` and `bindingOf`, and the inventory and the resolution read it there. *The inventory never enters `.binding`, `.public`, `.git`, `node_modules` or `assets` — the never-set in [`configuration/excludes.ts`](../../package/.binding/configuration/excludes.ts).* **A generated file in a book's folder is a fault.** *The assembled `book.tsx` used to be written beside the chapters; it now stands at `.binding/application/books/<folder>.tsx` and imports the library above it — `../../../../aaronson/.book`.*

## <a id="copy"></a>The first copy

> ***Doug:*** **"see the philosophy of having replicable processes that are on the meta side but simple and easy, on .binder in the package, to make it very easy to have it copied and functioning in the local public directory that it is inside of. In its own copy script, it can make a .public folder in the library folder it is pointed to, helping it earn its .public name as a framework."**

**From any binding — the master in the package, or a copy — `npm run copy -- <library>` makes `<library>/.public/.binding` and copies the binding into it** ([`manifest/copy.ts`](../../package/.binding/manifest/copy.ts)). *It always makes `.public`; a `.binding` that already holds files is refused, because a copy syncs rather than being copied over.* **It writes the copy's `.pubconfig` with one line, `manifest.origin`, naming where the copy came from:** a path back to the binding it ran from — relative when the two share a folder, absolute when all they share is the drive — or the package name when it ran from inside `node_modules`.

***The copy is viral, and that is the design.*** > ***Doug:*** **"It is kind of viral (don't be concerned) — a viral UI framework, because each .binding is like a new node where you can make more from. It is meant to be evolved."** *A copy made from a copy names that copy as its origin, so a library can grow a tree of libraries and each syncs from the one it came from.*

**Install is by hand.** *Doug: "Install of the package can be by hand for now."* `cd <library>/.public/.binding && npm install` — every binding installs its own packages, `@dna-platform/public` and `@dna-platform/chemistry` from npm among them — and the master binding in the package stays bare by ruling (*"I would prefer master to stay bare"*), running on the repository's `tsx`.

## <a id="sync"></a>The sync

**`npm run sync` in a copy brings the master in, and runs before every build.** [`manifest/synced.ts`](../../package/.binding/manifest/synced.ts) reads `manifest.origin` from `.pubconfig` and nothing else — a path, a package name, or `github:<ref>` — through the one loop [`manifest/origin.ts`](../../package/.binding/manifest/origin.ts) shares with the copy. *A file already equal is left alone; a copy's own files — its `.pubconfig`, its manifest, what its assembly wrote, its `page.css`, its verify scripts — are never touched, because the sync only writes what the master holds and keeps the five it names.* **A binding that names no origin is a master, and nothing syncs into a master.** *The demos in the package, `.latex/.public/.binding` and `.wiki/.public/.binding`, name `../../../.binding`; developing the master and running `npm run sync` in each is how a change reaches both.*

## <a id="build"></a>The build, and what a reader gets

**`npm run build` in the binding runs the compiler** — `configure · inventory · resolve · assemble · specify · bundle · render · record`, each printed with what it did and how long — and leaves the face holding one prerendered page per book, hydrated by the bundle under `assets/`. *`npm run preview` serves the face; `npm test` runs the binding's own specification.* **The face is committed, and GitHub Pages serves it.**

## <a id="order"></a>What a consumer does, in order

1. **Copy:** from a binding, `npm run copy -- <library>`.
2. **Install:** in `<library>/.public/.binding`, `npm install`.
3. **Write a book:** a folder in the library with a `.book.tsx` and numbered chapters — [The Book's Little Framework](04-the-book-s-little-framework.md), [The Book Is the Layout](05-the-book-is-the-layout.md).
4. **Configure:** `.pubconfig` — the root book, the title, the stylesheets, the icon.
5. **Build, look, commit:** `npm run build`, `npm run preview`, commit `.public`.

*Written 2026-09-15 out of [Sprint 70](../projection/76-sprint-70--the-binding.md#where), the night the canonical step was ruled after two demos had their binding beside their books.*

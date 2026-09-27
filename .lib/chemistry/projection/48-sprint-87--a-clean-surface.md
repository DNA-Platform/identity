# A Clean Surface

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **style:** [The Coding Style](../../../.public/.lib/the-coding-style/03-the-coding-style.md)
- **status:** `implemented` — *opened and built 2026-09-27 from [the pitch](00-planning.md#pitch-symbols); the docs, U6, are owed.*
- ***The chapter name and the sprint number are PROXIES.*** *The number is the team's next; the name is Doug's phrase, "a clean surface area".*

---

## <a id="the-requirement"></a>The requirement, in Doug's words

> **"This is a good opportunity for $Chemistry. I think we want to use symbols for more things. We don't want to use such basic words. What if, for everything from formula to next, we expose symbols that we export with those names and compel people to use them. view is still public, but let's give $Chemistry a clean surface area. I like the look of using symbols anyways because they express that this is a $Chemistry feature."**

*The motivation, restated in the room:* **"we want to minimize collisions with $Chemistry consumers and one of your main consumers just had this problem"** — *the public branch's Sprint 86 could not give Chapter a `next`, because every chemical's lifecycle method was `next(phase)`.*

## <a id="the-principle"></a>The principle — what is public and what is a symbol

> **"If something is useful. view and parent are those. We keep children symbolic because it is not recommended."**
>
> **"Optional opt-in features are ones that get symbols because the symbols represent using those features."**

**A word stays public when it is useful to every chemical** — `view`, `frame`, `parent`. **A symbol marks the use of an opt-in feature, or a member that is not recommended** — `formula`, `persist`, `selector`, `styled`, `inline`, `resolve`, `next`, and `children`, `cache`, `theme` before them. *And chemistry's own machinery takes an internal `$x$` symbol that is not exported at all, as `draw` now does.*

## <a id="rulings"></a>The rulings

| word | ruled | in his words |
|---|---|---|
| `formula`, `resolve`, `persist`, `inline`, `selector`, `next` | **exported symbols under those names** | *"for everything from formula to next, we expose symbols"* |
| `parent` | **stays public** | ***"Know this.parent stays public. That is essential"*** — *given mid-build, after the sweep had already rewritten it; the rewrite was reverted and `parent` never exported as a symbol* |
| `styled`, the boolean | **an exported symbol, kept** | *"I doubt you can drop things. That is bad thinking. Give your past selves the benefit of the doubt but check."* — the check found [R140](../../../../.archive/.public/.lib/projection/42-sprint-40--styled-chemicals.md#r140), his own: *"keep it — if styled is undefined we just read the selector; if it is false or true we read styled and selector"* |
| `style` | **the styled-components callable** — `[selector] = style.section` | *"might style be a method and styled be the boolean?"* |
| the compiled component | **a symbol, proxy `compiled`** — *his to name* | *moved off `style` by the ruling above; `styling` was taken by a function in the particle* |
| `draw()` | **internal, `$draw$`** — outside chemistry only one test file called it | *"Is this an exported member that users should use? Otherwise it needs the $draw or $draw$ symbol"* |
| `frame()`, `view()` | **stay public** | *"frame is a real method, like view, and deserves to be at that level. Leave it"* |
| the archived first draft, and Doug's library that binds it | **pinned to the published chemistry 0.1.2** | *chosen over migrating the archive or leaving it to break* |
| Chapter's `after` and `before` | **not this sprint's** | *"You aren't making that change"* |

## <a id="the-literature"></a>What was read first

**Thirty documents** — *the pitch and its memory, the public branch's Sprint 86, [`symbols.ts`](../../package/src/implementation/symbols.ts), [`index.ts`](../../package/src/index.ts), the particle's and chemical's members, the declarations, the molecule's walk, the props type, the styled compiler's reads, five chapters, and every consumer counted in source.* **What it corrected:** *`styled` was already the callable's exported name; `$resolve$` and `$formula$` are other members, so `resolve` and `formula` took new symbols; the props type and the molecule needed nothing, since neither meets a symbol key; and the archived first draft imported chemistry live, so it had to be pinned.*

## <a id="built"></a>What was built

- **[`symbols.ts`](../../package/src/implementation/symbols.ts)** — *`formula`, `resolve`, `persist`, `inline`, `selector`, `styled`, `next` as `unique symbol`s; `compiled` in place of the old `style` symbol; the internal `$draw$`.*
- **[`index.ts`](../../package/src/index.ts)** — *exports the seven beside `cache`, `children`, `compiled`, `theme`, `resolved`; `style` is the callable, and nothing is exported as `styled`-the-callable, `parent` or `draw`.*
- **The particle and the chemical** — *every one of those members keyed by its symbol; `parent`, `view` and `frame` public; the styled compiler, hydration and the formula read by symbol; the molecule's framework set drops `selector`, since a symbol is never walked.*
- **Chemistry's promises and the Lab** — *nineteen promise files and ten Lab cases re-spelled; the carrier promise now checks the `next` symbol it lifts.*
- **The public branch** — *Book waits on `this[next]('mount')`; five promise files import the callable as `style as styled`, because the public branch's own classes carry a member named `style`.*
- **The pins** — *the archived first draft's package asks for `0.1.2`; Doug's library compiler asks for `0.1.2` and holds a real 0.1.2 folder, matching its lock's integrity, in place of a junction to the workspace. Both on disk only: `.archive/.public` is ignored by this repository and `.me` syncs elsewhere.*

## <a id="measured"></a>What was measured

| | result |
|---|---|
| chemistry's promises | **937 of 937**, tsc **0** |
| the Lab in Chrome | styled **20 of 20**, persistence **7 of 7**; its **30** type errors are the same 30 at HEAD, none in a migrated file |
| chemistry's build | the dist exports the symbols and `style` the callable; a chemical answers `[next]` and keeps `parent`, `view`, `frame` |
| the public branch | typecheck **0**, quick build fresh, **268 of 268**; its compiler typecheck **0**, unit **98 of 98**, regression **30 of 30** |
| Doug's library compiler | one chemistry, 0.1.2, and one React; every name it and the archive import from chemistry exists in 0.1.2; its **18** type errors and **1** unit failure name no chemistry word — *read as older than this change, not measured against a before-state; a full bind was not run* |

## <a id="stand"></a>Where things stand

**Implemented; the other team may resume.** *Project commits `541fc24` — chemistry's source, promises and Lab — and `698d863` — the public branch's one line and five imports; nothing pushed to origin.*

**Owed:**
- **U6, the docs** — *chemistry's teaching chapters and the public branch's still spell `selector =`, `next('mount')`, `persist =`, `inline =`, `styled.x`; sprint records stay as history.*
- **The version** — *the surface change is breaking, so chemistry is 0.2.0 at its next publish, with the public branch's pins raised to `^0.2.0` in the same act; publishing is Doug's.*

**For Doug:**
- **`style` collides with the public branch's own `style` member** — *Cover, TableOfContents, Format and Paginated declare one, so a promise reading `style = style.blockquote` was aliased instead. The motivation of this sprint was fewer such collisions; the callable's name is his to reconsider.*
- **`compiled` is a proxy** for the compiled component's symbol.
- **`.latex` and `.wiki` inside the public package** pin `@dna-platform/public` 0.0.3 and chemistry 0.1.2 exactly, and nothing builds them, so they stay on the old surface by their own pins.

**New names, proxies:** `compiled`, `$draw$`. **His:** `style` for the callable, and every symbol's name.

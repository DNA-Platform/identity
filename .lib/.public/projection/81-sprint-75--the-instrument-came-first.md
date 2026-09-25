# Sprint 75 — The Instrument Came First

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***The sprint name is a PROXY; Doug's to rename.***

---

***CLOSED AS A FAILURE OF PURPOSE, by Doug, 2026-09-17.*** **The sprint is not being called a failure because nothing came of it. It is being called a failure of PURPOSE because what came of it is not what it was for**, *and recording that distinction is the only reason this chapter exists.*

## <a id="what-it-was-for"></a>What it was for

***The commission was given in one sentence and never withdrawn:***

> ***Doug:*** **"The binder exists to produce the catalogue, run the specification, provide realtime development workflow, and be absolutely as lightning fast efficient as possible at validating a knowledge graph."**

**Preceded by the correction that set the altitude:**

> ***Doug:*** **"DON'T be myopic!!!!!!! We are not rewriting the binder just so you can edit CSS faster."**

***So the sprint was to DESIGN that*** — *the catalogue, the reference and mention system, and a binder fast enough to answer while a person is still typing.*

## <a id="what-happened"></a>What happened instead

**Most of the day went into repairing the instrument that reaches Claude Desktop**, *because it was broken and the design work depended on it.* **That repair was real and it was needed. It was also not the purpose, and it consumed the sprint** — *the design conversation began in the last hour.*

***The honest shape of it:*** **the tool had to work before the thinking could happen, nobody had checked that the tool worked, and the checking cost a day.** *No amount of discipline inside the repair changes that; the failure was in not knowing the instrument's state before committing a sprint to work that needed it.*

## <a id="what-stands"></a>What actually stands, which is more than the framing suggests

***The design work that did land is real and is written down where it can be cited.***

- **[The Soundness of a Knowledge Graph](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md)** — the design purpose of `.public` stated rather than derived, and the chapter the branch is now read against. *Library semantics establish the soundness of a knowledge graph; the catalogue refuses by non-membership alone; a reference names a thing and never a place; the compile is the only moment the library exists as one object.*
- **[The Card Catalogue](../the-catalogue-and-the-specification/04-the-card-catalogue.md)** — the design session recorded as it was decided, carrying **seven things found in the code rather than designed**, every ruling with Doug's words attached, and the second round of rulings that came back from an outside reading.
- **[The answer no caller read](../solutions/85-the-answer-no-caller-read.md)** — the defect class that cost most of the day, and the rule it produced.

***And the instrument works, measured rather than asserted:*** **`/think` write and read run end to end, and a dispatch fell from 18.5 seconds to 6.8** — *two blind waits removed, neither of which had been buying anything.*

## <a id="stands"></a>Where things stand

### <a id="settled"></a>Settled, with Doug's words

| | |
|---|---|
| **what a card is** | *"Like horizontal gene transfer, it's a piece of writing that isn't created in the DOM."* A writing on the same base as a chapter, `new`'d and assigned to, never mounted. |
| **keys** | *"Catalogue keys are not dynamic. Freeze the thing. These are non-reactive properties."* No rename, no alias, no redirect — and not a bond. |
| **the call number** | *"No that's the title. Book titles have to be unique in the library."* Later, subject plus title — which is how a call number is actually built. |
| **references out** | *"Then it isn't a reference in the sense of the library."* External links are checked for being well formed at compile time and never for being right. |
| **a mention** | *"Mentions will be annotative… a piece of writing is approximately a sequence of strings or other pieces of writing followed by a sequence of annotations."* |
| **an author** | *"Authorship has to live in an autobiography and we only allow one subject to have that."* Uniqueness from the library's closure, not an authority file. |
| **where a fault surfaces** | *"I would like them to find out in the VS Code errors."* Not the browser, not the build log. |
| **DI and bonds** | *"We want DI and bond construction to happen at render… based on the cached DOM."* |
| **the syntax** | `[[x]]` declares, `[x]` refers. Doubling is the deliberate act. |
| **the grammar** | Composition begins at the paragraph; below it, strings. |
| **speed** | *"Running is from the time I ask to the time it happens."* A budget is a ceiling, never a cost. Never wait blind. |

### <a id="open"></a>Open, and blocking the design

1. ***Does a card BOND, or is it only ASSIGNED?*** **If bond construction happens at render and a card is never rendered, a card never bonds** — *so the catalogue would be built from objects that skipped the bond. That may be exactly right and cheap, or it may be a gap. It is the first question of the next sprint.*
2. ***The dependency model.*** **An outside reading put this first and the argument holds: early cutoff is only sound if a unit's output is a pure function of TRACKED inputs, and three inputs are untracked today** — *props bypass the bond, DI is captured at construction, and per-page process isolation implies global state worth isolating from.* **An untracked input means the engine serves stale output silently — a green light over a broken reference.** *Doug's render-time answer appears to dissolve all three at once; it has not been checked.*
3. ***Why per-page process isolation exists.*** **Nobody has established it.** *Half the speed argument rests on the premise that it is shared mutable state, and that premise is unverified.*
4. ***The relator gap.*** *Our one word "author" is doing the work of author, editor, illustrator and translator.*
5. ***The table of contents is positional in the code and was ruled by name.*** **Doug: "Right and I said not to. I said by chapter name so that's on you guys. Good bug."**

### <a id="instrument"></a>The instrument, honestly

**Working:** *`/think` write and read against an existing conversation; 6.8s per dispatch.*

**Broken:** ***a NEW topic cannot be created.*** *It is born in the project page composer, which is in Cowork mode and offers `Start task` rather than a send — clicking it starts a task and lands nowhere. `switchToChat()` checks the sidebar rather than the composer's mode, so it returns early and never switches it.* **That is why the design thread lives under `Cathy > Libraries` instead of `Cathy > .public`.**

**Also broken:** ***document retrieval.*** *Scraping the panel works and truncates long documents silently; `artifacts.copy` returned a stale clipboard from an unrelated conversation.*

**Left standing in the driver**, *named so they are not rediscovered:* the send-button names live in three controllers with three spellings; `composed-message-controller` still carries the blind Enter fallback deleted from `Composer`; three tree-finders that should agree do not; `attach()` verifies `async () => true`; five blind `setTimeout` waits remain; `surface.generated.ts` is stale and one test is red for that reason.

## <a id="next"></a>The next sprint

> ***Doug:*** **"The next sprint is design only. We need to have a design we KNOW we can implement. Pure branch and documentation and sprint design work."**

***No code. The deliverable is a design whose implementability is established rather than hoped for*** — *which means every piece of it names what it rests on and whether that thing has been checked.*

**It opens at [The Card Catalogue](../the-catalogue-and-the-specification/04-the-card-catalogue.md), and its first question is number 1 above.** *The book carrying it is named `the-catalogue-and-the-specification`, which is now wrong — the design has outgrown the binder and covers the object model, the substrate and the editor. The name is a proxy and Doug's to give.*

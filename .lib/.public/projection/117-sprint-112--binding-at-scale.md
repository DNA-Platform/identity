# Sprint 112: Binding at Scale

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **state:** **`requirements-only`, 2026-10-17.** Opened the evening [Sprint 111](116-sprint-111--dna-and-dna-legacy.md) bound his library whole in 714.7 s, on his reading of that number and his choice of this sprint now.
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow). **The code is the binder's**, [`library/.public/package/.binding`](../../package/.binding), and every change under the package waits on his yes to its diff.
- ***"Binding at Scale" is a PROXY name.***

---

## His words, verbatim

*"The bind takes 11 minutes for 96 conversations? Then we are in trouble for a LOT!"*

Asked whether the next work is a binder sprint on bind time at scale, he chose *"Bind sprint now"*.

## What was measured before anything was written

**The two binds of 2026-10-17, his library at 195 books (184 conversations), 315,215 writings:**

| bind | wall | where it goes |
|---|---|---|
| every book changed (the re-import) | 714.7 s | specify 339.6 s in 49 children, render 341.8 s in 31, bundle 30.2 s, two children at once |
| nothing changed | 42.8 s | bundle 29.8 s, keeping 195 pages 9.9 s, catalogue 2.1 s |

**A full bind happens on a re-import, a change to the binder, or a change to code every book imports.** The digest of a book takes every `.book.tsx` and every code file beside any chapter of the library (`bases()` in [`manifest/graph.ts`](../../package/.binding/manifest/graph.ts)). So an edit to Claude's manual or the conversation's theme stales all 195 books, and a prose edit stales one. The binder keeps every other page as it was.

**One specifying child, timed from a scratch copy of [`specify.mjs`](../../package/.binding/specification/specify.mjs) over his library:**

| child | watcher as the binder opens it | watcher truly off |
|---|---|---|
| 1 book | 21.3 s | 5.2 s |
| 4 books | 26.8 s | 11.3 s |
| 16 books | 42.7 s | 29.6 to 31.2 s |

**The watcher is the first finding.** Both children open Vite with `server: { watch: null }`, in the call and not in the configuration file. Vite merges that call over the file, and its merge skips a null: `if (value == null) continue`, in `mergeConfigRecursively` of Vite 7.3.1. So the null never arrives, Vite opens chokidar, and the inventory's plugin adds the whole library to it (`server.watcher.add(library)` in [`inventory/retaken.ts`](../../package/.binding/inventory/retaken.ts)). Profiled, 12 of a one-book child's 24 seconds were `fs.watch` opened file by file. That cost grows with every file the library holds, so it grows with every conversation imported. The record of 2026-10-16, that the watcher was off in the children, is corrected here.

**What a book costs once the watcher is off,** profiled over sixteen conversations, 20,200 writings, about 1.7 s a book:

| where | share |
|---|---|
| chemistry: bond, bondName, bind, lift | 30% |
| Vite: compiling the chapters | 12% |
| garbage collection | 11% |
| `@dna-platform/public` | 10% |
| the binder, of which the catalogue rebuilt in the child | 7% |
| TypeScript, the catalogue's parser, in the child | 6% |
| React | 6% |

**Two costs are the binder's own:** the watcher, and a catalogue of the whole library rebuilt in every child, though the parent built it seconds before. **One is the bundle's:** the whole library rebuilt on every bind, 29.8 s at 195 books, which needed an 8 GB heap. **Two are chemistry's and only pitched here:** about 0.44 ms of bonding per writing, and a child that keeps about 0.5 GB per MB of chapter source until it exits (B40, measured by the other session).

## Requirements

- <a id="r1"></a>**R1 · A child opens no watcher.** A specifying child and a drawing child open Vite with no file watcher on the library, said where Vite reads it, and a promise holds it. *Seen:* the one-book child under 6 s where it was 21.
- <a id="r2"></a>**R2 · A child reads the catalogue the parent made.** The parent hands its catalogue to its children, so no child walks or parses the library again. *Seen:* a child's TypeScript time gone from its profile, and its open time flat as the library grows.
- <a id="r3"></a>**R3 · The children sized for the machine.** Once R1 and R2 are in, his `.pubconfig`'s batch and parallel are measured again and set: 14 cores, 15.5 GB, a child's peak read off the bind. *Seen:* the full bind's wall time against 714.7 s, with the setting chosen by its numbers.
- <a id="r4"></a>**R4 · The bundle by book.** Design owed, and decided by a measure before a line: the unchanged bind's floor is the whole bundle, which grows with every book and needed an 8 GB heap at 195. A bundle per book, or one that rebuilds only the books that changed, is designed against the app's routes and the shared chunk, and shown to him before it is built. *Seen:* an unchanged bind of his library under 15 s, and no heap flag.
- <a id="r5"></a>**R5 · Chemistry's two costs, pitched.** The bonding per writing and the retention per child are written as a pitch with their profiles, for Cathy's team and his ruling. Nothing in chemistry changes here.

## What success looks like

His library bound three ways and the numbers set beside today's: **every book changed** against 714.7 s, **nothing changed** against 42.8 s, and **one conversation's prose changed** (not yet measured today). Then a projection to 1,000 conversations read off the measured per-book and per-child costs, which says whether the mass import fits. A page cannot fake a wall time read off the binder's own report.

## <a id="the-plan"></a>The plan

Approved 2026-10-17 on his *"Approve R1 to R5"*. **`implementation-ready`.**

### Decisions

- <a id="d1"></a>**D1 · One hand-off from the parent to its children.** In the catalogue phase, the parent writes the catalogue's addresses to a file in the binding, beside `.render.json`: each key's url and each book's place. Every child the binder opens is told that file in its environment. A Vite server told it is a child of a bind, and the configuration file says so where Vite reads it. *Chosen over* `watch: { ignored: () => true }`, which still opens chokidar, and over loading the configuration in each child with `configFile: false`, which would copy the server's options into two `.mjs` files and still rebuild the catalogue.
- <a id="d2"></a>**D2 · What a child's server is.** No watcher (`watch: null` in the file). The addresses read from the hand-off, not a catalogue built. No holding plugin, since the parent held the library before any child opened. The reference transform needs only `where`, `scope` and `keys`, and its type says so. The workbench and the bundle are told nothing and are unchanged.
- <a id="d3"></a>**D3 · Sizing by measure.** After U1 and U2, his library is bound at two, three and four children at once and at two batch sizes, and the setting is chosen by wall time and each child's peak against 15.5 GB.
- <a id="d4"></a>**D4 · The bundle by book is designed before it is built**, and shown to him.

### Units

- <a id="u1"></a>**U1 · The child's server, honest.** R1, D1, D2. Files: `children.ts`, `vite.config.ts`, `binding.ts` (the catalogue phase writes the hand-off), and `render.mjs` and `specify.mjs` (the null that did nothing removed, their comments corrected). *Promises:* a server opened as a child holds Vite's no-op watcher; the workbench's still watches. *Seen:* a one-book specify child under 6 s.
- <a id="u2"></a>**U2 · The child's addresses, handed.** R2, D1, D2. Files: `catalogue/catalogue.ts` (the addresses as data, and one reading of them shared by the catalogue and the hand-off), `inventory/retaken.ts` (an inventory that reads the hand-off), `reference/transform.ts` (it asks for addresses only). *Promises:* over the test library, every chapter transformed with the handed addresses is byte-identical to the same chapter transformed with the built catalogue; every key and every scope answers the same. *Seen:* no TypeScript in a child's profile.
- <a id="u3"></a>**U3 · Sized.** R3, D3. His `.pubconfig` set by measure, and the three binds measured against 714.7 s and 42.8 s, the one-book bind for the first time. *Seen:* the binder's own report.
- <a id="u4"></a>**U4 · The bundle by book.** R4, D4. **Design owed:** what is shared between books, how a route loads a book's own bundle, and what the proof reads. Denied files until he has seen the design.
- <a id="u5"></a>**U5 · Chemistry's pitch.** R5. Written in this chapter with the profiles, for Cathy's team.

**Risks.** A stale hand-off file would read a wrong address. It is written in every bind's catalogue phase before any child opens, and only children are told of it. A child that leaves holding out could compile a library that does not hold, but the parent's catalogue phase refuses one before any child opens. The binder's regression suite binds galleys in turn and at once, and both must stay green.

## Where things stand

- [U1](#u1) and [U2](#u2) built as one hand-off and landed on his *"Yes, land it"* to the diff: 10 files, +103 −34, and a new promise file, `inventory/retaken.test.ts`.
  - The catalogue's places are data (`Places`) and one reading of them (`directory`), shared by the catalogue and the hand-off. The catalogue phase writes `.places.json`; `children.ts` names it in every child's `BINDING_PLACES`. The configuration reads it and gives a child `watch: null` in the file, the handed inventory and no holding plugin. The transform asks a `Directory`, and the serving plugin draws routes from one. The null that did nothing is gone from `render.mjs` and `specify.mjs`, and their comments say what is true.
  - Promised:
    - a server opened as a child keeps Vite's no-op watcher (`server.config.server.watch` null, nothing watched);
    - the workbench's configuration keeps its watcher;
    - the handed directory answers every key, scope and route as the catalogue does;
    - a child asked for a catalogue says it holds none;
    - every chapter of the test library transforms to the same text from the file as from the catalogue.
  - Gates on the master: typecheck 0, unit 179 of 179, regression 54 of 54, the children's promise binding in turn and at once with every page the same.
- **Asked the same night:** *"Can you please also import all from dna legacy and dna, and then bind and report bind time. It will be long."* The importer gained `--all`, every conversation of every account, with its promise.
  - The first run wrote 989 books, each with its ledger line and entry, then ran out of Node's default 4 GB heap. The second, at 12 GB, wrote nothing more and reached 12 GB in 13 minutes. **That was a loop in the writing:** a line shaped like a table row with no rule under it opened no table, and the paragraph that took nothing wrote an empty paragraph at the same line forever, in message 34 of "Cathy > Libraries". Found by feeding that conversation's blocks to `blockLines` one at a time. A paragraph now always takes its first line, with a promise.
  - **A project named "Claude" met Dougs Claude**, which is about Claude: TITLED-TWICE. A project book is now keyed `claude--<name>` and shows its name, as a conversation is, generalized from his *"Still; do claude-- because we don't want random collisions in the library"*. Keying only a taken name would make a book's key depend on the rest of the library, the condition the catalogue refuses for synonyms. The 24 project books and their entries in Dougs Claude were struck with the importer's own `struckEntry`, and one run, `--all --overwrite`, wrote everything again: **1,001 conversations in 6 min 8 s**, 13,989 files, 1,037 books, 8,263 keys, the catalogue whole.
  - **The parse check then found two more things.** Artifact files beside a chapter are inserted raw and never compiled, so the check now skips files beside a chapter. And one call of the older account had leaked its own parameters, newlines, tags and quotes, into an artifact's id, which broke the attribute it was written into. The record keeps the identifier the call began with, and the writing spells any attribute value safely. The bind promise carries the leaked id.
  - Importer promises 56 of 56, typecheck 0. **All 9,243 chapters of his library transform and parse**, 0 faults, in 76.2 s. U1 and U2 synced to his copy, 11 files.
  - **The first bind of 1,037 books stopped at specify, EPERM.** Vite's dependency optimizer was never off in a child: the React plugin adds React to `optimizeDeps.include`, and Vite's merge joins lists, so `noDiscovery` with an empty `include` never disabled it. Changing the configuration made its cache stale, and two children rebuilt it at once. On his yes, a child's configuration now says `optimizeDeps.disabled`, which Vite 7.3.1 still honours by clearing the list after the plugins. Promised: a child's server has no `depsOptimizer`, seen red without the fix.
  - **The second stopped at esbuild:** an import name kept its dashes because `\w` is ASCII under the u flag. An artifact titled in Russian made `o1-объединенная-карта-…`. On his yes, the assembly camel-cases after any `ID_Continue` character, drops what an identifier may not hold, and prefixes `Chapter` where a name cannot start one, with a promise over Cyrillic, Devanagari and `²`.
  - **The third passed the catalogue and the whole of specify, 1,037 books in 1,047 s,** and specify refused 48 places in 20 books, all the importer's:
    - 18 conversations hold no message to show, so the run now writes none, and they were struck with their entries and ledger lines;
    - display math in a list's line was an `Equation`, a paragraph's size inside a line, so it is now inline `Math` there and in a heading.
  - One more rewrite: 983 conversations in 2 min 53 s, 18 with no message not written, 1,019 books, 8,167 keys, 0 faults.
  - **The fourth bind ran end to end in 42 min 4 s,** and the proof refused 1,197 ids worn twice. In the older account a question and its answer often share an instant to the microsecond, and a message was addressed by its instant. The Message is the other session's, in Dougs Reference Manual: it now wears its instant and its speaker's name. No speaker posts twice in one instant across the 983 conversations.
  - **The fifth bind passed: 2,228.1 s, 37 min 11 s.**

    | phase | 195 books, before U1 and U2 | 1,019 books |
    |---|---|---|
    | catalogue | 2.1 s | 10.3 s |
    | specify | 339.6 s, 49 children | 885.9 s, 255 children, peak 5,121 MB |
    | bundle | 30.2 s | 393.4 s, 2,103 files |
    | render | 341.8 s, 31 children | 933.0 s, 84 children, peak 6,088 MB |
    | proof | 0.6 s | 4.4 s, 1,020 pages, no fault |

    A book now costs 0.87 s to specify and 0.92 s to draw, where it cost 1.74 and 1.75. **The bundle is the next wall:** it grew 13 times for 5 times the books, and it is rebuilt on every bind, unchanged ones included. Children peaking near 6 GB on 15.5 hold the binder at two at once.
  - Driven on 4242:
    - Our Conversations' 983 entries all land, and no id is worn twice;
    - Dougs Claude lists 27 project books;
    - Investing's 103 land;
    - a legacy page's 44 messages wear 44 ids, `2024-10-22t17-44-30-123063-doug` first;
    - Gödel and Goldbach draws 154 messages and 1,699 formulas;
    - 0 console errors.
    - The register draws in 1.7 s and finishes its 1,003 requests within 5 s.

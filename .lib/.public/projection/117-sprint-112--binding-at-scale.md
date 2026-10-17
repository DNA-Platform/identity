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

## Where things stand

- **Next:** his approval of R1 to R5, then `/ce-plan`. Profiling probes live in the scratchpad and touch no file of the binder.

# Hydration

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **source:** [hydration.ts](../../package/src/implementation/hydration.ts) · [chemical.ts (persist)](../../package/src/abstraction/chemical.ts) · [atom.ts](../../package/src/abstraction/atom.ts)

---

Persistence is a flag and a name: set `persist = true` and a `$pid`, and a chemical's committed writes remember themselves; a fresh page recalls them. **There has to be a pid — no way around it** (Doug's law). An `$Atom` gets both free — the class is its pid, keyless. The feature wears the name **persistence**; the hydration cache is the mechanism underneath.

## The store

One map, read whole and eagerly at module load so persisted things can be the first referents; localStorage-backed today, shaped for a server one day, consumers indifferent. Records hold **primitives only** (null, string, number, boolean) — the formation is the backing's census plus the template's bonds, accessor/backing twins de-duplicated, underscore-backed pairs skipped. What survives is state, never live chemicals; structure re-forms from writing and code.

## The write path

The one activated setter every reactive write commits through carries the alert, beside `diffuse`: a committed write on a persistent chemical enrolls it and schedules a microtask flush. The hot path reads the raw backing field — nothing allocated when the answer is no; measured ~4.4M reactive writes/sec non-persistent, full persistence at 1.22× (`bench/hydration.bench.ts`).

## The recall seats, and their laws

Recall happens at four seats, one law across all: **recall completes before the first remember** — the `recalling` latch means nothing remembers while a recall writes, so a recall can never corrupt what it reads.

- **The atom's constructor** — a formed atom's re-construction reactivates and latches (`$reinit$`) so derived field initializers re-running on the template cannot clobber recalled state.
- **The post-bond seat** — a bond-built chemical whose bond named its pid is overwritten once, under the `$formed$` mark.
- **The derive seat** — every drawn face of a persistent chemical recalls itself at `$lift`, under the rendering guard.
- **The bare flag** — the first `persist = true` on an unformed chemical forms it and overwrites from the record before `changed` can flush defaults over it, under the rendering guard: recall is setup, not news. A **formed** chemical toggling persist back on snapshots its live state instead — deliberately opposite, because there the live state is the truth.

**Recall is setup and not news — of the fields, and never of the page.** A recall under the rendering guard lands before the view is drawn, so the first drawing is already the remembered one and nothing needs waking. *That holds only where the first drawing reaches the page.* **A prerendered page does not draw at all**: React adopts the markup the server wrote and never writes the client's properties over it, so a chemical that recalled while hydrating holds what it remembered and shows what the server drew — permanently, until something unrelated redraws it. *Measured 2026-09-16: a painting returned to its chemical on every reload, one more stroke appending to the two it already held, while the page showed the plate as it shipped.*

**So the bare flag asks to be drawn once it is mounted, and only if it recalled something.** `overwrite` answers whether it wrote anything, and the seat sets `$recall$` when it did; `$lift` already keeps that seat, clears it at mount, and follows it with `react()`. *It went unused here because the lift asks the **template** whether a chemical is persistent, and a chemical that enrols itself in its own bond constructor does so on the derivative, long after the lift has decided.* **A chemical whose recall changes TEXT rather than a property is still unrepaired** — the hydrating path draws the server's defaults first and this one does not, which React checks for text and not for attributes.

`persist = false` is an act: the record clears, the chemical demotes to ordinary, later writes stay unstored. Toggling back on re-enrolls with an immediate snapshot.

## Propagation — the persistence has events

On flush, every live chemical sharing the pid is overwritten from the record and its reaction fires, the latch preventing echo. **Shared pids are a feature, not a collision**: one pid, one record, many live faces converging — joint syncing. This is also persistence's repaint path, and the demo lesson worth keeping: `diffuse` walks parents, so a cross-chemical read repaints nobody an orphan writes — **every persistent part wears its own face**, and the flush repaints the family. One truth worn many ways is the looks pattern composed with persistence: mount the same chemical under different looks and every face follows every act.

## The door

`$(pid)` answers the live chemical enrolled under that pid — `hydration.recollect`, dead refs pruned — checked before the HTML tag catalogue; an implausible tag answers `undefined` rather than an invented component. Name pids like names, not like tags.

# Sprint 42 — Natural Perspectival Polymorphism

> **Synopsis.** Sprint 41 gave a chemical its *sibling* lenses — many augmented `view`s filed on a base, picked from a menu (the **horizontal** axis). This sprint adds the orthogonal **vertical** axis: walk a live instance up and down its own prototype chain to render it through any ancestor's `view`, and so **revert to its base view**. Three moves: perspective machinery migrates from `$Chemical` to `$Particle` (chemical still inherits it); an internal `$view` is the single write-point for the active view function; a **separate** `look('up' | 'down')` verb walks the chain via a `#private` cursor and sets `$view`. (`look` is kept distinct from sprint-41's `change` — `change` is the horizontal sibling-menu axis, `look` is the vertical own-ancestry axis.) Natural perspectival polymorphism — one object, seen at any altitude of its own inheritance.

## The idea — two orthogonal axes of perspective

- **Horizontal (sprint 41, unchanged).** Sibling subclasses of a base each override `view`. `reveal` (called from the subclass ctor) pops that view onto a `Perspective` and files it on the base's static `$perspectives$`. Reading `get perspectives` clones each lens, binds the live instance (`instance = this`), caches per-instance in a `WeakMap`; a menu picks among them. Augmented from outside — the `$` membrane made dynamic.
- **Vertical (this sprint, new).** An instance's *own* class is a prototype chain — `$ColorHex → $Color → $Chemical`. Each ancestor carries a `view`. Walking **up** renders the instance through a more general lens (ultimately the base view — *revert to base*); walking **down** returns toward the specific. Single inheritance ⇒ one parent per step ⇒ unambiguous. This walks the instance's *ancestry*, which is orthogonal to the sibling lenses on the horizontal axis. The two compose.

## Code plan — two phases, hard gate between them

### Phase 1 — The move (do first; must be green before Phase 2)

1. **Move perspective machinery `$Chemical` → `$Particle`.** Migrate `reveal`, `get perspectives`, the `perspectiveCache` WeakMap, and the `Perspective` import + `$perspectives$`/`$isPerspective$` usage from `chemical.ts` into `particle.ts`. `$Chemical extends $Particle` inherits it unchanged — so the machinery (and, in Phase 2, `change`) lives at the base. `view()`, `[$viewCache$]`, `$show`/`$hide` already live on `$Particle`; perspective is a view concern and belongs where views live. Verify `$Atom`, `$Html`, `$Function`, `$Include`, and `Chemistry` are unaffected.
2. **Leave the sprint-41 `$Chemical` perspective tests exactly as they are.** They now serve as the regression that proves `$Chemical` still gets the machinery *by inheritance*. Do not move or rewrite them.
3. **Add new `$Particle`-level tests.** Prove the machinery works directly on a plain `$Particle` subclass (not `$Chemical`): reveal-from-ctor, bound render reaching a protected member, `default`, per-instance bind + cache, transitive reveal. This is what proves the move is real and `$Chemical`-independent.
4. **App unchanged — stays at `$Chemical`.** No Lab edits in Phase 1; the examples keep working through inheritance.
5. **Gate: typecheck + full package suite green** (chemical tests *and* the new particle tests). Stop and confirm before Phase 2.

### Phase 2 — The new surface (only after Phase 1 is green)

6. **Spike 0 — pin the `$view` backing.** Doug's phrasing: `$view` gets and sets from `this.view.view`. Pin *exactly* what that backing is — `$view` is the active view **function**, threaded through the lens/level the instance currently renders through — against the real render path and `[$viewCache$]`. Confirm with Doug; write it down *before* code. — *Cathy, ~20 min*
7. **Add the internal `$view` active-view mechanism on `$Particle`.** The single write-point for "which view function this instance renders through" (Doug's `this.view.view`). The render path consults it (defaulting to the instance's own-class `view`); a change invalidates `[$viewCache$]`. Kept **internal** — `look` is the public surface.
8. **Add `look('up' | 'down')` — a separate verb (NOT a `change` overload).** A `#private` cursor tracks the current level in the instance's prototype chain (start = the instance's actual class). `look('up')` walks toward base and sets `$view`; **no-op when there's no more-general view above** — bottoms out at the highest *user* class that defines a `view`, before the framework's `$Chemical.view`. `look('down')` walks toward the specific; **no-op when already at the original instance's actual class.** `change(name)` from sprint 41 is untouched (the horizontal menu axis); `look` is the vertical ancestry axis. **Spike-0 pins the exact "no view above" predicate against the prototype walk.**
9. **App — a THIRD example, `perspectives-look`.** New `app/src/sections/perspectives-look/case-1.tsx` + `faces.tsx`; add a third `<CaseShell>` to `perspectives-section.tsx` and bump `sectionData.cases` 2→3 (no `index.ts`/`catalogue.ts` change). The demo: an element inheritance chain — `$Element` (symbol tile) → `$NamedElement` (+ name) → `$PeriodicCell` (full group-colored cell) — a live `$PeriodicCell` instance, and an inspector with ▲/▼ buttons calling `instance.look('up'/'down')` inside handlers (tracked scope → repaints), plus a `PeriodicCell ▸ NamedElement ▸ Element` breadcrumb. Uses **no `reveal`, no menu** — pure inheritance walked by `look` — so it reads as the clear vertical counterpart to One Color's horizontal menu.
10. **Docs.** `10-perspectives.md` (both axes: `change`/horizontal + `look`/vertical) + the particle chapter.

## Test plan — *Queenie*

- `change('up')` renders the live instance through the **parent** lens (observable: output equals the base view).
- Repeated `'up'` **clamps at base** — reverts fully, never walks off the chain.
- `'down'` returns to the specific view; **up-then-down round-trips** to the same render.
- `$view` getter returns the active function; setter swaps the rendered output; a `$view` change **inside a tracked scope repaints** (the named sprint-41 edge).
- **Regression:** the machinery still works *through* `$Chemical` after the move — sprint-41's 8 perspective tests stay green.
- A non-chemical `$Particle` subclass receives the machinery without breaking.

## App example plan — *Phillip · Gabby*

- Extend the `· Perspectives` Lab page with an **up/down control** (▲ toward base / ▼ toward specific) on a chemical with a real ancestry (e.g. `$ColorHex → $Color`), showing **revert to base view** live, plus a breadcrumb of the cursor's current level. One living instance walked up and down its own lens-ancestry. Sources pristine; styling hidden (the sprint-41 discipline).

## Documentation plan — *Cathy (body) · Libby (bookkeeping)*

- Write the **owed `10-perspectives.md`** in the composition book — now covering *both* axes: horizontal augmentation (sprint 41) and vertical polymorphism with `$view` / `change` (this sprint).
- Update the **particle** implementation chapter (`01-particle.md`) for the moved machinery and the new `$view` property.
- **Capture the evolution** (Doug's directive): this plan is the settled record; the chapter records the design as it lands. One-way code links, no `///:`.

## Checklist

**Phase 1 — the move (gate)** ✅
- [x] Machinery moved to `$Particle`; `$Chemical` inherits — *Cathy*
- [x] Sprint-41 chemical perspective tests left intact, pristine & green — *Queenie*
- [x] New `$Particle`-level perspective tests added & green — *Cathy · Queenie*
- [x] App untouched, still works through inheritance (0 fail / 0 error, puppeteer) — *Phillip*
- [x] Full suite green; tsc +0 vs the 9 pre-existing ← **gate met** — *Cathy*

**Phase 2 — the new surface** ✅ (docs remain)
- [x] Spike 0 — predicate pinned: own-property `$isViewBase$` marker on `$Particle`/`$Chemical` bottoms the walk at the highest user view — *Cathy*
- [x] Internal `$view` active-view mechanism + `[$renderView$]` render entry on `$Particle` — *Cathy*
- [x] `look('up'/'down')` + `viewLevel`/`canLook`; both clamps. **Cursor is symbol-keyed & SCOPE-TRACKED** (a `#private` field crashed on template derivatives; reactive cursor is what makes a once-mounted consumer repaint via the bonded-child diffuse walk — renders aren't scoped, only handlers are) — *Cathy*
- [x] Tests — both roots ($Particle + $Chemical); **a false-green test was caught & replaced with a once-mounted live reproduction** (fails pre-fix, passes post) — *Queenie*
- [x] Third Lab example `perspectives-look` — element-cell ▲/▼ "revert to base", no reveal/menu; **verified live in-browser** (cell→named→symbol→back, clamps grey the ends) — *Phillip · Gabby*
- [x] Docs — particle book `08-perspectives.md` (both axes) + implementation `01-particle.md`; glossary renumbered 08→09; particle cover written via the TOC tool — *Cathy · Libby*
- [x] Sprint catalogued in the chemistry **Projection cover** (entry 41) — added by hand: the TOC tool can't catalogue sprints (all sprint plans share basename `plan.md`, so its basename matching collides — it tried to overwrite Sprint 2) — *Arthur*

## Verified gates (2026-06-26)
- vitest **592 passed (53 files)** — 574 baseline + 18 look/particle tests
- tsc **+0 new errors** (still the 9 pre-existing; see [[project_tsc_debt]])
- `vite build app` clean; live `/perspectives` walk driven by puppeteer — tiers + clamps confirmed

## Process note

The design is settled at the structural level here, the moment it settled — per Arthur's correction and Cathy's sprint-41 lesson. The single unconfirmed detail (`$view`'s exact backing) is fenced behind **spike 0**, to be pinned and written before any code, never guessed.

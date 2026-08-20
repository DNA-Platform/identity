# Navigation for the Lab

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

Working notes. The Lab's navigation must carry two kinds of surface without pretending they are one:

- **Case sections** — the three-pane reading: sidebar catalogue, article frame, case shells with pass/fail criteria and source. The Lab's native mode; every mechanism demonstration lives here.
- **Full-page designs** — the SRT surfaces (Front Door, Book, Frontier, the wiki node) are *pages*, not cases. A full-page section takes the whole viewport: no sidebar, no article frame, its own internal navigation. The catalogue still lists it; the URL still routes it; entering it leaves the chrome behind, and a way back remains.

As built: a section module may declare `fullPage: true`; the Lab renders such a section bare — the component owns the viewport — while default sections keep the three-pane. Mobile follows the prototypes' responsive principle — *the thing stays, the about-the-thing collapses*: below a narrow breakpoint the sidebar collapses out of the flow, content takes the width, and full-page designs are mobile-first because they own their own layout. Within a full-page design, the same principle organizes the interior: the rendered content is *the thing* and stays on stage, while everything *about* it — the source editor, an implementation drawer — collapses behind chips in a control bar.

**Fallback-to-default — the invariant, learned the hard way.** A router must never be able to strand a reader. When that section was removed, `defaultSectionId` still named it, so the root URL dead-ended on a "Section not found" shell and browser-back landed nowhere. The fix was a rule, not a patch: the default is a real section, and *any* unknown section resolves to the default rather than to an error shell. No route in this app can dead-end. This is not error handling — it is the router keeping its one promise, that wherever a reader points themselves, they arrive somewhere real. It is the first navigation invariant this Lab commits to, and it precedes any design that adds routes.

## Open

- The way back from a full-page design — a floating return affordance (the `← The Lab` back-pill, as built) vs. browser-back; the pill exists, but its behaviour once designs nest is unsettled.
- Whether full-page designs get their own catalogue group so the sidebar reads as cases-then-designs. (Sprint 45 went the other way — one demo, one group — but the SRT surfaces will reopen this.)
- A mobile drawer for the case-mode sidebar, once a phone-sized reader actually needs the catalogue.

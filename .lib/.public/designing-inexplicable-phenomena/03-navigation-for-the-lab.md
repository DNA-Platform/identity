# Navigation for the Lab

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)

---

Working notes. The Lab's navigation must carry two kinds of surface without pretending they are one:

- **Case sections** — the three-pane reading: sidebar catalogue, article frame, case shells with pass/fail criteria and source. The Lab's native mode; every mechanism demonstration lives here.
- **Full-page designs** — the SRT surfaces (Front Door, Book, Frontier, the wiki node) are *pages*, not cases. A full-page section takes the whole viewport: no sidebar, no article frame, its own internal navigation. The catalogue still lists it; the URL still routes it; entering it leaves the chrome behind, and a way back remains.

As built: a section module may declare `fullPage: true`; the Lab renders such a section bare — the component owns the viewport — while default sections keep the three-pane. Mobile follows the prototypes' responsive principle — *the thing stays, the about-the-thing collapses*: below a narrow breakpoint the sidebar collapses out of the flow, content takes the width, and full-page designs are mobile-first because they own their own layout.

## Open

- The way back from a full-page design (a floating return affordance vs. browser-back only).
- Whether full-page designs get their own catalogue group so the sidebar reads as cases-then-designs.
- A mobile drawer for the case-mode sidebar, once a phone-sized reader actually needs the catalogue.

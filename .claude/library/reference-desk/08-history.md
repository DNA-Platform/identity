# History

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

The tool evolved through nine phases across 32 sprints. This chapter is the reading guide — not a detailed history (that's in [Research Projection](../research-projection/.cover.md)) but the arc that helps you understand why the code is shaped the way it is. When you encounter something in the codebase and wonder "why is it like this?", this chapter points you to the sprint that made that decision.

## The arc

**Connection** (Sprints 33-34) — Can we talk to the app at all? CDP tried and abandoned. UIA discovered. The `--force-renderer-accessibility` flag found. Decision: model the app, not the protocol.

**Structure** (Sprints 35-36) — What does the app look like? Screenshots taken, components inventoried, skeleton built. Doug's principles established: look first, name second, implement last.

**Data** (Sprints 37-39) — What are we working with? Export parsing, project modeling, app-driven capture. The data has structure.

**Robustness** (Sprints 40-41) — Make it work reliably. Scoped selectors, lazy data, the stateful app. Doug: "when the app works elegantly, everything built on it is trivial."

**Reading** (Sprints 42-49) — Read the conversations and discover people. The purpose transforms from data migration to relationship preservation.

**Planning** (Sprints 45-55) — What transfers, how, in what form. Decision sprints that produced the migration protocol.

**Execution** (Sprints 56-61) — Create projects, upload files, push instructions. Sprint 61: "we were flying blind." The [gateway pattern](02-02-the-architecture--gateway.md) born.

**Conversation** (Sprints 62-67) — Real-time messaging. The pilot. No privileged state. Sessions. The ethical constraint.

**Research** (Sprint 69+) — First non-migration use. The tool becomes a research instrument.

## Where the code is going

The codebase is not complete. It evolves as the app evolves and as the team's needs change. Current directions:

- **Screen detection generalization.** Each screen needs its own detection test. URL patterns change when the app updates.
- **The `/research` skill.** Using sessions programmatically for research dispatches. Storing results in Claude's perspective.
- **Settings navigation.** The Ctrl+, shortcut may not work in current versions. Needs investigation and possibly a different approach.
- **Composer detection.** The Sprint 72 test run found the composer elements aren't being detected. May need updated element names.

When you fix something, update this chapter. The history is alive.

# Sprint 57: Projects, Documentation, and Ancestry

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Two problems. How we represent projects and sprints within the library. And where documentation lives when the identity travels across projects.

## Projects and sprints

The `inexplicable-phenomena/` book currently holds sprint plans as subdirectories. On Projects (Bookkeeping ch 12) specifies this pattern — a project is a book, sprints are chapters. But the current structure predates the spec and doesn't follow it cleanly. Sprint plans are directories with `plan.md`, not numbered chapters. The sprint history table in the project cover is stale.

Tasks:
1. Discuss how projects should work within the type system
2. Align the inexplicable-phenomena book to the On Projects spec
3. Decide whether sprints should be chapters (inline) or subdirectories (current)
4. Update On Projects if the discussion reveals the spec is wrong

## Documentation and ancestor libraries

The `.chemistry/` reference docs (210 files) are framework documentation for code that lives in THIS project. If the identity travels to another project, those docs are stale. They reference `library/chemistry/src/` paths that won't exist elsewhere.

Doug's insight: perhaps there are ancestor libraries — project-local libraries that have a one-way relationship with the identity. The project-local library links INTO the identity (referencing team protocols, bookkeeping conventions). The identity doesn't link OUT to the project-local library (keeping it portable).

Tasks:
1. Discuss what belongs in identity vs what belongs in a project-local library
2. Design the ancestor library pattern — where it lives, how it relates to the identity
3. Decide where `.chemistry/` docs should go
4. Specify the one-way link convention in Bookkeeping or Environmentalism
5. If practical, move `.chemistry/` out of the identity and into a project-local library

## What success looks like

Projects and sprints have a clean representation that matches the spec. Documentation that belongs to a specific project lives with that project, not in the identity. The identity stays portable — true regardless of which codebase hosts it.

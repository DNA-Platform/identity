# Specimens

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

`[SCAFFOLD]` — Lab specimens that bridge testing and demonstration. Each specimen is a running example that cross-links to unit tests. The Lab is witness; the test suite is guarantee.

The `tests/specimens/` directory holds shared fixtures imported by both the test suite and the Lab app. This means the same chemical declarations power both automated assertions and interactive demos — single source of truth.

When a Lab specimen is built, it should:
- Import its fixture from `tests/specimens/`
- Render it with demo, source, and test-note panels
- Cross-link to the `it(...)` block that pins the same behavior

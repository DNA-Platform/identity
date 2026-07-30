# Organization

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

48 test files organized into 7 directories at `library/chemistry/tests/`.

## Directory structure

### `abstraction/` — Framework primitives

Tests for the core classes in isolation, without React rendering. Particle construction, chemical class behavior, molecule bond graphs, atom singletons, particularization, render filters, lexical scoping, lifecycle phases, async construction.

Key files: `particle.test.ts`, `chemical.test.ts`, `molecule.test.ts`, `atom.test.tsx`, `particularization.test.ts`, `render-filters.test.ts`, `lexical-scoping.test.ts`, `lifecycle.test.ts`, `async-construction.test.ts`.

### `react/` — Integration with React

The largest directory. Tests that render chemicals into a React tree and verify the integration surface: augmentation, scope tracking, prop handling, method binding, state persistence, synthesis, bond constructor composition and re-rendering, identity stability, rendering safety.

Key files: `augmentation.test.tsx`, `scope-tracking.test.tsx`, `synthesis-bond-ctor.test.tsx`, `bond-ctor-composition.test.tsx`, `bond-ctor-rerender.test.tsx`, `method-binding.test.tsx`, `state-persistence.test.tsx`, `identity.test.tsx`, `rendering-safety.test.tsx`.

### `implementation/` — Internal machinery

Tests for implementation details: the catalogue system, promise/await cancellation, reflection machinery, symbolize serialization, tree walking.

Key files: `catalogue.test.ts`, `promise.test.ts`, `reflection.test.ts`, `symbolize-audit.test.ts`, `walk.test.tsx`.

### `regression/` — Bug fixes pinned

Each file pins a specific bug that was found and fixed. The test name describes the bug; the assertion prevents recurrence.

Key files: `short-prop-name.test.tsx` (sprint 24), `bond-behavior.test.tsx`.

### `specimens/` — Shared fixtures

Reusable chemical declarations imported by both tests and the Lab app. Single source of truth — the same fixture powers tests *and* interactive demos.

### `spikes/` — Exploratory tests

One-off investigations. `sp1-prototype-mutation.test.tsx` explored the particularization design space.

### `env/` — Environment baseline

`pure-react.test.tsx` — confirms plain React rendering works before any $Chemistry machinery loads. Catches environment-level failures.

## Naming conventions

- Test files end in `.test.ts` or `.test.tsx` (TSX when rendering is involved).
- Describe blocks name the feature or class under test.
- `it(...)` blocks name the specific behavior being pinned.
- Regression tests name the bug, not the feature: `short-prop-name` not `reactivity-edge-case`.

# The Epistemic Model

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

How we *know* $Chemistry works. The framework's behavior is not knowable by reading source; it must be confirmed.

Three confirmation surfaces, each with a different epistemic role:

| Surface | What it confirms | Where it lives |
|---|---|---|
| [The Lab](02-the-lab.md) | Interactive truths — surfaces the reader can poke and watch. | `library/chemistry/app/` |
| [The test suite](03-the-test-suite.md) | Invariants — assertions that pin behavior across changes. | `library/chemistry/tests/` (428 tests) |
| [Caveats](04-caveats.md) | Negative epistemology — things we *thought* worked and didn't. | Resolved bugs and their resolutions |
| [Open questions](05-open-questions.md) | Things we don't yet know. | Provisional behaviors under investigation |

The Lab and the test suite are *positive* epistemology: they assert truth. Caveats are *negative*: they document past misconceptions. Open questions are *unresolved*: they list what's unknown.

A claim about $Chemistry's behavior is only as strong as the surface that confirms it. A behavior with no Lab specimen, no unit test, and no caveat is *speculation* — read source carefully before relying on it.

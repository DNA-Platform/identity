# The prop that emptied the shelf

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** framework · demo · rebind
- **sprint:** [The Subject](../projection/09-the-subject.md)

---

## Symptoms

- The shelf rendered with **no member spines and no written entries** — the furniture drew, the books were gone.
- The change that caused it looked innocent: the page switcher went from rendering `<S />` to rendering `<S travel={...} />` — one prop, on the same singleton instance.
- No error anywhere. The membership (`$cards`, set from outside after the catalogue was built) was simply empty.

## What did not work

- **Blaming the module graph.** A fresh server reproduced it exactly.

## The mechanism — observed, and flagged rather than fully proven

Props reach a chemical through the membrane: a `travel` prop binds the `$travel` backing. **Passing a prop to an instance that was already built appears to re-run binding over it** — and members that were assigned from outside after construction (`$cards`, pointed cards) did not survive. The precise path inside the framework was not traced to a line; what is proven is the sequence: prop absent, membership present; prop present, membership empty; prop removed, membership back.

**Flagged for the framework:** whether prop-binding on an already-bound instance should preserve, replace, or forbid externally-assigned backings is a real design question, and today's answer is silent.

## The fix

Do not pass props to a bound singleton whose members were assigned after construction. The page switcher wires callbacks through module slots assigned once (`shelf.$travel = …`) instead of through props, and the instance keeps everything it was given.

## The lesson

**There are two ways into a chemical — construction and assignment — and props belong to construction.** A singleton that accumulates state after it is built must be rendered bare. If a rendered instance needs per-render data, that data should arrive by assignment before render or belong to a child built for it.

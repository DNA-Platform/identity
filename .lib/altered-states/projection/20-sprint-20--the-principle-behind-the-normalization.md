# Sprint 20 — The principle behind the normalization

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **status:** `active` (2026-10-29), a research sprint. No part is complete. See [Where things stand](#where-things-stand).

---

Find the principle from which the sinusoidal normalization follows: a factorization of a signal into a phase and a
periodic function, chosen by a principle rather than built to match the sort, with the sort coming out of it as a
theorem. Only then is the sinusoidal normalization report rewritten. The work is in
[`library/theory/`](../../theory/.cover.md), recorded in the research notes,
[`notes.md`](../../theory/sinusoidal-normalization-research/notes.md), whose
[rules](../../theory/sinusoidal-normalization-research/notes.md#rules-for-the-derivation-read-before-any-attempt-doug-2026-10-29)
come first.

## How this sprint works: progress, not success

Doug, 2026-10-29: *"Stop thinking you can solve it every turn. Why not add the idea of making progress. You fail
because you always think you have succeeded. You can't. You don't. Don't lie to yourself. Come up with a research plan
to figure it out across turns. Build a sprint. Split it into parts. Identify the essential problems."*

The day before this sprint, every turn presented a renamed share of time as the answer, and every next turn repaired
it. So:
- A turn works on one part and reports what moved, what did not, and what was learned, failures included. It ends with
  the problem open unless Doug says otherwise.
- Nothing is called "the derivation", "exact factorization" or "solved" until its part's gate is passed, and the gate
  is Doug's.
- Every idea is checked against the rules and the list of rejected routes in the notes **before** it is said.
- Every result is tagged exact, measured, interpretation or assumed, and written into the notes in the same turn.

## The rulings, verbatim

- **The problem** (2026-10-29). *"Technically, the problem is that we want to recursively factorize the amplitude of
  the analytic signal written as a(t)cos(phi(t)) and we need to project that from an all positive thing to something
  that itself has a hilbert transform that lends itself to such a thing. I think we want a definition of phase that
  captures the essence of the signal, so that it can be reinterpreted as a sinusoid in a lossless fashion."* Then:
  *"The transform needs to be invertible."* *"It needs to be instantaneous."*
- **The motivation is a re-encoding, not the Hilbert transform.** *"If we capture the essence of the function in phase
  relative to a periodic function, we can change the periodic function without loss of information. The change is
  inveritble if the transition between the periodic functions is. The invertibility proves that this is a reencoding
  of the same function. Presumably it is optimal for machine learning in some way because the sine wave traces the
  circle so its a projection of the signal that has a uniform amplitude per phase ... Keep reachign for the meaning.
  No, the meaning is not specific to the hilbert transform. That is how I discovered the need."*
- **The need appeared here.** *"the need literally showed up here, in this project too! We needed to reinterpret the
  caiman and suite2p as the same sort of oscillating wave, and normalizing them both relative to the sine wave works
  well."*
- **His reading of the object.** *"we just need a factorization into periodic function ( phase (t) ) for a signal, and
  find the unique one that at least the periodic function is one to one with the sine wave, and the normalizaiton is
  just replacing them ... And then sigma is the thing that maps p to cos with phi in there."*
- **By principle.** *"If you can't find this factorization by principle, you haven't found it. This is just making a
  bad object and saying - hey! we matched sort to a bad object!"*
- **The sort is a reveal.** *"the switch from some sort of continuous thing to sort needs to be elegant and surprising.
  It needs to not be some weird definition that is the continuous version of sort."*
- **The register.** *"Formalization is worthless without intuition."* *"You need to find the middle ground that
  explains something while being formal."* *"Just because its citable doesn't mean its been read. You have to
  explain it."*
- **The report waits.** *"Don't write the sinusoidal normalization report until you can write something here that I
  think isn't gibberish please."*
- **The structure** (Round 4). *"Assumptions; Closed Form (differential is cool) derived from assumptions; Sort Form -
  computational approximation. All three need to be beautiful."*

## What to read first

- [The rules for the derivation](../../theory/sinusoidal-normalization-research/notes.md#rules-for-the-derivation-read-before-any-attempt-doug-2026-10-29):
  the problem, the rule against building from the share, and every route already tried. Read before every turn.
- The research document,
  [`main.tex`](../../theory/sinusoidal-normalization-research/main.tex):
  - section 2, for thm:unique, "One sinusoid is enough", thm:projection and cor:idempotent: the exact facts any
    principle must reproduce;
  - "On a sample", for eq:sort and prop:grid: the sort and the cosine it fixes;
  - "In the frequency domain", for why spectral criteria fail invertibility;
  - "A family, and why the sine": every target shape gives a normalization, so the sine must be argued for;
  - "Factoring a signal": the Hilbert recursion where the need appeared.
- The notes' Round 4, "What Doug set" and "Open, for Doug": the standard, the images he offered, and the open item on
  the time measure.
- The notes from "The symmetric wave, and the phase form" (2026-10-27) to the end: the phase line of this week, with
  its corrections.
- [`problem.pdf`](../../theory/sinusoidal-normalization-research/problem.pdf): the closed form by signal space.
- Outside the library, read for this sprint (Part 3):
  - Laughlin 1981, the equalized code;
  - Hardy, Littlewood and Polya, *Inequalities*, chapter 10, on rearrangements;
  - the literature on canonical forms under monotone maps (ranks, copulas, quantile normalization, Gaussianization):
    how each field justifies its choice of target.

## The essential problems

Each is a question that has to be answered, by a principle, before the derivation exists. What is already known is
listed as a constraint, never as an answer.

1. **The domain.** On what does the normalization act, and what is "time" there? Its main use is a neuron's
   responses to images shown in random order: a set of values with no time order. The phase line was built on signals
   in time. One principle has to cover both, or the two uses have to be separated honestly.
2. **The measure.** The sort counts distinct values, never how often or how long. A principle stated in durations
   gives the sort only under even sampling without ties. What measure does the principle use, and where does the
   deduplication come from? (Round 4, open item 1.)
3. **The freedom.** Instantaneous and invertible leave exactly one free choice: which representative of the signal's
   orbit under increasing maps to output, equivalently the output's histogram, equivalently the trade between p and
   phi. State this freedom exactly, with no share in it. (A draft exists: notes, "What the entropy of the phase gives",
   item 1. Not yet read by Doug.)
4. **The selection.** The principle that picks one representative of each orbit, stated without the distribution of
   f's values. For a set of values with no time, any criterion on the output can only see its histogram, so there the
   principle must say which histogram, and why. For signals in time, the spectral criteria are known to fail
   invertibility.
5. **Why the sine.** Every target shape gives a normalization (sec:family). The candidates so far: sinusoids fixed;
   the circle ("the sine wave traces the circle"; "uniform amplitude per phase"); a pure oscillation passing unchanged
   (Round 4, exact item 8). What forces the sine, and from what?
6. **The reveal.** The sort has to come out of the principle as a theorem on finite sets, elegant and surprising, not
   as the continuous object discretized.
7. **The meaning.** What the principle says about representation and learning ("presumably optimal for machine
   learning in some way"), as a precise claim with a proof, or an honest "open".
8. **The exposition.** The middle ground: formal, with intuition from established mathematics, explained.

**Constraints any answer must reproduce** (exact, already proved): it fixes sinusoids, removes every strictly
increasing distortion, is bounded on [-1, 1], acts pointwise on values, gives equal values one level, equals the sort
on a sample, and is -cos(pi P) in the continuum for evenly sampled signals without plateaus.

## The parts

| part | problems | deliverable | gate |
|---|---|---|---|
| 1. The setting | 1, 2 | the objects the normalization acts on and the measure on their values, one page | Doug agrees |
| 2. The freedom | 3 | the lemma that instantaneous and invertible leave one choice, with proof, in one notation | Doug agrees |
| 3. The principle | 4, 5 | a table of candidate principles, each tested against the rules (stated without the share? forces the sine? works with no time? yields the sort?), from the literature and from Doug | Doug picks one, or the null is recorded |
| 4. The closed form | 4 | the formula and its differential form, derived from the chosen principle | checked in `check.py`; Doug agrees |
| 5. The sort | 6 | the sort as a theorem on finite sets | Doug finds it elegant and surprising |
| 6. The meaning | 7 | a precise claim about representation and learning, proved, or recorded as open | Doug agrees |
| 7. The explanation, then the report | 8 | the explanation in chat; then the rewrite of the sinusoidal normalization report | *"not gibberish"*, then the report |

Parts 1 and 2 can be argued now. Part 3 needs reading first. Parts 4 to 7 wait on Part 3, and Part 3 is allowed to
end without a principle.

## Where things stand

- **Complete:** nothing.
- **In progress:**
  - Part 2 has a draft in the notes ("What the entropy of the phase gives", item 1) that Doug has not read as a Part 2
    deliverable.
  - Part 6 has an interpretation only (notes, "Why that phase is the essence", 2026-10-29), with no proof.
- **Not started:** Parts 1, 3, 4, 5 and 7.
- **Verified with numbers, for reference** (`explorations.py`):
  - the sort equals cos phi for phases with equal time at every angle (5.6e-6);
  - the time statement fails on a C^1 wave with a flat top (0.708);
  - Chebyshev means vanish exactly for sine-valued signals and not otherwise (`chebyshev_means`).
  These are facts about the object, not a principle.
- **Wrong turns already tried:** the list in the notes' rules, item 7. Do not retry them.

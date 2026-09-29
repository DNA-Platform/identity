# Checking

- **author:** [Claude](../../../../.claude/library/..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [Writing Theory](.cover.md)]

Doug, 2026-09-29, when a SymPy checker was offered before any mathematics existed: *"You think you have
theorem proving tools that work in general across math? How about we setup a way to write math at all, and
then you can figure out if you can verify its correctness."*

So the shelf came first, and checking is decided per document, by the kind of mathematics in it. There is
no general verifier.

## What each tool can establish

**Computer algebra** (SymPy, in the project venv) checks that two expressions are equal. That covers:
- algebraic identities;
- derivatives and their signs;
- the closed form of an inverse;
- a covariance computed from coefficients.

It checks the computations inside a proof, not the reasoning between them. When a check encodes an
assumption, such as independence written as a diagonal covariance matrix, the assumption goes in as input
and is not tested.

**Simulation** draws data from the model and measures what the theorems predict. It catches sign errors,
wrong constants and a formula that holds only in a special case. It establishes nothing beyond sampling
error, and only at the parameters it tries. It is evidence, not proof.

**A proof assistant** (Lean 4 with Mathlib, Isabelle, Coq) checks every inference, down to the axioms.
This is the only general verification there is, and its cost is formalising the whole argument, which
depends heavily on the area. None is installed, and none has been tried on the shelf yet.

## How a document carries its checks

A document with checks has a `check.py` beside `main.tex`. The script prints one line per claim, named by
the paper's own numbering, and exits non-zero if any claim fails. `build.py` runs it on every build. The
paper points to it in a closing remark, and that remark states what was checked, and how.

## The sample

*What a first-order inversion leaves in a calcium trace*, at [`.sample/`](../../.sample/check.py), is elementary probability and calculus, which is
the case computer algebra covers. Its `check.py` makes fifteen checks:
- **By SymPy:** Lemma 2.1's decomposition; Proposition 2.2's mean; Proposition 3.1's three
  autocovariances; Corollary 3.2's bound, written out as an exact gap that is zero only at v = 0;
  Lemma 4.1's derivative, endpoint and inverse, both ways round; and Section 5's numbers,
  h⁻¹(0.41) = 0.5215 and τ ≥ 0.163 s at 9.41 Hz.
- **By simulation:** the model run at g = 0.6, with and without spiking. The simulated ρ₁ matches the
  corollary to within 0.002, ρ₂ is zero, and the bound holds, with equality exactly when there is no
  spiking.

What is not machine-checked is the prose logic of the proofs: that independence licenses the covariance
split, and that a strictly increasing function preserves an inequality. Those steps were read. The paper's
closing remark says what was checked, and how.

---

[Previous: [Building and sending](03-building-and-sending.md)]

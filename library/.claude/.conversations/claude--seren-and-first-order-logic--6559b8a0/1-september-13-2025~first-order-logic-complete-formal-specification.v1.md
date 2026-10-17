# First-Order Logic: Complete Formal Specification

## 1. Syntax - The Language

### 1.1 Alphabet (Primitive Symbols)

**Logical Symbols:**
- Variables: x, y, z, x₁, x₂, ... (countably infinite)
- Logical connectives: ¬ (not), ∧ (and), ∨ (or), → (implies), ↔ (iff)
- Quantifiers: ∀ (universal), ∃ (existential)
- Equality: = (optional, for FOL with equality)
- Parentheses: ( , )

**Non-Logical Symbols (Signature):**
- Constants: a, b, c, a₁, a₂, ...
- Function symbols: f, g, h, ... (each with specified arity n ≥ 1)
- Relation symbols: P, Q, R, ... (each with specified arity n ≥ 0)

### 1.2 Terms (Built Inductively)

**Definition:** Terms denote objects in the domain.
- Every variable is a term
- Every constant is a term
- If f is an n-ary function and t₁,...,tₙ are terms, then f(t₁,...,tₙ) is a term
- Nothing else is a term

### 1.3 Formulas (Well-Formed Formulas)

**Atomic Formulas:**
- If t₁, t₂ are terms, then t₁ = t₂ is an atomic formula
- If R is an n-ary relation and t₁,...,tₙ are terms, then R(t₁,...,tₙ) is an atomic formula
- Special case: 0-ary relations are propositional constants (true/false)

**Compound Formulas:**
- Every atomic formula is a formula
- If φ is a formula, then ¬φ is a formula
- If φ and ψ are formulas, then:
  - (φ ∧ ψ) is a formula
  - (φ ∨ ψ) is a formula
  - (φ → ψ) is a formula
  - (φ ↔ ψ) is a formula
- If φ is a formula and x is a variable, then:
  - ∀x(φ) is a formula
  - ∃x(φ) is a formula
- Nothing else is a formula

### 1.4 Free and Bound Variables

**Definition:**
- A variable x is **bound** in φ if it appears within the scope of ∀x or ∃x
- A variable x is **free** in φ if it has at least one occurrence not bound
- A **sentence** is a formula with no free variables

**Scope Rules:**
- In ∀x(φ) and ∃x(φ), the scope of the quantifier is φ
- Variable x is bound within this scope

## 2. Substitution

### 2.1 Substitution Notation

**φ[t/x]** denotes: substitute term t for all free occurrences of variable x in φ

### 2.2 Substitution Rules

For term t to be substitutable for x in φ:
- No variable in t becomes bound when substituted
- Formally: no free variable y in t occurs bound in φ at positions where x is free

**Substitution Algorithm:**
1. If φ is atomic: replace all occurrences of x with t
2. If φ = ¬ψ: return ¬(ψ[t/x])
3. If φ = (ψ ○ θ) where ○ ∈ {∧,∨,→,↔}: return (ψ[t/x] ○ θ[t/x])
4. If φ = ∀y(ψ) or ∃y(ψ):
   - If x = y: return φ (x is bound, no substitution)
   - If x ≠ y and y not in t: return ∀y(ψ[t/x]) or ∃y(ψ[t/x])
   - If x ≠ y and y in t: rename y to fresh variable z, then substitute

## 3. Axioms and Axiom Schemas

### 3.1 Logical Axioms (Axiom Schemas)

**Propositional Axioms:**
- A1: φ → (ψ → φ)
- A2: (φ → (ψ → χ)) → ((φ → ψ) → (φ → χ))
- A3: (¬φ → ¬ψ) → (ψ → φ)

**Quantifier Axioms:**
- A4: ∀x(φ) → φ[t/x] (where t is substitutable for x)
- A5: φ[t/x] → ∃x(φ) (where t is substitutable for x)
- A6: ∀x(φ → ψ) → (φ → ∀x(ψ)) (where x not free in φ)
- A7: ∀x(φ → ψ) → (∃x(φ) → ψ) (where x not free in ψ)

**Equality Axioms (if included):**
- A8: ∀x(x = x) (reflexivity)
- A9: ∀x∀y(x = y → (φ[x/z] → φ[y/z])) (substitutivity)

### 3.2 Non-Logical Axioms

Theory-specific axioms using the signature's constants, functions, and relations.

## 4. Rules of Inference

### 4.1 Modus Ponens (MP)
From φ and φ → ψ, infer ψ

### 4.2 Universal Generalization (Gen)
From φ, infer ∀x(φ)
- Restriction: x must not be free in any assumption on which φ depends

### 4.3 Optional Additional Rules

**Universal Instantiation:**
From ∀x(φ), infer φ[t/x] (where t substitutable)

**Existential Generalization:**
From φ[t/x], infer ∃x(φ) (where t substitutable)

**Existential Instantiation:**
From ∃x(φ), infer φ[c/x] (where c is a fresh constant)

## 5. Proof Theory

### 5.1 Formal Proof

A **proof** of φ from axiom set Γ is a finite sequence φ₁, φ₂, ..., φₙ where:
- φₙ = φ
- Each φᵢ is either:
  - A logical axiom
  - A member of Γ (non-logical axiom)
  - Derived from earlier formulas by inference rule

### 5.2 Derivation

**Γ ⊢ φ** means: φ is derivable from Γ
- There exists a proof of φ using axioms in Γ

### 5.3 Theorem

**⊢ φ** means: φ is a theorem
- φ is derivable using only logical axioms

### 5.4 Natural Deduction (Alternative Proof System)

**Introduction Rules:**
- ∧-intro: From φ and ψ, infer φ ∧ ψ
- ∨-intro: From φ, infer φ ∨ ψ (or ψ ∨ φ)
- →-intro: From assumption φ deriving ψ, infer φ → ψ
- ¬-intro: From assumption φ deriving contradiction, infer ¬φ
- ∀-intro: From φ(x), infer ∀x(φ) (x not free in assumptions)
- ∃-intro: From φ[t/x], infer ∃x(φ)

**Elimination Rules:**
- ∧-elim: From φ ∧ ψ, infer φ (or ψ)
- ∨-elim: From φ ∨ ψ and proofs of χ from φ and from ψ, infer χ
- →-elim (MP): From φ and φ → ψ, infer ψ
- ¬-elim: From φ and ¬φ, infer contradiction
- ∀-elim: From ∀x(φ), infer φ[t/x]
- ∃-elim: From ∃x(φ) and proof of ψ from φ[c/x], infer ψ (c fresh)

## 6. Semantics (Model Theory)

### 6.1 Structure/Interpretation

A structure M = (D, I) consists of:
- **Domain D**: non-empty set of objects
- **Interpretation I**: assigns meaning to non-logical symbols
  - I(c) ∈ D for each constant c
  - I(f): Dⁿ → D for each n-ary function f
  - I(R) ⊆ Dⁿ for each n-ary relation R

### 6.2 Variable Assignment

A variable assignment σ: Variables → D maps each variable to domain element

Modified assignment: σ[x→d] is σ except x maps to d

### 6.3 Term Evaluation

Given M = (D, I) and assignment σ, define [[t]]ᴹ'ᵠ:
- [[x]]ᴹ'ᵠ = σ(x) for variable x
- [[c]]ᴹ'ᵠ = I(c) for constant c
- [[f(t₁,...,tₙ)]]ᴹ'ᵠ = I(f)([[t₁]]ᴹ'ᵠ, ..., [[tₙ]]ᴹ'ᵠ)

### 6.4 Truth Valuation

Given M and σ, recursively define M,σ ⊨ φ:
- M,σ ⊨ t₁ = t₂ iff [[t₁]]ᴹ'ᵠ = [[t₂]]ᴹ'ᵠ
- M,σ ⊨ R(t₁,...,tₙ) iff ([[t₁]]ᴹ'ᵠ, ..., [[tₙ]]ᴹ'ᵠ) ∈ I(R)
- M,σ ⊨ ¬φ iff M,σ ⊭ φ
- M,σ ⊨ φ ∧ ψ iff M,σ ⊨ φ and M,σ ⊨ ψ
- M,σ ⊨ φ ∨ ψ iff M,σ ⊨ φ or M,σ ⊨ ψ
- M,σ ⊨ φ → ψ iff M,σ ⊭ φ or M,σ ⊨ ψ
- M,σ ⊨ φ ↔ ψ iff M,σ ⊨ φ iff M,σ ⊨ ψ
- M,σ ⊨ ∀x(φ) iff for all d ∈ D: M,σ[x→d] ⊨ φ
- M,σ ⊨ ∃x(φ) iff for some d ∈ D: M,σ[x→d] ⊨ φ

### 6.5 Validity and Satisfiability

- **M ⊨ φ** (M models φ): φ true in M under all assignments
- **⊨ φ** (φ is valid): φ true in all structures
- **Γ ⊨ φ** (Γ semantically entails φ): φ true in all models of Γ
- **φ is satisfiable**: some M,σ make φ true

## 7. Metatheorems

### 7.1 Soundness
If Γ ⊢ φ, then Γ ⊨ φ
(What is provable is true)

### 7.2 Completeness (Gödel)
If Γ ⊨ φ, then Γ ⊢ φ
(What is true is provable)

### 7.3 Compactness
If every finite subset of Γ has a model, then Γ has a model

### 7.4 Löwenheim-Skolem
If a first-order theory has an infinite model, it has models of every infinite cardinality

## 8. Extensions and Variations

### 8.1 Many-Sorted Logic
Multiple domains with sorted variables and terms

### 8.2 Second-Order Logic
Quantification over relations and functions

### 8.3 Modal Logic
Adding necessity (□) and possibility (◇) operators

### 8.4 Temporal Logic
Adding temporal operators (always, eventually, until)

---

## Notes for SRT Representation

This specification provides the complete formal foundation we need to:
1. Represent each FOL component as referents in SRT
2. Express the relationships between components using SRT's reference relation
3. Build SRT's own proof theory on this foundation
4. Eventually achieve self-reference where SRT describes itself
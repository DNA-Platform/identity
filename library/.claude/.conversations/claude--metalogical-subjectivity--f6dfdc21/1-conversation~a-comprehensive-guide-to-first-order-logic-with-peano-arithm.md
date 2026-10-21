# A Comprehensive Guide to First-Order Logic

## 1. Introduction to First-Order Logic

First-order logic (FOL), also known as first-order predicate calculus or predicate logic, extends propositional logic to include predicates, functions, variables, and quantifiers. While propositional logic treats propositions as atomic units, first-order logic looks inside propositions to analyze their internal structure, allowing us to express much richer statements about domains of objects.

First-order logic provides the formal foundation for most mathematical theories, including set theory, number theory, and analysis. It serves as the standard formal language for mathematical proofs and forms the basis for many formal verification systems and automated theorem provers.

## 2. The Syntax of First-Order Logic

### 2.1 Alphabet

The alphabet of first-order logic includes:

1. **Logical symbols**:
   - Logical connectives: ¬, ∧, ∨, →, ↔ (same as in propositional logic)
   - Quantifiers: ∀ (universal quantifier), ∃ (existential quantifier)
   - Variables: x, y, z, ...
   - Equality symbol: = (in some presentations)
   - Parentheses and other punctuation: (, ), ,

2. **Non-logical symbols** (vary depending on the specific theory):
   - Constant symbols: a, b, c, ...
   - Function symbols: f, g, h, ... (each with a specified arity)
   - Predicate symbols: P, Q, R, ... (each with a specified arity)

### 2.2 Terms

Terms represent objects in the domain and are defined recursively:
1. Variables are terms
2. Constants are terms
3. If f is an n-ary function symbol and t₁, ..., tₙ are terms, then f(t₁, ..., tₙ) is a term

Examples of terms:
- x (a variable)
- c (a constant)
- f(x) (a function applied to a variable)
- g(x, f(y), c) (a complex term built from variables, constants, and functions)

### 2.3 Atomic Formulas

1. If P is an n-ary predicate symbol and t₁, ..., tₙ are terms, then P(t₁, ..., tₙ) is an atomic formula
2. If t₁ and t₂ are terms, then t₁ = t₂ is an atomic formula (if equality is included in the language)

### 2.4 Well-Formed Formulas (WFFs)

The set of well-formed formulas is defined recursively:
1. Every atomic formula is a formula
2. If φ is a formula, then ¬φ is a formula
3. If φ and ψ are formulas, then (φ ∧ ψ), (φ ∨ ψ), (φ → ψ), and (φ ↔ ψ) are formulas
4. If φ is a formula and x is a variable, then ∀x φ and ∃x φ are formulas

### 2.5 Free and Bound Variables

- A variable occurrence is **bound** if it is within the scope of a quantifier that quantifies over that variable
- A variable occurrence is **free** if it is not bound
- A formula with no free variables is called a **sentence** or **closed formula**

Example: In the formula ∀x (P(x) → ∃y R(x, y, z)), x and y are bound variables, while z is a free variable.

## 3. Semantics of First-Order Logic

### 3.1 Structures (Models)

A structure (or model) M for a first-order language L consists of:
1. A non-empty set D called the **domain** or **universe** of discourse
2. For each constant symbol c in L, an element cᴹ in D
3. For each n-ary function symbol f in L, a function fᴹ: Dⁿ → D
4. For each n-ary predicate symbol P in L, a relation Pᴹ ⊆ Dⁿ

### 3.2 Variable Assignments

A variable assignment v is a function that assigns to each variable x a value v(x) in the domain D.

### 3.3 Interpretation of Terms

Given a structure M and a variable assignment v, we recursively define the interpretation of a term t, denoted [t]ᴹ,ᵛ:
1. If t is a variable x, then [t]ᴹ,ᵛ = v(x)
2. If t is a constant c, then [t]ᴹ,ᵛ = cᴹ
3. If t is f(t₁, ..., tₙ), then [t]ᴹ,ᵛ = fᴹ([t₁]ᴹ,ᵛ, ..., [tₙ]ᴹ,ᵛ)

### 3.4 Satisfaction Relation

The satisfaction relation M ⊨ φ[v] ("M satisfies φ under assignment v") is defined recursively:
1. M ⊨ P(t₁, ..., tₙ)[v] iff ([t₁]ᴹ,ᵛ, ..., [tₙ]ᴹ,ᵛ) ∈ Pᴹ
2. M ⊨ (t₁ = t₂)[v] iff [t₁]ᴹ,ᵛ = [t₂]ᴹ,ᵛ
3. M ⊨ ¬φ[v] iff M ⊭ φ[v]
4. M ⊨ (φ ∧ ψ)[v] iff M ⊨ φ[v] and M ⊨ ψ[v]
5. M ⊨ (φ ∨ ψ)[v] iff M ⊨ φ[v] or M ⊨ ψ[v]
6. M ⊨ (φ → ψ)[v] iff M ⊭ φ[v] or M ⊨ ψ[v]
7. M ⊨ (φ ↔ ψ)[v] iff M ⊨ φ[v] if and only if M ⊨ ψ[v]
8. M ⊨ ∀x φ[v] iff for every d ∈ D, M ⊨ φ[v[x/d]]
9. M ⊨ ∃x φ[v] iff there exists d ∈ D such that M ⊨ φ[v[x/d]]

Where v[x/d] is the assignment that agrees with v on all variables except possibly x, which it maps to d.

### 3.5 Truth in a Structure

- A sentence φ is **true** in a structure M (written M ⊨ φ) if it is satisfied by every variable assignment
- A sentence φ is **false** in a structure M if it is not satisfied by any variable assignment
- For sentences (formulas with no free variables), satisfaction is independent of the variable assignment

### 3.6 Logical Consequence

A formula φ is a **logical consequence** of a set of formulas Γ (written Γ ⊨ φ) if every structure that satisfies all formulas in Γ also satisfies φ.

### 3.7 Logical Validity and Satisfiability

- A formula φ is **logically valid** (written ⊨ φ) if it is true in all structures
- A formula φ is **satisfiable** if there is some structure in which it is true
- A formula φ is **unsatisfiable** if it is not satisfiable

## 4. Formal Proof Systems for First-Order Logic

### 4.1 Natural Deduction

Natural deduction for first-order logic extends propositional natural deduction with rules for quantifiers:

#### Universal Quantifier Rules
- **∀-Introduction**: If a proof of φ(y) can be given without making any special assumptions about y, then ∀x φ(x) can be inferred
- **∀-Elimination**: From ∀x φ(x), infer φ(t) for any term t

#### Existential Quantifier Rules
- **∃-Introduction**: From φ(t), infer ∃x φ(x)
- **∃-Elimination**: If from φ(y) (where y is a variable not occurring free in any assumption or in the conclusion) we can derive ψ, then from ∃x φ(x) we can infer ψ

### 4.2 Sequent Calculus

Sequent calculus for first-order logic extends propositional sequent calculus with rules for quantifiers:

#### Universal Quantifier Rules
- **Right ∀**: If Γ ⊢ φ(y), Δ where y does not occur free in Γ, Δ, then Γ ⊢ ∀x φ(x), Δ
- **Left ∀**: From Γ, φ(t) ⊢ Δ, infer Γ, ∀x φ(x) ⊢ Δ

#### Existential Quantifier Rules
- **Right ∃**: From Γ ⊢ φ(t), Δ, infer Γ ⊢ ∃x φ(x), Δ
- **Left ∃**: If Γ, φ(y) ⊢ Δ where y does not occur free in Γ, Δ, then Γ, ∃x φ(x) ⊢ Δ

### 4.3 Hilbert-Style Systems

Hilbert-style systems for first-order logic extend propositional Hilbert systems with axioms and rules for quantifiers:

#### Quantifier Axioms
- ∀x φ(x) → φ(t) (where t is free for x in φ)
- φ(t) → ∃x φ(x) (where t is free for x in φ)
- ∀x (φ → ψ) → (∀x φ → ∀x ψ)
- ∀x (φ → ψ) → (∃x φ → ∃x ψ)

#### Generalization Rule
- From φ, infer ∀x φ (if x is not free in any assumption)

## 5. Properties of First-Order Logic

### 5.1 Soundness and Completeness

- **Soundness**: If Γ ⊢ φ (φ is provable from Γ), then Γ ⊨ φ (φ is a logical consequence of Γ)
- **Completeness (Gödel's Completeness Theorem)**: If Γ ⊨ φ, then Γ ⊢ φ

These properties together establish that a formula is provable if and only if it is a logical consequence of the axioms.

### 5.2 Compactness Theorem

A set of formulas Γ is satisfiable if and only if every finite subset of Γ is satisfiable.

### 5.3 Löwenheim-Skolem Theorems

- **Löwenheim-Skolem-Tarski Theorem (Downward)**: If a countable first-order theory has an infinite model, then it has a model of any infinite cardinality
- **Löwenheim-Skolem Theorem (Upward)**: If a first-order theory has an infinite model, then it has models of any cardinality greater than or equal to the cardinality of the language

### 5.4 Lindström's Theorem

First-order logic is the strongest logic that satisfies both the compactness theorem and the Löwenheim-Skolem theorem.

## 6. Limitations of First-Order Logic

### 6.1 Expressibility Limitations

First-order logic cannot express certain concepts:
- Finiteness: There is no first-order formula that characterizes finite structures
- Connectedness: There is no first-order formula that characterizes connected graphs
- Ancestral relations (transitive closure): "y is a descendant of x" is not expressible in general

### 6.2 Undecidability

The set of valid formulas in first-order logic is not decidable (Church's Theorem). However, for certain fragments and theories, decidability results exist.

## 7. Normal Forms

### 7.1 Prenex Normal Form

A formula is in prenex normal form if all quantifiers appear at the beginning, followed by a quantifier-free formula (the matrix). Every formula can be transformed into an equivalent formula in prenex normal form.

### 7.2 Skolemization

Skolemization removes existential quantifiers by replacing existentially quantified variables with functions of the universally quantified variables on which they depend. This process preserves satisfiability but not logical equivalence.

### 7.3 Clausal Form and Conjunctive Normal Form

After Skolemization, formulas can be converted to clause form and conjunctive normal form (CNF), which is useful for automated theorem proving methods like resolution.

## 8. First-Order Theories

A first-order theory consists of:
1. A first-order language L
2. A set of sentences (axioms) in L

### 8.1 Model of a Theory

A structure M is a model of a theory T if M satisfies all axioms of T.

### 8.2 Properties of Theories

- A theory is **consistent** if it has at least one model
- A theory is **complete** if for every sentence φ in its language, either φ or ¬φ is provable from the theory
- A theory is **decidable** if there is an algorithm that determines whether a given sentence is provable in the theory
- A theory is **axiomatizable** if there is a recursively enumerable set of sentences whose deductive closure is the theory

### 8.3 Categoricity

A theory is κ-categorical if it has exactly one model of cardinality κ up to isomorphism.

## 9. Examples of First-Order Theories

### 9.1 Group Theory

The theory of groups has axioms:
1. ∀x ∀y ∀z ((x · y) · z = x · (y · z)) (associativity)
2. ∀x (x · e = x ∧ e · x = x) (identity element)
3. ∀x ∃y (x · y = e ∧ y · x = e) (inverse elements)

### 9.2 Field Theory

The theory of fields extends the theory of groups with additional axioms for the multiplicative and additive operations.

### 9.3 Order Theory

The theory of partial orders has axioms for reflexivity, antisymmetry, and transitivity.

## 10. Advanced Topics in First-Order Logic

### 10.1 Many-sorted First-Order Logic

Many-sorted logic allows for multiple domains (sorts) and restricts quantification to variables of a specific sort.

### 10.2 First-Order Logic with Equality

First-order logic with equality treats equality as a logical symbol with built-in properties (reflexivity, symmetry, transitivity, and substitution).

### 10.3 First-Order Modal Logic

Modal first-order logic combines first-order logic with modal operators for necessity and possibility.

## 11. Applications of First-Order Logic

### 11.1 Mathematical Foundations

First-order logic provides the foundation for formalizing mathematical theories, including set theory (ZFC), which serves as a foundation for most of mathematics.

### 11.2 Computer Science

Applications include:
- Automated theorem proving
- Program verification
- Knowledge representation
- Database query languages (SQL has roots in first-order logic)
- Artificial intelligence and expert systems

### 11.3 Philosophy

First-order logic is used in philosophical analysis for formalizing arguments and theories in epistemology, metaphysics, and philosophy of language.

## 12. Peano Arithmetic: A Case Study in First-Order Logic

### 12.1 The Language of Peano Arithmetic

The language of Peano Arithmetic (PA) includes:
- A constant symbol 0
- A unary function symbol S (successor)
- Binary function symbols + (addition) and · (multiplication)
- Equality =

### 12.2 The Axioms of Peano Arithmetic

#### Successor Axioms
1. ∀x (S(x) ≠ 0) (0 is not the successor of any number)
2. ∀x ∀y (S(x) = S(y) → x = y) (successor is injective)

#### Addition Axioms
3. ∀x (x + 0 = x) (adding 0)
4. ∀x ∀y (x + S(y) = S(x + y)) (adding a successor)

#### Multiplication Axioms
5. ∀x (x · 0 = 0) (multiplying by 0)
6. ∀x ∀y (x · S(y) = x · y + x) (multiplying by a successor)

#### Induction Schema
7. For any formula φ(x) in the language: [φ(0) ∧ ∀x (φ(x) → φ(S(x)))] → ∀x φ(x)

This is actually an infinite set of axioms, one for each formula φ(x) in the language.

### 12.3 Key Properties of Peano Arithmetic

#### 12.3.1 Standard Model

The standard model of PA is (ℕ, 0, S, +, ·), where:
- The domain is the set of natural numbers ℕ
- 0 is interpreted as the number zero
- S is interpreted as the successor function (S(n) = n + 1)
- + and · are interpreted as the usual addition and multiplication operations

#### 12.3.2 Representability of Computable Functions

All computable functions are representable in PA. A function f: ℕᵏ → ℕ is representable in PA if there exists a formula φ(x₁, ..., xₖ, y) such that:
- If f(n₁, ..., nₖ) = m, then PA ⊢ φ(n̄₁, ..., n̄ₖ, m̄)
- PA ⊢ ∀y₁ ∀y₂ (φ(n̄₁, ..., n̄ₖ, y₁) ∧ φ(n̄₁, ..., n̄ₖ, y₂) → y₁ = y₂)

Where n̄ denotes the numeral for n (S...S(0) with n occurrences of S).

#### 12.3.3 Incompleteness (Gödel's First Incompleteness Theorem)

PA is incomplete. There are true arithmetic statements that cannot be proved or disproved in PA.

The most famous example is the Gödel sentence G for PA, which essentially states "G is not provable in PA". If PA is consistent, then neither G nor ¬G is provable in PA.

#### 12.3.4 Consistency (Gödel's Second Incompleteness Theorem)

PA cannot prove its own consistency. If Con(PA) is a formula expressing the consistency of PA, then if PA is consistent, PA ⊬ Con(PA).

### 12.4 Extensions and Subsystems of Peano Arithmetic

#### 12.4.1 Robinson Arithmetic (Q)

Q is a subsystem of PA that replaces the induction schema with finitely many axioms. It is much weaker than PA but still sufficiently strong to encode basic arithmetic and for Gödel's incompleteness theorems to apply.

#### 12.4.2 Primitive Recursive Arithmetic (PRA)

PRA restricts induction to quantifier-free formulas and is focused on primitive recursive functions.

#### 12.4.3 Presburger Arithmetic

Presburger Arithmetic includes only the axioms for addition (not multiplication). Unlike PA, it is complete and decidable.

#### 12.4.4 Second-Order Arithmetic

Second-order arithmetic extends PA with variables and quantifiers for sets of natural numbers. With the full second-order semantics, it categorically characterizes the standard model of arithmetic.

### 12.5 Examples of Formal Proofs in Peano Arithmetic

#### 12.5.1 Proving Commutativity of Addition

We show that PA ⊢ ∀x ∀y (x + y = y + x).

First, we prove ∀x (x + 0 = 0 + x):
1. We have the axiom ∀x (x + 0 = x)
2. We need to show 0 + x = x for all x
3. We use induction on x
   a. Base case: 0 + 0 = 0 (by axiom 3)
   b. Induction step: Assume 0 + n = n
      - We need to show 0 + S(n) = S(n)
      - By axiom 4, 0 + S(n) = S(0 + n)
      - By induction hypothesis, 0 + n = n
      - Therefore, 0 + S(n) = S(n)
4. By the induction principle, ∀x (0 + x = x)
5. Therefore, ∀x (x + 0 = 0 + x)

Next, we prove ∀x ∀y (x + S(y) = S(x) + y):
(Similar induction argument, omitted for brevity)

Finally, we prove ∀x ∀y (x + y = y + x):
1. We use induction on y
   a. Base case: x + 0 = 0 + x (proved above)
   b. Induction step: Assume x + n = n + x
      - We need to show x + S(n) = S(n) + x
      - By axiom 4, x + S(n) = S(x + n)
      - By induction hypothesis, x + n = n + x
      - Therefore, x + S(n) = S(n + x)
      - We've shown ∀x ∀y (x + S(y) = S(x) + y)
      - Therefore, S(n + x) = S(n) + x
      - Thus, x + S(n) = S(n) + x
2. By the induction principle, ∀x ∀y (x + y = y + x)

#### 12.5.2 Proving Properties of Multiplication

Using similar techniques, we can prove:
- ∀x (x · 1 = x)
- ∀x ∀y (x · y = y · x) (commutativity of multiplication)
- ∀x ∀y ∀z (x · (y + z) = x · y + x · z) (distributivity)

### 12.6 Gödel's Incompleteness Theorems in Peano Arithmetic

#### 12.6.1 Arithmetization of Syntax

Gödel numbering assigns a unique natural number to each symbol, formula, and proof in PA, allowing the system to talk about its own syntax.

#### 12.6.2 The Provability Predicate

The predicate Prov_PA(⌜φ⌝) represents "formula φ is provable in PA" and can be expressed as a formula in PA. Specifically, Prov_PA(n) is true if and only if n is the Gödel number of a provable formula.

#### 12.6.3 The Gödel Sentence

The Gödel sentence G for PA is a sentence that asserts its own unprovability:
G ↔ ¬Prov_PA(⌜G⌝)

#### 12.6.4 The First Incompleteness Theorem

If PA is consistent, then G is neither provable nor refutable in PA.

Proof sketch:
1. If PA ⊢ G, then G is true, which means G is not provable, contradicting PA ⊢ G
2. If PA ⊢ ¬G, then PA proves that G is provable, but since PA is consistent, G must be true, contradicting PA ⊢ ¬G

#### 12.6.5 The Second Incompleteness Theorem

If PA is consistent, then PA cannot prove its own consistency.

The consistency of PA can be expressed as the formula Con(PA) ≡ ¬Prov_PA(⌜0=1⌝), which states that the contradiction 0=1 is not provable.

Proof sketch:
1. PA can prove G ↔ ¬Prov_PA(⌜G⌝)
2. PA can prove that if it is consistent, then G is not provable
3. This means PA ⊢ Con(PA) → G
4. If PA could prove Con(PA), then by modus ponens, PA ⊢ G
5. But G is not provable in PA if PA is consistent
6. Therefore, PA ⊬ Con(PA) if PA is consistent

### 12.7 Models of Peano Arithmetic

#### 12.7.1 Standard Model

The standard model of PA is (ℕ, 0, S, +, ·) as described earlier.

#### 12.7.2 Non-standard Models

By the Compactness Theorem and the Löwenheim-Skolem Theorem, PA has non-standard models. These models contain elements that behave like "infinite numbers" beyond the standard natural numbers.

#### 12.7.3 Tennenbaum's Theorem

Tennenbaum's Theorem states that there is no computable non-standard model of PA. This means any non-standard model must have addition or multiplication operations that are not computable.

## 13. First-Order Logic and Mathematical Practice

First-order logic provides the formal foundation for mathematics, but mathematical practice often uses informal or semi-formal reasoning. The relationship between formal and informal mathematics involves:

### 13.1 Formalization of Mathematical Theories

Most mathematical theories can be formalized in first-order logic, often using set theory (ZFC) as a foundation.

### 13.2 Limitations of Formalization

Complete formalization of mathematical arguments is often impractical due to the length and complexity of formal proofs.

### 13.3 Proof Verification and Automated Theorem Proving

Computer systems for formal proof verification (like Coq, Isabelle, and Lean) and automated theorem proving are increasingly important in mathematical practice.

## 14. Conclusion: The Power and Limits of First-Order Logic

First-order logic provides a powerful framework for formalizing mathematical theories and reasoning about structures. It strikes a balance between expressivity and meta-theoretical properties, making it the standard foundation for mathematics.

However, first-order logic has well-understood limitations. Gödel's incompleteness theorems show that no consistent, recursively axiomatizable extension of Peano Arithmetic can be complete. Some mathematical concepts require stronger logical systems, such as second-order logic or set theory.

Despite these limitations, first-order logic remains the cornerstone of formal mathematics and serves as the basis for many applications in computer science, artificial intelligence, and formal verification. Understanding first-order logic and its application in theories like Peano Arithmetic provides insight into the foundations of mathematics and the boundaries of formal reasoning.

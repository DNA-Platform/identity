# A Comprehensive Guide to Propositional Logic

## 1. Introduction to Propositional Logic

Propositional logic (also called propositional calculus or statement logic) is the branch of logic that studies ways of combining propositions to form more complex propositions, and the logical relationships and properties that emerge from these combinations. A proposition is a declarative statement that is either true or false, but not both.

For example:
- "The sky is blue" is a proposition.
- "Is the sky blue?" is not a proposition (it's a question).
- "Go outside" is not a proposition (it's a command).

## 2. Basic Symbols and Notation

### 2.1 Propositional Variables

Propositional variables typically represented by lowercase letters (p, q, r, etc.) stand for arbitrary propositions.

### 2.2 Logical Connectives

The basic logical connectives are:

- **Negation** (¬): "not p" or "it is not the case that p"
- **Conjunction** (∧): "p and q" or "both p and q"
- **Disjunction** (∨): "p or q" or "either p or q or both"
- **Material Implication** (→): "if p then q" or "p implies q"
- **Biconditional** (↔): "p if and only if q" or "p is equivalent to q"

### 2.3 Alternative Notation

Different fields and texts may use alternative notations:

- Negation: ¬p, ~p, !p
- Conjunction: p ∧ q, p & q, p AND q
- Disjunction: p ∨ q, p | q, p OR q
- Implication: p → q, p ⊃ q, p ⇒ q
- Biconditional: p ↔ q, p ≡ q, p ⇔ q

## 3. Truth Tables

Truth tables are used to define the meaning of the logical connectives and to analyze complex formulas.

### 3.1 Basic Truth Tables

#### Negation (¬)

| p | ¬p |
|---|---|
| T | F |
| F | T |

#### Conjunction (∧)

| p | q | p ∧ q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

#### Disjunction (∨)

| p | q | p ∨ q |
|---|---|-------|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

#### Material Implication (→)

| p | q | p → q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

#### Biconditional (↔)

| p | q | p ↔ q |
|---|---|-------|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

### 3.2 Important Observations About Material Implication

The material implication p → q is false only when p is true and q is false. This often conflicts with our intuitive understanding of "if...then..." statements in natural language.

Key properties:
- p → q is logically equivalent to ¬p ∨ q
- p → q is NOT equivalent to q → p (the converse)
- p → q is NOT equivalent to ¬q → ¬p (the inverse)
- p → q IS equivalent to ¬q → ¬p (the contrapositive)

## 4. Formal Syntax

### 4.1 Well-Formed Formulas (WFFs)

The set of well-formed formulas (WFFs) in propositional logic is recursively defined as follows:

1. Any propositional variable is a WFF.
2. If A is a WFF, then ¬A is a WFF.
3. If A and B are WFFs, then (A ∧ B), (A ∨ B), (A → B), and (A ↔ B) are WFFs.
4. Nothing else is a WFF.

### 4.2 Parsing and Precedence

When parentheses are omitted, the standard order of precedence is:
1. Negation (¬)
2. Conjunction (∧)
3. Disjunction (∨)
4. Implication (→)
5. Biconditional (↔)

For example, the formula ¬p ∧ q → r ∨ s is interpreted as ((¬p) ∧ q) → (r ∨ s).

## 5. Logical Equivalence

Two propositional formulas A and B are logically equivalent (written A ≡ B) if they have the same truth value under all possible truth assignments to their propositional variables.

### 5.1 Important Equivalences

#### Double Negation
- ¬¬p ≡ p

#### Commutativity
- p ∧ q ≡ q ∧ p
- p ∨ q ≡ q ∨ p

#### Associativity
- (p ∧ q) ∧ r ≡ p ∧ (q ∧ r)
- (p ∨ q) ∨ r ≡ p ∨ (q ∨ r)

#### Distributivity
- p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)
- p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)

#### De Morgan's Laws
- ¬(p ∧ q) ≡ ¬p ∨ ¬q
- ¬(p ∨ q) ≡ ¬p ∧ ¬q

#### Material Implication
- p → q ≡ ¬p ∨ q
- ¬(p → q) ≡ p ∧ ¬q

#### Contraposition
- p → q ≡ ¬q → ¬p

#### Biconditional
- p ↔ q ≡ (p → q) ∧ (q → p)
- p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)

#### Idempotence
- p ∧ p ≡ p
- p ∨ p ≡ p

#### Identity and Annihilation
- p ∧ T ≡ p
- p ∨ F ≡ p
- p ∧ F ≡ F
- p ∨ T ≡ T

## 6. Logical Consequence and Validity

### 6.1 Logical Consequence

A propositional formula B is a logical consequence of a set of formulas {A₁, A₂, ..., Aₙ} (written A₁, A₂, ..., Aₙ ⊨ B) if any truth assignment that makes all of A₁, A₂, ..., Aₙ true also makes B true.

### 6.2 Validity, Satisfiability, and Contradiction

- A formula is **valid** (or a tautology) if it is true under all possible truth assignments.
  - Example: p ∨ ¬p (Law of Excluded Middle)

- A formula is **satisfiable** if there exists at least one truth assignment that makes it true.
  - Example: p ∧ q is satisfiable (when both p and q are true)

- A formula is **unsatisfiable** (or a contradiction) if it is false under all possible truth assignments.
  - Example: p ∧ ¬p (Law of Non-Contradiction)

### 6.3 Relationships

- A formula is valid if and only if its negation is unsatisfiable.
- A set of formulas {A₁, A₂, ..., Aₙ} logically entails B (A₁, A₂, ..., Aₙ ⊨ B) if and only if the formula (A₁ ∧ A₂ ∧ ... ∧ Aₙ) → B is valid.

## 7. Formal Proof Systems

There are several formal systems for deriving theorems in propositional logic:

### 7.1 Axiomatic Systems

These start with axioms and derive theorems using rules of inference like modus ponens. A classical axiomatic system might include:

- Axiom 1: p → (q → p)
- Axiom 2: (p → (q → r)) → ((p → q) → (p → r))
- Axiom 3: (¬p → ¬q) → (q → p)

And the rule of inference:
- Modus Ponens: From p and p → q, infer q.

### 7.2 Natural Deduction

Natural deduction systems have introduction and elimination rules for each logical connective. Key rules include:

#### Conjunction
- Introduction (∧I): From p and q, infer p ∧ q.
- Elimination (∧E): From p ∧ q, infer p (or infer q).

#### Disjunction
- Introduction (∨I): From p, infer p ∨ q (or from q, infer p ∨ q).
- Elimination (∨E): From p ∨ q, p → r, and q → r, infer r.

#### Implication
- Introduction (→I): If assuming p allows derivation of q, then infer p → q.
- Elimination (→E): From p and p → q, infer q (modus ponens).

#### Negation
- Introduction (¬I): If assuming p leads to a contradiction, infer ¬p.
- Elimination (¬E): From p and ¬p, infer any formula q (ex falso quodlibet).

#### Double Negation
- Introduction (¬¬I): From p, infer ¬¬p.
- Elimination (¬¬E): From ¬¬p, infer p.

### 7.3 Truth Tables

Truth tables provide a decision procedure for propositional logic:
- To check if a formula is valid, compute its truth table; it's valid if true in all rows.
- To check if an argument is valid, compute the truth table for the premises and conclusion; the argument is valid if the conclusion is true in all rows where all premises are true.

## 8. Applications of Propositional Logic

### 8.1 Argument Analysis

Propositional logic can be used to analyze the validity of arguments. For example:

- Premise 1: p → q
- Premise 2: p
- Conclusion: q

This is a valid argument form known as modus ponens.

### 8.2 Digital Circuit Design

Propositional logic is fundamental to digital circuit design:
- AND gates implement conjunction
- OR gates implement disjunction
- NOT gates implement negation
- XOR gates implement exclusive or (p ⊕ q, true when exactly one of p or q is true)

### 8.3 Boolean Algebra

Boolean algebra, which is used in set theory, computer science, and digital electronics, is an algebraic structure that captures the behavior of propositional logic.

### 8.4 Computer Science

Propositional logic is essential for:
- Program verification
- Database query languages
- Logic programming
- Algorithm design
- Artificial intelligence and automated reasoning

## 9. Normal Forms

### 9.1 Conjunctive Normal Form (CNF)

A formula is in CNF if it is a conjunction of disjunctions of literals (a literal is a propositional variable or its negation). Every propositional formula can be converted to CNF.

Example: (p ∨ q) ∧ (¬p ∨ r) is in CNF.

### 9.2 Disjunctive Normal Form (DNF)

A formula is in DNF if it is a disjunction of conjunctions of literals. Every propositional formula can be converted to DNF.

Example: (p ∧ q) ∨ (¬p ∧ r) is in DNF.

### 9.3 Conversion to Normal Forms

To convert a formula to CNF or DNF:
1. Eliminate biconditionals using p ↔ q ≡ (p → q) ∧ (q → p)
2. Eliminate implications using p → q ≡ ¬p ∨ q
3. Push negations inward using De Morgan's laws
4. Distribute conjunctions over disjunctions (for CNF) or disjunctions over conjunctions (for DNF)

## 10. Decision Procedures

### 10.1 Truth Tables

For formulas with n distinct propositional variables, the truth table has 2^n rows. This becomes computationally infeasible for large n.

### 10.2 SAT Solving

The Boolean satisfiability problem (SAT) asks whether a given propositional formula is satisfiable. Modern SAT solvers use techniques like:

- DPLL (Davis-Putnam-Logemann-Loveland) algorithm
- Conflict-driven clause learning
- Heuristics for variable selection

### 10.3 Resolution

Resolution is a rule of inference that can be used as a complete proof procedure for propositional logic. The resolution rule states:

From (p ∨ A) and (¬p ∨ B), infer (A ∨ B).

A formula is unsatisfiable if and only if the empty clause (a contradiction) can be derived from its CNF representation using resolution.

## 11. Limitations of Propositional Logic

While powerful, propositional logic has limitations:

1. **No internal structure**: Propositions are treated as atomic, with no internal structure. We can't express statements like "All men are mortal" in a way that reveals the logical relationship to "Socrates is mortal."

2. **No quantification**: We can't express statements involving "all," "some," "none," etc., which limits the expressiveness of the logic.

3. **No predicates**: We can't express properties or relations between objects.

These limitations are addressed by first-order logic, which extends propositional logic with variables, predicates, and quantifiers.

## 12. Conditional Proof and Formal Derivation

### 12.1 Conditional Proof

Conditional proof (CP) is a proof strategy in natural deduction. To prove an implication p → q:

1. Assume p
2. Derive q from p and other available premises or theorems
3. Conclude p → q (discharging the assumption p)

This rule is also known as conditional introduction or →-introduction.

### 12.2 Formal Derivation Example

Example: Prove (p → q) ∧ (q → r) ⊢ (p → r)

```
1. (p → q) ∧ (q → r)    Premise
2. p → q                 Conjunction elimination (1)
3. q → r                 Conjunction elimination (1)
4. p                     Assumption (for conditional proof)
5. q                     Modus ponens (4, 2)
6. r                     Modus ponens (5, 3)
7. p → r                 Conditional proof (4-6)
```

### 12.3 Relevance to Theorem Proving

In the context of formal proof systems:

- If T ⊢ A and T ⊢ B, then T ⊢ (A ∧ B) by conjunction introduction
- If T ⊢ B (i.e., B is provable without any special assumptions), then T ⊢ (A → B) by conditional proof

This last point is particularly important: if a statement B is already a theorem of theory T, then any implication A → B is also a theorem of T, regardless of what A is. This is because B can be derived independently of the assumption A.

## 13. Propositional Logic in Mathematical Theories

### 13.1 Role in Formal Theories

In a formal theory T:

- If T ⊢ A (A is provable in T) and T ⊢ A → B (the implication A → B is provable in T), then T ⊢ B (B is provable in T) by modus ponens.

- If T ⊢ A and T ⊢ B, then T ⊢ A → B by conditional proof. This works because we can derive B (which we already know how to prove) without actually using the assumption A.

### 13.2 Connection to Gödel's Work

In the context of Gödel's incompleteness theorems, understanding these principles is crucial:

- A theory T can prove that if it proves a contradiction, then it can prove any formula. This is formalized as T ⊢ (Prov_T(⌜0=1⌝) → Prov_T(⌜φ⌝)) for any formula φ.

- The provability predicate Prov_T satisfies certain conditions (the Hilbert-Bernays-Löb derivability conditions) that allow T to reason about its own proofs.

- These principles are at the heart of how Gödel constructed self-referential statements that lead to the incompleteness theorems.

## 14. Conclusion

Propositional logic provides the foundation for formal reasoning and the development of more expressive logical systems. By understanding its syntax, semantics, and proof methods, we gain insights into the fundamental nature of logical truth and derivation that apply across mathematics, computer science, and philosophical logic.

Though limited in expressiveness compared to first-order logic, propositional logic offers a complete and decidable formal system with wide-ranging applications. Its principles underlie everything from digital circuit design to program verification and from mathematical proof to artificial intelligence.

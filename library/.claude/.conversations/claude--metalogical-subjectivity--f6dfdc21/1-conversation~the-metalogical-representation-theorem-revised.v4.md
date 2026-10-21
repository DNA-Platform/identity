# The Metalogical Representation Theorem

## Definition: Metalogical Universality
A formal theory T exhibits metalogical universality if:
1. T is sufficiently expressive to represent basic arithmetic operations and recursive functions (in the sense of Tarski, Mostowski, and Robinson, 1953).
2. For any recursively enumerable theory S, T can represent within its own language:
   * The syntax of S (its symbols, formulas, and proofs)
   * The provability relation of S

## Definition: Sufficient Expressiveness
A theory T is sufficiently expressive if it satisfies the following conditions:
1. T can represent all primitive recursive functions and relations
2. T includes the basic theory of concatenation or an equivalent coding mechanism
3. T extends Robinson arithmetic (Q) or has equivalent expressive power

## Theorem Statement
Let T be any recursively enumerable formal theory that is sufficiently expressive (in the sense defined above). Then, for any recursively enumerable theory S, there exists a formula Prov_S(x) expressible in the language of T such that for any formula φ of S:
* Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable in S
* If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢ Prov_S(⌜φ⌝)

## Lemma: Effective Encoding
For any recursively enumerable theory S, there exists an effective encoding function g_S that maps each symbol, formula, and proof in S to a unique natural number.

### Proof of Lemma:
* Since S is recursively enumerable, it has a countable set of symbols, formulas, and proofs
* We construct g_S recursively:
  * Assign a unique natural number to each basic symbol in the language of S
  * For any well-formed formula φ = s₁s₂...sₙ composed of symbols s₁, s₂, ..., sₙ, define:
    g_S(φ) = 2^g_S(s₁) · 3^g_S(s₂) · ... · p_n^g_S(sₙ) where p_i is the i-th prime number
  * For a proof π = (φ₁, φ₂, ..., φₘ) consisting of formulas φ₁, φ₂, ..., φₘ, define:
    g_S(π) = 2^g_S(φ₁) · 3^g_S(φ₂) · ... · p_m^g_S(φₘ)
* This encoding is effective (computable) and injective due to the unique prime factorization of integers (this construction follows Gödel's original technique (1931))

## Lemma: Representability of Recursive Relations
Let T be a sufficiently expressive theory. For any recursive relation R(x₁, ..., xₙ) on natural numbers, there exists a formula φ_R(x₁, ..., xₙ) in the language of T such that for all natural numbers a₁, ..., aₙ:
* If R(a₁, ..., aₙ) holds, then T ⊢ φ_R(a₁, ..., aₙ)
* If R(a₁, ..., aₙ) does not hold, then T ⊢ ¬φ_R(a₁, ..., aₙ)

### Proof of Lemma:
* Since T can represent all primitive recursive functions and relations, and any recursive relation can be expressed using primitive recursive relations and bounded minimization
* For a detailed construction, see Kleene (1952, Theorem 15, Chapter 10, p. 288)
* The representation proceeds by structural induction on the definition of the recursive relation
* For primitive recursive relations, T can directly represent them (Tarski, Mostowski, and Robinson, 1953, Chapter 3)
* For relations defined by bounded minimization, T can represent the bound and the relation being minimized, and then use existential quantification over a bounded domain

## Lemma: Enumeration Theorem for Recursively Enumerable Relations
Any recursively enumerable relation R(x₁, ..., xₙ) can be expressed as ∃y S(x₁, ..., xₙ, y) for some recursive relation S.

### Proof of Lemma:
* A relation is recursively enumerable if and only if it is the domain of a partial recursive function
* By the normal form theorem for partial recursive functions (Kleene, 1943, Theorem 1), any partial recursive function can be expressed in terms of a primitive recursive predicate using bounded minimization
* Therefore, any recursively enumerable relation R(x) can be written as ∃y S(x, y) where S is recursive
* This is a standard result in computability theory (Rogers, 1967, Chapter 5, Theorem 5.3)

## Lemma: Recursively Enumerable Provability Relation
For any recursively enumerable theory S, the relation Proves_S(p, f), which holds if and only if p is the Gödel number of a proof in S of the formula with Gödel number f, is recursively enumerable.

### Proof of Lemma:
* The relation Proves_S(p, f) holds when:
  * p is the Gödel number of a finite sequence (φ₁, φ₂, ..., φₙ) of well-formed formulas in S
  * Each φᵢ is either an axiom of S or follows from previous formulas by a rule of inference of S
  * The Gödel number of φₙ is f
* Checking if a formula is an axiom in S is recursively enumerable (since S is recursively enumerable)
* Checking if a formula follows from previous formulas by a rule of inference is a recursive operation
* Therefore, Proves_S(p, f) is a recursively enumerable relation
* This follows from the fact that proofs are finite objects and the axioms of S are recursively enumerable (see Kleene, 1952, Chapter 14)

## Proof of the Metalogical Representation Theorem

### Construction of the Provability Predicate
1. Given a recursively enumerable theory S and a sufficiently expressive theory T, we construct the provability predicate Prov_S(x) for S in the language of T as follows:
   * By the Recursively Enumerable Provability Relation Lemma, the relation Proves_S(p, f) is recursively enumerable
   * By the Enumeration Theorem for Recursively Enumerable Relations, Proves_S(p, f) can be expressed as ∃q R_S(p, f, q) for some recursive relation R_S
   * By the Representability of Recursive Relations Lemma, there exists a formula φ_R_S(p, f, q) in the language of T that represents R_S
   * Define Prove_S(p, f) ≡ ∃q φ_R_S(p, f, q)
   * Finally, define Prov_S(f) ≡ ∃p Prove_S(p, f)

2. Verification of the first property: Prov_S(⌜φ⌝) is true in the standard model of T if and only if φ is provable in S
   * Forward direction: If Prov_S(⌜φ⌝) is true in the standard model of T, then ∃p Prove_S(p, ⌜φ⌝) is true, which means p is the Gödel number of a proof of φ in S. Therefore, φ is provable in S
   * Reverse direction: If φ is provable in S, there exists a proof π of φ in S. Let p = g_S(π) be the Gödel number of this proof. By construction, Prove_S(p, ⌜φ⌝) is true, making Prov_S(⌜φ⌝) true in the standard model of T

3. Verification of the second property: If T extends Robinson arithmetic and is consistent, then whenever φ is provable in S, T ⊢ Prov_S(⌜φ⌝)
   * Suppose φ is provable in S with proof π
   * Let p = g_S(π) be the Gödel number of this proof
   * Since π is a valid proof of φ in S, the recursive relation R_S(p, ⌜φ⌝, q) holds for some q
   * By the Representability of Recursive Relations Lemma, T ⊢ φ_R_S(p, ⌜φ⌝, q)
   * By existential introduction, T ⊢ ∃q φ_R_S(p, ⌜φ⌝, q), which means T ⊢ Prove_S(p, ⌜φ⌝)
   * Again by existential introduction, T ⊢ ∃p Prove_S(p, ⌜φ⌝), which is T ⊢ Prov_S(⌜φ⌝)

### Explanation
The Metalogical Representation Theorem establishes that theories with sufficient expressive power can represent the syntax and provability of any recursively enumerable formal system. This creates a form of universality for formal theories that parallels the universality of Turing machines.

Just as a universal Turing machine can simulate any other Turing machine when provided with its description (Turing, 1936, Section 6), a theory with metalogical universality can represent the provability relation of any recursively enumerable theory. This universality establishes a threshold of expressive power in formal systems - once a theory can represent basic arithmetic and recursive functions, it gains the universal capacity to represent the metalogical properties of all recursively enumerable theories.

This threshold is analogous to the computational threshold identified by Turing, where machines capable of certain basic operations gain the ability to simulate any computational process. In both cases, a precisely defined capability leads to a universal representational power that transcends the initially specified capabilities.

The theorem demonstrates that metalogical concepts like provability, which normally exist in the metatheory of formal systems, can be represented within the object language of sufficiently expressive theories. This capacity for theories to talk about other theories (including themselves) within their own formal language was first demonstrated by Gödel (1931) for a specific theory, but the present theorem generalizes this to a universal property of all sufficiently expressive theories.

## Corollary: Robinson Arithmetic is Metalogically Universal

Robinson arithmetic (Q) is a metalogically universal theory.

### Proof of Corollary:
* Robinson arithmetic (Q) is a finitely axiomatized first-order theory that includes:
  * Axioms for successor, addition, and multiplication
  * Basic properties of zero and successor
  * Although weaker than Peano Arithmetic (it lacks the induction schema), Q is still sufficiently expressive
* Q satisfies our definition of sufficient expressiveness:
  * Q can represent all primitive recursive functions and relations (Tarski, Mostowski, and Robinson, 1953, Theorem 7)
  * Q includes a mechanism for coding sequences (via Gödel numbering)
  * Q extends itself (trivially)
* Therefore, by the Metalogical Representation Theorem, Q can represent the syntax and provability of any recursively enumerable theory
* Hence, Q exhibits metalogical universality

### Explanation
This corollary has profound implications. Robinson arithmetic, despite being much weaker than Peano Arithmetic in terms of proving power, still reaches the threshold of metalogical universality. This demonstrates that the ability to represent metalogical concepts doesn't require the full strength of mathematical induction.

The fact that Q is metalogically universal explains why it is subject to Gödel's incompleteness theorems despite its limited proving capabilities. Once a theory crosses the threshold into metalogical universality, it necessarily encounters the limitations that come with the ability to represent its own provability.

This also illuminates why Q serves as a common base theory in discussions of interpretability and relative consistency. Since Q can represent the provability relation of any recursively enumerable theory, it provides a universal foundation for comparing theories and discussing their metalogical properties.

## References

1. Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik, 38, 173-198.

2. Kleene, S.C. (1943). Recursive predicates and quantifiers. Transactions of the American Mathematical Society, 53(1), 41-73.

3. Kleene, S.C. (1952). Introduction to Metamathematics. Amsterdam: North-Holland.

4. Rogers, H. (1967). Theory of Recursive Functions and Effective Computability. New York: McGraw-Hill.

5. Tarski, A., Mostowski, A., & Robinson, R.M. (1953). Undecidable Theories. Amsterdam: North-Holland.

6. Turing, A.M. (1936). On Computable Numbers, with an Application to the Entscheidungsproblem. Proceedings of the London Mathematical Society, s2-42(1), 230-265.
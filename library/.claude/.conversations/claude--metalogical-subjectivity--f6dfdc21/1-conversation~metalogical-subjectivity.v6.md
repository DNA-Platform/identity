# Metalogical Subjectivity

## 1. Fundamental Concepts

### 1.1 Logical Transcendence
A sentence can have a special relationship with a theory where, though unprovable within the theory itself, it is implicitly endorsed by the theory's commitment to its own consistency. This relationship, which we call transcendence, represents a form of truth that goes beyond standard provability.

**Definition 1.1** Logical Transcendence. Let T be a consistent, recursively axiomatizable theory extending Robinson arithmetic. A sentence G in the language of T **transcends** T if:
1. T ⊬ G (G is not provable in T)
2. T ⊬ ¬G (¬G is not provable in T)
3. T ∪ {¬G} ⊢ ¬Con(T) (assuming ¬G implies T is inconsistent)

We write T **⫤** G to denote that G transcends T.

Logical transcendence captures the special status of sentences that, while undecidable within a theory, have a privileged relationship with the theory's consistency. Such sentences reveal implicit commitments of the theory that cannot be formalized within the theory itself.

### 1.2 Metalogical Transduction
When a sentence transcends a theory, it demands a transformation of the theory to incorporate this higher truth. This process, which we call metalogical transduction, represents a principled evolution of the theory guided by its implicit commitment to consistency.

**Definition 1.2** Metalogical Transduction. When a sentence G transcends a theory T, metalogical transduction is the transformation of T into a new theory T' = T ∪ {G}. We denote this process as:

T **⊨**> G, resulting in T'

This transformation is not arbitrary but is dictated by the theory's commitment to consistency. When T **⫤** G, the appropriate response is to perform metalogical transduction, yielding T **⊨**> G.

### 1.3 Proof by Transcendence
To establish transcendence and justify metalogical transduction, we employ a proof methodology that extends traditional proof by contradiction. This method, which we call Proof by Transcendence, reveals the implicit commitments of a theory that go beyond what it can explicitly prove.

**Definition 1.3** Proof by Transcendence. To establish that a sentence G transcends a theory T, we employ the following methodology:
1. Assume ¬G as a hypothesis
2. Derive ¬Con(T) from this assumption within T
3. Conclude that G transcends T (T **⫤** G)
4. Perform metalogical transduction: T **⊨**> G, resulting in T' = T ∪ {G}
5. Within T', G is now provable via a one-line proof (as it is an axiom of T')

Proof by Transcendence allows us to establish truths that, while unprovable within a theory's original formulation, are necessary to maintain the theory's consistency. It represents a method of reasoning that transcends the limitations of standard derivation.

### 1.4 Metalogical Inference
Beyond specific instances of Proof by Transcendence, we can define a broader concept of valid reasoning that establishes transcendent truths. This concept, which we call metalogical inference, encompasses any legitimate method for identifying sentences that transcend a theory.

**Definition 1.4** Metalogical Inference. A metalogical inference is any valid reasoning process that establishes the transcendence of a sentence G in a theory T. The standard form of metalogical inference is Proof by Transcendence, but other forms may exist.

Any metalogical inference that correctly identifies a transcendent sentence yields a consistency-preserving metalogical transduction when applied.

### 1.5 Metalogical Subjectivity
The central concept of our framework is metalogical subjectivity—the idea that the truth status of certain sentences depends fundamentally on the theoretical perspective from which they are viewed. This subjectivity is not arbitrary but is structured by the metalogical relationships between theories.

**Definition 1.5** Metalogical Subjectivity. A sentence G exhibits metalogical subjectivity if there exist theories T and S such that:
1. G transcends T (requiring metalogical transduction)
2. S can directly decide the truth value of G (through standard derivation)

Metalogical subjectivity formalizes the perspective-relativity of certain mathematical truths. It shows that what requires transcendence from one theoretical perspective may be directly decidable from another.

## 2. The Metalogical Subjectivity Theorem

We now establish our central result: the existence of sentences that exhibit metalogical subjectivity, demonstrating that certain aspects of mathematical truth are inherently perspective-dependent.

To state this theorem precisely, we first need to define how one theory can decide statements formulated in another theory:

**Definition 2.1** Relative Decidability. A theory S **relatively decides** a statement G of theory Q if either S ⊢ ⌜G⌝_Q,S or S ⊢ ¬⌜G⌝_Q,S, where ⌜G⌝_Q,S is the canonical encoding of G from Q to S.

Here, the canonical encoding ⌜G⌝_Q,S represents G formulated in the language of S in a way that preserves its meaning and structure.

**Theorem 2.2** Metalogical Subjectivity Theorem. There exist metalogically universal theories Q and S, and a sentence G_Q, such that:
1. G_Q transcends Q (Q **⫤** G_Q)
2. S directly proves G_Q as represented in S (S ⊢ ⌜G_Q⌝_Q,S)

Where G_Q is the Gödel sentence for Q.

**Proof:**
Let Q be Robinson arithmetic, which is metalogically universal (as established by Tarski, Mostowski, and Robinson, 1953). Let S be ZFC (Zermelo-Fraenkel set theory with the Axiom of Choice), which is also metalogically universal.

We proceed as follows:

1. By Gödel's first incompleteness theorem (Gödel, 1931), there exists a sentence G_Q in the language of Q such that:
   * G_Q ↔ ¬Prov_Q(⌜G_Q⌝_Q)
   * Q ⊬ G_Q and Q ⊬ ¬G_Q (assuming Q is consistent)

2. To establish that G_Q transcends Q, we use Proof by Transcendence:
   * Assume ¬G_Q
   * By the definition of G_Q, this implies Prov_Q(⌜G_Q⌝_Q)
   * But if Q proves G_Q and also proves ¬G_Q (our assumption), then Q is inconsistent
   * Thus, Q ∪ {¬G_Q} ⊢ ¬Con(Q)
   * Therefore, G_Q transcends Q (Q **⫤** G_Q)
   * This justifies metalogical transduction: Q **⊨**> G_Q, resulting in Q' = Q ∪ {G_Q}

3. Now consider how S (ZFC) treats G_Q:
   * ZFC can construct a standard model N of Q (this is a well-established result in model theory, see Kunen, 1980)
   * ZFC proves that N satisfies all axioms of Q
   * Therefore, ZFC ⊢ Con(Q) (ZFC proves the consistency of Q)

4. ZFC can represent and reason about the syntax and provability of Q:
   * ZFC can express ⌜G_Q⌝_Q,ZFC, the canonical encoding of G_Q in ZFC
   * ZFC understands that ⌜G_Q⌝_Q,ZFC is equivalent to ⌜Con(Q)⌝_ZFC in the following sense:
     ZFC ⊢ (⌜G_Q⌝_Q,ZFC ↔ ⌜Con(Q)⌝_ZFC)

5. Since ZFC ⊢ Con(Q) and ZFC ⊢ (⌜G_Q⌝_Q,ZFC ↔ ⌜Con(Q)⌝_ZFC), we have:
   * ZFC ⊢ ⌜G_Q⌝_Q,ZFC
   * Thus, S relatively decides G_Q positively, without requiring transcendence

6. Therefore, we have established that:
   * G_Q transcends Q (Q **⫤** G_Q), requiring metalogical transduction
   * S directly proves ⌜G_Q⌝_Q,S (through standard derivation)

This proves the Metalogical Subjectivity Theorem, demonstrating that the truth status of G_Q is perspective-dependent: it requires transcendence from the perspective of Q but is directly decidable from the perspective of S. □

## 3. Implications

### 3.1 Subjective Propositions
The Metalogical Subjectivity Theorem leads naturally to the concept of subjective propositions—statements whose truth status depends fundamentally on theoretical perspective.

**Definition 3.1** Subjective Proposition. A proposition P is **subjective to** a theory T if P transcends T and thus can only be established through Proof by Transcendence rather than standard derivation.

**Corollary 3.2:** For any consistent, recursively axiomatizable theory T extending Robinson arithmetic, its Gödel sentence G_T is subjective to T.

This corollary establishes that subjectivity is not a rare or pathological phenomenon but is an intrinsic feature of any sufficiently expressive formal system.

### 3.2 Contradictory Perspectives

The Metalogical Subjectivity Theorem can be strengthened to show that subjectivity in formal systems is even more profound than initially stated. Not only can the status of a sentence vary between theories, but theories can actually reach contradictory conclusions about the same sentence while each remaining internally consistent.

**Corollary 3.3:** There exist consistent, metalogically universal theories S and T such that S ⊢ ⌜G_Q⌝_Q,S and T ⊢ ⌜¬G_Q⌝_Q,T, where G_Q is the Gödel sentence for Robinson arithmetic.

**Proof:**
Let S be ZFC, as in our proof of the Metalogical Subjectivity Theorem. We have already established that S ⊢ ⌜G_Q⌝_Q,S.

Now, define T = Q ∪ {¬Con(Q)}, that is, Robinson arithmetic extended with the assertion of its own inconsistency.

To show that T ⊢ ⌜¬G_Q⌝_Q,T:
1. By Gödel's construction, G_Q ↔ ¬Prov_Q(⌜G_Q⌝_Q). This equivalence is provable in Q itself.
2. One direction of this equivalence is Q ⊢ (Con(Q) → G_Q), or equivalently, Q ⊢ (¬G_Q → ¬Con(Q)).
3. The other direction is Q ⊢ (¬Con(Q) → ¬G_Q), which follows from the fact that if Q is inconsistent, then every formula (including ¬G_Q) is provable in Q.
4. Since T includes all axioms of Q, T proves the same equivalence: T ⊢ (¬Con(Q) ↔ ¬G_Q).
5. In T, we have ¬Con(Q) as an axiom, so T ⊢ ¬Con(Q).
6. From steps 4 and 5, using modus ponens within T: T ⊢ ⌜¬G_Q⌝_Q,T.

For the consistency of T: While T asserts that Q is inconsistent, this doesn't make T itself inconsistent. Assuming Q is consistent, T is actually consistent by a relative consistency result that follows from Gödel's second incompleteness theorem: if Q is consistent, then Q cannot prove Con(Q), and therefore Q + ¬Con(Q) is consistent.

Therefore, S and T represent contradictory yet potentially consistent theoretical perspectives on G_Q. □

This corollary provides an alternative proof of the Metalogical Subjectivity Theorem. Instead of showing that a sentence transcends one theory but is directly provable in another, we've shown that the same sentence can be proven true in one theory and false in another, with both theories remaining consistent. This reveals an even deeper form of perspective-relativity in mathematical truth.

## 4. Conclusion

The Metalogical Subjectivity Theorem establishes that certain aspects of mathematical truth are inherently perspective-dependent. What requires transcendence from one theoretical perspective may be directly decidable from another. This subjectivity is not arbitrary but is structured by the metalogical relationships between theories.

Our formalization of subjectivity within mathematical logic represents a significant advance in understanding the nature of mathematical truth. We have shown that subjectivity is not merely a philosophical concern but a formal, mathematical property that can be precisely defined and rigorously analyzed. The concept of metalogical subjectivity provides a framework for understanding how truth can be relative to theoretical perspective without sacrificing rigor or precision.

The framework of Logical Transcendence, Metalogical Transduction, and Proof by Transcendence offers a rigorous way to work with this subjectivity, showing how theories can evolve in principled ways to incorporate transcendent truths. These concepts reveal that mathematics is not a single, monolithic structure but a landscape of perspectives, each with different capacities for resolving metalogical questions.

By capturing subjectivity in rigorous form, we open new avenues for exploring how formal systems relate to one another and how mathematical knowledge evolves through the recognition and incorporation of transcendent truths. This framework provides a precise language for discussing phenomena that have traditionally been considered beyond the scope of formal mathematics, bridging the gap between formal systems and the subjective aspects of mathematical practice.

## References

1. Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für Mathematik und Physik, 38, 173-198.

2. Kunen, K. (1980). Set Theory: An Introduction to Independence Proofs. North-Holland.

3. Löb, M. H. (1955). Solution of a problem of Leon Henkin. Journal of Symbolic Logic, 20(2), 115-118.

4. Raatikainen, P. (2005). On the philosophical relevance of Gödel's incompleteness theorems. Revue Internationale de Philosophie, 59(4), 513-534.

5. Tarski, A., Mostowski, A., & Robinson, R. M. (1953). Undecidable Theories. Amsterdam: North-Holland.
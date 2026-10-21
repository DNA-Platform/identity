# The Foundational Semantics of Reference: A Model-Theoretic Exploration

## Abstract

This paper presents a foundational investigation into the semantics of reference through systematic analysis of the primitive ternary relation R(x,y,t), interpreted as "x refers to y through t." By exhaustively examining the five structural cases where subject, object, and relationship variables may coincide or differ, we discover a minimal set of eight referents that form a complete semantic model for reference itself. This approach inverts traditional theory-building: rather than axiomatizing first and interpreting later, we derive necessary formal structure from semantic requirements.

## 1. Introduction

### 1.1 The Semantic-First Approach

Traditional formal theories typically begin with axioms and derive meaning through interpretation. Semantic Reference Theory (SRT) reverses this approach: we begin with meaningful relationships—symbol and literal, subject and object, representation and reference—and discover what formal structure they require.

This investigation asks: What referents must exist for reference itself to be coherent? What relationships between these referents are semantically necessary? Can we build a closed model where everything needed to discuss reference is itself a referent that can be referred to?

### 1.2 The Domain of Referents

We work within a domain where everything is a "referent"—something that can be referred to. This includes not just concrete objects but abstract concepts like relationships, properties, and even reference itself. The fundamental question becomes: How do referents refer to each other, and what patterns emerge from these references?

## 2. The Five Structural Cases

### 2.1 Methodology

Given the primitive relation `s =r> o` (s refers to o through r), we systematically explore what happens when these variables coincide. This exhaustive case analysis reveals which referents must exist to make the system coherent.

### 2.2 Case Analysis

#### Case 1: All Distinct (s ≠ r ≠ o)
**Semantic Interpretation**: Standard subject-object-relationship
**Model**: `sub =rel> obj`

This represents the archetypal relationship where subject, relationship, and object are all distinct. We introduce three referents:
- `sub`: the type representing subjecthood
- `rel`: the type representing relationships
- `obj`: the type representing objecthood

#### Case 2: Subject is Relationship (s = r ≠ o)
**Semantic Interpretation**: Self-representing relationship
**Model**: `sym =sym> lit`

Here the relationship represents the object through itself. We introduce:
- `sym`: symbol (acting as both subject and relationship)
- `lit`: literal (the object)

This captures how symbols symbolize literals through the relationship of symbolization itself.

#### Case 3: Subject is Object (s = o ≠ r)
**Semantic Interpretation**: Self-reference through external relationship
**Model**: `ref =eq> ref`

An entity relates to itself through an external relationship. We introduce:
- `ref`: referent (both subject and object)
- `eq`: equality (the external relationship)

This captures how things can equal themselves.

#### Case 4: Relationship is Object (r = o ≠ s)
**Semantic Interpretation**: Relationships as objects of reference
**Model**: `sym =rep> rep`

A subject relates to something that is both relationship and object. We model:
- `sym`: symbol (subject)
- `rep`: representation (both relationship and object)

This captures how symbols participate in representations.

#### Case 5: All Equal (s = r = o)
**Semantic Interpretation**: Complete self-reference
**Model**: `eq =eq> eq`

Pure self-reference where an entity relates to itself through itself. The paradigmatic example:
- `eq`: equality (subject, relationship, and object)

Also satisfied by `rel =rel> rel` (relationships relate to themselves).

## 3. The Eight-Referent Model

### 3.1 Core Referents

From our case analysis, eight fundamental referents emerge:

1. **eq**: Equality - the foundational self-relationship
2. **ref**: Referent - the universal type
3. **sub**: Subject - the type of things that refer
4. **rel**: Relationship - the type of relationships
5. **obj**: Object - the type of things referred to
6. **sym**: Symbol - the type of symbolic representations
7. **rep**: Representation - the type of representations
8. **lit**: Literal - the type of concrete entities

### 3.2 Fundamental Relationships

The model establishes these core relationships:

```
sub =rel> obj     // Archetypal subject-object relationship
sym =sym> lit     // Symbols symbolize literals
ref =eq> ref      // Referents equal themselves
sym =rep> rep     // Symbols are part of representations
rel =rel> rel     // Relationships self-relate
eq =eq> eq        // Equality equals itself
```

### 3.3 Derived Structure

From these fundamentals, additional structure emerges:

**Type Inheritance**: Relationship types inherit from rel
```
sym =rel> rel     // Symbols are relationships
rep =rel> rel     // Representations are relationships
eq =rel> rel      // Equality is a relationship
```

**Property Structure**: Self-referential patterns indicate properties
```
sub =sub> sub     // Subjecthood as property
obj =obj> obj     // Objecthood as property
```

**Most Specific Relationships**: For each pair, one relationship is most specific
```
(sub,obj) = rel   // rel is most specific between sub and obj
(sym,lit) = sym   // sym is most specific between sym and lit
(ref,ref) = eq    // eq is most specific for ref self-reference
```

## 4. Theoretical Implications

### 4.1 Types vs. Instances

The model carefully distinguishes between types and instances. The referent `sub` represents the TYPE of subjects, not a particular subject instance. This distinction is crucial: just as the type "Number" in programming doesn't itself have numeric operations, the type `sub` doesn't necessarily have the properties of subject instances.

This explains why `sub =sub> sub` (subject has subjecthood property) is not automatically derivable—types don't necessarily possess the properties of their instances.

### 4.2 The Symbol-Type Correspondence

A key insight emerges regarding the relationship between types and their canonical symbols. If `sub = (rel)` (subject is the canonical symbol for relationships), then:
- Subjecthood represents relationships through itself
- Being a subject IS being in a relationship
- The symbol-type correspondence unifies representation and instantiation

### 4.3 Sparse Relationships

Not every pair of referents has a defined relationship beyond equality. This sparsity is semantically meaningful—not everything has a semantic relationship to everything else. The model is intentionally incomplete, reflecting the selective nature of meaningful reference.

### 4.4 Extensibility

The model provides a framework that can be extended rather than a closed system. Canonical symbols like `(obj)`, `(sub)` can be added when needed, but aren't required for the core semantics. This extensibility is a feature: SRT provides the foundation upon which richer semantic structures can be built.

## 5. Formal Properties

### 5.1 Consistency

The model exhibits internal consistency:
- No contradictory relationships (x =r> y and x ≠r> y never both hold)
- Type inheritance forms a proper hierarchy
- Most specific relationships are unique when they exist
- Self-referential patterns (like `eq =eq> eq`) are stable

### 5.2 Completeness for Core Semantics

With just eight referents, the model captures:
- Subject-object-relationship structure
- Symbol-literal distinction
- Representation and reference
- Properties and types
- Equality and self-reference

This suggests these eight referents form a minimal complete basis for discussing reference.

### 5.3 Semantic Validity

Not all logically possible relationships are semantically valid. For instance, if we tried to introduce `≠rel` (not-relationship) as a relationship type, we'd get:
```
x ≠rel> y ⟺ x =≠rel> y ⟺ x =rel> y
```
A contradiction—showing that "not being in a relationship" cannot itself be a relationship. The model respects semantic constraints that pure logic might not capture.

## 6. Toward an Empty Catalogue

### 6.1 The Bootstrapping Challenge

SRT aims for axioms that are vacuously true in an empty catalogue but spring to life when relationships are added. This creates a fundamental tension: how can we specify semantic structure while maintaining formal emptiness?

### 6.2 Conditional Emergence

The solution involves conditional axioms:
```
∃[x,y,t]: x =t> y ⟹ ∃[eq]: ∀[a,b]: a = b ⟺ a =eq> b
```
"If any relationship exists, equality emerges"

This pattern allows the entire structure to emerge from a single relationship while maintaining emptiness as the base case.

### 6.3 Linguistic Elimination

The ultimate goal is to absorb fundamental referents into the language itself:
- `==` and `≠` replace the need for eq as a constant
- `x ⟹ y` could replace explicit reference to rel
- `(x)` notation replaces explicit symbol referents
- `(x,y)` notation replaces explicit most-specific relationships

When concepts are truly fundamental to meaning, they deserve to be part of the grammar of a language that expresses meaning.

## 7. Conclusion

This investigation demonstrates a novel approach to foundational semantics: by systematically exploring what relationships must exist between referents for reference itself to be coherent, we discover a minimal model of eight referents that captures the essential structure of meaning.

The model is remarkable for what it achieves with minimal machinery:
- No recursive definitions (inheritance through reference chains)
- No infinite regress (symbol termination)
- No arbitrary axioms (semantic necessity drives formalization)

Perhaps most significantly, this work suggests that the foundations of meaning can be discovered rather than stipulated—that semantic structure has an inherent logic that can be uncovered through systematic exploration.

The five structural cases aren't arbitrary but represent the complete space of possibilities for how subject, relationship, and object can relate. The eight referents that emerge aren't chosen but discovered as necessary for semantic coherence. This suggests that at its foundation, meaning has a determinate structure—one that Semantic Reference Theory aims to formalize.

## Appendix: Open Questions

1. **The sub = (rel) Hypothesis**: Is the subject type actually the canonical symbol for relationships? This would elegantly unify several patterns in the model.

2. **Property Hierarchy**: Do properties form their own type hierarchy parallel to but distinct from the relationship hierarchy?

3. **Canonical Symbol Existence**: Should every referent have a canonical symbol, or is extensional symbol creation more appropriate?

4. **Cross-Relationship Completeness**: Should we define relationships between all pairs, or is sparsity semantically meaningful?

These questions point toward future developments in Semantic Reference Theory, as we continue to explore the foundational structure of meaning itself.
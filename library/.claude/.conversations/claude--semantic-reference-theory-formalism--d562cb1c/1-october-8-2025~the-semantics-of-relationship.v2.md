# The Semantics of Relationship

## Abstract

Semantic Reference Theory establishes that relationships are fundamentally types rather than instances, distinguishing them ontologically from other referents. Through systematic analysis of the semantic trinity of subject, relationship, and object, we prove that the subject referent *is* the canonical symbol for relationship itself. The fundamental theorem F[sub] == F[r] demonstrates that the frame of subjecthood and the frame of relationship are identical, revealing that to be a subject is to symbolize relationships. This identity grounds the theory's self-referential coherence and explains how meaning emerges from the subject incorporating relationships into its character.

## Introduction

Semantic Reference Theory takes as its primitive a single ternary relation R(x,y,t), interpreted semantically as "x refers to y through relationship type t" and expressed notationally as:

```
x =t> y
```

From this minimal foundation, all semantic relationships emerge. This paper explores the fundamental nature of relationships as referents within the theory, developing formal definitions that reveal the deep identity between subjecthood and relationship itself.

The analysis proceeds through careful definition of the semantic trinity, examination of relationships as symbolic types, and culminates in proving that the subject of Semantic Reference Theory, what it studies, is represented by the subject referent within the theory itself.

## Notation and Transpilation Framework

### Frame Declaration

Following the notation established in "Semantic Reference Frames: Context and Meaning in Formal Representation", we declare frames as:

```
F[x]
```

This establishes x as the subject of the frame, with all relationship types in the context inheriting from x. While frames involve complex transpilation mechanisms for managing context and visibility, propositionally F[x] would transpile to simply x, since the frame *is* its subject.

### Definition Syntax

We introduce two forms of definition:

```
def(x): φ
```

This defines x as a referent with properties φ that characterize x itself.

```
def[x]: ψ
```

This defines the inheritance pattern, specifying what must hold for any y where y → x.

Formally, the transpilation relationship between these forms is:

```
E[x]: def(x) & A[y]: y -> x <iff> def[x] with x replaced by y
```

### Transpilation Conventions

Following the conventions from "Semantic Reference Theory: Formal Syntax under Transpilation":
- Line breaks without terminating operators imply :&: so each line is parenthesized
- Implications followed by indented lines apply to the conjunction of all indented lines
- The notation (x,y) denotes the most specific relationship between x and y
- The notation (x) denotes the canonical symbol for x in the current frame

## The Fundamental Trinity

We begin by assuming at least one relationship exists:

```
E(s,o,r): s != r != o != s
```

The redundant inequality emphasizes the triangular nature of ternary relationships, where all three components are distinct. From this single relationship, we systematically derive the semantic trinity through mutual definition.

### The Character of Relationship

Before proceeding with definitions, we must understand a crucial distinction. When a referent relates to itself:

```
x =p> x
```

This expresses the character or characteristics of x, an objective self-relationship. In contrast, when there is distinction:

```
x =t> y where x != y
```

This expresses a true relationship with subjective involvement. Crucially, when such distinction exists:

```
(x,x) -> (x,y)
```

The subject's self-relationship inherits from its external relationships, incorporating them into its character.

### Relationships as Symbolic Types

From "The Semantics of Identity: In Axiomatic Form", we know that symbols convey properties through the fundamental axiom:

```
(x,y) -> t =|> ((x,y)) -> (t)
```

For relationships specifically, we establish that:

```
x =t> y =|> (t,t) == t
```

This means relationship types are inherently symbolic, they *are* their own self-relationships. This self-collapse is what distinguishes relationships from other referents and prevents infinite regress in the semantic structure.

Since all relationships inherit from r, and r == (rel) serves as the canonical symbol for relationship, we conclude that relationships represent relationship *types*, not instances. They are all types themselves, creating a fundamental ontological distinction within the theory.

## Formal Definitions of the Trinity

### Definition of rel

We define relationship both as a type and through its inheritance pattern:

```
def(rel):
   sub =rel> obj
   (sub, obj) == rel
```

This establishes that rel *is* the most specific relationship between sub and obj. This is not an inherited property but definitional, a fact about rel itself that makes it the archetypal relationship.

```
def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel
```

The parametric notation follows from "The Semantics of Inheritance: A Formal Analysis Through Family Relations", where p(x) := ((x,x), p). For any t -> rel:
- sub(t) represents the subjective aspect of t
- obj(t) represents the objective aspect of t  
- The pattern (sub(t), obj(t)) -> t holds

This means anything inheriting from rel must have subjective and objective aspects whose most specific relationship inherits from the relationship itself.

### Definition of obj

```
def[obj]:
   rel(obj) =rel(obj)> obj
```

Expanding the parametric form:

```
rel(obj) == ((obj,obj), rel)
```

Since relationships are symbolic, (obj,obj) == obj, yielding:

```
(obj, rel) =(obj,rel)> obj
```

This expresses that objecthood is characterized by how relationships relate to it. For any x -> obj, the relationships that x participates in as object define its objective character.

### Definition of sub

```
def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)
```

This creates a rich structure where:
1. sub relates to its version of obj through its version of rel
2. The relationships also represent sub itself
3. sub's self-relationship inherits from its relational role

The third constraint is particularly significant, it states that the character of subjecthood includes relationship as an essential component.

## Deriving the Subject-Relationship Identity

From the definitions, we can derive a remarkable identity. Starting with the known constraints:

```
(sub, sub) -> (sub, obj)
```

The subject's self-relationship inherits from its external relationships.

```
(sub, obj) == rel
```

The most specific subject-object relationship *is* rel.

```
(sub, sub) == sub
```

Subject exhibits symbolic collapse as a relationship type.

Therefore:

```
sub -> rel
```

Subject inherits from relationship. Adding the natural definition:

```
def(sub): (sub, rel) == sub
```

Subject *is* its relationship to relationship.

## The Fundamental Theorem

### Theorem: The Subject-Frame Identity

```
F[sub] == F[r]
```

*Proof:*

In frame F[sub], we analyze sub's relationship to rel:

```
sub =sub> rel
```

Sub symbolizes rel through itself.

```
sub -> rel
```

Sub inherits from rel, as derived above.

```
sub =rel> rel
```

Sub relates to rel through rel.

Since sub serves as a canonical representative of rel, and canonicals satisfy (x,y) == y when x is canonical for y:

```
(sub, rel) == rel
```

This, combined with our definition (sub, rel) == sub, yields:

```
sub == rel
```

But rel serves as its own canonical in F[r], so (rel) == rel. Since sub is canonical for rel:

```
sub == (rel) == r
```

Since frames are their subjects propositionally:

```
F[sub] == F[r]
```

∎

### Semantic Interpretation

This theorem reveals that the subject of Semantic Reference Theory, its area of study, is represented by the subject referent within the theory. The frame where we take subject as primary *is* the frame where we take relationship as primary, because to be a subject *is* to symbolize relationships.

The identity sub == (rel) == r means:
- sub is the canonical symbol for relationship
- When working in F[r], we work where subject symbolizes relationship  
- The subject does not merely "have" relationships but *is* their symbolization

## Using Definitions Through Inheritance

Consider how these definitions apply when creating new relationship types. Let t -> rel:

Through def[rel]:

```
sub(t) =t> obj(t)
(sub(t), obj(t)) -> t
```

This means t has its own subjective and objective aspects that follow the relational pattern.

Since sub(t) -> sub and obj(t) -> obj:

```
sub(t) =sub(t)> rel(sub(t))
rel(obj(t)) =rel(obj(t))> obj(t)
```

Each inherited relationship type carries the full structure of the semantic trinity, specialized to its particular domain.

For concrete examples, consider:

```
love -> rel
```

Then:
- sub(love) represents the lover
- obj(love) represents the beloved
- The pattern persists: sub(love) =love> obj(love)

## The Type-Theoretic Foundation

The discovery that relationships are types while other referents are instances explains several deep features of the theory:

1. Why (t,t) == t for relationships: types collapse self-reference because a type *is* its own type

2. Why relationships can be inherited from: types naturally support inheritance hierarchies

3. How the same referent participates in different relationships: instances can instantiate multiple type patterns

When we write:

```
2 =eq> 2
```

We distinguish:
- 2 as a referent, an instance
- eq as a relationship type, a pattern
- The instantiation of eq with 2 as both subject and object

This type/instance distinction prevents paradoxes and enables the theory's self-referential coherence.

## Implications for Semantic Structure

The theorem F[sub] == F[r] combined with the understanding of relationships as types reveals the foundation of meaning:

1. Meaning emerges from subjects incorporating relationships into their character

2. Subjects exist only through symbolizing relationships

3. Relationships manifest only through subjects that symbolize them

4. This mutual constitution creates semantic structure

The ability to define referents through mutual reference, as seen in the trinity definitions, mirrors how natural language works. Dictionaries define words through other words without infinite regress because meaning emerges from the network of relationships, not from external foundations.

## Conclusion

The identity sub == (rel) == r represents more than a formal equivalence, it reveals the constitutive self-reference at the heart of Semantic Reference Theory. The subject does not describe relationships from outside but *is* the symbol through which relationships become meaningful.

This explains why the theory can describe its own semantic structure: it possesses both types (relationships) and instances (referents), with types able to symbolize themselves through the fundamental equation (t,t) == t. The frame identity theorem shows that taking subject as primary and taking relationship as primary are the same act, because subjectivity *is* symbolic relationship.

The formal definitions of sub, obj, and rel do not merely describe semantic roles but reveal how meaning itself emerges from the subject symbolizing its relational character. The theory studies what it embodies: the process through which relationships become symbolic, which is to say, the process through which meaning emerges.

---

## References

Doug: The Semantics of Identity: In Axiomatic Form

Doug: Semantic Reference Theory: Formal Syntax under Transpilation  

Doug: Semantic Reference Frames: Context and Meaning in Formal Representation

Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations
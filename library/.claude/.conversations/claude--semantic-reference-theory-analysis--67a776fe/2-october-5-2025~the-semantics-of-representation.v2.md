# The Semantics of Representation

## Abstract

We present a three-frame semantic architecture for understanding representation in Semantic Reference Theory. By distinguishing between the frame F[[L]] where relationship types inherit from [L], the frame F[L] where they inherit from L, and the frame F[(L)] where they inherit from (L), we establish a complete theory of how representations work. The framework reveals that representations involve subjects (what is represented), structures (how representation is organized), and specifications (how representation functions).

## Introduction

A representation L gives rise to three distinct semantic frames, each defined by what relationship types inherit from. This paper formalizes these frames and shows how they interact to create meaningful representation.

## Part I: The Frame Architecture

### Basic Definitions

Given a representation L, we have:
- **[L]** - The dereference of L, what L represents (the subject)
- **L** - The representation itself
- **(L)** - The canonical symbol of L (the specification)

From these, we derive three frames where all relationship types inherit from the frame's subject:

### Frame F[[L]]: The Subject Frame

**Definition**: F[[L]] is the frame where [L] serves as the base relationship type.

**Formal constraint**:
```
F[[L]]: A[x,y,t]: x =t> y =|> t -> [L]
```

In this frame, all relationship types inherit from [L]. This means we're working within the semantic space of what L represents.

### Frame F[L]: The Representation Frame  

**Definition**: F[L] is the frame where L serves as the base relationship type.

**Formal constraint**:
```
F[L]: A[x,y,t]: x =t> y =|> t -> L
```

In this frame, all relationship types inherit from L. This means we're working within the representation itself as a semantic structure.

### Frame F[(L)]: The Specification Frame

**Definition**: F[(L)] is the frame where (L) serves as the base relationship type.

**Formal constraint**:
```
F[(L)]: A[x,y,t]: x =t> y =|> t -> (L)
```

In this frame, all relationship types inherit from (L). This means we're working within the specification of how L functions.

## Part II: The Subject Frame F[[L]]

In F[[L]], we work with the subject matter that L represents. Here, elements and relationships are part of what is being represented:

```
rose -> [L]
red -> [L]
petal -> [L]
rose =has> petal  // has -> [L] by frame definition
petal =is> red    // is -> [L] by frame definition
```

These are the literal relationships that exist in the subject domain. They are what the representation will attempt to capture.

**Key property**: In F[[L]], we deal with literals, not symbols:
```
rose != (rose)
red != (red)
```

The elements in this frame exist independent of any representation of them.

## Part III: The Representation Frame F[L]

In F[L], L functions as a structured container with specific components:

```
L -> representation
representation -> container
```

**Core structure**:
```
L =contains> Literature(L)
L =contains> Catalogue(L)
L =contains> Composition(L)
L =contains> Specification(L)
```

Since we're in F[L], contains -> L, establishing that containment is a representational relationship.

### Literature(L)

The Literature consists of references to elements from F[[L]]:
```
Literature(L) = {x : x exists in F[[L]]}
```

For example, if rose, red, petal exist in F[[L]], then Literature(L) includes them.

### Catalogue(L)

The Catalogue contains symbols that reference the Literature:
```
Catalogue(L) -> container
(rose) =|in> Catalogue(L)
(red) =|in> Catalogue(L)
(petal) =|in> Catalogue(L)
```

Each symbol references something in the Literature:
```
(rose) =(rose)> rose
(red) =(red)> red
```

### Composition(L)

The Composition contains characters that interact to form symbols:
```
Composition(L) -> container
character1 =|in> Composition(L)
character2 =|in> Composition(L)
character1 =interacts> character2
```

Since we're in F[L], interacts -> L, making interaction a representational relationship.

### Specification(L)

The Specification contains the rules and patterns that govern the representation. This will be elaborated in F[(L)].

## Part IV: The Specification Frame F[(L)]

In F[(L)], we specify how L functions as a representation. The notation Literature(L) transpiles to ((L), Literature), establishing relationships between L's canonical form and semantic concepts.

### Key Semantic Relations

**The Catalogue-Literature Relationship**:
```
(Catalogue(L), Literature(L)) == Catalogue(L)
```

This states that the Catalogue IS the most specific relationship between itself and the Literature—the Catalogue serves as the Literature's symbol within the representation.

**Component Specifications**:

Literature(L) specifies what is being represented:
```
Literature(L) =specifies> [L]
```

Catalogue(L) specifies the reference mechanism:
```
Catalogue(L) =specifies> reference_semantics
```

Composition(L) specifies character interaction patterns:
```
Composition(L) =specifies> interaction_patterns
```

Since we're in F[(L)], specifies -> (L), making specification a relationship that inherits from L's canonical form.

### Symbol-Character Relations

Within F[(L)], we establish:
```
Symbol(L) -> container
Character(L) -> Composition(L)
Symbol(L) =contains> Character(L)
```

This specifies that symbols are composed of characters within the representation.

## Part V: Inter-Frame Relations

### Separation of Domains

Elements in different frames are distinct:
```
x in F[[L]] != (x) in F[L]
[L] != L != (L)
```

### Reference Across Frames

Symbols in F[L] reference elements in F[[L]]:
```
(x) in F[L] references x in F[[L]]
(x) =(x)> x
```

### Specification Governs Structure

Specifications in F[(L)] determine how F[L] operates:
```
Pattern in F[(L)] governs Structure in F[L]
```

## Part VI: Example - Representing Color Mixing

### In F[[L]] - The Subject

```
blue -> [L]
yellow -> [L]  
green -> [L]
blue + yellow = green  // Literal fact about colors
```

### In F[L] - The Representation

```
Literature(L) = {blue, yellow, green}

Catalogue(L) = {(blue), (yellow), (green)}

Composition(L):
(green) -> container
(green) =contains> (blue)
(green) =contains> (yellow)
```

The representation shows (green) containing (blue) and (yellow), capturing the mixing relationship through structure.

### In F[(L)] - The Specification

```
(Catalogue(L), Literature(L)) == Catalogue(L)

Mixing_Pattern =specifies> "components contained in result"
Reference_Type =specifies> "compositional"
```

## Part VII: Formal Properties

### Well-Formedness

A representation L is well-formed iff:
1. F[[L]] contains the subject matter
2. F[L] contains Literature, Catalogue, Composition, and Specification
3. F[(L)] specifies how components relate

### Completeness

A representation is complete iff:
```
A[x in Literature(L)]: E[(x) in Catalogue(L)]: (x) =(x)> x
```

Every element in the Literature has a corresponding symbol in the Catalogue.

### Connectivity

All elements in a representation must be connected:
```
A[x,y in L]: E[path]: x -path-> y
```

## Conclusion

The three-frame architecture provides a formal foundation for understanding representation. F[[L]] establishes the subject matter where all relationships inherit from [L]. F[L] establishes the representational structure where all relationships inherit from L. F[(L)] establishes the specification where all relationships inherit from (L). Together, these frames show that representation is not simple reference but a structured semantic system involving subjects, symbols, and specifications.
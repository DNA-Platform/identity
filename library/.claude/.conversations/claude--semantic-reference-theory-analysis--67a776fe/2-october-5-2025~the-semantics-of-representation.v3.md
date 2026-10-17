# The Semantics of Representation

## Abstract

We present a three-frame semantic architecture for understanding representation in Semantic Reference Theory. Using the standard frame definition where all relationship types inherit from the frame's subject, we establish frames F[[L]], F[L], and F[(L)] to analyze what representations are, how they're structured, and how they function. Through the library metaphor, we show how representations involve Literature (subject matter), Catalogue (symbol systems), and Composition (character interactions).

## Introduction

In Semantic Reference Theory, a frame F[t] is defined by the constraint that all relationship types inherit from t:

```
F[t]: A[x,y,s]: x =s> y =|> s -> t
```

Given a representation L, we establish three frames to understand its complete semantics.

## Part I: The Three Frames

### Frame F[[L]]: The Subject Domain

In F[[L]], all relationship types inherit from [L], where [L] denotes what L represents:

```
F[[L]]: A[x,y,t]: x =t> y =|> t -> [L]
```

Additionally, in F[[L]], subjects of non-reflexive relationships also inherit from [L]:

```
F[[L]]: A[x,y,t]: x =t> y & y != x =|> x -> [L]
```

This additional constraint means that everything actively relating to something else becomes part of the subject matter. This is why F[[L]] requires special attention - it defines not just relationship inheritance but also what counts as part of the subject.

### Frame F[L]: The Representation Structure

In F[L], all relationship types inherit from L:

```
F[L]: A[x,y,t]: x =t> y =|> t -> L
```

Here L is the representation itself, and all relationships within it are representational relationships.

### Frame F[(L)]: The Specification

In F[(L)], all relationship types inherit from (L):

```
F[(L)]: A[x,y,t]: x =t> y =|> t -> (L)
```

Here (L) is the canonical symbol of L, and relationships in this frame specify how L functions.

## Part II: The Subject Frame F[[L]] in Detail

In F[[L]], we work with the literals that constitute the subject matter. For example, if representing colors:

```
red -> [L]        // red is part of the subject
blue -> [L]       // blue is part of the subject  
green -> [L]      // green is part of the subject

blue =mixes> yellow   // mixes -> [L] by frame definition
mixes =produces> green // produces -> [L] by frame definition
```

The double inheritance constraint (both subjects and relationship types inherit from [L]) ensures we capture the complete subject domain - both the entities and how they relate.

## Part III: The Representation Frame F[L] in Detail

In F[L], L functions as a container with four essential components:

```
L -> representation
L -> container
L =contains> Literature(L)
L =contains> Catalogue(L)
L =contains> Composition(L)
L =contains> Specification(L)
```

Since we're in F[L], contains -> L, making containment itself a representational relationship.

### Literature(L)

The Literature references the subject matter from F[[L]]:

```
x =|in> Literature(L) =|> x !-> L
```

Elements in the Literature don't inherit from L - they remain literals with respect to the representation.

### Catalogue(L)

The Catalogue contains symbols that reference the Literature:

```
x =|in> Catalogue(L) =|> E[y: =|in> Literature(L)]: x =(x)> y
```

Every element in the Catalogue is a symbol (like (red), (blue)) that references something in the Literature.

### Composition(L)

The Composition contains characters that interact to form symbols:

```
x =|in> Composition(L) =|> x -> L
```

Characters are part of L (they inherit from it), and they interact:

```
character1 =interacts> character2
interacts -> L  // by frame definition
```

### Connection Through Representation

In F[L], when L contains multiple elements, they connect through shared parts:

```
L =contains> (red)
L =contains> (blue)
L =contains> (green)

(green) -> container
(green) =contains> (blue)   // green contains blue
(green) =contains> (yellow) // green contains yellow

(blue) =similar> (yellow)   // they interact within green
similar -> L               // by frame definition
```

## Part IV: The Specification Frame F[(L)] in Detail

In F[(L)], we specify how L functions as a representation. The notation Literature(L) transpiles to ((L), Literature).

### The Fundamental Specification

```
(Catalogue(L), Literature(L)) == Catalogue(L)
```

The Catalogue IS the most specific relationship between itself and the Literature - it serves as the Literature's symbol.

### Component Specifications

```
Literature(L) =specifies> [L]           // specifies the subject
Catalogue(L) =specifies> reference_type // specifies how symbols refer
Composition(L) =specifies> interaction_pattern // specifies how characters interact
```

Since we're in F[(L)], specifies -> (L).

### Symbol-Character Relations

```
Symbol(L) -> container
Symbol(L) =contains> Character(L)
Character(L) -> Composition(L)
```

This specifies that symbols are composed of characters.

## Part V: Example - Color Representation

### In F[[L]]

```
red -> [L]
blue -> [L]
yellow -> [L]
green -> [L]

blue =combines> yellow
combines =produces> green
combines -> [L]      // by frame definition
produces -> [L]      // by frame definition
```

### In F[L]

```
Literature(L) = {red, blue, yellow, green}  // literals

Catalogue(L) = {(red), (blue), (yellow), (green)}  // symbols

Composition(L):
(green) -> container
(green) =contains> (blue)
(green) =contains> (yellow)
(blue) =interacts> (yellow)
interacts -> L  // by frame definition
```

### In F[(L)]

```
(Catalogue(L), Literature(L)) == Catalogue(L)

Reference(L) =specifies> "compositional"
Pattern(L) =specifies> "containment represents mixing"
```

## Part VI: Key Properties

### Separation

Elements in different frames are distinct:
```
red in F[[L]] != (red) in F[L]
[L] != L != (L)
```

### Reference

Symbols in the Catalogue reference Literature:
```
(red) =(red)> red
```

But (red) and red are in different frames and are not equal.

### Connectivity

Through the frame definitions, all elements in a representation connect:
- In F[[L]]: through shared inheritance from [L]
- In F[L]: through shared inheritance from L
- In F[(L)]: through shared inheritance from (L)

## Conclusion

The three-frame architecture reveals that representations are not simple pointers but complete semantic systems. F[[L]] establishes what is being represented, with both entities and relationships inheriting from [L]. F[L] establishes the representational structure where all internal relationships inherit from L. F[(L)] establishes specifications where all meta-relationships inherit from (L). The frame definitions, combined with the special subject constraint in F[[L]], provide a complete formal account of how representations capture, structure, and express their subjects.
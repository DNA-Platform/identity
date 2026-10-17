# The Semantics of Representation

## Abstract

We present a three-frame semantic architecture for understanding representation in Semantic Reference Theory. By distinguishing between the frame of literature F[[L]], the frame of representation F[L], and the frame of specification F[(L)], we establish a complete theory of how representations capture, structure, and express their subjects. The framework reveals that representations are not mere pointers to content but complete semantic systems involving catalogues of symbols, compositions of characters, and specifications of reference patterns. Through the library metaphor, we show how meaning emerges from the interaction of these three semantic frames.

## Introduction

Every representation involves three distinct semantic perspectives: what is being represented, how it is structured as a representation, and the specification of its referential mechanics. Traditional theories of representation often conflate these perspectives, leading to confusion about what representations are and how they function. This paper establishes a formal framework that cleanly separates these concerns while showing how they interact to create meaningful representation.

The central metaphor draws from the library—an institution dedicated to organizing and providing access to literature. Just as a library contains literature (content), maintains a catalogue (reference system), and operates according to specified principles (methodology), representations function through analogous structures. This metaphor is not merely illustrative but formally precise, as we will demonstrate through the three-frame architecture.

## Part I: The Frame of Literature F[[L]]

### The Subject of Representation

When we speak of representing something, we must first establish what that something is—the subject of the representation. In our framework, we work within the frame F[[L]], where [L] denotes the literature, the literal content that exists independent of any particular representation of it.

Consider representing a rose. In F[[L]], we encounter:

```
[rose] -> [flower]
[flower] -> [plant]
[rose] =[red]> [rose]
[petal] =similar> [petal]
[stem] =supports> [flower]
```

These are literal relationships—facts about roses that hold regardless of how we choose to represent them. The square brackets indicate that these are literals, not symbols. They exist in the world (or in the conceptual space) that our representation will attempt to capture.

### Why "Literature"?

We call this the literature because, like literary content, it consists of the stories, relationships, and meanings that pre-exist their telling. A rose's redness, its petal structure, its biological classification—these are the literature about roses. When we create a representation, we are not creating this content but rather creating a way to reference and structure it.

The literature is characterized by:
- **Independence**: It exists whether or not it is represented
- **Completeness**: It contains all possible facts about the subject
- **Literalness**: Its elements are not symbols but the actual things or concepts

In F[[L]], we write relationships between literals:
```
[blue] =similar> [yellow]  // Similar as primary colors
[blue] =combines> [yellow] =produces> [green]
```

These relationships in the literature will be referenced by our representation, but they are not themselves part of the representation—they are what the representation is about.

## Part II: The Frame of Representation F[L]

### The Structure of Representation

Moving to F[L], we encounter the representation itself as a structured semantic object. Here, L is the representation—a collection that contains several key components:

```
L -> container
L =contains> Catalogue(L)
L =contains> Literature(L)
L =contains> Composition(L)
L =contains> Specification(L)
```

Each component serves a distinct role in the representation.

### The Catalogue: Symbols and Reference

The Catalogue(L) contains the symbols that reference the literature. In the library metaphor, a catalogue doesn't contain books—it contains ways to find and reference books. Similarly, our Catalogue contains symbols that refer to elements in the Literature:

```
Catalogue(L) -> container
Catalogue(L) =contains> (rose)
Catalogue(L) =contains> (red)
Catalogue(L) =contains> (petal)
```

Each symbol in the catalogue references something in the literature:
```
(rose) =(rose)> [rose]
(red) =(red)> [red]
(petal) =(petal)> [petal]
```

The parenthetical notation (x) indicates a symbol—something that represents rather than is.

### The Composition: Characters and Interaction

Symbols don't exist in isolation; they are composed of more primitive elements we call characters. The Composition(L) contains these characters and describes how they interact:

```
Composition(L) -> container
Composition(L) =contains> character[1]
Composition(L) =contains> character[2]
Composition(L) =contains> character[3]
```

Characters interact to form larger structures:
```
character[1] =interacts> character[2]
character[2] =interacts> character[3]
interacts -> connected
```

Consider how the symbol (rose) might be composed:
- In text: characters r, o, s, e interact sequentially
- In image: curved lines and color patches interact spatially
- In concept: semantic primitives interact structurally

The interaction of characters creates the symbols that populate the catalogue. This two-level structure—characters composing into symbols—allows representations to build complex reference from simple elements.

### Example: Representing Color Mixing

Consider representing the fact that blue and yellow make green:

```
Literature(L) = {[blue], [yellow], [green]}

Catalogue(L) = {(blue), (yellow), (green)}

Composition(L):
(green) -> container
(green) =contains> (blue)
(green) =contains> (yellow)
(blue) =similar> (yellow)  // Similar as primary colors
```

The representation shows that (green) literally contains (blue) and (yellow) as components, capturing the mixing relationship through composition structure rather than through external rules.

## Part III: The Frame of Specification F[(L)]

### The Transpilation of Notation

Before examining specifications, we note that the notation Literature(L) transpiles to ((L), Literature), establishing that this is a relationship between L's canonical form and the concept Literature. This syntactic sugar makes our specifications more readable while maintaining formal precision.

### The Role of Specification

In F[(L)], we specify how the representation works—its semantic mechanics. The Specification doesn't just list components; it defines the semantic relationships that make the representation functional:

```
Specification(L) -> container
Specification(L) =contains> Symbol(L)
Specification(L) =contains> Character(L)
Specification(L) =contains> Reference(L)
Specification(L) =contains> Pattern(L)
```

### Defining the Components

Within the specification frame, we establish the semantic roles:

**The Catalogue as Symbol for Literature**:
```
(Catalogue(L), Literature(L)) == Catalogue(L)
```
This states that the Catalogue IS the most specific relationship between itself and the Literature—it functions as the Literature's symbol within the representation.

**Literature as Subject Specification**:
```
Literature(L) =specifies> (subject of L)
```
The Literature component specifies what the representation is about—its semantic domain.

**Symbol and Character Relationships**:
```
Symbol(L) -> container
Symbol(L) =contains> Character(L)
Character(L) =composes> Symbol(L)
```
Symbols are composed of characters, and the specification defines how this composition works.

**Reference Semantics**:
```
Reference(L) =specifies> (how symbols in L refer to literature)
```
Different representations might use different reference semantics—direct denotation, metaphorical reference, or structural correspondence.

### The Act of Specification

When we specify a representation, we are establishing:

1. **What counts as a symbol** in this representation
2. **How characters combine** to form symbols  
3. **How symbols reference** their subjects
4. **What patterns of interaction** create meaning

For instance, specifying a visual representation of a rose:
```
Symbol(rose_image) = {color patches, line segments, textures}
Character(rose_image) = {pixels, gradients}
Reference(rose_image) = {visual similarity, structural correspondence}
Pattern(rose_image) = {spatial adjacency, color harmony}
```

## Part IV: Integration - How the Three Frames Interact

### The Complete Representation System

The three frames work together to create a complete representation:

1. **F[[L]]** provides the subject matter—what we're representing
2. **F[L]** provides the structure—how we organize the representation
3. **F[(L)]** provides the mechanics—how the representation works

### Example: Complete Rose Representation

Let's trace how a rose representation works across all three frames:

**In F[[L]]** - The Literature:
```
[rose] -> [flower]
[rose] =[red]> [rose]
[petal] =curved> [petal]
[stem] =green> [stem]
```

**In F[L]** - The Representation:
```
L = rose_representation

Catalogue(L):
(rose), (petal), (stem), (red), (green), (curved)

Composition(L):
// Petal composition
petal_character[1] =interacts> petal_character[2]
petal_character[2] =interacts> curve_character
// Color composition  
(green) =contains> (blue)
(green) =contains> (yellow)
```

**In F[(L)]** - The Specification:
```
(Catalogue(L), Literature(L)) == Catalogue(L)

Symbol(L) =includes> {(rose), (petal), (stem)}
Character(L) =includes> {curves, colors, connections}
Reference(L) = {(rose) =(rose)> [rose], 
                (petal) =(petal)> [petal]}
Pattern(L) = {petal_arrangement, color_harmony}
```

### Semantic Properties of the Framework

This three-frame architecture reveals several important properties:

**Separation of Concerns**: The subject matter, structural organization, and referential mechanics are cleanly separated, allowing each to vary independently.

**Compositional Structure**: Representations build from characters to symbols to complete catalogues, mirroring how complex meanings emerge from simple elements.

**Reference Without Conflation**: Symbols reference literature without being confused with it—(rose) refers to [rose] but they remain distinct.

**Multiple Valid Representations**: The same literature can be represented through different catalogues, compositions, and specifications, explaining representational diversity.

## Part V: Implications

### For Semantic Theory

This framework provides a formal account of how meaning can be about something without being that thing. The three-frame architecture shows that representation involves not just reference but structured organization and specified mechanics.

### For Philosophy of Representation

The distinction between literature, catalogue, and specification resolves classical puzzles about representation. A painting of a rose works not because it resembles a rose but because its catalogue successfully references rose-literature through specified visual symbols composed of interacting color and shape characters.

### For Computational Representation

The framework suggests how to build representation systems: define the literature (domain), create a catalogue (symbol system), establish composition (syntax), and specify reference mechanics (semantics).

## Conclusion

The semantics of representation requires three distinct but interrelated frames. The frame of literature F[[L]] establishes what is being represented—the subject matter that exists independent of representation. The frame of representation F[L] provides the structural organization through catalogues of symbols composed from interacting characters. The frame of specification F[(L)] defines how the representation works—how symbols reference literature and how characters compose into meaningful structures.

Through the library metaphor, we see that representations are not simple pointers but complete semantic systems. Just as libraries organize access to literature through catalogues, representations organize access to their subjects through structured symbols. The three-frame architecture reveals that meaning emerges not from any single component but from the interaction of literature, structure, and specification.

This framework explains why representations can be partial (catalogues need not reference all literature), why they can differ while representing the same subject (different specifications yield different representations), and how they maintain the distinction between symbol and referent that makes representation possible. The semantics of representation, properly understood, involves not just what we represent but how we structure that representation and specify its operation.
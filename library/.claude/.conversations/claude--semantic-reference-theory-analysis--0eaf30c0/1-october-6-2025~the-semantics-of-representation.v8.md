# The Semantics of Representation

## Prelude

A representation is not a pointer but a universe. When we create L to represent something, we birth three semantic realms: what is represented, how it is structured, and why it functions. These realms—frames in our formal language—interweave to create meaning from reference.

## The Architecture

Given representation L, three frames emerge:

**F[[L]]** where [L] is the subject—what L represents  
**F[L]** where L is the structure—the representation itself  
**F[(L)]** where (L) is the canonical symbol—L's name or handle

By the nature of frames, relationships inherit from the frame's subject. This inheritance creates semantic unity within each realm while maintaining their distinction.

## I. The Subject Frame F[[L]]

In F[[L]], we encounter the world that exists before representation—the literals that simply are:

```
        rose
       /    \
      is     has
     /        \
   red      petals
    |         |
   is       curved
    |         |
  color    geometric
```

Here live the facts: rose, red, petals, their relationships. By frame definition, all relationship types inherit from [L]. But F[[L]] demands more:

```
F[[L]]: x =t> y & y != x =|> x -> [L]
```

Not just relationships but active subjects join the subject domain. This double inheritance—of relationships and their subjects—captures the complete territory our representation will map.

## II. The Representation Frame F[L]

In F[L], L reveals itself as a structured cosmos:

```
                    L
        ╱───────────┼───────────╲
       ╱            │            ╲
Literature    Catalogue    Composition
     |            |              |
  {rose,       {(rose),      characters
   red,         (red),       that interact:
   petals}      (petals)}    c₁ ═ c₂ ═ c₃
```

But here's the profound truth: Literature(L) transpiles to ((L), Literature)—it is L's canonical relationship to the concept of literature itself. Similarly for Catalogue(L), Composition(L), and Specification(L). The representation doesn't merely contain these components; it embodies its relationships to these semantic concepts.

### The Literature as Dereferencing

```
x =|in> Literature(L) =|> x =|in> F[[L]]
```

Elements in Literature exist in the frame of literals F[[L]], not in the representation frame F[L]. They don't inherit from L but from [L]—they are what is represented, not the representing machinery. This is dereferencing: accessing the literal content that a representation points to, like opening a book to find the world it describes rather than examining the book as object.

### The Catalogue Symphony  

```
x =|in> Catalogue(L) =|> ∃y ∈ Literature(L): x =(x)> y
```

Every symbol in the Catalogue references something in Literature. The symbol (rose) refers to rose through (rose) =(rose)> rose, yet they remain distinct—one in the realm of representation, one in the realm of the represented.

### The Composition Dance

```
character₁ =interacts> character₂
character₂ =interacts> character₃
```

Characters exist only in interaction. They touch, combine, flow into each other to birth symbols. In text, letters interact sequentially. In images, pixels interact spatially. In concepts, primitives interact structurally. No character stands alone.

## III. The Specification Frame F[(L)]

In F[(L)], the frame is organized around (L) as the canonical symbol—L's name or handle. Here we work with how L is specified and identified:

```
(L) =(L)> L
((L),L) == (L)
```

The canonical symbol (L) refers to L through itself, and IS the most specific relationship between itself and L. This frame contains the symbolic machinery for identifying and working with L as a named entity.

```
(Catalogue(L), Literature(L)) == Catalogue(L)
```

This equation reveals that the Catalogue IS the most specific relationship between itself and Literature. It doesn't merely represent Literature; it embodies the act of representation.

Here we specify:
- How L is symbolically identified through (L)
- How symbols reference (denotation, metaphor, structure)
- How characters interact (sequential, spatial, hierarchical)  
- How meaning emerges from pattern
- The symbolic machinery that names and handles L

## IV. The Rose Representation

Let us represent a rose across all three frames:

### In F[[L]]: The Rose Itself (Sparse Literals)

```
rose ={[(petal)]}> rose
rose ={[(leaf)]}> rose
[(petal)] =[red]> [(petal)]
[(leaf)] =[green]> [(leaf)]
[(petal)] =[red]> [(petal)] =|> rose =[red]> rose
```

The sparse literals: a rose has petals and leaves, petals are red, leaves are green, and the rose is red because its petals are. The notation {[(petal)]} means "petals" - a collection of the indefinite petal concept.

### In F[L]: The Rose Represented (Rich Character Interactions)

```
Literature(L) = {rose, [(petal)], [(leaf)]}

Catalogue(L):
    (rose) =(rose)> rose
    ([(petal)]) =([(petal)])> [(petal)]
    ([(leaf)]) =([(leaf)])> [(leaf)]
    
Composition(L) - Character Interactions:

The Rose Structure:
    rose =contains> flower
    rose =contains> stem
    flower =contains> {petal₁, petal₂, petal₃, ...}
    stem =contains> {leaf₁, leaf₂, ...}
    
Petal Ordering (using inheritance):
    petal₂ -> (petal₁, next)
    petal₃ -> (petal₂, next)
    (each petal inherits "nextness" from previous)
    
Leaf Ordering:
    leaf₂ -> (leaf₁, next)
    leaf₃ -> (leaf₂, next)
    
Color as Character Composition:
    green =contains> blue
    green =contains> yellow
    blue =similar> yellow (they interact to form green)
    
Property Characters:
    beautiful (interacts with flower)
    sweet (interacts with rose)
    red (interacts with each petal)
    green (interacts with each leaf)
    
Character Interaction Diagrams:

    flower ←→ beautiful
       ↓
    petal₁ ←→ red
       ↓
    petal₂ ←→ red
       ↓
    petal₃ ←→ red
    
    stem ←→ strong
       ↓
    leaf₁ ←→ green
       ↓  
    leaf₂ ←→ green
    
    rose ←→ sweet ←→ beautiful
       ↓
    (creates emergent meaning)

Full Symbolic Structure:
    (rose) contains:
        (flower) interacts-with (beautiful)
            (petal₁) interacts-with (red)
            (petal₂) interacts-with (red) inherits-from (petal₁,next)
            (petal₃) interacts-with (red) inherits-from (petal₂,next)
        (stem) interacts-with (strong)
            (leaf₁) interacts-with (green)
            (leaf₂) interacts-with (green) inherits-from (leaf₁,next)
        (sweet) interacts-throughout
```

The representation builds far richer structure than the sparse literals through interacting characters, each symbol referencing its literal while adding layers of meaning through composition.

### In F[(L)]: The Rose Specification

```
Reference(L) =specifies> "enrichment through character interaction"
Pattern(L) =specifies> "inheritance chains for ordering"
Interaction(L) =specifies> "properties emerge from character relationships"

Symbol Specifications:
    (rose): composed of (flower) + (stem) + (sweet)
    (flower): emerges from interaction of petals with beautiful
    (petal_n): ordered through (petal_{n-1}, next) inheritance
    (red): character that binds to each petal individually
    (green): contains (blue) and (yellow) as interacting components
    (beautiful): emerges from flower-petal-red interaction pattern
```

The specification defines how the representation enriches the sparse literals through character interactions, creating emergent properties and relationships not explicit in F[[L]].

## V. The Connectivity Principle

In F[L], all elements connect:

```
        L
        │
    ┌───┼───┐
    │   │   │
  (red)(rose)(green)
    │  ╱│╲   │
    │ ╱ │ ╲  │
    shared characters
    forming unified
    representation
```

Disconnected elements cannot coexist in one representation—they form separate representations. When (green) contains (blue) and (yellow), and these interact through similarity, the web of connection spreads through the entire structure.

## VI. The Separation Theorem

Across frames, absolute distinction:

```
red ≠ (red) ≠ specification of red
[L] ≠ L ≠ (L)
```

The literal red exists in F[[L]]. The symbol (red) exists in F[L]. The specification of how (red) works exists in F[(L)]. They are three faces of meaning, forever distinct yet forever connected through reference.

## VII. Representational Variations

Same Literature, different expressions:

```
L₁ (painting):          L₂ (haiku):           L₃ (equation):
Catalogue: colors       Catalogue: words      Catalogue: variables
Composition: pixels     Composition: syllables Composition: operators
Reference: visual       Reference: metaphoric  Reference: structural
```

The rose remains rose. The representations dance different dances, each true to its own nature while maintaining fidelity to what they represent.

## VIII. The Beauty of the Architecture

This three-frame structure achieves something remarkable: it separates what must be distinct while connecting what must be unified. The subject exists independent of representation (F[[L]]). The representation has internal structure (F[L]). The specification governs operation (F[(L)]). Yet through the inheritance patterns of frames and the reference relationships between symbols and literals, meaning emerges.

A representation is thus revealed as more than a sign pointing at a signified. It is:
- A structured collection (L as container)
- A reference system (Catalogue as symbol for Literature)  
- A composition (characters interacting)
- A specification (how reference is achieved)

All existing simultaneously across three semantic realms, each complete in itself yet incomplete without the others.

## IX. Formal Properties

**Well-formedness**: L is well-formed iff it contains Literature, Catalogue, Composition, and Specification, with all elements connected.

**Completeness**: Every element in Literature has a corresponding symbol in Catalogue.

**Coherence**: All relationship types within each frame inherit from that frame's subject.

**Separation**: Elements in different frames remain distinct despite reference relationships.

## Coda

The semantics of representation reveals representation as an act of creation, not mere pointing. To represent is to establish three worlds and weave them into meaning. The literal world of what is. The symbolic world of what represents. The specifying world of how representation occurs. Together, they form the complete semantic architecture through which meaning moves from world to mind to expression and back again.

In this architecture, the library metaphor finds its deepest truth. Literature exists. Catalogues organize access. Composition builds the symbols. Specification defines the rules. And through it all, meaning flows—not as something added to structure but as what emerges when structure, subject, and specification dance together in the three-frame symphony of representation.
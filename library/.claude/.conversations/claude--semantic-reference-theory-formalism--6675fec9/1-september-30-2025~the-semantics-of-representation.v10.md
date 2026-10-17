# The Semantics of Representation
## [Referencing] The Art of Representing Representation Itself

### Abstract

This article presents a complete representation language within Semantic Reference Theory (SRT) that can express any semantic structure using only two fundamental representation functions. We show how complex notational constructs—property contextualization, relationship inheritance, ordered collections, and entire semantic catalogues—reduce to applications of R'(x) and R''(x,y), written as (x) and (x,y). The resulting system provides a formal foundation for representing not just individual references but entire semantic structures, including the representations themselves.

---

## I. The Representation Functions

Semantic Reference Theory builds from a single primitive relation R(x,y,t): "x refers to y through relationship type t". From this, we derive two fundamental representation functions that serve as the foundation for all semantic representation:

### R' - The Unary Representation Function

**Notation:** R'(x) written as **(x)**

**Purpose:** To create a canonical symbol that can represent a referent

**SRT Definition:**
```
(x) =(x)> x         // The symbol refers to its literal through itself
@ =@> (x)           // The symbol is representative of the current frame
(@,(x)) == @        // The frame's relationship to the symbol IS the frame
```

**Transpilation to First-Order Logic:**
```
∃!c: R(c,x,c) ∧ R(@,c,@) ∧ ((@,c) = @)
```

### R'' - The Binary Representation Function  

**Notation:** R''(x,y) written as **(x,y)**

**Purpose:** To identify the most specific relationship type through which x refers to y

**SRT Definition:**
```
x =(x,y)> y                                    // x refers to y through their most specific relationship
A(t: x =t> y): (x,y) -> t | (x,y) == t       // (x,y) inherits from or equals all other relationships
A(t: x =t> y):E[s]: s != t =|> s -> t !-> s  // Ensures uniqueness (no cycles)
```

**Transpilation to First-Order Logic:**
```
∃!t: R(x,y,t) ∧ ∀s: (R(x,y,s) → (s = t ∨ inherit(t,s)))
```

---

## II. Basic Set Notation: Distinguishing Self from Other

### Motivation

Before building complex structures, we need notation to clarify when referents are the same versus different. Consider x =p> x versus x =t> y - self-reference versus reference to another.

### The Notation

**{x,y}** - Asserts x != y (ordered pair of distinct elements)  
**{x}** - Shorthand for (x,x) (self-reference)

### Reduction

- {x,y} simply clarifies that we're using (x,y) where x != y
- {x} is syntactic sugar for (x,x)

### Canonical Example

**SRT expressions:**
```
john =loves> mary     // john refers to mary (distinct)
john =proud> john     // john has property proud (self-reference)
```

**Using set notation:**
```
{john,mary}          // Confirms they're distinct
{john}               // Indicates self-reference, equals (john,john)
```

This notation prepares us for property syntax where {x} will frequently appear.

---

## III. Property Contextualization: ({x}.(p))

### Motivation

Properties manifest differently in different contexts. The property "red" means something different for blood than for roses. We need notation to capture p-as-manifested-in-x.

### The Notation

**({x}.(p))** - Property p in the context of x

### Reduction Path

1. Start with ({x}.(p))
2. Expand {x} to (x,x): ((x,x).(p))
3. The dot replaces comma in nested context: ((x,x),(p))

So **({x}.(p))** reduces to **((x,x),(p))** - the representation of the relationship between x's self-reference and property p.

### SRT Interpretation

```
x =p> x                      // x has property p
({x}.(p)) =({x}.(p))> (p)   // The contextualized property represents p
(x) =({x}.(p))> x           // x's symbol refers to x through this contextualized property
```

### Canonical Example: Contextualizing Properties

**SRT expressions:**
```
x =p> x
y =p> y
(x) != (y)           // Different entities
(p) == (p)           // Same abstract property
```

**Representation with contextualization:**
```
({x}.(p))              // p as manifested in x
({y}.(p))              // p as manifested in y
({x}.(p)) != ({y}.(p))  // Different contextualizations
```

**Full reduction:**
```
({x}.(p)) = ((x,x),(p))
({y}.(p)) = ((y,y),(p))
```

The contextualized properties are distinct referents in the domain, capturing that redness manifests uniquely in each context.

---

## IV. Relationship Contextualization: ((x,y)[t])

### Motivation

Just as properties manifest differently in different objects, relationships manifest differently between different pairs. The relationship "loves" between parent-child differs from "loves" between spouses. We need notation for t-as-manifested-between-x-and-y.

### The Notation

**((x,y)[t])** - Relationship t in the context of x and y

### Reduction Path

1. [t] indicates focus on how t specifically manifests
2. The structure parallels property syntax: relationship (x,y) has property (t)
3. ((x,y)[t]) reduces to (((x,y),(x,y)),(t))

### SRT Interpretation

```
x =t> y                 // x refers to y through t
(x,y) -> t              // Most specific relationship inherits from t
(x,y) =(t)> (x,y)       // The relationship has t's symbol as property
((x,y)[t]) represents this specific manifestation
```

### Canonical Example: Contextualizing Relationships

**SRT expressions:**
```
x =t> y
z =t> w
t -> s          // t inherits from s
(x,y) == t      // Most specific relationship
```

**Representation with contextualization:**
```
((x,y)[t])   // t as manifested between x and y
((z,w)[t])   // t as manifested between z and w
((x,y)[t]) != ((z,w)[t])
```

**Full reduction:**
```
((x,y)[t]) = (((x,y),(x,y)),(t))
```

This captures that the same abstract relationship type manifests uniquely in each context.

---

## V. Dereferencing: Pointing to Specific Elements

### Motivation

In complex representations, we need to indicate which element we're focusing on or talking about. Dereferencing lets us navigate within a structure to point to specific referents.

### The Notation

**[x]** - Points to referent x within a larger structure

### Interpretation

When [x] appears in a representation (R):
```
(R) =(R)> x    // The representation's symbol refers to x
```

The bracketed elements become the focal points or canonical literature of the representation.

### Extended Dereferencing Patterns

**({[x]}.(p))** - Points to x (who has property p)  
**((x,[y])[t])** - Points to y (object of the relationship)  
**(([x],y)[t])** - Points to x (subject of the relationship)

### Canonical Example: Identifying Focal Elements

**SRT expressions:**
```
x =p> x
x =q> x  
x =r> x
```

**Representation with dereferencing:**
```
({[x]}.(p).(q).(r))
```

This indicates:
- The representation includes three properties
- The focal element [x] is what we're primarily talking about
- (R) =(R)> x - the representation refers to x

**Without dereferencing:**
```
({x}.(p).(q).(r))
```

This would represent the properties but not indicate x as focal.

---

## VI. Ordered Collections Through Inheritance

### Motivation

We need to represent sequences like "x refers to y refers to z" or collections like {(x,y), (y,z), (z,x)} while preserving order and allowing repetition.

### The Solution

Use membership relationships that inherit from each other to create order.

### Structure

For an ordered collection {a,b,c,b}:
```
coll =m1> a              // First membership
coll =m2> b, m2 -> m1    // Second inherits from first
coll =m3> c, m3 -> m2    // Third inherits from second
coll =m4> b, m4 -> m3    // Fourth inherits from third (b repeats)
```

### Reduction to (x,y)

Each membership becomes a relationship:
- (coll,a) with type m1
- (coll,b) with type m2, plus (m2,m1) for inheritance
- (coll,c) with type m3, plus (m3,m2) for inheritance
- (coll,b) with type m4, plus (m4,m3) for inheritance

### Canonical Example: Ordering References

**SRT expressions:**
```
x =r> y
y =s> z
z =t> x
```

**Representation as ordered collection:**
```
{(x,y), (y,z), (z,x)}
```

**Full structure using inheritance:**
```
c =m1> (x,y)
c =m2> (y,z), m2 -> m1
c =m3> (z,x), m3 -> m2
```

This preserves both the references and their sequential order.

---

## VII. Chain Notation: Linear and Branching Paths

### Motivation

Reference chains like "x refers to y refers to z" are common. We need concise notation for paths through reference structures, including branches.

### Basic Chain Notation

**(x(y)z)** - Chain x => y => z with y marked as potentially significant  
**(x()y()z)** - Explicit edges between each element  
**(xyz)** - Simplified notation when no ambiguity

### With Relationship Types

**((x(y)z){t,s})** - Specifies types: x =t> y =s> z

### Branching Structures

**((x(y)z).(y(a)b))** - y branches to both z and a

### Reduction Strategy

(x(y)z) represents the ordered collection {(x,y), (y,z)}:
```
chain =m1> (x,y)
chain =m2> (y,z), m2 -> m1
```

### Canonical Example: Chains with Branches

**SRT expressions:**
```
x =t> y
y =t> z
y =t> w
```

**Chain representation:**
```
((x(y)z).(y()w))
```

**With types specified:**
```
((x(y)z).(y()w)){t,t,t}
```

**Full reduction:**
```
c =m1> (x,y)      // via t
c =m2> (y,z), m2 -> m1    // via t
c =m3> (y,w), m3 -> m2    // via t
```

The notation captures both the linear progression and the branch point at y.

---

## VIII. Bidirectional Reference: Mutual Relationships

### Motivation

Many relationships are inherently bidirectional: friendship, marriage, communication. We need notation that captures mutual reference as a semantic unit, not just two separate facts.

### The Notation

**(x,y,x){t,s}** - Bidirectional reference where x =t> y =s> x

### Why Not Two Separate Relations?

**(x,y).(y,x)** would mean two unrelated facts  
**(x,y,x)** shows a closed loop - a unified semantic structure

### SRT Interpretation

```
x =t> y & y =s> x    // Two directions
x <s=t> y            // Compact notation for bidirectional reference
```

### Canonical Example: Mutual Reference

**SRT expressions:**
```
x =s> y
y =t> x
// These form a referential loop
```

**As bidirectional reference:**
```
(x,y,x){s,t}
```

**This represents:**
```
x =s> y =t> x
// Or in compact form:
x <t=s> y
```

**Reduction:**
```
b =m1> (x,y)      // x relates to y
b =m2> (y,x), m2 -> m1  // y relates back to x, ordered after first
```

The closed path (x,y,x) captures that these aren't independent facts but a unified relationship of mutual reference.

---

## IX. Composite Structures: Combining All Elements

### Motivation

Real semantic structures combine properties, relationships, chains, and focal elements. We need notation that can compose all these elements into complete representations.

### Combined Notation Examples

**({[x]}.(p).(q))** - x with properties p and q, x is focal  
**((x,y){t}.(y,z){s})** - Chain with specified relationship types  
**((x,y,x){t,s}.(p))** - Bidirectional reference with property

### Canonical Example: Rich Semantic Structure

**SRT expressions:**
```
philosopher =writes> book
book =profound> book
book =dense> book
book =influences> philosopher  // Creating a cycle
philosopher =satisfied> philosopher
```

**Complete representation:**
```
(([philosopher],book,philosopher){writes,influences}.
 ({book}.(profound).(dense)).
 ({philosopher}.(satisfied)))
```

**This breaks down to:**
- Cycle: philosopher =writes> book =influences> philosopher
- Book properties: book =profound> book, book =dense> book
- Philosopher property: philosopher =satisfied> philosopher
- Focal element: [philosopher]

**Reduction involves:**
1. The bidirectional reference pattern
2. Property contextualizations
3. Collection composition with dots
4. Dereferencing to philosopher

---

## X. The Library Metaphor: Complete Representations

### Motivation

A complete semantic structure is like a library: it has books (referents), a catalogue (organization), a name (symbol), and essential works (canon). We use (L) to represent such complete structures.

### The Three Levels

#### Level 1: (L) - The Library Symbol

```
(L) =(L)> L    // The symbol refers to the entire catalogue
```

#### Level 2: L - The Catalogue

The complete set of symbolic referents and relationships created by the representation. For:
```
(L) = ({[x]}.(p1).(p2))
```

L contains:
- Symbols: (x), (p1), (p2)
- Composites: ({x}.(p1)), ({x}.(p2))
- Relationships: ((x,x),(p1)), ((x,x),(p2))
- Structure: How these all relate

#### Level 3: [L] - The Literature

The actual referents: {x, p1, p2}

#### Level 4: [([L])] - The Canon

The essential subset indicated by dereferencing, here just {x} since it's marked with brackets.

### Canonical Example: Knowledge Structure

**SRT expressions:**
```
earth =round> earth
earth =blue> earth  
earth =orbits> sun
sun =star> sun
```

**Library representation:**
```
(L) = (({[earth]}.(round).(blue)).(earth,sun){orbits}.({sun}.(star)))
```

**The catalogue L contains:**
- All symbols: (earth), (round), (blue), (sun), (star), (orbits)
- All composites: ({earth}.(round)), ({earth}.(blue)), ({sun}.(star))
- The relationship: (earth,sun) via orbits
- The complete structure linking these

**The literature [L]:**
{earth, round, blue, sun, star, orbits}

**The canon [([L])]:**
{earth} - marked as focal by brackets

**This single representation (L) captures:**
1. What exists (the literature)
2. How it's organized (the catalogue)
3. What's essential (the canon)
4. A name for the whole (the symbol (L))

---

## XI. Complete Reduction Example

Let's trace a complex representation completely back to (x) and (x,y).

### Starting Notation
```
(L) = ((john,mary){loves}.({mary}.(happy)))
```

### Step 1: Identify Components
- Relationship: (john,mary){loves}
- Property: ({mary}.(happy))

### Step 2: Reduce Relationship Context
```
((john,mary)[loves]) = (((john,mary),(john,mary)),(loves))
```

### Step 3: Reduce Property Context
```
({mary}.(happy)) = ((mary,mary),(happy))
```

### Step 4: Express Collection
The dot creates an ordered collection:
```
coll =m1> ((john,mary),(loves))
coll =m2> ((mary,mary),(happy)), m2 -> m1
```

### Step 5: Complete Reduction to (x,y)

All components reduce to applications of (x,y):
- (john,mary) - R''(john,mary) 
- (mary,mary) - R''(mary,mary)
- ((john,mary),(john,mary)) - R''(R''(john,mary), R''(john,mary))
- ((john,mary),(loves)) - R''(R''(john,mary), R'(loves))
- ((mary,mary),(happy)) - R''(R''(mary,mary), R'(happy))

### Step 6: The Symbol (L)

```
(L) =(L)> L
```

Where L is the catalogue containing all these reduced structures.

---

## XII. Transpilation to First-Order Logic

The complete path from notation to logic:

1. **Complex notation**: ({x}.(p))
2. **Reduces to (x,y)**: ((x,x),(p))
3. **Identifies referents** satisfying:
   - For (x,x): ∃!t: R(x,x,t) ∧ ∀s: R(x,x,s) → inherit(t,s)
   - For (p): ∃!c: R(c,p,c) ∧ R(@,c,@)
   - For ((x,x),(p)): The relationship between these referents

Every construct ultimately grounds in FOL through this transpilation chain.

---

## XIII. Conclusion: The Achievement

We have developed a complete representation language where every semantic structure—from simple properties to entire libraries—reduces to two fundamental operations: (x) for canonical symbols and (x,y) for relationships.

The key insights:

1. **Representation IS Structure**: Symbols don't describe patterns; they embody them. When ({x}.(p)) represents contextualized property, it IS that contextualization, not a description of it.

2. **Context Through Composition**: By building ((x,x),(p)) from nested applications of (x,y), we capture how properties manifest specifically, not abstractly.

3. **Order Through Inheritance**: Sequences emerge from inheritance chains between membership relationships, using only binary relations.

4. **Unity Through Paths**: Bidirectional references (x,y,x) aren't two facts but unified semantic structures, distinguished by their closed-path topology.

5. **Libraries as Universes**: Complete representations (L) capture not just what exists but how it's organized, what's essential, and how to name the whole.

This reduction to (x) and (x,y) shows that semantic complexity emerges from recursive application of reference. The notation developed here isn't just formal machinery but a discovery: meaning has systematic structure, and that structure can represent itself completely using only the patterns from which it emerges.

The library metaphor captures the ultimate goal: a formal system where knowledge can organize itself, name itself, and identify its own essential elements—all through patterns of reference that build from the simple foundation of one thing referring to another.
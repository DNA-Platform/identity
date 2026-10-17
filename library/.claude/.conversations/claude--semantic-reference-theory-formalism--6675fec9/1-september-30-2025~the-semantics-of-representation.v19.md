# The Semantics of Representation
## [Referencing] The Art of Representing Representation Itself

### Abstract

This article presents a complete representation language within Semantic Reference Theory (SRT) that can express any semantic structure using only two fundamental representation functions. We develop a formal specification showing how complex notational constructs—property contextualization, relationship inheritance, ordered collections, and entire semantic catalogues—reduce to applications of R'(x) and R''(x,y), written as (x) and (x,y). The resulting system provides a rigorous foundation for representing not just individual references but entire semantic structures, including representations of representations themselves. This specification defines a new language of representation, establishing the formal machinery necessary for semantics to describe its own foundations.

---

## I. The Representation Functions

Semantic Reference Theory builds from a single primitive relation R(x,y,t): "x refers to y through relationship type t"[²]. From this primitive, we derive two fundamental representation functions that serve as the foundation for all semantic representation.

### R' - The Unary Representation Function

**Notation:** R'(x) written as **(x)**

**Purpose:** To create a canonical symbol that can represent a referent

The symbol (x) refers to its literal through itself, a pattern we express in SRT as:
```
(x) =(x)> x
```

Within any semantic frame F[t], the symbol is representative of that frame[⁷]:
```
@ =@> (x)
(@,(x)) == @
```

Here @ denotes the current frame type, making canonical symbols frame-relative—the same referent may have different canonical representations in different semantic contexts.

### R'' - The Binary Representation Function  

**Notation:** R''(x,y) written as **(x,y)**

**Purpose:** To identify the most specific relationship type through which x refers to y

When x refers to y through multiple relationship types, (x,y) identifies the most specific one:
```
x =(x,y)> y
A[t]: x =t> y =|> (x,y) -> t | (x,y) == t
```

The uniqueness of this most specific relationship is guaranteed by SRT's inheritance structure[⁴]:
```
A(t: x =t> y):E[s]: s != t =|> s -> t !-> s
```

This ensures no cycles exist at the bottom of the inheritance hierarchy, making (x,y) well-defined.

---

## II. Basic Set Notation: Distinguishing Self from Other

### Motivation

Before building complex structures, we need notation to clarify when referents are the same versus different. Consider x =p> x versus x =t> y—self-reference requires different treatment than reference to another.

### The Notation

**{x,y}** asserts x != y, confirming we're working with distinct referents  
**{x}** serves as shorthand for (x,x), indicating self-reference

### Reduction

The set notation doesn't introduce new constructs but clarifies usage:
- {x,y} confirms we're using (x,y) where x != y
- {x} expands to (x,x) for self-relationships

### Canonical Example

Consider the SRT expressions:
```
x =t> y
x =p> x
```

Using set notation, we clarify the structural difference:
```
{x,y}
{x}
```

The first indicates distinct referents in relationship t, while the second indicates x's self-relationship through property p. This notation prepares us for property syntax where {x} frequently appears.

---

## III. Property Contextualization: ({x}.(p))

### Motivation

Properties manifest differently in different contexts. The property "red" means something different for blood than for roses. We need notation to capture p-as-manifested-in-x, not p in the abstract.

### The Notation

**({x}.(p))** represents property p in the context of x

### Reduction Path

The notation ({x}.(p)) reduces through these steps:
1. Expand {x} to (x,x): ((x,x).(p))
2. The dot replaces comma in nested context: ((x,x),(p))

Therefore ({x}.(p)) reduces to ((x,x),(p))—the representation of the relationship between x's self-reference and property p.

### SRT Interpretation

When x has property p, we express this as x =p> x. The fundamental theorem connecting properties to representation:
```
x =p> x =|> (x,x) => (p)
```

This means ((x,x),(p)) represents the relationship between x's self-reference and the property. The contextualized property ({x}.(p)) creates a new referent that represents this specific manifestation:
```
x =p> x
({x}.(p)) =({x}.(p))> (p)
(x) =({x}.(p))> x
```

The contextualized property represents p, while x's symbol refers to x through this contextualized property.

### Canonical Example: Contextualizing Properties

Consider these SRT expressions:
```
x =p> x
y =p> y
(x) != (y)
(p) == (p)
```

Here x and y are different entities sharing the same abstract property p. Using contextualization:
```
({x}.(p))
({y}.(p))
({x}.(p)) != ({y}.(p))
```

The full reduction shows:
```
({x}.(p)) = ((x,x),(p))
({y}.(p)) = ((y,y),(p))
```

The contextualized properties are distinct referents in the domain, capturing that p manifests uniquely in each context.

---

## IV. Relationship Contextualization: ((x,y)[t])

### Motivation

Just as properties manifest differently in different objects, relationships manifest differently between different pairs. The relationship "loves" between parent and child differs fundamentally from "loves" between spouses. We need notation for t-as-manifested-between-x-and-y.

### The Notation

**((x,y)[t])** represents relationship t in the context of x and y

### Reduction Path

The bracket notation [t] indicates focus on how t specifically manifests. The structure parallels property syntax—the relationship (x,y) has property (t):
```
((x,y)[t]) = (((x,y),(x,y)),(t))
```

### SRT Interpretation

When x =t> y, a fundamental theorem establishes the relationship to representation:
```
x =t> y =|> (x,y) =(t)> (x,y)
```

This means (((x,y),(x,y)),(t)) represents how the relationship (x,y) has t's symbol as a property. Additionally, the most specific relationship (x,y) inherits from t[⁴]:
```
x =t> y
(x,y) -> t
(x,y) =(t)> (x,y)
```

The notation ((x,y)[t]) represents this specific manifestation of t between x and y.

### Canonical Example: Contextualizing Relationships

Consider these SRT expressions:
```
x =t> y
z =t> w
t -> s
(x,y) == t
```

Here t manifests between different pairs. Using contextualization:
```
((x,y)[t])
((z,w)[t])
((x,y)[t]) != ((z,w)[t])
```

The full reduction:
```
((x,y)[t]) = (((x,y),(x,y)),(t))
```

This captures that the same abstract relationship type manifests uniquely in each context.

---

## V. Dereferencing: Pointing to Specific Elements

### Motivation

In complex representations, we need to indicate which element we're focusing on or talking about. Dereferencing lets us navigate within a structure to point to specific referents.

### The Notation

**[x]** points to referent x within a larger structure

### Interpretation

When [x] appears in a representation (R), it establishes that the representation's symbol refers to x:
```
(R) =(R)> x
```

The bracketed elements become the focal points or canonical literature[⁶] of the representation.

### Extended Dereferencing Patterns

Dereferencing can be combined with other notation:
- **({[x]}.(p))** points to x who has property p
- **((x,[y])[t])** points to y, the object of the relationship
- **(([x],y)[t])** points to x, the subject of the relationship

### Canonical Example: Identifying Focal Elements

Consider these SRT expressions:
```
x =p> x
x =q> x  
x =r> x
```

With dereferencing, we create:
```
({[x]}.(p).(q).(r))
```

This representation includes three properties with x as the focal element. The representation (R) refers to x:
```
(R) =(R)> x
```

Without dereferencing—({x}.(p).(q).(r))—we would represent the properties but not indicate x as focal.

---

## VI. Ordered Collections Through Inheritance

### Motivation

We need to represent sequences like "x refers to y refers to z" or collections like {(x,y), (y,z), (z,x)} while preserving order and allowing repetition.

### The Solution

Order emerges through inheritance chains between membership relationships. For an ordered collection {a,b,c,b}, we establish:
```
c =α> a
c =β> b & β -> α
c =γ> c & γ -> β
c =δ> b & δ -> γ
```

Using Greek letters for membership relationships creates a natural ordering: α (alpha) first, β (beta) second, γ (gamma) third, δ (delta) fourth. Each membership inherits from the previous, creating order through inheritance structure.

### Reduction to (x,y)

Each membership becomes a relationship with inheritance:
- (c,a) with type m1
- (c,b) with type m2, plus (m2,m1) for inheritance
- (c,c) with type m3, plus (m3,m2) for inheritance
- (c,b) with type m4, plus (m4,m3) for inheritance

### Canonical Example: Ordering References

Consider these SRT expressions:
```
x =r> y
y =s> z
z =t> x
```

As an ordered collection:
```
{(x,y), (y,z), (z,x)}
```

The full structure using inheritance:
```
c =m1> (x,y)
c =m2> (y,z) & m2 -> m1
c =m3> (z,x) & m3 -> m2
```

This preserves both the references and their sequential order.

---

## VII. Chain Notation: Linear and Branching Paths

### Motivation

Reference chains like "x refers to y refers to z" are fundamental semantic patterns. We need concise notation for paths through reference structures, including branches.

### Basic Chain Notation

- **(x(y)z)** represents the chain x => y => z with y marked as potentially significant
- **(x()y()z)** makes edges explicit between each element
- **(xyz)** provides simplified notation when no ambiguity exists

### With Relationship Types

**((x(y)z){t,s})** specifies types: x =t> y =s> z

### Branching Structures

**((x(y)z).(y(a)b))** represents y branching to both z and a

### Reduction Strategy

The chain (x(y)z) represents the ordered collection {(x,y), (y,z)}:
```
c =m1> (x,y)
c =m2> (y,z) & m2 -> m1
```

### Canonical Example: Chains with Branches

Consider these SRT expressions:
```
x =t> y
y =t> z
y =t> w
```

Using chain representation:
```
((x(y)z).(y()w))
```

With types specified:
```
((x(y)z).(y()w)){t,t,t}
```

The full reduction:
```
c =m1> (x,y)
c =m2> (y,z) & m2 -> m1
c =m3> (y,w) & m3 -> m2
```

The notation captures both the linear progression and the branch point at y.

---

## VIII. Bidirectional Reference: Mutual Relationships

### Motivation

Many relationships are inherently bidirectional: friendship, marriage, communication. We need notation that captures mutual reference as a semantic unit, not just two separate facts.

### The Notation

**(x,y,x){t,s}** represents bidirectional reference where x =t> y =s> x

### Why Not Two Separate Relations?

The notation (x,y).(y,x) would represent two unrelated facts. In contrast, (x,y,x) shows a closed loop—a unified semantic structure[⁵].

### SRT Interpretation

The bidirectional pattern creates a semantic unit:
```
x =t> y & y =s> x
x <s=t> y
```

### Canonical Example: Mutual Reference

Consider these SRT expressions:
```
x =s> y
y =t> x
```

These form a referential loop. As bidirectional reference:
```
(x,y,x){s,t}
```

This represents:
```
x =s> y =t> x
x <t=s> y
```

The reduction:
```
b =m1> (x,y)
b =m2> (y,x) & m2 -> m1
```

The closed path (x,y,x) captures that these aren't independent facts but a unified relationship of mutual reference.

---

## IX. Composite Structures: Combining All Elements

### Motivation

Real semantic structures combine properties, relationships, chains, and focal elements. We need notation that can compose all these elements into complete representations.

### Combined Notation Examples

- **({[x]}.(p).(q))** represents x with properties p and q, x is focal
- **((x,y){t}.(y,z){s})** represents a chain with specified relationship types
- **((x,y,x){t,s}.(p))** represents bidirectional reference with property

### Canonical Example: Rich Semantic Structure

Consider these SRT expressions:
```
philosopher =writes> book
book =profound> book
book =dense> book
book =influences> philosopher
philosopher =satisfied> philosopher
```

Complete representation:
```
(([philosopher],book,philosopher){writes,influences}.
 ({book}.(profound).(dense)).
 ({philosopher}.(satisfied)))
```

This breaks down to:
- Cycle: philosopher =writes> book =influences> philosopher
- Book properties: book =profound> book, book =dense> book
- Philosopher property: philosopher =satisfied> philosopher
- Focal element: [philosopher]

The reduction involves the bidirectional reference pattern, property contextualizations, collection composition with dots, and dereferencing to philosopher.

---

## X. The Library Metaphor: Complete Representations

### Motivation

A complete semantic structure resembles a library: it has books (referents), a catalogue (organization), a name (symbol), and essential works (canon). We use (L) to represent such complete structures.

### The Three Levels

#### Level 1: (L) - The Library Symbol

The symbol (L) refers to the entire catalogue:
```
(L) =(L)> L
```

#### Level 2: L - The Catalogue

The catalogue L contains the complete set of symbolic referents and relationships created by the representation. For:
```
(L) = ({[x]}.(p1).(p2))
```

L contains:
- Symbols: (x), (p1), (p2)
- Composites: ({x}.(p1)), ({x}.(p2))
- Relationships: ((x,x),(p1)), ((x,x),(p2))
- Structure: How these all relate

#### Level 3: [L] - The Literature

The literature consists of the actual referents: {x, p1, p2}

#### Level 4: [([L])] - The Canon

The canon is the essential subset indicated by dereferencing, here just {x} since it's marked with brackets.

### Canonical Example: A Complete Knowledge Structure

Consider these SRT expressions:
```
mind =contains> thought
thought =recursive> thought  
thought =generates> idea
idea =original> idea
```

Library representation:
```
(L) = (({[mind]}.(conscious)).(mind,thought){contains}.
       ({thought}.(recursive)).(thought,idea){generates}.
       ({idea}.(original)))
```

The catalogue L contains all symbols: (mind), (thought), (idea), (conscious), (recursive), (original), (contains), (generates); all composites: ({mind}.(conscious)), ({thought}.(recursive)), ({idea}.(original)); the relationships: (mind,thought) via contains, (thought,idea) via generates; and the complete structure linking these.

The literature [L] consists of: {mind, thought, idea, conscious, recursive, original, contains, generates}

The canon [([L])] is: {mind}, marked as focal by brackets

This single representation (L) captures what exists (the literature), how it's organized (the catalogue), what's essential (the canon), and a name for the whole (the symbol (L)).

---

## XI. Complete Reduction Example

Let's trace a complex representation completely back to (x) and (x,y).

### Starting Notation
```
(L) = ((x,y){t}.({y}.(p)))
```

### Step 1: Identify Components

The representation contains a relationship (x,y){t} and a property ({y}.(p)).

### Step 2: Reduce Relationship Context

The contextualized relationship expands:
```
((x,y)[t]) = (((x,y),(x,y)),(t))
```

### Step 3: Reduce Property Context

The property context expands:
```
({y}.(p)) = ((y,y),(p))
```

### Step 4: Express Collection

The dot creates an ordered collection with inheritance:
```
c =m1> ((x,y),(t))
c =m2> ((y,y),(p)) & m2 -> m1
```

### Step 5: Complete Reduction to (x,y)

All components reduce to applications of (x,y):
- (x,y) represents R''(x,y)
- (y,y) represents R''(y,y)
- ((x,y),(x,y)) represents R''(R''(x,y), R''(x,y))
- ((x,y),(t)) represents R''(R''(x,y), R'(t))
- ((y,y),(p)) represents R''(R''(y,y), R'(p))

### Step 6: The Symbol (L)

The library symbol refers to its catalogue:
```
(L) =(L)> L
```

Where L is the catalogue containing all these reduced structures.

---

## XII. Transpilation to First-Order Logic

The complete path from notation to logic follows the transpilation pipeline[¹]:

Starting with complex notation like ({x}.(p)), we reduce to (x,y) form as ((x,x),(p)), then identify referents satisfying specific conditions in First-Order Logic.

For (x,x), we seek: E![t]: x =t> x & A[s]: x =s> x =|> t -> s | t == s

For (p), we seek: E![c]: c =(c)> p & @ =@> c

For ((x,x),(p)), we identify the relationship between these referents.

Every construct ultimately grounds in First-Order Logic through this transpilation chain, following SRT's systematic phases from linguistic extensions through to frame context[¹].

---

## XIII. Comprehensive Examples: The Representation Language in Action

### Example 1: The Observer and the Observed

Consider a quantum-like semantic structure where observation creates reality:

```
(L_quantum) = ((observer,particle,observer){observes,collapses}.
                ({particle}.(superposed).(uncertain)).
                ((observer,particle)[observes] => 
                 ({particle}.(definite).(measured))))
```

This represents:
```
observer =observes> particle
particle =collapses> observer
particle =superposed> particle
particle =uncertain> particle
observer =observes> particle =|> particle =definite> particle
```

The representation captures how observation transforms the particle from superposed uncertainty to definite measurement—a semantic collapse analogous to quantum mechanics.

### Example 2: The Liar's Paradox

```
(L_liar) = (([statement],statement){asserts}.
            ({statement}.(false)).
            ((statement,statement)[asserts] == ({statement}.(false))))
```

This represents the self-referential structure:
```
statement =asserts> statement
statement =false> statement
(statement,statement) == ({statement}.(false))
```

The statement asserts its own falsity, creating the classic paradox in pure representational form.

### Example 3: Love Triangle Dynamics

```
(L_triangle) = ((alice,bob){loves}.(bob,carol){loves}.(carol,alice){despises}.
                ({alice}.(hopeful).(naive)).
                ({bob}.(conflicted).(torn)).
                ({carol}.(jealous).(vengeful)))
```

Representing:
```
alice =loves> bob
bob =loves> carol
carol =despises> alice
alice =hopeful> alice & alice =naive> alice
bob =conflicted> bob & bob =torn> bob
carol =jealous> carol & carol =vengeful> carol
```

The closed loop with mixed emotions creates a rich semantic structure of human relationships.

### Example 4: Recursive Definition

```
(L_natural) = (([zero]).(successor,zero){next}.
               ((n,successor){defines} => 
                ((successor,n){next}.(n,successor){defines})))
```

This represents the natural numbers through semantic recursion:
```
successor =next> zero
n =defines> successor =|> successor =next> n & n =defines> successor
```

Each number defines its successor, which in turn defines its successor—infinity through finite representation.

### Example 5: Consciousness Reflecting

```
(L_mind) = (([i],i,i){perceives,reflects}.
            ({i}.(aware).(present).(continuous)).
            ((i,world){perceives}.(world,i){contains}).
            ((i,([i])i){remembers} => ({[i]}.(past))).
            ((i,i([i])){anticipates} => ({[i]}.(future))))
```

Representing self-awareness through time:
```
i =perceives> i =reflects> i
i =aware> i & i =present> i & i =continuous> i
i =perceives> world & world =contains> i
i =remembers> past_i =|> past_i =past> past_i
i =anticipates> future_i =|> future_i =future> future_i
```

The representation captures consciousness as self-reference persisting through temporal frames.

### Example 6: Semantic Compilation (Code-like Structure)

```
(L_compiler) = (
    // Source layer
    ([source],tokens){lexes}.
    ((tokens,ast){parses}).
    
    // Semantic analysis
    ((ast,symbols){analyzes}.
     ({symbols}.(typed).(scoped).(resolved))).
    
    // Optimization passes
    ((ast,ir){lowers}.
     ((ir,ir'){optimizes} & ir' -> ir).
     ((ir',ir''){optimizes} & ir'' -> ir')).
    
    // Code generation
    ((ir'',assembly){generates}).
    ((assembly,binary){assembles}).
    
    // Execution
    ((binary,processor){runs}).
    ((processor,source){implements})
)
```

This represents the complete compilation pipeline:
```
source =lexes> tokens
tokens =parses> ast
ast =analyzes> symbols
symbols =typed> symbols & symbols =scoped> symbols
ast =lowers> ir
ir =optimizes> ir' & ir' -> ir
ir' =optimizes> ir'' & ir'' -> ir'
ir'' =generates> assembly
assembly =assembles> binary
binary =runs> processor
processor =implements> source
```

The final reference—processor =implements> source—closes the semantic loop, showing how compiled code realizes its source's meaning.

### Example 7: The Library Cataloguing Itself

```
(L_meta) = (([L],catalogue){contains}.
            ((catalogue,entries){indexes}).
            ((entries,entries){sorts} & (entries,entries)[sorts] -> alphabetical).
            
            // Self-cataloguing
            ((L,L){describes}).
            ((L,(L)){symbolizes}).
            (((L),L){refers}).
            
            // The canon
            ((L,[L]){encompasses}).
            (([L],[([L])]){distills}).
            
            // Reader interaction
            ((reader,L){browses}).
            ((reader,([L])){selects}).
            ((reader,book){reads} & book -> [L]).
            ((book,reader){transforms}))
```

This meta-representation captures a library that contains its own description:
```
L =contains> catalogue =indexes> entries
entries =sorts> entries
L =describes> L
L =symbolizes> (L)
(L) =refers> L
reader =browses> L =encompasses> [L] =distills> [([L])]
reader =reads> book & book -> [L]
book =transforms> reader
```

The library contains its own catalogue, which indexes entries including itself—complete semantic self-containment.

### Example 8: Economic Transaction Network

```
(L_economy) = (
    ((buyer,seller,buyer){offers,accepts}.
     ({buyer}.(eager).(funded)).
     ({seller}.(reluctant).(profit_seeking))).
    
    ((buyer,good){wants}).
    ((seller,good){possesses}).
    ((good,value){embodies}).
    
    ((buyer,money){transfers} => 
     ((seller,money){receives} &
      (seller,good){relinquishes} &
      (buyer,good){acquires})).
    
    ((good,buyer){satisfies} | (buyer,seller){disputes})
)
```

This represents the complete semantic structure of economic exchange, including the conditional nature of satisfaction versus dispute.

---

## XIV. Conclusion: A New Language of Representation

We have specified a complete formal language for semantic representation that reduces all structural complexity to two primitive operations: (x) for canonical symbols and (x,y) for relationships. This specification establishes:

**Systematic Reduction:** Every construct—from simple properties to entire knowledge structures—reduces through defined steps to applications of R' and R''.

**Semantic Theorems:** The fundamental relationships x =p> x =|> (x,x) => (p) and x =t> y =|> (x,y) =(t)> (x,y) ground representation in reference.

**Compositional Power:** Through dots for collection, brackets for dereferencing, and parentheses for structure, the notation builds arbitrary complexity from simple foundations.

**Self-Representation:** The language can represent its own structures, as shown by (L) representing catalogue L, enabling semantic self-description.

This specification defines more than notation—it establishes a formal language where meaning emerges from patterns of reference, where symbols embody rather than describe structure, and where semantics can finally represent its own foundations with mathematical precision.

---

## References

[¹]: Doug: Semantic Reference Theory: Formal Syntax under Transpilation, "Introduction"

[²]: Doug: The Semantics of the Subject-Object Relationship, §I "The Primitive and Its Semantic Context"

[³]: Doug: Semantic Reference Theory: A Formal Foundation, §II "Grounding in First-Order Logic"

[⁴]: Doug: The Semantics of the Subject-Object Relationship, §V "Reference, Representation, and Semantic Necessity"

[⁵]: Doug: The Semantics of the Subject-Object Relationship, §III.4 "Relationships as Objects"

[⁶]: Doug: Clarifying the Subject-Object Relationship, §6 "Symbol"

[⁷]: Doug: Semantic Reference Frames: Context and Meaning in Formal Representation, §2 "Formal Definition of Semantic Reference Frames"

[⁸]: Doug: Prelude to Semantic Reference Theory: A Formalism...
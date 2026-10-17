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
c =i> a
c =j> b & j -> i
c =k> c & k -> j
c =l> b & l -> k
```

Using sequential letters for membership relationships creates natural ordering: i first, j second, k third, l fourth. Each membership inherits from the previous, creating order through inheritance structure.

### Reduction to (x,y)

Each membership becomes a relationship with inheritance:
- (c,a) with type i
- (c,b) with type j, plus (j,i) for inheritance
- (c,c) with type k, plus (k,j) for inheritance
- (c,b) with type l, plus (l,k) for inheritance

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
c =i> (x,y)
c =j> (y,z) & j -> i
c =k> (z,x) & k -> j
```

This preserves both the references and their sequential order.

---

## VII. Chain Notation: Linear and Branching Paths

### Motivation

Reference chains like "x refers to y refers to z" are fundamental semantic patterns. We need concise notation for paths through reference structures, including branches.

### Basic Chain Notation

- **(x(y)z)** represents the chain x => y => z (2 relationships)
- **(x()y()z)** makes edges explicit between each element
- **(xyz)** provides simplified notation when no ambiguity exists

### With Relationship Types

**((x(y)z){t,s})** specifies types: x =t> y =s> z

### Branching Structures

**((x(y)z).(y(a)b))** represents y branching to both z and a

### Reduction Strategy

The chain (x(y)z) represents the ordered collection {(x,y), (y,z)}:
```
c =i> (x,y)
c =j> (y,z) & j -> i
```

### Canonical Example: Chains with Branches

Consider these SRT expressions:
```
x =t> y =s> z
y =u> w
```

Using chain representation:
```
((x(y)z).(y()w)){t,s,u}
```

The full reduction:
```
c =i> (x,y)
c =j> (y,z) & j -> i
c =k> (y,w) & k -> j
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
b =i> (x,y)
b =j> (y,x) & j -> i
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
a =t> b =s> c
b =u> d
a =p> a
b =q> b
```

Complete representation:
```
((([a](b)c).(b()d)){t,s,u}.
 ({a}.(p)).
 ({b}.(q)))
```

This breaks down to:
- Chain: a =t> b =s> c
- Branch: b =u> d
- Properties: a =p> a, b =q> b
- Focal element: [a]

The reduction involves chain patterns, property contextualizations, and dereferencing.

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
a =t> b =s> c
c =u> a
b =p> b
```

Library representation:
```
(L) = (((a(b)c,a){t,s,u}.
        ({b}.(p))))
```

The catalogue L contains all the symbolic structure, the literature [L] consists of {a,b,c,p,t,s,u}, and the canon could highlight key elements through dereferencing.

---

## XI. Complete Reduction Example

Let's trace a complex representation completely back to (x) and (x,y).

### Starting Notation
```
((x,y){t}.({y}.(p)))
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
c =i> ((x,y),(t))
c =j> ((y,y),(p)) & j -> i
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

### Example 1: Basic Chains and Branches

```
((a(b)c).(b()d)){t,s,u}
```

SRT expression:
```
a =t> b =s> c & b =u> d
```

### Example 2: Properties with Inheritance

```
({[x]}.(p).(q).((p,p),(r)).((q,q),(r)))
```

SRT expression:
```
x =p> x =q> x & (p,p) =(r)> (p,p) & (q,q) =(r)> (q,q)
```

### Example 3: Bidirectional with Context

```
((x,y,x){s,t}.({x}.(p)).({y}.(q)))
```

SRT expression:
```
x <t=s> y & x =p> x & y =q> y
```

### Example 4: Sentence Grammar Structure

```
((((subj(verb)obj)(verb(adv)manner)){acts,on,modifies}.
  (((subj,noun){is}).((noun,thing){denotes})).
  (((obj,noun){is}).((verb,action){is})).
  (((adv,qualifier){is}).((qualifier,action){modifies}))))
```

SRT expression:
```
subj =acts> verb =on> obj & verb =modifies> adv =modifies> manner &:
  subj =is> noun =denotes> thing :&
  obj =is> noun & verb =is> action &
  adv =is> qualifier =modifies> action
```

### Example 5: Dichotomy Structure

```
((((d,m){is}).((m,(!d)){equals})).
  (((d,d),(m)).((d|m,m){equals})).
  ((([d],m,d){distinguishes,from})))
```

SRT expression:
```
d =is> m & m =equals> (!d) &
(d,d) =(m)> (d,d) & (d|m) =equals> m &
d =distinguishes> m =from> d
```

### Example 6: Compiler with Deep Nesting

```
(L) = ((((src(lex(tok(parse(ast))))scan)
        {read,make,feed,build,from}.
        (((ast(check(type(infer))))verify)
         {analyze,assign,deduce,from}).
        (((type(opt(fold(inline(ir)))))improve)
         {annotate,simplify,expand,reduce,to,from})).
       ((((ir(select(arch)))target)
         {lower,choose,for}).
        (((arch(emit(asm(link(bin)))))generate)
         {from,write,assemble,combine,to,produce})).
       ((((bin(load(cpu(exec(effect)))))run)
         {deploy,into,on,perform,cause,achieve}).
        (((effect(inspire(src'))feedback)
         {produce,motivate,to}).
        ((src',src){becomes})))
```

SRT expression:
```
src =read> lex =make> tok =feed> parse =build> ast =from> scan &:
  ast =analyze> check =assign> type =deduce> infer =from> verify &
  type =annotate> opt =simplify> fold =expand> inline =reduce> ir =to> ir =from> improve :&
ir =lower> select =choose> arch =for> target &:
  arch =from> emit =write> asm =assemble> link =combine> bin =to> generate =produce> generate :&
bin =deploy> load =into> cpu =on> exec =perform> effect =cause> effect =achieve> run &:
  effect =produce> inspire =motivate> src' =to> feedback &
  src' =becomes> src
```

### Example 7: Knowledge Representation

```
((((fact(truth)certainty){yields,gives}.
   ((certainty(belief)conviction){supports,strengthens})).
  (((belief(doubt)question){challenges,raises}).
   ((question(inquiry)discovery){motivates,leads})).
  (((discovery(fact')insight){reveals,as}).
   ((fact',fact){refines}).
   ((insight,truth){approaches}))))
```

SRT expression:
```
fact =yields> truth =gives> certainty =supports> belief =strengthens> conviction &
belief =challenges> doubt =raises> question =motivates> inquiry =leads> discovery &
discovery =reveals> fact' =as> insight & fact' =refines> fact & insight =approaches> truth
```

### Example 8: Frame Transformations

```
(F[t]:((a(b)c){t,t}).
 F[s]:((a(b)c){s,s}).
 F[r]:((a(b)c){r,r}).
 ((t,s,r){inherit,from}).
 ((t,t),(s)).((s,s),(r))))
```

SRT expression:
```
F[t]: a =t> b =t> c
F[s]: a =s> b =s> c  
F[r]: a =r> b =r> c
t =inherit> s =from> r & (t,t) =(s)> (t,t) & (s,s) =(r)> (s,s)
```

### Example 9: Complete Semantic Web

```
((((node(edge(node'(edge'(node''))))graph)
   {has,connects,has,connects,in}.
   (((edge,directed){is}).((directed,arrow){like})).
   (((node,vertex){is}).((vertex,point){is})).
   (((graph,structure){forms}).((structure,meaning){carries})).
   (((meaning,pattern){through}).((pattern,connection){of})).
   (((connection,edge){via}).((edge,node){between}))))
```

SRT expression:
```
node =has> edge =connects> node' =has> edge' =connects> node'' =in> graph &:
  edge =is> directed =like> arrow &
  node =is> vertex =is> point &
  graph =forms> structure =carries> meaning :&
meaning =through> pattern =of> connection =via> edge =between> node
```

---

## XIV. The Library Metaphor for Representation

When we write (L) for a complete representation, we establish three semantic levels:

### The Symbol
```
(L) =(L)> L
```
The symbol (L) refers to the entire catalogue L.

### The Catalogue
For any representation assigned to (L), the catalogue L contains all symbolic referents and their relationships. Consider:
```
(L) = ({[x]}.(p).(q))
```

L includes:
- Symbols: (x), (p), (q)
- Composites: ({x}.(p)), ({x}.(q))
- Relationships: ((x,x),(p)), ((x,x),(q))

### The Literature and Canon
- **[L]**: The actual referents {x, p, q}
- **[([L])]**: The canonical subset, here {x} marked by brackets

This structure enables any semantic pattern to be named, organized, grounded, and focused through its essential elements.

---

## XV. Conclusion: A New Language of Representation

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
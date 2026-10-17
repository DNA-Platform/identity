# Semantic Reference Theory - Axiomatic Development
*Working Draft - Iteration 1*

## Core Primitive
```
R(x,y,t)  // x refers to y through type t
```

## Linguistic Extensions

### Basic Reference
```
x =t> y    := R(x,y,t)
x => y     := E[t]: x =t> y
```

### Candidate Constructs to Define
- `(x)` - canonical symbol for x
- `(x,y)` - most specific relationship between x and y  
- `x -> t` - x inherits from t
- `F[t]` - reference frame of t

## Truths We Want to Capture

1. **Symbol-Literal Distinction**: Symbols represent literals but are distinct from them
2. **Self-Reference Without Regress**: (x) can represent x without infinite towers
3. **Inheritance Without Recursion**: Can define transitivity through symbolic possession
4. **Frame-Relative Canonicalization**: What's canonical depends on reference frame
5. **Natural Quotation Termination**: "word" doesn't need """"word""""
6. **Subject-Object Emergence**: The distinction emerges from reference patterns

## Attempt 1: Minimal Axioms

### Axiom 1: Universal Properties
```
E{r,eq,o}:
  A[x]: x =eq> x                    // everything equals itself
  A([x,y,t]: x =t> y): t -> r       // all relationship types inherit from r
  A([y]: E[x]: x => y): y =o> y     // all objects have object property
```

Wait, this already uses `->` which we haven't defined yet!

## Attempt 2: Bootstrap Without Inheritance

### Axiom 1: Foundational References
```
E{r,eq,o}:
  A[x]: x =eq> x                    // equality is universal
  A([x,y,t]: x =t> y): t =r> r     // all types refer to r  
  A([y]: E[x]: x => y): y =o> y    // objects self-refer through o
```

### Question: How do we define inheritance?

If `s => t` means s refers to t (where both are relationship types), then:
- Could `s -> t` mean `s =(t)> s`?
- This would mean s possesses the canonical symbol of t

But we haven't defined (t) yet!

## Attempt 3: Build Up Systematically

### Level 1: Basic Properties
```
AXIOM: E{r,eq,o}:
  A[x]: x =eq> x
  A([x,y]: x => y & x !== y): E[t]: x =t> y & t =r> r
  A([y]: E([x]: x => y)): y =o> y
```

### Level 2: Define Canonical Symbol Linguistically

For any x, IF there exists z such that:
- z =z> x (z represents x through itself)
- No other w =w> x exists

Then we denote z as (x).

### Problem: Not all x have such a z!

## Reflection Point

I'm getting tangled because:
1. I want to use inheritance before defining it
2. I want to use canonical symbols before establishing they exist
3. I'm not being careful about what's primitive vs derived

Let me reconsider what's truly fundamental...
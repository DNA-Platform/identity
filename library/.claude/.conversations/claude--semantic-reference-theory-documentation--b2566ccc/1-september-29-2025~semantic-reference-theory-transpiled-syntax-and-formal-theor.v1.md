# Semantic Reference Theory: Transpiled Syntax and Formal Theorems

## Core Typographical Conventions

### Logical Operations (FOL Level)
- `&` - logical AND (∧ in traditional notation)
- `|` - logical OR (∨ in traditional notation)  
- `!!` - exclusive OR (XOR)
- `!` - logical NOT (¬ in traditional notation)
- `=|>` - implies (→ in traditional notation)
- `!=|>` - does not imply
- `<|=|>` - bidirectional implication (↔)
- `<iff>` - shorthand for bidirectional implication

### Reference Operations (SRT Level)
- `x => y` - x refers to y (shorthand for R(x,y))
- `x <= y` - y refers to x (reverse reference)
- `x <=> y` - bidirectional reference
- `x =t> y` - x refers to y through type t
- `x --> y` - x inherits from y (transitive)
- `x == y` - semantic equality (x =eq> y)
- `x != y` - semantic inequality

### Quantification Syntax
```
E[x]: P(x)                    // exists x such that P(x)
A[x]: P(x)                    // for all x, P(x)
E[x,y]: P(x,y)                // exists distinct x,y (x != y implicit)
E{x,y}: P(x,y)                // exists x,y (may be equal)
E[{x,y},z]: P(x,y,z)          // x,y may equal, but z != x,y
E([x,y]: x => y): P(x,y)      // with preconditions
E(x: -> r): P(x)              // when variable appears first
```

### Bracketing Operations
```
P &: Q | R | S                // P & (Q | R | S)
P |: Q & R & S                // P | (Q & R & S)  
P =||> Q & R & S              // P =|> (Q & R & S)
```

## Transpilation Examples

### Basic Reference Frame
```
F[r]: x => y
// Transpiles to:
x =r> y
```

### Quantified Statement with Constraints
```
E([x,y]: x => y & y =t> x): x <=> y
// Transpiles to:
∃x∃y: x ≠ y & x =r> y & y =t> x & x =r> y & y =r> x
```

### Canonical Symbol in Frame
```
F[t]: (x) => y
// Transpiles to:
∃s: (s,x) == s & (t,s) == t & ∀z: (s,z) == s =|> z == x & s =t> y
```

## Core Theorems with Updated Notation

### Theorem 1: Symbol-Literal Distinction
**Statement:** 
```
A[x]: x --> symbol <iff> E[y]: x =x> y & (x,y) == x
```
**Meaning:** A referent is a symbol iff it refers to something through itself.

### Theorem 2: Symbols Don't Equal Literals
**Statement:**
```
A[sym,lit]: sym =sym> lit =|> sym != lit
```
**Proof:**
1. Assume sym == lit
2. From sym =sym> lit: sym =sym> sym
3. But (sym,sym) != sym (axiom)
4. Contradiction ∎

### Theorem 3: Reference Requires Distinction
**Statement:**
```
A[x,y,t]: x =t> y & t --> rep =|> x != y
```
**Meaning:** True reference (not just relationship) requires distinction.

### Theorem 4: Self-Reference Through Symbolism
**Statement:**
```
x =(x)> x <iff> x =s> x & (x,x) == (x)
```
**Meaning:** Self-reference occurs when something refers to itself through its canonical symbol.

### Theorem 5: Inheritance Transitivity
**Statement:**
```
x --> y & y --> z =|> x --> z
```
**Proof:** By construction of --> as transitive closure of base inheritance.

### Theorem 6: Frame Membership Constraint
**Statement:**
```
F[t]: E[x]: P(x) <iff> E[x]: x =[in]> t & P(x)
```
**Meaning:** In frame F[t], existence claims require frame membership.

### Theorem 7: Canonical Uniqueness
**Statement:**
```
F[t]: A[x]: E![s]: (s,x) == s & (t,s) == t
```
**Meaning:** Every referent has exactly one canonical in each frame.

### Theorem 8: Identity Semantics
**Statement:**
```
(i) =(i)> i <iff> i =sub> i & i =obj> i & (i,i) == (i)
```
**Meaning:** An identity qualifies itself through its canonical symbol, serving as both subject and object.

### Theorem 9: Perspective Reduction
**Statement:**
```
F[i]: x => y <iff> (i) =(x)> (y)
```
**Meaning:** In a perspective frame, all reference reduces to qualification.

### Theorem 10: Semantic Triangle
**Statement:**
```
(x) =(x)> x & x =(x)> x & (x) != x
```
**Meaning:** The symbol represents the literal, the literal possesses the symbol, yet they remain distinct.

## Advanced Theorems

### Theorem 11: Reference Frame Inheritance
**Statement:**
```
F[s]: F[t]: P =|> (t -> s & s -> r) =||> P[@ := t]
```
**Meaning:** Nested frames create inheritance chains with increasing conditionality.

### Theorem 12: Canonical Collapse in Frames
**Statement:**
```
E[x,y]: x != y & E[t]: (x)[t] == (y)[t]
```
**Meaning:** Distinct referents can map to the same canonical in certain frames.

### Theorem 13: Visibility Constraint
**Statement:**
```
F[t]: x => y =|> x =[in]> t & y =[in]> t
```
**Meaning:** Reference within a frame requires both referents be visible.

### Theorem 14: Qualification Equivalence
**Statement:**
```
x =p> x <iff> (x) =(p)> x <iff> (i) =(p)> (x)
```
**Meaning:** Properties, symbolic representation, and qualification are equivalent semantic structures.

### Theorem 15: Semantic Bootstrap
**Statement:**
```
E[x,y,t]: x =t> y =||> E[eq,sub,obj,rel]: 
    A[a]: a =eq> a &
    x =sub> x &
    y =obj> y &
    t =rel> rel
```
**Meaning:** A single relationship forces the entire semantic architecture into existence.
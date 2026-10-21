# Formal Analysis of Dichotomy in SRT

## Frame Context: F[d]

When analyzing dichotomy, we operate in frame F[d] where:
```
@ == d                     // Frame type is dichotomy
x => y transpiles to x =d> y
```

## Canonical Symbol Analysis

### Question: Is d its own canonical symbol?

From SRT: `(x) =(x)> x` means (x) is the canonical symbol for x.

For dichotomy:
```
d == (d,m)                 // d equals the most specific relationship
```

If d has a canonical symbol (d):
```
(d) =(d)> d                // Would mean the symbol represents dichotomy
But d == (d,m)             // So (d) =(d)> (d,m)?
```

**Issue**: This creates ambiguity. Is (d) a symbol or is d already symbolic?

### Resolution Attempt 1: d as Symbol

If d is already a symbol (like sym in `sym =sym> lit`):
```
d =d> [d]                  // d represents literal dichotomy
[d] is the actual property of being dichotomous
```

But then `d == (d,m)` means the symbol equals a relationship, which seems mixed.

## Inheritance Analysis

### Current Claims:
```
temp -> m                  // temperature inherits from monotony
(h,c) -> d                 // (hot,cold) inherits from dichotomy
m -> eq                    // Does monotony inherit from equality?
```

### Testing m -> eq:

From SRT: `eq =eq> eq` shows equality is self-referential.
Monotony `m == d|m` is undifferentiated union.

Does undifferentiation imply equality? In frame F[r]:
```
x =m> x might mean x has no internal distinction
x =eq> x means x equals itself
```

These aren't the same. Monotony is about lack of distinction, not identity.

**Conclusion**: `m !-> eq` (monotony doesn't inherit from equality)

## Representation vs Symbolism

### The Key SRT Rule:
```
If (x,y) == x, then x is a symbol for y
x =x> y means x represents y
```

### Applied to Dichotomy:
```
d == (d,m)                 // d IS the most specific relationship
```

This is different from `sym == (sym,lit)` because:
- In symbolism: sym is the relationship between sym and lit
- In dichotomy: d is the relationship between d and m

But d appears on both sides! This is **self-referential** in a way that symbolism isn't.

### The Parallel Structures:
```
sym =sym> lit              // symbol represents literal through symbolization
d =(d,m)> m                // Since d == (d,m), dichotomy relates to monotony through itself
```

This means d is simultaneously:
1. A pole of the dichotomy
2. The relationship between the poles
3. The type of relationship

## Potential Issues Found

1. **Level Mixing**: We're conflating d as a concept, symbol, and relationship
2. **Inheritance Unclear**: The inheritance chains need clarification
3. **Frame Effects**: In F[d], everything is viewed through dichotomy - how does this affect m?
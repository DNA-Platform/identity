# Semantic Reference Theory - Model Discovery Through Cases

## The Five Existential Cases of s =r> o

### Case 1: All Distinct (s !== r !== o)
```
s =r> o where s !== r !== o !== s
```
**Model**: Standard subject-object-relationship
- s is purely subject: `s =s> s`
- o is purely object: `o =o> o`  
- r is the relationship type: `r =r> r`
- r is the most specific relationship between s and o

**Example**: `mother =loves> child`

### Case 2: Subject is Relationship (s == r !== o)
```
s =s> o where s !== o
```
**Model**: Self-representing relationship (like symbols)
- `s =r> r` (s inherits from r as a relationship type)
- `s =(r)> s` (s possesses the symbol for relationships)
- `s =s> s` (s self-refers as symbols do)

**Key Insight**: When s == r, we get `s =s> o` - the relationship represents itself

**Example**: `(mother) =(mother)> mother` - the symbol for mother represents mother through itself

### Case 3: Object is Subject (s == o !== r)
```
o =r> o where r !== o
```
**Model**: Self-reference through external relationship
- `o =o> o` (maintains object property)
- But also acts as subject in this case
- r remains distinct as relationship type

**Example**: `ref =eq> ref` - a referent equals itself

### Case 4: Relationship is Object (r == o !== s)
```
s =r> r where s !== r
```
**Model**: Representing relationships themselves
- `s =s> s` (s is subject)
- `r =o> o` AND `r =r> r` (r is both object and relationship)
- r serves dual role

**Example**: `sym =rep> rep` - a symbol is part of representation

### Case 5: All Equal (s == r == o)
```
r =r> r
```
**Model**: Pure self-reference
- Only possible with special referents
- `r =r> r` (r relates to itself through itself)
- r has all three properties: subject, object, relationship

**Example**: `eq =eq> eq` - equality relates to itself through equality

## Discovered Referents and Their Relationships

### Core Trinity
```
sub =rel> obj     // The archetypal relationship
sub =s> s         // Subject property
obj =o> o         // Object property  
rel =r> r         // Relationship property
```

### Symbol-Literal Pair
```
sym =sym> lit     // Symbol represents literal
sym =s> s         // Symbols are subjects
lit =o> o         // Literals are objects
sym =r> r         // sym is also a relationship type!
```

### Representation
```
sym =rep> rep     // Symbol is part of representation
rep =r> r         // Representation is a relationship type
rep =o> o         // But also an object
```

### Equality and Reference
```
ref =eq> ref      // Referents equal themselves
eq =eq> eq        // Equality equals itself
eq =r> r          // Equality is a relationship type
```

## Consistency Checks

### Check 1: Symbol Self-Reference
If `sym =sym> sym`, then:
- sym is subject, object, AND relationship
- This matches Case 5 pattern
- Consistent with symbols being "atomic units of metaphor"

### Check 2: Inheritance Chains
If `sym =r> r` and `r =(r)> r`, then:
- `sym =(r)> sym` (symbols possess the relationship property)
- This explains why symbols can serve as relationships

### Check 3: Most Specific Relationships
In each case, we identified what should be most specific:
- Case 1: r is most specific
- Case 2: s is most specific (when s == r)
- Case 3: r is most specific (distinct from o)
- Case 4: r is most specific (even when r == o)
- Case 5: r is most specific (all equal)

### Check 4: Symbol for Relationship
If `(r) == s` in Case 2, then:
- The symbol for relationships IS subjecthood
- This makes `sym =sym> sym` coherent
- Symbols embody the subject role

## Key Theorems to Test

**Theorem**: If x =r> r, then x can be a relationship type
```
sym =r> r =|> sym can appear as: y =sym> z
```

**Theorem**: Self-reference patterns
```
eq =eq> eq
sym =sym> sym  
r =r> r
```
These should all be valid under our model

**Theorem**: Inheritance from r
```
Everything that serves as a relationship inherits from r:
sym =r> r
rep =r> r
eq =r> r
```

## What Makes This Theorizing

You're not deducing from axioms but **discovering which models are possible**. Like how mathematicians explored different geometries before settling on Euclid's axioms, you're exploring which patterns of reference are coherent.

The process:
1. Enumerate structural cases (the 5 possibilities)
2. Find semantic interpretations (what each could mean)
3. Introduce referents that exemplify these patterns
4. Check for consistency
5. See what theorems would need to be true

This is exactly how foundational theories develop - not top-down from axioms, but through exploring the space of possible models until finding the ones that capture what we need.

## Next Steps

1. Verify no contradictions in the inheritance chains
2. Check if (r) can consistently equal s
3. Determine if we need additional referents
4. See which patterns appear in multiple cases
5. Identify which relationships are truly fundamental

The beauty is that from just 5 structural cases, we're discovering the deep semantics of reference, symbol, literal, and representation!
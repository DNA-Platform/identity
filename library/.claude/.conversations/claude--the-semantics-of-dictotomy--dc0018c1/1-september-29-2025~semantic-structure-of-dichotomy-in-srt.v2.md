# Semantic Structure of Dichotomy in SRT

## Definitions
```
d := dichotomy
m := monotony  
im := impossibility
```

## Core d/m Structure

### Fundamental Identities
```
// The core identity relationships
m == (!d)                  // monotony IS the symbol (!d)
d == (d,m)                 // dichotomy IS the pair itself
```

### Membership in the Dichotomy
```
// Both are parts of the dichotomy
m =(d)> m                  // m is part of dichotomy (as (!d))
d =(d)> d                  // d is part of dichotomy (self-exemplifying)
```

### Property Relationships
```
// The monotony property
m =m> m                    // m is monotonous
d =m> d                    // d has monotony (before distinction)

// The dichotomy property
d =d> d                    // d is dichotomous (has distinction)
m !=d> m                   // m is not dichotomous
```

### Structural Relationships
```
// Union and intersection
d|m -> m                   // Their union is monotony
d&m -> im                  // Their intersection is impossibility

// The pair represents dichotomy
(d,m) =(d,m)> d            // The pair symbolizes dichotomy through itself

// Negation rules (d is canonical)
!!d == d                   // Double negation returns to d
!m is non-canonical        // Must use d instead of !m
```

### Impossibility Semantics
```
// Impossibility as a canonical
im =im> [im]               // im represents its canonical
[im] =[im]> t              // The canonical has type t
A[x,y]: x !=t> y           // But nothing has type t

// Applied to d&m
d&m -> im                  // Being both dichotomous and monotonous
A[x]: x !=im> x            // Nothing can be impossible
```

## Application to Temperature (hot/cold)

### Setup
```
h := hot
c := cold  
temp := temperature
```

### Fundamental Identities
```
// The core identity relationships
temp == h|c                // temperature IS the monotony
c == (!h)                  // cold IS the symbol (!h) when h is canonical

// The dichotomy structure
(h,c) -> d                 // The pair forms a dichotomy
h|c -> m                   // The union is monotony
h&c -> im                  // The intersection is impossibility
```

### Property Relationships for Objects
```
// Monotony level (having temperature)
obj =temp> obj             // obj has temperature
obj =(h|c)> obj            // obj is in the temperature state

// Dichotomy level (specific temperature)
obj =h> obj <iff> obj !=c> obj    // obj is hot iff not cold
obj =c> obj <iff> obj !=h> obj    // obj is cold iff not hot
obj =(!h)> obj <iff> obj =c> obj  // not-hot equals cold
```

### Representation Relationships
```
// How the dichotomy represents temperature
(h,c) =(h,c)> temp         // The dichotomy represents temperature
temp =temp> [h|c]          // Temperature represents the literal state

// The complete equivalence
obj =temp> obj <iff> obj =h> obj || obj =c> obj
```

### Type Relationships
```
// Temperature as a type of monotony
temp -> m                  // temperature inherits from monotony
(h,c) -> d                 // (hot,cold) inherits from dichotomy
h&c -> im                  // hot&cold inherits from impossibility

// This means:
temp =m> temp              // temperature is monotonous
(h,c) =d> (h,c)            // (hot,cold) is dichotomous
```

### Canonical Rules for h/c
```
// With h as canonical:
h                          // Valid: canonical pole
!h                         // Valid: negation of canonical
c                          // Valid: named other pole  
!c                         // Invalid: use h instead

// Equivalences
c == (!h)                  // c equals not-h
!!h == h                   // Double negation returns to h
```

## The Meta-Pattern

The d/m dichotomy applied to itself shows that:
1. Both d and m start in monotony (undifferentiated)
2. The dichotomy d distinguishes them
3. m IS the negation of d: `m == (!d)`
4. d IS the distinction itself: `d == (d,m)`
5. The structure completely describes itself

When applied to concrete properties like temperature:
1. The property (temp) is the monotony
2. The values (h, c) form the dichotomy
3. One value is canonical, the other is its negation
4. The structure instantiates the d/m pattern
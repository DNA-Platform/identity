# Five Candidate Axioms for Semantic Reference Theory

---

## Axiom 1: The Root of Universality

```
E[r]:A[x,y,t]: x =t> y =|> x =r> y
```

*There exists a universal relationship r such that all relationship types inherit from it.*

### Syntactic Definition

```
def(x => y): x =r> y
```

*Untyped reference: x relates to y through the universal relationship.*

---

## Axiom 2: The Root of Specification

```
x => y =|> E[s]: x =s> y =|> x =t> y =|> x' =s> y' =|> x' =t> y'
```

*Every related pair has a most specific relationship that implies all their other relationships.*

### Syntactic Definition

```
def((x,y)): the unique s satisfying Axiom 2 for the pair (x,y)
```

*Most specific relationship: the unique relationship that characterizes how x and y relate.*

---

## Axiom 3: The Root of Directionality

```
A{s,t}: x =s> y =|> x =t> y =||> x =t> y !=|> x =s> y
```

*Distinct relationships cannot mutually imply each other - the inheritance hierarchy is directed.*

---

## Axiom 4: The Root of Canonicity

```
x =y> y =|> (x,y) == y | E[y']: (x,y') == y' & y' =y> y
```

*Representation is local - to represent y, you must be directly connected to y or through exactly one intermediary. Representatives are canonical.*

### Syntactic Definitions

```
def(x > y): (x,y) == y
def(x -> y): x == y | x =y> y
```

*Direct inheritance (x > y): the most specific relationship IS y itself.*
*General inheritance (x -> y): either identity or representation through the chain structure.*

---

## Axiom 5: The Root of Representation

```
(y,x) == y =|> (x,y) == x
```

*If y is a direct representative of x, then x is a direct representation of y - but not conversely. Symbolization and representation are asymmetric.*

---
# Axiomatizing Semantic Reference Theory: A Foundational Plan

## Overview

This document outlines a systematic approach to axiomatizing SRT, organizing the foundational axioms in logical dependency order and establishing the linguistic conventions that make the theory both rigorous and practical.

## Phase 1: Core Primitive and Base Structure

### Axiom A1 (Primitive Relation)
```
Primitive: R(x,y,t) written as x =t> y
Domain: All variables range over referents
```

### Axiom A2 (Base Relationship)
```
E[x,y,t]: x =t> y =|> E[r]: t -> r
```
**Translation**: Every relationship type inherits from a universal base relation r.

**Linguistic Innovation**: The `E[...]` and `A[...]` quantifier notation replaces standard ∃ and ∀ for phone-friendly typing.

## Phase 2: Subject-Object Structure

### Axiom A3 (Automatic Role Assignment)
```
E[[x,y],t]: x =t> y & x != y =|> E[[s,o,r]]: x.s & y.o & t -> r & s -> o
```
**Translation**: Any relationship between distinct referents automatically creates subject and object roles, with subject inheriting from object.

**Linguistic Innovation**: 
- Double brackets `E[[x,y,t]]` express existence with distinctness constraints
- Property dot notation `x.s` as shorthand for property relationships

### Axiom A4 (Universal Objectivity)
```
A[x]: x.o
```
**Translation**: Every referent has the object property (is objective to itself).

**Consequence**: From A3 and A4, symbols have both `x.s` and `x.o` while literals have only `y.o`.

## Phase 3: Property System Foundation

### Axiom A5 (Property Equivalence)
```
x =p> y iff x.p & y.p
```
**Translation**: Property relationships establish equivalence class membership.

**Linguistic Innovation**: The `has` referent grounds all property syntax:
- `x.p`, `x[p]`, `x =has> p`, `x =p> x` are all synonyms
- Only `has` and the direct relationship are actual referents

### Axiom A6 (Equality as Uniqueness)
```
x =eq> y iff x == y
x =eq> x & A[[x,y]]: x !=eq> y
```
**Translation**: Equality is the property of uniqueness - every referent has it but shares it with no other.

## Phase 4: Inheritance Without Recursion

### Axiom A7 (Descendancy Symbol Construction)
```
E[t]: E[x,y,s]: x =t> y & s => t =|> E[(>t)]
x -> t := x => (>t)
```
**Translation**: Inheritance is defined through relating to descendancy symbols, avoiding recursive definitions.

**Key Innovation**: The `(>t)` notation for "descendant of t" makes transitivity constructive rather than recursive.

## Phase 5: Most Specific Relationships

### Axiom A8 (Unique Most Specific)
```
E[[x,y]]: x => y =|> E[[(x,y)]]: x =(x,y)> y & A[u]: x =u> y =|> (x,y) -> u
```
**Translation**: Every related pair has a unique most specific relationship type.

**Consequence**: This enables the symbol definition where `(x,y) == x` makes x a symbol for y.

## Linguistic Structure Summary

### Quantifier Notation
- `E[x,y,t]` = "there exist x,y,t"
- `A[x,y]` = "for all x,y"  
- `E[[x,y,z]]` = "there exist distinct x,y,z"

### Property Notation System
- `x.p` - property possession (shorthand)
- `x[p]` - alternative property notation
- `x =has> p` - explicit has relationship
- `x =p> x` - formal self-relationship
- `x[p]y` - shared property equivalence

### Relationship Syntax
- `x =t> y` - basic relationship
- `x => y` - general relationship (shorthand for `x =r> y`)
- `x -> y` - inheritance relationship
- `(x,y)` - most specific relationship between x and y
- `(>t)` - descendancy symbol for type t

## Axiom Dependencies

```
A1 (Primitive) → A2 (Base)
A2 → A3 (Subject-Object) → A4 (Universal Objectivity)
A4 → A5 (Property Equivalence) → A6 (Equality)
A2 → A7 (Inheritance) → A8 (Most Specific)
```

## Implementation Strategy

### Phase 1 Goals
Establish primitive relation and base relationship axiom with clear linguistic conventions.

### Phase 2 Goals  
Implement subject-object structure showing how roles emerge automatically from relationships.

### Phase 3 Goals
Create property system with multiple syntactic entry points while maintaining semantic unity through `has`.

### Phase 4 Goals
Define inheritance constructively using descendancy symbols, proving transitivity without recursion.

### Phase 5 Goals
Establish most specific relationships as foundation for symbol theory and representation hierarchy.

## Validation Criteria

Each axiom must:
1. Be expressible in phone-friendly notation
2. Have clear English translation
3. Maintain logical dependencies
4. Enable derivation of complex semantic phenomena
5. Avoid recursive definitions while achieving transitivity

## Next Steps

1. Formalize each axiom in precise logical notation
2. Prove key theorems derivable from axiom set
3. Demonstrate semantic phenomena emerge from foundations
4. Test completeness by deriving representation, symbol, and canonical theories
5. Validate consistency through semantic model construction

This axiomatization plan provides the roadmap for building SRT from minimal foundations while maintaining both mathematical rigor and practical usability through innovative linguistic structures.
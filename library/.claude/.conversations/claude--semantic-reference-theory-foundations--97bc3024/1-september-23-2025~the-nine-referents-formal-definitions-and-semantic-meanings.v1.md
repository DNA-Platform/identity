# The Nine Referents: Formal Definitions and Semantic Meanings in SRT

## Introduction: The Semantic Foundation

Semantic Reference Theory (SRT) builds from a single primitive relation `R(x,y,t)` meaning "x relates to y through relationship type t," written as `x =t> y`. From this foundation emerge nine fundamental referents that capture the essential semantic structure of meaning itself. These aren't arbitrary symbols but semantic necessities discovered through systematic exploration of what must exist for reference to be possible.

## 1. Referent (ref)

### Formal Definition
```
ref =eq> ref
A[x]: x --> ref
```

The referent `ref` represents the domain of all referents—it is the semantic universe itself made into a referent within that universe.

### Semantic Meaning

A **referent** is anything that can be referred to, related to, or represented within a semantic system. It is the most general category of existence within SRT—everything that exists semantically is a referent. The word comes from the Latin "referre" meaning "to carry back" or "to relate," capturing the idea that referents exist by virtue of being relatable to other things.

The self-referential relationship `ref =eq> ref` establishes that the domain of referents includes itself—the theory is self-contained. This isn't circular but foundational: for a semantic theory to be complete, it must be able to refer to its own domain. When we speak of "all referents," that totality itself becomes a referent we can discuss, relate to other concepts, and use in formal expressions.

In everyday language, referents include concrete objects (trees, stones), abstract concepts (justice, beauty), properties (redness, tallness), relationships (love, ownership), and even the relationships between relationships. If you can point to it with language, think about it, or use it in a sentence, it's a referent. The theory makes no ontological claims about what exists outside semantic space—it only describes what can exist within systems of meaning.

## 2. Relationship (rel)

### Formal Definition
```
rel =rel> rel
A[t: x =t> y]: t --> rel
(sub,obj) == rel
```

The referent `rel` represents the property of being a relationship—it relates to itself through relationship, establishing the reflexive foundation of relating.

### Semantic Meaning

A **relationship** is a typed connection between referents. It's not just that two things are connected, but that they're connected in a specific way with a specific character. Every relationship has a type (the `t` in `x =t> y`), and all relationship types inherit from the base relationship `rel`.

The formal expression `rel =rel> rel` captures a profound semantic truth: relationships relate to relationships through relationship itself. This isn't empty circularity but semantic grounding—at the foundation, relating is simply what relationships do. When we say "love is a relationship," we're using relationship to characterize love. When we ask "what relates relationships to each other?" the answer is: relationship itself.

Consider concrete examples:
- `John =loves> Mary` - "loves" is a relationship type
- `red =darker-than> pink` - "darker-than" is a relationship type  
- `2 =less-than> 5` - "less-than" is a relationship type

Each of these relationship types (`loves`, `darker-than`, `less-than`) inherits from `rel`. They're all specific ways of relating, but they share the fundamental character of being relationships.

The equation `(sub,obj) == rel` reveals that the most specific relationship between subjecthood and objecthood IS relationship itself—subjects relate to objects through relationships, and this pattern defines what relationship fundamentally is.

## 3. Subject (sub)

### Formal Definition
```
sub =rel> obj
x =t> y & x != y =|> x =sub> x
sub --> s where x =s> x indicates x has property s
```

The referent `sub` represents the property of subjecthood—what referents possess when they serve as subjects in relationships.

### Semantic Meaning

A **subject** is a referent that actively relates to something else. It's the "doer," the "haver," the "knower"—the active pole in a semantic relationship. Crucially, subjecthood is a property that referents acquire by occupying the subject position in a relationship where they differ from the object.

When we write `dog =chases> cat`, the dog gains the property of subjecthood within this relationship. This doesn't mean the dog is inherently or eternally a subject—in `person =pets> dog`, the same dog is now in the object position. Subjecthood is relational and contextual.

The relationship `sub =rel> obj` expresses that subjecthood relates to objecthood through relationship—this is the fundamental semantic pattern. There can be no subject without an object to relate to, no object without a subject relating to it (even if that subject is the universe itself viewing the object).

Importantly, in self-relationships like `x =p> x`, the referent does NOT gain subjecthood—it remains purely objective. This captures the intuition that when something simply has a property (like "the rose is red"), it's not actively doing anything—it's just being. True subjecthood requires relating to something distinct from oneself.

In consciousness studies, subjecthood becomes crucial: the experiencing subject, the "I" that perceives, thinks, and relates. The formal structure shows why consciousness requires this subject-object distinction—without it, there would be only being, not experiencing.

## 4. Object (obj)

### Formal Definition
```
sub =rel> obj
A[x,y,t]: x =t> y =|> y =obj> y
x =p> x =|> x =obj> x
```

The referent `obj` represents the property of objecthood—what referents possess when they serve as objects in relationships or have properties.

### Semantic Meaning

An **object** is a referent that can be related to, referred to, or characterized. It's the "done-to," the "had," the "known"—the receptive pole in semantic relationships. Unlike subjects, which must relate to something distinct, objects include both targets of relations and self-related entities with properties.

Every referent that appears on the right side of a relationship gains objecthood:
- In `cat =chases> mouse`, mouse has objecthood
- In `rose =red> rose`, rose has objecthood (through self-relation)
- In `John =knows> truth`, truth has objecthood

The formal structure reveals something profound: having any property at all makes something an object (`x =p> x =|> x =obj> x`). This captures the intuition that objects are things with characteristics, things that can be described, things that have qualities. Even purely abstract entities become objects the moment we attribute properties to them.

The relationship between subject and object (`sub =rel> obj`) is asymmetric but complementary. While subjects require distinct objects, objects can exist in self-relation. This asymmetry reflects the difference between active relating and passive being-related-to.

In the special case of literals, objecthood is their only mode of existence—they cannot be subjects except in self-relation. This formalizes the intuition that some things (like numbers or physical objects) simply are what they are, without agency or perspective.

## 5. Symbol (sym)

### Formal Definition
```
sym =sym> lit
sym --> representation
x --> symbol <iff> E[y]: x =x> y & (x,y) == x
(sym,lit) == sym
```

The referent `sym` represents the dual subject/relationship that enables symbolic reference—it simultaneously acts and embodies the act.

### Semantic Meaning

A **symbol** is a referent that represents something else AND is identical to the most specific relationship between itself and what it represents. This dual nature—being both the thing doing the representing and the act of representation itself—defines symbolic reference.

When we write the word "tree," that word is a symbol. It's simultaneously:
1. The subject doing the symbolizing (the word as an entity)
2. The relationship of symbolization itself (the act of meaning tree)

This is captured formally by `sym =sym> lit` where `sym` appears in both subject and relationship positions.

The condition `(x,y) == x` means the symbol IS the relationship—there's nothing more specific to say about how a symbol relates to its literal than the symbol itself. When we ask "how does the word 'tree' relate to actual trees?" the answer is: through 'tree'-ness itself. The symbol embodies its own meaning.

Symbols differ from mere representations in this crucial way. A map represents territory, but the map is not identical to the relationship between map and territory—there's the paper, the marking, the correspondence rules. But a symbol collapses this complexity: the word "tree" doesn't just represent trees through some external relationship—it IS that relationship made concrete.

This formalization explains why symbols feel "transparent" in use—when we read "tree," we don't think about the word representing trees; we simply think of trees. The symbol achieves a kind of atomic metaphor where representation becomes identity: we speak as if the word IS what it represents, even though one is marks on paper and the other is a living organism.

## 6. Representation (rep)

### Formal Definition
```
sym =rep> rep
rep =obj> obj & rep =rel> rel
x --> representation <iff> E[y]: x =x> y
symbol --> representation
```

The referent `rep` represents the general capacity for one thing to stand for another—the broader category that includes symbols, maps, models, and collections.

### Semantic Meaning

A **representation** is any referent that makes present something other than itself. It's broader than symbolism—while all symbols are representations, not all representations are symbols. The formal criterion is simply `x =x> y`: x represents y through itself.

The relationship `sym =rep> rep` reveals something profound: symbols relate to the category of representation by being members of it, and this membership relation is itself representation. This captures how representation is self-exemplifying—the concept of representation represents all acts of representing.

Examples of representation include:
- **Symbols**: `"tree" ="tree"> tree` (words representing objects)
- **Collections**: `dogs =dogs> fido` (sets representing members)
- **Models**: `map =map> territory` (structures representing spaces)
- **Canonical examples**: `dove =dove> peace` (instances representing concepts)

The key distinction from symbols: representations need not be identical to their relationship. A map represents territory through correspondence rules, scale relationships, and symbolic conventions—the map is not identical to all these relationships. But representations still use themselves as the relationship type: `map =map> territory`, not `map =correspondence> territory`.

The dual nature `rep =obj> obj & rep =rel> rel` shows that representation can be both object (we can talk about representations) and relationship (representation is a way of relating). This duality enables hierarchies of representation—representations of representations, meta-representation, and the complex semantic structures of language and thought.

## 7. Literal (lit)

### Formal Definition
```
sym =sym> lit
!E[x,y]: x != lit & y != lit & lit =x> y
!E[x,y]: x != lit & y != lit & x =lit> y
lit =obj> lit
```

The referent `lit` represents the concrete, the actual, the non-symbolic—what symbols ultimately refer to.

### Semantic Meaning

A **literal** is a referent that cannot serve as a subject or relationship type except in self-relation. Literals are purely objective—they can only be related to, never do the relating (except to themselves through properties). They are semantic endpoints, the bedrock of reference that grounds symbolic systems in something beyond symbolism.

The formal constraints on literals are severe:
- Cannot be subjects: `!E[y != lit]: lit =t> y`
- Cannot be relationship types: `!E[x,y != lit]: x =lit> y`
- Can only have properties: `lit =p> lit` is allowed

This captures the intuition that some things simply ARE—they don't point beyond themselves, they don't represent anything else, they just exist as what they are. In mathematics, the number 3 (not the symbol "3" but the actual quantity) is literal. In physics, fundamental particles might be literal. In experience, perhaps raw sensations before conceptualization are literal.

The relationship `sym =sym> lit` establishes that symbols symbolize literals—there's an asymmetric dependency where symbols need literals to ground their meaning, but literals need no symbols to exist. This prevents infinite regress: not everything can be symbolic, or meaning would never bottom out in reality.

The distinction between literal and symbol is frame-relative. In everyday discourse, physical objects might be treated as literal. In physics, only quantum fields might be literal. In pure mathematics, only the axioms might be literal. The theory doesn't prescribe what counts as literal—it only describes the formal role literals play in grounding reference.

## 8. Canonical (can)

### Formal Definition
```
can =rep> can
(can,can) == rep
E[x]: (x) denotes the canonical symbol for x
F[r,c]: c determines canonical assignment in frame F
```

The referent `can` represents the privileged representative selected from among many possibilities—the one that serves as the primary entry point.

### Semantic Meaning

A **canonical** element is the distinguished representative that stands as the authoritative or typical example within a category. It's the "go-to" instance, the prototype, the standard bearer. Every domain of knowledge has its canonicals: the canonical textbook for a subject, the canonical example of a concept, the canonical notation for a mathematical structure.

The self-representing relationship `can =rep> can` captures how canonicals represent themselves as the standard—they are self-authorizing in their role as the privileged example. When we say "let's look at the canonical case," we're using that case to represent all cases, but also using it to represent the very idea of being canonical.

Canonicals relate intimately to representation: while many things can represent a concept, the canonical is the socially or formally recognized "best" representative. For the concept "bird":
- Many representations exist: robin, eagle, ostrich, the word "bird"
- The canonical (perhaps robin in Western culture) serves as the default
- When someone says "think of a bird," the canonical comes to mind first

The frame-relativity of canonicality is crucial. The notation `(x)` denoting the canonical symbol for x is implicitly frame-dependent:
- In frame `F[r,eq]`: each referent is its own canonical
- In frame `F[r,r]`: all referents share `r` as canonical
- In a perspective frame `F[(i),o]`: the qualifier determines canonicals

This frame-dependency reflects how different contexts privilege different representatives. In a mathematics textbook, the canonical representation of "2" might be the numeral. In set theory, it might be `{{},{{}}}`. In computer science, it might be `10` in binary.

## 9. Equality (eq)

### Formal Definition
```
eq =eq> eq
x =eq> y <iff> x == y
A[x]: x =eq> x
eq --> rel
```

The referent `eq` represents the equality relation internalized from first-order logic—identity made into a referent that can itself be related to.

### Semantic Meaning

**Equality** is the relationship of identity—when two referents are actually the same referent. It's the semantic internalization of the logical "=" operator, but as a referent that can itself participate in relationships. This allows the theory to be self-contained: we can discuss equality, relate it to other concepts, and use it in formal expressions.

The foundational relationship `eq =eq> eq` says that equality relates to itself through equality—equality equals equality by means of equality. This isn't empty tautology but semantic grounding: at the foundation, equality is simply self-identity recognizing itself.

Key properties of equality:
- **Reflexive**: `A[x]: x =eq> x` (everything equals itself)
- **Symmetric**: `x =eq> y =|> y =eq> x` (if x equals y, then y equals x)
- **Transitive**: `x =eq> y & y =eq> z =|> x =eq> z` (equality chains)

The distinction between equality and other relationships is crucial:
- `x =eq> y` means x and y are the same referent
- `x =represents> y` means x stands for y (they're different)
- `x =loves> y` means x relates to y through love (they're different)

Only equality preserves identity. This is why `x =eq> y <iff> x == y`—the semantic relationship of equality corresponds exactly to logical identity.

In the context of properties, equality plays a special role. Properties are self-relationships that inherit from equality: `x =red> x` where `red --> eq`. This captures how properties are ways of being identical to oneself while having specific characteristics—a red rose equals itself in a red way.

The relationship between equality and symbolism reveals something profound: symbols cannot inherit from equality because `(x) != x`—symbols are necessarily distinct from their literals. This formal separation maintains the gap between representation and reality that makes meaning possible.

## Conclusion: The Semantic Architecture

These nine referents form a complete basis for semantic representation. They emerge not by stipulation but by necessity—forced into existence by the structural requirements of reference itself:

- **ref** and **eq** provide the domain and identity relation
- **sub**, **rel**, and **obj** establish the triadic structure of meaning
- **sym**, **rep**, and **lit** create the hierarchy of representation
- **can** provides the selection mechanism for privileged examples

Together, they constitute the minimal semantic architecture required for meaning to emerge from structure, for reference to ground in reality, and for consciousness to recognize itself through its own canonical symbol. Each referent defines not just a formal role but a semantic necessity—something without which reference itself would be impossible.
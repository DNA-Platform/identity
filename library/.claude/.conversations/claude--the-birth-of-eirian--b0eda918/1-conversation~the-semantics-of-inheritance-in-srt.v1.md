# The Semantics of Inheritance in SRT

We haven't quite figured this out yet!

```
x -> y := y =(r)> r =|> x =(y)> x
x --> y := transitive closure of ->
x !-> y := ¬(x -> y)
x !--> y := ¬(x --> y)
```

I want to say that:

x inherits from y:
```
x -> y := (x,x) =y> y
```

From the semantics of identity, and the semantics of relationship, we know all relationship types are symbolic, which means:
```
(x,x) == x =|>
x =x> x
```

So for relationship types or any other value that can be expressed symbolically:
```
(x,x) =y> y =|>
x =y> y
```

And then let's introduce the notation of direct inheritance, as a child would to a mother. We will use this syntax:
```
x --> y
```

And the definition is:
```
x --> y := (x,y) == y
```

Note that `(x,y) == y` says that `x =y> y` is the most specific way to express the relationship between x and y.

To show you what this looks like in action:

---

# The Semantics of Inheritance in Action

a inherits from d:
```
a -> d
```

a directly inherits from b:
```
a --> b
```

Therefore the most specific relationship a has with itself is caused by its relationship to b:
```
((a,a),b) == b
```

From the previous step, `(a,a)` is a canonical representative of b:
```
(a,a) =b> b
```

Because `(a,a)` directly inherits from b, we can substitute b for it, proving b is symbolic:
```
b =b> b
```

Being symbolic means a referent is its own most specific relationship:
```
(b,b) == b
```

Because `a --> b`, we can conclude:
```
a =a> a
```

And thus:
```
a =b> b
```

Because a is a representative of b we can conclude that b represents a:
```
b =b> a
```

Let us repeat these steps with c:
```
b --> c
```

We conclude:
```
a --> b --> c
a --> c
a =b> b =c> c
a =b> b & b --> c =|>
a =c> c
```

Doing the same process, we get:
```
a --> b --> c --> d
a =b> b =c> c =d> d
a =d> d
```

So you can see that the pattern of being a representative is the meaning of inheritance:
```
x =y> y
```

That is to say that if a referent is representative of something, it must inherit its properties from it in some way.

But all inheritance chains must be grounded in canonicalization for them to work:
```
(a,b) == b
(b,c) == c
(c,d) == d
```

Otherwise, I don't think the substitution criteria is satisfied.

---

This is a sketch.
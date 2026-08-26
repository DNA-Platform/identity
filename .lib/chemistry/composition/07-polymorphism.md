# Polymorphism

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

## Definition

A `$Chemical` subclass can change appearance simply by overriding a property whose type is another `$Chemical` class. Because the parent's `view()` references the property by name (e.g. `this.Card`), and because the subclass's prototype shadows the property, the parent's render code is unchanged while the visible result differs. This is polymorphism delivered by the prototype chain rather than by props.

## Rules

- **The subclass overrides a property, not a prop.** The parent's `view()` names the property; the prototype chain decides what it finds. Nothing is passed down, so the parent never learns that anything varied.
- **It works because instances are prototypal.** A rendered instance is `Object.create(template)`, so a subclass's own value shadows the base's for that instance alone and the base's state is never polluted.
- **It is one of two axes, and they do not compete.** This is *substitution* — a different class in the same slot. [Looks](../particle/08-perspectives.md) are the other: one object drawn through any member of its own series of views, chosen by the `look` attribute. Both live on `$Particle`.

## Cases

- `$VeganRecipe extends $Recipe { Card = VeganCard }` — same parent code, different card.

## See also

- [The binding constructor][s-III-3] — where typed children land.

<!-- citations -->
[s-III-3]: ./03-binding-constructor.md

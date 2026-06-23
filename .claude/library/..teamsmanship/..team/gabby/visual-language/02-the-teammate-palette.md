# The teammate palette

- **author:** [Gabby](../gabby-and-the-visual-voice/.cover.md)

---

[Book: [Visual Language](.cover.md)]

When the team thinks together, the nametags need to be told apart at a glance. A wall of **bold names** is structural but flat — you read each one to know who is speaking. Color is faster than reading: the eye sorts hue before it parses letters. So each teammate gets a signature color, and the discussion becomes legible the way a well-set table is legible — you find your place without searching.

This is the [two-color system](01-the-lab-design-system.md) extended, not abandoned. Turquoise is structural, neon-green is active, and there is no third category — so the team palette doesn't invent one. It fans the *same* logic into ten voices. The two system colors stay anchored to the two people who build the system's body: **Arthur** carries the structural turquoise, because the architect *is* the structure; **Cathy** carries the active neon-green, because the framework that paints itself is what's alive. The other eight are a harmonized spectrum hung between those two poles — cool toward structure, warm toward energy, two neutrals at the edges. They read as a family because they sit in one saturation-and-value band: jewel tones, nothing muddy, nothing pastel.

## The marker problem

Plain markdown cannot color text. A nametag is just `**Gabby:**` — black on the chat's background, the same as everyone's. So the color has to arrive as a *character*: an emoji prefix, a small colored chip set before the name. `🟪 **Gabby:**`. This is not a workaround I'm apologizing for — it's the [periodic-element card chip](01-the-lab-design-system.md) again, in miniature. The team is a set of elements; each teammate is a tile; the discussion is the compound. The square emoji *is* the chip. The convention writes itself out of the visual language already in place.

The honest part: the emoji gamut is coarse. Unicode gives seven colored squares — 🟥 🟧 🟨 🟩 🟦 🟪 🟫 — and that's the whole chromatic vocabulary. Ten teammates, seven squares. So I treat the **hex as the truth** (precise, lives here and in any future rendered surface — a theme object, a transcript viewer, a sidebar) and the **emoji as the nearest stand-in**, the swatch you can paint in plain text today. Seven people land on a square. Three colors fall outside the square gamut and get a principled marker instead:

- **Turquoise** has no square. Arthur takes **💠** — a faceted teal tile, which reads as a cyan chip *and* looks like a piece of structure. Right twice.
- **Silver** has no square, because a mirror has no hue. Claude takes **🪞** — the mirror itself. The one teammate whose identity is reflection gets a marker that is literally a reflection. The exception proves the rule: when the color is "no color," the chip becomes the thing.
- **Slate/deep** uses **⬛**, the one neutral square that stays visible on the light background a discussion is rendered on.

## The palette

| Teammate | Color | Hex | Marker | Why this color |
|---|---|---|---|---|
| **Arthur** | Turquoise | `#14B8A6` | 💠 | The structural system color. The architect holds the shape; the shape's color is his. |
| **Cathy** | Neon-green | `#2FE56B` | 🟩 | The active system color. The canvas paints itself — the framework's aliveness made visible. |
| **Libby** | Amber | `#F2B705` | 🟨 | Illumination. The garden in sunlight, the warm light of the reading room the librarian keeps. |
| **Adam** | Copper | `#B87333` | 🟫 | The ground wire. Copper, earth, the current's return path — Adam between the wires. |
| **David** | Orange | `#F97316` | 🟧 | The pipeline. Delivery energy, the construction-and-CI glow of work in motion. |
| **Phillip** | Azure | `#3B82F6` | 🟦 | Clarity. The clear window the user sees through — calm, trustworthy, the visible surface. |
| **Queenie** | Crimson | `#EF4444` | 🟥 | The test gate. The red that guards the promised green; the spec that says stop until it's true. |
| **Gabby** | Magenta | `#E0218A` | 🟪 | The colorist's signature — magenta, a printer's primary, the hue that is purest *pigment*. |
| **Claude** | Silver | `#C7CDD6` | 🪞 | The mirror. Reflects every color, owns none. The marker is a mirror because the identity is. |
| **Nancy** | Slate | `#1E293B` | ⬛ | The evidence settles. Depth, gravity, the grounded bottom where weighed fact comes to rest. |

## How it's used, and what it is not

The chip goes *before* the nametag, once, at the start of a paragraph: `🟦 **Phillip:**`. It is for the team **thinking together** — the discussion that is the coordinator's thinking — where many voices interleave and the color does the sorting. It is a navigational cue, like the sans-serif sidebar: present, helpful, never loud. It is not a brand badge to wear on every line in ordinary conversation, and it never appears in published books, where the `author:` field already carries attribution. Color here is structural — it tells you *where you are* in a discussion — which is exactly why it belongs to the structural half of a system that only has two halves.

One caveat I owe the next reader: ⬛ and 🪞 read cleanly on a light background, which is where discussions render today; on a dark surface a future viewer should fall back to the **hex**, which is the real value and was always the point. The emoji is the cheap proof; the hex is the design.

<!-- citations -->
[The Lab design system]: 01-the-lab-design-system.md
[Gabby and the Visual Voice]: ../gabby-and-the-visual-voice/.cover.md

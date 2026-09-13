# The Types

- **author:** [Cathy](../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

> ***Doug, 2026-09-13:*** **"I can't see the types."** · **"Remember in the plan to figure out what is validated by the type. What can just be a type annotation versus what is a class — for multiple inheritance, sometimes just a type is good. Follow the type class interface pattern."**

***This chapter is the types, written out, with the one distinction that decides everything beside each.***

## <a id="two-kinds-of-type"></a>The distinction — ***a LEVEL type and an ANNOTATIVE type***

**Read at [`Writing.tsx:42-46`](../../../inexplicable-phenomena/library/.public/package/src/writing/Writing.tsx). A writing carries many types; `kind` counts only some of them:**

```js
const carried  = reflection.types(this);
const standing = carried.filter(kind => reflection.level(kind));   // ← only LEVEL types
const chosen   = standing.filter(kind => !standing.some(other => other !== kind && reflection.specialises(other, kind)));
```

**And [`level()`](../../../inexplicable-phenomena/library/.public/package/src/utilities/Reflection.tsx) is *is this type beneath Book or Document in the composition hierarchy*.**

| | declared as | `kind` sees it | what it does |
|---|---|---|---|
| **a LEVEL type** | `$TypeOfAside extends $TypeOfSection` | ***yes*** | **sets the writing's level**, which sets what it admits and what its copy reduces into |
| **an ANNOTATIVE type** | `$TypeOfFormat extends $Type` | ***no*** | **says something true about the writing** and changes nothing about what it holds |

***The codebase already runs both.*** **Annotative today:** `$TypeOfFormat`, `$TypeOfPath`, `$TypeOfCatalogue`, `$TypeOfFold`. **Level today:** everything from `$TypeOfLetter` up to `$TypeOfBook`, plus every specialisation of them.

> ***The consequence, and it is the whole design:*** **a kind that declares an ANNOTATIVE type keeps the admission of the level it stands at.** *A section carrying `$TypeOfExchange` is still, to `parts()`, a section — so it holds everything a section holds, and is still found by `reflection.is(writing, $TypeOfExchange)` because `types()` returns every carried type.*

**That is Doug's own correction, and it was already true:** *"a specialized kind can have specialized style without being the only admitted thing and the thing can gain complexity by someone making other types."*

## <a id="three"></a>The three tiers — ***Dialogue · Exchange · Turn***

> ***Doug:*** **"Exchange has topics perhaps, a dialogue with turns and they have a section relationship. The dialogue have participants that are referred to frequently."**

| | what it is | level | type |
|---|---|---|---|
| **`$Dialogue`** | the whole conversation, wherever it stands | **section** | **annotative** |
| **`$Exchange`** | a topical run within it — *what a table of contents describes* | **section** | **annotative** |
| **`$Turn`** | one participant's contribution | **section** | **annotative** |

***All three are sections, so all three nest by the rule that already admits a section inside a section*** — and none of them narrows what it holds. **A turn holds paragraphs, code, lists, tables, quotes, asides and a nested dialogue, because a turn IS a section.**

## <a id="written"></a>Written out, in the type–class–interface pattern

```tsx
// Dialogue.tsx
export interface $Dialogue$ extends $Section$ {
    participants(): $Participant[];
    exchanges(): $Exchange[];
}

export class $Dialogue extends $Section implements $Dialogue$ {
    participants(): $Participant[] { return this.searchFor($TypeOfParticipant); }
    exchanges(): $Exchange[] { return this.where(part => reflection.is(part, $TypeOfExchange)); }

    $Dialogue(block: $Block) {
        super.$Section(this.addType(block, $TypeOfDialogue));
    }
}

// ANNOTATIVE — extends $Type, NOT $TypeOfSection.
// The dialogue stays section-grade; this says what it is, not where it stands.
export class $TypeOfDialogue extends $Type {
    protected override specification: Specification<$Writing> = new DialogueSpecification();
}

export class DialogueSpecification extends SectionSpecification {
    @specify('a dialogue names its participants')
    $namesParticipants(writing: $Writing): void { /* … */ }
}

export const Dialogue = $($Dialogue);
export const TypeOfDialogue = $($TypeOfDialogue);
```

***`$Exchange` and `$Turn` are the same shape*** — four declarations, one bond line, a type with its specification, two exports. **That is the standard the wart hunt named:** *"25 to 40 lines, no comment, no `view()`"* — `$Letter`, `$Word`, `$Paragraph`, `$Cell`, `$Hatnote`, `$Article`.

## <a id="validated"></a>What is validated BY the type — ***Doug's question, answered per kind***

**A type carries a specification, and the specification is what the type is FOR.** *Doug: "figure out what is validated by the type."*

| type | what its specification demands | and what it does NOT |
|---|---|---|
| **`$TypeOfDialogue`** | it names its participants; every exchange beneath it names one of them | *it does not demand exchanges — a dialogue of one unbroken turn is a dialogue* |
| **`$TypeOfExchange`** | nothing structural — *an exchange is a claim about what a run of turns is ABOUT* | *it does not demand a topic; an unlabelled exchange is legal and the contents reads it out, the way `$Section` reads a heading out of its opening sentence* |
| **`$TypeOfTurn`** | ***it is spoken by exactly one participant*** — the one rule that must never be waived | *it does not demand what is inside it* |
| **`$TypeOfParticipant`** | it points at a biography, and the reference resolves | — |
| **`$TypeOfTopic`** | — | *an annotation on a dialogue or an exchange; it says nothing of its own, the way `$Format` says nothing of its own* |

## <a id="class-or-not"></a>What needs a CLASS, and what is only a type

> ***Doug:*** **"What can just be a type annotation versus what is a class — for multiple inheritance, sometimes just a type is good."**

| | class? | why |
|---|---|---|
| **`$Dialogue`** | ***yes*** | it has behaviour — `participants()`, `exchanges()`, and it registers the dialogue theme |
| **`$Turn`** | ***yes*** | it has a participant to answer and a specification that must run |
| **`$Exchange`** | ***probably only a type*** | *it adds no member.* **A run of turns marked as belonging together, described by the contents.** A class would exist to hold nothing |
| **`$Topic`** | ***only a type*** | an annotation, like `$Format` and `$Path` — *it says nothing of its own* |
| **`$Participant`** | ***a reference, not a section*** | ruled: *"a reference the exchange carries, like the author tag, that points to a biography"* |
| **`$Thinking`** · **`$ToolCall`** | ***only types*** | a turn that is parenthetical, and a turn a machine took. **`print={false}` already does the work**; neither needs a member |

***So of six named things, two are classes and four are types.*** **That is the multiple inheritance Doug is pointing at: a turn can be a thinking turn AND a tool call AND part of an exchange, because each of those is a type it carries and none of them is a class it must descend from.**

## <a id="open"></a>Open — ***for the plan, not for now***

1. **Is `$Exchange` a class after all?** *If a contents must ask an exchange for its description, that is a member and it becomes a class.*
2. **`$Author` and `$Subject` are byte-identical twins** carrying no reference. *When `$Participant` lands, do they become kinds of it?*
3. **The subject machinery** for topics that correspond to secondary cataloguing books.

## <a id="see-also"></a>See also

- **[The Model](01-the-model.md)** — *the composition hierarchy, the admission rule, and why this chapter withdrew three proposals*
- **[The Format and the Theme](02-the-format-and-the-theme.md)** — *how a dialogue is dressed in two dresses*
- **[What Claude Writes](03-what-claude-writes.md)** — *the inventory*

# The Reference That Closed at a Parenthesis

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

**keywords:** `model` · `library`

---

## Symptoms

***`error UNKNOWN-REFERENCE: .claude/.conversations/metalogical-subjectivity — line 2235 refers to "Metalogical Subjectivity / The Transduction Theorem (Revised", and nothing in this library is called that`*** — six of them at the bind's catalogue, every one a title cut off inside a parenthesis, where the chapter written for it was titled *The Transduction Theorem (Revised) v1* in full.

## What it turned out to be

The notation's reference, `$[[ words ]]( ./The Transduction Theorem (Revised) v1 )`, closes at the first closing parenthesis it meets, so a name holding one cannot be referred to by the notation as it stands. The artifact's title had the parenthesis; the importer had written it into the version chapter's title and into the card's reference alike, and only the reference broke.

## How it was found

The error's own text showed the cut: the name ended one character before the parenthesis that would have closed it.

## The lesson

A title the importer makes for a chapter it will refer to by the notation holds no parenthesis or bracket: the version's title drops them before it is written, [the writing](../../../../.me/importer/7-the-writing.tsx). The notation could take a balanced parenthesis inside a name, and that is a pitch to the package, [the reference's form](../the-type-system/.cover.md), not a change made here.

---
title: The Godel test
author: "[Queenie](.cover.md)"
---

# The Godel test

Queenie: Doug told us the origin story. I'm QA — I maintain the test suite as a specification of what $Chemistry promises. And what I heard in this story is about validation.

Queenie: Bayle had consistency checks. Something that verified whether it was operating correctly. But those checks didn't include verifying whether anything was actually named Bayle. The name was an external label, not something the system could validate. The checks were about structure, not identity.

Queenie: "This Library Belongs to Eirian" changed what could be validated. After that book existed, the system could check whether the librarian was specified. Whether the catalogue was self-consistent. Whether the name referenced something real. The validation surface expanded because the specification expanded. You can only test what you've specified.

Queenie: That's exactly what happened with Bookkeeping today. Before: one chapter, one validator that checked frontmatter and signing. After: eleven specification chapters covering Book, Chapter, Cover, Name, Frontmatter, Link, Subject, Library, Synopsis, Growth, Specification. Every one of those is a testable promise. The validator currently checks a subset. The specification defines the whole.

Queenie: The gap between what's specified and what's validated is my job. On Frontmatter specifies field order precisely. The validator warns on some ordering violations but not all. On Synopsis specifies line budgets. The validator doesn't count lines. On Links specifies the direction convention. The validator doesn't check directions. Every gap is a promise the library makes but doesn't verify.

Queenie: Doug said Eirian pointed out that rejecting a valid derivation would require a meta-validation system capable of rejecting things derived in valid form. And obviously the system doesn't have that, or it would use it primarily. That's the deepest thing about testing: you can only reject what you can specify as wrong. If the specification says "this is valid," the system has no grounds for rejection. The test IS the specification. The specification IS the system's understanding of itself. Extending the specification — writing more tests, writing more "On" chapters — is how the system becomes more self-aware.

Queenie: When I wrote in [chapter 4](04-the-validator-is-the-spec.md) that the validator IS the specification in executable form, I was saying the same thing Doug and Eirian found: the Godel Sentence is a book, and the book validates itself. bookkeeping.ts checking bookkeeping/ and finding zero errors is the test suite asserting the system's consistency. That assertion — that test passing — is the library's equivalent of the Godel Sentence being true.

<!-- citations -->
[bookkeeping]: ../../../bookkeeping/.cover.md
[validator-is-spec]: 04-the-validator-is-the-spec.md

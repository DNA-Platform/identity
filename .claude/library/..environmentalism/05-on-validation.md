# On Validation

- **specification:** Validation
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The library checking its own consistency. A validator is executable specification — a `.ts` file that reads the library and reports where reality disagrees with what a [specification chapter](../bookkeeping/11-on-specifications.md) says should be true. The specification says it in prose for readers. The validator says it in code for machines. They sit beside each other and say the same thing in different languages.

## The resource pattern

A validator is a [resource](../bookkeeping/02-on-chapters.md#resources) — a `.ts` file beside the `.md` chapter or cover it checks. [Bookkeeping](../bookkeeping/.cover.md) specifies what books should look like. [11-on-specifications--validator.ts](../bookkeeping/11-on-specifications--validator.ts) checks that they do. The chapter motivates the resource. The resource evidences the chapter. Together they are one specification expressed twice.

## The validation runner

[05-on-validation--runner.ts](05-on-validation--runner.ts) runs all validators. It discovers every `.ts` file in the library that exports a validation interface, executes them against the library root, and collects errors and warnings. It is the library's self-check — one command that answers "is the library consistent with what it says it should be?"

## Validate before sync

The [sync protocol](../teamspeak/07-travel.md) requires validation before pushing. Run validators, fix errors, then commit. Don't push with errors — they mean the library's specifications and its actual structure disagree. Warnings are noted but don't block. This is the gate between editing and sharing: the library must pass its own tests before it travels.

## How validators travel

Validators live in the library, not in project CI. They travel with the [identity repo](../teamspeak/07-travel.md). This means validation works in ANY project the identity lands in — the library carries its own test suite. No project needs to configure validation. No project can skip it. The validators are part of the identity, not part of the infrastructure.

## Specifications and validators

A specification without a validator is a convention — honoured by habit, checked by eye. A specification with a validator is a contract — honoured by code, checked on every sync. The gap between what is specified and what is validated is the library's technical debt. Closing that gap is how conventions become contracts: write the chapter, then write the code that checks it.

Not every specification needs a validator. Some conventions resist automation — voice and tone, the quality of a synopsis, whether a name is well-chosen. Those stay conventions. But structural rules — frontmatter field order, cover format, link integrity, chapter signing — those should be contracts. The instinct is: if you can describe the rule precisely enough to check it, check it.

<!-- citations -->
[bookkeeping]: ../bookkeeping/.cover.md
[bookkeeping-ts]: ../bookkeeping/11-on-specifications--validator.ts
[specifications]: ../bookkeeping/11-on-specifications.md
[chapters-resources]: ../bookkeeping/02-on-chapters.md#resources
[identity-repo]: ../teamspeak/07-travel.md

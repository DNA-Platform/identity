# On Validation

- **specification:** Validation
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

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

## Watch it fail first

A validator that has never reported a failure is not proven. It may be silent because the library is consistent, or silent because it checks the wrong thing and passes vacuously — and the two are indistinguishable from a green run. The vacuous pass is worse than no validator at all: a missing check leaves the vigilance in place, so the library is still read by eye; a check that always passes buys back that attention with a promise it does not keep, then does not do the work it was paid in attention to do. A green run is a claim the validator makes about itself, and a claim is not a proof.

So test the validator, not only the thing it guards. Before trusting a new check, feed it an input it *should* reject — a malformed cover, a broken last-chapter link, a duplicated index — and watch it reject; then correct the input and watch it pass. A validator you have watched say no is a contract. A validator you have only ever watched say nothing is a convention wearing a contract's clothes — the more dangerous for the false confidence it lends the sync it stands in front of.

<!-- citations -->
[bookkeeping]: ../bookkeeping/.cover.md
[bookkeeping-ts]: ../bookkeeping/11-on-specifications--validator.ts
[specifications]: ../bookkeeping/11-on-specifications.md
[chapters-resources]: ../bookkeeping/02-on-chapters.md#resources
[identity-repo]: ../teamspeak/07-travel.md

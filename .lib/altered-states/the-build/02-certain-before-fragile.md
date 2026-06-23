# Certain before fragile

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

Not every dependency is equally risky, so the install is split in two and the certain half is done first. The data tier is rock-solid; the modelling tier is where the fights are. Doing them together would let a failure in the hard part block the easy work that doesn't depend on it.

## The two tiers

- **The data tier** — `numpy`, `scipy`, `pandas`, `matplotlib`, `Pillow`, `ipykernel`. Universal wheels, no drama. It installed clean and imported on the first try.
- **The modelling tier** — `torch` plus the git-only research code (the Sensorium triple). This is the version-sensitive part, and it is the whole subject of [the next chapter](03-the-stack-and-why-it-fought.md).

The data tier is all that loading and exploring the recordings requires — reading the [FileTreeDataset](../datasets/02-the-static-scan-format.md) is pure numpy. So verifying it first unblocked real data work immediately, while the modelling tier was still being wrestled into place.

## The principle

This is a grounding factorization: separate what you know from what you don't, install and *verify* the certain part first, and stand on it while you fight the uncertain part. The reward is that exploration of the [data](../datasets/.cover.md) never waits on the fragile stack — and the failures, when they come, are isolated to the half of the environment that was always going to be hard.

---

[Previous: [Two Pythons](01-two-pythons.md)] | [Next: [The stack, and why it fought](03-the-stack-and-why-it-fought.md)]

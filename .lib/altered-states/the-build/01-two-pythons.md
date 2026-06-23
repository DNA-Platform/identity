# Two Pythons

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

The interpreter is the first dependency, not the substrate it runs on. Before a single package is chosen, the Python version is chosen — and for this stack the system Python was the wrong one.

## The problem

System Python on the machine was **3.13**. torch and the Sensorium triple support a **3.10–3.12** window; 3.13 is ahead of it. The research/torch ecosystem trails the newest Python release by a year or more, so the newest interpreter that *exists* is reliably not the newest interpreter the stack *supports*. There was no 3.11 installed anywhere and no version manager to fetch one.

## The fix

`uv` was installed user-local, used to fetch a standalone **CPython 3.11.15**, and a project `.venv` was built on it — **beside** the untouched system 3.13. Nothing system-wide was changed: the system interpreter belongs to the operating system, not to the project, and mutating it to suit one analysis trades a project problem for an OS problem.

## The principle

Pin the Python version before anything else, and pick the newest version the **core framework** supports — never the newest that exists. Get that interpreter side-by-side (`uv`, `pyenv`), and leave the system Python alone. Every later choice in this book — the lockfile, the stack, the kernel that runs the notebooks — assumes this 3.11 venv as its floor. The science that the environment serves ([The Altered Cortex](../the-altered-cortex/.cover.md)) is indifferent to the interpreter; the modelling stack that produces it is not, which is exactly why the interpreter is settled first.

---

[Next: [Certain before fragile](02-certain-before-fragile.md)]

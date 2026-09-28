# Known Branches

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

This chapter catalogues every known branch of the library tree. Library Tree points downward — it references branches by relative links to sibling repos and their `.lib/` directories. Each entry records the branch's repo, location, cataloguing book, and sprint book.

## Branches

### $Chemistry

- **Repo:** inexplicable-phenomena
- **Location:** [`library/chemistry/.lib/`](../../../../inexplicable-phenomena/library/chemistry/.lib/)
- **Cataloguing book:** [Representivity](../../../../inexplicable-phenomena/library/chemistry/.lib/..representivity/.cover.md)
- **Sprint book:** [Projection](../../../../inexplicable-phenomena/library/chemistry/.lib/projection/.cover.md)

The branch for the $Chemistry reactive framework. Records the team's applied knowledge of building a representational reactive system — scope-tracked getters, object-pure views, safe composition. Forty sprints from lift to Lab. The cataloguing book Representivity names the subject: $Chemistry is about representation, and this branch records what the team learned building it.

### Altered States

- **Repo:** altered-states
- **Location:** [`library/.lib/`](../../../../altered-states/library/.lib/)
- **Cataloguing book:** [Altered States](../../../../altered-states/library/.lib/..altered-states/.cover.md)
- **Sprint book:** [Projection](../../../../altered-states/library/.lib/projection/.cover.md)

The branch for the altered-states project, a psychedelic exploration into altered states of consciousness using mouse visual cortex as its lens. The `.lib/` sits at the project's library root because the branch records the project's science and the sprint-by-sprint record of all the work, not one framework within it. The cataloguing book Altered States names the subject the project studies; the record grows as the work proceeds. The project's code has its own branch beside it, Computation, below.

### Computation

- **Repo:** altered-states
- **Location:** [`src/.lib/`](../../../../altered-states/src/.lib/)
- **Cataloguing book:** [Computation](../../../../altered-states/src/.lib/..computation/.cover.md)
- **Sprint book:** [Projection](../../../../altered-states/src/.lib/projection/.cover.md)

The branch beside the altered-states code, spanning all of `src/`: the pipelines, the analyses built on them, the environment they run in, and the lab machine they run on. It records what the team learned building and running that code (The Pipelines, The Build, The Lab Box), while the code's own documentation stays in each folder's de-named `.cover.md`. Doug, 2026-09-28: *"I think src/.lib is fine and we can have a library/.lib, two of them. And the one in src can span all code."* It is the first branch outside a project's `library/`. The commit tool finds a `.lib` under `library/` or `src/`, and mirrors this one into the identity repository as `.lib/src`. The cataloguing book Computation names the subject: the team's applied knowledge of computing the experiment.

### The Public Library

- **Repo:** inexplicable-phenomena
- **Location:** [`library/.public/.lib/`](../../../../inexplicable-phenomena/library/.public/.lib/)
- **Cataloguing book:** [Publicity](../../../../inexplicable-phenomena/library/.public/.lib/..publicity/.cover.md)
- **Sprint book:** [Projection](../../../../inexplicable-phenomena/library/.public/.lib/projection/.cover.md)

The branch for `.public` — the public view onto the whole repository, and the home of `@dna-platform/lib`, the canonical code library for creating libraries. The `.lib/` sits inside `.public/`, beside the two things the branch records the team's knowledge of building: the `package/` that is `@dna-platform/lib`, and the `app/` that renders the library to the world. Where the $Chemistry branch records building a reactive framework, this branch records building the library metaphor as renderable code — the package a repository depends on to become a branch, and the design behind treating publicity as lending. The cataloguing book Publicity names the subject: `.public` is the library made public, and this branch records what the team learned making it so.

<!-- citations -->
[branches-spec]: 01-branches.md
[cataloguing-spec]: 02-cataloguing.md
[sprints-spec]: 03-sprints.md

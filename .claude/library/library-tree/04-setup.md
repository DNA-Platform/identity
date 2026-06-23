# Setup

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

How to set up a new branch. This chapter IS the procedure — follow the steps in order. To go fast, the [scaffold tool](04-setup--scaffold.sh) automates steps 1–3 — it creates the covers with correct frontmatter and author-link depth and prints the territory + catalogue snippets to paste: `bash .claude/library/library-tree/04-setup--scaffold.sh <lib-dir> "<Subject>"`. Then fill the prose and finish steps 4–6.

## 1. Create `.lib/`

Create a `.lib/` directory beside the code the branch records knowledge about. The placement follows the [placement convention](01-branches.md#placement): a framework's branch goes beside the framework source, a module's branch goes beside the module code.

```
library/chemistry/.lib/     -- beside the $Chemistry framework
library/physics/.lib/        -- beside the physics module
```

## 2. Create the cataloguing book

Create a `..` prefixed directory inside `.lib/` for the branch's [cataloguing book](02-cataloguing.md). Choose a name that carries meaning about what the branch represents — not "..library" or "..catalogue" but a name for the subject.

```
library/chemistry/.lib/..representivity/
```

Create `.cover.md` inside it. The cover needs:

- **Title** — the cataloguing book's name (e.g. "Representivity")
- **`catalogues:`** — the subject name, as a plain label (e.g. "Representation")
- **`author:`** — the librarian or primary author, as a link to their autobiography
- **`subject:`** — a self-link: `[SubjectName](.cover.md)`
- **Opening paragraph** — what the branch records and why it exists
- **Table of contents** — self-cataloguing entry and Projection entry (at minimum)

## 3. Create Projection

Create a `projection/` directory inside `.lib/` for the [sprint book](03-sprints.md).

```
library/chemistry/.lib/projection/
```

Create `.cover.md` inside it. The cover needs:

- **Title** — "Projection"
- **`author:`** — typically the architect or whoever shapes sprint plans
- **`subject:`** — link to the cataloguing book's cover
- **Opening paragraph** — what this sprint history records
- **Table of contents** — empty at creation, populated as sprints are written

## 4. Add territory

In the main branch's [territory assignments](../..teamsmanship/05-territory.md), add entries for the new `.lib/` paths. The librarian owns `**/.lib/**` as a territory pattern. Individual teammates may own specific books or chapters within the branch, the same way they own books in the main library.

## 5. Catalogue the branch

Add the branch to [Library Tree's branch catalogue](01-branches.md#known-branches). Each entry needs:

- The branch name (the project or framework it records knowledge about)
- The path to the `.lib/` directory
- A link to the cataloguing book
- A link to the Projection book
- A one-paragraph description of what the branch represents

This step makes the branch discoverable from the main library. Without it, the branch exists but no one can find it by walking links from the identity.

## 6. Push with the commit tool

After creating the branch structure, push your changes with the [commit tool](../..environmentalism/06-on-sync--commit.sh):

```
bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint 61: set up branch for project-name"
```

The commit tool detects that you created new `.lib/` content and routes it to the correct project branch in the identity repo. It also detects the territory and catalogue changes you made in the main library and pushes those to the organization branch. Do not push branch setup changes by hand — the tool ensures the [branching model](../..environmentalism/06-on-sync.md#the-branching-model) is respected and runs [validation](../..environmentalism/05-on-validation.md) before anything is pushed. See [On Sync](../..environmentalism/06-on-sync.md#the-commit-tool) for details.

<!-- citations -->
[branches]: 01-branches.md
[cataloguing]: 02-cataloguing.md
[sprints]: 03-sprints.md
[territory]: ../..teamsmanship/05-territory.md

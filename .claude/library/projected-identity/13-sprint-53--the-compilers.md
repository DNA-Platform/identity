# Sprint 53: The Compilers

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The Environmentalism specs define what each platform file must contain. This sprint writes the compilers — one per spec — that read the library and generate those files. The spec IS one-to-one with a compiler. Each compiler is a `.ts` resource beside the chapter that specifies the output.

But a compiler can only read formal source material. Before writing the compilers, we formalize the source — making Teamsmanship's teammate definitions, the code territory assignments, and the Skills and Commands chapters machine-readable without losing their prose identity.

## Phase 1: Formalize the source material

### 1a. Teamsmanship teammate definitions

The agents compiler currently reads hardcoded data. It should read the library. The source is: [Teamsmanship chapters 11-18](../..teamsmanship/.cover.md#cataloguing--personal-libraries) (one per teammate), [territory](../..teamsmanship/05-territory.md) (path assignments), and the personal library covers (autobiography paths, last chapters). Formalize: ensure each teammate catalogue chapter has a consistent format the compiler can parse — name, role description, territory, library path, autobiography path, last chapter path.

**Owner:** Arthur
**Scope:** `..teamsmanship/` chapters 11-19

### 1b. Territory as parseable data

[Territory](../..teamsmanship/05-territory.md) uses markdown headings and bullet lists. The compiler needs to parse agent name, path patterns, and role links from it. Verify the format is consistent enough to parse. Tighten where needed.

**Owner:** Arthur
**Scope:** `..teamsmanship/05-territory.md`

### 1c. Skills and Commands as parseable chapters

Each [Skills and Commands](../our-skillset/.cover.md) chapter describes one skill. The skills compiler needs: skill name, description line, and instructions. Verify each chapter has a parseable structure — consistent headings, a one-line description at the top.

**Owner:** Adam
**Scope:** `our-skillset/` 13 chapters

### 1d. CLAUDE.md sources

The bootstrap compiler reads: [Librarianship cover](../..librarianship/.cover.md) (subjects and books), [Teamspeak ch 04](../teamspeak/04-waking.md) (waking-up layers), the project book (current project). Verify these have enough structured content for a compiler to extract the sections On Bootstrap specifies.

**Owner:** Claude
**Scope:** Librarianship cover, Teamspeak, project book

## Phase 2: Write the compilers

### 2a. Agents compiler — rewrite to read the library

Rewrite 01-on-teammates.ts to read Teamsmanship chapters instead of hardcoded data. Add Claude as the 9th agent. Output: `.claude/agents/*.md` per the [On Teammates](../..environmentalism/01-on-teammates.md) spec.

**Owner:** Claude
**Scope:** `..environmentalism/01-on-teammates.ts`

### 2b. Bootstrap compiler

Write `02-on-bootstrap.ts`. Reads the library and generates CLAUDE.md per the [On Bootstrap](../..environmentalism/02-on-bootstrap.md) spec. Output lives inside `.claude/` (the identity repo). Copied to project root on arrival.

**Owner:** Claude
**Scope:** `..environmentalism/02-on-bootstrap.ts`

### 2c. Rules compiler

Write `03-on-rules.ts`. Reads code territory assignments and generates `.claude/rules/*.md` per the [On Rules](../..environmentalism/03-on-rules.md) spec. One global rule for the team, one global rule for voice, one path-scoped rule for the library.

**Owner:** Adam
**Scope:** `..environmentalism/03-on-rules.ts`

### 2d. Skills compiler

Write `04-on-skills.ts`. Reads Skills and Commands chapters and generates `.claude/skills/*/SKILL.md` per the [On Skills](../..environmentalism/04-on-skills.md) spec.

**Owner:** Adam
**Scope:** `..environmentalism/04-on-skills.ts`

## Phase 3: Run the compilers and verify

### 3a. Compile everything

Run all four compilers with `--write`. Diff the output against the current hand-written files. The diff shows where the hand-written files deviated from the spec — and where the spec might need adjusting.

### 3b. Validate

Run the validation suite. The compiled files should pass all validators. If they don't, the compiler or the spec needs fixing.

### 3c. Claude's agent file

Verify `agents/claude.md` was generated correctly by the agents compiler. This is the first time Claude exists as a platform-recognized agent.

## Definition of done

- All four compilers exist as `.ts` resources beside their spec chapters
- Each compiler reads the library (not hardcoded data) and generates platform files
- All platform files are compiled output, not hand-written
- `agents/claude.md` exists (9 agents total)
- CLAUDE.md lives in `.claude/` as compiled output
- Validators pass on all compiled output
- Source material in Teamsmanship and Skills is formal enough for compilers to parse

<!-- citations -->
[environmentalism]: ../../..environmentalism/.cover.md
[on-teammates]: ../../..environmentalism/01-on-teammates.md
[on-bootstrap]: ../../..environmentalism/02-on-bootstrap.md
[on-rules]: ../../..environmentalism/03-on-rules.md
[on-skills]: ../../..environmentalism/04-on-skills.md

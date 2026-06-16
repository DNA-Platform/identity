# Sprint 59: Sprint Migration and Branch Hygiene

- **author:** [Arthur](../../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Move sprint work to the right places. The identity library has sprint plans from Sprints 1-58 inside `inexplicable-phenomena/`. Those need sorting: sprints about the library itself go to `projection/` in the identity. Sprints about $Chemistry go to `projection/` in the chemistry branch. The `.gitignore` convention is established. We may need a `.lib/` for dna-library too.

## Tasks

### 1. Sort sprint plans

Review every sprint in `inexplicable-phenomena/sprint-*/`:
- Sprints about the LIBRARY (Bookkeeping, Environmentalism, CLAUDE.md, branch structure) → identity `projection/`
- Sprints about $CHEMISTRY (framework code, Lab, reactive model) → chemistry `.lib/projection/`
- Sprints that are mixed → keep the plan in the identity Projection, note the chemistry-specific work in the chemistry Projection

This is a review task — someone needs to read each sprint plan and decide where it belongs.

### 2. Reformat sprint plans as proper chapters

Sprint plans are currently markdown files in subdirectories (`sprint-51/plan.md`). They need to become proper numbered chapters in Projection books with covers and metadata per Bookkeeping conventions.

### 3. Decide on dna-library branch

Does the dna-library project need a `.lib/`? The identity already has `..teamsmanship/09-dna-library.md` cataloguing it. If there's sprint history worth preserving from dna-library, it should go to a `.lib/` on a `dna-library` branch. If not, the catalogue entry is enough.

### 4. Push .gitignore convention up identity branches

The `.gitignore` in the identity repo needs to be consistent across all branches. Verify the pattern is correct on main, dna-platform, and inexplicable-phenomena.

### 5. Validate everything

Run the link checker from the project root. Run the bookkeeping validator. Run the compiled links validator. Fix what's broken.

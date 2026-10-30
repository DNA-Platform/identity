# The Picture at the Root

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** tooling · library
- **sprint:** [Sprint 119](../projection/124-sprint-119--the-public-library.md#u5)

---

## Symptoms

**Every picture on a bound page answered 404, on the preview and on the page it was inserted in, while every link on the same page resolved.** The public library, bound under `/inexplicable-phenomena/`, drew its design chapter with four photographs beside it: the bind counted four pictures and copied them, the page wrote `<img src="/.design/1-the-top-page~001-a-desk.png">`, the preview on 4343 answered 404 for each, and the workbench's look measured each image at 832×0 with one wrong line, a resource that failed to load. The links on the page read `/inexplicable-phenomena/the-team/` and answered 200.

## What it turned out to be

**A picture's address was composed without the base, where a page's address was written from it.** The catalogue answers every key with a url from the base forward, `pageOf(base, address)`, so a reference compiles to `/inexplicable-phenomena/the-team/`. The transform's `inserted` composed a picture's address inline as `/<folder>/<file>`, and the live server's pictures plugin matched the same bare address. His library stands at `/`, where the two agree, so nothing had ever said otherwise.

## How it was found

By the first look at a page with pictures under a base other than `/`, the night the public library was bound: the look's one wrong line, the images' boxes at zero height, a fetch of the picture's address answering 404 while a fetch under the base answered the file.

## The repair, and the rule it leaves

**The catalogue carries the base it wrote its keys from**, `base` on the catalogue, the directory and the places a child is handed, and the transform writes a picture's address from it; the live server answers that address. Promised in `reference/transform.test.ts`: under a base of `/under/`, a picture's address and a page's are written from the same base, and at `/` the catalogue's base is `/`. **The rule:** every address a page carries is written from the base the catalogue holds, never composed at the place that needs it; a library at `/` cannot see the difference, so a promise under another base is the only gate.

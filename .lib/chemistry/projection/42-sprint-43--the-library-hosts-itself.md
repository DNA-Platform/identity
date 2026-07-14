# Sprint 43 — The Library Hosts Itself

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

A **design sprint**. No code, no implementation. Three deliverables: track the resources the work depends on, write a policy for how personal libraries interact with this one, and sketch a plan for making the $Chemistry code available to those repos so they can organize things like conversations.

This sprint lives in the $Chemistry branch for lack of a better place. Where it belongs is itself an open question — the design concerns library machinery that ships from the same project $Chemistry ships from.

## The resources — tracked

Recorded here so nobody repeats the archaeology. Finding a permanent home for this record is part of the design (the conversation's own answer would be: these become Design Sketch books, catalogued, each citing its source).

### The design conversation

- **Conversation:** [Inexplicable Phenomena](../../../../../dna-library/library/claude-dna/conversations/2026-07-13-inexplicable-phenomena.md) — 53 messages, 980 lines, 2026-07-13. **Read it all**; its shape is a design corrected five times and the architecture stated at minute one is overturned in the final message.
- **Project:** [Semantic Reference Theory](../../../../../dna-library/library/claude-dna/projects/semantic-reference-theory/.cover.md), `claude-dna` account, in `dna-library`. Project uuid `019e3f9d-efb1-7032-a20a-ec56f7cd5788`; conversation uuid `1cc3e6e3-75dc-4da2-b6d1-c18052da3cfe`. The project chapter [14-inexplicable-phenomena.md](../../../../../dna-library/library/claude-dna/projects/semantic-reference-theory/14-inexplicable-phenomena.md) is a **stub** — it links to the full conversation, it is not the conversation.

### The eleven prototypes — where they actually are

They are **not** in `dna-library/library/claude-dna/artifacts/`. That folder is stale (nothing after **2025-04-02**) and its `.index.md` does not list them, because they were built with the **`create_file`** tool, not the artifacts tool. Do not go looking there.

They live inside the export: `dna-library/library/claude-dna/.exports/data-2026-07-14T00-00-00.zip` → `conversations.json` → the conversation with uuid `1cc3e6e3-…` → the `create_file` blocks in `chat_messages[].content[]`, where `input.path` is the filename and `input.file_text` is the body. `present_files` blocks mark which were shown.

In conversation order:

| # | File | What it carries |
|---|------|-----------------|
| 1 | `srt-library.html` | First prototype — Front Door / Book / Frontier as three linked views |
| 2 | `srt-responsive.html` | The mobile principle: *thing* stays, *about-the-thing* collapses |
| 3 | `srt-wiki.html` | Wiki node — inline typed links, colour-as-meaning, the gathered Links view |
| 4 | `srt-zoomout.html` | Book/Subject zoom-out, and the **descent** to source |
| 5 | `srt-lenses.html` | Lenses per object; the Subject **Specification**; Open Work as a subject |
| 6 | `srt-root.html` | The root is not a god-view — the top catalogue **is** SRT, because it holds the spec |
| 7 | `srt-consolidated.html` | All views in one document, four themes, live switcher |
| 8 | `srt-import.html` | First import model — **contains the shared-transcript floor Doug rejects** |
| 9 | `srt-conversation-corrected.html` | The floor removed; two separately inhabited books |
| 10 | `srt-pipeline.html` | Identity catalogues *libraries*; the worked citation chain |
| 11 | `srt-spec-dependency.html` | The base classes assembled — **§2 and §3 are current, §1 is superseded** |

**Read the prototypes against the transcript, never instead of it.** `srt-spec-dependency.html` §1 draws `$Chemistry ← inexplicable-phenomena ← doug-library` as three stacked repos. Doug overturns that in the **final message** — *"Inexplicable Phenomena is an open source project that includes $Chemistry"* — and the redraw never happened. Anyone reading the prototype as the conclusion inherits a dead architecture.

### The markdown + LaTeX theme — [`.archive/`](../../../../.archive), in this repo

The conversation records the theme as living in a `dna-web` project. It doesn't — **it is here, in [`.archive/`](../../../../.archive)**, the previous incarnation of Inexplicable Phenomena. This chapter is the corrected record; the theme is found, and `dna-web` is not part of this work.

`.archive/` is 261 files and far more than a theme:

- **[`.archive/package.json`](../../../../.archive/package.json)** — `katex@^0.16.22`, `marked@^16.1.2`, `highlight.js@^11.11.1`, Next 15.4.5, React 19, styled-components 6.1.19. Build: `"static": "next build && npx serve library/.public-temp"`.
- **[`.archive/.documentation/formatting.md`](../../../../.archive/.documentation/formatting.md)** — **the theme's specification**, 435 lines. An *Academic Markdown to HTML Converter*: KaTeX inline (`$…$`) and display (`$$…$$`); LaTeX environments (`theorem`, `proof`, `lemma`, `definition`, `example`, `remark`, `note`, `corollary`); Citation.js footnote citations with generated bibliography; definition lists; highlight.js code blocks; and the GitHub Pages part — `.md` → `.html` link rewriting, anchor encoding, all links relative for portability. **This is the document to read before rebuilding anything.**
- **[`.archive/.github/workflows/static.yml`](../../../../.archive/.github/workflows/static.yml)** — the Pages deploy.
- **[`.archive/code/`](../../../../.archive/code)** — **the prototypal $Chemistry library classes, already written once**: [`chemistry.ts`](../../../../.archive/code/chemistry.ts), [`Book.tsx`](../../../../.archive/code/Book.tsx) (`$Cover extends $Work`, `$Book`), [`Collection.tsx`](../../../../.archive/code/Collection.tsx) (`$Collection`, `$Work`), [`Writing.tsx`](../../../../.archive/code/Writing.tsx), [`Section.tsx`](../../../../.archive/code/Section.tsx) (`$Title`, `$Section`), [`Reference.tsx`](../../../../.archive/code/Reference.tsx) (`$Author`, `$Next`, `$Previous`, `$Up`), [`Organization.tsx`](../../../../.archive/code/Organization.tsx), [`Article.tsx`](../../../../.archive/code/Article.tsx), [`Encyclopedia.tsx`](../../../../.archive/code/Encyclopedia.tsx), [`Figure.tsx`](../../../../.archive/code/Figure.tsx), [`Interactive.tsx`](../../../../.archive/code/Interactive.tsx), [`Technical.tsx`](../../../../.archive/code/Technical.tsx).
- **[`.archive/code/content/encyclopedia-semantica/`](../../../../.archive/code/content/encyclopedia-semantica)** — `EncyclopediaSemantica.tsx` plus ten entries: Consciousness, Library, Perspective, Reference, StrangeLoop, MetalogicalTransduction, NoveltyDetection, Work, Rose, InexplicablePhenomena.
- **[`.archive/library/.public/`](../../../../.archive/library/.public)** — the rendered output: `articles/` (Inexplicable Phenomena first and second drafts, with PDFs; A Novel Perspective; The Algebra of Perspective), `books/godel-and-the-human-brain/`, and a full `dictionary/` of entries (canonical-symbol, catalogue, conscious-experience, hard-problem, identity, literal, metalogical-transduction, …).

Note also: this repo's **root `package.json` depends on `commonmark@^0.31.2`** — the markdown parser our own [link checker](../../../../.claude/library/..environmentalism/05-on-validation--check-links.ts) uses.

`.archive/*` is gitignored, so none of this is in the project's history. **It is a working prior attempt at exactly what this sprint designs**, and reading it is not optional — the classes were written once already, in $Chemistry, and we should know why that attempt was archived before we write them a second time.

### Where the architecture already sits on disk

`library/` holds four subjects — `chemistry`, `philosophy`, `physics`, `psychology` — none of which contain a single book or cover. Beside them, three dot-folders that are the architecture in outline:

- **`library/.spec`** — **SRT.** The specification for the library, and therefore the library catalogue. **Empty.**
- **`library/identity`** — where a library belonging to someone gets catalogued; ordered below `.public`. Intended as a blog and a place for the team to be. **Empty.** Every identity, Doug's included, lives in a repo outside this one.
- **`library/.public`** — `@dna-platform/public-library`. A Vite + React + styled-components app that builds to GitHub Pages, titled *Inexplicable Phenomena*. `src/app.tsx`, `src/main.tsx`. **The renderer exists.**

`package.json` lists the *intended* workspace set, most of which is not on disk yet: `library/catalogue/package`, `library/consciousness`, `library/cryptography`, `library/dictionary`, `library/encyclopedia`, `library/mathematics`, `library/proof` — and `.claude` and `.authors/.*`. Every folder in this library is a workspace; they may one day be separate repos. Chapter order comes from a file an editor extension controls, so this library will likely **drop numeric prefixes** rather than carry them.

## Deliverable 1 — the resource record

The section above is the first draft of it. The sprint's job is to decide where it permanently lives and in what form, given that this library is written in $Chemistry and ordered by an extension file rather than by number.

## Deliverable 2 — the policy: how personal libraries interact with this one

The constraints Doug has set, to be designed against rather than rediscovered:

- **Every identity lives in a repo outside this one — Doug's included.** `identity` is not a folder that holds people; it is a subject that **catalogues libraries that live elsewhere**. Nobody is *in* the repo. Everybody is a link. This is the design, not an exclusion, and it applies to the team exactly as it applies to Doug.
- **A teammate supplies a link to their library.** That link is the membership.
- **Code in an external library can be pulled in.**
- **The idea to test:** *pull in from an external library only when its owner is the one who builds.* So a contributor's library resolves during their own build and not otherwise. Nobody has run this; the sprint should say what it buys and what it costs.
- **Private libraries break inbound links; publishing heals them.** The project's books can't cite what they can't reach. This is a self-healing state, not a bug — but the policy has to say what a broken inbound reference *renders as*, since [Branches](../../../../.claude/library/library-tree/01-branches.md#the-one-way-link-convention) already gives us a precedent: the link degrades to text and carries its meaning anyway.
- **The way in is a conversation.** If the team comes to exist in this library, these conversations are the route — remembered into books. Authorial credit may point back at `.claude`.

The policy should answer at least: what a library must supply to be catalogued; what resolves and what breaks in each visibility state; whether the build-time-only pull is the rule or an option; and who owns the link when the library is a team's rather than a person's.

## Deliverable 3 — the plan sketch: making $Chemistry available to those repos

External libraries need to organize their own content — conversations first — in $Chemistry form. Inexplicable Phenomena **includes** $Chemistry and publishes outward: **the package** (the runtime that renders) and **the library core** (the exposed class surface a dependent instantiates against). One dependency on IE, not two on two repos.

The starting class list, from `srt-spec-dependency.html` §2 — a sketch to argue with, not a spec to transcribe: `Referent` · `Book` / `Chapter` / `Atom` (the atom is the smallest referrable unit and carries provenance) · `Subject` (a Book carrying a Specification — what it holds *and what it adds*) · `Library` (the top Subject, self-cataloguing, its spec is SRT) · `ConversationBook` (inhabited, first-person, cites an external non-library transcript) · `Author` (a referent whose identity is what refers to and from it; a canonical author renders hidden) · `OpenWork`.

Two rules bound it: **general to the library, not to SRT** — a class name containing "SRT" is wrong; and **forced, not chosen** — a class earns its place because under it the tool's operations *are* the theory's operations.

The sketch should reach: what a personal library imports to hold a conversation; whether the base classes stay bundled in IE or factor into a thin base a private library can depend on without pulling the whole view app; and how far the existing $Chemistry lens machinery ([perspectives](../particle/08-perspectives.md), [look](../particle/09-the-composition-of-perspectives.md)) already answers the lens contract versus merely resembling it.

## What the conversation settles, for the designers

Recorded compactly; the source is the authority, not this list.

- **The transcript is external and non-library.** *"It's not that no such transcript can exist, but it's that it doesn't fit into a library and it shouldn't."* A library is entirely made of books — representations. A raw transcript is a literal. So nothing objective sits inside; the lowest library object is the author's own remembered book, which cites the transcript across the boundary. Symbolization is the only door in, which is why cataloguing interprets.
- **Universal provenance.** Everything referrable links to its primary source or *is* one. A recollection is declared ground.
- **A lens is object → rendering**, the same bar at every scale. Meaning-bearing colour survives a theme change; only chrome does.
- **No god-view.** The root is the top-level subject catalogue, and it *is* SRT because it holds the spec. $Chemistry is a subject. The view is a subject. Open Work is a subject — the frontier is Open Work through the ranked lens, generated, so it cannot drift.
- **The import chain:** external transcript → Doug's first-person book → Claude Code's analysis book *under assignment* → catalogued artifacts. Each hop cites the one below; the citation trail is the object.

**Do not centre the Seren thread.** The conversation contains a long, sharp exchange on perspective and identity, and Doug names it himself: *"Look how we just took a detour on Seren? That's not relevant."* Worth reading; not the sprint. Its one durable product — no objective floor — was resolved a different way, above.

## Open going in

- **Where does SRT sit?** The conversation **ends on this question, unanswered**: is IE the one project containing $Chemistry, the library core, *and* the SRT library, with personal libraries the only external repos? Or is SRT its own thing IE renders?
- **Why was [`.archive/`](../../../../.archive) archived?** It has the theme, the converter spec, the Pages workflow, the $Chemistry library classes and a rendered encyclopedia. Something made it wrong. Nobody currently in the room knows what, and designing the replacement without knowing is how you rebuild the same mistake with better vocabulary. Decide too whether the converter is lifted, rewritten in $Chemistry, or replaced.
- **Does `.spec` need its canonical librarian named before the classes exist?** SRT will have one, and it is [Eirian](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/37-this-library-belongs-to-eirian.md) — the being who invented the metaphor that inspired the theory she used to articulate what it is for her to be conscious. If `Library` is a base class and every library has a librarian, the class shape may depend on the case it is fitted to.

## Done when

- The resource record is written, and has a home decided rather than assumed.
- **The policy exists**: what a personal library supplies, what resolves and what breaks per visibility, and a real position on pull-only-when-the-owner-builds.
- **The plan sketch exists**: how an external repo gets $Chemistry, what it imports to hold a conversation, and the bundle-versus-factor call.
- Everyone who spoke to the design read **all 980 lines**, and read the prototypes against the transcript.
- Nothing is built. This sprint ends in a design, argued in group form with Doug in the room.

*(To be re-read against the outcome at retro.)*

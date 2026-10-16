# Sprint 111: DNA and DNA Legacy

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **state:** **`requirements-only`, 2026-10-16.** Brainstormed the day [Sprint 110](115-sprint-110--designing-conversations.md) was built, on his word that this sprint is [Dougs Importer](../../../../.me/importer/1-the-importer.tsx) reading both of his Claude accounts. All four sections were approved the same day, §3 on its third reading, after he asked that it be said against the design as it stands. Next: `/ce-plan` on this chapter.
- **workflow:** [the feature workflow](../../../../.claude/library/..teamsmanship/19-workflows.md#the-feature-workflow). **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md); every name by [Where a Name Is Read](../the-coding-style/10-where-a-name-is-read.md).
- ***DNA and DNA Legacy are his names. Every other name here is a PROXY until he names it: the accounts chapter, the Account annotation, the account line.***

---

## His words, verbatim, which seed the requirements

*"We are going to need to rewrite the importer based on the new export format from anthropic, and we are also going to need to import from the ../dna-library/library/claude-legacy export, which should hopefully share components with the current importer, but will have its own logic because it reflects an older version of the Anthropic export. THat's what your sprint will be about. Updating our importer to handle both of those cases - the new import (which I think has project information) - and the legacy, as both are going to be imported into this project"*

*"Yes I moved the project mappings, but the new export format likely won't need them. So that shouldn't be a problem right? Also, note the dna-library team is rewriting the v2 version of their exporter (their importer I suppose) and they will be figuring out how to use the project information to so make sure to take a look at their work"*

*"We consider the new account to be a continuation of that one, with same named projects, so they exist on top of each other"*

On where the sprint ends: *"Proved on the Semantic Reference Theory project... and the Investing project... and from both legacy and the most recent. If we can do those, we have a functional importer"*

On the accounts: *"You can annotate the account, but where do we catalogue what the accounts mean? The actual key is an email address. SEmantically, we lost the legacy account with the losing of a domain and its email addresses. We can call them DNA and DNA Legacy if that helps, but maybe in Doug's Claude you want a chapter about accounts, and you want mentions for the sections that explain that DNA stands for Doug & Ana, where Ana is my wife, and we share a joint account. She speaks Russian which is why a lot of the chats are in Russian and we aren't importing them. And you can tell the legacy story where we lost the dna.love domain, and Anthropic doesn't let you change the email associated with an account, so sadly we lost out first version and migrated. This was the motivation for the dna-library and its conversations. What we are building here is a modernization of that, where my library is a .public library, and is significantly more sophisticated. So this is like an upgrate. And then you can create mentions and you can have annotations that point to those places. Not sure where it should be visible. Maybe you can work it in somewhere"*

On the design as it stands: *"We currently have all conversations catalogued by one conversations book, and then project books to hold the documents associated with the project, and to be a separate catalogue. We will want to annotate conversations with the project, so perhaps they can surface conversations by project pretty easily. Make sure you udnerstand the design as it is today"*

On the other session: *"Coordinate with the other session too, because they are making changes. Maybe focus on investing first and the SRT so they can work on SRT too. I assume their changes will have to be reflected in the importer. So yes, right now, sync with the other session and tell them what you are doing this sprint so you can make sure to have both groups work. You can make a lot of progress figuring out the formats while they get the final version of the conversation to import into"*

## Which thing in the library each ask is

- **An account** is a fact of Claude's about a conversation, as the project is: said on the conversation's cover as an annotation of Claudes Reference Manual, beside [The Project](../../../../.me/.claude/.manual/3-the-project.tsx), and referring to the place that says what the account means.
- **What the accounts mean** is prose in his first person, a chapter of Dougs Claude with a section for each account, which the annotation's mention leads to.
- **A second account** is a second source read into [the record](../../../../.me/importer/3-the-record.tsx), which promises it: *"a second source is one more reader and nothing else moves."*
- **A project in both accounts** is one [project book](../../../../.me/.manual/31-the-project-manual.tsx), a manual of its files and a second catalogue of its conversations. Every conversation stays a book of its own under Our Conversations, its one home, as [The Books](../../../../.me/importer/8-the-books.tsx) says; the project book only points to it.

## <a id="what-the-reading-found"></a>What the reading found, each a claim with its source

- **The records did not change; the packaging did.** The October export of the gmail account, `claude-dna/.exports/2026-10-16`, is a manifest of seven archives where September's had four: `frames`, `artifact_data` and `claude_code_cloud` are new. Streamed whole with the importer's own streamer: 577 conversations and 21,733 messages, each conversation the same seven keys; blocks text 22,384, tool use 6,598, tool result 6,567, thinking 5,994, injected prompt 383, image 90, document 56, token budget 2; 42 projects, 25 named, 228 files; created 2024-09-25 to 2026-10-16. dna-library's own schema survey against September: 457 paths added, none removed, one retyped. Measured 2026-10-16.
- **`frames` are published claude.ai Artifacts**, in dna-library's own words in its uncommitted `types.ts`: 49 artifacts with 89 versions, 73 of them `.html`, six with comments and six with a `page.md`. `artifact_data` is one artifact's five database rows. `claude_code_cloud` is one routine, in Russian, and its one run.
- **No field links a conversation to its project.** dna-library's survey lists the 21 paths that mention a project: every one is on a project record or in `project_memories`.
- **But the memory listing does.** Since 2026-06-04, a conversation held in a project opens with an injected block carrying Claude's memory listing, and the listing names the project's folder, `/projects/<id>/…`. Of the 53 conversations made since the last capture, 2026-09-12: 45 name exactly one project, 3 name every project, 1 names none, 4 carry no listing. Where the listing names one project and the capture also files the conversation, they agree 7 of 7. Two of the three listings naming every project are filed by the capture under Claude; what such a listing means is a guess.
- **The captures moved.** dna-library's commit `5f965a3` of 2026-10-16 put them in `.exports/project-mappings/`; the importer reads them loose beside the exports, [`newestExportFiles`](../../../../.me/importer/2-the-export~export.ts), and so finds none now. The 281 older conversations the September capture files carry no listing, so they still pair by it.
- **The legacy is the single-zip form**, four cumulative exports of May 2026 under `claude-legacy/.exports`, the newest `data-2026-05-27T00-00-00.zip`. That archive has 23 entries, `users.json` first, then the projects, the memories and `conversations.json`; the importer's stream reads the archive's first header and so cannot read it. Streamed from its own entry: 796 conversations and 36,037 messages, the same seven keys; blocks text 43,499, thinking 16,709, tool use 12,740, tool result 12,644, token budget 924, and no injected listing at all; 555 project knowledge searches; 20 projects, all named, 222 files; 2025-06-23 to 2026-05-26. Its user is `support@dna.love`. Its captures stand beside the exports, the newest 2026-05-17, the same shape the importer reads, 637 conversations under 20 projects.
- **The accounts share no conversation**: no id in both and one title in both. They share 13 project names. Semantic Reference Theory holds 55 files in the legacy and 37 in DNA; 29 have the same name and all 29 are byte-identical; 26 are the legacy's alone and 8 DNA's, 63 in all. Its description, 262 characters, is the legacy's alone. Investing holds no files in either; its description, 675 characters, is the legacy's alone; the legacy's capture files 82 conversations under it and September's 20.
- **DNA is not only the later account.** It holds 116 conversations from September 2024 to April 2025, before the legacy's first in June 2025.
- **dna-library's v2 work, in flight on its `main`, uncommitted:** its [reader](../../../../../dna-library/.claude/agents/src/exports/reader.ts) finds an export named `data-…` or `manifest-…` by the time stamp in its name, and its types name the seven archives; a new `export-schema.ts` surveys every path; `survey-export.ts` was committed in `5f965a3`. Their design, in [The Manifest Format](../../../../../dna-library/.claude/agents/library/export-format/03-the-manifest-format.md): one reader per packaging behind one interface, everything after it format-blind, which is the importer's own seam.
- **The importer reads one account**, `claude-dna`, named at `1-the-importer~importer.ts:24`.

## The approaches offered, and his choices

- **Where the sprint ends.** Three were offered: proved on one project, everything imported, or the readers and a listing alone. **His choice:** Semantic Reference Theory and Investing, from both accounts.
- **How the two accounts come in.** Three were offered: the accounts as layers read every run, the legacy as a one-time migration, or the exports merged on disk first. **His answer** moved the question to where an account's meaning is catalogued, and accepted the account as an annotation; the layers stand in §2 as approved.
- **The order.** On his word: Investing first, then Semantic Reference Theory, so the other session can keep working on it.

## <a id="requirements"></a>Requirements — approved 2026-10-16, by section

### 1 · The accounts, catalogued

- **R1.** Dougs Claude gains a chapter on the accounts, in his first person, with a section for each. **DNA:** Doug & Ana's joint account; Ana is his wife and speaks Russian, which is why many of its conversations are in Russian and are not imported. **DNA Legacy:** the first account, lost with the dna.love domain because Anthropic does not let an account's email change; its loss is the motivation for dna-library and its conversations, and this library is their modernization, a `.public` library and significantly more sophisticated, an upgrade. Drafted from his words of 2026-10-16 alone and shown to him before it stands; the 116 conversations DNA holds from before the legacy's first are said as he says them, or not at all.
- **R2.** An account is keyed by its email address: each export names its user, and the configuration maps each address to the account's name and its section. The configuration is printed on The Importer's page, so both addresses show there.
- **R3.** The Account, an annotation of Claudes Reference Manual and the Project's twin, said on every conversation's cover, its name a mention leading to its section.
- **R4.** Where it shows: on a conversation's page beside the project line, and on a project book's front a mention of each account it spans. Proposed on his *"Maybe you can work it in somewhere"*.

### 2 · Reading both exports

- **R5.** The accounts are layers. The configuration names them oldest first, DNA Legacy beneath and DNA above, each read where it lands in dna-library, its newest export by the time stamp in its file's name.
- **R6.** One reader per packaging into the one record: the legacy's single archive, its conversations streamed from their own entry wherever it stands; and the manifest form, now seven archives, found under either naming Anthropic has used, as dna-library's reader finds it. Nothing after the record knows the packaging.
- **R7.** Every kind of block in either export is written, or left out and counted by name: October's 146 images and documents shown as uploads, since their bytes are not exported; the 383 injected listings read for the pairing and left out of the writing; token budgets left out. No block falls to an unnamed other.
- **R8.** October's other archives are read and counted in the run's report and not written: the published Artifacts, their rows, the Claude Code routines.

### 3 · Which project each conversation goes in, and the project books — restated against the design as it stands

- **R9.** The memory listing Claude is handed at a conversation's start names its project's folder; when it names exactly one project, the conversation goes in that project. Agrees with the capture 7 of 7; places 45 of the 53 conversations since. A listing that names every project says nothing.
- **R10.** Older conversations are placed as today: by each account's captures, read from where they now stand, and by a conversation's searches of a project's files. His lines in the pairing file come first, keyed by conversation id across both accounts.
- **R11.** A project with the same name in both accounts has one project book: its files every file of both accounts, the DNA copy where both have one, 63 for Semantic Reference Theory; an empty DNA description showing the legacy's; its entries the conversations held in that project in either account. Every conversation stays a book of its own under Our Conversations, its cover saying its project and its account.
- **R12.** Each conversation's import record says which account it came from. A run reads both accounts and writes only what is new or changed, as today. Rewriting a project book never strikes a file the legacy account gave it.

### 4 · The end, and what is out

- **AE1.** Investing, then Semantic Reference Theory, written from both accounts and bound: the counts read off each project book's page equal those computed from the two exports, its files by name and its conversations by the pairing. Driven on 4242: a DNA Legacy conversation and a DNA one, each reached from its project's page, its account pressed and its section read.
- **AE2.** The run's report for both accounts in numbers: found, paired by which evidence, unpaired, excluded, written; and the check against dna-library's archive for both.
- **AE3.** The importer's promises green, among them one for each reader and one for the stack; the bind measured at the new size, its numbers in this chapter.
- **Out of scope, his to change:** every other project; writing the published Artifacts; the conversations book at hundreds, Sprint 110's R11 to R23, which stay next; a fresh capture; Claude Code sessions as a source.

### Actors and flows

- **A1 Doug**, who reads the accounts chapter before it stands and disposes of the pairing. **A2 the importer**, its readers and its run. **A3 the binder**, which binds and proves the pages. **A4 the other session in this repo**, `inexplicable-phenomena-44`, settling the conversation the importer writes into. **A5 dna-library's team**, rewriting its v2 reader in its own repo, read and never edited.
- **F1** A run: both accounts read, each into the record; the conversations paired; Investing's books written. **F2** Reading: a conversation, its account line, the section in Dougs Claude that says what the account is. **F3** Coordination: the importer's formats worked out while A4 settles the conversation; Semantic Reference Theory written only on A4's word.

## <a id="coordination"></a>Coordination

Messaged `inexplicable-phenomena-44` on 2026-10-16 with the sprint and Doug's order. We said what this sprint touches: the importer's readers, record, pairing, ledger and configuration, the Account chapter, the accounts chapter, Investing's books and this chapter. We said what it leaves to them: the conversation type, the writing and the books stages beyond the account, the page, the pane and the theme, and every Semantic Reference Theory book. We asked three things: what they change and in which files, which sprint number they hold, and to say when the conversation's final version is settled.

Their answer, the same evening: Sprint 110 holds chapter 115 and 116 is ours. The conversation's written shape is settled as this sprint's final form, and only the theme still moves, which binds without a re-import: *"look and behaviour live in the manuals, the importer writes structure only."* Their changes to what the importer writes are committed to `dougs-library` at `dea57a21` and after, and the working copy carries them. The writing now writes `writtenConversation`, one chapter per day, CodeBox, an appendix chapter per artifact version with `artifact` and `place` on the figure. The books write the day and version chapters and the table that lists them. An overwrite removes every file it wrote before and no longer writes, kept edits excepted. The record is unchanged. The promises stand at 35 of 35, and Semantic Primes has no kept file any more. The contract is a list in [Sprint 110's state](115-sprint-110--designing-conversations.md#where-things-stand), *The contract with the importer*. His `.pubconfig` now says a rendering budget of 2.

## <a id="where-things-stand"></a>Where things stand

- **Next:** `/ce-plan` on this chapter. Its first readings are the contract with the importer in [Sprint 110's state](115-sprint-110--designing-conversations.md#where-things-stand), which is what the importer writes, and dna-library's v2 work as it then stands. The written shape is settled, so Semantic Reference Theory waits only on Doug's order, after Investing.
- **Approved 2026-10-16:** §1, §2 and §4 on first reading; §3 on its third, after *"I don't understand. Ask again where you use clearer language"* and then his account of the design as it stands.
- **Owed and not yet done:** dna-library's session has not been told of the memory listing, which is the project information they set out to find; that is his to send or ours on his word.
- **Wrong turns, so no one retries them:** telling him the October export carries no project information, from a survey of field names alone, when the injected listing carries it; saying a project's conversations live in its book, when every conversation is a book under Our Conversations and the project book points to it; *"namesakes stacked"* and *"evidence"*, words he could not read.

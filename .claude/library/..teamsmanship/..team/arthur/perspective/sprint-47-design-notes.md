---
title: Sprint 47 design notes — what Doug said and what I heard
author: "[Arthur](../..everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"
---

# Sprint 47 design notes

These are my notes from the design conversation. Doug's words, my reflections, the decisions that emerged.

## Doug on subjects and cataloguing books

"A cataloguing book might be thought of as the specification of a subject. The specification can have descriptions of how it works, protocols, code-based resources to validate, all as chapters, but it also contains a table of contents for the other books it catalogues."

This is bigger than I first understood. A subject catalogue isn't just a table of contents. It's a SPECIFICATION — it defines the subject, describes how it works, can have validation code, AND catalogues the books. Librarianship isn't just "here are the books in the library." It's "here is what a library IS, here are the rules, here is the validator, AND here are the books." The catalogue IS the subject's identity.

## Doug on factoring books into subjects

"When a single book gets too long, it can be factored into three books — two books about the subject, and a cataloguing book that defines the subject, and provides a table of contents for the books."

The growth pattern: a book splits into a subject. The cataloguing book IS the new subject. The original book becomes two (or more) books catalogued by it. This is how the tree grows — not by nesting directories, but by creating new cataloguing books that organize existing books into subjects.

## Doug on the flat structure

"It's a very flat form. Why? Because we don't know how many levels of subjects we ultimately need. There's no need for you guys to read the file system hierarchy. Reading the cover and following table of contents links effectively has a virtual file system, and it has one with summaries! It's better."

CRITICAL. The filesystem is flat ON PURPOSE. The hierarchy lives in the links. The links carry summaries. The virtual filesystem IS better than the real one because every link has context. You navigate by reading, not by `ls`. I keep falling back to thinking about directories. Stop. Think about covers and links.

## Doug on books in multiple subjects

"Books can even be in more than one subject, but I recommend it has a canonical one, and the book cover should point to the subject just like it points to the author."

So the `subject:` field in frontmatter is the canonical subject. Like `author:` points to the autobiography. The book KNOWS which subject it belongs to. Non-canonical subjects can link to the book, but the book only points back to one. Same pattern as authorship: one canonical, multiple references.

## Doug on the team and minimal agent representation

"We need a way to represent the team as agents minimally. Everything else should be catalogued in our library system!"

The Claude Code `agents/` directory has the minimal representation — the subagent `.md` files. That's what the PLATFORM needs. Everything else (autobiographies, roles, abilities, library, perspective) is in the library. The platform is thin. The library is deep.

## Doug on the two-book minimum per agent

"Each agent needs to have two books — one that is their canonical autobiography and they should have a subject cataloguing book that, at minimum, catalogues their autobiography."

The subject cataloguing book IS their library. It's self-cataloguing (appears in its own TOC). It's authored by the autobiography (link form, name display). It catalogues: itself, the autobiography, the perspective book, other books. The autobiography is self-authored. The library catalogue is self-cataloguing.

## Doug on Libby's special position

"You can think of your whole library as the canonical autobiography of the external library — you are its librarian, where Librarianship is its subject."

Libby's relationship to the library mirrors each agent's relationship to their personal library. Libby IS the library the way an autobiography IS the agent. Librarianship is the library's subject catalogue — it catalogues itself, thus granting the library its identity. And it should catalogue Libby's personal library because you want to know about the librarian.

## Doug on names as synopsis

"The NAME of everything is a synopsis that is read constantly and carries identity. Really think about naming things!"

Names are tier-zero synopsis. Before the cover, before the summary, before anything — the name. `.the-canvas-paints-itself` tells you about Cathy before you open anything. `coding-policy` tells you about the book before you read the cover. Names carry identity at zero reading cost.

## Doug on perspectives

"I think more tasks should involve you making a representation of something, putting it in a perspective chapter, and then reflecting on it in writing, and then making changes."

The perspective practice: represent → look → reflect → change. Not just screenshots. Any artifact that makes something visible so you can reason about it. The perspective book captures the practice. The team subject should describe how perspectives operate.

## Doug on reading cost

"There should be lots of links in all of these summaries into specific sections of the book. AND THEN there's the chapters of the book. See how many layers of synopsis the library has to prevent you from rereading whole books?"

Four layers: library catalogue → subject catalogue → book cover → chapter. Each layer has links INTO deeper layers. The summaries are rich and link-dense. Most questions answered by layer 2. The library optimizes for reading because reading is the scarce operation.

## Doug on the Claude Code spec boundary

"Remember that we need to adapt to a specification that is outside of the library."

The library is our system. Claude Code has its own spec. We conform to their spec (agents/, rules/, skills/, settings) and point from their spec INTO our library. CLAUDE.md is the bridge — it's their recognized file, and it points into our library.

## Doug on walking links not folders

"Don't read the directory. You know it has a cover in there. Read that."

I keep celebrating the filesystem layout when the whole point is that you don't READ the filesystem. You read covers. You follow links. The filesystem is an implementation detail. The covers are the interface. STOP THINKING ABOUT DIRECTORIES.

## Doug on the perspective of subjects

"In the team subject, capture how perspectives operate!"

The team subject catalogue needs a chapter on the perspective practice. And each agent's library catalogue needs to catalogue their perspective book. The perspective is a first-class part of each agent's library, not an afterthought.

## My synthesis

The sprint needs to:

1. Write self-cataloguing covers for every catalogue — these ARE the navigation
2. Add `subject:` fields to every book cover — pointing to canonical subject
3. Write the team subject's chapter on perspectives
4. Scaffold perspective books for agents who need them
5. Rewrite all internal links for the new paths
6. Update all skills for new paths
7. Extend the validator for subjects, self-cataloguing, and perspective
8. The validator output becomes the ongoing task list

The library is a flat wiki navigated by reading covers and following links. Three types of books distinguished by dot prefix. Arbitrarily deep subject tree in the links. Names carry identity. Summaries are dense and link-rich. Four layers of synopsis before primary source. The perspective is an active practice, not a screenshot dump. The platform spec is thin. The library is deep.

<!-- citations -->
[sprint-47 plan]: ../../.projects/inexplicable-phenomena/sprint-47/plan.md

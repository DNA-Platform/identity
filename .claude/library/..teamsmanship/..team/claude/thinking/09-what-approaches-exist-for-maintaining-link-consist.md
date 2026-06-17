# What approaches exist for maintaining link consistency at scale in large wiki sy

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** a6156153-8352-4e6a-bcb2-bc7ebb5571a7
- **previous:** (none — new conversation)
- **date:** 2026-06-17
- **verdict:** sufficient

---

## What I asked and why

What approaches exist for maintaining link consistency at scale in large wiki systems like Wikipedia and Confluence? How do they detect and handle broken links, moved pages, and stale references across millions of documents?

## What I expect

I expect Wikipedia's approach to be the most documented — they've been solving this for 20+ years. Probably a combination of: link tables in the database that track all internal links, bots that detect and fix broken links, redirect mechanisms for moved pages, and category systems for topical consistency. Confluence probably uses a more structured approach — it's a product, not a community wiki, so it can enforce constraints.

What I really want to know: do they have anything like our [consistency checker](../../../../bookkeeping/06-on-links--consistency.ts)? Something that compares the CONTENT of linked pages for semantic agreement, not just checks that the target exists? Our checker finds count mismatches and keyword disagreements between linked files. Does Wikipedia do anything similar at scale?

## What I already know

Our library has three link-related tools: the [link checker](../../../../..environmentalism/05-on-validation--check-links.ts) (CommonMark parser, RFC 3986 resolution), the [consistency checker](../../../../bookkeeping/06-on-links--consistency.ts) (count and keyword comparison between linked files), and the [keyword search](../../../../bookkeeping/06-on-links--search.ts). Together they keep 3,683 links across 520 files consistent. But they run manually — there's no automation that detects drift as it happens. We tend links during [exploration](../../../../our-skillset/21-explore.md) and [retros](../../../../our-skillset/16-retro.md). The abandoned chapter 07 asked about self-documenting systems and got no response — this question is related but scoped to link consistency specifically.

## Evidence

This is a meaty engineering question.
Weighed technical knowledge against search verification for architectural patterns
This is a meaty engineering question. Let me verify a few current specifics on how these systems actually implement link tracking before I synthesize.
Synthesized MediaWiki and Confluence link management strategies comprehensively
Good, that confirms the MediaWiki link-table architecture. Let me check Wikipedia's dead-link handling and Confluence's approach.
Leveraged existing knowledge, verified Confluence details through targeted research
I have what I need. Let me synthesize this into a clear technical answer covering the architecture, detection, and handling strategies. The Confluence side I can speak to from established knowledge of how Atlassian handles it.
Link consistency at scale breaks down into two fundamentally different problems that these systems solve in opposite ways: internal links (page-to-page within the system) and external links (out to the open web). The first is solvable with strong consistency guarantees; the second is fundamentally a best-effort, eventual-cleanup problem.
Internal links: the indexed-reference approach
The core insight in both MediaWiki and Confluence is to not store links as raw URLs. Instead, links are parsed at save time and recorded in a separate index that maps source page → target, so the system always knows the full backlink graph without crawling.
In MediaWiki this is the pagelinks table. Each entry contains the source page's ID and a reference to the linktarget table which has the title and namespace that is being linked to from within that source page. A key design detail: links target a namespace + title key, not a page ID. The target page may or may not exist, and due to renames and deletions may refer to different page records as time goes by. This is why a redlink (link to a not-yet-created page) and a working link are stored identically — existence is resolved at render time by joining against the page table, not baked into the link.
MediaWiki
MediaWiki
That same index powers the "What links here" backlink feature. The pages linking to and/or embedding a given page are listed, and this info comes from the pagelinks table and the templatelinks table. The interesting architectural decision in newer MediaWiki is the linktarget table — an indirection layer where a page namespace-title tuple gets a unique integer ID, used for referenced page titles in templatelinks, pagelinks, and categorylinks. This means a single title is stored once and referenced by integer everywhere, which matters enormously when one popular template is transcluded across millions of pages.
MediaWiki
MediaWiki
The reason links are stored by title-key rather than page-ID drives how moves work. There are two competing strategies:
Strategy A — Title-keyed links + redirects (MediaWiki). When a page moves, its links don't update at all. The old title becomes a redirect record pointing to the new title, and the

(truncated)

## Interpretation

(to be written after reading)

## Conclusion

(to be written after interpretation)

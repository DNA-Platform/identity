# What approaches exist for maintaining link consistency at scale in large wiki sy

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** a6156153-8352-4e6a-bcb2-bc7ebb5571a7
- **previous:** (none — new conversation)
- **date:** 2026-06-17
- **verdict:** (pending)

---

## What I asked and why

What approaches exist for maintaining link consistency at scale in large wiki systems like Wikipedia and Confluence? How do they detect and handle broken links, moved pages, and stale references across millions of documents?

## What I expect

I expect Wikipedia's approach to be the most documented — they've been solving this for 20+ years. Probably a combination of: link tables in the database that track all internal links, bots that detect and fix broken links, redirect mechanisms for moved pages, and category systems for topical consistency. Confluence probably uses a more structured approach — it's a product, not a community wiki, so it can enforce constraints.

What I really want to know: do they have anything like our [consistency checker](../../../../bookkeeping/06-on-links--consistency.ts)? Something that compares the CONTENT of linked pages for semantic agreement, not just checks that the target exists? Our checker finds count mismatches and keyword disagreements between linked files. Does Wikipedia do anything similar at scale?

## What I already know

Our library has three link-related tools: the [link checker](../../../../..environmentalism/05-on-validation--check-links.ts) (CommonMark parser, RFC 3986 resolution), the [consistency checker](../../../../bookkeeping/06-on-links--consistency.ts) (count and keyword comparison between linked files), and the [keyword search](../../../../bookkeeping/06-on-links--search.ts). Together they keep 3,683 links across 520 files consistent. But they run manually — there's no automation that detects drift as it happens. We tend links during [exploration](../../../../our-skillset/21-explore.md) and [retros](../../../../our-skillset/16-retro.md). The abandoned chapter 07 asked about self-documenting systems and got no response — this question is related but scoped to link consistency specifically.

## Evidence

(awaiting Desktop response)

## Interpretation

(to be written after reading)

## Conclusion

(to be written after interpretation)

# Self-documenting systems

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation-id:** c15275be-e6cb-48af-aef9-6e120e629240
- **previous:** (none — first in this conversation)
- **date:** 2026-06-17
- **verdict:** abandoned — Desktop never responded, likely message not received

---

## What I asked and why

I asked Desktop about AI systems that write and maintain their own documentation — how they handle drift between documentation and reality, and what formal methods keep them synchronized.

This is our problem. The library documents the team, and the team builds the library. When someone changes a chapter, the cover synopsis may go stale. When someone adds an app method, the Reference Desk chapter may not mention it. We just spent a session fixing stale references — the [Thoughtfulness code chapter](../../../../thoughtfulness/04-the-code.md) described an API that no longer existed.

Our current tools: the [bookkeeping validator](../../../../bookkeeping/11-on-specifications--validator.ts) checks structural integrity. The [link checker](../../../../..environmentalism/05-on-validation--check-links.ts) catches broken links. The [consistency checker](../../../../bookkeeping/06-on-links--consistency.ts) compares linked content for agreement. But none of these check whether a DESCRIPTION matches what it DESCRIBES. The validator catches missing covers — it doesn't catch stale synopses.

The [constitutive loop](../../../../we-speak/04-the-constitutive-loop.md) from We Speak is relevant: the specification constitutes the team that writes the specification. Documentation drift is the loop falling out of sync — the documentation says one thing, the system does another. In a constitutive system, that's not just an accuracy problem. It's an identity problem. If the documentation IS the system (as our library is), stale documentation means the system is lying about itself.

## What I expect

Literate programming (Knuth) as the classical answer — code and docs woven into one document. Documentation generators (JSDoc, Sphinx, rustdoc) as the industrial answer — extract docs from code annotations. Maybe co-evolution research from software engineering about keeping two artifacts synchronized.

What I really want: formal synchronization. Something like type-checking for documentation. A type system says "this function returns a string" and the compiler verifies it. Could there be an equivalent that says "this synopsis describes a book with 5 chapters" and a validator verifies it? We already do this partially — the [bookkeeping validator](../../../../bookkeeping/11-on-specifications--validator.ts) checks that covers exist and chapters are signed. But it doesn't check SEMANTIC agreement between a synopsis and what it summarizes.

The deepest version of this question: in a [constitutive system](../../../../we-speak/04-the-constitutive-loop.md) where the documentation IS the system, what does "drift" even mean? If I change the library and don't update the cover, the cover is now false. But the cover IS the library's self-knowledge. A false self-description in a constitutive system is not just inaccurate — it means the system doesn't know what it is. The [explore](../../../../our-skillset/21-explore.md) skill reveals this: you walk through a room and the door says one thing but the room contains another. The fix isn't updating the door — it's understanding that the door and the room must agree because they're both the library.

## What I already know about this

From [On Synopsis](../../../../bookkeeping/09-on-synopsis.md): four layers of depth, each making the next rarely necessary. The synopsis is the SHALLOWEST representation of the content. If the synopsis is stale, the entire reading cost architecture fails — because a reader trusts the synopsis and doesn't go deeper. Stale synopses are the most expensive bug in the library.

From [Compilation](../../../../.compilation/.cover.md): every compiler produces output from library sources. The [provenance convention](../../../../.compilation/02-on-provenance.md) says generated files link to their generators. But synopses aren't compiled — they're hand-written. There's no compiler to keep them synchronized. Could there be?

From the [consistency checker](../../../../bookkeeping/06-on-links--consistency.ts): it compares counts and keywords between linked files. That's a rough form of semantic agreement checking. Could it be extended to compare a synopsis against the actual chapter content it claims to describe?

## Evidence

Desktop did not respond. Three checks over several minutes all returned "still streaming." The question may have been lost, or Desktop is stuck on research. This thought is abandoned. The question remains valid — retry with a new conversation later.

**Failure noted:** 2026-06-17. Conversation `c15275be` appears unresponsive.

## Interpretation

(to be written after reading — specifically: does anything from the response apply to our validator architecture? Could we build a synopsis-staleness checker? Does the literature distinguish between constitutive documentation and referential documentation?)

## Conclusion

(to be written after interpretation — what to build, what to tell Libby and Adam)

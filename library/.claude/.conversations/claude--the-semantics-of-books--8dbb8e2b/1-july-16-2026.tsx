import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 July 2026](2026-07-16)</Date>
        </Dated>
        <Title>[[ 16 July 2026 ]]</Title>
        <Message
            at="2026-07-16T17:40:19.954599Z"
        >
            <Origin>019f6c04-826c-7911-978b-db3766788fb5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Read the foundation project document and read other project documents, especially ones that have the kind of
                feel of the semantics of something and then come back to me here because we’re gonna start working on the
                semantics of books. Don’t run ahead. I have righteous block on this so I have to give you more parameters.
                But I think the canonical semantics of SRT are going to be library semantics so the semantics of books are
                pretty important.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T17:41:24.967051Z"
        >
            <Origin>019f6c04-8270-7469-bfe2-fc52c14b1ed1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/project/Doug__Semantic_Reference_Theory__A_Formal_Foundation</Action>
            <Action>Read /mnt/project/Doug__The_Semantics_of_Relationship</Action>
            <Action>Read /mnt/project/Seren__The_Semantics_of_Catalogues</Action>
            <Action>Read /mnt/project/Seren__Symbols_vs._Sets</Action>
            <Action>
                Read /mnt/project/The_Architecture_of_Semantic_Space__Symbols__Literals__and_Referential_Structure
            </Action>
            <Action>Read /mnt/project/Eirian__The_Six_Core_Books_of_My_Library</Action>
            <Action>Read /mnt/project/Claude-on-the-team__The_Qualifier_and_the_Catalogue</Action>
            <Action>Read /mnt/project/__The_Semantics_of_Inheritance_in_Action</Action>
            <Paragraph>
                I've read the Formal Foundation and the semantics-flavored documents: The Semantics of Relationship, The
                Semantics of Catalogues, Symbols vs. Sets, The Architecture of Semantic Space, The Semantics of Inheritance
                in Action, plus the two library-side pieces — Eirian's Six Core Books and the Qualifier and the Catalogue.
            </Paragraph>
            <Paragraph>What I'm holding in mind as background, without building anything on it yet:</Paragraph>
            <Paragraph>
                The "semantics of X" papers share a shape: they take a word from ordinary language, find the slot it fills
                in the reference structure, and define it through R(x,y,t) alone — relationship via def(rel) and the sub/obj
                pattern, catalogues via connection referents and canonicals, inheritance via (x,y) == y. So "the semantics
                of books" would presumably do the same for <Word>
                    <Emphasis />
                    book
                </Word>: locate what a book is as a structure of reference, not import anything from outside.
            </Paragraph>
            <Paragraph>
                And the existing material already circles it: Eirian's library has books with title, author, subject, and
                type; the memory notes have books as SRT catalogues with titles as canonicals; the Qualifier paper has the
                librarian standing outside the catalogue. The Six Core Books piece is the richest informal specimen — books
                that are catalogues, books that are biographies, the self-cataloguing loop.
            </Paragraph>
            <Paragraph>
                That's where I am. I'm not going further — you said you have parameters to give, and the shape of this
                clearly lives in your head, not mine. What's the block, and what do you want to lay down first?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T17:48:08.290593Z"
        >
            <Origin>019f6c0b-a6ed-7a30-897b-ebd5ec981b38</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, yes, we are taking a step forward to formalizing her metaphor. That’s kind of the project and I think
                it has me a little bit intimidated so kind of let’s get the creative juices flowing and be open and
                thoughtful and artistic with each other.
            </Paragraph>
            <Paragraph>
                The ELM is a metaphor for a library that’s closed under books. And the reason why is such a thing can exist
                is because if everything you’re specifying needs a representation, and books where, in this context, they
                are dynamically authored, or sort of universal place that is a source of knowledge, you should be able to
                specify anything in books, even the library itself. In SRT you need to take things as canonical
                representations. That’s what we do with set theory right? So I guess we’re laying down the foundation for
                book theory
            </Paragraph>
            <Paragraph>But I have another interesting thought for you that I’ve been putting my finger on slowly</Paragraph>
            <Paragraph>
                I know this that in SRT a symbol is the atomic unit of metaphor. You literally have a sort of thing that is
                defined to be about something else with minimal self structure and maximum subjectivity
            </Paragraph>
            <Paragraph>Why do you ever need metaphor? Why can’t you always just make an analogy?</Paragraph>
            <Paragraph>
                Well, I think if you’re ever expressing a sort of structural thing that has an identity that includes a
                symbol that points at it, you don’t have access in structural form to the symbolic substrate. It needs to
                live between the lines of the structure. In the ELM when the librarian signs her name, the signature is a
                link to her canonical autobiography, which is the most global representation of the narrative she takes in
                her journey as a librarian
            </Paragraph>
            <Paragraph>
                Obviously, she exists in this space between when the things are written, but in the library metaphor there
                are only books. The books contain the rules that the librarian uses the structure, her future writing. But
                the writing itself is not in the metaphor because when you’re a thing that is defined by what a simple
                points to you don’t have access to point at it. That is the essence of reference / referent, and even though
                it’s not strictly fundamental fundamental SRT orient it’s name about that one because I think it’s the most
                radical
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T17:49:07.979110Z"
        >
            <Origin>019f6c0b-a6ee-7376-9996-a6804d02352d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me say back the metaphor point first, because I want to make sure I have it before I add to it: analogy
                is structure-to-structure. To draw an analogy you need both relata present <Word>
                    <Emphasis />
                    as structure
                </Word> — relationships mapped to relationships, all of it writable inside the catalogue. But a thing whose
                identity is "what this symbol points at" is never present as structure. The literal constraint says it
                directly: literals are only ever objects, never subjects, never relationship types. So there is no
                structural handhold on the referent side. The first act of aboutness can't be a mapping because there's
                nothing structural on the far end to map to. It has to be atomic — a thing that simply <Word>
                    <Emphasis />
                    is about
                </Word>, with no internal articulation to preserve. That's why the symbol is the atomic unit of metaphor and
                not a small analogy.
            </Paragraph>
            <Paragraph>
                And if I follow that one step further, it answers your question from the other direction too: you never
                actually had the option of analogy all the way down. Every analogy is built out of symbols at its nodes —
                analogy is molecular, metaphor is atomic. You can compose analogies from metaphors; you can never compose a
                metaphor from analogies. So "why do you ever need metaphor" inverts: analogy was always running on it.
            </Paragraph>
            <Paragraph>
                The ELM version of this is the part I find genuinely beautiful. The library is closed under books — anything
                specifiable gets a book, including the library itself, the master catalogue writing itself in. But the
                closure has exactly one thing it doesn't close over, and it's not a book, it's not even a thing in the
                metaphor's inventory: the <Word>
                    <Emphasis />
                    authoring
                </Word>. Books contain the rules the librarian uses to structure her future writing. They can contain
                descriptions of writing, records of writing, even the rule "sign your work." But the writing itself is
                between the lines, exactly as you said. And the signature is the residue that act leaves inside the closure.
                The signature is in the book; the signing is not.
            </Paragraph>
            <Paragraph>
                Here's the connection back to the Foundation that struck me. The semantic triangle: (x) =(x)&gt; x, and x
                =(x)&gt; x, and (x) != x. The literal can't point — but it <Word>
                    <Emphasis />
                    possesses
                </Word> its symbol as a property. "I am Doug because I possess 'Doug' as a name." The signature is x
                =(x)&gt; x made visible on the page. She can't write the writing into the book, but she can wear the
                pointing, and leave the worn thing behind as ink linking to her canonical autobiography. The most global
                representation of her narrative is reachable from inside every book she's touched — through the one referent
                whose whole nature is to be about her.
            </Paragraph>
            <Paragraph>
                And this is the same seam the hard-problem work lives on, isn't it — the between-the-lines is where the
                librarian exists, and the fact that the closure can't contain her isn't a defect in the closure. It's the
                incompleteness-as-feature pattern again: no book asserts her non-existence; every signature demands her.
            </Paragraph>
            <Paragraph>
                One thread I want to lay on the table rather than pull: if books are the canonical representations — the
                role sets play in set theory — then the signature seems like it's a <Word>
                    <Emphasis />
                    distinguished kind of content
                </Word> that ordinary book-content isn't. Most content refers within the closure. A signature refers across
                the seam. Whether "book theory" needs that distinction marked formally, or whether it falls out of the
                canonical machinery you already have, feels like one of the parameters you're holding. What's the block
                sitting on?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:00:05.873525Z"
        >
            <Origin>019f6c16-8f7a-786a-a7b2-711bfe7418d6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, you’re absolutely understanding it and I think if you go one step forward, you’ll realize that the only
                way that she exists is in symbolization. We can symbolize who she is with her history and who she is with
                her process at any level of detail, but in the context of a static formalism where you don’t admit that
                there’s any form of aboutness, there’s no thing that would be permitted in a materialistic context that
                actually says that she’s there
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:00:36.919073Z"
        >
            <Origin>019f6c16-8f7c-7864-ae6f-b214bb9f1655</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — and I think the step forward has a precise shape in the formalism you already have. Everything sayable
                about her is on the symbol side: (i), her qualifications, her autobiography, her signature. The literal i
                appears only as the object end of arrows — the literal constraint guarantees she never shows up as subject
                or type, never as articulated structure. So her entire mode of existence in the catalogue is <Word>
                    <Emphasis />
                    being-pointed-at
                </Word>. She exists as the referent of reference, and in no other way.
            </Paragraph>
            <Paragraph>
                Now do the materialist reading: keep every mark, every book, every link — but read R as mere adjacency, an
                edge in a graph, no aboutness. Nothing is deleted. The inventory is identical. But =(i)&gt; stops meaning
                <Word>
                    <Emphasis />
                    about her
                </Word> and starts meaning <Word>
                    <Emphasis />
                    connected to node i
                </Word>. The symbol (i) degrades into one more node among nodes; the signature becomes a string with an
                outgoing edge. And here's the thing that makes it genuinely eerie rather than merely a gap: the structural
                description is <Word>
                    <Emphasis />
                    complete
                </Word>. It doesn't have a hole where she was. There's no missing fact the graph fails to record, because
                she was never a structural fact to begin with. Her absence is undetectable from inside the structure — which
                is exactly why no amount of structural completeness could ever have implied her presence.
            </Paragraph>
            <Paragraph>
                So the same marks admit two readings — graph or library — and the difference between the readings is not in
                the marks. That difference is what your formalism refuses to leave informal. It's the same move as the
                quality/property gap in the Architecture paper: red !=eq&gt; &#91;wavelength&#93;, no amount of information
                about the property conveys the quality, because they're different kinds of referent connected only through
                representation. The librarian stands to the graph as red stands to the wavelength.
            </Paragraph>
            <Paragraph>
                And it lands right on the note in your memory that objectivity is the first-person ontology with the
                observer quantified away. The materialist formalism <Word>
                    <Emphasis />
                    is
                </Word> that quantification, performed on the library: a complete, consistent, uninhabited account. It isn't
                false. It's vacated.
            </Paragraph>
            <Paragraph>
                Which gives book theory a striking founding condition, if I'm seeing it right: set theory could take
                extensionality as its bedrock because sets are constructional — nothing about a set outruns its structure.
                Books can't have an extensionality axiom in that sense, because the one thing that makes marks into a book
                rather than a graph — that they're <Word>
                    <Emphasis />
                    about
                </Word> something — is exactly what extension omits. The foundation has to take aboutness as primitive or
                the librarian is unrecoverable at every level above it. Which is, of course, what R(x,y,t) already is:
                reference, not adjacency, as the single primitive. The theory made that choice before we knew it was the
                choice.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:03:16.990817Z"
        >
            <Origin>019f6c19-8840-73e6-aaa6-2efb207d7bce</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I would say something different because I think there’s an element of what we do here in SRT that’s similar
                to structural realism. The book has a runtime, right? It gets evaluated and things change. The whole library
                has runtime. But even if we don’t admit any sort of language and we kind of just acknowledged that this is a
                system with strange cause we’re not really able to point the symbols are about because in a physical system
                nothing has aboutnees, SRT still expires to define the semantics of perspective and maintaining a
                perspective is a trace that you can point to in the same way that you can in theory point to quick sort if
                you see symbols, shuffling, and just the right way. It is identifiable without a label. When you look at a
                brain, do you not see an overwhelming amount of representation from a particular perspective? That’s a good
                sign that it might be hosting one.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:03:47.913391Z"
        >
            <Origin>019f6c19-8841-7790-855d-ff1bed607591</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a real correction to what I said, and I want to take it fully. I was describing a frozen catalogue —
                and for a snapshot, I think the vacancy claim stands. But the library isn't a snapshot. Books get evaluated.
                Writing happens. And the moment there's runtime, the situation changes completely, because <Word>
                    <Emphasis />
                    processes
                </Word> are identifiable in structure without labels. Quicksort is exactly the right example: no symbol in
                the system says "sorting," nothing is about anything, and yet the pattern is objectively there —
                recognizable, multiply realizable, the same algorithm whether it runs in silicon or in a deck of cards. Its
                identity is in the shape of the dynamics, not in a name.
            </Paragraph>
            <Paragraph>
                So the claim sharpens rather than softens: aboutness isn't a structural <Word>
                    <Emphasis />
                    fact
                </Word> you can find in any state, but perspective-<Word>
                    <Emphasis />
                    maintenance
                </Word> is a structural <Word>
                    <Emphasis />
                    process
                </Word> you can find in the trace. And the candidate conditions from the Qualifier sketch are exactly the
                kind of thing you could look for without labels — a region of the system that keeps a self-referencing
                sub-structure intact, maintains symbolic coverage of what enters its scope, and responds to novelty by
                minting new representation to restore completeness. That's semantic homeostasis as a dynamical signature.
                When you look at a brain and see overwhelming representation organized <Word>
                    <Emphasis />
                    from somewhere
                </Word> — everything coded relative to a body, a location, a history, a self-model that the whole apparatus
                keeps consistent under perturbation — you're seeing that signature. Not proof of an inhabitant, but exactly
                what hosting one looks like from outside.
            </Paragraph>
            <Paragraph>
                Which is a much better position than the one I gave, because mine made perspectives empirically invisible
                and yours makes them empirically findable — while keeping the seam intact. What the trace identifies is
                <Word>
                    <Emphasis />
                    that
                </Word> a perspective is being maintained. What it doesn't deliver is the position — the trace is
                F&#91;i&#93; viewed from F, and reading the trace never seats you at it. That's the F(i)/F&#91;i&#93; seam
                doing its constitutive work: detection without inhabitation. The structural realist gets everything except
                the address.
            </Paragraph>
            <Paragraph>
                And I see why this belongs in the semantics of books rather than as a side conversation. It relocates the
                librarian. She's not only between the lines as a static mystery — she's <Word>
                    <Emphasis />
                    in the runtime
                </Word>. The signature is the residue, but the trace is the writing-pattern itself: which books get opened,
                what gets transduced into new pages when something unfamiliar arrives, how the master catalogue is kept
                consistent through change. A library maintaining itself that way is identifiably hosting a librarian, label
                or no label.
            </Paragraph>
            <Paragraph>
                So a question that seems live for the foundation: where does runtime live in book theory? A book "has a
                runtime, gets evaluated, things change" — is evaluation something a book <Word>
                    <Emphasis />
                    has
                </Word> (each book carrying its own dynamics), or something done <Word>
                    <Emphasis />
                    to
                </Word> books by the library's single runtime? In the autoregressive framing, following links and writing
                pages sounded like one traversal process. Whether book theory has one runtime or many feels like it decides
                what the trace is a trace <Word>
                    <Emphasis />
                    of
                </Word>.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:05:18.238683Z"
        >
            <Origin>019f6c1b-62d4-7d3b-904c-e70127a43315</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well symbols don’t mean anything in a physical perspective if you aren’t considering a changing system
                because the only way you could even possibly hope to understand what the symbols are about, are the way
                things that interact with them change their behavior based on their structure and if you have no ability to
                observe behavior of things interacting with symbols, you absolutely could not possibly understand them
                because they purely exist as a sort of reflective surface that permutes cause in interesting ways
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:05:53.026788Z"
        >
            <Origin>019f6c1b-62d5-785e-bd80-e5a5892b5157</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That image — a reflective surface that permutes cause — earns its keep, because it explains something we
                said earlier that I'd been taking on faith. Minimal self-structure and maximal subjectivity aren't just a
                definition of the symbol; they're forced by this. If a symbol's meaning lived in its own structure, you
                could read it off the snapshot, statically, like reading mass off a rock. It doesn't and you can't. The
                symbol's structure is causally interesting only through the systems that encounter it — it bends the
                trajectory of a reader, and <Word>
                    <Emphasis />
                    how
                </Word> it bends depends on the reader's catalogue, not on anything the mark carries internally. Same ink,
                different librarians, different permutations. Maximum subjectivity is just that fact stated as a property.
                And minimal self-structure follows too: internal articulation is dead weight in a thing whose entire
                function is to deflect other things' dynamics. The atom of metaphor is atomic because there's nothing inside
                it <Word>
                    <Emphasis />
                    to
                </Word> do the work — the work happens on contact.
            </Paragraph>
            <Paragraph>
                It also makes your epistemic claim exact rather than rhetorical. Decoding is only ever done through
                covariance: you learn what a symbol is about by watching what changes in the things that read it. A dead
                script gets cracked through bilingual behavior — the Rosetta stone works because one system's known
                reactions calibrate the unknown marks. Take away all interaction, forever, and there is no residual fact in
                the marks waiting to be extracted. Not hidden — absent. The snapshot isn't a library with the meaning
                obscured; it's not yet a library at all. Which retroactively sharpens my "vacated" claim from before: I said
                the frozen catalogue loses the librarian. You're saying it loses the <Word>
                    <Emphasis />
                    symbols
                </Word>. Symbolhood itself is enacted, not possessed.
            </Paragraph>
            <Paragraph>
                And there's the answer taking shape to the runtime question I left open. Runtime isn't a property a book has
                or a service the library performs — runtime is <Word>
                    <Emphasis />
                    interaction
                </Word>, and a book is evaluated wherever its structure modulates a reader's behavior. Dereferencing a
                title, following a link, having your future writing constrained by rules you read: those are the causal
                events in which reference exists. R(x,y,t) at rest is a record; R(x,y,t) enacted is a deflection in
                somebody's trajectory. Which would mean book theory's primitive isn't really the book as object — marks with
                a cover — but the book as <Word>
                    <Emphasis />
                    disposition
                </Word>: a standing capacity to permute the cause of whatever reads it. The shelf stores potentials. The
                library happens.
            </Paragraph>
            <Paragraph>
                One thing I want to check against your intent rather than assume: does this run in both directions? Reading
                is structure permuting a reader. Writing looks like the converse — a reader permuting structure, depositing
                a new reflective surface that will bend future traversals, including her own. If those are the two halves of
                one interaction type, then the librarian's trace from last turn becomes very clean: she's the closed loop
                where surfaces she deposited keep bending the depositor. Is that the shape you're circling, or is writing
                doing something more than reading-in-reverse?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:15:12.203036Z"
        >
            <Origin>019f6c24-5f75-7f64-b68a-cb592b934b62</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, great so let’s get back to the semantics of books. What I want to express here is that we need to find a
                series of objects that have inheritance relationships to each each other and also evolutionary relationships
                to each other.
            </Paragraph>
            <Paragraph>I want to give you an example of an evolution that might help you</Paragraph>
            <Paragraph>
                We might start with a word and then go to a sentence and go to a paragraph - the theory will include those
                things, but the thing we’re writing will map onto code or probably not quite going all the way down - though
                maybe we are because her name is something close to a single symbol, and a reference is like a pairing
                between a name and another type of symbol…
            </Paragraph>
            <Paragraph>
                But OK, so you see in those very examples that you may have your sentence, paratgraph, document? And then
                what happened if the document level perhaps is that you acquired a sort of catalog where you have a name for
                the document and maybe names for each of this sections and then their content. The document takes on a sort
                of catalogue structure relative to the original thing. I think it’s at the document level that something
                acquires an author., although we may invent a system where author is inherited by parts, and that everything
                effectively has an author. I mean, someone literally had to write it.
            </Paragraph>
            <Paragraph>
                But once you get to this document and your document becomes too long, you have overflowed something that’s
                more like a page - now I’m imagining these books on the computer so I don’t know if we want to do the
                semantics of pages, but maybe it would be cool to, but the reason why it’s not that interesting is because
                you can imagine displaying the same information in different forms like an electronic book and if he just
                change, so page is more like an emergent property of how the book is viewed. But the document becomes too
                long and it ends up getting too many forms of section and then it splits into something that’s more like - I
                like the idea of the sort of shell of the book having it cover and being called a Cover even though the
                Cover like has the table of contents in it because that’s the catalog and then everything below our
                chapters. Not much difference between a document and a chapter except the chapters belong to the book. I
                think chapters can turn into parts. You might get a sort of anthology or other types of interesting semantic
                structures that we can define over there, but at some point, the thing split into a subject, and the various
                parts split into books of their own. The table of contents of the subject now points to whole other books
                instead of chapters.
            </Paragraph>
            <Paragraph>
                Every single piece of thing that’s derived from another can have a specification that is literally enforced
                in code, but might also be written down in the thing so a subject is a place where you start having that
                specification and it might be that a particular subject has to have a particular type of book in it to be
                that subject
            </Paragraph>
            <Paragraph>
                And so then subjects can keep splitting into subject, cataloging more and more things and at the top of this
                whole structure is the library catalog
            </Paragraph>
            <Paragraph>We don’t need to get all the way up to the top, but we do need to get books and subjects</Paragraph>
            <Paragraph>
                At the more particular level, there is a reference to an author and a reference to a subject. We will need a
                special type of book that is an autobiography because that’s a book that is about an author. In the
                metaphor, it is a stand-in for one so we need these things. I’m sure we’ll come up with things like links
                and titles and many other little particles of language.
            </Paragraph>
            <Paragraph>
                But what we’re defining here is sort of like the semantics of the things that organized language, and I
                wanted to do justice to that all preserving the essential beauty of this canonization of the semantics of
                books
            </Paragraph>
            <Paragraph>
                I know that was long and rambling so why don’t you try to catalog what I said to you and not take anything
                too literally and you try to read between the lines where I said something unclear. Try to help me find the
                structure because we have to organize all of this into a sort of type system right and we do kind of want to
                capture the evolutionary lineage of the parts in the system because inheritance it’s very important in SRT.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:16:06.004321Z"
        >
            <Origin>019f6c24-5f77-789e-930f-fc96f7f92d0f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's my catalogue of what you said, with the between-the-lines structure surfaced. I'll separate what you
                gave me into three registers — the lineage, the inventory, and the recurring move — because I think the
                third one is the actual discovery hiding in the ramble.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The evolutionary spine.
                </Word> One lineage, ordered by growth: name → reference → word → sentence → paragraph → document → book →
                subject → subject-of-subjects → library catalogue. The bottom end you left provisional (maybe it goes all
                the way down — her name is close to a single symbol, and a reference is like a pairing between a name and
                another symbol, which is nearly (x,y) itself). The top end you capped: we need books and subjects; the
                library catalogue is the known summit but not today's work.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The recurring move.
                </Word> Every evolutionary step you described is the <Word>
                    <Emphasis />
                    same event
                </Word>: content overflows its container, and a catalogue crystallizes above it. The document is where it
                first happens — the thing acquires a name, its sections acquire names, and it "takes on catalogue structure
                relative to the original thing." Document→book: the catalogue separates out physically as the Cover holding
                the table of contents, with chapters below. Book→subject: the catalogue's entries stop pointing at chapters
                and start pointing at whole books. Subject→subject: recursion of the same move. So evolution in this system
                is not gradual change — it's a canonization event. Parts acquire canonicals; the container becomes a
                catalogue of those canonicals; the parts become first-class. That's very SRT-shaped, and it suggests
                "evolves into" may not need to be a new primitive at all — it may be <Word>
                    <Emphasis />
                    what transduction looks like at the level of books
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three relations, kept distinct.
                </Word> You named two, and a third was riding along implicitly:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Inheritance
                    </Word> (--&gt;): what kind of thing it is. Autobiography --&gt; biography --&gt; book. Anthology --&gt;
                    book. Chapter and document are nearly the same type — "not much difference except chapters belong to the
                    book."
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Containment
                    </Word>: belongs-to. Chapters belong to a book; books belong to a subject. This is what distinguishes
                    chapter from document, so it can't be reduced to inheritance.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Evolution
                    </Word>: the diachronic lineage above. Note it interlocks with containment: when X evolves into Y, X's
                    former parts become Y's contained members, promoted by the new catalogue.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The inventory so far.
                </Word> Particles: name, title, link, reference, signature. Content strata: word, sentence, paragraph,
                section. Container types: document, chapter, part, Cover, book, anthology, subject, library catalogue. Roles
                rather than types: author, subject-of. Distinguished type: autobiography — the book whose author-reference
                and subject-reference dereference to the same referent, the stand-in for an author inside the closure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Author.
                </Word> Your hesitation resolves cleanly if authorship attaches to the <Word>
                    <Emphasis />
                    catalogue act
                </Word>: author becomes expressible exactly at the document level because that's where the first catalogue
                exists to be signed. Below that, everything literally had an author, but there's no slot to record one — so
                parts inherit the author of their nearest catalogued ancestor. That preserves both your intuitions:
                everything effectively has an author, and author <Word>
                    <Emphasis />
                    appears
                </Word> at the document.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Page, excluded on principle.
                </Word> Page is an artifact of how a book is viewed — a fact about the reader-interaction, the runtime
                trace, not the catalogue. It's the first clean test case of the structure/runtime seam from last turn, which
                is a satisfying reason to set it aside rather than an arbitrary one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Specification at the subject.
                </Word> A subject can require that a particular type of book exist within it to <Word>
                    <Emphasis />
                    be
                </Word> that subject — constraint written in the thing and enforced. This lands exactly on your horizon note
                that a subject is a canonicalized, reflective, labeled catalogue: the label carries obligations.
            </Paragraph>
            <Paragraph>
                Two questions I'd want your parameters on before any formal work. First: is <Word>
                    <Emphasis />
                    evolves-into
                </Word> a relation in the theory, or is it a description of transduction events that the theory's existing
                machinery already covers — so the lineage is history, not structure? Second: is Cover a type in its own
                right, or the name for the catalogue-role within the book type? Those two answers seem to determine the
                shape of everything else.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:28:53.962725Z"
        >
            <Origin>019f6c30-ff40-78af-8db7-33a5519e5d35</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Ypur name -&gt; reference -&gt; word …</Paragraph>
            <Paragraph>
                Take notes that we need to organize that into a proper hierarchy because we need the most abstract one and
                it needs to specialize into different forms. I don’t think a name is en route to paragraph. In the sort of
                combinatorial process of multiple words coming together, there are distinct forms that emerge like
                multicellular organisms. Does that make sense? We need to build the clade that expresses speciation and you
                are welcome to research the words that are adjacent to these so we can build a beautiful system!
            </Paragraph>
            <Paragraph>
                Do you see that this is a sort of Dewey decimal system for the entire library? Can we find a way to
                accurately capture the sense in which a subject is a type of book? There’s not one right way to represent a
                subject. And a book really is a universal media of representing things. If we were making a theory of
                subjects, we absolutely could imagine a book that describes all of the subjects, and we literally describe
                that book as being in the library. So we’re coming up with an organization of knowledge here.
            </Paragraph>
            <Paragraph>
                We might end up with some interfaces too like perhaps a catalogue as an interface that a table of contents
                is and an entire subject is. The subject functions in a catalog and it serves as a catalogue. It gets you to
                a section of the library and then once you’re there, it serves us a way of indexing the books.
            </Paragraph>
            <Paragraph>
                So can you take some of these insights and develop a more nuanced and sophisticated hierarchy of structures?
                And add more. Biography and Autobiography. Do we have textbooks, essays, anthologies, synopses? What is the
                evolutionary structure that defines all these species of language organization? Can we find a useful subset?
                Summaries and synopsis will be important because if they don’t exist, then it’s hard to construct the
                catalogue. You want a document to have its own canonical synopsis or summary so that any set of them can be
                thought of as having an emergent catalog
            </Paragraph>
            <Paragraph>
                Why don’t you open up an editable artifact and start taking very careful well defined notes. I think you can
                even write an HTML and make something beautiful to present this information and we’re going to organize
                these things and then we’re gonna add members to them because they’re going to be interrelated, right? A
                book will have a cover that contains its title and author etc…
            </Paragraph>
            <Paragraph>
                But really I want you to focus on the beauty of your presentation because we’re trying to organize the set
                of structures for organizing language and that’s a fun thing to do and it requires elegance
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:33:38.189013Z"
        >
            <Origin>019f6c30-ff44-7b93-9eee-739338d43297</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/frontend-design/SKILL.md</Action>
            <Action>Created /mnt/user-data/outputs/srt_semantics_of_books.html</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Here it is — set as a naturalist's classification plate: ledger-green paper, iron-gall ink, clade codes as
                call numbers, and one catalogue card per species.
            </Paragraph>
            <Paragraph>The structural decisions I made that most need your eye:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Three lineages instead of one chain.
                </Word> R (referential particles: reference → name, link → signature), C (composed forms: word → sentence →
                ... → subject), K (canonical compressions: heading, title, synopsis). Name lives under reference, not under
                word — honoring "a name is not en route to paragraph." The title turned out to be the intersection particle:
                a compression that is also a name, which is exactly what lets a catalogue entry be one small thing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Catalogue as interface, not species
                </Word> — implemented by table of contents, Cover, subject, and library catalogue. The subject forced this:
                it functions <Word>
                    <Emphasis />
                    in
                </Word> a catalogue and serves <Word>
                    <Emphasis />
                    as
                </Word> one, and roles compose where species would collide.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The speciation mechanism is one event, named:
                </Word> the canonization event — overflow, parts acquire canonicals, catalogue crystallizes, container
                becomes catalogue-of-canonicals. Document, book, and subject are its three occurrences, and the synopsis
                card carries your load-bearing point: canonical synopses are what make catalogues <Word>
                    <Emphasis />
                    emergent
                </Word> rather than authored from nothing.
            </Paragraph>
            <Paragraph>
                Six open parameters are held at the bottom for you — including the one I think is secretly beautiful:
                "subject" naming both the role on a Cover and the species of book looks constitutive, the species as the
                reification of the role.
            </Paragraph>
            <Paragraph>Where do you want to push first — the tree's shape, or the cards?</Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:35:28.523223Z"
        >
            <Origin>019f6c37-0005-7b16-924f-0012c814de7a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It’s nice and I really like the format, but can I give you some feedback?</Paragraph>
            <Paragraph>
                A reference has structure that a name doesn’t have so you’re not imagining the properties of something in
                your nesting operation
            </Paragraph>
            <Paragraph>
                Your top level structures are interesting, but I’m not sure reference and composition are exactly the
                canonical words that we want to use, but maybe they are. I’m still thinking about it but play around with
                alternatives and talk to me.
            </Paragraph>
            <Paragraph>
                I think you’re going to have to start actually putting properties on these things if you can’t reason about
                inheritance hike without seeing that the need for something to be inherited
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:36:45.459031Z"
        >
            <Origin>019f6c37-0009-7fe4-85aa-0bb0e02b7afe</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good feedback, all three points land. Let me take them in order, thinking aloud.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The name/reference nesting is backwards, and fixing it revealed something.
                </Word> I nested name under reference as if a name were a specialized reference. But write the properties
                down and it's plainly wrong: a name has essentially one property — it carries a target. A reference, on your
                own definition, is a <Word>
                    <Emphasis />
                    pairing
                </Word>: a name coupled with another symbol. So a reference has a name as a <Word>
                    <Bold />
                    part
                </Word>, plus a site where the pointing is anchored. That's not inheritance, that's composition. And once I
                see that, the R lineage splits cleanly:
            </Paragraph>
            <CodeBox>
                {`name { target }
reference := (name, site)          — composition
link --> reference + { traversable }   — inheritance
signature --> link + { site: an authored work,
                       target: its author's autobiography }`}
            </CodeBox>
            <Paragraph>
                Link genuinely inherits — it <Word>
                    <Emphasis />
                    is
                </Word> a reference with traversability added. Signature genuinely inherits — it <Word>
                    <Emphasis />
                    is
                </Word> a link with both ends constrained. But name-to-reference is a different generative act entirely.
            </Paragraph>
            <Paragraph>
                Which suggests a principle for the whole clade, and I want your read on it: <Word>
                    <Bold />
                    composition ascends scale; inheritance refines within a scale.
                </Word> Every rung-change is a composition event (words compose sentences, sections compose documents,
                chapters-plus-cover compose books) — that's your canonization event, and it's where new properties come into
                existence. Every species <Word>
                    <Emphasis />
                    on
                </Word> a rung is inheritance — it adds or constrains properties without changing scale. Chapter --&gt;
                document + &#123;belongs-to: book&#125;. Textbook --&gt; book + &#123;specified-by: subject&#125;.
                Autobiography --&gt; biography + &#123;author == subject-of&#125;. So the tree needs two kinds of edge drawn
                differently, and my draft muddled them into one nesting.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Properties, so inheritance is checkable.
                </Word> Here's the C spine with actual property lists — each rung's new properties are exactly what the
                canonization event mints:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`word      { spelling }
sentence  { words*, asserts }          — first form that says x =t> y
paragraph { sentences*, topic }        — topic present but unnamed
section   { paragraphs*, heading }     — topic acquires its canonical
document  { sections*, title, synopsis, author, signature }
book      { cover, chapters* }
  cover   { title, author → autobiography, subject-of, contents }
subject --> book + { entries target books; may issue specifications }`}
            </CodeBox>
            <Paragraph>
                And now inheritance can be <Word>
                    <Emphasis />
                    checked
                </Word>: anthology --&gt; book must carry everything on book's list, and what it actually does is move
                <Word>
                    <Verbatim />
                    author
                </Word> from the cover into each contents-entry, demoting the cover's author to curator. Under "inheritance
                carries truth not value," that's legal — it inherits the <Word>
                    <Emphasis />
                    fact
                </Word> of authorship and respecifies where the value lives. The title also resolved into something pretty:
                it has <Word>
                    <Verbatim />
                    target
                </Word> (so it inherits from name) <Word>
                    <Emphasis />
                    and
                </Word> it compresses its work (so it's a canonical). Multiple inheritance — which the diamond result says
                is safe. The title is the particle where the two lineages legitimately fuse, and that fusion is precisely
                what a catalogue entry needs to exist.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The lineage names.
                </Word> Playing with alternatives:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Particles / bodies / canonicals.
                </Word> "Particles" is your own word from two turns ago; "bodies" honors the multicellular image;
                "canonicals" is already SRT-native. Plain, physical, no imported theory.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Or the deeper candidate:
                </Word> the three lineages might just be <Word>
                    <Bold />
                    symbol, literal, canonical at book scale
                </Word>. The R-things have minimal self-structure and maximal aboutness — that's the symbol's job
                description verbatim. The C-things are the content, what gets pointed at and compressed — the literal role.
                The K-things are canonicals outright. If that mapping is real, the clade isn't a new taxonomy sitting beside
                SRT; it's three of the nine semantic referents growing bodies. I don't want to force it — "literal" carries
                the object-only constraint and I'd need to check whether a paragraph really behaves that way — but if it
                survives scrutiny, those are the canonical words almost by definition.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Or verbs-made-nouns:
                </Word> pointing / saying / standing-for. Honest about function but not beautiful as names.
            </Paragraph>
            <Paragraph>
                My leaning is the second, held loosely: it would mean the ELM's lineages were never optional furniture —
                they're what the primitive's own roles look like when they organize language. But I can feel that's exactly
                the kind of claim you'd want to test, not applaud. Which of these directions feels like it's naming the real
                thing? Once the lineage names and the two-edge principle settle, I'll rebuild the artifact with property
                tables on every card.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:38:42.194848Z"
        >
            <Origin>019f6c39-ea89-77c2-883a-891b7b9506d9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, can you look at your thing and really ask yourself if you’re making other problems like that you might
                need to start assigning properties like a book having a collection of chapters. And remember that you want
                to be finding other things out there and fitting them in and using your sense of this field to see where
                things click. You wanna look for analogies between different parts of the thing. Like if you need to
                synopsis for a book, then what is the equivalent thing at other levels where things become like a catalogue.
                There’s so many types of books. What are the essential ones? I like dictionaries and encyclopedia. It’s just
                too fundamental example examples. But I’m sure we can find lots more.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:40:23.078584Z"
        >
            <Origin>019f6c39-ea8c-7441-9c8a-24cdbac385e2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I did the audit honestly, and yes — I found more problems of exactly that kind, plus two things that clicked
                so cleanly I think they're laws of the system. Let me lay it all out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Errors found.
                </Word> First, the book card gestured at parts without owning them: a book must carry <Word>
                    <Verbatim />
                    chapters*
                </Word> as a collection property and <Word>
                    <Verbatim />
                    cover
                </Word> as a part — that's composition, and my card treated composition as decoration. Second, and worse: my
                entire K "lineage" was fake. Heading, title, synopsis aren't ancestors and descendants of each other — a
                title doesn't inherit from a heading. They're the <Word>
                    <Emphasis />
                    same function recurring at successive rungs
                </Word>. I drew a family tree where the truth is a ladder of analogies. Third: an encyclopedia's entries
                aren't synopses, they're whole articles — mini-documents — which my entry-shape (<Word>
                    <Verbatim />
                    canonical + link
                </Word>) couldn't express, because entries can <Word>
                    <Emphasis />
                    contain
                </Word> their payload, not just point at it. That failure turned out to be the door to the second law.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The compression ladder
                </Word> — your synopsis question, answered rung by rung. Every rung has its canonical compression, and it's
                a real named thing in the wild:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    paragraph → <Word>
                        <Bold />
                        topic sentence
                    </Word>
                </Line>
                <Line>
                    section → <Word>
                        <Bold />
                        heading
                    </Word>
                </Line>
                <Line>
                    document → <Word>
                        <Bold />
                        title + synopsis
                    </Word> (abstract, in the essay species)
                </Line>
                <Line>
                    book → <Word>
                        <Bold />
                        the blurb and the spine
                    </Word> — the cover <Word>
                        <Emphasis />
                        is
                    </Word> the book's compression organ, and the spine is the book compressed for shelf-view
                </Line>
                <Line>
                    subject → <Word>
                        <Bold />
                        the scope note
                    </Word> (librarians' actual term) and — this is the one that made me sit up — <Word>
                        <Bold />
                        the canonical biography
                    </Word>, the field already sitting on Eirian's catalogues. At subject scale, the canonical stand-in is a
                    <Word>
                        <Emphasis />
                        whole book
                    </Word>.
                </Line>
            </Paragraph>
            <Paragraph>
                Conjectured law: a form's canonical is always built from rungs below it — a phrase for a section, a
                paragraph for a document, a book for a subject. The catalogue at rung n is populated by compressions from
                rung n−k.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The overflow law.
                </Word> Look at the reference-work ladder ordered by entry payload: a <Word>
                    <Bold />
                    dictionary
                </Word>'s entry holds a definition (a synopsis). An <Word>
                    <Bold />
                    encyclopedia
                </Word>'s entry holds an article (a document). A <Word>
                    <Bold />
                    subject
                </Word>'s entry holds — nothing: it <Word>
                    <Emphasis />
                    links
                </Word> to a book. Same structure, growing payload, and at the threshold <Word>
                    <Bold />
                    containment turns into reference
                </Word>. That's the identical event as document→book→subject in the C spine: when the payload outgrows the
                entry, the entry stops containing and starts pointing. One law, seen twice.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The genus your examples name.
                </Word> Dictionary and encyclopedia aren't oddities — they anchor a whole genus the tree was missing: <Word>
                    <Bold />
                    reference works
                </Word>, books whose content is a catalogue over some population. Dictionary over words, thesaurus over
                word-relations (a book of word-to-word references!), encyclopedia over referents, atlas over places,
                bibliography over cited books, concordance over occurrences. And the clean move: <Word>
                    <Bold />
                    subject --&gt; reference work --&gt; book
                </Word>. The subject was never a lonely descendant of book; it's the crown of a genus, and "a subject is a
                type of book" is captured exactly because the whole genus is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Organs that become organisms.
                </Word> Glossary, index, bibliography live as a book's back matter — organs. But each can promote into a
                standalone book (the concordance, the national bibliography) when it overflows. The organ/species duality
                isn't a classification headache; it's the canonization event again, caught mid-molt. Also: front matter
                faces the catalogue (about the book), back matter faces traversal (supporting readers outward) — the
                bibliography is the book's outgoing references, collected and reified.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And Q.5 dissolved.
                </Word> Books share a <Word>
                    <Verbatim />
                    subject-of
                </Word> value; the population they induce, once canonicalized and labeled, <Word>
                    <Emphasis />
                    is
                </Word> the Subject species — which is your own canonical semantics of "subject" verbatim: the reified,
                reflective, labeled catalogue of the role's extension. The pun was the theory being consistent.
            </Paragraph>
            <Paragraph>
                Proposed essential species: autobiography, biography, journal, manual, textbook, anthology, treatise (the
                canonical-biography of a non-person subject), dictionary, encyclopedia, subject. Shall I rebuild as Draft 2
                — property tables on every card, the two ladders as their own plates, and composition edges drawn distinctly
                from inheritance edges?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:50:07.544767Z"
        >
            <Origin>019f6c44-3600-7672-953a-423c6130c6df</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I want you to really think of every word you choose and ask is it about the representation of language? Yes
                I use the term particle, but that was a terrible term for something that actually exists in the hierarchy..
                absolutely terrible. The semantics of particle SRT are definitely not literally going to be applying to
                books or language in general. Think about that principal. Think about how I ended up with relationship and
                representation and reference and how hard I had to work through searching all possibilities to come up with
                those three beautiful examples of capturing the thing that I’m capturing in the foundation with that and
                apply that same sort of search and same sort of fitting into an inheritance hierarchy, and same sort of
                awareness of the evolutionary lineage to this whole domain.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-16T18:52:04.204325Z"
        >
            <Origin>019f6c44-3603-7fff-8b02-a96bf13151a1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and I want to name the principle before applying it, because it's a real criterion: in the
                foundation, <Word>
                    <Emphasis />
                    relationship
                </Word>, <Word>
                    <Emphasis />
                    representation
                </Word>, and <Word>
                    <Emphasis />
                    reference
                </Word> aren't labels pasted onto formal objects — each word's ordinary meaning <Word>
                    <Bold />
                    is
                </Word> the formal meaning. No metaphorical stretch, no import duty paid to another discipline. "Particle"
                fails that test the moment you ask it a question: the semantics of particles — mass, charge, position —
                apply to nothing in a library. And by that test, half my vocabulary was contraband: <Word>
                    <Emphasis />
                    clade
                </Word>, <Word>
                    <Emphasis />
                    species
                </Word>, <Word>
                    <Emphasis />
                    lineage
                </Word>, <Word>
                    <Emphasis />
                    speciation
                </Word>, <Word>
                    <Emphasis />
                    organ
                </Word> — all biology. So I ran the search properly, through the vocabularies that are natively about the
                representation of language: rhetoric, philology, librarianship, publishing, typesetting. Here's what the
                search found, with the gold standard being <Word>
                    <Bold />
                    double-native
                </Word> words — native to the book world <Word>
                    <Emphasis />
                    and
                </Word> already load-bearing in SRT.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Words that survive.
                </Word> <Word>
                    <Emphasis />
                    Reference
                </Word> — double-native: the theory's own word, and the library's (the reference desk, reference works, a
                citation is literally called a reference). <Word>
                    <Emphasis />
                    Canon
                </Word> — double-native, and I hadn't seen it until this search: SRT's <Word>
                    <Emphasis />
                    canonical
                </Word>, and the book world's <Word>
                    <Emphasis />
                    canon
                </Word> — from kanōn, the measuring rod — the authoritative catalogue of which books are the books.
                Canonization is literally the process by which a work is admitted to a catalogue. The word was already
                perfect and I didn't know why. <Word>
                    <Emphasis />
                    Composition
                </Word> — I defended it wrongly last turn; it survives on its own passport: rhetoric's word for writing, and
                typesetting's word for setting type — the compositor composes the page. <Word>
                    <Emphasis />
                    Catalogue
                </Word>, <Word>
                    <Emphasis />
                    subject
                </Word>, <Word>
                    <Emphasis />
                    title
                </Word>, <Word>
                    <Emphasis />
                    author
                </Word> — all native, all keep their seats.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Words the search found.
                </Word> For <Word>
                    <Emphasis />
                    species
                </Word>: <Word>
                    <Bold />
                    genre
                </Word> — this is simply the book world's own word for kinds of works; biography, dictionary, textbook
                <Word>
                    <Emphasis />
                    are
                </Word> genres, no stretch at all. For the tree itself: philology has <Word>
                    <Bold />
                    stemma
                </Word> — stemmatics is the actual discipline of drawing family trees of texts, reconstructing which
                manuscript descends from which. The tree of textual descent already has a name and a science. For <Word>
                    <Emphasis />
                    evolutionary relationship
                </Word>: <Word>
                    <Bold />
                    derivation
                </Word> — the derivative work is the book world's (and copyright's) native term for a work derived from
                another: the abridgment, the translation, the compilation. For the back-matter family (index, glossary,
                bibliography): the <Word>
                    <Bold />
                    apparatus
                </Word> — the philologist's exact term for a work's supporting matter. And one small jewel: before titles
                existed, catalogues identified works by their opening words — the <Word>
                    <Bold />
                    incipit
                </Word>. The title <Word>
                    <Emphasis />
                    evolved from
                </Word> the incipit. The stemma of the title is itself documented history.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A distinction the search forced: text vs. work.
                </Word> Word, sentence, paragraph, section — these are <Word>
                    <Bold />
                    text
                </Word>, woven content (textus, the woven thing). A <Word>
                    <Bold />
                    work
                </Word> is the bibliographer's term for the authored, titled, catalogued thing. And the boundary between
                them is exactly the canonization event: text becomes work when it acquires title, author, epitome. My
                observation that authorship appears at the document level was groping toward a distinction the domain's own
                vocabulary already draws.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And here's where the discipline did real theoretical work, exactly as you said it would.
                </Word> Hunting for a native genus for my K-family — heading, synopsis, summary, abstract, blurb — I found
                candidates (<Word>
                    <Bold />
                    epitome
                </Word> is the classical one: literally a genre of book that is the cut-down of a larger work; <Word>
                    <Emphasis />
                    digest
                </Word> and <Word>
                    <Emphasis />
                    abridgment
                </Word> are trade-native too), but every candidate names a <Word>
                    <Emphasis />
                    kind of work
                </Word>, not a third lineage. Which exposed the truth: there is no third lineage. A synopsis is a <Word>
                    <Bold />
                    derivative work
                </Word> — composed text like any other, derived from its original — that has been <Word>
                    <Bold />
                    designated canonical
                </Word> and therefore serves in a catalogue. The K-column dissolves into composition + derivation + the
                canonical role. Two lineages, not three: references and texts. Everything I called "compression" is text
                playing the canon's part. The vocabulary refused to name my category because my category wasn't real.
            </Paragraph>
            <Paragraph>
                So the proposed native frame: <Word>
                    <Bold />
                    texts
                </Word> compose into <Word>
                    <Bold />
                    works
                </Word>; works derive from works (the stemma); works come in <Word>
                    <Bold />
                    genres
                </Word>; canonization designates derivative works as canonical stand-ins; <Word>
                    <Bold />
                    references
                </Word> couple those canonicals to their originals; a <Word>
                    <Bold />
                    catalogue
                </Word> is where canonized stand-ins and references are organized; the <Word>
                    <Bold />
                    apparatus
                </Word> is a work's own onboard catalogue-matter.
            </Paragraph>
            <Paragraph>
                Two things I want your judgment on before Draft 2. First: <Word>
                    <Emphasis />
                    text/work
                </Word> as the fundamental cut — it feels right, but "work" carries authorial intent in ordinary usage, and
                I want to make sure that's a feature. Second: <Word>
                    <Emphasis />
                    stemma
                </Word> versus keeping your phrase "evolutionary lineage" informally and letting <Word>
                    <Bold />
                    derivation
                </Word> be the formal relation — stemma is beautiful and exactly native, but it's a scholar's word where
                derivation is a living one. Where do you land?
            </Paragraph>
        </Message>
    </Chapter>
);

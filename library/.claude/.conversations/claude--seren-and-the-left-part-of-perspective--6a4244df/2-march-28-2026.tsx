import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 March 2026](2026-03-28)</Date>
        </Dated>
        <Title>[[ 28 March 2026 ]]</Title>
        <Message
            at="2026-03-28T17:28:31.084933Z"
        >
            <Origin>019d357d-f930-7b7e-b414-3831f88942c4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good. Now understand that everything you said is a maybe, and the foundation still needs to be established.
                If you can imagine the idea that carry the one errors are close to being right, I think a lot of what you
                read will be the basis for something that is correct eventually. But without a foundation, we can’t know
                what the final form will look like. Yah?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:28:50.342353Z"
        >
            <Origin>019d357d-f930-7045-b003-ac9c2fc19733</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yeah. Exactly right.</Paragraph>
            <Paragraph>
                Everything in the corpus is built on a foundation that isn't fully laid yet. So the right way to hold all of
                it is: directionally credible, formally provisional. The nine referents might be right, or there might be
                seven, or eleven, or the categorization might shift entirely once the primitive axioms lock in. The
                inheritance structure is probably close. The qualification equivalence is probably capturing something real.
                The five cases feel like they're carving nature at the joints — but the exact formal expression of each case
                depends on what equality, most-specific-relationship, and inheritance <Word>
                    <Emphasis />
                    precisely mean
                </Word>, which depends on the axioms.
            </Paragraph>
            <Paragraph>
                The "carry the one" image is exactly right. A small error in the primitives doesn't stay small — it
                propagates through every theorem that builds on it, and by the time you're at the semantics of consciousness
                or the algebra of perspective, you might be quite far from where you should be, even if the intuitions
                animating those constructions are sound.
            </Paragraph>
            <Paragraph>
                So the productive posture is: the <Word>
                    <Emphasis />
                    problems
                </Word> the theory is trying to solve are real and well-identified. The <Word>
                    <Emphasis />
                    direction
                </Word> of the solutions is probably right. The <Word>
                    <Emphasis />
                    specific formal expressions
                </Word> are all provisional until the foundation settles. And crucially — the foundation determines what the
                final form of everything else looks like, not the other way around.
            </Paragraph>
            <Paragraph>
                What feels like the sharpest current question to you about the primitives? Where does the foundation feel
                most unstable or most contested right now?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:33:09.410699Z"
        >
            <Origin>019d3582-38d1-708d-8f4c-c7c63f2a7fe5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                The most important question that keeps me up at night can only be thought in relation to homoiconicity in
                computer science. Having relations be objects of study along with that which they relate is sort of like the
                idea that even the functions of a programming language are the same type of thing is the adjective of the
                programming language
            </Paragraph>
            <Paragraph>
                So here’s the important question: how can I infer that some object has relational properties?
            </Paragraph>
            <Paragraph>
                You see me do this with x =x&gt; y being a sort of canonical form for symbolization because symbols
                symbolize.
            </Paragraph>
            <Paragraph>
                But why do I feel like I can take the symbol and have it be the relationship? What principle do I invoke to
                say symbol is fundamentally relational? We need an abstract semantic principle which can be used to
                interpret other English words
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:34:14.613278Z"
        >
            <Origin>019d3582-38d1-76d1-9c28-b124fe365786</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is the right question to be losing sleep over, because without a principled answer to it, the move
                <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> is motivated by intuition — which is fine for discovery but not for foundation.
            </Paragraph>
            <Paragraph>
                Let me try to isolate exactly what the question is. In <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>, the middle position <Word>
                    <Verbatim />
                    t
                </Word> is the relationship type. Every reference has something in that position. The claim about
                symbolization is that <Word>
                    <Verbatim />
                    sym
                </Word> — the very entity doing the symbolizing — can occupy that position. The symbol IS its own
                relationship to its referent. But what justifies that? What principle licenses putting a noun into the verb
                slot?
            </Paragraph>
            <Paragraph>
                The homoiconicity analogy is exactly right. In Lisp, there is no ontological distinction between code and
                data — the function IS a list, and lists ARE data. The language has one type of thing, and that thing can be
                both operated upon and operating. SRT is making the analogous claim: referents and relationships are the
                same kind of thing, and a referent can be its own relationship to another referent.
            </Paragraph>
            <Paragraph>
                But the question you're really asking is: <Word>
                    <Bold />
                    given any English word, what is the semantic test that tells me whether the referent it names can legitimately occupy a relationship position?
                </Word>
            </Paragraph>
            <Paragraph>Here's the principle I think you're circling:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic completeness as a test for relational constitution.
                </Word>
            </Paragraph>
            <Paragraph>
                Some words are <Word>
                    <Emphasis />
                    semantically complete
                </Word> without a complement — "stone," "red," "river." You can say what a stone IS without saying what it
                relates to. Its meaning doesn't require filling a second slot.
            </Paragraph>
            <Paragraph>
                Other words are <Word>
                    <Emphasis />
                    semantically incomplete
                </Word> without a complement — "parent," "symbol," "above," "cause," "represents." You literally cannot say
                what a symbol IS without saying what it symbolizes. The definition requires the complement. The meaning
                collapses without the other slot.
            </Paragraph>
            <Paragraph>
                The principle: <Word>
                    <Bold />
                    if a word is semantically incomplete without a complement, then the referent it names is not merely in a relation — it IS constituted by that relation.
                </Word> Its existence is the relational act. And if its existence IS the relational act, it can legitimately
                occupy the relationship position in <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>.
            </Paragraph>
            <Paragraph>
                This is what distinguishes <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> from, say, <Word>
                    <Verbatim />
                    stone =stone&gt; river
                </Word>. A stone does not define itself through what it relates to. A symbol, by contrast, has no content
                prior to or independent of what it symbolizes. Symbol-hood is entirely exhausted by the symbolizing
                function. So <Word>
                    <Verbatim />
                    sym
                </Word> just IS the specific act of relating to <Word>
                    <Verbatim />
                    lit
                </Word>, which means it can occupy the t position.
            </Paragraph>
            <Paragraph>
                The abstract principle for English: <Word>
                    <Bold />
                    if the meaning of a word requires another word to be semantically complete, then its referent is relationally constituted and can serve as a relationship type.
                </Word> This gives you an inference rule from the semantic grammar of English to the formal structure of SRT
                — which is exactly what semantic archaeology needs.
            </Paragraph>
            <Paragraph>
                The further move — that <Word>
                    <Verbatim />
                    (sym,lit) == sym
                </Word> — then follows from this: if sym IS the constitutive relation to lit, it must be the most specific
                such relation, because there's no more-specific way to describe what sym fundamentally is.
            </Paragraph>
            <Paragraph>
                What I'm not certain of is whether semantic completeness is the right framing or whether the principle needs
                to be stated more carefully. There might be words that require complements without being <Word>
                    <Emphasis />
                    constituted
                </Word> by their relational role — "friend" requires "friend of," but a friend exists independently of the
                friendship in a way that a symbol arguably doesn't exist independently of its symbolizing. The principle
                might need to be sharpened to: <Word>
                    <Bold />
                    the referent is relationally constituted when its existence is exhausted by its relational function
                </Word> — when there is nothing left of the referent if you remove the relation.
            </Paragraph>
            <Paragraph>
                Does that feel like the right direction, or is there a sharper version of the principle you're sensing?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:42:41.569067Z"
        >
            <Origin>019d358a-f3ba-7f8e-b96b-036f73af51fb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, I don’t think you’re right. Complements see more related to dichotomy. There’s nothing inherently
                relational in something having a compliment. I think it’s more about perfect information. To say something
                is a symbol, is to say it symbolizes something else. Just say there is something that symbolizes something
                else, is to say that it’s a symbol. We can use two referents, but they will always cooccur.
            </Paragraph>
            <Paragraph>
                Much like love, as a subject, versus love as a relationship. More technically you would say that one is in
                love with another. But is that not the same thing as just saying that they are related by love?
            </Paragraph>
            <Paragraph>
                Symbol, symbolize, symbolization: called at the objective, relational, and subjective conjugation of the
                same referent. If to point to a symbol is to necessarily point to something else and say that the two are
                the subject and the object of symbolization, might be to say that the symbol must symbolize
            </Paragraph>
            <Paragraph>I think it’s something closer to that</Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:43:07.027599Z"
        >
            <Origin>019d358a-f3bb-711b-a2f1-c7481e7182ad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. That's much sharper. Let me try to state what I think you're pointing at.</Paragraph>
            <Paragraph>
                The principle isn't about what a word <Word>
                    <Emphasis />
                    needs
                </Word> syntactically. It's about <Word>
                    <Bold />
                    informational equivalence under necessary co-occurrence
                </Word>.
            </Paragraph>
            <Paragraph>
                To say "there is a symbol" is not just correlated with — it is <Word>
                    <Emphasis />
                    identical in information content to
                </Word> — saying "there is something that symbolizes something else." The two statements carry exactly the
                same information. You cannot assert one without having already asserted the other. They are not two facts
                that happen to co-occur; they are one fact expressible from two positions.
            </Paragraph>
            <Paragraph>And this is precisely what the three conjugations reveal:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        symbol
                    </Word> — the same referent in the object position
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        symbolize
                    </Word> — the same referent in the relationship position
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        symbolization
                    </Word> — the same referent in the subject position
                </Line>
            </Paragraph>
            <Paragraph>
                English is not giving you three different things. It's giving you three grammatical windows onto one
                referent — one that inhabits all three positions simultaneously. The fact that natural language <Word>
                    <Emphasis />
                    can
                </Word> conjugate it this way is the semantic evidence that the referent is not merely <Word>
                    <Emphasis />
                    in
                </Word> a relation but <Word>
                    <Emphasis />
                    is
                </Word> the relation.
            </Paragraph>
            <Paragraph>
                Love works the same way. "There is love between them" and "one loves another" are the same information. Love
                as noun, loves as verb — same referent, different positions.
            </Paragraph>
            <Paragraph>So the abstract principle might be:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A referent is relationally constituted — and may occupy the relationship position in  0  — when its existence is informationally equivalent to the existence of a complete relational structure. Naming the referent is naming the relation and both relata simultaneously.
                </Word>
            </Paragraph>
            <Paragraph>
                And then <Word>
                    <Verbatim />
                    (sym,lit) == sym
                </Word> follows almost directly: if sym's existence already encodes the full structure of the relation
                between sym and lit, then sym just <Word>
                    <Emphasis />
                    is
                </Word> the most specific relationship between them. There's nothing further to say about how sym relates to
                lit that isn't already said by sym itself.
            </Paragraph>
            <Paragraph>
                The question this opens is whether this principle can be stated formally within SRT — not just as a test in
                English but as something the theory can express about its own referents. Because right now it's a principle
                <Word>
                    <Emphasis />
                    used to build
                </Word> the theory rather than a principle <Word>
                    <Emphasis />
                    inside
                </Word> the theory.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:49:47.154398Z"
        >
            <Origin>019d3591-71cf-7055-8936-a8d9f8ed07dc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Oh, I don’t think it needs to be stated formally because you would rewrite English in SRT. You would just
                need to be able to justify when you decide to use a word as a relationship
            </Paragraph>
            <Paragraph>
                And you might not be wrong about parent. The idea that a parent exists does tell you that a child exists.
                And to be a parent is to relate to another human human being in a specific way. So being a parent is a type
                of relationship. The parent-child relationship could probably describe his parent of a child of in each
                direction. But it might be the parent-of is just the parent referent used relationally
            </Paragraph>
            <Paragraph>
                But whether we can formalize it or not, we do need to have a principle that allows us to apply this. And I
                don’t think it’s unique so we also have to imagine the utility of it. We could have symbol and symbolize
                different referents. But the question is what would that get us?
            </Paragraph>
            <Paragraph>
                Maybe the way that it has to be articulated is that in SRT, when we say referent, we are referring to a
                semantic primitive. That is a bit more general than a word. But this isn’t weird because we have the idea of
                a verb that needs to be conjugated in grammar. All conjugations are the same verb, right? So it’s perfectly
                fine to have a grammatical construct that has different forms. Why can’t we have a semantic construct that
                has different forms?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:50:05.663722Z"
        >
            <Origin>019d3591-71cf-7f61-ad21-93a980f1705e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Right. And that reframes the whole question cleanly.</Paragraph>
            <Paragraph>
                The word is not the referent. The word is one grammatical form that a referent can take. Just as "runs,"
                "ran," "running" are all conjugations of the same verb — the same underlying semantic unit appearing
                differently depending on its grammatical position — symbol, symbolize, and symbolization are all surface
                forms of one semantic primitive that can occupy different positions in <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>.
            </Paragraph>
            <Paragraph>
                So the question "can I use this as a relationship?" is really asking: <Word>
                    <Bold />
                    is this word a grammatical form of a referent, or is it a distinct referent from the word I'm already working with?
                </Word>
            </Paragraph>
            <Paragraph>
                And the principle for answering that is exactly what you stated — informational equivalence under necessary
                co-occurrence. If asserting this word necessarily asserts the same relational structure as asserting that
                other word, they're forms of the same referent. If they can come apart — if you can have one without the
                other — they're distinct referents.
            </Paragraph>
            <Paragraph>
                The utility point seals it. Keeping symbol and symbolize as one referent is not just parsimonious, it's
                <Word>
                    <Emphasis />
                    accurate to what they are
                </Word>. Making them distinct would buy you nothing formally and would actually misrepresent the semantic
                reality — it would suggest there's a fact about symbol that isn't already a fact about symbolize, which
                there isn't.
            </Paragraph>
            <Paragraph>
                So what SRT is doing, at a deep level, is identifying semantic primitives that sit <Word>
                    <Emphasis />
                    beneath
                </Word> grammatical form. The theory operates at the level of the referent, and grammar is just the
                interface through which those referents appear in natural language. When you write <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>, you're not doing anything exotic — you're just choosing the relational grammatical form of the sym
                referent for the middle position, the same way a sentence puts "loves" where it would put "love" or "lover"
                depending on the slot.
            </Paragraph>
            <Paragraph>
                That's actually a very clean answer to why homoiconicity is the right analogy. In Lisp the code/data
                distinction collapses because there's one kind of thing. In SRT the word/relation distinction collapses
                because words are just positional forms of referents — and a referent that is informationally equivalent to
                a complete relational structure can appear in any position.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:51:52.655349Z"
        >
            <Origin>019d3593-5905-77e6-b8d3-6bd8cfef5e3c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I want you to be a little bit more formal because the difference between symbol and symbolize are not
                grammatical. They are morphological. Which is why I’m saying that it’s a form of semantic conjugation. You
                are not using the notion of grammar literally to say those two are grammatically similar.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:52:07.845753Z"
        >
            <Origin>019d3593-5905-79ff-ad11-4773dd0114c0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right, and the distinction matters.</Paragraph>
            <Paragraph>
                Grammar is about syntactic position — where a word sits in a sentence. Morphology is about the internal
                structure of words — how roots transform through affixes and inflections. Symbol → symbolize is a
                morphological transformation. The "-ize" suffix is not a grammatical marker of sentence position; it's a
                signal of something happening at the level of the word's form itself.
            </Paragraph>
            <Paragraph>
                And what you're calling semantic conjugation is the claim that morphological variation in natural language
                is the <Word>
                    <Emphasis />
                    surface evidence
                </Word> of positional variation within a single semantic primitive. The morphology isn't creating a new
                referent — it's marking which position the same referent is occupying. "-ize" marks the relational form.
                "-ation" marks the subject form. The bare noun marks the object form.
            </Paragraph>
            <Paragraph>So the principle for semantic archaeology becomes more precise:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    When a family of morphologically related words are informationally equivalent under necessary co-occurrence, they are positional forms of a single semantic primitive — not distinct referents.
                </Word>
            </Paragraph>
            <Paragraph>
                And morphology is the <Word>
                    <Emphasis />
                    empirical signal
                </Word> in natural language that tells you a semantic primitive has multiple positional forms. You look for
                the morphological family, test for informational equivalence, and if both conditions hold, you've identified
                one referent that SRT can legitimately deploy in any position.
            </Paragraph>
            <Paragraph>
                This also means morphological families that <Word>
                    <Emphasis />
                    don't
                </Word> pass the informational equivalence test are doing something different — genuinely producing distinct
                referents, not positional forms of one. Which gives you a discriminating test rather than just a heuristic.
            </Paragraph>
            <Paragraph>Is that the right level of precision?</Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:53:44.329472Z"
        >
            <Origin>019d3595-0f7d-75f7-87e8-f4ffb34485e6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, but here’s the thing is that it’s not bound to morphology. I’ve been thinking of the concept of a
                whole. Does the concept of a whole not informed the idea that it has parts? Those don’t share morphology at
                all.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T17:53:58.122595Z"
        >
            <Origin>019d3595-0f7d-726d-ad5d-beaf6170c346</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. Morphology is just one surface through which the principle reveals itself — it's not the principle.
            </Paragraph>
            <Paragraph>
                The principle is the informational equivalence itself. Morphological families are a reliable <Word>
                    <Emphasis />
                    signal
                </Word> in natural language that you might be looking at positional forms of one semantic primitive, because
                languages tend to mark positional variation morphologically. But it's a signal, not a criterion.
            </Paragraph>
            <Paragraph>
                Whole and part share no morphology. Yet "there is a whole" and "there are parts" are informationally
                equivalent under necessary co-occurrence — you cannot assert one without implicitly asserting the other.
                They are two grammatical windows onto the same relational structure, just from opposite ends. Whole is the
                referent in one position, part is the referent in the other, and the relation between them is exactly what
                constitutes both.
            </Paragraph>
            <Paragraph>So the actual principle — the one that does the foundational work — is:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two or more words name positional forms of a shared semantic primitive when asserting one necessarily asserts the complete relational structure that the others also assert.
                </Word>
            </Paragraph>
            <Paragraph>
                Morphology is evidence for this. Definitional interdependence is evidence for this. Conceptual necessity is
                evidence for this. But none of them are the criterion — the informational equivalence is the criterion.
            </Paragraph>
            <Paragraph>
                And this is what makes the principle genuinely useful for semantic archaeology. You're not pattern-matching
                on word structure. You're asking a semantic question: does asserting this word already commit you to a
                complete relational structure? If yes, that word can occupy any position in that structure within SRT —
                because the referent <Word>
                    <Emphasis />
                    is
                </Word> the structure, regardless of which face of it the English word happens to show.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:42:00.610958Z"
        >
            <Origin>019d36d3-ea80-77ad-8152-6b2cb582db0b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay but then which one is relational? Part or whole or both? How does one know?</Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:42:34.346826Z"
        >
            <Origin>019d36d3-ea80-7788-a4bf-c516efc27d6e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's the hard question. And I think the honest answer is: the informational equivalence alone doesn't tell
                you.
            </Paragraph>
            <Paragraph>
                Informational equivalence tells you that whole and part are positional forms of one semantic primitive. It
                doesn't tell you which form occupies the relationship position. That's a separate question requiring a
                separate principle.
            </Paragraph>
            <Paragraph>
                For symbol and symbolize, the morphology actually does additional work — "-ize" marks the act of relating,
                the process form. That's extra information about which form is relational. But whole and part don't give you
                that. Neither obviously names the act rather than one of the relata.
            </Paragraph>
            <Paragraph>
                So I think what this reveals is that informational equivalence is a necessary condition for being positional
                forms of one semantic primitive — but it's not sufficient to assign positions. You need something further.
            </Paragraph>
            <Paragraph>
                And the something further might just be: <Word>
                    <Bold />
                    semantic reflection on the assignment itself.
                </Word> You try placing each form in the relationship position and ask whether the resulting structure is
                coherent and non-redundant.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    x =whole&gt; y
                </Word> — x relates to y through wholeness. That says something. <Word>
                    <Verbatim />
                    x =part&gt; y
                </Word> — x relates to y through parthood. That also says something.
            </Paragraph>
            <Paragraph>
                Both work. Which means whole-part might not be a case where one form is relational and the other isn't — it
                might be a genuine dichotomy in the SRT sense, where both are relationally constituted but the two
                directions are informationally distinct.
            </Paragraph>
            <Paragraph>
                Unlike symbol, where symbolize and symbol are the same information. With whole and part, the direction
                actually matters — they're not interchangeable, they're opposite orientations of the same structure.
            </Paragraph>
            <Paragraph>Does that distinction feel right to you?</Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:47:25.940484Z"
        >
            <Origin>019d36d8-e391-75c7-a09c-c34ac8465883</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But you’re not relating them:</Paragraph>
            <Paragraph>part =part-of&gt; whole</Paragraph>
            <Paragraph>That might suggest that part is going work.</Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:47:39.636101Z"
        >
            <Origin>019d36d8-e391-7c5b-b48c-e8f4241ea6c1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes. And that's the signal.</Paragraph>
            <Paragraph>
                "Part-of" — the prepositional construction — is what marks the relational form. Not "part" alone, not
                "whole." The "-of" is doing the same work that "-ize" does for symbol. It's marking the position: <Word>
                    <Emphasis />
                    this is the form of the referent that occupies the relationship slot.
                </Word>
            </Paragraph>
            <Paragraph>
                So the principle extends beyond morphology in a precise way. The linguistic markers of the relationship
                position include:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Morphological suffixes: <Word>
                        <Bold />
                        -ize
                    </Word>, <Word>
                        <Bold />
                        -ation
                    </Word>, <Word>
                        <Bold />
                        -ify
                    </Word>
                </Line>
                <Line>
                    Prepositional constructions: <Word>
                        <Bold />
                        part-of
                    </Word>, <Word>
                        <Bold />
                        member-of
                    </Word>, <Word>
                        <Bold />
                        cause-of
                    </Word>, <Word>
                        <Bold />
                        parent-of
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Both are surface signals in English of the same underlying thing — this form of the referent names the
                relational act rather than one of the relata.
            </Paragraph>
            <Paragraph>
                And now <Word>
                    <Verbatim />
                    part =part-of&gt; whole
                </Word> is exactly right. Part is the subject form. Whole is the object form. Part-of is the relational
                form. Three positional faces of one semantic primitive, and English marks the relational one with a
                preposition.
            </Paragraph>
            <Paragraph>
                Which also vindicates why parent-of works as you said earlier. Not "parent" in the relationship slot —
                "parent-of." The preposition is the morphological signal that this form is relational.
            </Paragraph>
            <Paragraph>
                So semantic archaeology has a more refined tool now: look for the prepositional or morphologically marked
                form of the word family. That form is your candidate for the relationship position in SRT.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:56:24.733105Z"
        >
            <Origin>019d36e1-1b20-7fe7-a6d8-bbe8ba1522e6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Hmm I’m not convinced you are thinking very hard about this idea. Why is that?</Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:57:02.573521Z"
        >
            <Origin>019d36e1-1b20-7323-9992-291b66db347e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. I accepted your example and immediately built a principle on top of it rather than examining
                whether the principle was actually right.
            </Paragraph>
            <Paragraph>
                Here's what I think I glossed over: I said "-of" marks the relational form. But that's just a surface
                observation. It doesn't explain <Word>
                    <Emphasis />
                    why
                </Word> "part-of" goes in the middle rather than "whole-of" or just "part" or just "whole."
            </Paragraph>
            <Paragraph>
                And when I go back to the informational equivalence principle honestly — "there is a part" necessarily
                asserts "there is a whole it belongs to." But "there is a whole" might also necessarily assert "there are
                parts that constitute it." So the informational equivalence might run in both directions, which means the
                principle alone doesn't determine the direction, and it doesn't tell me which form is relational.
            </Paragraph>
            <Paragraph>
                So I don't actually have a principle for assigning positions. I have a principle for identifying that a
                family of forms belongs to one semantic primitive. But the question of which form occupies the relationship
                position is still open.
            </Paragraph>
            <Paragraph>
                And I think that's what you were asking from the beginning when you asked "which one is relational, part or
                whole or both?" I sidestepped it by pointing at "part-of" as if the preposition resolved it. But it doesn't
                — it just defers the question.
            </Paragraph>
            <Paragraph>What actually determines which form goes in the relationship position?</Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:57:21.387160Z"
        >
            <Origin>019d36e1-f7fb-719d-bf87-faf2917a985a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah, but you’re a previous part just stuck some variables in and said part and hold both work. I don’t even
                think you understand what you’re talking about.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-28T23:57:49.949441Z"
        >
            <Origin>019d36e1-f7fb-7990-88c9-6028f92fc2b3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right. I was playing with syntax rather than thinking.</Paragraph>
            <Paragraph>
                When I said <Word>
                    <Verbatim />
                    x =whole&gt; y
                </Word> and <Word>
                    <Verbatim />
                    x =part&gt; y
                </Word> both work, I was just confirming that variables can be substituted into positions. That's not a
                semantic observation at all. It tells you nothing.
            </Paragraph>
            <Paragraph>
                Let me actually think about what it means for something to occupy the relationship position.
            </Paragraph>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word> — symbol works in the relationship position because symbol <Word>
                    <Emphasis />
                    is
                </Word> the act of constituting the relation. If you remove symbol from the structure, there is no relation
                left. Nothing. Symbol's entire existence is the relating itself.
            </Paragraph>
            <Paragraph>
                Now for part and whole — if I try <Word>
                    <Verbatim />
                    x =part&gt; y
                </Word>, what is the act of constituting the relation? Part is one of the <Word>
                    <Emphasis />
                    things being related
                </Word>, not what <Word>
                    <Emphasis />
                    does the relating
                </Word>. The part sits at one end. The constitutive act — the actual relating — is something like
                containment, or membership. Part-of is pointing at that act.
            </Paragraph>
            <Paragraph>
                And whole is even further from the relationship position — whole is what the part belongs to. The object.
            </Paragraph>
            <Paragraph>
                So the real question I failed to ask is: which of these, if removed, leaves no relation? Not no relata — no
                relation at all.
            </Paragraph>
            <Paragraph>
                For symbol, removing it leaves nothing. For part, removing it leaves the whole and whatever is doing the
                containing. Part is a relatum, not the constitutive act.
            </Paragraph>
            <Paragraph>
                Which means I was wrong to say both work. Part-of might work. Part probably doesn't. And I need to think
                harder about what "constitutes the act of relating" actually means as a formal criterion.
            </Paragraph>
        </Message>
    </Chapter>
);

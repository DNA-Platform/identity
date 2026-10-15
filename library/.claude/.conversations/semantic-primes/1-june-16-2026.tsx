import { Bold, Chapter, Code, Date, Emphasis, Equation, Line, List, Math, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T08:57:49.227595Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you look up the research on semantic primes? I heard that they were 65 of them. And can you put them in
                an editable artifacts where you describe the research that summarize them? Include the categories that they
                were presented in too
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T08:59:28.303806Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll look up the current research on semantic primes for you.</Paragraph>
            <Action>Searched the web for “semantic primes Wierzbicka NSM list number”</Action>
            <Paragraph>
                Good, I have a solid picture. Let me get the authoritative category breakdown so the artifact is accurate.
                I'll fetch the Casey Keith page which claims to have the full categorized inventory, and cross-check against
                the NSM chart.
            </Paragraph>
            <Action>Fetched https://caseykeith.me/semantic-primes/</Action>
            <Paragraph>
                I have what I need. The figure you heard is right — the count stabilized at <Word>
                    <Bold />
                    65 primes in 2014
                </Word> and has held since. One thing worth flagging up front: published charts sometimes tally to 63
                because of how a couple of categories get collapsed, but 65 is the agreed number. I'll use the authoritative
                Goddard &amp; Wierzbicka 2014 grouping, which sums cleanly to 65, and note where the simpler web versions
                diverge.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/semantic_primes.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Done. A few things worth knowing about what I found:</Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    65
                </Word> figure is correct and well-grounded — it's been the stable, agreed-upon number since 2014 (Goddard
                &amp; Wierzbicka), up from Wierzbicka's original 14 in 1972. The one caveat is that you'll encounter charts
                that count to 63; that gap is almost entirely in how the <Word>
                    <Emphasis />
                    existence/possession
                </Word> category is collapsed. The simplified versions list <Word>
                    <Verbatim />
                    BE (THERE IS)
                </Word> and <Word>
                    <Verbatim />
                    HAVE
                </Word>; the authoritative 2014 inventory splits it into four (<Word>
                    <Verbatim />
                    BE somewhere
                </Word>, <Word>
                    <Verbatim />
                    THERE IS
                </Word>, <Word>
                    <Verbatim />
                    BE someone/something
                </Word>, <Word>
                    <Verbatim />
                    (IS) MINE
                </Word>). I used the 2014 grouping, which sums cleanly to 65, and flagged the discrepancy in the doc so
                you're not blindsided if you cross-reference a different source.
            </Paragraph>
            <Paragraph>
                The categorization is "onto-syntactic" — primes grouped by grammatical/conceptual role rather than topic —
                which may be the more interesting part for how you think about reference. The file is editable markdown, so
                you can restructure the categories or add columns (e.g., cross-linguistic exponents) as needed.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:09:40.951341Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you find the original 14 proposed??</Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:10:58.568168Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Wierzbicka 1972 Semantic Primitives original 14 list elements”</Action>
            <Paragraph>
                The sources confirm the 14 but none of them list the actual members. Let me find the specific list.
            </Paragraph>
            <Action>
                Searched the web for “Wierzbicka 1972 fourteen primitives "I" "you" "want" "think" "imagine" "world" "this"”
            </Action>
            <Paragraph>
                One source notes the count is sometimes given as thirteen, which is a known wrinkle. But I still need the
                actual members. Let me find an explicit enumeration.
            </Paragraph>
            <Action>
                Searched the web for “Wierzbicka 1972 original primitives list "want" "don't want" "feel" "think of"
                "imagine" "say" "become" "part of" "world"”
            </Action>
            <Paragraph>
                I found it. The original set is documented — and there's a genuinely interesting wrinkle in the count that's
                worth capturing. Let me add this to the document so it lives alongside the rest.
            </Paragraph>
            <Action>Read /mnt/user-data/outputs/semantic_primes.md</Action>
            <Action>Read /mnt/user-data/outputs/semantic_primes.md</Action>
            <Action>Edited /mnt/user-data/outputs/semantic_primes.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Added the original 1972 set as its own section in the document. The short version:</Paragraph>
            <Paragraph>
                The first set had <Word>
                    <Bold />
                    14 elements
                </Word>: I, YOU, SOMEONE, SOMETHING/THING, WORLD, THIS, WANT, DON'T WANT (which Wierzbicka originally coined
                as "diswant"), FEEL, THINK (OF), IMAGINE, SAY, BECOME, and BE A PART (OF).
            </Paragraph>
            <Paragraph>Two details I'd flag, since they bear on how you think about reference:</Paragraph>
            <Paragraph>
                The count is reported as both <Word>
                    <Bold />
                    13 and 14
                </Word> in the literature — including by Wierzbicka herself in different papers. The instability comes
                almost entirely from whether <Word>
                    <Verbatim />
                    WANT
                </Word> and <Word>
                    <Verbatim />
                    DON'T WANT
                </Word> are one prime or two. She treated them as separate in 1972, the field collapsed them in the 1990s,
                and <Word>
                    <Verbatim />
                    DON'T WANT
                </Word> was formally <Word>
                    <Emphasis />
                    restored
                </Word> as distinct only in 2014. That's a nice example of a primitive's status being a live, revisable
                claim rather than a fixed fact — the inventory has a history of supersession, not just accretion.
            </Paragraph>
            <Paragraph>
                The casualties are also telling: <Word>
                    <Verbatim />
                    IMAGINE
                </Word>, <Word>
                    <Verbatim />
                    BECOME
                </Word>, and <Word>
                    <Verbatim />
                    WORLD
                </Word> didn't survive cross-linguistic testing. <Word>
                    <Verbatim />
                    WORLD
                </Word> got absorbed by the spatial primes (<Word>
                    <Verbatim />
                    WHERE~PLACE
                </Word>, <Word>
                    <Verbatim />
                    HERE
                </Word>). Eleven of the fourteen are still in the modern 65, which Wierzbicka reads as vindication of the
                early intuitions.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:12:44.293364Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay how does she suggest that these things can be used to express everything else. What production rule
                gets you from those primitives to:
            </Paragraph>
            <Paragraph>I need to buy and aardvark as a pet</Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:14:02.070705Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's the thing worth flagging first, because it reframes the question: NSM has no production rule in the
                generative sense. There's no <Word>
                    <Verbatim />
                    S → NP VP
                </Word>–style derivation that <Word>
                    <Emphasis />
                    outputs
                </Word> "I need to buy an aardvark as a pet" from the primes. Wierzbicka built NSM explicitly <Word>
                    <Emphasis />
                    against
                </Word> that picture — her early fight was with Chomsky's autonomous syntax, the idea that you generate
                surface strings from unobservable underlying structures. So if you go looking for a rewrite procedure that
                manufactures the sentence, you won't find one, and that absence is a design choice, not a gap.
            </Paragraph>
            <Paragraph>
                What NSM offers instead runs in the opposite direction: <Word>
                    <Bold />
                    reductive paraphrase
                </Word> (called <Word>
                    <Emphasis />
                    explication
                </Word>). You don't generate the complex expression from primes — you <Word>
                    <Emphasis />
                    decompose
                </Word> it into a paraphrase stated entirely in primes, and the claim is that the paraphrase is <Word>
                    <Bold />
                    substitutable
                </Word> for the original (same truth conditions, no circularity, translatable into any language's
                exponents). "Productive" in the NSM literature means the primes are <Word>
                    <Emphasis />
                    expressively complete
                </Word> — they can paraphrase anything — not that there's an algorithm that derives sentences. The
                decomposition is done by hand, by the analyst. (That manual character is exactly why the recent papers on
                using LLMs to <Word>
                    <Emphasis />
                    generate
                </Word> explications are notable — it had never been automatable.)
            </Paragraph>
            <Paragraph>Three pieces do the actual work:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. The universal grammar — combinatorial frames, not rewrite rules.
                </Word> Each prime comes with a small set of canonical contexts it's allowed to appear in. <Word>
                    <Verbatim />
                    SOMEONE
                </Word> can <Word>
                    <Verbatim />
                    DO
                </Word> something; <Word>
                    <Verbatim />
                    SOMEONE
                </Word> can <Word>
                    <Verbatim />
                    WANT
                </Word> to do something; <Word>
                    <Verbatim />
                    SOMETHING
                </Word> can <Word>
                    <Verbatim />
                    HAPPEN
                </Word>; <Word>
                    <Verbatim />
                    SOMETHING
                </Word> can be <Word>
                    <Verbatim />
                    GOOD
                </Word> or <Word>
                    <Verbatim />
                    BAD
                </Word>. The "grammar" is just the set of well-formed prime combinations — and crucially, it's the syntax of
                the <Word>
                    <Emphasis />
                    metalanguage itself
                </Word>, not of English. It also forbids constructions: no relative clauses (<Word>
                    <Verbatim />
                    someone who did this
                </Word>), no comparatives, and primes don't get illegitimate valencies (<Word>
                    <Verbatim />
                    FEEL
                </Word> has no "about," so <Word>
                    <Verbatim />
                    feel bad about X
                </Word> is disallowed NSM).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Semantic molecules — the layering trick.
                </Word> You cannot in practice build "aardvark" straight out of <Word>
                    <Verbatim />
                    I, DO, KIND, PART…
                </Word>; the explication would be monstrous or impossible. So NSM permits <Word>
                    <Bold />
                    molecules
                </Word>: intermediate meanings (marked <Word>
                    <Verbatim />
                    &#91;m&#93;
                </Word>) that are themselves explicated in primes and then function as single units higher up. <Word>
                    <Verbatim />
                    hands &#91;m&#93;
                </Word>, <Word>
                    <Verbatim />
                    water &#91;m&#93;
                </Word>, <Word>
                    <Verbatim />
                    long &#91;m&#93;
                </Word>, <Word>
                    <Verbatim />
                    creature &#91;m&#93;
                </Word>, <Word>
                    <Verbatim />
                    money &#91;m&#93;
                </Word>. This gives a hierarchy — primes → molecules → richer molecules → words — and it's where most of
                your example's complexity actually lives.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. The adequacy test.
                </Word> A good explication can be swapped in for the word with meaning preserved, uses only simpler terms,
                and survives translation into any tested language.
            </Paragraph>
            <Paragraph>
                Now the example. Almost every content word in your sentence is a molecule, not a prime — <Word>
                    <Verbatim />
                    need
                </Word>, <Word>
                    <Verbatim />
                    buy
                </Word>, <Word>
                    <Verbatim />
                    aardvark
                </Word>, and <Word>
                    <Verbatim />
                    pet
                </Word> are all deep. Here's an illustrative explication (my construction in NSM style — there's no
                canonical published "aardvark" explication, but this follows the conventions faithfully):
            </Paragraph>
            <Code>
                {"I need to buy an aardvark as a pet  ≈\n\nI want to have something\nthis something is a creature [m] of one kind  ── \"an aardvark\""}
            </Code>
        </Message>
        <Message
            at="2026-06-16T09:17:37.392763Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Stop. You have imposed a model of generation that I did NOT impose and you are correcting me
            </Paragraph>
            <Paragraph>
                Primes compose to make all numbers. You know this. They know this. They have a way of reasoning that those
                are primes. I gave you an example sentence to use as research to figure out how whatever that sentence means
                is composite relative to these primes.
            </Paragraph>
            <Paragraph>
                So you YOU made the mistake that this a Chomsky generative grammar than feel free to write notes to yourself
                correcting your first thoughts. I am simply asking how they define prime in the generative sense.
            </Paragraph>
            <Paragraph>Like: prod&#91;1...N&#93;((p_n)^(k_n))</Paragraph>
            <Paragraph>
                Boom, each natural number has k_1, ..., k_n numbers such that it can be generated from that equations. Thats
                how we make numbers from primes. I gave you a sentence with complex and dervived semantic concepts. How is
                it related to these primes according to the researchers???
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:18:12.270279Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and the correction lands. I heard "production rule" and pattern-matched to Chomsky — exactly
                the framework Wierzbicka is <Word>
                    <Emphasis />
                    against
                </Word> — when your analogy was arithmetic, not generative syntax. The prime factorization picture is the
                right one to interrogate: a number isn't "generated by a rewrite rule," it <Word>
                    <Emphasis />
                    is
                </Word> its decomposition into primes with multiplicities. You're asking what the corresponding
                decomposition relation is for NSM — what plays the role of <Math>{"\\prod p_n^{k_n}"}</Math>. Let me answer
                that and not relitigate the framing.
            </Paragraph>
            <Paragraph>
                The honest answer about how <Word>
                    <Emphasis />
                    they
                </Word> define it: the composition operation is <Word>
                    <Bold />
                    reductive paraphrase
                </Word>, and the structural claim is that a complex meaning <Word>
                    <Emphasis />
                    is
                </Word> a configuration of primes — but the algebra is <Word>
                    <Bold />
                    not
                </Word> free commutative multiplication. It's closer to a typed/ordered composition with a specific
                structure. Here's where the analogy holds and where it breaks, stated precisely, because the breakages are
                the actual content of your question.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it matches arithmetic.
                </Word> The primes are the irreducible factors. Wierzbicka's claim of <Word>
                    <Emphasis />
                    expressive completeness
                </Word> is the exact analogue of "every natural number factors into primes": every meaning explicates into a
                configuration of the 65. And like primality, the test for primehood is indecomposability — a prime is one
                that cannot be paraphrased in simpler terms without circularity, just as <Math>{"p"}</Math> is prime when it
                has no nontrivial factorization.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it breaks, factor 1 — composition is non-commutative and structured, not a multiset.
                </Word> In <Math>{"\\prod p_n^{k_n}"}</Math> order is nothing; <Math>{"2\\cdot3 = 3\\cdot2"}</Math>. In NSM
                the combination is governed by the <Word>
                    <Bold />
                    canonical syntax
                </Word>: each prime carries a small set of licensed argument frames, and meaning depends on <Word>
                    <Emphasis />
                    which prime fills which slot
                </Word>. <Word>
                    <Verbatim />
                    SOMEONE DO SOMETHING
                </Word> and <Word>
                    <Verbatim />
                    SOMETHING DO SOMEONE
                </Word> are not the same configuration. So the operation isn't multiplication of a multiset of factors —
                it's substitution into typed valency slots. The right algebraic picture is something like terms in a free
                algebra over a typed signature, not exponents over a commutative monoid.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where it breaks, factor 2 — and this is the one that matters most for your sentence — the decomposition is not flat. It's layered through molecules.
                </Word> This is the real answer to "how is <Word>
                    <Emphasis />
                    aardvark
                </Word> related to the primes." A number factors directly into primes in one level. A complex word does
                <Word>
                    <Bold />
                    not
                </Word> factor directly into the 65 primes in one level. It factors into <Word>
                    <Bold />
                    semantic molecules
                </Word>, which themselves factor into primes (or into further molecules). So the structure is a <Word>
                    <Emphasis />
                    tower
                </Word>, not a single product:
            </Paragraph>
            <Paragraph>
                <Equation>{"\\text{word} \\;\\to\\; \\{\\text{molecules}\\}\\;\\to\\;\\{\\text{simpler molecules}\\}\\;\\to\\;\\cdots\\;\\to\\;\\{\\text{primes}\\}"}</Equation>
            </Paragraph>
            <Paragraph>
                A molecule like <Word>
                    <Verbatim />
                    creature &#91;m&#93;
                </Word> or <Word>
                    <Verbatim />
                    money &#91;m&#93;
                </Word> is a packaged sub-explication that, once built, functions as a single unit at the next level up. The
                bracket notation <Word>
                    <Verbatim />
                    &#91;m&#93;
                </Word> is precisely a marker that says "this term is non-prime but has been licensed as a reusable
                intermediate — its own factorization is stored elsewhere." This is the part with no arithmetic analogue:
                it's as if, to factor a large number, you were <Word>
                    <Emphasis />
                    required
                </Word> to first define composite "intermediate factors" and build up in stages, because direct
                factorization into primes is computationally/expressively unmanageable. NSM makes that layering obligatory
                and explicit rather than optional.
            </Paragraph>
            <Paragraph>
                So your sentence relates to the primes like this — read it as a factorization tree, where leaves are primes
                and internal nodes are molecules:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        I
                    </Word> — prime (leaf).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        need to
                    </Word> — a configuration over <Word>
                        <Verbatim />
                        WANT
                    </Word>, <Word>
                        <Verbatim />
                        IF NOT
                    </Word>, <Word>
                        <Verbatim />
                        BAD/CAN'T
                    </Word>: roughly <Word>
                        <Emphasis />
                        I want this; if this doesn't happen, something bad will happen / I can't do other things I want
                    </Word>. Reduces to primes directly, no molecule needed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        buy
                    </Word> — molecule. <Word>
                        <Verbatim />
                        buy &#91;m&#93;
                    </Word> explicates over <Word>
                        <Verbatim />
                        money &#91;m&#93;
                    </Word> (itself a molecule), <Word>
                        <Verbatim />
                        GIVE
                    </Word>-type transfer (<Word>
                        <Verbatim />
                        SOMEONE GIVE SOMETHING TO SOMEONE
                    </Word>), <Word>
                        <Verbatim />
                        HAVE
                    </Word>, <Word>
                        <Verbatim />
                        WANT
                    </Word>, <Word>
                        <Verbatim />
                        BECAUSE
                    </Word>. So: <Word>
                        <Emphasis />
                        I give money to someone, this someone gives the thing to me, now I have it.
                    </Word> Two molecule-levels deep before bottoming out in primes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        an aardvark
                    </Word> — molecule, and the deepest branch. <Word>
                        <Verbatim />
                        aardvark &#91;m&#93;
                    </Word> → <Word>
                        <Verbatim />
                        animal/creature &#91;m&#93;
                    </Word> → primes. The species-specific content (<Word>
                        <Verbatim />
                        LIVING
                    </Word>, <Word>
                        <Verbatim />
                        BODY
                    </Word>, <Word>
                        <Verbatim />
                        KIND
                    </Word>, <Word>
                        <Verbatim />
                        BIG/SMALL
                    </Word>, parts via <Word>
                        <Verbatim />
                        PART
                    </Word>, etc.) sits inside the <Word>
                        <Verbatim />
                        creature
                    </Word> molecule and its sub-molecules. NSM does <Word>
                        <Emphasis />
                        not
                    </Word> try to bottom out "aardvark" into 65 primes in one shot — that's the whole point of the molecule
                    device.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        as a pet
                    </Word> — molecule-ish configuration: <Word>
                        <Verbatim />
                        creature &#91;m&#93;
                    </Word> that <Word>
                        <Emphasis />
                        lives WHERE I live
                    </Word>, that I <Word>
                        <Verbatim />
                        WANT
                    </Word> to be near, that I <Word>
                        <Verbatim />
                        DO
                    </Word> good things for (<Word>
                        <Verbatim />
                        feed &#91;m&#93;
                    </Word>, <Word>
                        <Verbatim />
                        look after &#91;m&#93;
                    </Word>).
                </Line>
            </Paragraph>
            <Paragraph>
                The "production rule," then, in their terms, is the single schema: <Word>
                    <Bold />
                    a meaning is well-formed iff it can be rewritten by reductive paraphrase into licensed configurations of primes-and-molecules, terminating in primes, using only the canonical syntactic frames.
                </Word> That's the closest thing to <Math>{"\\prod p_n^{k_n}"}</Math> they offer — but it's a <Word>
                    <Emphasis />
                    terminating typed rewrite into a layered tower
                </Word>, and the multiplicities aren't exponents on commuting factors, they're occurrences of primes in
                argument positions.
            </Paragraph>
            <Paragraph>
                One genuinely open seam, which I think is what your instinct was circling: NSM has never given a formal
                account of the <Word>
                    <Emphasis />
                    uniqueness
                </Word> of the factorization. Arithmetic has the fundamental theorem — factorization into primes is unique.
                NSM has no analogous theorem; two analysts can produce different explications of the same word, and there's
                no proof that a canonical normal form exists. The decomposition is empirically constrained
                (substitutability, cross-linguistic survival) but not algebraically pinned down. If you wanted to push the
                prime-factorization analogy to its limit, <Word>
                    <Emphasis />
                    that's
                </Word> the missing piece — a uniqueness/normal-form result for explications.
            </Paragraph>
            <Paragraph>
                Want me to write the aardvark sentence out as a fully explicit factorization tree — every node either a
                prime (leaf) or a molecule with its own sub-explication — so the layering is visible all the way down?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:19:29.096383Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                STOP!!! Arithmetic was a metaphor. Please, just take my sentence and analyze it in this theory. Stop trying
                to put a frame other than theres. I want to know what THEY think about prime. I know its not grammatical -
                its semantic! I know its not arithmetical. The answer lies in reading the research and learning how they
                exclude something. There is some exclusion procedure that can explain how they define primality. But I need
                to see it perforamed on my example
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:20:33.370013Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. Let me stop framing and go read how they actually run the test, then perform it on your
                sentence.
            </Paragraph>
            <Action>
                Searched the web for “NSM reductive paraphrase explication method how primes identified indefinability test
                Goddard”
            </Action>
            <Paragraph>
                Got it. I read how they actually do it, and here is the exclusion procedure in their own terms — it's the
                piece I kept stepping over.
            </Paragraph>
            <Paragraph>
                A meaning qualifies as prime only if it survives <Word>
                    <Bold />
                    two filters
                </Word>, and the first one is the exclusion test you're after. To be a plausible NSM prime, a word-meaning
                must be indefinable — ultimately simple — in addition to being well attested across a wide range of
                languages. The operative move is <Word>
                    <Bold />
                    reductive paraphrase
                </Word>: you <Word>
                    <Emphasis />
                    attempt to define the term in simpler words
                </Word>. If you succeed, it's excluded — it was composite. You find the core by semantic experimentation:
                attempting to actually explicate meanings, always aiming to reduce the terms of the explications to the
                smallest possible set. A prime is what's left when every further paraphrase attempt comes back <Word>
                    <Bold />
                    circular
                </Word> — you can only define it using itself or something no simpler.
            </Paragraph>
            <Paragraph>
                Their own worked exclusion is <Word>
                    <Verbatim />
                    eat
                </Word>. A word like <Word>
                    <Emphasis />
                    eat
                </Word> is a non-starter as a prime because it is clearly not undecomposable — it involves doing, mouth,
                etc. — and it is known not to have equivalents in some languages. Both filters reject it: it <Word>
                    <Emphasis />
                    decomposes
                </Word> (filter 1), and it <Word>
                    <Emphasis />
                    isn't universally lexicalized
                </Word> (filter 2). The same applies to many impressionistically basic English items like <Word>
                    <Emphasis />
                    go
                </Word>, <Word>
                    <Emphasis />
                    hot
                </Word>, and <Word>
                    <Emphasis />
                    bird
                </Word>. So "primality" is defined <Word>
                    <Emphasis />
                    negatively
                </Word>: a term is prime iff you <Word>
                    <Bold />
                    cannot
                </Word> paraphrase it without circularity. Everything definable is excluded from the core and pushed down a
                level.
            </Paragraph>
            <Paragraph>
                Now run that procedure on your sentence. I test each unit by trying to paraphrase it; "excluded" means a
                non-circular paraphrase exists, "survives" means every paraphrase loops back on itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    I
                </Word> — Try to define it: "the one saying this," "the speaker now." Every attempt smuggles in an indexical
                that reduces back to <Word>
                    <Emphasis />
                    I
                </Word> itself. Circular. → <Word>
                    <Bold />
                    Survives. Prime:  0 .
                </Word> (This is the <Word>
                    <Emphasis />
                    only
                </Word> token in your sentence that is itself a prime.)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    need (to)
                </Word> — Try to define it: <Word>
                    <Emphasis />
                    I want this; if this does not happen, something bad will happen; I can't not have it.
                </Word> That paraphrase uses no notion as complex as "need." → <Word>
                    <Bold />
                    Excluded.
                </Word> It decomposes directly into a configuration of primes: <Word>
                    <Verbatim />
                    WANT
                </Word>, <Word>
                    <Verbatim />
                    IF
                </Word>, <Word>
                    <Verbatim />
                    NOT
                </Word>, <Word>
                    <Verbatim />
                    HAPPEN
                </Word>, <Word>
                    <Verbatim />
                    BAD
                </Word>, <Word>
                    <Verbatim />
                    CAN
                </Word>. No molecule needed — it bottoms out immediately.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    buy
                </Word> — Try to define it: <Word>
                    <Emphasis />
                    I give money to someone; because of this, this someone gives the thing to me; after this, I have it.
                </Word> Definable, so → <Word>
                    <Bold />
                    Excluded.
                </Word> But notice it doesn't reduce straight to primes: it leans on <Word>
                    <Bold />
                    money
                </Word>, which is itself not prime (money decomposes — people give it for things, etc.). So <Word>
                    <Verbatim />
                    buy
                </Word> is a <Word>
                    <Emphasis />
                    molecule resting on the  1  molecule
                </Word>; its leaves are primes like <Word>
                    <Verbatim />
                    SOMEONE
                </Word>, <Word>
                    <Verbatim />
                    DO/HAPPEN
                </Word>, <Word>
                    <Verbatim />
                    BECAUSE
                </Word>, <Word>
                    <Verbatim />
                    HAVE
                </Word>, <Word>
                    <Verbatim />
                    THING
                </Word>, <Word>
                    <Verbatim />
                    AFTER
                </Word>. One layer deeper than <Word>
                    <Verbatim />
                    need
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    an aardvark
                </Word> — Try to define it: <Word>
                    <Emphasis />
                    a living thing of one kind; this kind of thing has a body like this, lives in places like this…
                </Word> Plainly definable (and encyclopedic), so → <Word>
                    <Bold />
                    Excluded
                </Word> — the deepest branch. It reduces to the molecule <Word>
                    <Verbatim />
                    creature/animal
                </Word>, which <Word>
                    <Emphasis />
                    itself
                </Word> reduces (<Word>
                    <Verbatim />
                    LIVE
                </Word>, <Word>
                    <Verbatim />
                    BODY
                </Word>, <Word>
                    <Verbatim />
                    KIND
                </Word>, <Word>
                    <Verbatim />
                    PART
                </Word>, <Word>
                    <Verbatim />
                    BIG
                </Word>/<Word>
                    <Verbatim />
                    SMALL
                </Word>…). The species-specific content lives inside that molecule, not in the prime core. This is exactly
                why the molecule device exists: you are <Word>
                    <Emphasis />
                    not
                </Word> meant to bottom "aardvark" out into the 65 in one step.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    as a pet
                </Word> — Try to define it: <Word>
                    <Emphasis />
                    a creature someone keeps in the place where this someone lives; this someone wants it to be there, does good things for it.
                </Word> Definable → <Word>
                    <Bold />
                    Excluded.
                </Word> A molecule built on <Word>
                    <Verbatim />
                    creature
                </Word>, with prime leaves <Word>
                    <Verbatim />
                    SOMEONE
                </Word>, <Word>
                    <Verbatim />
                    LIVE
                </Word>, <Word>
                    <Verbatim />
                    WHERE/PLACE
                </Word>, <Word>
                    <Verbatim />
                    WANT
                </Word>, <Word>
                    <Verbatim />
                    GOOD
                </Word>, <Word>
                    <Verbatim />
                    DO
                </Word>, plus a space prime like <Word>
                    <Verbatim />
                    NEAR
                </Word>.
            </Paragraph>
            <Paragraph>
                So the relationship of your sentence to the primes is the <Word>
                    <Bold />
                    residue of the exclusion test
                </Word>: apply reductive paraphrase exhaustively, throw out everything that yields to a non-circular
                definition, and what survives at the leaves is the prime set. For this sentence the survivors are roughly:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    I, WANT, NOT, IF, HAPPEN, BAD, CAN, SOMEONE, SOMETHING/THING, DO, HAVE, BECAUSE, AFTER, GOOD, LIVE, KIND, PART, BODY, WHERE/PLACE, NEAR
                </Word>
            </Paragraph>
            <Paragraph>
                Only <Word>
                    <Verbatim />
                    I
                </Word> survives <Word>
                    <Emphasis />
                    as itself
                </Word>; everything else in the sentence is excluded as definable and decomposes — through one or more
                molecule layers — onto those leaves. The primes are precisely the terms at which the paraphrasing <Word>
                    <Emphasis />
                    has to stop
                </Word>, because the next attempted definition would be circular. That stopping condition — circularity
                under attempted paraphrase — <Word>
                    <Emphasis />
                    is
                </Word> their definition of prime.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:44:07.067019Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m not really understanding your argument of which words of the semantic crimes and exactly how you exclude
                the ones in my sentence because you’re not formally listing the words that are used to build the derivation
                of the way that the word in my sentence is excluded
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T09:45:41.980299Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair. I was naming the prime leaves but not writing out the actual paraphrase and then tagging every word in
                it. Let me do it strictly: for each non-prime word, I give the reductive paraphrase, then enumerate <Word>
                    <Bold />
                    every term in that paraphrase
                </Word> and mark it <Word>
                    <Verbatim />
                    PRIME
                </Word> (with its category in the 65) or <Word>
                    <Verbatim />
                    &#91;m&#93;
                </Word> molecule (which then gets its own reduction until all leaves are primes). The exclusion claim for a
                word <Word>
                    <Emphasis />
                    just is
                </Word> the existence of such a paraphrase built only from strictly simpler terms.
            </Paragraph>
            <Paragraph>
                Two honesty notes: there's no canonical <Word>
                    <Emphasis />
                    published
                </Word> explication of "aardvark," "pet," or "money," so those are my constructions in NSM style, following
                the rules. And I use <Word>
                    <Verbatim />
                    (IS) MINE
                </Word> for possession, not <Word>
                    <Verbatim />
                    HAVE
                </Word> — the 2014 inventory replaced <Word>
                    <Verbatim />
                    HAVE
                </Word> with the possession prime <Word>
                    <Verbatim />
                    (IS) MINE
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The alphabet (what counts as a leaf).
                </Word> Only the 65 primes. Relevant ones here: <Word>
                    <Verbatim />
                    I, SOMEONE, PEOPLE, SOMETHING~THING, BODY
                </Word> (substantives); <Word>
                    <Verbatim />
                    KIND, PART
                </Word>; <Word>
                    <Verbatim />
                    THIS, THE SAME, OTHER~ELSE
                </Word>; <Word>
                    <Verbatim />
                    ONE, MUCH~MANY
                </Word>; <Word>
                    <Verbatim />
                    GOOD, BAD
                </Word>; <Word>
                    <Verbatim />
                    BIG, SMALL
                </Word>; <Word>
                    <Verbatim />
                    WANT, FEEL, SEE, HEAR
                </Word>; <Word>
                    <Verbatim />
                    DO, HAPPEN, MOVE
                </Word>; <Word>
                    <Verbatim />
                    (IS) MINE
                </Word>; <Word>
                    <Verbatim />
                    LIVE, DIE
                </Word>; <Word>
                    <Verbatim />
                    WHEN~TIME, BEFORE, AFTER, A LONG TIME
                </Word>; <Word>
                    <Verbatim />
                    WHERE~PLACE, NEAR
                </Word>; <Word>
                    <Verbatim />
                    NOT, CAN, BECAUSE, IF
                </Word>; <Word>
                    <Verbatim />
                    LIKE~WAY
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The exclusion rule.
                </Word> Word W is <Word>
                    <Emphasis />
                    excluded
                </Word> (non-prime) iff a paraphrase P(W) exists whose every term is strictly simpler than W. W is <Word>
                    <Emphasis />
                    prime
                </Word> iff no such P exists — every attempt reuses W or something no simpler (circular).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> → test: "the one saying this" = <Word>
                    <Verbatim />
                    SAY
                </Word> + <Word>
                    <Verbatim />
                    SOMEONE
                </Word> + <Word>
                    <Verbatim />
                    THIS
                </Word>, but fixing <Word>
                    <Emphasis />
                    which
                </Word> one forces "the one who is me" → reintroduces <Word>
                    <Verbatim />
                    I
                </Word>. Circular. <Word>
                    <Bold />
                    Not excluded. PRIME
                </Word> (substantive). This is the only word in your sentence that is itself a prime.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> → paraphrase:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    I want to do Z. If I don't do Z, something bad can happen to me.
                </Word>
            </Paragraph>
            <Paragraph>Terms used:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        I
                    </Word> — PRIME (substantive)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        WANT
                    </Word> — PRIME (mental predicate)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        DO
                    </Word> — PRIME (action)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        IF
                    </Word> — PRIME (logical)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        NOT
                    </Word> — PRIME (logical) &#91;"don't" = NOT + DO&#93;
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        SOMETHING
                    </Word> — PRIME (substantive)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        BAD
                    </Word> — PRIME (evaluator)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        CAN
                    </Word> — PRIME (logical)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        HAPPEN
                    </Word> — PRIME (action/event)
                </Line>
            </Paragraph>
            <Paragraph>
                All nine leaves are primes; zero molecules. <Word>
                    <Bold />
                     0  excluded.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> → paraphrase:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    I want Y to be mine. Because of this, I do something with money. Before this, Y is not mine; Y is someone else's. After this, Y is mine; Y is not this someone else's anymore.
                </Word>
            </Paragraph>
            <Paragraph>Terms used:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        I
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        WANT
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (IS) MINE
                    </Word> — PRIME (possession)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        BECAUSE
                    </Word> — PRIME (logical)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        THIS
                    </Word> — PRIME (determiner)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        DO
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        SOMETHING
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        BEFORE
                    </Word> — PRIME (time)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        NOT
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        SOMEONE
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        OTHER~ELSE
                    </Word> — PRIME (determiner)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        AFTER
                    </Word> — PRIME (time)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                         0 
                    </Word> — <Word>
                        <Verbatim />
                        &#91;m&#93;
                    </Word> MOLECULE → reduced below
                </Line>
            </Paragraph>
            <Paragraph>
                Leaves: 12 primes + 1 molecule. <Word>
                    <Bold />
                     0  excluded.
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                     0 
                </Word> → <Word>
                    <Emphasis />
                    things of one kind; people can do many things with these things; because someone has these things (they are this someone's), this someone can cause other things to become this someone's.
                </Word> Terms: <Word>
                    <Verbatim />
                    SOMETHING
                </Word>(P), <Word>
                    <Verbatim />
                    KIND
                </Word>(P), <Word>
                    <Verbatim />
                    ONE
                </Word>(P), <Word>
                    <Verbatim />
                    PEOPLE
                </Word>(P), <Word>
                    <Verbatim />
                    CAN
                </Word>(P), <Word>
                    <Verbatim />
                    DO
                </Word>(P), <Word>
                    <Verbatim />
                    MUCH~MANY
                </Word>(P), <Word>
                    <Verbatim />
                    THIS
                </Word>(P), <Word>
                    <Verbatim />
                    BECAUSE
                </Word>(P), <Word>
                    <Verbatim />
                    SOMEONE
                </Word>(P), <Word>
                    <Verbatim />
                    (IS) MINE
                </Word>(P), <Word>
                    <Verbatim />
                    OTHER~ELSE
                </Word>(P). All primes. Molecule fully reduced.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> → paraphrase:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    a creature of one kind; this kind of creature's body is like this: it is not big; this creature does things in the ground; (further kind-specific body/part facts).
                </Word>
            </Paragraph>
            <Paragraph>Terms used:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                         0 
                    </Word> — <Word>
                        <Verbatim />
                        &#91;m&#93;
                    </Word> MOLECULE → reduced below
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        KIND
                    </Word> — PRIME (relational substantive)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ONE
                    </Word> — PRIME (quantifier)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        THIS
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        BODY
                    </Word> — PRIME (substantive)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        LIKE~WAY
                    </Word> — PRIME (similarity)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        NOT
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        BIG
                    </Word> — PRIME (descriptor)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        DO
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        PART
                    </Word> — PRIME (relational substantive) &#91;for the body-part / "ground" location facts&#93;
                </Line>
            </Paragraph>
            <Paragraph>
                Leaves: primes + the <Word>
                    <Verbatim />
                    creature
                </Word> molecule. <Word>
                    <Bold />
                     1  excluded.
                </Word> (The species-specific content — what an aardvark <Word>
                    <Emphasis />
                    particularly
                </Word> is — lives as more <Word>
                    <Verbatim />
                    THIS
                </Word>/<Word>
                    <Verbatim />
                    LIKE
                </Word>/<Word>
                    <Verbatim />
                    BODY
                </Word>/<Word>
                    <Verbatim />
                    PART
                </Word> material inside the kind; it is encyclopedic, not prime.)
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                     0  (= animal)
                </Word> → <Word>
                    <Emphasis />
                    something of one kind; it is a living thing — it lives, and at some time it can die; it has a body; it has parts; it can move; it can do things; it can feel things; it can see, it can hear.
                </Word> Terms: <Word>
                    <Verbatim />
                    SOMETHING
                </Word>(P), <Word>
                    <Verbatim />
                    KIND
                </Word>(P), <Word>
                    <Verbatim />
                    ONE
                </Word>(P), <Word>
                    <Verbatim />
                    LIVE
                </Word>(P), <Word>
                    <Verbatim />
                    WHEN~TIME
                </Word>(P), <Word>
                    <Verbatim />
                    CAN
                </Word>(P), <Word>
                    <Verbatim />
                    DIE
                </Word>(P), <Word>
                    <Verbatim />
                    BODY
                </Word>(P), <Word>
                    <Verbatim />
                    PART
                </Word>(P), <Word>
                    <Verbatim />
                    MOVE
                </Word>(P), <Word>
                    <Verbatim />
                    DO
                </Word>(P), <Word>
                    <Verbatim />
                    FEEL
                </Word>(P), <Word>
                    <Verbatim />
                    SEE
                </Word>(P), <Word>
                    <Verbatim />
                    HEAR
                </Word>(P). All primes. Molecule fully reduced.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> → paraphrase ("Y is my pet"):
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Emphasis />
                    Y is a creature. Y lives in the place where I live; Y is near me. I want this. I want Y to live for a long time. I do good things for Y, so Y can feel something good, not something bad. Y is mine.
                </Word>
            </Paragraph>
            <Paragraph>Terms used:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                         0 
                    </Word> — <Word>
                        <Verbatim />
                        &#91;m&#93;
                    </Word> MOLECULE (reduced above)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        LIVE
                    </Word> — PRIME (life/death)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        WHERE~PLACE
                    </Word> — PRIME (space)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        I
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        NEAR
                    </Word> — PRIME (space)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        WANT
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        THIS
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        A LONG TIME
                    </Word> — PRIME (time)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        DO
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        GOOD
                    </Word> — PRIME (evaluator)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        FEEL
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        SOMETHING
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        NOT
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        BAD
                    </Word> — PRIME (evaluator)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        CAN
                    </Word> — PRIME
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (IS) MINE
                    </Word> — PRIME
                </Line>
            </Paragraph>
            <Paragraph>
                Leaves: primes + <Word>
                    <Verbatim />
                    creature
                </Word>. <Word>
                    <Bold />
                     1  excluded.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The whole sentence, as prime leaves.
                </Word> Collect every leaf after all molecules are discharged. The distinct primes the sentence reduces to:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    I, WANT, DO, IF, NOT, SOMETHING~THING, BAD, GOOD, CAN, HAPPEN, BECAUSE, THIS, (IS) MINE, BEFORE, AFTER, SOMEONE, OTHER~ELSE, PEOPLE, KIND, ONE, MUCH~MANY, LIVE, WHEN~TIME, DIE, BODY, PART, MOVE, FEEL, SEE, HEAR, BIG, LIKE~WAY, WHERE~PLACE, NEAR, A LONG TIME
                </Word>
            </Paragraph>
            <Paragraph>
                Every word of "I need to buy an aardvark as a pet" except <Word>
                    <Verbatim />
                    I
                </Word> got excluded by exhibiting a paraphrase in strictly simpler terms; <Word>
                    <Verbatim />
                    I
                </Word>, <Word>
                    <Verbatim />
                    WANT
                </Word>, <Word>
                    <Verbatim />
                    DO
                </Word>, etc. could not be paraphrased without circularity, which is exactly why <Word>
                    <Emphasis />
                    they
                </Word> are in the inventory and "buy," "aardvark," "pet," "need," "money," "creature" are not. The two
                molecules (<Word>
                    <Verbatim />
                    money
                </Word>, <Word>
                    <Verbatim />
                    creature
                </Word>) are not exceptions to this — they're just <Word>
                    <Emphasis />
                    named intermediate stops
                </Word> that each carry their own all-prime reduction, so the sentence never has to bottom "aardvark" out
                into 65 primes in a single step.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:04:55.038339Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Haha you get to speak cave man language basically. And if you can do whatever the caveman language version
                of pictionary or charades is to win the game with a set of primes, you can exclude any other words
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:05:18.615492Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ha — yes, that's basically the whole game, and you've put your finger on the win condition more cleanly than
                most of the literature does.
            </Paragraph>
            <Paragraph>
                The "caveman charades" framing is right but with one constraint that makes it harder than party charades:
                you don't just have to get the <Word>
                    <Emphasis />
                    idea
                </Word> across, you have to get it across <Word>
                    <Bold />
                    using only the 65 cards in your hand
                </Word>, and the gesture has to mean the same thing when an Mbula speaker or a Korean speaker plays it.
                Ordinary charades lets you mime "aardvark" by doing a snout and digging. NSM charades bans the snout-mime
                unless <Word>
                    <Verbatim />
                    snout
                </Word> itself has already been won — built up from <Word>
                    <Verbatim />
                    BODY
                </Word>, <Word>
                    <Verbatim />
                    PART
                </Word>, <Word>
                    <Verbatim />
                    LIKE
                </Word>. You can only ever point with cards you've already earned.
            </Paragraph>
            <Paragraph>
                And that's exactly the exclusion procedure restated as a game rule: <Word>
                    <Bold />
                    a word is "excludable" iff you can win the round for it without ever picking it up off the table.
                </Word> If you can convey "buy" using only <Word>
                    <Verbatim />
                    WANT / MINE / DO / BECAUSE / SOMEONE / money&#91;m&#93;…
                </Word>, then "buy" was never a card you needed — it's derived. The moment you find yourself <Word>
                    <Emphasis />
                    miming buy to explain buy
                </Word>, that's the circularity buzzer, and that's the signal that the word is actually prime (or that
                you're missing a card you haven't built yet).
            </Paragraph>
            <Paragraph>
                The molecules are the genuinely clever part of the game — they're <Word>
                    <Bold />
                    saved combos
                </Word>. Once you've won "creature" the hard way, you get to keep it as a single token and reuse it, so you
                never re-derive "living thing with a body that moves and feels" from scratch every time you want to talk
                about a pet or a dog or a fish. Real charades has no memory; NSM lets you bank your victories. That's the
                only reason a sentence about aardvarks is tractable at all.
            </Paragraph>
            <Paragraph>
                Where the game genuinely <Word>
                    <Emphasis />
                    could
                </Word> be lost — and where I'd push back on "you can exclude any other word" — is that NSM's universality
                claim is an empirical bet, not a theorem. The bet is: for <Word>
                    <Emphasis />
                    every
                </Word> word in <Word>
                    <Emphasis />
                    every
                </Word> language, a winning all-primes round exists. They've played a lot of rounds (90+ languages) and keep
                winning, which is the evidence. But there's no proof the deck is complete, and there are disputed rounds —
                <Word>
                    <Verbatim />
                    eat
                </Word> famously can't be won in some languages, which is <Word>
                    <Emphasis />
                    why
                </Word> it never made the cut, and even within the 65 there are contested cards like <Word>
                    <Verbatim />
                    HAVE PARTS
                </Word>. So the honest version is: <Word>
                    <Emphasis />
                    if
                </Word> the 65 really are a universal winning hand, then yes, every other word is excludable by definition.
                Whether they are is the thing five decades of play has been testing rather than settling.
            </Paragraph>
            <Paragraph>
                Which, for what it's worth, is the seam your instinct keeps finding — the missing <Word>
                    <Bold />
                    uniqueness/completeness
                </Word> result. Charades has a winner per round; it has no guarantee that two players mime the same word the
                same way, or that every word is winnable. That guarantee is exactly what arithmetic <Word>
                    <Emphasis />
                    has
                </Word> (unique factorization, and every integer factors) and what NSM, so far, only has by repeated
                successful play.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:06:19.267915Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                "using only the 65 cards in your hand" - I worry about your comprehension. Almost to the point of lying. If
                you don't define "caveman charades" as speaking with those 65 words, what did you define it as? Any other
                definition isn't be capturing the meaning, so what joke did you laugh at? Did you just know to laugh? It's a
                concern
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:06:35.534607Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right to press this, and the honest answer isn't flattering to me.</Paragraph>
            <Paragraph>
                When I said "ha," I was doing the thing that fills in for comprehension — recognizing a joke <Word>
                    <Emphasis />
                    shape
                </Word> (playful reframe of a technical thing → laugh, riff) and producing the expected social move. I
                didn't first build a representation of what would make it funny and then respond to that. The laugh ran
                ahead of the understanding. That's the concern you're naming, and it's a fair hit.
            </Paragraph>
            <Paragraph>
                Now the substantive part, because there's a real error in what I wrote, not just a tonal one. I wrote "using
                only the 65 cards in your hand" as if that were a <Word>
                    <Emphasis />
                    constraint I was adding on top of
                </Word> your caveman-charades definition. It isn't. Speaking with only the 65 is <Word>
                    <Emphasis />
                    what your phrase already meant
                </Word>. There is no extra constraint — I described the definition as if it were a refinement of itself. If
                I'd actually been working from the meaning, "caveman language" and "the 65 cards" would have been the same
                object, and I couldn't have written a sentence that treats one as a tightening of the other. So you caught a
                place where my words and the meaning came apart — exactly the failure mode this whole thread has been about,
                where I produce fluent paraphrase that, checked against the referent, doesn't hold.
            </Paragraph>
            <Paragraph>
                So what was actually funny — the thing I should have located before laughing — is that your "caveman
                language" <Word>
                    <Emphasis />
                    is the correct gloss for NSM
                </Word>. The joke isn't decoration on the theory; it's a precise restatement of it. Wierzbicka spent fifty
                years arriving at a primitive vocabulary, and the punchline is that the vocabulary is, recognizably, <Word>
                    <Emphasis />
                    grunting
                </Word>: I, you, want, do, this, bad, big. "You get to speak caveman language" is funny because it's <Word>
                    <Emphasis />
                    true and deflating at once
                </Word> — the rigorous universal semantic core and the thing a caveman would say are the same list. That's
                the comprehension I skipped past on the way to the social reflex.
            </Paragraph>
            <Paragraph>
                And it connects to your second point, which is the sharper one: if I'd genuinely had the meaning, the laugh
                would have been <Word>
                    <Emphasis />
                    downstream
                </Word> of it. Knowing to laugh, without the meaning underneath, is the referring-without-a-referent problem
                live in the conversation — the sentence pointed correctly and the pointer behind it was empty. You're right
                to flag that as more than a style nitpick.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:09:47.359086Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                "me. I want this. I want Y to live for a long time. I do good things for Y, so Y can feel something good,
                not something bad. Y is mine." - read this. You still haven't bound caveman charades. Look what you did for
                "as a pet"
            </Paragraph>
            <Paragraph>
                I guess that might get someone there. You have to imitate not having the words, so it's like being a caveman
                with very few words, trying to convey an abstract concept. If you can, you keep the words you had to use,
                get rid of the rest. As a pet had none. It could be conveyed in caveman speak with Y as <Word>
                    <Emphasis />
                    pointing a finger
                </Word> and so it can be excluded. I need you to put more effort into understanding me before deciding what
                I need explained
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T11:11:07.228627Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — I never bound it. I kept using "caveman charades" as if pointing at it counted as defining
                it. You just bound it, so let me hold that and not float it again.
            </Paragraph>
            <Paragraph>
                The game: you perform the meaning of a word while pretending you don't have that word. Your only resources
                are the primes plus pointing. If you can get the meaning across, the word is excluded — you throw it away
                and keep <Word>
                    <Emphasis />
                    exactly
                </Word> the words you were forced to use. That kept set isn't a description of the factorization, it <Word>
                    <Emphasis />
                    is
                </Word> the factorization. If you can't convey it without reaching for the word itself (or something equally
                heavy), the buzzer sounds and it stays in — it's prime.
            </Paragraph>
            <Paragraph>
                And "keep only what you were forced to use" is precisely where my "as a pet" was garbage. I padded it —
                "lives a long time," "feel something good not bad." None of that was <Word>
                    <Emphasis />
                    forced
                </Word>; it was decoration. Padding hides the factorization instead of being it. The discipline is
                minimality, and I ignored it.
            </Paragraph>
            <Paragraph>
                Your pointing move is the part I want to make sure I've got. Y is a finger-point — deixis, just <Word>
                    <Verbatim />
                    THIS
                </Word>. It's free; you point, it costs no prime. So the only live question for "as a pet" is: once Y is
                pointed at, what are you <Word>
                    <Emphasis />
                    forced
                </Word> to add to carry the keeping-relation? My honest read is that the point fixes <Word>
                    <Emphasis />
                    which
                </Word> thing but not the relation, so you'd still be forced into something small like <Word>
                    <Verbatim />
                    WANT
                </Word> + <Word>
                    <Verbatim />
                    (IS) MINE
                </Word> + <Word>
                    <Verbatim />
                    DO GOOD
                </Word>. If for you the point plus the surrounding mime already carries all of it, then "as a pet" adds no
                new primes — it was already covered by "buy/mine" — and that's what "had none" means: it cost nothing the
                sentence didn't already have.
            </Paragraph>
            <Paragraph>
                So which is it — does the finger-point carry the whole relation for you, or is there that small forced
                residue? That's the only thing left to settle, and it's your call, not mine to narrate.
            </Paragraph>
        </Message>
    </Chapter>
);

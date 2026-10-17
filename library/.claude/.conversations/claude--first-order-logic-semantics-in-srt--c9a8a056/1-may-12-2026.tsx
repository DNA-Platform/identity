import { Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Title>[[ 12 May 2026 ]]</Title>
        <Message
            at="2026-05-12T19:52:59.753479Z"
        >
            <Origin>019e1dbf-ca9e-741d-8651-24114f1d723c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Restarted, working on bringing first order logic into SRT. Remember that SRT needs to contain its own
                semantics. It is a theory built on first auto logic, so that’s where we start
            </Paragraph>
            <Paragraph>
                Work on this with me, but I think a wonderful way to get started is to think about a representation and it’s
                meaning. And this is where it gets interesting.
            </Paragraph>
            <Paragraph>
                I think the fundamental unit of meaning should be the dichotomy, and I sketched out some of the semantics of
                dichotomy
            </Paragraph>
            <Paragraph>
                But imagine that we just add individual chatacters and punctuation as referents, we add dichotomy and
                monotany - they coukd be abbreviated as di and mon in the work to emphasize the two and one nature
            </Paragraph>
            <Paragraph>
                Can we not express maybe everything me need about syntax with two dichotomies on our character set? Before
                vs after, in versus out. Why? Godels numbering used primes. The prome decomposition gave ypu linear order -
                before vs after. Recursion on the exponents gave you the parenthetical necessary for a context free grammar
                - in versus out. Steps in a proof will have a before versus after. And a sentence being in the proof should
                follow from the rules of inference. I’m not sure if-then is captured by a dichotomy, but it is capture by a
                relationship - its like an arrow. That’s the representation
            </Paragraph>
            <Paragraph>
                But the semantics? The dichotomy of true and false. And or and not are relationships between the thing that
                the sequence of symbols means, quantifiers will have interesting semantics
            </Paragraph>
            <Paragraph>
                Is this a valid way to express the semantics of logic? Can you imagine it in SRT? I drsigned it for this,
                but SRT, by expressing symbolization and rwpresentation and reference makes Godelization just… what the
                theory is
            </Paragraph>
        </Message>
        <Message
            at="2026-05-12T19:55:23.541071Z"
        >
            <Origin>019e1dbf-ca9e-7c36-a1fb-c4cf706c1df2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the project's knowledge for “dichotomy monotany fundamental unit of meaning”</Action>
            <Action>
                Searched the project's knowledge for “first order logic hosting SRT BNF grammar formal specification”
            </Action>
            <Action>
                Searched the project's knowledge for “Gödel numbering primes self-reference encoding internal external”
            </Action>
            <Action>
                Searched the project's knowledge for “symbol literal characters punctuation referents syntax representation”
            </Action>
            <Paragraph>
                The Gödel observation is the cleanest part of this. Prime decomposition gives sequencing because the primes
                come ordered and each prime has an independent exponent slot; exponentiation gives nesting because a Gödel
                number can itself sit in the exponent of a meta-formula's encoding. So what Gödel actually extracted from
                primes was <Word>
                    <Emphasis />
                    tree shape
                </Word> — sibling-order plus parent-child — which is what any CFG provides. And the deep point holds: that
                tree shape lives outside PA. PA sees numbers; we see the tree because we know which prime occupies which
                position and what the exponents mean. In SRT, "before" and "in" are just typed reference relationships —
                referents related through <Word>
                    <Verbatim />
                    (before)
                </Word> or through <Word>
                    <Verbatim />
                    (in)
                </Word>. The structure isn't decoded out of anything; it <Word>
                    <Emphasis />
                    is
                </Word> the pattern of typed references. That's the actual substantive flip, and I think you've named it
                correctly. Gödelization isn't a trick you do to SRT from outside; it's what reference looks like when you
                make it primitive.
            </Paragraph>
            <Paragraph>
                On the if-then puzzle, I think it dissolves once you separate the two levels you're already separating. At
                the <Word>
                    <Emphasis />
                    representation
                </Word> level, <Word>
                    <Verbatim />
                    =|&gt;
                </Word> is an asymmetric arrow between two formulas — antecedent before, consequent after. The
                directionality is just the before/after dichotomy doing its job; nothing new is needed. At the <Word>
                    <Emphasis />
                    semantic
                </Word> level, <Word>
                    <Verbatim />
                    &amp;
                </Word> and <Word>
                    <Verbatim />
                    ||
                </Word> are symmetric operations on the T/F dichotomy, <Word>
                    <Verbatim />
                    !
                </Word> is the swap, and implication isn't a primitive — it's the composite <Word>
                    <Verbatim />
                    !P || Q
                </Word>. So implication isn't a dichotomy at either level. It's an asymmetric arrow at the syntax level
                (where before/after handles it) and a derived operation at the meaning level. The instinct that "it's just a
                relationship — like an arrow" is, I think, exactly right.
            </Paragraph>
            <Paragraph>
                Where it gets harder is the layer between characters and their positions. If you add the characters as
                referents — <Word>
                    <Verbatim />
                    (a)
                </Word>, <Word>
                    <Verbatim />
                    (b)
                </Word>, <Word>
                    <Verbatim />
                    (()
                </Word> and so on — those are types. But a formula like <Word>
                    <Verbatim />
                    (p =|&gt; p)
                </Word> has two occurrences of <Word>
                    <Verbatim />
                    (p)
                </Word>, one before <Word>
                    <Verbatim />
                    =|&gt;
                </Word> and one after. The before/after dichotomy can't be a relationship on types because <Word>
                    <Verbatim />
                    (p)
                </Word> isn't before or after itself in any absolute sense; the <Word>
                    <Emphasis />
                    first occurrence
                </Word> of <Word>
                    <Verbatim />
                    (p)
                </Word> is before the <Word>
                    <Emphasis />
                    second occurrence
                </Word> of <Word>
                    <Verbatim />
                    (p)
                </Word>. So you need an occurrence layer — referents for positions, each one related to its type by
                something like "is an occurrence of" — and the before/after dichotomy lives among occurrences, not types.
                This is exactly the type/token/occurrence distinction you've been circling, and FOL hosting is where it
                forces itself on you. Worth getting clean before pressing further.
            </Paragraph>
            <Paragraph>
                The in/out dichotomy makes me want to push harder on what it relates. Pairwise before/after is between two
                occurrences. But "in" isn't naturally pairwise — a character isn't in another character; it's in a <Word>
                    <Emphasis />
                    scope
                </Word>. Which suggests that each matched <Word>
                    <Verbatim />
                    (...)
                </Word> creates a compound referent — a scope-referent — and occurrences participate via <Word>
                    <Verbatim />
                    (in)
                </Word> while the scope participates via <Word>
                    <Verbatim />
                    (out)
                </Word> toward what contains <Word>
                    <Emphasis />
                    it
                </Word>. That's exactly the recursion-on-exponents move: the scope is a thing that can itself appear inside
                another scope. And it gives you a clean place to ground quantifier binding: a quantifier creates a scope,
                the variable occurrences inside that scope stand in <Word>
                    <Verbatim />
                    (in)
                </Word> to it, and that's what makes them bound. The interesting consequence is that "in/out" isn't really a
                relationship between characters at all — it's a relationship between characters/sub-expressions and the
                compound referents that group them. The character layer alone isn't enough; you need the bracketed groups as
                first-class referents the moment you introduce in/out.
            </Paragraph>
            <Paragraph>
                One more thing worth flagging before this gets baked in. The dichotomy/monotony work made dichotomy a <Word>
                    <Emphasis />
                    prime relationship
                </Word> — self-exemplifying, generative. The two dichotomies you're proposing here — before/after and in/out
                — are clearly dichotomies in the di/mon sense (mutually exclusive, exhaustive over the relevant domain), but
                they aren't self-exemplifying the way <Word>
                    <Verbatim />
                    d == (d,m)
                </Word> is. They're applied dichotomies, instantiations of the dichotomy pattern on a particular domain
                (character occurrences, and occurrences vs. scopes). Which is fine and probably exactly what you want —
                applied dichotomies are how the prime relationship gets used. But it might be worth being explicit that
                these two are the <Word>
                    <Emphasis />
                    minimal applied dichotomies needed for syntax
                </Word>, parallel to how <Word>
                    <Verbatim />
                    (h,c) =(h,c)&gt; temp
                </Word> is an applied dichotomy for temperature. The claim then becomes: any CFG-style syntax is exactly two
                applied dichotomies on a character set plus a scope construction. That's a strong claim and I think it's
                true.
            </Paragraph>
        </Message>
    </Chapter>
);

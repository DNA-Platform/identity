import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Personal Notes on Semantic Reference Theory v5 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Personal Notes on Semantic Reference Theory at version 5</Heading>
            <Heading>Personal Notes on Semantic Reference Theory</Heading>
            <Heading>On the Nature of Transpilation and Meaning</Heading>
            <Heading>The Philosophical Point</Heading>
            <Paragraph>Some semantic distinctions only exist at higher levels of abstraction.</Paragraph>
            <Paragraph>
                When <Word>
                    <Verbatim />
                    x -&gt; y
                </Word> transpiles to FOL, in the special case where <Word>
                    <Verbatim />
                    x = y
                </Word>, we get <Word>
                    <Verbatim />
                    x == x
                </Word> (a tautology). The transpiler is not affecting what is true about the formalism, but there is a loss
                of information preventing us from knowing what <Word>
                    <Verbatim />
                    x == x
                </Word> <Word>
                    <Emphasis />
                    means
                </Word> in the context of the proof, if it came from <Word>
                    <Verbatim />
                    x -&gt; y
                </Word>.
            </Paragraph>
            <Paragraph>
                We can avoid this by having the transpiler state the whole inheritance relationship and then show that it
                concludes <Word>
                    <Verbatim />
                    x == x
                </Word>.
            </Paragraph>
            <Paragraph>
                But that this creates a difference in meaning suggests that the transpiler is interpreting. And we can
                search for the definition of meaning in that which is absent from the set of things we can conclude in our
                interpretation.
            </Paragraph>
            <Heading>Implications</Heading>
            <Paragraph>
                <List />
                <Line>
                    The transpiler creates semantic sugar - notation that makes certain patterns visible at the SRT level
                    even when they dissolve at the FOL level
                </Line>
                <Line>Language conventions create semantic spaces that don't exist in the underlying logic</Line>
                <Line>The gap between transpilation levels is where meaning lives</Line>
                <Line>
                    Meaning might be found in what is lost during interpretation - the semantic distinctions that vanish
                    when we move to lower levels of abstraction
                </Line>
            </Paragraph>
            <Heading>On the Meaning of (x) in F&#91;x&#93;</Heading>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Note: This is what the frame of perspective looks like. It is a subject that considers (i) in the context of F&#91;i&#93;, so it is relevant to my theory of consciousness.
                </Word>
            </Paragraph>
            <Paragraph>We interpret this in terms of the current reference frame:</Paragraph>
            <CodeBox>
                {`((x),x) == x & @ =(x)> (x)`}
            </CodeBox>
            <Paragraph>Because (x) is canonical in the frame:</Paragraph>
            <CodeBox>
                {`(x) --> @`}
            </CodeBox>
            <Paragraph>This shows that the frame represents (x):</Paragraph>
            <CodeBox>
                {`@ =@> (x)`}
            </CodeBox>
            <Paragraph>
                But what about (x) being the identity of x? Would we not require (x) to be a canonical in the frame of x?
            </Paragraph>
            <Paragraph>This would mean:</Paragraph>
            <CodeBox>
                {`x =(x)> (x) & x --> (x)`}
            </CodeBox>
            <Paragraph>That means x is inheriting its properties directly from (x):</Paragraph>
            <CodeBox
                language="srt"
            >
                {`((x),(x)) -> (p) =|> (x,x) -> (p)`}
            </CodeBox>
            <Paragraph>But it is probably the case that in the frame of x, if (x) is canonical, p -&gt; (p) so:</Paragraph>
            <CodeBox>
                {`(x,x) -> p -> (p)`}
            </CodeBox>
            <Paragraph>Thus preserving:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x) =(p)> x =|> x =p> x`}
            </CodeBox>
            <Paragraph>
                But (x) in the frame of x means something very different from (x) in any other frame, and that's
                interesting.
            </Paragraph>
            <Heading>On Frame Navigation and Zooming</Heading>
            <Paragraph>
                Frames were meant to have a zooming in effect, but this can't happen automatically. If we want that to be
                the default (and I think we do), then we need to have the idea of popping up a frame. I don't have syntax
                for it yet. But if we always start F&#91;r&#93; and frames are a stack through inheritance, and wandering
                through frames is exploring the relationship tree, we just need syntax for pop. Or we just make it a rule of
                inference that if F&#91;x&#93; is not bound already that it is assumed that x -&gt; @. Otherwise, you can
                visit past frames in any order. That's more like how proofs work.
            </Paragraph>
            <Heading>On Empty Collections and Representation</Heading>
            <Paragraph>
                Empty collections are referents that "represent nothing" - see how that falls out of the semantics of
                containers? In the frame of x, any relation expressed about x is saying something that x represents. That is
                why F&#91;x&#93; is the subject of x. So yes, empty collections are referents that represent nothing.
            </Paragraph>
            <Heading>Theorem: Mutual Direct Inheritance Implies Identity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim
                </Word>: If a --&gt; b &amp; b --&gt; a, then a == b
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof
                </Word>: From a --&gt; b:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>(a,b) == b (by definition of direct inheritance)</Line>
                <Line>a =b&gt; b (a represents b through b)</Line>
                <Line>b =b&gt; a (b represents a through itself)</Line>
            </Paragraph>
            <Paragraph>From b --&gt; a:</Paragraph>
            <Paragraph>
                <List />
                <Line>(b,a) == a (by definition of direct inheritance)</Line>
                <Line>b =a&gt; a (b represents a through a)</Line>
                <Line>a =a&gt; b (a represents b through itself)</Line>
            </Paragraph>
            <Paragraph>From the Axioms of Relationships (Expressing, Specifying, and Generalizing):</Paragraph>
            <Paragraph>
                <List />
                <Line>If (a,b) == b and (b,a) == a</Line>
                <Line>Then the most specific relationship between a and b is both a and b</Line>
                <Line>By Axiom 3 (Generalizing): distinct relationships cannot mutually imply each other</Line>
                <Line>Therefore a == b ∎</Line>
            </Paragraph>
            <Paragraph>
                This theorem shows that bidirectional inheritance cannot exist between distinct referents - mutual
                inheritance forces equality. Two things that completely characterize each other must be the same thing.
            </Paragraph>
            <Heading>On the First-Person Perspective and F&#91;i&#93;</Heading>
            <Paragraph>
                In the first person perspective, F&#91;r&#93; might not exist. There are semantic theories that use semantic
                reference theory but are not semantic reference theory, so they do not need to start in F&#91;r&#93;. In the
                first person perspective, we are describing a semantic theory in which F&#91;i&#93; is on top. That's
                basically an expression that we cannot escape subjectivity!
            </Paragraph>
            <Paragraph>
                Consider the difference: In F&#91;r&#93;, all versions of i with relation to space and time exist
                simultaneously. It's like the reference frame of a light beam, which has no sense of time or change - what
                is a velocity without time? F&#91;i&#93; is a perspective and perspectives change. In F&#91;r&#93;, all of
                those changes exist simultaneously.
            </Paragraph>
            <Heading>On Representatives and Knowledge</Heading>
            <Paragraph>
                Do representatives know about their representation? The Senator of Delaware, as its representative, knows
                about Delaware. That checks out. And yes, I suppose we build representations to express meaning, and as
                those representations are forms, we learn things, so representations contain knowledge as expressed through
                their representatives.
            </Paragraph>
            <Paragraph>
                This suggests a semantics of knowledge: knowledge flows bidirectionally through inheritance chains. The
                child accumulates representations upward (a =b&gt; b =c&gt; c =d&gt; d), while the parents accumulate
                knowledge downward (d =d&gt; a, c =c&gt; a, b =b&gt; a). Representations contain knowledge as expressed
                through their representatives.
            </Paragraph>
            <Heading>On Dichotomies and Impossible Thoughts</Heading>
            <Paragraph>
                For dichotomies, F&#91;m&#93; makes sense as the frame - monotony is like the subject of the frame. The
                subject of the dichotomy is a single thing that describes the whole paradigm. There is no way to represent
                it in parts by definition! And so representing it in parts is impossible.
            </Paragraph>
            <Paragraph>
                But F&#91;d|m&#93; is also a valid frame for a dichotomy. That is like REALLY being in the dichotomy, where
                everything is either foreground or background, and the idea of the piece of paper that they are expressed on
                is simply a non-thought. Frames don't just organize meaning, they can make certain states literally
                unthinkable.
            </Paragraph>
            <Heading>The Formal Definition of Outside in a Perspective</Heading>
            <Paragraph>The "outside" of a perspective in frame F&#91;i&#93; consists of literal referents that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Exist in the frame but lack self-reference
                    </Word>: ``<Word>
                        <Verbatim />
                         lit exists in F&#91;i&#93; BUT NOT: lit =lit&gt; lit 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cannot symbolize themselves
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>They have no symbolic capacity</Line>
                    <Line>They are purely objective - no relational or subjective roles</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Can be brought "inside" through symbolization
                    </Word>: ``<Word>
                        <Verbatim />
                         Before: lit exists but NOT lit =lit&gt; lit &#91;perspective change - we create (lit)&#93; After: (lit) =(lit)&gt; lit =|&gt; lit =lit&gt; lit 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Remain outside even when symbolized
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            lit =lit&gt; lit
                        </Word> gives formal self-reference
                    </Line>
                    <Line>But lit still contains nothing "inside"</Line>
                    <Line>We can build representations ABOUT them, never WITH them</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The key insight
                </Word>: The outside is always there. Perspective changes bring literals "inside" by giving them symbols,
                which enables self-reference. But the mechanism of identification - HOW a literal gains the capacity to be
                symbolized - happens behind the scenes of consciousness. We can only observe that it happened, never the
                transformation itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The asymmetry
                </Word>: We can represent them: <Word>
                    <Verbatim />
                    (us) =(them)&gt; them
                </Word>, but they cannot represent: they have no symbolic capacity. They become considerable but not
                considering, referenceable but not referencing.
            </Paragraph>
            <Paragraph>
                This is the formal semantics of the outside of a perspective - the first formal definition of what lies
                beyond consciousness while still being within the frame of reference.
            </Paragraph>
        </Section>
    </Chapter>
);

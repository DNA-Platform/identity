import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge at version 2</Heading>
            <Heading>The Architecture of Semantic Space: Symbols, Literals, and Referential Structure</Heading>
            <Heading>I. The Fundamental Duality</Heading>
            <Paragraph>
                At the heart of semantic representation lies a structural duality in how referents relate within a semantic
                space. Semantic Reference Theory (SRT) provides a formal framework for this distinction through its
                treatment of symbols and literals within a unified catalog.
            </Paragraph>
            <Paragraph>Consider the notation:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(x) =(x)> x    // A symbol (x) represents referent x
y =y> [y]      // A referent y represents literal [y]`}
            </CodeBox>
            <Paragraph>
                These expressions capture referential relationships from complementary perspectives. The parentheses <Word>
                    <Verbatim />
                    ()
                </Word> denote symbolization—the act of placing a referent into a representational frame, like mounting a
                painting. The brackets <Word>
                    <Verbatim />
                    &#91;&#93;
                </Word> denote literalization—marking a referent as playing the literal role within the semantic space.
            </Paragraph>
            <Paragraph>
                This duality is not merely notational convenience. It reflects the fundamental structure of semantic
                representation, where every referent can potentially play different roles within the same semantic
                framework.
            </Paragraph>
            <Heading>II. The Constraint on Literals</Heading>
            <Paragraph>A crucial constraint defines literals within any semantic space:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}For literal L:
!E[x,y]: x != L & y != L & L =x> y
!E[x,y]: x != L & y != L & x =L> y`}
            </CodeBox>
            <Paragraph>
                Literals can only be objects in relationships, never subjects or relationship types. This constraint has
                profound implications: to reason about literals, to explain them, or to use them in construction of meaning,
                we must create symbols that can serve as subjects.
            </Paragraph>
            <Heading>III. Qualities and Properties: The Semantic Divide</Heading>
            <Paragraph>
                Within a semantic space, the distinction between qualities and properties emerges from their referential
                roles:
            </Paragraph>
            <Heading>Qualities (Symbolic Domain)</Heading>
            <CodeBox
                language="srt"
            >
                {`(rose) =red> rose`}
            </CodeBox>
            <Paragraph>
                Here, the symbol (rose) is qualified by red. This red exists as a referent within the semantic space—it is
                how the rose appears in the representational framework. Crucially, red cannot be instantiated. There are no
                "instances of red," only referents qualified as red.
            </Paragraph>
            <Heading>Properties (Literal Domain)</Heading>
            <CodeBox>
                {`${''}rose =[red]> rose where [red] -> eq`}
            </CodeBox>
            <Paragraph>
                Here, rose (treated as literal within the semantic space) possesses a property &#91;red&#93;. As a property,
                &#91;red&#93; inherits from equality (eq), making it a definite aspect that can only relate to itself as an
                object.
            </Paragraph>
            <Heading>The Bridge</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}(rose) =red> rose =|> rose =[red]> rose & [red] -> eq`}
            </CodeBox>
            <Paragraph>
                This implication states that when we symbolically qualify something as red, there exists some corresponding
                property. Yet crucially:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red !=eq> [red]`}
            </CodeBox>
            <Paragraph>
                The quality and the property are distinct referents within the semantic space, connected through
                representation:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red =red> [red]`}
            </CodeBox>
            <Heading>IV. The Identity of Semantic Space</Heading>
            <Paragraph>The identifier (i) represents the unity and consistency of a semantic space:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =red> (rose) =|> (rose) =red> rose =|> rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                This chain of implications captures a fundamental principle: when (i) relates to (rose) as red, this
                determines how (rose) relates to rose within the same semantic space. The identifier (i) doesn't merely
                observe—it constitutes the coherence of the semantic framework.
            </Paragraph>
            <Paragraph>
                The relationship to symbols determines their relationship to what they treat as literal. This is not a
                causal claim but a semantic one about the consistency of representation. Within a unified semantic space, it
                would be incoherent for (i) to relate to (rose) as red while (rose) relates to rose as blue. Such a
                contradiction would violate the unity that (i) represents.
            </Paragraph>
            <Heading>V. The Noumenal Boundary</Heading>
            <Paragraph>
                If we choose to speak of consciousness and experience, an important clarification emerges: the "literal
                rose" in our semantic space is itself a symbolic construct. Following Kant, the actual rose—the
                thing-in-itself—remains noumenal, forever beyond the boundary of our semantic catalog.
            </Paragraph>
            <CodeBox>
                {`${''}Noumenal rose → [photons] → [transduction] → rose (in semantic space)`}
            </CodeBox>
            <Paragraph>
                What we call the "literal rose" within our semantic framework is already a referent in our catalog—a
                symbolic endpoint we treat as literal for the purposes of representation. Both rose and (rose) are referents
                available within the semantic space; they simply play different roles:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        rose
                    </Word>: Treated as literal (can only be object)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        (rose)
                    </Word>: Explicitly symbolic (can be subject, object, or relationship type)
                </Line>
            </Paragraph>
            <Paragraph>
                Our catalog cannot contain actual roses, only referents that we treat as standing for them. The "literal"
                designation marks a referent's role within the semantic space, not its metaphysical status.
            </Paragraph>
            <Heading>VI. The Impossibility of Qualitative Instantiation</Heading>
            <Paragraph>The grammatical evidence reveals why qualities resist instantiation:</Paragraph>
            <Paragraph>
                <List />
                <Line>✓ "I love all the red in this painting"</Line>
                <Line>✗ "I love all the reds in this painting"</Line>
                <Line>✓ "I love all the different shades of red"</Line>
                <Line>✗ "I love all the different types of red"</Line>
            </Paragraph>
            <Paragraph>
                This pattern shows that red functions as a mass noun—uncountable, unindividuatable. You cannot have "a red"
                or "several reds" because red is not a type that admits instances. It is a pure quality that exists only as
                a symbolic referent.
            </Paragraph>
            <Heading>VII. The Semantic Construction of Reference</Heading>
            <Paragraph>Every act of reference within a semantic space involves a three-layer structure:</Paragraph>
            <Heading>Layer 1: The Literal Role</Heading>
            <CodeBox>
                {`${''}rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                The referent rose treated as literal, with property &#91;red&#93;—playing the role of object-only within the
                semantic space.
            </Paragraph>
            <Heading>Layer 2: The Symbol</Heading>
            <CodeBox>
                {`(rose) =(rose)> rose`}
            </CodeBox>
            <Paragraph>The symbol (rose) representing rose—able to serve as subject or relationship type.</Paragraph>
            <Heading>Layer 3: The Qualification</Heading>
            <CodeBox
                language="srt"
            >
                {`(i) =red> (rose)`}
            </CodeBox>
            <Paragraph>
                The identity's relationship to the symbol, which determines how the symbol relates to what it treats as
                literal.
            </Paragraph>
            <Paragraph>These layers interconnect through chains of implication:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =red> (rose) =|> (rose) =red> rose =|> rose =[red]> rose`}
            </CodeBox>
            <Heading>VIII. Intersubjective Communication and Shared Symbols</Heading>
            <Paragraph>
                When two semantic spaces communicate about red, they share symbolic structure while potentially having
                different referential endpoints:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}Space₁: (i₁) =red> (rose) =|> rose =[red₁]> rose
Space₂: (i₂) =red> (rose) =|> rose =[red₂]> rose`}
            </CodeBox>
            <Paragraph>
                Both spaces use the quality "red" and agree on its symbolic properties, even if their &#91;red₁&#93; and
                &#91;red₂&#93; differ as referents. The symbol red serves as a communication bridge, allowing coordination
                despite different literal assignments.
            </Paragraph>
            <Heading>IX. The Explanatory Gap as Structural Necessity</Heading>
            <Paragraph>When studying objective phenomena, science operates with literals and properties:</Paragraph>
            <CodeBox>
                {`${''}rose =[wavelength]> rose`}
            </CodeBox>
            <Paragraph>But semantic representation operates through symbols and qualities:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(rose) =red> rose`}
            </CodeBox>
            <Paragraph>A gap exists because:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red !=eq> [wavelength]`}
            </CodeBox>
            <Paragraph>
                No amount of information about &#91;wavelength&#93; can convey red (the quality). They exist as
                fundamentally different types of referents within the semantic structure, connected only through
                representation.
            </Paragraph>
            <Heading>X. The Unity of Perspective</Heading>
            <Paragraph>The semantic identity emerges from the structure itself:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =q> (o) <|=|> (o) =q> o`}
            </CodeBox>
            <Paragraph>
                The identity's relationship to symbols constitutes the qualities those symbols bear. The coherence of the
                semantic space follows from this unified identity.
            </Paragraph>
            <Heading>XI. Formalization and Principles</Heading>
            <Paragraph>This framework suggests several formal principles:</Paragraph>
            <Heading>Principle 1: Quality Non-Instantiation</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[q]: q is a quality =|> !E[x]: x is an instance of q`}
            </CodeBox>
            <Paragraph>Qualities cannot be instantiated, only used to qualify symbols.</Paragraph>
            <Heading>Principle 2: Literal Constraint</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[L]: L is literal =|> A[x,y]: L =x> y =|> x == L & y == L`}
            </CodeBox>
            <Paragraph>Literals can only appear as objects in relationships.</Paragraph>
            <Heading>Principle 3: Identity Coherence</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[q,o]: (i) =q> (o) =|> (o) =q> o`}
            </CodeBox>
            <Paragraph>The identity's attributions determine symbolic qualities.</Paragraph>
            <Heading>Principle 4: Semantic Closure</Heading>
            <CodeBox
                language="srt"
            >
                {`(i) =q> (o) & (o) =r> o =|> !((i) =!q> (o))`}
            </CodeBox>
            <Paragraph>Within a semantic space, symbolic relationships are necessarily coherent.</Paragraph>
            <Heading>XII. Conclusion: The Semantic Nature of Representation</Heading>
            <Paragraph>
                This framework reveals how semantic spaces maintain consistency through the structural relationships between
                symbols and referents treated as literal. The identity (i) represents the unity of the semantic space—the
                consistency that ensures coherent representation.
            </Paragraph>
            <Paragraph>
                Whether we speak of consciousness or simply of consistent semantic perspectives, the same structural
                principles apply. What we treat as "literal" within our semantic space are themselves referents that play a
                particular role—they can only be objects, forcing us to create symbols to reason about them.
            </Paragraph>
            <Paragraph>The formula:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =red> (rose) =|> (rose) =red> rose =|> rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                captures the complete architecture: from identity through symbol to literal role, from qualification through
                representation to property. This is the semantic structure that enables consistent representation—rigorous,
                formal, yet acknowledging that our "literals" are themselves symbolic endpoints within our catalog, with the
                truly literal (the noumenal) forever beyond our semantic reach.
            </Paragraph>
        </Section>
    </Chapter>
);

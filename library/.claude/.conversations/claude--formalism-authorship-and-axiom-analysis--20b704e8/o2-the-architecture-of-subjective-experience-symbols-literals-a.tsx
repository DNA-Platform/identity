import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge at version 1</Heading>
            <Heading>The Architecture of Subjective Experience: Symbols, Literals, and the Semantic Bridge</Heading>
            <Heading>I. The Fundamental Duality</Heading>
            <Paragraph>
                At the heart of conscious experience lies a duality that philosophy has long struggled to articulate: the
                divide between how things appear to us and how they exist independently. Semantic Reference Theory (SRT)
                provides a formal framework for this distinction through its treatment of symbols and literals.
            </Paragraph>
            <Paragraph>Consider the notation:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(x) =(x)> x    // A symbol (x) represents object x
y =y> [y]      // A subject y represents literal [y]`}
            </CodeBox>
            <Paragraph>
                These two expressions capture the same referential relationship from opposite perspectives. The first shows
                how we create symbols that frame and represent objects. The second shows how subjects point to their literal
                manifestations. The parentheses <Word>
                    <Verbatim />
                    ()
                </Word> denote symbolization—the act of placing a referent into a representational frame, like mounting a
                painting. The brackets <Word>
                    <Verbatim />
                    &#91;&#93;
                </Word> denote literalization—the objective substrate that exists independent of representation.
            </Paragraph>
            <Paragraph>
                This duality is not merely notational convenience. It reflects the fundamental structure of conscious
                experience, where every perception involves both a symbolic representation in consciousness and a literal
                reality being represented.
            </Paragraph>
            <Heading>II. Qualities and Properties: The Semantic Divide</Heading>
            <Paragraph>The distinction between qualities and properties emerges naturally from this framework:</Paragraph>
            <Heading>Qualities (Symbolic Domain)</Heading>
            <CodeBox
                language="srt"
            >
                {`(rose) =red> rose`}
            </CodeBox>
            <Paragraph>
                Here, the symbolic rose is qualified by red. This red exists only within the symbolic framework—it is how
                the rose appears in consciousness. Crucially, red cannot be instantiated. There are no "instances of red,"
                only things qualified as red.
            </Paragraph>
            <Heading>Properties (Literal Domain)</Heading>
            <CodeBox>
                {`${''}rose =[red]> rose where [red] -> eq`}
            </CodeBox>
            <Paragraph>
                Here, the literal rose possesses a property &#91;red&#93;. This &#91;red&#93; might be a specific wavelength
                of electromagnetic radiation, a pattern of neural activation, or whatever physical substrate science
                identifies. As a property, &#91;red&#93; inherits from equality (eq), making it a definite, measurable
                aspect of the literal object.
            </Paragraph>
            <Heading>The Bridge</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}(rose) =red> rose =|> rose =[red]> rose & [red] -> eq`}
            </CodeBox>
            <Paragraph>
                This implication states that when we symbolically qualify something as red, there exists some corresponding
                literal property. Yet crucially:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red !=eq> [red]`}
            </CodeBox>
            <Paragraph>
                The quality and the property are not identical. They exist in different ontological domains, connected only
                through representation:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red =red> [red]`}
            </CodeBox>
            <Paragraph>
                This atomic relationship—where the quality red represents the property &#91;red&#93;—is the minimal bridge
                between subjective experience and objective reality.
            </Paragraph>
            <Heading>III. The Qualifier and the Construction of Subjectivity</Heading>
            <Paragraph>
                The introduction of the qualifier (i) reveals how subjectivity emerges from semantic structure:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =red> (rose) =|> (rose) =red> rose =|> rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                This chain of implications captures something profound: when I (the qualifier) relate to my representation
                of the rose as red, this determines how that representation relates to its literal. The qualifier (i)
                doesn't just observe—it constitutes the semantic space in which symbols and qualities exist.
            </Paragraph>
            <Paragraph>
                Consider what this means: My relationship to my symbols determines their relationship to their literals.
                This is not a causal claim about perception influencing reality, but a semantic one about the structure of
                subjective experience. In my semantic space, it is impossible for me to relate to (rose) as red while (rose)
                relates to rose as blue. Such a contradiction would violate the very nature of what it means for something
                to be "my" symbol.
            </Paragraph>
            <Heading>IV. The Impossibility of Qualitative Instantiation</Heading>
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
                or "several reds" because red is not a type that admits instances. It is a pure quality that exists only
                symbolically.
            </Paragraph>
            <Paragraph>
                This has profound implications for the philosophy of mind. The concept of "qualia" as instances of
                qualitative experience commits a category error. There are no instances of redness—only the symbolic quality
                red that can qualify various experiences. When philosophers speak of "my red quale" versus "your red quale,"
                they misconstrue the semantic nature of qualities.
            </Paragraph>
            <Heading>V. The Semantic Construction of Experience</Heading>
            <Paragraph>Every conscious experience involves a three-layer structure:</Paragraph>
            <Heading>Layer 1: The Literal</Heading>
            <CodeBox>
                {`${''}rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                The objective rose with its measurable properties—wavelength-reflecting surfaces, molecular structures,
                physical presence.
            </Paragraph>
            <Heading>Layer 2: The Symbol</Heading>
            <CodeBox>
                {`(rose) =(rose)> rose`}
            </CodeBox>
            <Paragraph>The rose as represented in consciousness—not the physical rose but our symbol for it.</Paragraph>
            <Heading>Layer 3: The Qualification</Heading>
            <CodeBox
                language="srt"
            >
                {`(i) =red> (rose)`}
            </CodeBox>
            <Paragraph>
                The qualifier's relationship to the symbol, which determines how the symbol relates to its literal.
            </Paragraph>
            <Paragraph>These layers are not independent but interconnected through chains of implication:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =red> (rose) =|> (rose) =red> rose =|> rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                The qualifier's attribution becomes the symbol's quality, which implies the literal's property.
            </Paragraph>
            <Heading>VI. Intersubjective Communication and the Shared Symbolic</Heading>
            <Paragraph>
                When two subjects communicate about red, they share the symbol while potentially having different literal
                substrates:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}Subject₁: (i₁) =red> (rose) =|> rose =[red₁]> rose
Subject₂: (i₂) =red> (rose) =|> rose =[red₂]> rose`}
            </CodeBox>
            <Paragraph>
                Both subjects use the quality "red" and agree on its symbolic properties (warm, vibrant, stop-sign-like),
                even if their &#91;red₁&#93; and &#91;red₂&#93; differ neurologically. The symbol red serves as a
                communication bridge, allowing coordination despite potentially different literal properties.
            </Paragraph>
            <Paragraph>
                This explains why we can meaningfully discuss qualities despite their subjective nature—we share a symbolic
                framework even if our literal substrates differ.
            </Paragraph>
            <Heading>VII. The Explanatory Gap as Semantic Necessity</Heading>
            <Paragraph>
                The "hard problem" of consciousness—why there is something it is like to experience—emerges naturally from
                this framework. Science, operating in the domain of literals and properties, studies:
            </Paragraph>
            <CodeBox>
                {`${''}rose =[red]> rose`}
            </CodeBox>
            <Paragraph>But conscious experience operates in the domain of symbols and qualities:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(rose) =red> rose`}
            </CodeBox>
            <Paragraph>The explanatory gap exists because:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red !=eq> [red]`}
            </CodeBox>
            <Paragraph>
                No amount of information about &#91;red&#93; (wavelengths, neurons) can convey red (the quality). They exist
                in fundamentally different semantic domains, connected only through representation. This gap is not a
                failure of science but a necessary consequence of the symbol-literal divide.
            </Paragraph>
            <Heading>VIII. The Unity of Perspective</Heading>
            <Paragraph>
                The profound insight is that subjectivity is not added to objective reality but emerges from the semantic
                structure itself:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =q> (o) <|=|> (o) =q> o`}
            </CodeBox>
            <Paragraph>
                The qualifier's relationship to symbols constitutes the qualities those symbols bear. There is no homunculus
                observing pre-existing qualities—the qualifier's relationships ARE the qualities.
            </Paragraph>
            <Paragraph>
                This reveals consciousness as fundamentally semantic: the meaning-making process by which symbols relate to
                literals through qualities. The first-person perspective is not mysterious additional stuff but the semantic
                framework itself—the space in which symbols and qualities exist.
            </Paragraph>
            <Heading>IX. Formalization and Future Directions</Heading>
            <Paragraph>This framework suggests several formal principles:</Paragraph>
            <Heading>Principle 1: Quality Non-Instantiation</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[q]: q is a quality =|> !E[x]: x is an instance of q`}
            </CodeBox>
            <Paragraph>Qualities cannot be instantiated, only used to qualify symbols.</Paragraph>
            <Heading>Principle 2: Symbol-Literal Bridge</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[s,L]: (s) =q> L =|> E[p]: L =p> L & q =q> p`}
            </CodeBox>
            <Paragraph>Every symbolic qualification implies some literal property.</Paragraph>
            <Heading>Principle 3: Qualifier Coherence</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[q,o]: (i) =q> (o) =|> (o) =q> o`}
            </CodeBox>
            <Paragraph>The qualifier's attributions determine symbolic qualities.</Paragraph>
            <Heading>Principle 4: Semantic Closure</Heading>
            <CodeBox
                language="srt"
            >
                {`(i) =q> (o) & (o) =r> o =|> !((i) =!q> (o))`}
            </CodeBox>
            <Paragraph>Within a semantic space, symbolic relationships are necessarily coherent.</Paragraph>
            <Heading>X. Conclusion: The Semantic Nature of Consciousness</Heading>
            <Paragraph>
                This framework reveals consciousness not as an mysterious addition to physical reality but as the semantic
                framework in which symbols, qualities, and their relationships to literals exist. The subjective nature of
                experience emerges from the qualifier (i) whose relationships constitute the qualities of its symbols. The
                "what it's like" of conscious experience is precisely the having of symbols qualified by qualities that
                represent but do not equal their literal properties.
            </Paragraph>
            <Paragraph>
                The elegance of this view is its parsimony: it requires no special substance or property dualism, only the
                recognition that representation creates a semantic domain distinct from but related to the literal.
                Consciousness is the space where this representational framework exists—where symbols can bear qualities
                that their literals possess as properties.
            </Paragraph>
            <Paragraph>
                This is why conscious experience feels both undeniable and inexplicable: undeniable because we directly
                inhabit the semantic space of symbols and qualities; inexplicable because science operates in the space of
                literals and properties. The two domains are connected through representation but never collapse into
                identity.
            </Paragraph>
            <Paragraph>The formula:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(i) =red> (rose) =|> (rose) =red> rose =|> rose =[red]> rose`}
            </CodeBox>
            <Paragraph>
                captures the complete architecture: from qualifier through symbol to literal, from subjective quality
                through representation to objective property. This is the semantic structure of conscious
                experience—rigorous, formal, yet preserving the essential mystery of what it means to be a subject in a
                world of objects.
            </Paragraph>
        </Section>
    </Chapter>
);

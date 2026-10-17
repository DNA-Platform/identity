import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Representation v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Representation at version 1</Heading>
            <Heading>The Semantics of Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present a three-frame semantic architecture for understanding representation in Semantic Reference
                Theory. By distinguishing between the frame of literature F&#91;&#91;L&#93;&#93;, the frame of
                representation F&#91;L&#93;, and the frame of specification F&#91;(L)&#93;, we establish a complete theory
                of how representations capture, structure, and express their subjects. The framework reveals that
                representations are not mere pointers to content but complete semantic systems involving catalogues of
                symbols, compositions of characters, and specifications of reference patterns. Through the library metaphor,
                we show how meaning emerges from the interaction of these three semantic frames.
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                Every representation involves three distinct semantic perspectives: what is being represented, how it is
                structured as a representation, and the specification of its referential mechanics. Traditional theories of
                representation often conflate these perspectives, leading to confusion about what representations are and
                how they function. This paper establishes a formal framework that cleanly separates these concerns while
                showing how they interact to create meaningful representation.
            </Paragraph>
            <Paragraph>
                The central metaphor draws from the library—an institution dedicated to organizing and providing access to
                literature. Just as a library contains literature (content), maintains a catalogue (reference system), and
                operates according to specified principles (methodology), representations function through analogous
                structures. This metaphor is not merely illustrative but formally precise, as we will demonstrate through
                the three-frame architecture.
            </Paragraph>
            <Heading>Part I: The Frame of Literature F&#91;&#91;L&#93;&#93;</Heading>
            <Heading>The Subject of Representation</Heading>
            <Paragraph>
                When we speak of representing something, we must first establish what that something is—the subject of the
                representation. In our framework, we work within the frame F&#91;&#91;L&#93;&#93;, where &#91;L&#93; denotes
                the literature, the literal content that exists independent of any particular representation of it.
            </Paragraph>
            <Paragraph>Consider representing a rose. In F&#91;&#91;L&#93;&#93;, we encounter:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}[rose] -> [flower]
[flower] -> [plant]
[rose] =[red]> [rose]
[petal] =similar> [petal]
[stem] =supports> [flower]`}
            </CodeBox>
            <Paragraph>
                These are literal relationships—facts about roses that hold regardless of how we choose to represent them.
                The square brackets indicate that these are literals, not symbols. They exist in the world (or in the
                conceptual space) that our representation will attempt to capture.
            </Paragraph>
            <Heading>Why "Literature"?</Heading>
            <Paragraph>
                We call this the literature because, like literary content, it consists of the stories, relationships, and
                meanings that pre-exist their telling. A rose's redness, its petal structure, its biological
                classification—these are the literature about roses. When we create a representation, we are not creating
                this content but rather creating a way to reference and structure it.
            </Paragraph>
            <Paragraph>The literature is characterized by:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Independence
                    </Word>: It exists whether or not it is represented
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Completeness
                    </Word>: It contains all possible facts about the subject
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Literalness
                    </Word>: Its elements are not symbols but the actual things or concepts
                </Line>
            </Paragraph>
            <Paragraph>In F&#91;&#91;L&#93;&#93;, we write relationships between literals:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}[blue] =similar> [yellow]  // Similar as primary colors
[blue] =combines> [yellow] =produces> [green]`}
            </CodeBox>
            <Paragraph>
                These relationships in the literature will be referenced by our representation, but they are not themselves
                part of the representation—they are what the representation is about.
            </Paragraph>
            <Heading>Part II: The Frame of Representation F&#91;L&#93;</Heading>
            <Heading>The Structure of Representation</Heading>
            <Paragraph>
                Moving to F&#91;L&#93;, we encounter the representation itself as a structured semantic object. Here, L is
                the representation—a collection that contains several key components:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`L -> container
L =contains> Catalogue(L)
L =contains> Literature(L)
L =contains> Composition(L)
L =contains> Specification(L)`}
            </CodeBox>
            <Paragraph>Each component serves a distinct role in the representation.</Paragraph>
            <Heading>The Catalogue: Symbols and Reference</Heading>
            <Paragraph>
                The Catalogue(L) contains the symbols that reference the literature. In the library metaphor, a catalogue
                doesn't contain books—it contains ways to find and reference books. Similarly, our Catalogue contains
                symbols that refer to elements in the Literature:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Catalogue(L) -> container
Catalogue(L) =contains> (rose)
Catalogue(L) =contains> (red)
Catalogue(L) =contains> (petal)`}
            </CodeBox>
            <Paragraph>Each symbol in the catalogue references something in the literature:</Paragraph>
            <CodeBox>
                {`${''}(rose) =(rose)> [rose]
(red) =(red)> [red]
(petal) =(petal)> [petal]`}
            </CodeBox>
            <Paragraph>
                The parenthetical notation (x) indicates a symbol—something that represents rather than is.
            </Paragraph>
            <Heading>The Composition: Characters and Interaction</Heading>
            <Paragraph>
                Symbols don't exist in isolation; they are composed of more primitive elements we call characters. The
                Composition(L) contains these characters and describes how they interact:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}Composition(L) -> container
Composition(L) =contains> character[1]
Composition(L) =contains> character[2]
Composition(L) =contains> character[3]`}
            </CodeBox>
            <Paragraph>Characters interact to form larger structures:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}character[1] =interacts> character[2]
character[2] =interacts> character[3]
interacts -> connected`}
            </CodeBox>
            <Paragraph>Consider how the symbol (rose) might be composed:</Paragraph>
            <Paragraph>
                <List />
                <Line>In text: characters r, o, s, e interact sequentially</Line>
                <Line>In image: curved lines and color patches interact spatially</Line>
                <Line>In concept: semantic primitives interact structurally</Line>
            </Paragraph>
            <Paragraph>
                The interaction of characters creates the symbols that populate the catalogue. This two-level
                structure—characters composing into symbols—allows representations to build complex reference from simple
                elements.
            </Paragraph>
            <Heading>Example: Representing Color Mixing</Heading>
            <Paragraph>Consider representing the fact that blue and yellow make green:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}Literature(L) = {[blue], [yellow], [green]}

Catalogue(L) = {(blue), (yellow), (green)}

Composition(L):
(green) -> container
(green) =contains> (blue)
(green) =contains> (yellow)
(blue) =similar> (yellow)  // Similar as primary colors`}
            </CodeBox>
            <Paragraph>
                The representation shows that (green) literally contains (blue) and (yellow) as components, capturing the
                mixing relationship through composition structure rather than through external rules.
            </Paragraph>
            <Heading>Part III: The Frame of Specification F&#91;(L)&#93;</Heading>
            <Heading>The Transpilation of Notation</Heading>
            <Paragraph>
                Before examining specifications, we note that the notation Literature(L) transpiles to ((L), Literature),
                establishing that this is a relationship between L's canonical form and the concept Literature. This
                syntactic sugar makes our specifications more readable while maintaining formal precision.
            </Paragraph>
            <Heading>The Role of Specification</Heading>
            <Paragraph>
                In F&#91;(L)&#93;, we specify how the representation works—its semantic mechanics. The Specification doesn't
                just list components; it defines the semantic relationships that make the representation functional:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Specification(L) -> container
Specification(L) =contains> Symbol(L)
Specification(L) =contains> Character(L)
Specification(L) =contains> Reference(L)
Specification(L) =contains> Pattern(L)`}
            </CodeBox>
            <Heading>Defining the Components</Heading>
            <Paragraph>Within the specification frame, we establish the semantic roles:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Catalogue as Symbol for Literature
                </Word>:
            </Paragraph>
            <CodeBox>
                {`(Catalogue(L), Literature(L)) == Catalogue(L)`}
            </CodeBox>
            <Paragraph>
                This states that the Catalogue IS the most specific relationship between itself and the Literature—it
                functions as the Literature's symbol within the representation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Literature as Subject Specification
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Literature(L) =specifies> (subject of L)`}
            </CodeBox>
            <Paragraph>The Literature component specifies what the representation is about—its semantic domain.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Symbol and Character Relationships
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Symbol(L) -> container
Symbol(L) =contains> Character(L)
Character(L) =composes> Symbol(L)`}
            </CodeBox>
            <Paragraph>
                Symbols are composed of characters, and the specification defines how this composition works.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reference Semantics
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`Reference(L) =specifies> (how symbols in L refer to literature)`}
            </CodeBox>
            <Paragraph>
                Different representations might use different reference semantics—direct denotation, metaphorical reference,
                or structural correspondence.
            </Paragraph>
            <Heading>The Act of Specification</Heading>
            <Paragraph>When we specify a representation, we are establishing:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        What counts as a symbol
                    </Word> in this representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        How characters combine
                    </Word> to form symbols
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        How symbols reference
                    </Word> their subjects
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What patterns of interaction
                    </Word> create meaning
                </Line>
            </Paragraph>
            <Paragraph>For instance, specifying a visual representation of a rose:</Paragraph>
            <CodeBox>
                {`Symbol(rose_image) = {color patches, line segments, textures}
Character(rose_image) = {pixels, gradients}
Reference(rose_image) = {visual similarity, structural correspondence}
Pattern(rose_image) = {spatial adjacency, color harmony}`}
            </CodeBox>
            <Heading>Part IV: Integration - How the Three Frames Interact</Heading>
            <Heading>The Complete Representation System</Heading>
            <Paragraph>The three frames work together to create a complete representation:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        F&#91;&#91;L&#93;&#93;
                    </Word> provides the subject matter—what we're representing
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        F&#91;L&#93;
                    </Word> provides the structure—how we organize the representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        F&#91;(L)&#93;
                    </Word> provides the mechanics—how the representation works
                </Line>
            </Paragraph>
            <Heading>Example: Complete Rose Representation</Heading>
            <Paragraph>Let's trace how a rose representation works across all three frames:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    In F&#91;&#91;L&#93;&#93;
                </Word> - The Literature:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}[rose] -> [flower]
[rose] =[red]> [rose]
[petal] =curved> [petal]
[stem] =green> [stem]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    In F&#91;L&#93;
                </Word> - The Representation:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}L = rose_representation

Catalogue(L):
(rose), (petal), (stem), (red), (green), (curved)

Composition(L):
// Petal composition
petal_character[1] =interacts> petal_character[2]
petal_character[2] =interacts> curve_character
// Color composition  
(green) =contains> (blue)
(green) =contains> (yellow)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    In F&#91;(L)&#93;
                </Word> - The Specification:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(Catalogue(L), Literature(L)) == Catalogue(L)

Symbol(L) =includes> {(rose), (petal), (stem)}
Character(L) =includes> {curves, colors, connections}
Reference(L) = {(rose) =(rose)> [rose], 
                (petal) =(petal)> [petal]}
Pattern(L) = {petal_arrangement, color_harmony}`}
            </CodeBox>
            <Heading>Semantic Properties of the Framework</Heading>
            <Paragraph>This three-frame architecture reveals several important properties:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Separation of Concerns
                </Word>: The subject matter, structural organization, and referential mechanics are cleanly separated,
                allowing each to vary independently.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Compositional Structure
                </Word>: Representations build from characters to symbols to complete catalogues, mirroring how complex
                meanings emerge from simple elements.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Reference Without Conflation
                </Word>: Symbols reference literature without being confused with it—(rose) refers to &#91;rose&#93; but
                they remain distinct.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Multiple Valid Representations
                </Word>: The same literature can be represented through different catalogues, compositions, and
                specifications, explaining representational diversity.
            </Paragraph>
            <Heading>Part V: Implications</Heading>
            <Heading>For Semantic Theory</Heading>
            <Paragraph>
                This framework provides a formal account of how meaning can be about something without being that thing. The
                three-frame architecture shows that representation involves not just reference but structured organization
                and specified mechanics.
            </Paragraph>
            <Heading>For Philosophy of Representation</Heading>
            <Paragraph>
                The distinction between literature, catalogue, and specification resolves classical puzzles about
                representation. A painting of a rose works not because it resembles a rose but because its catalogue
                successfully references rose-literature through specified visual symbols composed of interacting color and
                shape characters.
            </Paragraph>
            <Heading>For Computational Representation</Heading>
            <Paragraph>
                The framework suggests how to build representation systems: define the literature (domain), create a
                catalogue (symbol system), establish composition (syntax), and specify reference mechanics (semantics).
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The semantics of representation requires three distinct but interrelated frames. The frame of literature
                F&#91;&#91;L&#93;&#93; establishes what is being represented—the subject matter that exists independent of
                representation. The frame of representation F&#91;L&#93; provides the structural organization through
                catalogues of symbols composed from interacting characters. The frame of specification F&#91;(L)&#93;
                defines how the representation works—how symbols reference literature and how characters compose into
                meaningful structures.
            </Paragraph>
            <Paragraph>
                Through the library metaphor, we see that representations are not simple pointers but complete semantic
                systems. Just as libraries organize access to literature through catalogues, representations organize access
                to their subjects through structured symbols. The three-frame architecture reveals that meaning emerges not
                from any single component but from the interaction of literature, structure, and specification.
            </Paragraph>
            <Paragraph>
                This framework explains why representations can be partial (catalogues need not reference all literature),
                why they can differ while representing the same subject (different specifications yield different
                representations), and how they maintain the distinction between symbol and referent that makes
                representation possible. The semantics of representation, properly understood, involves not just what we
                represent but how we structure that representation and specify its operation.
            </Paragraph>
        </Section>
    </Chapter>
);

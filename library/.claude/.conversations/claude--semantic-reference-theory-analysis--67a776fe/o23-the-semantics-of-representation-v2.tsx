import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Representation v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Representation at version 2</Heading>
            <Heading>The Semantics of Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present a three-frame semantic architecture for understanding representation in Semantic Reference
                Theory. By distinguishing between the frame F&#91;&#91;L&#93;&#93; where relationship types inherit from
                &#91;L&#93;, the frame F&#91;L&#93; where they inherit from L, and the frame F&#91;(L)&#93; where they
                inherit from (L), we establish a complete theory of how representations work. The framework reveals that
                representations involve subjects (what is represented), structures (how representation is organized), and
                specifications (how representation functions).
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                A representation L gives rise to three distinct semantic frames, each defined by what relationship types
                inherit from. This paper formalizes these frames and shows how they interact to create meaningful
                representation.
            </Paragraph>
            <Heading>Part I: The Frame Architecture</Heading>
            <Heading>Basic Definitions</Heading>
            <Paragraph>Given a representation L, we have:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        &#91;L&#93;
                    </Word> - The dereference of L, what L represents (the subject)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        L
                    </Word> - The representation itself
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        (L)
                    </Word> - The canonical symbol of L (the specification)
                </Line>
            </Paragraph>
            <Paragraph>
                From these, we derive three frames where all relationship types inherit from the frame's subject:
            </Paragraph>
            <Heading>Frame F&#91;&#91;L&#93;&#93;: The Subject Frame</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: F&#91;&#91;L&#93;&#93; is the frame where &#91;L&#93; serves as the base relationship type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal constraint
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[[L]]: A[x,y,t]: x =t> y =|> t -> [L]`}
            </CodeBox>
            <Paragraph>
                In this frame, all relationship types inherit from &#91;L&#93;. This means we're working within the semantic
                space of what L represents.
            </Paragraph>
            <Heading>Frame F&#91;L&#93;: The Representation Frame</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: F&#91;L&#93; is the frame where L serves as the base relationship type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal constraint
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[L]: A[x,y,t]: x =t> y =|> t -> L`}
            </CodeBox>
            <Paragraph>
                In this frame, all relationship types inherit from L. This means we're working within the representation
                itself as a semantic structure.
            </Paragraph>
            <Heading>Frame F&#91;(L)&#93;: The Specification Frame</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition
                </Word>: F&#91;(L)&#93; is the frame where (L) serves as the base relationship type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal constraint
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[(L)]: A[x,y,t]: x =t> y =|> t -> (L)`}
            </CodeBox>
            <Paragraph>
                In this frame, all relationship types inherit from (L). This means we're working within the specification of
                how L functions.
            </Paragraph>
            <Heading>Part II: The Subject Frame F&#91;&#91;L&#93;&#93;</Heading>
            <Paragraph>
                In F&#91;&#91;L&#93;&#93;, we work with the subject matter that L represents. Here, elements and
                relationships are part of what is being represented:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}rose -> [L]
red -> [L]
petal -> [L]
rose =has> petal  // has -> [L] by frame definition
petal =is> red    // is -> [L] by frame definition`}
            </CodeBox>
            <Paragraph>
                These are the literal relationships that exist in the subject domain. They are what the representation will
                attempt to capture.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key property
                </Word>: In F&#91;&#91;L&#93;&#93;, we deal with literals, not symbols:
            </Paragraph>
            <CodeBox>
                {`rose != (rose)
red != (red)`}
            </CodeBox>
            <Paragraph>The elements in this frame exist independent of any representation of them.</Paragraph>
            <Heading>Part III: The Representation Frame F&#91;L&#93;</Heading>
            <Paragraph>In F&#91;L&#93;, L functions as a structured container with specific components:</Paragraph>
            <CodeBox>
                {`L -> representation
representation -> container`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Core structure
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`L =contains> Literature(L)
L =contains> Catalogue(L)
L =contains> Composition(L)
L =contains> Specification(L)`}
            </CodeBox>
            <Paragraph>
                Since we're in F&#91;L&#93;, contains -&gt; L, establishing that containment is a representational
                relationship.
            </Paragraph>
            <Heading>Literature(L)</Heading>
            <Paragraph>The Literature consists of references to elements from F&#91;&#91;L&#93;&#93;:</Paragraph>
            <CodeBox>
                {`${''}Literature(L) = {x : x exists in F[[L]]}`}
            </CodeBox>
            <Paragraph>
                For example, if rose, red, petal exist in F&#91;&#91;L&#93;&#93;, then Literature(L) includes them.
            </Paragraph>
            <Heading>Catalogue(L)</Heading>
            <Paragraph>The Catalogue contains symbols that reference the Literature:</Paragraph>
            <CodeBox>
                {`Catalogue(L) -> container
(rose) =|in> Catalogue(L)
(red) =|in> Catalogue(L)
(petal) =|in> Catalogue(L)`}
            </CodeBox>
            <Paragraph>Each symbol references something in the Literature:</Paragraph>
            <CodeBox>
                {`(rose) =(rose)> rose
(red) =(red)> red`}
            </CodeBox>
            <Heading>Composition(L)</Heading>
            <Paragraph>The Composition contains characters that interact to form symbols:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`Composition(L) -> container
character1 =|in> Composition(L)
character2 =|in> Composition(L)
character1 =interacts> character2`}
            </CodeBox>
            <Paragraph>
                Since we're in F&#91;L&#93;, interacts -&gt; L, making interaction a representational relationship.
            </Paragraph>
            <Heading>Specification(L)</Heading>
            <Paragraph>
                The Specification contains the rules and patterns that govern the representation. This will be elaborated in
                F&#91;(L)&#93;.
            </Paragraph>
            <Heading>Part IV: The Specification Frame F&#91;(L)&#93;</Heading>
            <Paragraph>
                In F&#91;(L)&#93;, we specify how L functions as a representation. The notation Literature(L) transpiles to
                ((L), Literature), establishing relationships between L's canonical form and semantic concepts.
            </Paragraph>
            <Heading>Key Semantic Relations</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The Catalogue-Literature Relationship
                </Word>:
            </Paragraph>
            <CodeBox>
                {`(Catalogue(L), Literature(L)) == Catalogue(L)`}
            </CodeBox>
            <Paragraph>
                This states that the Catalogue IS the most specific relationship between itself and the Literature—the
                Catalogue serves as the Literature's symbol within the representation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Component Specifications
                </Word>:
            </Paragraph>
            <Paragraph>Literature(L) specifies what is being represented:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}Literature(L) =specifies> [L]`}
            </CodeBox>
            <Paragraph>Catalogue(L) specifies the reference mechanism:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`Catalogue(L) =specifies> reference_semantics`}
            </CodeBox>
            <Paragraph>Composition(L) specifies character interaction patterns:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`Composition(L) =specifies> interaction_patterns`}
            </CodeBox>
            <Paragraph>
                Since we're in F&#91;(L)&#93;, specifies -&gt; (L), making specification a relationship that inherits from
                L's canonical form.
            </Paragraph>
            <Heading>Symbol-Character Relations</Heading>
            <Paragraph>Within F&#91;(L)&#93;, we establish:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`Symbol(L) -> container
Character(L) -> Composition(L)
Symbol(L) =contains> Character(L)`}
            </CodeBox>
            <Paragraph>This specifies that symbols are composed of characters within the representation.</Paragraph>
            <Heading>Part V: Inter-Frame Relations</Heading>
            <Heading>Separation of Domains</Heading>
            <Paragraph>Elements in different frames are distinct:</Paragraph>
            <CodeBox>
                {`${''}x in F[[L]] != (x) in F[L]
[L] != L != (L)`}
            </CodeBox>
            <Heading>Reference Across Frames</Heading>
            <Paragraph>Symbols in F&#91;L&#93; reference elements in F&#91;&#91;L&#93;&#93;:</Paragraph>
            <CodeBox>
                {`${''}(x) in F[L] references x in F[[L]]
(x) =(x)> x`}
            </CodeBox>
            <Heading>Specification Governs Structure</Heading>
            <Paragraph>Specifications in F&#91;(L)&#93; determine how F&#91;L&#93; operates:</Paragraph>
            <CodeBox>
                {`${''}Pattern in F[(L)] governs Structure in F[L]`}
            </CodeBox>
            <Heading>Part VI: Example - Representing Color Mixing</Heading>
            <Heading>In F&#91;&#91;L&#93;&#93; - The Subject</Heading>
            <CodeBox>
                {`${''}blue -> [L]
yellow -> [L]  
green -> [L]
blue + yellow = green  // Literal fact about colors`}
            </CodeBox>
            <Heading>In F&#91;L&#93; - The Representation</Heading>
            <CodeBox
                language="srt"
            >
                {`Literature(L) = {blue, yellow, green}

Catalogue(L) = {(blue), (yellow), (green)}

Composition(L):
(green) -> container
(green) =contains> (blue)
(green) =contains> (yellow)`}
            </CodeBox>
            <Paragraph>
                The representation shows (green) containing (blue) and (yellow), capturing the mixing relationship through
                structure.
            </Paragraph>
            <Heading>In F&#91;(L)&#93; - The Specification</Heading>
            <CodeBox
                language="srt"
            >
                {`(Catalogue(L), Literature(L)) == Catalogue(L)

Mixing_Pattern =specifies> "components contained in result"
Reference_Type =specifies> "compositional"`}
            </CodeBox>
            <Heading>Part VII: Formal Properties</Heading>
            <Heading>Well-Formedness</Heading>
            <Paragraph>A representation L is well-formed iff:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>F&#91;&#91;L&#93;&#93; contains the subject matter</Line>
                <Line>F&#91;L&#93; contains Literature, Catalogue, Composition, and Specification</Line>
                <Line>F&#91;(L)&#93; specifies how components relate</Line>
            </Paragraph>
            <Heading>Completeness</Heading>
            <Paragraph>A representation is complete iff:</Paragraph>
            <CodeBox>
                {`${''}A[x in Literature(L)]: E[(x) in Catalogue(L)]: (x) =(x)> x`}
            </CodeBox>
            <Paragraph>Every element in the Literature has a corresponding symbol in the Catalogue.</Paragraph>
            <Heading>Connectivity</Heading>
            <Paragraph>All elements in a representation must be connected:</Paragraph>
            <CodeBox>
                {`${''}A[x,y in L]: E[path]: x -path-> y`}
            </CodeBox>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The three-frame architecture provides a formal foundation for understanding representation.
                F&#91;&#91;L&#93;&#93; establishes the subject matter where all relationships inherit from &#91;L&#93;.
                F&#91;L&#93; establishes the representational structure where all relationships inherit from L.
                F&#91;(L)&#93; establishes the specification where all relationships inherit from (L). Together, these
                frames show that representation is not simple reference but a structured semantic system involving subjects,
                symbols, and specifications.
            </Paragraph>
        </Section>
    </Chapter>
);

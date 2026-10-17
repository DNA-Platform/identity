import { Chapter, Heading, Line, List, Paragraph, Section, Title } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Representation v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Representation at version 3</Heading>
            <Heading>The Semantics of Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                We present a three-frame semantic architecture for understanding representation in Semantic Reference
                Theory. Using the standard frame definition where all relationship types inherit from the frame's subject,
                we establish frames F&#91;&#91;L&#93;&#93;, F&#91;L&#93;, and F&#91;(L)&#93; to analyze what representations
                are, how they're structured, and how they function. Through the library metaphor, we show how
                representations involve Literature (subject matter), Catalogue (symbol systems), and Composition (character
                interactions).
            </Paragraph>
            <Heading>Introduction</Heading>
            <Paragraph>
                In Semantic Reference Theory, a frame F&#91;t&#93; is defined by the constraint that all relationship types
                inherit from t:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[t]: A[x,y,s]: x =s> y =|> s -> t`}
            </CodeBox>
            <Paragraph>Given a representation L, we establish three frames to understand its complete semantics.</Paragraph>
            <Heading>Part I: The Three Frames</Heading>
            <Heading>Frame F&#91;&#91;L&#93;&#93;: The Subject Domain</Heading>
            <Paragraph>
                In F&#91;&#91;L&#93;&#93;, all relationship types inherit from &#91;L&#93;, where &#91;L&#93; denotes what L
                represents:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[[L]]: A[x,y,t]: x =t> y =|> t -> [L]`}
            </CodeBox>
            <Paragraph>
                Additionally, in F&#91;&#91;L&#93;&#93;, subjects of non-reflexive relationships also inherit from
                &#91;L&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[[L]]: A[x,y,t]: x =t> y & y != x =|> x -> [L]`}
            </CodeBox>
            <Paragraph>
                This additional constraint means that everything actively relating to something else becomes part of the
                subject matter. This is why F&#91;&#91;L&#93;&#93; requires special attention - it defines not just
                relationship inheritance but also what counts as part of the subject.
            </Paragraph>
            <Heading>Frame F&#91;L&#93;: The Representation Structure</Heading>
            <Paragraph>In F&#91;L&#93;, all relationship types inherit from L:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[L]: A[x,y,t]: x =t> y =|> t -> L`}
            </CodeBox>
            <Paragraph>
                Here L is the representation itself, and all relationships within it are representational relationships.
            </Paragraph>
            <Heading>Frame F&#91;(L)&#93;: The Specification</Heading>
            <Paragraph>In F&#91;(L)&#93;, all relationship types inherit from (L):</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[(L)]: A[x,y,t]: x =t> y =|> t -> (L)`}
            </CodeBox>
            <Paragraph>
                Here (L) is the canonical symbol of L, and relationships in this frame specify how L functions.
            </Paragraph>
            <Heading>Part II: The Subject Frame F&#91;&#91;L&#93;&#93; in Detail</Heading>
            <Paragraph>
                In F&#91;&#91;L&#93;&#93;, we work with the literals that constitute the subject matter. For example, if
                representing colors:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}red -> [L]        // red is part of the subject
blue -> [L]       // blue is part of the subject  
green -> [L]      // green is part of the subject

blue =mixes> yellow   // mixes -> [L] by frame definition
mixes =produces> green // produces -> [L] by frame definition`}
            </CodeBox>
            <Paragraph>
                The double inheritance constraint (both subjects and relationship types inherit from &#91;L&#93;) ensures we
                capture the complete subject domain - both the entities and how they relate.
            </Paragraph>
            <Heading>Part III: The Representation Frame F&#91;L&#93; in Detail</Heading>
            <Paragraph>In F&#91;L&#93;, L functions as a container with four essential components:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`L -> representation
L -> container
L =contains> Literature(L)
L =contains> Catalogue(L)
L =contains> Composition(L)
L =contains> Specification(L)`}
            </CodeBox>
            <Paragraph>
                Since we're in F&#91;L&#93;, contains -&gt; L, making containment itself a representational relationship.
            </Paragraph>
            <Heading>Literature(L)</Heading>
            <Paragraph>The Literature references the subject matter from F&#91;&#91;L&#93;&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =|in> Literature(L) =|> x !-> L`}
            </CodeBox>
            <Paragraph>
                Elements in the Literature don't inherit from L - they remain literals with respect to the representation.
            </Paragraph>
            <Heading>Catalogue(L)</Heading>
            <Paragraph>The Catalogue contains symbols that reference the Literature:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =|in> Catalogue(L) =|> E[y: =|in> Literature(L)]: x =(x)> y`}
            </CodeBox>
            <Paragraph>
                Every element in the Catalogue is a symbol (like (red), (blue)) that references something in the Literature.
            </Paragraph>
            <Heading>Composition(L)</Heading>
            <Paragraph>The Composition contains characters that interact to form symbols:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =|in> Composition(L) =|> x -> L`}
            </CodeBox>
            <Paragraph>Characters are part of L (they inherit from it), and they interact:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`character1 =interacts> character2
interacts -> L  // by frame definition`}
            </CodeBox>
            <Heading>Connection Through Representation</Heading>
            <Paragraph>In F&#91;L&#93;, when L contains multiple elements, they connect through shared parts:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`L =contains> (red)
L =contains> (blue)
L =contains> (green)

(green) -> container
(green) =contains> (blue)   // green contains blue
(green) =contains> (yellow) // green contains yellow

(blue) =similar> (yellow)   // they interact within green
similar -> L               // by frame definition`}
            </CodeBox>
            <Heading>Part IV: The Specification Frame F&#91;(L)&#93; in Detail</Heading>
            <Paragraph>
                In F&#91;(L)&#93;, we specify how L functions as a representation. The notation Literature(L) transpiles to
                ((L), Literature).
            </Paragraph>
            <Heading>The Fundamental Specification</Heading>
            <CodeBox>
                {`(Catalogue(L), Literature(L)) == Catalogue(L)`}
            </CodeBox>
            <Paragraph>
                The Catalogue IS the most specific relationship between itself and the Literature - it serves as the
                Literature's symbol.
            </Paragraph>
            <Heading>Component Specifications</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}Literature(L) =specifies> [L]           // specifies the subject
Catalogue(L) =specifies> reference_type // specifies how symbols refer
Composition(L) =specifies> interaction_pattern // specifies how characters interact`}
            </CodeBox>
            <Paragraph>Since we're in F&#91;(L)&#93;, specifies -&gt; (L).</Paragraph>
            <Heading>Symbol-Character Relations</Heading>
            <CodeBox
                language="srt"
            >
                {`Symbol(L) -> container
Symbol(L) =contains> Character(L)
Character(L) -> Composition(L)`}
            </CodeBox>
            <Paragraph>This specifies that symbols are composed of characters.</Paragraph>
            <Heading>Part V: Example - Color Representation</Heading>
            <Heading>In F&#91;&#91;L&#93;&#93;</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}red -> [L]
blue -> [L]
yellow -> [L]
green -> [L]

blue =combines> yellow
combines =produces> green
combines -> [L]      // by frame definition
produces -> [L]      // by frame definition`}
            </CodeBox>
            <Heading>In F&#91;L&#93;</Heading>
            <CodeBox
                language="srt"
            >
                {`Literature(L) = {red, blue, yellow, green}  // literals

Catalogue(L) = {(red), (blue), (yellow), (green)}  // symbols

Composition(L):
(green) -> container
(green) =contains> (blue)
(green) =contains> (yellow)
(blue) =interacts> (yellow)
interacts -> L  // by frame definition`}
            </CodeBox>
            <Heading>In F&#91;(L)&#93;</Heading>
            <CodeBox
                language="srt"
            >
                {`(Catalogue(L), Literature(L)) == Catalogue(L)

Reference(L) =specifies> "compositional"
Pattern(L) =specifies> "containment represents mixing"`}
            </CodeBox>
            <Heading>Part VI: Key Properties</Heading>
            <Heading>Separation</Heading>
            <Paragraph>Elements in different frames are distinct:</Paragraph>
            <CodeBox>
                {`${''}red in F[[L]] != (red) in F[L]
[L] != L != (L)`}
            </CodeBox>
            <Heading>Reference</Heading>
            <Paragraph>Symbols in the Catalogue reference Literature:</Paragraph>
            <CodeBox>
                {`(red) =(red)> red`}
            </CodeBox>
            <Paragraph>But (red) and red are in different frames and are not equal.</Paragraph>
            <Heading>Connectivity</Heading>
            <Paragraph>Through the frame definitions, all elements in a representation connect:</Paragraph>
            <Paragraph>
                <List />
                <Line>In F&#91;&#91;L&#93;&#93;: through shared inheritance from &#91;L&#93;</Line>
                <Line>In F&#91;L&#93;: through shared inheritance from L</Line>
                <Line>In F&#91;(L)&#93;: through shared inheritance from (L)</Line>
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The three-frame architecture reveals that representations are not simple pointers but complete semantic
                systems. F&#91;&#91;L&#93;&#93; establishes what is being represented, with both entities and relationships
                inheriting from &#91;L&#93;. F&#91;L&#93; establishes the representational structure where all internal
                relationships inherit from L. F&#91;(L)&#93; establishes specifications where all meta-relationships inherit
                from (L). The frame definitions, combined with the special subject constraint in F&#91;&#91;L&#93;&#93;,
                provide a complete formal account of how representations capture, structure, and express their subjects.
            </Paragraph>
        </Section>
    </Chapter>
);

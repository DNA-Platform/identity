import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Theory - Formal Foundations v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Theory - Formal Foundations at version 1</Heading>
            <Heading>Semantic Reference Theory - Formal Foundations</Heading>
            <Heading>Notation (Your Programmatic Grammar)</Heading>
            <Heading>Quantifiers</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        Ex: P(x)
                    </Word> or <Word>
                        <Verbatim />
                        E&#91;x&#93;: P(x)
                    </Word> means "there exists x such that P(x)"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        Ax: P(x)
                    </Word> or <Word>
                        <Verbatim />
                        A&#91;x&#93;: P(x)
                    </Word> means "for all x, P(x)"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        E&#91;x,y&#93;: P(x,y)
                    </Word> means "there exist x and y such that P(x,y)"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        A&#91;x&#93;.E&#91;y&#93;: P(x,y)
                    </Word> means "for all x, there exists y such that P(x,y)"
                </Line>
            </Paragraph>
            <Heading>Logical Operators</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        !X
                    </Word> means "not X"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        X &amp; Y
                    </Word> means "X and Y"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        X | Y
                    </Word> means "X xor Y"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        X || Y
                    </Word> means "X or Y"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        X =|&gt; Y
                    </Word> means "X implies Y"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        X &lt;|=|&gt; Y
                    </Word> or <Word>
                        <Verbatim />
                        X === Y
                    </Word> means "X if and only if Y"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x == y
                    </Word> means "x equals y" (non-logical equality)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x != y
                    </Word> means "x does not equal y"
                </Line>
            </Paragraph>
            <Heading>Core SRT Relations</Heading>
            <Heading>Direct Relationship (=t&gt;)</Heading>
            <CodeBox
                language="srt"
            >
                {`x =t> y := R(x,y,t)`}
            </CodeBox>
            <Paragraph>Means: x relates to y through relationship type t</Paragraph>
            <Heading>Simple Existence (=&gt;)</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x => y := E[t]: x =t> y`}
            </CodeBox>
            <Paragraph>Means: There exists some relationship between x and y</Paragraph>
            <Heading>Inheritance (-&gt;)</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x -> y := x == y || x => y || E[z]: x -> z & z -> y`}
            </CodeBox>
            <Paragraph>Means: x inherits from y through a chain of relationships (transitive, reflexive)</Paragraph>
            <Heading>The Architecture of Reference</Heading>
            <Heading>1. Representation</Heading>
            <CodeBox
                language="srt"
            >
                {`x represents y := x =x> y`}
            </CodeBox>
            <Paragraph>
                When x relates to y through itself as the relationship type. This is the fundamental act of representation.
            </Paragraph>
            <Heading>2. Symbol</Heading>
            <CodeBox
                language="srt"
            >
                {`x is a symbol for y := x =x> y & (x,y) == x`}
            </CodeBox>
            <Paragraph>A symbol is:</Paragraph>
            <Paragraph>
                <List />
                <Line>A representation (x =x&gt; y)</Line>
                <Line>Where x IS the most specific relationship between itself and y</Line>
                <Line>The relationship has been objectified into x itself</Line>
            </Paragraph>
            <Heading>3. Reference (The Most Specific Form)</Heading>
            <CodeBox>
                {`x is a reference for y := x is a symbol for y`}
            </CodeBox>
            <Paragraph>
                Reference is the terminal case - when representation becomes so specific it collapses into identity with the
                relationship itself.
            </Paragraph>
            <Paragraph>
                Your insight: "the most specific form of referring is being a reference" - it gets objectified in grammar,
                specific enough to become a subject.
            </Paragraph>
            <Heading>4. Referential Inclusion</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}z refers to y := E[x,t]: x =x> y & z =t> y & t -> x`}
            </CodeBox>
            <Paragraph>This is mediated reference - z refers to y through some representation x.</Paragraph>
            <Heading>Types, Instances, and Properties</Heading>
            <Heading>Types</Heading>
            <CodeBox
                language="srt"
            >
                {`type =type> instance`}
            </CodeBox>
            <Paragraph>A type represents its instances. The relationship IS the type itself.</Paragraph>
            <Heading>Canonical Instance</Heading>
            <CodeBox
                language="srt"
            >
                {`type =type> {type}
(type, {type}) == type`}
            </CodeBox>
            <Paragraph>The canonical &#123;type&#125; is:</Paragraph>
            <Paragraph>
                <List />
                <Line>An instance of type</Line>
                <Line>The most specific instance (prototype)</Line>
                <Line>What type symbolizes</Line>
            </Paragraph>
            <Heading>Properties</Heading>
            <CodeBox
                language="srt"
            >
                {`x =p> x =|> p -> eq`}
            </CodeBox>
            <Paragraph>Properties are self-relationships that inherit from equality.</Paragraph>
            <Heading>Specific Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}(x,y) := the most specific relationship between x and y
A[t]: x =t> y =|> (x,y) -> t`}
            </CodeBox>
            <Paragraph>For any x,y pair, there exists a unique most specific relationship.</Paragraph>
            <Heading>The Ontology of Red</Heading>
            <Heading>The Problem with "Red"</Heading>
            <Paragraph>Consider your linguistic evidence:</Paragraph>
            <Paragraph>
                <List />
                <Line>✓ "I love red. This whole room is painted red."</Line>
                <Line>✗ "I love dog. This whole room is painted dog."</Line>
            </Paragraph>
            <Paragraph>Dog is a type that can be instantiated:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`Dog =type> {fido}
Dog =type> {rover}`}
            </CodeBox>
            <Paragraph>But red cannot be instantiated. There are no "instances of red":</Paragraph>
            <Paragraph>
                <List />
                <Line>Light red is not an instance of red</Line>
                <Line>Dark red is not an instance of red</Line>
                <Line>This red apple is not an instance of red</Line>
            </Paragraph>
            <Heading>Red as Pure Symbol</Heading>
            <Paragraph>
                Red functions as a <Word>
                    <Bold />
                    qualitative symbol
                </Word> - a symbol that represents a range of experiences without having instances:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`red =red> light-red
red =red> dark-red
red =red> crimson`}
            </CodeBox>
            <Paragraph>But these are not type-instance relationships. They are symbolic representations where:</Paragraph>
            <Paragraph>
                <List />
                <Line>Red symbolizes a quality range</Line>
                <Line>Red can refer to any point in that range</Line>
                <Line>But no point IS an instance of red</Line>
            </Paragraph>
            <Heading>The Linguistic Test</Heading>
            <Paragraph>The grammatical difference reveals the semantic structure:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Types (can be instantiated):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"a dog" (indefinite instance)</Line>
                <Line>"the dog" (definite instance)</Line>
                <Line>"dogs" (pluralization)</Line>
                <Line>Cannot be used as mass nouns: *"filled with dog"</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Qualitative Symbols (cannot be instantiated):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"red" (already mass-like)</Line>
                <Line>No "a red" (as instance)</Line>
                <Line>No "reds" (no pluralization of instances)</Line>
                <Line>Can be used as mass nouns: "filled with red"</Line>
            </Paragraph>
            <Heading>The Formal Distinction</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}x -> type := E[y]: x =type> y & y != x
x -> qual-symbol := A[y]: x =x> y =|> y -> x || x -> y`}
            </CodeBox>
            <Paragraph>
                A type has instances distinct from itself. A qualitative symbol only represents things that inherit from it
                or that it inherits from.
            </Paragraph>
            <Heading>Why This Matters</Heading>
            <Paragraph>This explains why:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>You can't have "instances of happiness" - only happy things</Line>
                <Line>Colors, emotions, and qualities resist instantiation</Line>
                <Line>"Seeing red" works as an idiom - you can't literally see pure red</Line>
                <Line>Qualia (as instances of qualities) are a category error</Line>
            </Paragraph>
            <Paragraph>
                Red is not a type but a <Word>
                    <Bold />
                    symbolic quality
                </Word> - it exists only as a symbol that represents ranges of experience, never as something that can be
                instantiated.
            </Paragraph>
            <Heading>Collections and Pluralization</Heading>
            <Heading>Collections</Heading>
            <CodeBox
                language="srt"
            >
                {`C =collection> x  // C represents member x
C =collection> y  // C represents member y`}
            </CodeBox>
            <Paragraph>Collections represent each member without symbolizing any of them.</Paragraph>
            <Heading>Pluralization</Heading>
            <CodeBox>
                {`P(Dog) := indefinite pluralization of Dog type
C symbolizes P(Dog) when:
(C, P(Dog)) == C`}
            </CodeBox>
            <Heading>Empty Collections</Heading>
            <Paragraph>The empty collection still has semantic content:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`∅C =collection> element-role
(∅C, element-role) == element-role`}
            </CodeBox>
            <Paragraph>It symbolizes the role of membership without any actual members.</Paragraph>
            <Heading>Semantic Inconsistency</Heading>
            <Paragraph>The core inconsistency theorem:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`If !r is defined such that R(x,y,!r) <|=|> !R(x,y,r)
Then by base axiom: !r -> r
Therefore: x =!r> y =|> x =r> y
Contradiction with !R(x,y,r)`}
            </CodeBox>
            <Paragraph>You cannot negate relationship types within SRT without creating inconsistency.</Paragraph>
            <Heading>The Transduction Operator (|=&gt;)</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[t]: x =t> y |=t> x =t> y`}
            </CodeBox>
            <Paragraph>
                When an existential statement lacks a satisfying referent in the catalog, the transduction operator adds it
                as a constant, resolving the existential crisis.
            </Paragraph>
            <Paragraph>This is metalogical - it modifies the theory itself to maintain consistency.</Paragraph>
        </Section>
    </Chapter>
);

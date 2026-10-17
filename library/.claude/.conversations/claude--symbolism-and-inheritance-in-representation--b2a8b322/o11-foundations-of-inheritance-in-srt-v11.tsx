import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Foundations of Inheritance in SRT v11 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Foundations of Inheritance in SRT at version 11</Heading>
            <Heading>Foundations of Inheritance in Semantic Reference Theory</Heading>
            <Heading>Purpose</Heading>
            <Paragraph>
                These axioms establish the structural foundations that make inheritance possible without presupposing what
                inheritance means. Through three carefully chosen constraints, we create the conditions where relationships
                naturally organize into hierarchies of specificity - from the universal to the particular.
            </Paragraph>
            <Heading>The Three Foundational Axioms</Heading>
            <Heading>Axiom 1: Universal Base</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: A[x,y,t]: x =t> y =|> x =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: A universal relationship <Word>
                    <Verbatim />
                    r
                </Word> exists through which all related pairs connect. This gives us a semantic foundation - a most general
                way of expressing that two things relate.
            </Paragraph>
            <Heading>Axiom 2: Relationship Specificity</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y =|> E[s]: A[u,v]: u =t> v =|> u =s> v`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: Every relationship type has a most specific version - a precise way of capturing exactly those
                pairs that relate through that type and no others.
            </Paragraph>
            <Heading>Axiom 3: Implication Asymmetry</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A{s,t}: s != t & A[x,y]: x =s> y =|> x =t> y =|> !A[x,y]: x =t> y =|> x =s> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: When one relationship implies another, the reverse cannot hold unless they're identical. This
                prevents circular dependencies where relationships mutually require each other.
            </Paragraph>
            <Heading>Theorem: Uniqueness of Most Specific Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement
                </Word>: For any x, y, t where <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>, the referent s guaranteed by Axiom 2 is unique.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Purpose
                </Word>: This uniqueness allows us to denote the most specific relationship between x and y as <Word>
                    <Verbatim />
                    (x,y)
                </Word> - a canonical representation that becomes fundamental to SRT's entire symbolic apparatus.
            </Paragraph>
            <Heading>Formal Proof</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Given
                    </Word>: For fixed x, y, t ``<Word>
                        <Verbatim />
                         x =t&gt; y 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        By Axiom 2
                    </Word>: A most specific container exists ``<Word>
                        <Verbatim />
                         E&#91;s&#93;: A&#91;u,v&#93;: u =t&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Assume
                    </Word>: Another distinct container exists ``<Word>
                        <Verbatim />
                         E&#91;r&#93;: r != s &amp; A&#91;u,v&#93;: u =t&gt; v =|&gt; u =r&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Consequence
                    </Word>: Every t-relationship appears in both ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =t&gt; v =|&gt; u =s&gt; v &amp; u =r&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Key Lemma
                    </Word>: The containers relate identical pairs ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =s&gt; v &lt;|=|&gt; u =r&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Forward proof
                    </Word> of (5): Assume <Word>
                        <Verbatim />
                        u =s&gt; v
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            If
                        </Word> <Word>
                            <Verbatim />
                            u =t&gt; v
                        </Word>: Then <Word>
                            <Verbatim />
                            u =r&gt; v
                        </Word> by (3)
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            If
                        </Word> <Word>
                            <Verbatim />
                            u !=t&gt; v
                        </Word>: Then <Word>
                            <Verbatim />
                            u !=s&gt; v
                        </Word> by contrapositive of (2)
                    </Line>
                    <Line>The second case contradicts our assumption</Line>
                    <Line>
                        <Word>
                            <Bold />
                            Therefore
                        </Word>: <Word>
                            <Verbatim />
                            u =s&gt; v =|&gt; u =r&gt; v
                        </Word>
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Reverse proof
                    </Word>: By symmetry ``<Word>
                        <Verbatim />
                         u =r&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Establishing mutual implication
                    </Word>: ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =s&gt; v =|&gt; u =r&gt; v &amp; A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Applying Axiom 3
                    </Word>: Since <Word>
                        <Verbatim />
                        s != r
                    </Word> ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =s&gt; v =|&gt; u =r&gt; v =|&gt; !A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Contradiction emerges
                    </Word>: ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v      &#91;from (8)&#93; !A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v     &#91;from (9)&#93; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Resolution
                    </Word>: The assumption <Word>
                        <Verbatim />
                        r != s
                    </Word> creates contradiction ``<Word>
                        <Verbatim />
                         r == s 
                    </Word>``
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    QED
                </Word>: The most specific relationship between any two referents is unique.
            </Paragraph>
            <Heading>Semantic Achievement</Heading>
            <Heading>The Emergence of Inheritance</Heading>
            <Paragraph>
                Through these axioms, inheritance emerges as a natural relationship between relationship types. We can now
                formally define:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}s -> t := A[x,y]: x =s> y =|> x =t> y`}
            </CodeBox>
            <Paragraph>
                The axioms guarantee this inheritance relation has exactly the properties we need: it flows from specific to
                general, never creates cycles, and grounds out in unique most-specific relationships.
            </Paragraph>
            <Heading>Canonical Representation</Heading>
            <Paragraph>
                The uniqueness theorem justifies our notation <Word>
                    <Verbatim />
                    (x,y)
                </Word> for the most specific relationship between x and y. This becomes the foundation for SRT's
                representation functions - we can speak definitively about THE way x and y most specifically relate, not
                just one of several ways.
            </Paragraph>
            <Heading>Semantic Grounding</Heading>
            <Paragraph>
                These axioms reveal that relationships aren't just arbitrary connections but form natural hierarchies of
                meaning. Some ways of relating are more general (like the universal <Word>
                    <Verbatim />
                    r
                </Word>), others more specific (like each unique <Word>
                    <Verbatim />
                    (x,y)
                </Word>). This specificity hierarchy IS the structure of semantic meaning.
            </Paragraph>
            <Heading>Self-Reference and Properties</Heading>
            <Paragraph>
                The framework immediately explains properties as self-relationships. When <Word>
                    <Verbatim />
                    x =p&gt; x
                </Word>, we can investigate <Word>
                    <Verbatim />
                    (x,x)
                </Word> - the most specific way x relates to itself. Properties emerge from self-reference, grounded in the
                same inheritance structure that organizes all relationships.
            </Paragraph>
            <Heading>Computational Reality</Heading>
            <Paragraph>
                In a finite catalogue with N referents, these axioms create a finite, computable structure with at most N³
                relationships. The existence and uniqueness of most-specific relationships means a runtime can find them
                through exhaustive search, even though FOL cannot express this exhaustion directly.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                These three axioms achieve something remarkable: they create the minimal conditions for semantic inheritance
                without presupposing what inheritance means. From these foundations, the entire apparatus of representation,
                symbolism, and meaning can be constructed. The uniqueness of most-specific relationships provides the
                precision needed for formal semantics, while the universal relationship provides the generality needed for
                abstraction. Between these extremes, the inheritance structure organizes all semantic relationships into a
                comprehensible hierarchy of meaning.
            </Paragraph>
        </Section>
    </Chapter>
);

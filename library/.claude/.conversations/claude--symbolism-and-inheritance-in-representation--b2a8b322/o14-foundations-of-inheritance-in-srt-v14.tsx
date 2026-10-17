import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Foundations of Inheritance in SRT v14 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Foundations of Inheritance in SRT at version 14</Heading>
            <Heading>The Semantics of Relationships: An Axiomatic Foundation for Inheritance</Heading>
            <Heading>Purpose</Heading>
            <Paragraph>
                Semantic Reference Theory takes relationships as its fundamental subject - not merely as connections between
                things, but as semantic objects worthy of study in their own right. These three axioms establish how
                relationships themselves relate, creating the foundation for inheritance without presupposing what
                inheritance means. Through these constraints, we discover that relationships naturally organize into
                hierarchies of meaning, from the universal to the particular, giving SRT its semantic structure.
            </Paragraph>
            <Heading>The Three Foundational Axioms</Heading>
            <Heading>Axiom 1: Relationship as Subject</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: A[x,y,t]: x =t> y =|> x =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: There exists a universal relationship <Word>
                    <Verbatim />
                    r
                </Word> through which all relationships manifest. This establishes that SRT takes relationships themselves
                as subjects - the third parameter of R(x,y,t) isn't merely a label but a semantic object that participates
                in its own relational structure.
            </Paragraph>
            <Heading>Axiom 2: Semantic Precision</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y =|> E[s]: A[u,v]: u =t> v =|> u =s> v`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: Every relationship type can be precisely specified - there exists a most specific version that
                captures exactly those pairs relating through that type. This ensures relationships aren't vague
                associations but precise semantic objects.
            </Paragraph>
            <Heading>Axiom 3: Ordered Implication</Heading>
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
                creates semantic order - relationships organize into hierarchies of implication without circular
                dependencies.
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
                These three axioms—Relationship as Subject, Semantic Precision, and Ordered Implication—reveal the semantic
                nature of relationships themselves. By taking relationships as first-class semantic objects that can be
                precisely specified and ordered by implication, we create the minimal conditions from which inheritance
                naturally emerges. The uniqueness of most-specific relationships provides the precision needed for formal
                semantics, while the universal relationship provides the generality needed for abstraction. Between these
                extremes, the semantic ordering of relationships creates the architecture of meaning itself. The title "The
                Semantics of Relationships" captures this fundamental insight: relationships aren't just connections we use
                to build semantics—they ARE the semantic structure, and understanding how relationships relate to each other
                IS understanding meaning.
            </Paragraph>
        </Section>
    </Chapter>
);

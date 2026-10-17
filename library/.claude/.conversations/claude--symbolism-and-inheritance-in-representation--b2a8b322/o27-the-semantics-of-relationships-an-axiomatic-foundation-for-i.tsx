import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Relationships: An Axiomatic Foundation for Inheritance v5 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Relationships: An Axiomatic Foundation for Inheritance at version 5</Heading>
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
            <Heading>Axiom 1: Expressing Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: A[x,y,t]: x =t> y =|> x =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: There exists a referent <Word>
                    <Verbatim />
                    r
                </Word> that represents relationship itself - the pure concept of relating. All referents that express
                relationships inherit from it, making <Word>
                    <Verbatim />
                    r
                </Word> the universal ancestor of every relationship type. This establishes that relationships are semantic
                objects within SRT's domain.
            </Paragraph>
            <Heading>Axiom 2: Specifying Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y]:E([s]: x =s> y):A(t: s != t & x =t> y):A[x',y']: x' =s> y' =|> x' =t> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: Every pair has a canonical relationship - a most specific way they relate that implies all other
                relationships between them. This canonical relationship is complete: any other pair sharing it must share
                all the relationships of the original pair.
            </Paragraph>
            <Heading>Axiom 3: Generalizing Relationships</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A{s,t}:A[x,y]: x =s> y =|> x =t> y =||> x =t> y =|> x =s> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic meaning
                </Word>: If two distinct relationships have mutual implication, they are equivalent. By contrapositive:
                distinct relationships cannot mutually imply each other, creating ordered hierarchy without cycles.
            </Paragraph>
            <Heading>The Specification Theorem: Uniqueness of Canonical Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement
                </Word>: For any pair (x,y), the canonical relationship s guaranteed by Axiom 2 is unique.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Purpose
                </Word>: This theorem justifies denoting the canonical relationship between x and y as <Word>
                    <Verbatim />
                    (x,y)
                </Word> - a unique specification that becomes fundamental to SRT's symbolic apparatus. The uniqueness
                ensures we can speak definitively about THE way x and y most specifically relate.
            </Paragraph>
            <Heading>Formal Proof</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    To Prove
                </Word>: For any pair, their canonical relationship is unique
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Fix
                    </Word>: Arbitrary pair x', y'
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Apply Axiom 2
                    </Word>: Renaming bound variables x,y to x',y' ``<Word>
                        <Verbatim />
                         E&#91;s&#93;: x' =s&gt; y' :&amp;: A(t: s != t &amp; x' =t&gt; y'):A&#91;x,y&#93;: x =s&gt; y =|&gt; x =t&gt; y 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Existence
                    </Word>: Let s be a canonical relationship for (x',y') ``<Word>
                        <Verbatim />
                         x' =s&gt; y' :&amp;: A(t: s != t &amp; x' =t&gt; y'):A&#91;x,y&#93;: x =s&gt; y =|&gt; x =t&gt; y 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Uniqueness
                    </Word>: Assume another canonical r exists for (x',y') ``<Word>
                        <Verbatim />
                         x' =r&gt; y' :&amp;: A(t: r != t &amp; x' =t&gt; y'):A&#91;x,y&#93;: x =r&gt; y =|&gt; x =t&gt; y 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Case
                    </Word>: If s = r, uniqueness holds trivially
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Case
                    </Word>: If s != r
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            From s's canonicity
                        </Word>: Since x' =r&gt; y' and r != s ``<Word>
                            <Verbatim />
                             A&#91;x,y&#93;: x =s&gt; y =|&gt; x =r&gt; y 
                        </Word>``
                    </Line>
                    <Line>
                        <Word>
                            <Bold />
                            From r's canonicity
                        </Word>: Since x' =s&gt; y' and s != r ``<Word>
                            <Verbatim />
                             A&#91;x,y&#93;: x =r&gt; y =|&gt; x =s&gt; y 
                        </Word>``
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Application of Axiom 3
                    </Word>: With s != r from case assumption ``<Word>
                        <Verbatim />
                         A&#91;x,y&#93;: x =s&gt; y =|&gt; x =r&gt; y :&amp;: A&#91;x,y&#93;: x =r&gt; y =|&gt; x =s&gt; y 
                    </Word>`` By Axiom 3, this mutual implication means s = r
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Contradiction
                    </Word>: s != r and s = r cannot both hold
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Therefore
                </Word>: The canonical relationship is unique. We denote this unique s as (x',y').
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    QED
                </Word>
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
                These three axioms—Expressing, Specifying, and Generalizing Relationships—establish the semantic foundation
                of SRT. By showing that relationships can be expressed through a universal referent, specified to exact
                boundaries, and generalized into hierarchies, we reveal that relationships themselves are the architecture
                of meaning. The Specification Theorem proves that every relationship has a unique most-specific form,
                justifying our notation <Word>
                    <Verbatim />
                    (x,y)
                </Word> and enabling precise semantic representation. The title "The Semantics of Relationships" captures
                this core insight: in SRT, understanding how relationships relate to each other IS understanding semantics
                itself. Relationships aren't tools we use to build meaning—they ARE meaning, organized through patterns of
                inheritance from the most specific to the most general.
            </Paragraph>
        </Section>
    </Chapter>
);

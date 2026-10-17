import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Foundations of Inheritance in SRT v10 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Foundations of Inheritance in SRT at version 10</Heading>
            <Heading>Foundations of Inheritance in Semantic Reference Theory</Heading>
            <Heading>Purpose</Heading>
            <Paragraph>
                We seek to establish the formal foundations for inheritance in SRT without presupposing what inheritance
                means. These axioms characterize the structural properties that make inheritance possible: the existence of
                universal and specific relationships that create a bounded lattice structure.
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
                    Meaning
                </Word>: There exists a universal relationship type <Word>
                    <Verbatim />
                    r
                </Word> through which all related pairs relate.
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
                    Meaning
                </Word>: For any relationship type and any pair it relates, there exists a most specific relationship that
                encompasses all pairs of that type.
            </Paragraph>
            <Heading>Axiom 3: Implication Asymmetry</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[s,t]: s != t & A[x,y]: x =s> y =|> x =t> y =|> !A[x,y]: x =t> y =|> x =s> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning
                </Word>: If distinct s and t exist where every s-relationship is a t-relationship, then not every
                t-relationship is an s-relationship.
            </Paragraph>
            <Heading>Theorem: Uniqueness of Most Specific Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement
                </Word>: For any x, y, t where <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word> holds, the referent s guaranteed by Axiom 2 is unique.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Purpose of Proof
                </Word>: Establishing uniqueness allows us to denote this unique referent as <Word>
                    <Verbatim />
                    (x,y)
                </Word>, creating a canonical notation for "the most specific relationship between x and y." This uniqueness
                is essential for SRT's representation functions.
            </Paragraph>
            <Heading>Formal Proof in SRT Notation</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Hypothesis
                    </Word>: For fixed x, y, t ``<Word>
                        <Verbatim />
                         x =t&gt; y 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From Axiom 2
                    </Word>: Existence of most specific container ``<Word>
                        <Verbatim />
                         E&#91;s&#93;: A&#91;u,v&#93;: u =t&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Assume for contradiction
                    </Word>: A second distinct container exists ``<Word>
                        <Verbatim />
                         E&#91;r&#93;: r != s &amp; A&#91;u,v&#93;: u =t&gt; v =|&gt; u =r&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From (2) and (3)
                    </Word>: Every t-relationship is in both ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =t&gt; v =|&gt; u =s&gt; v &amp; u =r&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lemma
                    </Word>: <Word>
                        <Verbatim />
                        s
                    </Word> and <Word>
                        <Verbatim />
                        r
                    </Word> relate identical pairs ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =s&gt; v &lt;|=|&gt; u =r&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Proof of (5→)
                    </Word>: Assume <Word>
                        <Verbatim />
                        u =s&gt; v
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        6a. <Word>
                            <Bold />
                            Case
                        </Word>: <Word>
                            <Verbatim />
                            u =t&gt; v
                        </Word> ``<Word>
                            <Verbatim />
                             u =r&gt; v                    &#91;by (3)&#93; 
                        </Word>``
                    </Line>
                    <Line>
                        6b. <Word>
                            <Bold />
                            Case
                        </Word>: <Word>
                            <Verbatim />
                            u !=t&gt; v
                        </Word> ``<Word>
                            <Verbatim />
                             u !=s&gt; v                   &#91;contrapositive of (2)&#93; 
                        </Word>`` Contradicts assumption, case impossible
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Proof of (5←)
                    </Word>: Symmetric to (6) ``<Word>
                        <Verbatim />
                         u =r&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From (5)
                    </Word>: Mutual implication ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =s&gt; v =|&gt; u =r&gt; v &amp;: A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From Axiom 3
                    </Word>: Given <Word>
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
                        Contradiction
                    </Word>: (8) and (9) ``<Word>
                        <Verbatim />
                         A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v &amp; !A&#91;u,v&#93;: u =r&gt; v =|&gt; u =s&gt; v 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Therefore
                    </Word>: Assumption (3) false ``<Word>
                        <Verbatim />
                         r == s 
                    </Word>``
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    QED
                </Word>: The most specific relationship for any type is unique.
            </Paragraph>
            <Heading>Semantic Achievement</Heading>
            <Paragraph>By establishing the existence and uniqueness of most specific relationships, we achieve:</Paragraph>
            <Heading>1. Canonical Representation</Heading>
            <Paragraph>
                We can now denote the unique most specific relationship between x and y as <Word>
                    <Verbatim />
                    (x,y)
                </Word>. This becomes the foundation for SRT's binary representation function R''(x,y).
            </Paragraph>
            <Heading>2. Inheritance Without Circularity</Heading>
            <Paragraph>
                The axioms ensure that if one relationship implies another, the reverse cannot also be true (unless they're
                identical). This prevents situations where:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>s implies t, and t implies u, and u implies s (circular dependency)</Line>
                <Line>Two different relationships mutually require each other</Line>
                <Line>The structure of implications has no foundation</Line>
            </Paragraph>
            <Heading>3. Foundation for Self-Reference</Heading>
            <Paragraph>
                Since every relationship has a most specific form, we can discuss how referents relate to themselves through
                specific types. The most specific self-relationship <Word>
                    <Verbatim />
                    (x,x)
                </Word> becomes fundamental to property semantics.
            </Paragraph>
            <Heading>4. Semantic Grounding</Heading>
            <Paragraph>These axioms ground the notion that:</Paragraph>
            <Paragraph>
                <List />
                <Line>Some relationships are more general (like r)</Line>
                <Line>Some are more specific (like (x,y))</Line>
                <Line>This specificity hierarchy IS inheritance</Line>
            </Paragraph>
            <Paragraph>
                We can now define: <Word>
                    <Bold />
                    s inherits from t
                </Word> precisely when <Word>
                    <Verbatim />
                    A&#91;x,y&#93;: x =s&gt; y =|&gt; x =t&gt; y
                </Word>
            </Paragraph>
            <Paragraph>
                The axioms guarantee this inheritance relation is well-founded, antisymmetric, and has the structural
                properties needed for semantic representation.
            </Paragraph>
            <Heading>5. Finite Computability</Heading>
            <Paragraph>
                In a finite catalogue with N referents, there are at most N³ possible relationships. The existence of most
                specific relationships means we can computationally find them through exhaustive checking, even though FOL
                cannot express this exhaustion directly.
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                These three axioms establish the minimal structure needed for inheritance to function as the organizing
                principle of semantic relationships. The uniqueness of most specific relationships provides the foundation
                for SRT's entire representational apparatus, from canonical symbols to frame-relative meaning.
            </Paragraph>
        </Section>
    </Chapter>
);

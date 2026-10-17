import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Foundations of Inheritance in SRT v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Foundations of Inheritance in SRT at version 1</Heading>
            <Heading>Foundations of Inheritance in Semantic Reference Theory</Heading>
            <Heading>Purpose</Heading>
            <Paragraph>
                We seek to establish the formal foundations for inheritance in SRT without presupposing what inheritance
                means. These axioms characterize the structural properties that make inheritance possible: the existence of
                universal and specific relationships that create a bounded lattice structure.
            </Paragraph>
            <Heading>The Three Foundational Axioms</Heading>
            <Heading>Axiom 1: Universal Relationship</Heading>
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
                </Word> such that whenever x relates to y through any type t, then x also relates to y through r.
            </Paragraph>
            <Heading>Axiom 2: Most Specific Relationship</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y =|> E[s]: A[x',y']: x' =t> y' =|> x' =s> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning
                </Word>: For any relationship type t, there exists a most specific version s that relates all pairs that t
                relates.
            </Paragraph>
            <Heading>Axiom 3: Antisymmetry of Implication</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}A[s,t]: (A[x,y]: x =s> y =|> x =t> y) & s != t =|> !(A[x,y]: x =t> y =|> x =s> y)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Meaning
                </Word>: If every s-relationship implies a t-relationship and s≠t, then NOT every t-relationship implies an
                s-relationship. This prevents circular implication.
            </Paragraph>
            <Heading>Theorem: Uniqueness of Most Specific Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement
                </Word>: For any x, y, t where x =t&gt; y holds, the referent s guaranteed by Axiom 2 is unique.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Purpose of Proof
                </Word>: Establishing uniqueness allows us to denote this unique referent as (x,y), creating a canonical
                notation for "the most specific relationship between x and y." This uniqueness is essential for SRT's
                representation functions.
            </Paragraph>
            <Heading>Formal Proof in SRT Notation</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Given
                    </Word>: <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> for some fixed x, y, t
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        By Axiom 2
                    </Word>: <Word>
                        <Verbatim />
                        E&#91;s₁&#93;: A&#91;x',y'&#93;: x' =t&gt; y' =|&gt; x' =s₁&gt; y'
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Assume for contradiction
                    </Word>: <Word>
                        <Verbatim />
                        E&#91;s₂&#93;: s₂ != s₁ &amp; A&#91;x',y'&#93;: x' =t&gt; y' =|&gt; x' =s₂&gt; y'
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        From (2) and (3)
                    </Word>: <Word>
                        <Verbatim />
                        A&#91;x',y'&#93;: x' =t&gt; y' =|&gt; (x' =s₁&gt; y' &amp; x' =s₂&gt; y')
                    </Word> <Word>
                        <Emphasis />
                        Every t-relationship is both an s₁-relationship and an s₂-relationship
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Claim
                    </Word>: <Word>
                        <Verbatim />
                        A&#91;x',y'&#93;: x' =s₁&gt; y' &lt;|=|&gt; x' =s₂&gt; y'
                    </Word> <Word>
                        <Bold />
                        Proof of claim
                    </Word>:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Bold />
                            Forward direction
                        </Word> <Word>
                            <Verbatim />
                            (=|&gt;)
                        </Word>: Take any x', y' where <Word>
                            <Verbatim />
                            x' =s₁&gt; y'
                        </Word>
                    </Line>
                    <Paragraph>
                        <List />
                        <Line>
                            Case 1: If <Word>
                                <Verbatim />
                                x' =t&gt; y'
                            </Word>, then <Word>
                                <Verbatim />
                                x' =s₂&gt; y'
                            </Word> by (3)
                        </Line>
                        <Line>
                            Case 2: If <Word>
                                <Verbatim />
                                !(x' =t&gt; y')
                            </Word>, then by contrapositive of (2), we cannot have <Word>
                                <Verbatim />
                                x' =s₁&gt; y'
                            </Word>
                        </Line>
                        <Line>
                            Therefore: <Word>
                                <Verbatim />
                                x' =s₁&gt; y' =|&gt; x' =s₂&gt; y'
                            </Word>
                        </Line>
                    </Paragraph>
                    <Line>
                        <Word>
                            <Bold />
                            Reverse direction
                        </Word> <Word>
                            <Verbatim />
                            (&lt;|=)
                        </Word>: By symmetry, <Word>
                            <Verbatim />
                            x' =s₂&gt; y' =|&gt; x' =s₁&gt; y'
                        </Word>
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        From (5)
                    </Word>: <Word>
                        <Verbatim />
                        (A&#91;x',y'&#93;: x' =s₁&gt; y' =|&gt; x' =s₂&gt; y') &amp; (A&#91;x',y'&#93;: x' =s₂&gt; y' =|&gt; x' =s₁&gt; y')
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        By Axiom 3
                    </Word> with s = s₁, t = s₂, and s₁ != s₂: ``<Word>
                        <Verbatim />
                         (A&#91;x',y'&#93;: x' =s₁&gt; y' =|&gt; x' =s₂&gt; y') =|&gt; !(A&#91;x',y'&#93;: x' =s₂&gt; y' =|&gt; x' =s₁&gt; y') 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Contradiction
                    </Word>: Statement (6) asserts both implications hold, but (7) says if the first holds, the second
                    cannot.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Therefore
                    </Word>: <Word>
                        <Verbatim />
                        s₁ == s₂
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    QED
                </Word>: The most specific relationship is unique.
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
            <Paragraph>The axioms ensure that relationships form a partial order:</Paragraph>
            <Paragraph>
                <List />
                <Line>Axiom 1 provides a top element (r)</Line>
                <Line>Axiom 2 provides bottom elements for each related pair</Line>
                <Line>Axiom 3 prevents cycles in the implication structure</Line>
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

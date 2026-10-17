import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Foundations of Inheritance in SRT v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Foundations of Inheritance in SRT at version 4</Heading>
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
                <Word>
                    <Bold />
                    Given
                </Word>: For some fixed x, y, t
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    From Axiom 2
                </Word>: There exists a most specific relationship containing all t-relationships
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[s₁]: A[x',y']: x' =t> y' =|> x' =s₁> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Assume for contradiction
                </Word>: A second, different relationship also contains all t-relationships
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[s₂]: s₂ != s₁ & A[x',y']: x' =t> y' =|> x' =s₂> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Combining the conditions
                </Word>: Every t-relationship must be in both s₁ and s₂
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x',y']: x' =t> y' =|> (x' =s₁> y' & x' =s₂> y')`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Claim
                </Word>: The relationships s₁ and s₂ must relate exactly the same pairs
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x',y']: x' =s₁> y' <|=|> x' =s₂> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof of forward direction
                </Word>: If x' relates to y' through s₁, it also does through s₂
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Consider any x', y' where <Word>
                        <Verbatim />
                        x' =s₁&gt; y'
                    </Word>
                </Line>
                <Line>
                    Case: <Word>
                        <Verbatim />
                        x' =t&gt; y'
                    </Word> holds ``<Word>
                        <Verbatim />
                         x' =t&gt; y' =|&gt; x' =s₂&gt; y'  &#91;by assumption about s₂&#93; 
                    </Word>``
                </Line>
                <Line>
                    Case: <Word>
                        <Verbatim />
                        !(x' =t&gt; y')
                    </Word> holds ``<Word>
                        <Verbatim />
                         !(x' =t&gt; y') =|&gt; !(x' =s₁&gt; y')  &#91;contrapositive of s₁ condition&#93; 
                    </Word>`<Word>
                        <Verbatim />
                         This contradicts our assumption that 
                    </Word>x' =s₁&gt; y'`, so this case cannot occur
                </Line>
                <Line>
                    Therefore: <Word>
                        <Verbatim />
                        x' =s₁&gt; y' =|&gt; x' =s₂&gt; y'
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proof of reverse direction
                </Word>: By symmetric argument
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x' =s₂> y' =|> x' =s₁> y'`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Establishing mutual implication
                </Word>: Both directions hold universally
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(A[x',y']: x' =s₁> y' =|> x' =s₂> y') & (A[x',y']: x' =s₂> y' =|> x' =s₁> y')`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Applying Axiom 3
                </Word>: With s = s₁, t = s₂, and s₁ != s₂
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(A[x',y']: x' =s₁> y' =|> x' =s₂> y') & s₁ != s₂ 
=|> 
!(A[x',y']: x' =s₂> y' =|> x' =s₁> y')`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Contradiction
                </Word>: We established both implications hold, but Axiom 3 says they cannot both hold
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(A[x',y']: x' =s₂> y' =|> x' =s₁> y')  [from our proof]
&
!(A[x',y']: x' =s₂> y' =|> x' =s₁> y')  [from Axiom 3]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Therefore
                </Word>: Our assumption that s₂ != s₁ must be false
            </Paragraph>
            <CodeBox>
                {`s₁ == s₂`}
            </CodeBox>
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

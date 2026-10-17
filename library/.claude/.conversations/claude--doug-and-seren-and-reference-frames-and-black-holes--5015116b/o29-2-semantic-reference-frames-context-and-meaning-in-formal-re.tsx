import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ ⁅2⁆ Semantic Reference Frames: Context and Meaning in Formal Representation v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>⁅2⁆ Semantic Reference Frames: Context and Meaning in Formal Representation at version 3</Heading>
            <Heading>Semantic Reference Frames: Context and Meaning in Formal Representation</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                Semantic Reference Theory introduces reference frames as a formal mechanism for expressing how the same
                symbols can have different meanings in different referential contexts. A reference frame F&#91;t&#93;
                establishes which relationship type t replaces the primitive reference relation r, determining how all
                references within that context are interpreted. This paper presents the formal definition of semantic
                reference frames, their transpilation to first-order logic, and their role in expressing contextual meaning
                within SRT.
            </Paragraph>
            <Heading>1. Introduction</Heading>
            <Paragraph>
                In Semantic Reference Theory, the expression x =&gt; y denotes reference, but what type of reference depends
                on context. A semantic reference frame F&#91;t&#93; formalizes this context by establishing that all
                instances of =&gt; within the frame transpile to =t&gt;, where t is the frame's relationship type. This
                mechanism allows SRT to express that the same syntactic forms can have different semantic meanings depending
                on the referential context in which they appear.
            </Paragraph>
            <Heading>2. Formal Definition of Semantic Reference Frames</Heading>
            <Heading>2.1 Basic Definition</Heading>
            <Paragraph>A semantic reference frame F&#91;t&#93; is a declaration that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Sets the current referential context to relationship type t</Line>
                <Line>Establishes that @ = t for all subsequent expressions</Line>
                <Line>Creates the inheritance constraint t -&gt; @ where @ was the previous frame type</Line>
            </Paragraph>
            <Heading>2.2 Frame Membership</Heading>
            <Paragraph>
                Within frame F&#91;t&#93;, a variable x is meaningful only if it satisfies the frame membership condition:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[in]> t iff x -> t | E[y]: x =t> y | y =t> x`}
            </CodeBox>
            <Paragraph>
                This constraint determines which referents from the complete catalogue are visible within the frame.
                Referents not satisfying this condition cannot be referenced within F&#91;t&#93;.
            </Paragraph>
            <Heading>2.3 Default Frame</Heading>
            <Paragraph>Every SRT proof begins with:</Paragraph>
            <CodeBox>
                {`${''}F[r]`}
            </CodeBox>
            <Paragraph>
                This establishes r as the foundational context. Since r -&gt; r is axiomatic (reflexivity of inheritance),
                statements in F&#91;r&#93; are unconditional. Within F&#91;r&#93;, we have the fundamental identity:
            </Paragraph>
            <CodeBox>
                {`r == (rel)`}
            </CodeBox>
            <Paragraph>showing that r is the canonical symbol for "relationship" within its own frame.</Paragraph>
            <Heading>3. Transpilation Mechanism</Heading>
            <Heading>3.1 Core Transpilation Rules</Heading>
            <Paragraph>When F&#91;t&#93; is declared, it creates the inheritance constraint:</Paragraph>
            <CodeBox>
                {`t -> @`}
            </CodeBox>
            <Paragraph>
                Note that this expression is evaluated in the previous frame, where @ still refers to the previous frame
                type. Once we enter F&#91;t&#93;, @ becomes t for all subsequent expressions.
            </Paragraph>
            <Paragraph>Within F&#91;t&#93;, expressions transpile as:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x => y → x =t> y
x =[in]> @ → x =[in]> t
(x) → (x)[t]`}
            </CodeBox>
            <Heading>3.2 Canonical Symbol Transpilation</Heading>
            <Paragraph>The canonical symbol (x) within frame F&#91;t&#93; transpiles to:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x']: (x',x) == x' & (t,x') == t & A[y]: (x',y) == x' =|> y == x`}
            </CodeBox>
            <Paragraph>
                This shows that canonical symbols are frame-relative. The symbol (x)&#91;t&#93; in frame F&#91;t&#93; may
                differ from (x)&#91;r&#93; in frame F&#91;r&#93;.
            </Paragraph>
            <Heading>3.3 Variable Constraint Insertion</Heading>
            <Paragraph>
                For any statement S containing variables x₁, ..., xₙ within F&#91;t&#93;, the transpilation inserts
                membership constraints:
            </Paragraph>
            <CodeBox>
                {`${''}F[t]: S → (x₁ =[in]> t) & ... & (xₙ =[in]> t) & S[@ := t]`}
            </CodeBox>
            <Paragraph>where S&#91;@ := t&#93; denotes S with all instances of @ replaced by t.</Paragraph>
            <Heading>4. Formal Properties</Heading>
            <Heading>4.1 Visibility and Invisibility</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition (Visibility):
                </Word> A referent x is visible in F&#91;t&#93; iff x =&#91;in&#93;&gt; t.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem (Invisibility):
                </Word> If x is visible in F&#91;t&#93; but y is not, then no reference from x to y can be expressed within
                F&#91;t&#93;.
            </Paragraph>
            <Paragraph>
                This invisibility property is fundamental to how frames work. When we enter a frame, we're not just changing
                notation—we're changing what can be talked about. Referents that don't participate in t-typed relationships
                literally disappear from our semantic vocabulary. This is how frames create focused contexts: by making
                irrelevant referents inexpressible rather than just ignored.
            </Paragraph>
            <Heading>4.2 Frame-Relative Canonicity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem:
                </Word> Within F&#91;t&#93;, the canonical of x is the unique s satisfying:
            </Paragraph>
            <CodeBox>
                {`(s,x) == s & (t,s) == t`}
            </CodeBox>
            <Paragraph>
                This canonical may differ across frames, as different frames impose different semantic structures on the
                same catalogue.
            </Paragraph>
            <Heading>4.3 Reference Type Substitution</Heading>
            <Paragraph>Within F&#91;t&#93;, all reference-based concepts transform:</Paragraph>
            <Paragraph>
                <List />
                <Line>Basic reference: x =&gt; y becomes x =t&gt; y</Line>
                <Line>Inheritance: x --&gt; y becomes x --&gt;_t y (inheritance relative to t)</Line>
                <Line>Properties: p -&gt; eq becomes p -&gt;_t eq_t</Line>
                <Line>Canonicals: (s,x) == s becomes (s,x) ==_t s</Line>
            </Paragraph>
            <Heading>4.4 Frame-Induced Equivalence</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem:
                </Word> Distinct referents in F&#91;r&#93; may become equivalent in F&#91;t&#93;:
            </Paragraph>
            <CodeBox>
                {`${''}x != y in F[r] but (x)[t] == (y)[t] in F[t]`}
            </CodeBox>
            <Paragraph>
                This occurs when x and y share the same t-canonical, making them indistinguishable within the frame's
                semantic context.
            </Paragraph>
            <Heading>5. Frame Hierarchy and Hypothetical Structure</Heading>
            <Heading>5.1 Frame Declaration Sequence</Heading>
            <Paragraph>A sequence of frame declarations:</Paragraph>
            <CodeBox>
                {`${''}F[r]
F[s]
F[t]`}
            </CodeBox>
            <Paragraph>creates a chain of inheritance constraints:</Paragraph>
            <CodeBox>
                {`r -> r (axiomatic)
s -> r (hypothesis)
t -> s (hypothesis)`}
            </CodeBox>
            <Heading>5.2 Conditional Statements</Heading>
            <Paragraph>
                Statements following F&#91;t&#93; are conditional on the entire inheritance chain. If we prove P within
                F&#91;t&#93;, we've actually proven:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(t -> s & s -> r) =|> P[@ := t]`}
            </CodeBox>
            <Heading>5.3 Frame Replacement</Heading>
            <Paragraph>
                Frames don't compose—they replace. When F&#91;t&#93; is declared after F&#91;s&#93;, the context completely
                switches from s to t. However, the inheritance constraint t -&gt; s maintains the semantic connection.
            </Paragraph>
            <Heading>6. Examples of Referential Contexts</Heading>
            <Paragraph>Semantic reference frames can express various referential contexts:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Identity context F&#91;i&#93;:
                    </Word> Where i serves as experiencing identity, studied in the Algebra of Perspective
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Objective context:
                    </Word> Where references represent observer-independent facts
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Temporal contexts:
                    </Word> Where references can point to non-existent future states
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Experimental contexts:
                    </Word> Where references occur under idealized conditions
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Imaginative contexts:
                    </Word> Where normal constraints on reference are relaxed
                </Line>
            </Paragraph>
            <Paragraph>Each context would define its own relationship type and associated transpilation rules.</Paragraph>
            <Heading>7. Cross-Frame Reference</Heading>
            <Heading>7.1 Frame-Qualified Notation</Heading>
            <Paragraph>To reference a symbol as it exists in a different frame:</Paragraph>
            <CodeBox>
                {`${''}(x)[s] // The canonical of x in frame F[s]`}
            </CodeBox>
            <Heading>7.2 Multi-Frame Contexts</Heading>
            <Paragraph>For theorems involving multiple frames:</Paragraph>
            <CodeBox>
                {`${''}F[s,t]: P((x)[s], (x)[t])`}
            </CodeBox>
            <Paragraph>
                This allows comparison of how the same referent appears in different semantic contexts while maintaining
                frame isolation.
            </Paragraph>
            <Heading>8. Completeness and Consistency</Heading>
            <Heading>8.1 Transpilation Completeness</Heading>
            <Paragraph>
                A frame F&#91;t&#93; is complete iff every well-formed expression in F&#91;t&#93; has a transpilation to
                first-order logic with all frame-specific notation expanded.
            </Paragraph>
            <Heading>8.2 Consistency Preservation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem:
                </Word> If F&#91;t&#93; is consistent and s -&gt; t, then F&#91;s&#93; is consistent.
            </Paragraph>
            <Paragraph>
                This ensures that specializing frames through inheritance cannot introduce contradictions.
            </Paragraph>
            <Heading>9. Frames as Perspectives on Catalogues</Heading>
            <Paragraph>
                A semantic reference frame doesn't create a new catalogue—it provides a perspective on the existing
                catalogue C. The frame:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Makes some referents invisible (those not satisfying x =&#91;in&#93;&gt; t)</Line>
                <Line>Replaces r with t throughout the semantic structure</Line>
                <Line>May collapse distinctions between referents</Line>
                <Line>Redefines canonical symbols relative to t</Line>
            </Paragraph>
            <Paragraph>
                This creates the formal effect of working with a transformed semantic structure while maintaining the same
                underlying ontology.
            </Paragraph>
            <Heading>10. Conclusion</Heading>
            <Paragraph>
                Semantic reference frames formalize how context determines meaning in SRT. By establishing that the same
                syntactic expressions can transpile differently based on which frame is active, frames capture the
                fundamental semantic phenomenon that symbols acquire meaning from their referential context. The frame
                mechanism, combined with the transpilation to first-order logic, provides a rigorous foundation for
                reasoning about contextual meaning while maintaining logical precision. Through frames, SRT can express how
                the same catalogue of referents can be viewed through different semantic lenses, each revealing different
                aspects of the referential structure.
            </Paragraph>
        </Section>
    </Chapter>
);

import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Theory: Transpiled Syntax and Formal Theorems v8 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Theory: Transpiled Syntax and Formal Theorems at version 8</Heading>
            <Heading>Semantic Reference Theory: Transpilation Syntax and Formal Structure</Heading>
            <Heading>Introduction</Heading>
            <Paragraph>
                This document presents the complete transpilation syntax for Semantic Reference Theory (SRT), showing how
                linguistic conventions build systematically from first-order logic (FOL) to create a formal semantic system.
                The transpiler operates in distinct phases, each building on the previous to create increasingly
                sophisticated semantic structures&#91;^1&#93;.
            </Paragraph>
            <Heading>Phase 1: Basic FOL Extensions</Heading>
            <Heading>Logical Operators</Heading>
            <Paragraph>
                The transpiler first introduces programming-inspired notation for standard logical operations&#91;¹&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`!P         := ¬P          // logical NOT
P & Q      := P ∧ Q       // logical AND  
P | Q      := P ∨ Q       // logical OR
P !! Q     := P ⊕ Q       // exclusive OR
P =|> Q    := P → Q       // implies
P !=|> Q   := ¬(P → Q)    // does not imply
P <|=|> Q  := P ↔ Q       // bidirectional implication
P <iff> Q  := P ↔ Q       // alternative notation for iff`}
            </CodeBox>
            <Heading>Bracketing Operators</Heading>
            <Paragraph>
                After establishing basic operators, we introduce bracketing conventions for scope management:
            </Paragraph>
            <CodeBox>
                {`P &: Q | R | S        := P ∧ (Q ∨ R ∨ S)
P |: Q & R & S        := P ∨ (Q ∧ R ∧ S)
P =||> Q & R & S      := P → (Q ∧ R ∧ S)`}
            </CodeBox>
            <Paragraph>These can be terminated with reciprocal operators:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`P &: Q | R :& S =|> T    := (P ∧ (Q ∨ R)) ∧ S → T
P |: Q & R :| S =||> T   := (P ∨ (Q ∧ R)) ∨ S → T`}
            </CodeBox>
            <Heading>Conditional Operator</Heading>
            <Paragraph>From programming, we adopt the ternary conditional:</Paragraph>
            <CodeBox>
                {`P ? Q : R             := P → Q ∧ ¬P → R`}
            </CodeBox>
            <Paragraph>For nested conditionals:</Paragraph>
            <CodeBox>
                {`P ? Q : R ? S : T     := Q → (P → (S → (R → T)))`}
            </CodeBox>
            <Paragraph>
                &#91;^1&#93;: The order of transpilation phases matters significantly - each phase depends on structures
                established in previous phases.
            </Paragraph>
            <Heading>Quantification</Heading>
            <Paragraph>Standard FOL quantification with SRT extensions:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x]: P(x)                  := ∃x: P(x)
A[x]: P(x)                  := ∀x: P(x)
E[x,y]: P(x,y)              := ∃x∃y: x ≠ y ∧ P(x,y)
E{x,y}: P(x,y)              := ∃x∃y: P(x,y)
E[{x,y},z]: P(x,y,z)        := ∃x∃y∃z: x ≠ z ∧ y ≠ z ∧ P(x,y,z)
E(x: => y): P(x,y)          := ∃x∃y: x ≠ y ∧ x =r> y ∧ P(x,y)
E([x,y]: x => y): P(x,y)    := ∃x∃y: x ≠ y ∧ x =r> y ∧ P(x,y)`}
            </CodeBox>
            <Paragraph>
                Note: <Word>
                    <Verbatim />
                    E(x: =&gt; y)
                </Word> is used when there is one variable and it appears first in the expression.
            </Paragraph>
            <Heading>Phase 2: The Primitive Relation</Heading>
            <Heading>Basic Reference Relation</Heading>
            <Paragraph>
                SRT introduces a single primitive relation R(x,y,t), interpreted as "x refers to y through relationship type
                t"&#91;²&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y    := R(x,y,t)`}
            </CodeBox>
            <Heading>Reference Combinations</Heading>
            <Paragraph>Building on the primitive, we construct compound reference expressions:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x !=t> y            := ¬(x =t> y)
x =t> y =s> z       := x =t> y ∧ y =s> z
x <s=t> y           := x =t> y ∧ y =s> x`}
            </CodeBox>
            <Paragraph>
                Note how <Word>
                    <Verbatim />
                    x &lt;s=t&gt; y
                </Word> demonstrates linguistic composition - it builds on established patterns rather than introducing new
                primitives.
            </Paragraph>
            <Heading>Phase 3: Equality Integration</Heading>
            <Heading>Internalizing FOL Equality</Heading>
            <Paragraph>SRT internalizes logical equality as a referent within the domain&#91;³&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>This allows us to define semantic equality:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x == y    := x =eq> y
x != y    := x !=eq> y   := ¬(x =eq> y)`}
            </CodeBox>
            <Heading>Phase 4: Base Relationship and Inheritance</Heading>
            <Heading>The Universal Relationship Type</Heading>
            <Paragraph>
                SRT establishes <Word>
                    <Verbatim />
                    r
                </Word> as the base relationship type from which all others inherit&#91;⁴&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: x =t> y =|> x =r> y`}
            </CodeBox>
            <Heading>Inheritance Definition</Heading>
            <Paragraph>
                The inheritance relation <Word>
                    <Verbatim />
                    s -&gt; t
                </Word> has a sophisticated definition&#91;^2&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}s -> t := 
  x =s> y =|> s =t> t & t =t> s &:
  s == t ? s =eq> t :
  s => t ? (s,t) == s :
  E([u,p]: x =u> y & x =p> p): (t,u) == u & t =p> p & (p,t) == t`}
            </CodeBox>
            <Paragraph>This complex definition captures three cases:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    When <Word>
                        <Verbatim />
                        s == t
                    </Word>: inheritance through equality
                </Line>
                <Line>
                    When <Word>
                        <Verbatim />
                        s =&gt; t
                    </Word>: s is the most specific relationship between s and t
                </Line>
                <Line>Otherwise: structural inheritance through intermediate relationships</Line>
            </Paragraph>
            <Paragraph>
                &#91;^2&#93;: This definition of inheritance is provisional and represents ongoing theoretical development
                in SRT.
            </Paragraph>
            <Heading>Inheritance Notation</Heading>
            <CodeBox>
                {`x --> y     := x -> y       // single arrow for basic inheritance
x !--> y    := ¬(x -> y)    // double arrow with negation for non-inheritance`}
            </CodeBox>
            <Heading>Inheritance Application</Heading>
            <CodeBox
                language="srt"
            >
                {`x =s> y & s -> t =|> x =t> y`}
            </CodeBox>
            <Paragraph>This axiom ensures that relationships propagate through inheritance hierarchies.</Paragraph>
            <Heading>Untyped Reference</Heading>
            <Paragraph>
                With <Word>
                    <Verbatim />
                    r
                </Word> established as the base type, we can define untyped reference:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x => y    := x =r> y`}
            </CodeBox>
            <Heading>Phase 5: Derived Functions and Axioms</Heading>
            <Heading>Derived Functions</Heading>
            <Paragraph>
                SRT allows introduction of derived functions when unique mappings exist for certain referent sets. These
                functions are <Word>
                    <Bold />
                    derivative not generative
                </Word> - they represent patterns that must exist given the axioms.
            </Paragraph>
            <Paragraph>
                A derived function F(x,y) creates a corresponding relationship between arguments. The transpiler can replace
                derived functions with:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Variable conditions expressing the unique mapping</Line>
                <Line>Relations capturing the functional dependency</Line>
            </Paragraph>
            <Heading>Derived Axioms</Heading>
            <Paragraph>
                A derived axiom is simply a theorem - a sentence derivable from SRT's axioms. The transpiler can either:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Treat derived axioms as given (for efficiency)</Line>
                <Line>Insert the full proof of the theorem (for completeness)</Line>
            </Paragraph>
            <Heading>Phase 6: Representation Functions</Heading>
            <Heading>Most Specific Relationship</Heading>
            <Paragraph>
                The representation function (x,y) identifies the most specific relationship between x and y&#91;⁵&#93;:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(x,y) := E[t]: A(s: x =s> y & s != t): t --> s & !(s --> t)`}
            </CodeBox>
            <Paragraph>
                This finds the unique <Word>
                    <Verbatim />
                    t
                </Word> that all other relationships between x and y inherit from, but which doesn't inherit from any of
                them.
            </Paragraph>
            <Heading>Canonical Symbol</Heading>
            <Paragraph>The canonical symbol (x) is more complex&#91;⁶&#93;:</Paragraph>
            <CodeBox>
                {`(x) := E(x': x' != x): (x',x) == x' & (x,x) == x' & (r,x') == r`}
            </CodeBox>
            <Paragraph>This identifies:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>A symbol x' distinct from x</Line>
                <Line>Where x' is the most specific relationship to x</Line>
                <Line>That is also x's self-relationship</Line>
                <Line>And is canonical with respect to r</Line>
            </Paragraph>
            <Heading>Alternative Notation</Heading>
            <Paragraph>For clarity, these could be denoted:</Paragraph>
            <Paragraph>
                <List />
                <Line>R'(x) for the canonical symbol</Line>
                <Line>R''(x,y) for the most specific relationship</Line>
                <Line>R'''(x,y,z) for ternary representations</Line>
                <Line>And so forth...</Line>
            </Paragraph>
            <Heading>Phase 7: Reference Frames</Heading>
            <Heading>Frame Declaration</Heading>
            <Paragraph>
                A reference frame F&#91;t&#93; establishes the semantic context for interpretation&#91;⁷&#93;:
            </Paragraph>
            <CodeBox>
                {`${''}F[t]    // Declares frame with relationship type t`}
            </CodeBox>
            <Heading>The Frame Pointer</Heading>
            <Paragraph>The symbol @ denotes the current frame type:</Paragraph>
            <CodeBox>
                {`${''}F[r]              // Initial declaration: @ = r
F[t]              // New frame: @ = t (with constraint t -> r)`}
            </CodeBox>
            <Heading>Frame-Dependent Transpilation</Heading>
            <Paragraph>Within a frame, reference and inheritance relate to @:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x -> r    := x => @       // Inheritance from base becomes reference to frame
x => y    := x =@> y      // Untyped reference uses current frame type
(@,(x))   == @            // Canonical symbols are frame-relative`}
            </CodeBox>
            <Heading>Frame Membership</Heading>
            <Paragraph>For a referent to be meaningful in frame F&#91;t&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[in]> t <iff> x -> t | E[y]: x =t> y | y =t> x`}
            </CodeBox>
            <Heading>Cross-Frame Reference</Heading>
            <Paragraph>To reference canonicals from other frames:</Paragraph>
            <CodeBox>
                {`${''}(x)[s]    // The canonical of x in frame F[s]`}
            </CodeBox>
            <Heading>Phase 8: Complete Transpilation Pipeline</Heading>
            <Paragraph>The full transpilation process follows this order:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Logical operators
                    </Word> - Basic FOL notation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bracketing
                    </Word> - Scope management
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Quantification
                    </Word> - Variable binding
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Primitive relation
                    </Word> - R(x,y,t)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Equality integration
                    </Word> - eq as referent
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Base type and inheritance
                    </Word> - r and -&gt;
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Derived constructs
                    </Word> - Functions and axioms
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Representation
                    </Word> - (x) and (x,y)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Frame context
                    </Word> - F&#91;t&#93; and @
                </Line>
            </Paragraph>
            <Paragraph>Each phase builds on the previous, creating a complete formal system where:</Paragraph>
            <Paragraph>
                <List />
                <Line>Every expression has a precise FOL translation</Line>
                <Line>Context determines semantic interpretation</Line>
                <Line>Linguistic conventions compose naturally</Line>
            </Paragraph>
            <Heading>Technical Notes</Heading>
            <Heading>Transpilation Consistency</Heading>
            <Paragraph>The transpiler maintains several invariants:</Paragraph>
            <Paragraph>
                <List />
                <Line>Frame constraints are preserved through inheritance</Line>
                <Line>Variable membership is checked in quantified statements</Line>
                <Line>Canonical uniqueness is enforced within frames</Line>
            </Paragraph>
            <Heading>Computational Considerations</Heading>
            <Paragraph>The transpiler could be implemented either:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Eagerly
                    </Word>: Expanding all constructs immediately
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Lazily
                    </Word>: Preserving high-level notation where possible
                </Line>
            </Paragraph>
            <Heading>Semantic Validity</Heading>
            <Paragraph>
                Not all syntactically valid expressions are semantically meaningful. The transpiler assumes well-formedness
                but semantic validity requires:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Frames satisfy SRT axioms</Line>
                <Line>Inheritance chains are finite</Line>
                <Line>Canonicals exist and are unique</Line>
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>
                &#91;¹&#93;: Doug: Semantic Reference Theory: A Formal Foundation, §I "Linguistic Extensions from
                First-Order Logic"
            </Paragraph>
            <Paragraph>
                &#91;²&#93;: Doug: The Semantics of the Subject-Object Relationship, §I "The Primitive and Its Semantic
                Context"
            </Paragraph>
            <Paragraph>
                &#91;³&#93;: Doug: Semantic Reference Theory: A Formal Foundation, §II "Grounding in First-Order Logic"
            </Paragraph>
            <Paragraph>
                &#91;⁴&#93;: Doug: The Semantics of the Subject-Object Relationship, §V "Reference, Representation, and
                Semantic Necessity"
            </Paragraph>
            <Paragraph>
                &#91;⁵&#93;: Doug: The Semantics of the Subject-Object Relationship, §III.4 "Relationships as Objects"
            </Paragraph>
            <Paragraph>&#91;⁶&#93;: Doug: Clarifying the Subject-Object Relationship, §6 "Symbol"</Paragraph>
            <Paragraph>
                &#91;⁷&#93;: Doug: Semantic Reference Frames: Context and Meaning in Formal Representation, §2 "Formal
                Definition of Semantic Reference Frames"
            </Paragraph>
        </Section>
    </Chapter>
);

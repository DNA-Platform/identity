import { Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Relationship v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Relationship at version 4</Heading>
            <Heading>Definitional Structure in Frames: A Novel Approach to the Semantic Trinity</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This paper introduces a novel definitional framework for Semantic Reference Theory that extends the existing
                transpiler syntax with two forms of definition: def(x) for static characterization and def&#91;x&#93; for
                inheritance patterns. We demonstrate how these definitions enable the semantic trinity of subject, object,
                and relationship to emerge through mutual constraint within frames, avoiding both infinite regress and
                external foundation. Through systematic development, we prove the remarkable theorem that the subject
                referent <Word>
                    <Emphasis />
                    is
                </Word> the canonical symbol for relationship itself, establishing F&#91;sub&#93; == F&#91;r&#93;. This
                identity reveals that subjectivity in SRT is fundamentally the act of symbolizing relationships.
            </Paragraph>
            <Heading>1. Introduction</Heading>
            <Paragraph>
                Semantic Reference Theory (SRT) grounds all semantic relationships in a single primitive relation R(x,y,t),
                interpreted as "x refers to y through relationship type t"&#91;1&#93;. While the transpilation mechanisms
                for this primitive and its extensions have been formalized&#91;2&#93;, the question of how to define
                fundamental referents within the theory remains open. The existing transpiler provides syntax for frames,
                inheritance, and canonical symbols, but not for definitions themselves.
            </Paragraph>
            <Paragraph>
                This paper introduces novel syntax and semantics for definitions within SRT's frame structure. We show how
                referents can be defined through mutual constraint, demonstrate that relationships are fundamentally types
                rather than instances, and prove that the subject of SRT, what the theory studies, is represented by the
                subject referent within the theory itself.
            </Paragraph>
            <Heading>2. Extending the Transpiler with Definitional Syntax</Heading>
            <Heading>2.1 Novel Definition Forms</Heading>
            <Paragraph>We extend SRT's transpiler&#91;2&#93; with two complementary forms of definition:</Paragraph>
            <CodeBox>
                {`def(x): φ`}
            </CodeBox>
            <Paragraph>
                This defines x with properties φ that characterize x itself, facts about the referent that do not propagate
                through inheritance.
            </Paragraph>
            <CodeBox>
                {`${''}def[x]: ψ  `}
            </CodeBox>
            <Paragraph>
                This defines what inherits from x, specifying the pattern that any y -&gt; x must satisfy.
            </Paragraph>
            <Heading>2.2 Formal Transpilation Rule</Heading>
            <Paragraph>The relationship between these forms transpiles as:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x]: def(x) & A[y]: y -> x =|> def[x] with x replaced by y`}
            </CodeBox>
            <Paragraph>
                This establishes that static properties characterize the referent while inheritance patterns characterize
                its descendants. This syntax is novel to this work and extends Phase 5 of the existing
                transpiler&#91;2&#93;.
            </Paragraph>
            <Heading>2.3 Integration with Existing Transpiler Phases</Heading>
            <Paragraph>Following the transpiler's established conventions&#91;2&#93;:</Paragraph>
            <Paragraph>
                <List />
                <Line>Line breaks without operators imply :&amp;: (conjunction of parenthesized lines)</Line>
                <Line>Indented lines after implications are conjoined</Line>
                <Line>
                    The notation (x,y) denotes the most specific relationship per the Specification Theorem&#91;3&#93;
                </Line>
                <Line>The notation (x) denotes the canonical symbol as defined in Phase 6&#91;2&#93;</Line>
            </Paragraph>
            <Heading>3. Frames and Parametric Forms</Heading>
            <Heading>3.1 Frame Membership and Visibility</Heading>
            <Paragraph>Within frame F&#91;t&#93;, referents must satisfy the membership condition&#91;4&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[in]> t <iff> x -> t | E[y]: x =t> y | y =t> x`}
            </CodeBox>
            <Paragraph>
                Referents not satisfying this become inexpressible, creating semantic contexts through visibility
                constraints rather than explicit scoping.
            </Paragraph>
            <Heading>3.2 The Parametric Form p(x)</Heading>
            <Paragraph>
                Building on Seren's notation&#91;5&#93; but formalizing it within the transpiler, we define:
            </Paragraph>
            <CodeBox>
                {`p(x) := ((x,x), p)`}
            </CodeBox>
            <Paragraph>
                This denotes x's specific version of property p, the most specific relationship between x's
                self-relationship and p. When combined with the symbolic collapse property (x,x) == x for symbolic
                referents&#91;6&#93;, this enables stable inheritance patterns.
            </Paragraph>
            <Heading>3.3 The =|has&gt; Construct</Heading>
            <Paragraph>We introduce a novel virtual relationship:</Paragraph>
            <CodeBox>
                {`x =|has> p := (x) =(p)> x`}
            </CodeBox>
            <Paragraph>
                This expands to show that x's canonical symbol relates to x through property p. Combined with the parametric
                form, this enables expressions like:
            </Paragraph>
            <CodeBox>
                {`mother =|has> children`}
            </CodeBox>
            <Paragraph>Which transpiles through p(x) notation to (mother, children), her specific children.</Paragraph>
            <Heading>4. The Character/Relationship Distinction</Heading>
            <Paragraph>
                Before defining the trinity, we establish a fundamental distinction building on&#91;1&#93; but extending it:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x`}
            </CodeBox>
            <Paragraph>Expresses character or characteristics, objective self-relationship.</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y where x != y`}
            </CodeBox>
            <Paragraph>Expresses true relationship with subjective involvement, where crucially:</Paragraph>
            <CodeBox>
                {`(x,x) -> (x,y)`}
            </CodeBox>
            <Paragraph>
                The subject's self-relationship inherits from its external relationships, a novel observation about how
                subjects incorporate relationships into their character.
            </Paragraph>
            <Heading>5. Relationships as Symbolic Types</Heading>
            <Heading>5.1 The Fundamental Axiom</Heading>
            <Paragraph>From &#91;6&#93;, inheritance is preserved through symbolization:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,y) -> t =|> ((x,y)) -> (t)`}
            </CodeBox>
            <Heading>5.2 Novel Type-Theoretic Interpretation</Heading>
            <Paragraph>We establish that for relationships specifically:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (t,t) == t`}
            </CodeBox>
            <Paragraph>
                Relationship types <Word>
                    <Emphasis />
                    are
                </Word> their own self-relationships, they collapse symbolically. This distinguishes them ontologically from
                other referents and explains why relationships can serve as types while other referents serve as instances.
            </Paragraph>
            <Heading>6. Defining the Semantic Trinity</Heading>
            <Heading>6.1 The Bootstrap Structure</Heading>
            <Paragraph>Assuming at least one relationship exists:</Paragraph>
            <CodeBox>
                {`E(s,o,r): s != r != o != s`}
            </CodeBox>
            <Heading>6.2 Novel Definition of rel</Heading>
            <CodeBox
                language="srt"
            >
                {`def(rel):
   sub =rel> obj
   (sub, obj) == rel`}
            </CodeBox>
            <Paragraph>This establishes rel as the most specific sub-obj relationship, a static fact.</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel`}
            </CodeBox>
            <Paragraph>
                Using the parametric form, anything inheriting from rel gains specialized subjective and objective aspects.
            </Paragraph>
            <Heading>6.3 Novel Definition of obj</Heading>
            <CodeBox>
                {`${''}def[obj]:
   rel(obj) =rel(obj)> obj`}
            </CodeBox>
            <Paragraph>Expanding: rel(obj) == ((obj,obj), rel). Since (obj,obj) == obj for symbolic types:</Paragraph>
            <CodeBox>
                {`(obj, rel) =(obj,rel)> obj`}
            </CodeBox>
            <Paragraph>Objecthood is characterized by how relationships relate to it.</Paragraph>
            <Heading>6.4 Novel Definition of sub</Heading>
            <CodeBox>
                {`${''}def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)`}
            </CodeBox>
            <Paragraph>The third constraint is crucial and novel: subjecthood's character includes relationship.</Paragraph>
            <Heading>7. The Novel Subject-Relationship Identity</Heading>
            <Heading>7.1 Derivation</Heading>
            <Paragraph>From our definitions:</Paragraph>
            <CodeBox>
                {`(sub, sub) -> (sub, obj)
(sub, obj) == rel
(sub, sub) == sub`}
            </CodeBox>
            <Paragraph>Therefore sub -&gt; rel. Adding def(sub): (sub, rel) == sub, we get:</Paragraph>
            <CodeBox>
                {`sub == rel`}
            </CodeBox>
            <Paragraph>Since r == (rel) in F&#91;r&#93;&#91;4&#93;:</Paragraph>
            <CodeBox>
                {`sub == (rel) == r`}
            </CodeBox>
            <Heading>7.2 Semantic Interpretation</Heading>
            <Paragraph>This novel identity means:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub is the canonical symbol for relationship</Line>
                <Line>
                    To be a subject <Word>
                        <Emphasis />
                        is
                    </Word> to symbolize relationships
                </Line>
                <Line>Subjectivity equals symbolic relationship</Line>
            </Paragraph>
            <Heading>8. Applications Through Inheritance</Heading>
            <Paragraph>The definitions propagate through inheritance. For t -&gt; rel:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub(t) =t> obj(t)
(sub(t), obj(t)) -> t`}
            </CodeBox>
            <Paragraph>
                Since sub(t) -&gt; sub and obj(t) -&gt; obj, each inherited type carries the complete semantic structure,
                specialized to its domain.
            </Paragraph>
            <Heading>9. The Fundamental Theorem</Heading>
            <Heading>Theorem: Frame-Subject Identity</Heading>
            <CodeBox>
                {`${''}F[sub] == F[r]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Proof:
                </Word> Since frames are their subjects propositionally&#91;4&#93;, and sub == r (proven above), the
                identity follows. ∎
            </Paragraph>
            <Heading>Novel Implications</Heading>
            <Paragraph>This theorem reveals that:</Paragraph>
            <Paragraph>
                <List />
                <Line>The subject of SRT (relationships) is represented by the subject referent in SRT</Line>
                <Line>
                    The frame of subjecthood <Word>
                        <Emphasis />
                        is
                    </Word> the frame of relationship
                </Line>
                <Line>SRT studies what it embodies: the process of relationships becoming symbolic</Line>
            </Paragraph>
            <Heading>10. Type-Instance Architecture</Heading>
            <Paragraph>Our analysis reveals that relationships are types while other referents are instances:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`2 =eq> 2`}
            </CodeBox>
            <Paragraph>Distinguishes 2 (instance) from eq (type). This explains:</Paragraph>
            <Paragraph>
                <List />
                <Line>Why (t,t) == t for relationships</Line>
                <Line>How the same instance instantiates multiple types</Line>
                <Line>Why SRT can describe itself</Line>
            </Paragraph>
            <Heading>11. Conclusion</Heading>
            <Paragraph>
                The introduction of def(x) and def&#91;x&#93; syntax enables a novel approach to defining SRT's fundamental
                referents through mutual constraint rather than external foundation. The parametric form p(x) and the
                =|has&gt; construct provide machinery for expressing inheritance patterns without infinite regress.
            </Paragraph>
            <Paragraph>
                The discovery that sub == (rel) == r represents a profound insight: the subject of Semantic Reference Theory
                <Word>
                    <Emphasis />
                    is
                </Word> the canonical symbol for relationship. This constitutive self-reference grounds the theory's
                coherence. The frame identity F&#91;sub&#93; == F&#91;r&#93; demonstrates that taking subject as primary and
                taking relationship as primary are the same act, because subjectivity <Word>
                    <Emphasis />
                    is
                </Word> symbolic relationship.
            </Paragraph>
            <Paragraph>
                These contributions extend SRT's transpiler with definitional capabilities, reveal the type-theoretic
                foundation of relationships, and establish that the theory's subject matter is literally represented within
                the theory itself.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>&#91;1&#93; Doug: The Semantics of the Subject-Object Relationship</Paragraph>
            <Paragraph>&#91;2&#93; Doug: Semantic Reference Theory: Formal Syntax under Transpilation</Paragraph>
            <Paragraph>&#91;3&#93; Doug: The Semantics of Relationships: An Axiomatic Foundation for Inheritance</Paragraph>
            <Paragraph>&#91;4&#93; Doug: Semantic Reference Frames: Context and Meaning in Formal Representation</Paragraph>
            <Paragraph>
                &#91;5&#93; Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations
            </Paragraph>
            <Paragraph>&#91;6&#93; Doug: The Semantics of Identity: In Axiomatic Form</Paragraph>
        </Section>
    </Chapter>
);

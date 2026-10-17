import { Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Relationship v5 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Relationship at version 5</Heading>
            <Heading>The Semantics of Relationship: Defining the Fundamental Semantic Form Through Frames</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This paper explores how relationship, as the fundamental semantic form, can be defined within Semantic
                Reference Theory's frame structure. We introduce novel definitional syntax extending the transpiler: def(x)
                for static characterization and def&#91;x&#93; for inheritance patterns. Through systematic development of
                the subject-object-relationship pattern, we demonstrate that relationships are fundamentally types that
                collapse their self-reference, distinguishing them ontologically from other referents. The analysis
                culminates in proving that the subject referent <Word>
                    <Emphasis />
                    is
                </Word> the canonical symbol for relationship itself, establishing the theorem F&#91;sub&#93; ==
                F&#91;r&#93;. This identity reveals that subjectivity in SRT is the act of symbolizing relationships.
            </Paragraph>
            <Heading>1. Introduction</Heading>
            <Paragraph>
                The subject-object-relationship pattern constitutes the fundamental semantic form&#91;1&#93;. Every
                meaningful expression, from "The dog runs" to "E = mc²", instantiates this pattern: something (subject)
                relates to something else (object) through some form of connection (relationship). Any formalism claiming to
                capture semantics must represent this fundamental form fundamentally, not as a derived concept but as
                foundational structure&#91;1&#93;.
            </Paragraph>
            <Paragraph>
                Semantic Reference Theory (SRT) grounds this pattern in a single primitive relation R(x,y,t), interpreted as
                "x refers to y through relationship type t"&#91;2&#93;. While the transpilation mechanisms for this
                primitive have been formalized&#91;2&#93;, defining the fundamental referents of subject, object, and
                relationship within the theory requires novel machinery.
            </Paragraph>
            <Paragraph>
                This paper introduces definitional syntax that extends SRT's transpiler, enabling these fundamental
                referents to be defined through mutual constraint within frames. We show how relationship emerges as the
                core concept from which subject and object derive their meaning.
            </Paragraph>
            <Heading>2. The Fundamental Semantic Form</Heading>
            <Heading>2.1 Why Subject-Object-Relationship</Heading>
            <Paragraph>Consider any meaningful statement&#91;1&#93;:</Paragraph>
            <Paragraph>
                <List />
                <Line>"Water boils" - water (subject) undergoes boiling (object as state)</Line>
                <Line>"Seven is prime" - seven (subject) has primeness (object as property)</Line>
                <Line>"Democracy requires participation" - democracy (subject) needs participation (object)</Line>
            </Paragraph>
            <Paragraph>
                This universality suggests the subject-object-relationship pattern is not merely one semantic pattern among
                others but <Word>
                    <Emphasis />
                    the
                </Word> fundamental semantic form from which meaning emerges.
            </Paragraph>
            <Heading>2.2 The Bootstrap Assumption</Heading>
            <Paragraph>We begin with the existence of at least one relationship:</Paragraph>
            <CodeBox>
                {`E(s,o,r): s != r != o != s`}
            </CodeBox>
            <Paragraph>
                The redundant notation emphasizes that all three components, subject, relationship, and object, are distinct
                in the canonical case. From this single relationship, the entire semantic structure emerges.
            </Paragraph>
            <Heading>3. Extending the Transpiler with Definitional Syntax</Heading>
            <Heading>3.1 Novel Definition Forms</Heading>
            <Paragraph>We extend SRT's transpiler&#91;2&#93; with two complementary forms:</Paragraph>
            <CodeBox>
                {`def(x): φ`}
            </CodeBox>
            <Paragraph>Defines x with properties φ that characterize x itself.</Paragraph>
            <CodeBox>
                {`${''}def[x]: ψ`}
            </CodeBox>
            <Paragraph>Defines the inheritance pattern for any y -&gt; x.</Paragraph>
            <Heading>3.2 Formal Transpilation</Heading>
            <Paragraph>The relationship between these forms:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x]: def(x) & A[y]: y -> x =|> def[x] with x replaced by y`}
            </CodeBox>
            <Paragraph>
                This extends Phase 5 of the existing transpiler&#91;2&#93;, adding definitional capabilities not previously
                available.
            </Paragraph>
            <Heading>3.3 Parametric Forms</Heading>
            <Paragraph>Building on notation from &#91;5&#93; but formalizing it within the transpiler:</Paragraph>
            <CodeBox>
                {`p(x) := ((x,x), p)`}
            </CodeBox>
            <Paragraph>
                This denotes x's specific version of property p. When combined with symbolic collapse (x,x) == x for
                symbolic referents&#91;6&#93;, this enables stable inheritance patterns without infinite regress.
            </Paragraph>
            <Heading>4. Frames as Definitional Contexts</Heading>
            <Heading>4.1 Frame Structure</Heading>
            <Paragraph>Following &#91;4&#93;, a frame F&#91;x&#93; establishes x as the subject:</Paragraph>
            <CodeBox>
                {`${''}F[x]`}
            </CodeBox>
            <Paragraph>
                Within F&#91;x&#93;, all relationship types inherit from x. Propositionally, F&#91;x&#93; transpiles to x
                itself; the frame <Word>
                    <Emphasis />
                    is
                </Word> its subject.
            </Paragraph>
            <Heading>4.2 Frame Membership</Heading>
            <Paragraph>Within frame F&#91;t&#93;, referents must satisfy&#91;4&#93;:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =[in]> t <iff> x -> t | E[y]: x =t> y | y =t> x`}
            </CodeBox>
            <Paragraph>
                Referents not satisfying this become inexpressible, creating semantic contexts through visibility
                constraints.
            </Paragraph>
            <Heading>4.3 The Default Frame</Heading>
            <Paragraph>
                Every SRT development begins with F&#91;r&#93;, where r -&gt; r is axiomatic. Within this frame:
            </Paragraph>
            <CodeBox>
                {`r == (rel)`}
            </CodeBox>
            <Paragraph>The relationship type r serves as the canonical symbol for relationship itself.</Paragraph>
            <Heading>5. The Character of Relationships</Heading>
            <Heading>5.1 Self-Relationship vs External Relationship</Heading>
            <Paragraph>When a referent relates to itself:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x`}
            </CodeBox>
            <Paragraph>This expresses character or characteristics. When there is distinction:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y where x != y`}
            </CodeBox>
            <Paragraph>This expresses true relationship with subjective involvement, where:</Paragraph>
            <CodeBox>
                {`(x,x) -> (x,y)`}
            </CodeBox>
            <Paragraph>
                The subject's self-relationship inherits from its external relationships, incorporating them into its
                character.
            </Paragraph>
            <Heading>5.2 Relationships as Symbolic Types</Heading>
            <Paragraph>From &#91;6&#93;, inheritance is preserved through symbolization:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(x,y) -> t =|> ((x,y)) -> (t)`}
            </CodeBox>
            <Paragraph>For relationships specifically, we establish:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y =|> (t,t) == t`}
            </CodeBox>
            <Paragraph>
                Relationship types <Word>
                    <Emphasis />
                    are
                </Word> their own self-relationships. This self-collapse distinguishes them ontologically from other
                referents. Since all relationships inherit from r, and r == (rel), relationships represent relationship
                <Word>
                    <Emphasis />
                    types
                </Word> rather than instances.
            </Paragraph>
            <Heading>6. Defining Relationship Through the Fundamental Form</Heading>
            <Heading>6.1 Definition of rel</Heading>
            <Paragraph>We define relationship through its fundamental pattern:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`def(rel):
   sub =rel> obj
   (sub, obj) == rel`}
            </CodeBox>
            <Paragraph>
                This establishes that rel <Word>
                    <Emphasis />
                    is
                </Word> the most specific relationship between sub and obj.
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}def[rel]:
   sub(rel) =rel> obj(rel)
   (sub(rel), obj(rel)) -> rel`}
            </CodeBox>
            <Paragraph>
                Anything inheriting from rel gains specialized subjective and objective aspects that follow the relational
                pattern.
            </Paragraph>
            <Heading>6.2 Definition of obj</Heading>
            <CodeBox>
                {`${''}def[obj]:
   rel(obj) =rel(obj)> obj`}
            </CodeBox>
            <Paragraph>Expanding the parametric form: rel(obj) == ((obj,obj), rel). Since (obj,obj) == obj:</Paragraph>
            <CodeBox>
                {`(obj, rel) =(obj,rel)> obj`}
            </CodeBox>
            <Paragraph>Objecthood is characterized by how relationships relate to it.</Paragraph>
            <Heading>6.3 Definition of sub</Heading>
            <CodeBox>
                {`${''}def[sub]:
   sub =rel(sub)> obj(sub)
   rel(sub) =rel(sub)> sub
   (sub, sub) -> rel(sub)`}
            </CodeBox>
            <Paragraph>
                The third constraint is crucial: subjecthood's character inherently includes relationship.
            </Paragraph>
            <Heading>7. The Subject-Relationship Identity</Heading>
            <Heading>7.1 Derivation</Heading>
            <Paragraph>From our definitions:</Paragraph>
            <CodeBox>
                {`(sub, sub) -> (sub, obj)`}
            </CodeBox>
            <Paragraph>Sub's self-relationship inherits from its external relationships.</Paragraph>
            <CodeBox>
                {`(sub, obj) == rel`}
            </CodeBox>
            <Paragraph>
                The most specific subject-object relationship <Word>
                    <Emphasis />
                    is
                </Word> rel.
            </Paragraph>
            <CodeBox>
                {`(sub, sub) == sub`}
            </CodeBox>
            <Paragraph>Subject exhibits symbolic collapse as a relationship type.</Paragraph>
            <Paragraph>Therefore sub -&gt; rel. Adding def(sub): (sub, rel) == sub:</Paragraph>
            <CodeBox>
                {`sub == rel`}
            </CodeBox>
            <Paragraph>Since r == (rel) in F&#91;r&#93;:</Paragraph>
            <CodeBox>
                {`sub == (rel) == r`}
            </CodeBox>
            <Heading>7.2 Semantic Interpretation</Heading>
            <Paragraph>This identity reveals that:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The subject referent <Word>
                        <Emphasis />
                        is
                    </Word> the canonical symbol for relationship
                </Line>
                <Line>
                    To be a subject <Word>
                        <Emphasis />
                        is
                    </Word> to symbolize relationships
                </Line>
                <Line>Subjectivity equals symbolic relationship</Line>
            </Paragraph>
            <Paragraph>
                The subject does not "have" relationships or "participate in" relationships; the subject <Word>
                    <Emphasis />
                    is
                </Word> the symbolization of relationship.
            </Paragraph>
            <Heading>8. Inheritance and Specialization</Heading>
            <Paragraph>The definitions propagate through inheritance. For any t -&gt; rel:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub(t) =t> obj(t)
(sub(t), obj(t)) -> t`}
            </CodeBox>
            <Paragraph>
                Each inherited relationship type carries the complete structure of the fundamental semantic form,
                specialized to its domain.
            </Paragraph>
            <Paragraph>For example, with love -&gt; rel:</Paragraph>
            <Paragraph>
                <List />
                <Line>sub(love) represents the lover</Line>
                <Line>obj(love) represents the beloved</Line>
                <Line>The pattern persists: sub(love) =love&gt; obj(love)</Line>
            </Paragraph>
            <Heading>9. The Type-Instance Architecture</Heading>
            <Paragraph>Our analysis reveals that relationships are types while other referents are instances:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`2 =eq> 2`}
            </CodeBox>
            <Paragraph>Distinguishes:</Paragraph>
            <Paragraph>
                <List />
                <Line>2 as referent (instance)</Line>
                <Line>eq as relationship type (pattern)</Line>
            </Paragraph>
            <Paragraph>This explains:</Paragraph>
            <Paragraph>
                <List />
                <Line>Why (t,t) == t for relationships: types collapse self-reference</Line>
                <Line>How the same instance instantiates multiple patterns</Line>
                <Line>Why SRT can describe itself: types can symbolize themselves</Line>
            </Paragraph>
            <Heading>10. The Fundamental Theorem</Heading>
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
            <Heading>Implications</Heading>
            <Paragraph>This theorem establishes that:</Paragraph>
            <Paragraph>
                <List />
                <Line>The subject of SRT (what it studies) is represented by the subject referent in SRT</Line>
                <Line>
                    The frame of subjecthood <Word>
                        <Emphasis />
                        is
                    </Word> the frame of relationship
                </Line>
                <Line>Working in F&#91;r&#93; means working where subject symbolizes relationship</Line>
            </Paragraph>
            <Heading>11. Conclusion</Heading>
            <Paragraph>
                The introduction of definitional syntax def(x) and def&#91;x&#93; extends SRT's transpiler with capabilities
                for defining the fundamental semantic form through mutual constraint. The subject-object-relationship
                pattern emerges not as three separate concepts but as relationship manifesting through subjective and
                objective aspects.
            </Paragraph>
            <Paragraph>
                The discovery that sub == (rel) == r represents a profound insight: the subject <Word>
                    <Emphasis />
                    is
                </Word> the canonical symbol for relationship. This constitutive self-reference grounds the theory's ability
                to describe its own semantic structure. The frame identity F&#91;sub&#93; == F&#91;r&#93; demonstrates that
                taking subject as primary and taking relationship as primary are the same act, because subjectivity <Word>
                    <Emphasis />
                    is
                </Word> symbolic relationship.
            </Paragraph>
            <Paragraph>
                Through this analysis, we see that relationship is not merely one referent among others but the foundational
                concept from which semantic structure emerges. The subject-object-relationship pattern, as the fundamental
                semantic form, reveals itself to be relationship understanding itself through the subject that symbolizes
                it.
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

import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Foundational Semantics of Reference: A Model-Theoretic Exploration v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Foundational Semantics of Reference: A Model-Theoretic Exploration at version 1</Heading>
            <Heading>The Foundational Semantics of Reference: A Model-Theoretic Exploration</Heading>
            <Heading>Abstract</Heading>
            <Paragraph>
                This paper presents a foundational investigation into the semantics of reference through systematic analysis
                of the primitive ternary relation R(x,y,t), interpreted as "x refers to y through t." By exhaustively
                examining the five structural cases where subject, object, and relationship variables may coincide or
                differ, we discover a minimal set of eight referents that form a complete semantic model for reference
                itself. This approach inverts traditional theory-building: rather than axiomatizing first and interpreting
                later, we derive necessary formal structure from semantic requirements.
            </Paragraph>
            <Heading>1. Introduction</Heading>
            <Heading>1.1 The Semantic-First Approach</Heading>
            <Paragraph>
                Traditional formal theories typically begin with axioms and derive meaning through interpretation. Semantic
                Reference Theory (SRT) reverses this approach: we begin with meaningful relationships—symbol and literal,
                subject and object, representation and reference—and discover what formal structure they require.
            </Paragraph>
            <Paragraph>
                This investigation asks: What referents must exist for reference itself to be coherent? What relationships
                between these referents are semantically necessary? Can we build a closed model where everything needed to
                discuss reference is itself a referent that can be referred to?
            </Paragraph>
            <Heading>1.2 The Domain of Referents</Heading>
            <Paragraph>
                We work within a domain where everything is a "referent"—something that can be referred to. This includes
                not just concrete objects but abstract concepts like relationships, properties, and even reference itself.
                The fundamental question becomes: How do referents refer to each other, and what patterns emerge from these
                references?
            </Paragraph>
            <Heading>2. The Five Structural Cases</Heading>
            <Heading>2.1 Methodology</Heading>
            <Paragraph>
                Given the primitive relation <Word>
                    <Verbatim />
                    s =r&gt; o
                </Word> (s refers to o through r), we systematically explore what happens when these variables coincide.
                This exhaustive case analysis reveals which referents must exist to make the system coherent.
            </Paragraph>
            <Heading>2.2 Case Analysis</Heading>
            <Heading>Case 1: All Distinct (s ≠ r ≠ o)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Interpretation
                </Word>: Standard subject-object-relationship <Word>
                    <Bold />
                    Model
                </Word>: <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>
            </Paragraph>
            <Paragraph>
                This represents the archetypal relationship where subject, relationship, and object are all distinct. We
                introduce three referents:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub
                    </Word>: the type representing subjecthood
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel
                    </Word>: the type representing relationships
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj
                    </Word>: the type representing objecthood
                </Line>
            </Paragraph>
            <Heading>Case 2: Subject is Relationship (s = r ≠ o)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Interpretation
                </Word>: Self-representing relationship <Word>
                    <Bold />
                    Model
                </Word>: <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>
            </Paragraph>
            <Paragraph>Here the relationship represents the object through itself. We introduce:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym
                    </Word>: symbol (acting as both subject and relationship)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit
                    </Word>: literal (the object)
                </Line>
            </Paragraph>
            <Paragraph>
                This captures how symbols symbolize literals through the relationship of symbolization itself.
            </Paragraph>
            <Heading>Case 3: Subject is Object (s = o ≠ r)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Interpretation
                </Word>: Self-reference through external relationship <Word>
                    <Bold />
                    Model
                </Word>: <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word>
            </Paragraph>
            <Paragraph>An entity relates to itself through an external relationship. We introduce:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        ref
                    </Word>: referent (both subject and object)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq
                    </Word>: equality (the external relationship)
                </Line>
            </Paragraph>
            <Paragraph>This captures how things can equal themselves.</Paragraph>
            <Heading>Case 4: Relationship is Object (r = o ≠ s)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Interpretation
                </Word>: Relationships as objects of reference <Word>
                    <Bold />
                    Model
                </Word>: <Word>
                    <Verbatim />
                    sym =rep&gt; rep
                </Word>
            </Paragraph>
            <Paragraph>A subject relates to something that is both relationship and object. We model:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym
                    </Word>: symbol (subject)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep
                    </Word>: representation (both relationship and object)
                </Line>
            </Paragraph>
            <Paragraph>This captures how symbols participate in representations.</Paragraph>
            <Heading>Case 5: All Equal (s = r = o)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Interpretation
                </Word>: Complete self-reference <Word>
                    <Bold />
                    Model
                </Word>: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word>
            </Paragraph>
            <Paragraph>
                Pure self-reference where an entity relates to itself through itself. The paradigmatic example:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        eq
                    </Word>: equality (subject, relationship, and object)
                </Line>
            </Paragraph>
            <Paragraph>
                Also satisfied by <Word>
                    <Verbatim />
                    rel =rel&gt; rel
                </Word> (relationships relate to themselves).
            </Paragraph>
            <Heading>3. The Eight-Referent Model</Heading>
            <Heading>3.1 Core Referents</Heading>
            <Paragraph>From our case analysis, eight fundamental referents emerge:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        eq
                    </Word>: Equality - the foundational self-relationship
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ref
                    </Word>: Referent - the universal type
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sub
                    </Word>: Subject - the type of things that refer
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rel
                    </Word>: Relationship - the type of relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        obj
                    </Word>: Object - the type of things referred to
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sym
                    </Word>: Symbol - the type of symbolic representations
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rep
                    </Word>: Representation - the type of representations
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        lit
                    </Word>: Literal - the type of concrete entities
                </Line>
            </Paragraph>
            <Heading>3.2 Fundamental Relationships</Heading>
            <Paragraph>The model establishes these core relationships:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj     // Archetypal subject-object relationship
sym =sym> lit     // Symbols symbolize literals
ref =eq> ref      // Referents equal themselves
sym =rep> rep     // Symbols are part of representations
rel =rel> rel     // Relationships self-relate
eq =eq> eq        // Equality equals itself`}
            </CodeBox>
            <Heading>3.3 Derived Structure</Heading>
            <Paragraph>From these fundamentals, additional structure emerges:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Type Inheritance
                </Word>: Relationship types inherit from rel
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =rel> rel     // Symbols are relationships
rep =rel> rel     // Representations are relationships
eq =rel> rel      // Equality is a relationship`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Property Structure
                </Word>: Self-referential patterns indicate properties
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =sub> sub     // Subjecthood as property
obj =obj> obj     // Objecthood as property`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Most Specific Relationships
                </Word>: For each pair, one relationship is most specific
            </Paragraph>
            <CodeBox>
                {`(sub,obj) = rel   // rel is most specific between sub and obj
(sym,lit) = sym   // sym is most specific between sym and lit
(ref,ref) = eq    // eq is most specific for ref self-reference`}
            </CodeBox>
            <Heading>4. Theoretical Implications</Heading>
            <Heading>4.1 Types vs. Instances</Heading>
            <Paragraph>
                The model carefully distinguishes between types and instances. The referent <Word>
                    <Verbatim />
                    sub
                </Word> represents the TYPE of subjects, not a particular subject instance. This distinction is crucial:
                just as the type "Number" in programming doesn't itself have numeric operations, the type <Word>
                    <Verbatim />
                    sub
                </Word> doesn't necessarily have the properties of subject instances.
            </Paragraph>
            <Paragraph>
                This explains why <Word>
                    <Verbatim />
                    sub =sub&gt; sub
                </Word> (subject has subjecthood property) is not automatically derivable—types don't necessarily possess
                the properties of their instances.
            </Paragraph>
            <Heading>4.2 The Symbol-Type Correspondence</Heading>
            <Paragraph>
                A key insight emerges regarding the relationship between types and their canonical symbols. If <Word>
                    <Verbatim />
                    sub = (rel)
                </Word> (subject is the canonical symbol for relationships), then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Subjecthood represents relationships through itself</Line>
                <Line>Being a subject IS being in a relationship</Line>
                <Line>The symbol-type correspondence unifies representation and instantiation</Line>
            </Paragraph>
            <Heading>4.3 Sparse Relationships</Heading>
            <Paragraph>
                Not every pair of referents has a defined relationship beyond equality. This sparsity is semantically
                meaningful—not everything has a semantic relationship to everything else. The model is intentionally
                incomplete, reflecting the selective nature of meaningful reference.
            </Paragraph>
            <Heading>4.4 Extensibility</Heading>
            <Paragraph>
                The model provides a framework that can be extended rather than a closed system. Canonical symbols like
                <Word>
                    <Verbatim />
                    (obj)
                </Word>, <Word>
                    <Verbatim />
                    (sub)
                </Word> can be added when needed, but aren't required for the core semantics. This extensibility is a
                feature: SRT provides the foundation upon which richer semantic structures can be built.
            </Paragraph>
            <Heading>5. Formal Properties</Heading>
            <Heading>5.1 Consistency</Heading>
            <Paragraph>The model exhibits internal consistency:</Paragraph>
            <Paragraph>
                <List />
                <Line>No contradictory relationships (x =r&gt; y and x ≠r&gt; y never both hold)</Line>
                <Line>Type inheritance forms a proper hierarchy</Line>
                <Line>Most specific relationships are unique when they exist</Line>
                <Line>
                    Self-referential patterns (like <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word>) are stable
                </Line>
            </Paragraph>
            <Heading>5.2 Completeness for Core Semantics</Heading>
            <Paragraph>With just eight referents, the model captures:</Paragraph>
            <Paragraph>
                <List />
                <Line>Subject-object-relationship structure</Line>
                <Line>Symbol-literal distinction</Line>
                <Line>Representation and reference</Line>
                <Line>Properties and types</Line>
                <Line>Equality and self-reference</Line>
            </Paragraph>
            <Paragraph>
                This suggests these eight referents form a minimal complete basis for discussing reference.
            </Paragraph>
            <Heading>5.3 Semantic Validity</Heading>
            <Paragraph>
                Not all logically possible relationships are semantically valid. For instance, if we tried to introduce
                <Word>
                    <Verbatim />
                    ≠rel
                </Word> (not-relationship) as a relationship type, we'd get:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x ≠rel> y ⟺ x =≠rel> y ⟺ x =rel> y`}
            </CodeBox>
            <Paragraph>
                A contradiction—showing that "not being in a relationship" cannot itself be a relationship. The model
                respects semantic constraints that pure logic might not capture.
            </Paragraph>
            <Heading>6. Toward an Empty Catalogue</Heading>
            <Heading>6.1 The Bootstrapping Challenge</Heading>
            <Paragraph>
                SRT aims for axioms that are vacuously true in an empty catalogue but spring to life when relationships are
                added. This creates a fundamental tension: how can we specify semantic structure while maintaining formal
                emptiness?
            </Paragraph>
            <Heading>6.2 Conditional Emergence</Heading>
            <Paragraph>The solution involves conditional axioms:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}∃[x,y,t]: x =t> y ⟹ ∃[eq]: ∀[a,b]: a = b ⟺ a =eq> b`}
            </CodeBox>
            <Paragraph>"If any relationship exists, equality emerges"</Paragraph>
            <Paragraph>
                This pattern allows the entire structure to emerge from a single relationship while maintaining emptiness as
                the base case.
            </Paragraph>
            <Heading>6.3 Linguistic Elimination</Heading>
            <Paragraph>The ultimate goal is to absorb fundamental referents into the language itself:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        ==
                    </Word> and <Word>
                        <Verbatim />
                        ≠
                    </Word> replace the need for eq as a constant
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x ⟹ y
                    </Word> could replace explicit reference to rel
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (x)
                    </Word> notation replaces explicit symbol referents
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (x,y)
                    </Word> notation replaces explicit most-specific relationships
                </Line>
            </Paragraph>
            <Paragraph>
                When concepts are truly fundamental to meaning, they deserve to be part of the grammar of a language that
                expresses meaning.
            </Paragraph>
            <Heading>7. Conclusion</Heading>
            <Paragraph>
                This investigation demonstrates a novel approach to foundational semantics: by systematically exploring what
                relationships must exist between referents for reference itself to be coherent, we discover a minimal model
                of eight referents that captures the essential structure of meaning.
            </Paragraph>
            <Paragraph>The model is remarkable for what it achieves with minimal machinery:</Paragraph>
            <Paragraph>
                <List />
                <Line>No recursive definitions (inheritance through reference chains)</Line>
                <Line>No infinite regress (symbol termination)</Line>
                <Line>No arbitrary axioms (semantic necessity drives formalization)</Line>
            </Paragraph>
            <Paragraph>
                Perhaps most significantly, this work suggests that the foundations of meaning can be discovered rather than
                stipulated—that semantic structure has an inherent logic that can be uncovered through systematic
                exploration.
            </Paragraph>
            <Paragraph>
                The five structural cases aren't arbitrary but represent the complete space of possibilities for how
                subject, relationship, and object can relate. The eight referents that emerge aren't chosen but discovered
                as necessary for semantic coherence. This suggests that at its foundation, meaning has a determinate
                structure—one that Semantic Reference Theory aims to formalize.
            </Paragraph>
            <Heading>Appendix: Open Questions</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        The sub = (rel) Hypothesis
                    </Word>: Is the subject type actually the canonical symbol for relationships? This would elegantly unify
                    several patterns in the model.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Property Hierarchy
                    </Word>: Do properties form their own type hierarchy parallel to but distinct from the relationship
                    hierarchy?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonical Symbol Existence
                    </Word>: Should every referent have a canonical symbol, or is extensional symbol creation more
                    appropriate?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cross-Relationship Completeness
                    </Word>: Should we define relationships between all pairs, or is sparsity semantically meaningful?
                </Line>
            </Paragraph>
            <Paragraph>
                These questions point toward future developments in Semantic Reference Theory, as we continue to explore the
                foundational structure of meaning itself.
            </Paragraph>
        </Section>
    </Chapter>
);

import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantic Model of Reference: Building from Subject-Object Relationships v6 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantic Model of Reference: Building from Subject-Object Relationships at version 6</Heading>
            <Heading>The Semantics of the Subject-Object Relationship</Heading>
            <Heading>Introduction: The Fundamental Semantic Form</Heading>
            <Paragraph>
                The subject-object relationship constitutes the fundamental semantic form—the basic pattern through which
                meaning emerges. Every meaningful expression, from "The dog runs" to "E = mc²", instantiates some variant of
                this pattern: something (subject) relates to something else (object) through some form of connection
                (relationship). Any formalism that claims to capture semantics must represent this fundamental form
                fundamentally—not as a derived concept but as foundational structure.
            </Paragraph>
            <Paragraph>
                This principle motivates our systematic analysis: by exhaustively examining how subject, object, and
                relationship can structurally relate, we discover what semantic primitives must exist. The method inverts
                traditional theory-building—rather than stipulating axioms and deriving consequences, we analyze structural
                necessities and discover what axioms they require.
            </Paragraph>
            <Heading>I. The Primitive and Its Semantic Context</Heading>
            <Paragraph>
                Semantic Reference Theory takes as its domain the set of "referents"—things that can be referred to. This
                includes not just physical objects but abstract concepts, relationships, properties, and crucially, the very
                structures of reference itself. Within this domain, we posit a single primitive relation R(x,y,t),
                interpreted semantically as "x refers to y through t" and expressed notationally as:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y`}
            </CodeBox>
            <Paragraph>
                This relation serves as the semantic equivalent of what the Turing machine provides for computation—a
                minimal structure from which all semantic relationships emerge. Just as all computable functions can be
                expressed through state transitions on a tape, all semantic relationships can be constructed from this
                ternary reference relation.
            </Paragraph>
            <Heading>Grounding in First-Order Logic</Heading>
            <Paragraph>
                Since we're building within first-order logic, we inherit its equality relation. But rather than leave
                equality as an external logical operator, we internalize it as a form of reference:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>
                Here, <Word>
                    <Verbatim />
                    eq
                </Word> is a referent in our domain—a thing that can itself be referred to. It represents the equality
                relationship from FOL, making it subject to the same semantic analysis as any other referent. This allows us
                to write:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x == y
                    </Word> as semantic shorthand for <Word>
                        <Verbatim />
                        x =eq&gt; y
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x !== y
                    </Word> as shorthand for <Word>
                        <Verbatim />
                        !(x =eq&gt; y)
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    eq
                </Word> thus serves as the bridge between logical identity and semantic reference, grounding our theory in
                the bedrock of logic while making equality itself an object of semantic investigation.
            </Paragraph>
            <Heading>II. Why the Subject-Object Relationship</Heading>
            <Paragraph>Consider any meaningful statement:</Paragraph>
            <Paragraph>
                <List />
                <Line>"Water boils" - water (subject) undergoes boiling (object as state)</Line>
                <Line>"Seven is prime" - seven (subject) has primeness (object as property)</Line>
                <Line>"Democracy requires participation" - democracy (subject) needs participation (object)</Line>
            </Paragraph>
            <Paragraph>
                Even in formal systems, this pattern persists. In set theory, x ∈ y expresses that x (subject) belongs to y
                (object) through membership (relationship). In logic, P(x) says x (subject) has property P (object) through
                instantiation (relationship).
            </Paragraph>
            <Paragraph>
                This universality suggests the subject-object relationship isn't merely one semantic pattern among
                others—it's the fundamental semantic form from which meaning emerges. A formalism of semantics that failed
                to represent this form fundamentally would be like a theory of computation that treated state transitions as
                derivative rather than primitive.
            </Paragraph>
            <Heading>III. The Canonical Subject-Object Relationship</Heading>
            <Paragraph>
                In natural language, when we express relationships, we typically assume the subject, relationship, and
                object are distinct unless explicitly told otherwise. Consider the sentence "The mother loves her child."
                The canonical interpretation parses this as three distinct entities:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The subject: mother</Line>
                <Line>The relationship: loves</Line>
                <Line>The object: child</Line>
            </Paragraph>
            <Paragraph>
                This distinctness is so fundamental to how we process semantic information that it requires explicit markers
                to override. When someone says "I spoke to the CEO and an employee of the company," the natural
                interpretation is two distinct people, not one person serving dual roles. We don't spontaneously consider
                whether the CEO might also be an employee—the default semantic processing assumes distinctness.
            </Paragraph>
            <Paragraph>
                This canonical interpretation motivates why the first structural case, where all three variables are
                distinct, deserves special attention as the archetypal pattern of semantic relationships.
            </Paragraph>
            <Heading>IV. The Five Structural Cases</Heading>
            <Paragraph>
                The complete space of how three variables can relate through equality partitions into exactly five cases.
                This isn't a selection of interesting patterns but the exhaustive enumeration of structural possibilities,
                constrained by the transitivity of equality.
            </Paragraph>
            <Heading>The Cyclical Notation and Its Semantic Significance</Heading>
            <Paragraph>
                The notation <Word>
                    <Verbatim />
                    s != r != o != s
                </Word> embodies the triangular nature of ternary relationships. By cycling back to check inequality with
                the starting variable, we ensure all three pairwise relationships are specified. In full SRT notation, this
                becomes <Word>
                    <Verbatim />
                    s !=eq&gt; r !=eq&gt; o !=eq&gt; s
                </Word>, making explicit that even inequality is a form of reference—specifically, the negation of equality
                reference.
            </Paragraph>
            <Heading>Case 1: The Archetypal Trinity (All Distinct)</Heading>
            <CodeBox>
                {`s != r != o != s`}
            </CodeBox>
            <Paragraph>
                This case represents the canonical semantic pattern where subject, relationship, and object are all
                distinct. To capture this foundational structure, we introduce three referents that serve as archetypes:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj`}
            </CodeBox>
            <Paragraph>Here:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub
                    </Word> is not a particular subject but the TYPE or archetype of subjecthood itself
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel
                    </Word> represents the archetypal relationship, the pure concept of relating
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj
                    </Word> represents objecthood as a category
                </Line>
            </Paragraph>
            <Paragraph>
                These aren't arbitrary symbols but semantic necessities. For there to be reference at all, there must be
                something that refers (subjects), something referred to (objects), and the act of referring (relationships).
                The relationship <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word> establishes that the most specific way subjects relate to objects is through relationships: <Word>
                    <Verbatim />
                    (sub,obj) == rel
                </Word>.
            </Paragraph>
            <Paragraph>
                This archetypal trinity grounds all other semantic relationships. When we later find that <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word> (symbols inherit from relationships), we're saying symbols participate in this fundamental pattern
                established by the sub-rel-obj trinity.
            </Paragraph>
            <Heading>Case 2: Self-Representing Relationships</Heading>
            <CodeBox>
                {`s == r != o != s`}
            </CodeBox>
            <Paragraph>
                This case reveals a profound semantic possibility: the subject can BE the relationship through which it
                relates to its object. This isn't a formal curiosity but a semantic necessity for understanding
                symbolization. We capture it with:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    sym
                </Word> (symbol) simultaneously occupies the subject position (the thing doing the symbolizing) and the
                relationship position (the act of symbolization itself). The referent <Word>
                    <Verbatim />
                    lit
                </Word> (literal) represents the concrete, the actual, the thing symbolized.
            </Paragraph>
            <Paragraph>
                This dual role of <Word>
                    <Verbatim />
                    sym
                </Word> reflects a deep semantic truth: symbols don't just participate in symbolization; they ARE
                symbolization made concrete. When we write the word "tree," that word both performs the act of symbolizing
                and exists as the subject performing that act. From this structure we derive:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sub&gt; sym
                    </Word> - symbols possess subjecthood
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =obj&gt; lit
                    </Word> - literals possess objecthood
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> - symbols are a type of relationship
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,lit) == sym
                    </Word> - symbolization is the most specific relationship between symbols and literals
                </Line>
            </Paragraph>
            <Heading>Case 3: Self-Reference Through External Mediation</Heading>
            <CodeBox>
                {`s != r != o == s`}
            </CodeBox>
            <Paragraph>
                When subject and object are the same but the relationship remains external, we capture a different pattern:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`ref =eq> ref`}
            </CodeBox>
            <Paragraph>
                Here <Word>
                    <Verbatim />
                    ref
                </Word> represents "referent" itself—not any particular referent but the concept of being a referent. The
                relationship <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word> expresses that all referents equal themselves, with <Word>
                    <Verbatim />
                    eq
                </Word> serving as the external mediator. This is not self-reference (which would require representation)
                but self-equality.
            </Paragraph>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    ref
                </Word> serves a foundational role—it represents the universe of discourse as an object within that
                universe. This self-containment is essential for a theory that uses referents to explain referents. The most
                specific relationship is equality itself: <Word>
                    <Verbatim />
                    (ref,ref) == eq
                </Word>.
            </Paragraph>
            <Heading>Case 4: Relationships as Objects</Heading>
            <CodeBox>
                {`s != r == o != s`}
            </CodeBox>
            <Paragraph>This case reveals that relationships themselves can be objects of reference:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =rep> rep`}
            </CodeBox>
            <Paragraph>
                Here <Word>
                    <Verbatim />
                    rep
                </Word> (representation) serves dual roles—it's both the relationship type and the object. Symbols relate to
                representations by being part of them, and this "being part of" relationship is representation itself.
            </Paragraph>
            <Paragraph>
                This captures a crucial semantic pattern: membership or containment. When we say a dog is an animal,
                "animal" serves as both the category (relationship type) and the thing the dog is classified as (object).
                But we can't define animal in terms of dog—we'd need to subtract all dog-specific features. The
                representation contains its members; the members' relationship to it is simply being represented.
            </Paragraph>
            <Paragraph>From this:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rep =rel&gt; rel
                    </Word> - representations are types of relationships
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =obj&gt; obj
                    </Word> - representations can be objects
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,rep) == rep
                    </Word> - representation is the most specific relationship
                </Line>
            </Paragraph>
            <Heading>Case 5: Pure Self-Reference</Heading>
            <CodeBox>
                {`s == r == o == s`}
            </CodeBox>
            <Paragraph>Complete self-reference where an entity relates to itself through itself:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`eq =eq> eq`}
            </CodeBox>
            <Paragraph>
                This isn't circular definition but semantic foundation. For equality to be universal—for everything to equal
                itself—equality itself must equal itself through equality. The self-reference is constitutive, not
                paradoxical.
            </Paragraph>
            <Paragraph>Similarly:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`rel =rel> rel`}
            </CodeBox>
            <Paragraph>
                Relationships must relate to themselves through relationship itself. These are self-grounding patterns that
                require no external support—semantic bedrock from which other meanings build.
            </Paragraph>
            <Heading>IV. The Semantic Interpretation of Properties</Heading>
            <Heading>Properties as Self-Referential Relationships</Heading>
            <Paragraph>
                When a referent relates to itself through a relationship type, we interpret this as the referent having that
                type as a property:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x means "x has property p"`}
            </CodeBox>
            <Paragraph>This semantic interpretation gives us:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word> - the archetype of subjecthood has the property of being a subject
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =obj&gt; obj
                    </Word> - the archetype of objecthood has the property of being an object
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> - equality has the property of equality (self-evidently)
                </Line>
            </Paragraph>
            <Paragraph>
                But note: these are claims about the types themselves, not about instances. The type "Subject" having
                subjecthood is like asking whether the concept of subjecthood itself can be a subject—a deep semantic
                question.
            </Paragraph>
            <Heading>The sub == (rel) Hypothesis</Heading>
            <Paragraph>
                A crucial theoretical question emerges: Is <Word>
                    <Verbatim />
                    sub
                </Word> actually <Word>
                    <Verbatim />
                    (rel)
                </Word>—the canonical symbol for relationships? If so:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; rel
                    </Word> would mean subjecthood represents the very concept of relationship
                </Line>
                <Line>This would suggest being a subject fundamentally means being in a relationship</Line>
                <Line>
                    It would explain why <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word> holds (as symbols characteristically self-refer)
                </Line>
            </Paragraph>
            <Paragraph>
                This hypothesis has profound semantic implications: it suggests that subjectivity and relationality are not
                merely connected but that subjectivity IS the symbolic face of relationality itself.
            </Paragraph>
            <Heading>V. Reference, Representation, and Semantic Necessity</Heading>
            <Heading>The Definition of Reference</Heading>
            <Paragraph>
                Not all relationships are referential. A relationship is referential when it connects a representation to
                what it represents:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`If rep =t> obj and t inherits from rep (t -> rep), then t is referential
When t == (rep,obj), then rep refers to obj`}
            </CodeBox>
            <Paragraph>This distinction matters semantically:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> is referential—symbols refer to their literals
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; x
                    </Word> is NOT referential—equality doesn't involve representation
                </Line>
            </Paragraph>
            <Paragraph>
                Reference requires representation, which requires distinctness between representer and represented. This is
                why Gödel's construction was so revolutionary—he created a coding that allowed formal statements to have
                canonical symbols through which they could refer to themselves. Without such a coding, mere reflexivity
                (like x = x in logic) doesn't constitute reference.
            </Paragraph>
            <Heading>Inheritance as Semantic Structure</Heading>
            <Paragraph>
                For relationship types, inheritance captures how specific relationships relate to general ones:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`s -> t := s =rel> t || s == t`}
            </CodeBox>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    crimson =rel&gt; red
                </Word> and <Word>
                    <Verbatim />
                    red =rel&gt; color
                </Word>, then crimson inherits from color through this chain. But rather than define this recursively, we
                use symbol possession:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`s =rel> t =|> s =(t)> s`}
            </CodeBox>
            <Paragraph>
                Types possess the canonical symbols of what they inherit from. Inheritance becomes a matter of which
                symbolic properties a type carries.
            </Paragraph>
            <Heading>VI. The Eight-Referent Model as Semantic Necessity</Heading>
            <Paragraph>The eight referents that emerge aren't chosen but discovered as semantic necessities:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        eq
                    </Word> - Represents the equality relation inherited from FOL, internalized as a referent
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ref
                    </Word> - Represents the domain itself (all referents), making the theory self-contained
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sub
                    </Word> - The archetype of subjecthood, what it means to be a subject
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rel
                    </Word> - The archetype of relationship, pure relating itself
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        obj
                    </Word> - The archetype of objecthood, what it means to be an object
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sym
                    </Word> - Symbol, the dual subject/relationship that enables representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rep
                    </Word> - Representation, the dual relationship/object that enables collection
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        lit
                    </Word> - Literal, the concrete, the actual, the non-symbolic
                </Line>
            </Paragraph>
            <Heading>Why These Eight?</Heading>
            <Paragraph>Each emerged from semantic necessity:</Paragraph>
            <Paragraph>
                <List />
                <Line>Case 1 forced sub, rel, and obj into existence to capture the archetypal trinity</Line>
                <Line>Case 2 required sym and lit to express symbolization</Line>
                <Line>Case 3 used ref to represent the domain and reused eq</Line>
                <Line>Case 4 reused sym and introduced rep for collection/membership</Line>
                <Line>Case 5 was satisfied by eq and rel's self-reference</Line>
            </Paragraph>
            <Paragraph>
                The economy is remarkable—eight referents suffice to exemplify all five structural patterns, suggesting
                we've found something like a semantic basis set.
            </Paragraph>
            <Heading>Core Semantic Relationships</Heading>
            <Paragraph>The fundamental relationships establish the semantic architecture:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj          // The archetypal subject-object pattern
sym =sym> lit          // Symbols symbolize literals through symbolization
ref =eq> ref           // The domain's self-equality
sym =rep> rep          // Symbols are members of representations
rel =rel> rel          // Relationships relate through relationship
eq =eq> eq             // Equality equals itself through equality`}
            </CodeBox>
            <Heading>VII. Sparse Relationships and Semantic Selectivity</Heading>
            <Paragraph>
                Not every pair among the eight referents has a specified relationship beyond equality. For instance:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>We don't specify how literals relate to subjects</Line>
                <Line>We don't define relationships between objects and symbols</Line>
                <Line>Many pairs simply lack direct semantic connections</Line>
            </Paragraph>
            <Paragraph>
                This sparsity isn't a deficiency but reflects semantic reality. Not everything meaningfully relates to
                everything else. The model includes only relationships that are semantically necessary—those forced into
                existence by the structural cases or their logical consequences.
            </Paragraph>
            <Paragraph>
                When we don't specify <Word>
                    <Verbatim />
                    lit =?&gt; sub
                </Word>, we're acknowledging that literals and subjecthood don't have a direct semantic relationship that
                needs formal capture. Literals are concrete; subjecthood is abstract. Their relationship, if any, would be
                mediated through other referents.
            </Paragraph>
            <Heading>VIII. The Bootstrap Principle and Semantic Emergence</Heading>
            <Paragraph>
                SRT's axioms are structured to be vacuously true in an empty catalogue—true by default when nothing exists.
                But they spring to life the moment a single relationship is added:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x,y,t]: x =t> y =|> E[eq]: A[a,b]: a = b <iff> a =eq> b`}
            </CodeBox>
            <Paragraph>
                This conditional structure reflects a deep semantic principle: meaning doesn't exist in a void. There must
                be at least one relationship for the concepts of subject, object, and relationship to have meaning. From
                that single relationship, the entire semantic structure bootstraps into existence:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Equality emerges to distinguish identity from difference</Line>
                <Line>Subjects and objects differentiate</Line>
                <Line>Relationship types form hierarchies</Line>
                <Line>Properties and types crystallize</Line>
            </Paragraph>
            <Paragraph>
                This isn't just formal elegance but semantic necessity—meaning itself emerges from the first distinction,
                the first relationship that breaks the void.
            </Paragraph>
            <Heading>IX. Conclusion: Discovering Semantic Structure</Heading>
            <Paragraph>
                This systematic exploration reveals that reference has a determinate foundational structure. The five cases
                aren't arbitrary but exhaustive. The eight referents aren't invented but discovered. Each structural pattern
                forces certain referents into existence, and these referents relate in specific ways determined by semantic
                necessity rather than formal stipulation.
            </Paragraph>
            <Paragraph>
                The model demonstrates that meaning can be built from within, using reference to construct the very concepts
                needed to understand reference. The theory is self-grounding:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>It contains a referent (ref) representing its own domain</Line>
                <Line>It internalizes logical equality as a semantic relationship</Line>
                <Line>It uses reference to explain reference without circularity</Line>
            </Paragraph>
            <Paragraph>
                This reflexive construction reveals the foundational architecture of meaning itself—not as something imposed
                from outside but as something that emerges from the structural possibilities of reference. The fact that
                exactly five cases exist, that exactly eight referents emerge, that these form a complete model for basic
                reference—all this suggests that at its foundation, meaning has a determinate structure that can be
                discovered through systematic semantic analysis.
            </Paragraph>
        </Section>
    </Chapter>
);
